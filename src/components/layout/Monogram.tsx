import { cn } from "@/lib/cn";

/**
 * Boxed identity mark: initials stacked two-up in a solid tile, with an accent
 * dot breaking the lower-right corner. Purely decorative — the surrounding
 * link carries the accessible name.
 */
export function Monogram({ className }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "relative grid size-10 shrink-0 place-items-center rounded-md bg-fg",
        className,
      )}
    >
      {/* Type is sized to crowd the tile deliberately — the box stays size-10. */}
      <span className="font-display text-[0.8125rem] leading-[0.86] font-bold tracking-[-0.03em] text-base-deep">
        <span className="block">CO</span>
        <span className="block">MU</span>
      </span>
      <span className="absolute -right-1 -bottom-1 size-2.5 rounded-full bg-accent ring-2 ring-base" />
    </span>
  );
}
