/** Anchor ids shared by sections and any future nav. */
export const SECTION_IDS = {
  hero: "top",
  intro: "intro",
  featured: "experience",
  experience: "earlier-experience",
  projects: "projects",
  about: "about",
  contact: "contact",
} as const;

export type SectionId = (typeof SECTION_IDS)[keyof typeof SECTION_IDS];
