"use client";

import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/cn";
import { usePrefersReducedMotion } from "@/lib/usePrefersReducedMotion";

interface TypewriterProps {
  text: string;
  speed?: number;
  startDelay?: number;
  onDone?: () => void;
  className?: string;
}

export function Typewriter({
  text,
  speed = 55,
  startDelay = 150,
  onDone,
  className,
}: TypewriterProps) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [typed, setTyped] = useState("");
  const onDoneRef = useRef(onDone);

  useEffect(() => {
    onDoneRef.current = onDone;
  }, [onDone]);

  useEffect(() => {
    if (prefersReducedMotion || text.length === 0) {
      onDoneRef.current?.();
      return;
    }

    let timeout: ReturnType<typeof setTimeout> | undefined;
    let cancelled = false;
    let nextCharacter = 0;

    const typeNextCharacter = () => {
      if (cancelled) return;

      nextCharacter += 1;
      setTyped(text.slice(0, nextCharacter));

      if (nextCharacter >= text.length) {
        onDoneRef.current?.();
        return;
      }

      timeout = setTimeout(typeNextCharacter, Math.max(0, speed));
    };

    timeout = setTimeout(typeNextCharacter, Math.max(0, startDelay));

    return () => {
      cancelled = true;
      if (timeout) clearTimeout(timeout);
    };
  }, [prefersReducedMotion, speed, startDelay, text]);

  return (
    <span className={cn("inline-grid", className)} aria-label={text}>
      {/*
       * An invisible copy of the finished string holds the final width open, so
       * a centred line cannot re-centre itself on every keystroke. The padding
       * matches the caret that trails the typed text.
       */}
      <span
        aria-hidden="true"
        className="invisible col-start-1 row-start-1 pr-[0.23em] whitespace-pre"
      >
        {text}
      </span>
      {/* whitespace-pre so a trailing space mid-word cannot collapse and
          snap the caret backwards. */}
      <span
        aria-hidden="true"
        className="col-start-1 row-start-1 inline-flex items-baseline whitespace-pre"
      >
        {prefersReducedMotion ? text : typed}
        <span className="animate-caret ml-[0.12em] inline-block h-[0.82em] w-[0.11em] min-w-px bg-accent" />
      </span>
    </span>
  );
}
