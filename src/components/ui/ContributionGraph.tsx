import { cn } from "@/lib/cn";
import type { ContributionLevel } from "@/lib/github";

interface ContributionGraphProps {
  /** Week-major day levels (7 rows × N columns). Empty → seeded placeholder. */
  levels?: ContributionLevel[];
  weeks?: number;
  className?: string;
}

const levelClasses = [
  "bg-gh-0",
  "bg-gh-1",
  "bg-gh-2",
  "bg-gh-3",
  "bg-gh-4",
] as const;

function placeholderLevel(index: number): ContributionLevel {
  let value = (index + 1) * 0x45d9f3b;
  value = ((value >>> 16) ^ value) * 0x45d9f3b;
  value = (value >>> 16) ^ value;

  // Weighted so most cells stay quiet; a dense grid of bright greens would
  // dominate the whole page.
  const roll = (value >>> 0) % 100;
  if (roll < 46) return 0;
  if (roll < 69) return 1;
  if (roll < 85) return 2;
  if (roll < 95) return 3;
  return 4;
}

export function ContributionGraph({
  levels,
  weeks = 26,
  className,
}: ContributionGraphProps) {
  const safeWeeks = Math.max(1, Math.floor(weeks));
  const cellCount = safeWeeks * 7;
  const cells = Array.from({ length: cellCount }, (_, index) => {
    const level = levels?.[index];
    return level === undefined ? placeholderLevel(index) : level;
  });

  return (
    <div
      aria-hidden="true"
      role="presentation"
      className={cn("grid min-w-0 gap-[2px] opacity-90 sm:gap-[3px]", className)}
      style={{
        // Column-major fill so week-major data stacks as Sun→Sat per week,
        // matching GitHub's own contribution graph orientation.
        gridTemplateRows: "repeat(7, minmax(0, 1fr))",
        gridAutoFlow: "column",
        gridAutoColumns: "minmax(0, 1fr)",
      }}
    >
      {cells.map((level, index) => (
        <span
          key={index}
          className={cn("aspect-square rounded-[2px]", levelClasses[level])}
        />
      ))}
    </div>
  );
}
