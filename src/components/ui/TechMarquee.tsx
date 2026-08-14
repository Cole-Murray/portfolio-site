import Image from "next/image";
import type { CSSProperties } from "react";

import { marqueeSkills } from "@/content";
import { getBrandMark } from "@/lib/icons";

/* Tuned to travel ~38px/s. The logo-only track is far wider than the old
   labelled one, so the previous 46s would have scrolled it near twice as fast. */
const marqueeStyle = {
  "--marquee-duration": "72s",
} as CSSProperties;

/**
 * The keyframe slides the track by -50%, so the rendered strip must be at least
 * twice the viewport wide or the loop shows a gap. Logo-only items are narrow,
 * so the list is repeated to make up the width.
 */
const COPIES = 6;

/**
 * Two kinds of mark share the strip: single-path simple-icons glyphs that are
 * tinted with a fill, and vendored multi-colour brand SVGs that already carry
 * their own palette.
 */
type MarqueeLogo =
  | { kind: "glyph"; name: string; path: string; color: string }
  | { kind: "image"; name: string; src: string };

const logos: MarqueeLogo[] = marqueeSkills.flatMap((skill): MarqueeLogo[] => {
  if (skill.logoSrc) {
    return [{ kind: "image", name: skill.name, src: skill.logoSrc }];
  }

  const mark = getBrandMark(skill.iconSlug);
  if (!mark) return [];

  return [
    { kind: "glyph", name: skill.name, path: mark.path, color: mark.color },
  ];
});

const LOGO_CLASS = "size-9 shrink-0 sm:size-11";

export function TechMarquee() {
  return (
    <div>
      {/* Caption sits above the rule so the bordered band holds nothing but the
          moving strip. */}
      <p className="mx-auto mb-3 max-w-6xl px-5 font-mono text-[0.6875rem] tracking-[0.16em] text-faint uppercase sm:mb-4 sm:px-8">
        what I build with
      </p>
      {/* Border and mask stay on separate elements: the mask would otherwise
          fade the ends of the rules along with the logos. */}
      <div className="border-y border-line py-5 sm:py-6">
        <div className="mask-fade-x overflow-hidden">
          <div className="animate-marquee flex w-max" style={marqueeStyle}>
            {Array.from({ length: COPIES }, (_, copyIndex) => (
              <ul
                key={copyIndex}
                aria-hidden={copyIndex > 0 ? "true" : undefined}
                aria-label={
                  copyIndex === 0 ? "Technologies and tools" : undefined
                }
                className="flex shrink-0 items-center gap-10 pr-10 sm:gap-14 sm:pr-14"
              >
                {logos.map((logo) => (
                  <li key={`${copyIndex}-${logo.name}`} className="shrink-0">
                    {logo.kind === "glyph" ? (
                      <svg
                        aria-hidden="true"
                        className={LOGO_CLASS}
                        fill={logo.color}
                        viewBox="0 0 24 24"
                      >
                        <path d={logo.path} />
                      </svg>
                    ) : (
                      <Image
                        aria-hidden="true"
                        src={logo.src}
                        alt=""
                        width={44}
                        height={44}
                        unoptimized
                        className={LOGO_CLASS}
                      />
                    )}
                    {copyIndex === 0 ? (
                      <span className="sr-only">{logo.name}</span>
                    ) : null}
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
