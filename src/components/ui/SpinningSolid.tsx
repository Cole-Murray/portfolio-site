"use client";

import { useEffect, useMemo, useRef } from "react";

import { cn } from "@/lib/cn";
import { SOLID_SHAPES, type SolidShape } from "@/lib/solid-geometry";
import { usePrefersReducedMotion } from "@/lib/usePrefersReducedMotion";

/**
 * Draggable tumbling wireframe, rasterised to SVG polygons by hand.
 *
 * A WebGL renderer would be ~150kB for a couple dozen vertices, so the geometry
 * is perspective-projected here instead. Every face is stroked and none are
 * filled, so the shape reads as hollow and nothing occludes anything — which
 * means no depth sorting, and faces can sit in fixed slots.
 *
 * Orientation lives in refs and the animation mutates DOM attributes directly,
 * so dragging never triggers a React render.
 */

/** Eye distance in normalised units. Lower is a wider, more dramatic lens. */
const CAMERA = 3.4;
const SCALE = 36;

/** Radians per millisecond — one idle revolution in roughly thirteen seconds. */
const SPIN = 0.00048;

/** Roughly a full turn per 570px of horizontal drag. */
const DRAG_RADIANS_PER_PX = 0.011;

/** Stops the solid from being dragged past vertical and reading upside down. */
const MAX_PITCH = 1.15;

/** Ceiling on flick speed, and the time constant it decays back to SPIN over. */
const MAX_FLICK = 0.006;
const FLICK_DECAY_MS = 520;

/** Long frames (background tabs, GC pauses) must not teleport the rotation. */
const MAX_FRAME_MS = 64;

/*
 * A constant roll applied after the spin and pitch, which swings the rotation
 * axis off vertical so the solid tumbles on a diagonal rather than turning like
 * a door. Pitch is draggable; this roll is not.
 */
const TILT_X = 0.3;
const TILT_Z = -0.36;
const COS_TZ = Math.cos(TILT_Z);
const SIN_TZ = Math.sin(TILT_Z);

/** Opening pose — a little off face-on, so the extrusion is legible at rest. */
const INITIAL_YAW = 0.5;

/*
 * Every edge is drawn by both of the faces sharing it, so the stroke stays
 * fully opaque — at any less than that the doubled-up edges read brighter than
 * the rest and the frame looks unevenly lit.
 */
const EDGE_STROKE = "var(--color-illini-orange)";
const EDGE_WIDTH = "0.85";

function clamp(value: number, limit: number): number {
  return Math.min(limit, Math.max(-limit, value));
}

interface SpinningSolidProps {
  shape?: SolidShape;
  className?: string;
}

export function SpinningSolid({
  shape = "block-i",
  className,
}: SpinningSolidProps) {
  const { points, faces } = useMemo(() => SOLID_SHAPES[shape](), [shape]);
  const polygonRefs = useRef<Array<SVGPolygonElement | null>>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const reducedMotion = usePrefersReducedMotion();

  // Orientation outlives the effect so a motion-preference change cannot snap
  // the solid back to its opening pose mid-drag.
  const yawRef = useRef(INITIAL_YAW);
  const pitchRef = useRef(TILT_X);
  const spinRef = useRef(SPIN);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const draw = () => {
      const yaw = yawRef.current;
      const pitch = pitchRef.current;
      const cosY = Math.cos(yaw);
      const sinY = Math.sin(yaw);
      const cosP = Math.cos(pitch);
      const sinP = Math.sin(pitch);

      const projected = points.map(([x, y, z]) => {
        // Spin about the solid's own vertical axis.
        const sx = x * cosY + z * sinY;
        const sz = z * cosY - x * sinY;

        // Then tip that axis over, first forward and then sideways.
        const ty = y * cosP - sz * sinP;
        const tz = y * sinP + sz * cosP;
        const dx = sx * COS_TZ - ty * SIN_TZ;
        const dy = sx * SIN_TZ + ty * COS_TZ;

        const perspective = CAMERA / (CAMERA - tz);
        return {
          x: 50 + dx * perspective * SCALE,
          y: 50 + dy * perspective * SCALE,
        };
      });

      faces.forEach((face, index) => {
        const polygon = polygonRefs.current[index];
        if (!polygon) return;

        polygon.setAttribute(
          "points",
          face
            .map((vertex) => {
              const point = projected[vertex];
              return `${point.x.toFixed(2)},${point.y.toFixed(2)}`;
            })
            .join(" "),
        );
      });
    };

    // Reduced motion stops the idle drift but leaves dragging available, since
    // that rotation only happens when the visitor asks for it.
    const idleSpin = reducedMotion ? 0 : SPIN;
    spinRef.current = idleSpin;

    /*
     * Move and release are tracked on the window rather than the element (or
     * via pointer capture) so a drag that leaves the small square still
     * follows the cursor, and still ends when the button comes up outside it.
     */
    let drag: { pointerId: number; x: number; y: number; time: number } | null =
      null;
    let flick = 0;

    const onPointerMove = (event: globalThis.PointerEvent) => {
      if (drag?.pointerId !== event.pointerId) return;

      const turn = (event.clientX - drag.x) * DRAG_RADIANS_PER_PX;
      yawRef.current += turn;
      pitchRef.current = clamp(
        pitchRef.current + (event.clientY - drag.y) * DRAG_RADIANS_PER_PX,
        MAX_PITCH,
      );

      const elapsed = event.timeStamp - drag.time;
      if (elapsed > 0) flick = turn / elapsed;

      drag = {
        pointerId: event.pointerId,
        x: event.clientX,
        y: event.clientY,
        time: event.timeStamp,
      };
    };

    const onPointerUp = (event: globalThis.PointerEvent) => {
      if (drag?.pointerId !== event.pointerId) return;
      drag = null;
      // Carry the flick, then let the loop ease it back to the idle drift.
      spinRef.current = clamp(flick, MAX_FLICK);
      detach();
    };

    const attach = () => {
      window.addEventListener("pointermove", onPointerMove);
      window.addEventListener("pointerup", onPointerUp);
      window.addEventListener("pointercancel", onPointerUp);
    };

    const detach = () => {
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
      window.removeEventListener("pointercancel", onPointerUp);
    };

    const onPointerDown = (event: globalThis.PointerEvent) => {
      if (event.pointerType === "mouse" && event.button !== 0) return;

      drag = {
        pointerId: event.pointerId,
        x: event.clientX,
        y: event.clientY,
        time: event.timeStamp,
      };
      spinRef.current = 0;
      flick = 0;
      attach();
    };

    container.addEventListener("pointerdown", onPointerDown);

    let frame = 0;
    let previous: number | null = null;

    const tick = (now: number) => {
      const delta = Math.min(now - (previous ?? now), MAX_FRAME_MS);
      previous = now;

      if (!drag) {
        yawRef.current += spinRef.current * delta;
        spinRef.current +=
          (idleSpin - spinRef.current) * (1 - Math.exp(-delta / FLICK_DECAY_MS));
      }

      draw();
      frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frame);
      container.removeEventListener("pointerdown", onPointerDown);
      detach();
    };
  }, [points, faces, reducedMotion]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative aspect-square w-full cursor-grab touch-none select-none active:cursor-grabbing",
        className,
      )}
      aria-hidden="true"
    >
      <div className="pointer-events-none absolute inset-[16%] rounded-full bg-illini-orange/12 blur-3xl" />
      <svg viewBox="0 0 100 100" className="relative size-full overflow-visible">
        <g
          fill="none"
          stroke={EDGE_STROKE}
          strokeWidth={EDGE_WIDTH}
          strokeLinejoin="round"
        >
          {faces.map((_, index) => (
            <polygon
              key={index}
              ref={(node) => {
                polygonRefs.current[index] = node;
              }}
            />
          ))}
        </g>
      </svg>
    </div>
  );
}
