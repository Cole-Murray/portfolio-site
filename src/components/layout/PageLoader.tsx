"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import { Typewriter } from "@/components/ui/Typewriter";
import { site } from "@/content";
import { cn } from "@/lib/cn";
import { usePrefersReducedMotion } from "@/lib/usePrefersReducedMotion";

const TYPE_SPEED = 75;
const TYPE_DELAY = 170;
/** The caret blinks on a 1.05s cycle, so this buys a beat over one full blink. */
const SETTLE_HOLD = 1150;
const COMPLETION_HOLD = 380;
const FADE_DURATION = 450;
const MAX_ACTIVE_DURATION = 3600;

export function PageLoader() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [isVisible, setIsVisible] = useState(true);
  const [isFading, setIsFading] = useState(false);
  const [progress, setProgress] = useState(0);
  const completionStarted = useRef(false);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  const dismiss = useCallback(() => {
    if (completionStarted.current) return;
    completionStarted.current = true;
    setProgress(100);

    timers.current.push(
      setTimeout(() => {
        setIsFading(true);
        timers.current.push(
          setTimeout(() => setIsVisible(false), FADE_DURATION),
        );
      }, COMPLETION_HOLD),
    );
  }, []);

  // The name lands, then the caret is left alone to blink before anything moves.
  const handleTypingDone = useCallback(() => {
    timers.current.push(setTimeout(dismiss, SETTLE_HOLD));
  }, [dismiss]);

  useEffect(() => {
    if (!isVisible || prefersReducedMotion) return;

    const root = document.documentElement;
    const previousOverflow = root.style.overflow;
    root.style.overflow = "hidden";

    const startedAt = performance.now();
    // Creep across the typing *and* the settle beat, so the line never freezes
    // mid-fill while the caret is blinking.
    const rampDuration =
      TYPE_DELAY + Math.max(0, site.name.length - 1) * TYPE_SPEED + SETTLE_HOLD;

    const progressTicker = setInterval(() => {
      const elapsed = performance.now() - startedAt;
      setProgress((current) =>
        Math.max(current, Math.min(92, (elapsed / rampDuration) * 92)),
      );
    }, 40);

    // Failsafe: the overlay must tear itself down even if typing never reports.
    const failsafe = setTimeout(dismiss, MAX_ACTIVE_DURATION);

    return () => {
      clearInterval(progressTicker);
      clearTimeout(failsafe);
      for (const timer of timers.current) clearTimeout(timer);
      timers.current = [];
      root.style.overflow = previousOverflow;
    };
  }, [dismiss, isVisible, prefersReducedMotion]);

  // The overlay is server-rendered so it can never flash in over painted
  // content; reduced-motion visitors never see it at all.
  if (!isVisible || prefersReducedMotion) return null;

  return (
    <>
      <noscript>
        <style>{`#page-loader{display:none!important}`}</style>
      </noscript>
      <div
        id="page-loader"
        aria-hidden="true"
        className={cn(
          "fixed inset-0 z-100 flex items-center justify-center bg-base-deep px-6 transition-opacity duration-[450ms] ease-out",
          isFading ? "opacity-0" : "opacity-100",
        )}
      >
        <div className="flex w-full max-w-[280px] flex-col items-center">
          <Typewriter
            className="font-display text-3xl font-semibold tracking-[-0.035em] text-fg sm:text-4xl"
            onDone={handleTypingDone}
            speed={TYPE_SPEED}
            startDelay={TYPE_DELAY}
            text={site.name}
          />

          {/* Centred fill, so the line opens outwards from the middle of the
              track rather than sweeping in from the left edge. */}
          <div className="mt-7 flex h-1 w-full justify-center overflow-hidden rounded-full bg-line">
            <div
              className="h-full rounded-full bg-accent transition-[width] duration-100 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>

          <p className="mt-3 text-center font-mono text-[0.625rem] uppercase tracking-[0.16em] text-faint">
            {site.role}
          </p>
        </div>
      </div>
    </>
  );
}
