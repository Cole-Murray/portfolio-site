import type { AboutContent } from "@/types/content";

export const about: AboutContent = {
  bio: [
    "I'm a Computer Engineering student at the University of Illinois (Grainger College of Engineering), pairing the degree with the Hoeft Technology & Management minor.",
    "Most of my engineering so far has happened at Nerdio, across two summers: first building internal tools, dashboards, and automations, then writing TypeScript services on Azure for identity auditing, governed LLM access, and webhook delivery.",
    "Outside of school I'm training for a half-Ironman, and I spend a lot of time figuring out how to work well alongside AI tooling rather than around it.",
  ],
  education: {
    degree: "B.S. Computer Engineering",
    school: "University of Illinois Urbana-Champaign",
    college: "Grainger College of Engineering",
    minor: "Hoeft Technology & Management",
    expected: "Expected May 2029",
    gpa: "3.76 / 4.00",
  },
  awards: [
    "Schaumburg Business Association Scholarship",
    "Engineering Visionary Scholarship",
    "Illinois State Seal of Biliteracy",
  ],
  languages: ["English", "Spanish"],
  activities: [
    {
      org: "Phi Gamma Nu Professional Business Fraternity",
      detail: "Athletics Committee · Mr. Business Fundraising Committee",
      dates: "September 2025 — Present",
      bullets: [
        "One of 30 new members selected from a pool of 900+ applicants through a rigorous multi-stage interview process.",
        "Coordinated athletic and fundraising events for upwards of 400 people across multiple campus organizations.",
      ],
    },
  ],
  race: {
    name: "IRONMAN 70.3 Michigan",
    location: "Frankfort, Michigan",
    date: "2026-09-20T07:00:00-04:00",
    displayDate: "September 20, 2026",
    logoSrc: "/images/ironman-logo.png",
    logoAlt: "IRONMAN 70.3 logo",
  },
  headshot: {
    src: "/images/cole-murray-headshot.jpg",
    alt: "Cole Murray",
    width: 770,
    height: 1024,
  },
};
