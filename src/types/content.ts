/**
 * Shared shapes for the site's content layer.
 *
 * Every string a visitor reads lives in `src/content/*` and is typed here, so
 * copy edits never require touching JSX. Facts originate in `docs/CONTENT.md`.
 */

export type SocialPlatform = "email" | "github" | "linkedin" | "resume";

export interface SocialLink {
  platform: SocialPlatform;
  label: string;
  /** Text shown next to the label, e.g. the address or handle. */
  value: string;
  href: string;
  /** Set for downloads so the anchor renders a `download` attribute. */
  download?: boolean;
}

export interface SiteMeta {
  name: string;
  shortName: string;
  role: string;
  headline: string;
  /** One or two sentences under the headline. */
  intro: string;
  location: string;
  email: string;
  url: string;
  contact: {
    headline: string;
    lead: string;
  };
  seo: {
    title: string;
    titleTemplate: string;
    description: string;
    keywords: string[];
    ogImageAlt: string;
  };
  socials: SocialLink[];
}

export interface ExperienceRole {
  id: string;
  title: string;
  org: string;
  /**
   * Optional org mark, served from `public/`. Rendered decoratively (empty alt)
   * because the org name always sits next to it in the heading.
   */
  logoSrc?: string;
  /** Human-readable range, e.g. "May 2026 — August 2026". */
  dates: string;
  /** Machine-readable start for ordering and `<time>` output. */
  startedOn: string;
  location: string;
  featured: boolean;
  /** Short framing line shown only on the featured role. */
  summary?: string;
  bullets: string[];
  tech: string[];
}

export interface EducationEntry {
  degree: string;
  school: string;
  college: string;
  minor?: string;
  expected: string;
  gpa?: string;
}

export interface ActivityEntry {
  org: string;
  detail: string;
  dates: string;
  bullets: string[];
}

export interface RaceEvent {
  name: string;
  location: string;
  /** ISO date (local race day) used as the countdown target. */
  date: string;
  displayDate: string;
  logoSrc: string;
  logoAlt: string;
}

export interface AboutContent {
  bio: string[];
  education: EducationEntry;
  awards: string[];
  languages: string[];
  activities: ActivityEntry[];
  race: RaceEvent;
  headshot: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
}

export interface SkillItem {
  name: string;
  /** simple-icons slug; omitted when the brand has no published mark. */
  iconSlug?: string;
  /**
   * Vendored multi-colour brand SVG under `public/images/brands/`, for marks
   * simple-icons does not carry. Takes precedence over `iconSlug`.
   */
  logoSrc?: string;
}

export interface GitHubStat {
  label: string;
  value: string;
}

export interface GitHubCardContent {
  /** True while the grid and stats are placeholders rather than live data. */
  placeholder: boolean;
  username: string;
  profileUrl: string;
  note: string;
  stats: GitHubStat[];
}

export interface Project {
  name: string;
  summary: string;
  tech: string[];
  links: { label: string; href: string }[];
}

export interface ProjectsContent {
  comingSoon: boolean;
  note: string;
  items: Project[];
}
