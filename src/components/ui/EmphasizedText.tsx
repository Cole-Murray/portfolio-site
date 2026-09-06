import { Fragment, type ReactNode } from "react";

import { cn } from "@/lib/cn";

/**
 * Renders a content string, promoting `**phrase**` spans to accent weight.
 * Keeps copy editable in content modules without inventing a markdown stack.
 */
export function EmphasizedText({
  children,
  className,
  markClassName = "font-semibold text-accent",
}: {
  children: string;
  className?: string;
  markClassName?: string;
}): ReactNode {
  const parts = children.split(/(\*\*[^*]+\*\*)/g);

  return (
    <span className={className}>
      {parts.map((part, index) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          return (
            <strong key={index} className={cn(markClassName)}>
              {part.slice(2, -2)}
            </strong>
          );
        }

        return <Fragment key={index}>{part}</Fragment>;
      })}
    </span>
  );
}
