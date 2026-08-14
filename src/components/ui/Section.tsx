import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

interface SectionProps {
  id?: string;
  /** Two-digit ordinal shown before the label, e.g. "01". */
  index?: string;
  label?: string;
  title?: ReactNode;
  lead?: ReactNode;
  children?: ReactNode;
  className?: string;
  innerClassName?: string;
  headerClassName?: string;
}

/**
 * Shared scroll region: consistent vertical rhythm, max width, anchor id, and
 * the eyebrow/title header every section opens with.
 */
export function Section({
  id,
  index,
  label,
  title,
  lead,
  children,
  className,
  innerClassName,
  headerClassName,
}: SectionProps) {
  const hasHeader = Boolean(index || label || title || lead);

  return (
    <section
      id={id}
      className={cn("scroll-mt-24 px-5 py-20 sm:px-8 md:py-28", className)}
    >
      <div className={cn("mx-auto w-full max-w-6xl", innerClassName)}>
        {hasHeader ? (
          <header className={cn("reveal max-w-3xl", headerClassName)}>
            {(index || label) && (
              <p className="eyebrow">
                {index ? <span className="eyebrow-index">{index}</span> : null}
                {label ? <span>{label}</span> : null}
              </p>
            )}
            {title ? (
              <h2 className="mt-5 text-3xl leading-[1.08] sm:text-4xl md:text-5xl">
                {title}
              </h2>
            ) : null}
            {lead ? (
              <p className="mt-5 text-base leading-relaxed text-muted md:text-lg">
                {lead}
              </p>
            ) : null}
          </header>
        ) : null}
        {children}
      </div>
    </section>
  );
}
