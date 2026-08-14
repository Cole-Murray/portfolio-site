import {
  siC,
  siClaude,
  siCplusplus,
  siCursor,
  siGithub,
  siJavascript,
  siKotlin,
  siPython,
  siSnowflake,
  siStreamlit,
  siTypescript,
} from "simple-icons";

/**
 * Brand marks used by the hero marquee and the hero's corner profile links,
 * kept in one place so both stay server components and simple-icons never
 * reaches the client bundle.
 *
 * Microsoft-owned brands (Azure, Entra ID) and a few smaller vendors have no
 * published simple-icons mark; those items fall back to a monogram tile.
 */
const registry = {
  typescript: siTypescript,
  c: siC,
  cplusplus: siCplusplus,
  python: siPython,
  javascript: siJavascript,
  github: siGithub,
  cursor: siCursor,
  claude: siClaude,
  snowflake: siSnowflake,
  streamlit: siStreamlit,
  kotlin: siKotlin,
} as const;

export interface BrandMark {
  title: string;
  path: string;
  /** Official brand colour, lightened when it would disappear on the page. */
  color: string;
}

/**
 * Marks simple-icons does not ship. LinkedIn was withdrawn from the set over
 * brand policy, so its glyph is vendored to keep the hero's corner links
 * consistent with the GitHub mark beside it.
 */
const vendored: Record<string, BrandMark> = {
  linkedin: {
    title: "LinkedIn",
    path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
    color: "#0a66c2",
  },
};

/** WCAG relative luminance, used only to spot marks that vanish on near-black. */
function luminance(hex: string): number {
  const value = Number.parseInt(hex, 16);
  const toLinear = (channel: number) => {
    const srgb = channel / 255;
    return srgb <= 0.03928 ? srgb / 12.92 : ((srgb + 0.055) / 1.055) ** 2.4;
  };

  return (
    0.2126 * toLinear((value >> 16) & 255) +
    0.7152 * toLinear((value >> 8) & 255) +
    0.0722 * toLinear(value & 255)
  );
}

/**
 * A few brands are officially black or near-black — GitHub (#181717) and
 * Cursor (#000000) — which would render as invisible holes in the strip. Both
 * ship a white mark for dark backgrounds, so that is what they get here.
 */
function onDark(hex: string): string {
  return luminance(hex) < 0.06 ? "#f0f1f4" : `#${hex}`;
}

export function getBrandMark(slug: string | undefined): BrandMark | null {
  if (!slug) return null;

  const icon = registry[slug as keyof typeof registry];
  if (!icon) return vendored[slug] ?? null;

  return { title: icon.title, path: icon.path, color: onDark(icon.hex) };
}
