"use client";

import { useEffect, useState } from "react";

import { about } from "@/content";
import { cn } from "@/lib/cn";

interface RaceCountdownProps {
  targetDate: string;
  className?: string;
}

interface CountdownValues {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

type CountdownState =
  | { status: "pending" }
  | { status: "active"; values: CountdownValues }
  | { status: "complete" };

const units: Array<{ key: keyof CountdownValues; label: string }> = [
  { key: "days", label: "days" },
  { key: "hours", label: "hours" },
  { key: "minutes", label: "minutes" },
  { key: "seconds", label: "seconds" },
];

function getCountdown(targetTime: number): CountdownState {
  const remaining = Math.max(0, targetTime - Date.now());

  if (!Number.isFinite(targetTime) || remaining === 0) {
    return { status: "complete" };
  }

  return {
    status: "active",
    values: {
      days: Math.floor(remaining / 86_400_000),
      hours: Math.floor((remaining / 3_600_000) % 24),
      minutes: Math.floor((remaining / 60_000) % 60),
      seconds: Math.floor((remaining / 1_000) % 60),
    },
  };
}

export function RaceCountdown({
  targetDate,
  className,
}: RaceCountdownProps) {
  const [countdown, setCountdown] = useState<CountdownState>({
    status: "pending",
  });

  useEffect(() => {
    const targetTime = new Date(targetDate).getTime();
    const update = () => setCountdown(getCountdown(targetTime));

    update();
    const intervalId = window.setInterval(update, 1_000);

    return () => window.clearInterval(intervalId);
  }, [targetDate]);

  return (
    <div className={className}>
      <p className="sr-only">
        Countdown to {about.race.name} on {about.race.displayDate}.
      </p>
      {countdown.status === "complete" ? (
        <div className="flex min-h-20 items-center justify-center rounded-lg bg-white/[0.045] px-4 text-center">
          <p className="font-mono text-xs uppercase tracking-widest text-muted">
            Race day has passed · Result coming soon
          </p>
        </div>
      ) : (
        /*
         * Read as a single split-flap style strip rather than four tiles: no
         * boxes, hairline rules doing the dividing, and the seconds dimmed so
         * the fastest-moving digits do not pull focus from the day count.
         */
        <div aria-live="off" className="flex min-w-0 items-stretch">
          {units.map(({ key, label }, index) => {
            const value =
              countdown.status === "active" ? countdown.values[key] : null;

            return (
              <div
                key={key}
                className={cn(
                  "min-w-0 flex-1 px-4 first:pl-0 last:pr-0",
                  index > 0 && "border-l border-white/[0.07]",
                )}
              >
                <span
                  className={cn(
                    "block font-[family-name:var(--font-tektur)] text-3xl leading-none font-medium tracking-[-0.045em] tabular-nums sm:text-[2.5rem]",
                    key === "seconds" ? "text-faint" : "text-fg",
                  )}
                >
                  {value === null
                    ? "--"
                    : key === "days"
                      ? value
                      : String(value).padStart(2, "0")}
                </span>
                <span className="mt-2.5 block truncate font-mono text-[10px] lowercase tracking-[0.2em] text-faint">
                  {label}
                </span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
