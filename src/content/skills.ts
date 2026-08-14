import type { GitHubCardContent, SkillItem } from "@/types/content";

/**
 * Hero marquee items — logos only, so every entry needs a real brand mark.
 *
 * Most come from simple-icons. Microsoft brands are excluded from that set on
 * trademark grounds, so Azure and Entra ID use official marks vendored under
 * `public/images/brands/` (see docs/CONTENT.md for the sources and terms).
 *
 * Keboola and SQL are still absent: neither has a mark available, and a
 * lettered tile would be text in a strip meant to be purely pictorial. Both
 * still appear in the experience tech chips.
 */
export const marqueeSkills: SkillItem[] = [
  { name: "TypeScript", iconSlug: "typescript" },
  { name: "C", iconSlug: "c" },
  { name: "C++", iconSlug: "cplusplus" },
  { name: "Azure", logoSrc: "/images/brands/azure.svg" },
  { name: "Entra ID", logoSrc: "/images/brands/entra-id.svg" },
  { name: "Python", iconSlug: "python" },
  { name: "JavaScript", iconSlug: "javascript" },
  { name: "GitHub", iconSlug: "github" },
  { name: "Cursor", iconSlug: "cursor" },
  { name: "Claude", iconSlug: "claude" },
  { name: "Snowflake", iconSlug: "snowflake" },
  { name: "Streamlit", iconSlug: "streamlit" },
  { name: "Kotlin", iconSlug: "kotlin" },
];

/**
 * Static identity for the contributions card. Live grid + stats are fetched
 * server-side in `src/lib/github.ts` when `GITHUB_TOKEN` is set; these values
 * are the fallback shown if the token is missing or the request fails.
 */
export const githubCard: GitHubCardContent = {
  placeholder: true,
  username: "Cole-Murray",
  profileUrl: "https://github.com/Cole-Murray",
  note: "Placeholder grid — add GITHUB_TOKEN to unlock live data.",
  stats: [
    { label: "Contributions / yr", value: "—" },
    { label: "Public repos", value: "—" },
    { label: "Current streak", value: "—" },
  ],
};
