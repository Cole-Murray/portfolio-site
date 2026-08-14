import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

interface TerminalWindowProps {
  title: string;
  children: ReactNode;
  className?: string;
}

export function TerminalWindow({
  title,
  children,
  className,
}: TerminalWindowProps) {
  return (
    <div
      className={cn(
        "terminal-card flex flex-col overflow-hidden p-0",
        className,
      )}
    >
      <div className="flex items-center gap-2 border-b border-line bg-white/[0.03] px-4 py-3">
        <span
          aria-hidden="true"
          className="size-[11px] rounded-full bg-[#ff5f57]"
        />
        <span
          aria-hidden="true"
          className="size-[11px] rounded-full bg-[#febc2e]"
        />
        <span
          aria-hidden="true"
          className="size-[11px] rounded-full bg-[#28c840]"
        />
        <span className="ml-2 min-w-0 truncate font-mono text-xs text-faint">
          {title}
        </span>
      </div>
      <div className="flex flex-1 flex-col bg-base-deep/70 p-6 font-mono sm:p-8">
        {children}
      </div>
    </div>
  );
}
