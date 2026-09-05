import {
  Archivo,
  IBM_Plex_Mono,
  IBM_Plex_Sans,
  Tektur,
} from "next/font/google";

/**
 * Type system: an extended grotesque for identity, an engineering-flavoured
 * body face, and a mono for terminal/label voice. Deliberately not Inter or
 * a system stack (docs/DESIGN.md § Typography).
 */

/**
 * Archivo carries a real width axis, so headings can run genuinely extended
 * rather than faking it with letter-spacing. The `wdth` value is applied via
 * `font-stretch` in globals.css — see the `.font-display` rule there.
 */
export const displayFont = Archivo({
  subsets: ["latin"],
  display: "swap",
  axes: ["wdth"],
  variable: "--font-archivo",
});

export const bodyFont = IBM_Plex_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-plex-sans",
});

export const monoFont = IBM_Plex_Mono({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500"],
  variable: "--font-plex-mono",
});

/**
 * Squared, instrument-panel numerals for the Ironman race timer. Keeping this
 * face scoped to data prevents its overtly digital character from competing
 * with Archivo elsewhere.
 */
export const timerFont = Tektur({
  subsets: ["latin"],
  display: "swap",
  weight: ["500"],
  variable: "--font-tektur",
});

export const fontVariables = [
  displayFont.variable,
  bodyFont.variable,
  monoFont.variable,
  timerFont.variable,
].join(" ");
