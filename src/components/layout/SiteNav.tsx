"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";

import { Monogram } from "@/components/layout/Monogram";
import { site } from "@/content";
import { cn } from "@/lib/cn";
import { SECTION_IDS } from "@/lib/constants";

const navItems = [
  { label: "Intro", href: `#${SECTION_IDS.intro}` },
  { label: "Experience", href: `#${SECTION_IDS.featured}` },
  { label: "Projects", href: `#${SECTION_IDS.projects}` },
  { label: "About", href: `#${SECTION_IDS.about}` },
  { label: "Contact", href: `#${SECTION_IDS.contact}` },
];

/**
 * Floating chrome: the mark anchors the top-left, a toggle sits opposite it,
 * and the section list lives in a panel that slides in from the right. There is
 * no bar, so the hero runs the full height of the viewport.
 */
export function SiteNav() {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    panelRef.current?.querySelector<HTMLAnchorElement>("a")?.focus();

    // The panel covers the page, so freeze the document behind it.
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = overflow;
    };
  }, [open]);

  return (
    <>
      <a
        href={`#${SECTION_IDS.hero}`}
        aria-label={`${site.name} — back to top`}
        className="fixed top-5 left-5 z-60 sm:top-7 sm:left-8"
      >
        <Monogram />
      </a>

      <button
        ref={toggleRef}
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-controls={panelId}
        className="group fixed top-5 right-5 z-60 flex h-10 items-center gap-3 font-mono text-[0.8125rem] tracking-[0.16em] text-fg uppercase transition-colors hover:text-accent sm:top-7 sm:right-8"
      >
        {open ? "Close" : "Menu"}
        {/* Bars sit symmetrically about the 7px centre line they collapse onto. */}
        <span aria-hidden="true" className="relative block h-3.5 w-6">
          <span
            className={cn(
              "absolute left-0 block h-px w-full bg-current transition-transform duration-300 ease-[var(--ease-out-soft)]",
              open ? "top-[7px] rotate-45" : "top-0.5",
            )}
          />
          <span
            className={cn(
              "absolute left-0 block h-px w-full bg-current transition-transform duration-300 ease-[var(--ease-out-soft)]",
              open ? "top-[7px] -rotate-45" : "top-3",
            )}
          />
        </span>
      </button>

      <div
        onClick={close}
        aria-hidden="true"
        className={cn(
          "fixed inset-0 z-50 bg-base-deep/70 backdrop-blur-sm transition-opacity duration-300 ease-[var(--ease-out-soft)]",
          open ? "opacity-100" : "pointer-events-none opacity-0",
        )}
      />

      <div
        id={panelId}
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
        inert={!open}
        className={cn(
          "fixed inset-y-0 right-0 z-55 flex w-full max-w-sm flex-col justify-center border-l border-line bg-base px-8 transition-transform duration-400 ease-[var(--ease-out-soft)] sm:px-10",
          open ? "translate-x-0" : "translate-x-full",
        )}
      >
        <nav aria-label="Sections">
          <ul className="space-y-1">
            {navItems.map((item, index) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={close}
                  className="group flex items-baseline gap-4 py-2 font-display text-3xl leading-tight tracking-[-0.03em] text-muted transition-colors hover:text-fg sm:text-4xl"
                >
                  <span className="font-mono text-[0.625rem] tracking-[0.16em] text-faint tabular-nums">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <ul className="mt-12 space-y-2 border-t border-line pt-8">
          {site.socials.map((social) => (
            <li key={social.platform}>
              <a
                href={social.href}
                onClick={close}
                {...(social.platform === "email"
                  ? {}
                  : { target: "_blank", rel: "noreferrer" })}
                {...(social.download ? { download: true } : {})}
                className="font-mono text-xs tracking-[0.08em] text-faint transition-colors hover:text-accent"
              >
                {social.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
