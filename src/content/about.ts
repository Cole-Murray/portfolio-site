import type { AboutContent } from "@/types/content";

export const about: AboutContent = {
  bio: [
    "I'm a sophomore at the University of Illinois Urbana-Champaign majoring in **Computer Engineering** with a minor in **Hoeft Technology & Management**. Beyond academics, I'm active in a professional business fraternity, the Illinois Space Society, and the Illini Run Club.\nI have a strong passion for sports and fitness and I play on several intramural soccer teams. I completed my first half-Ironman in September and am training for another.",
    "Most of my engineering so far has happened at Nerdio, across two summers: first building internal tools, dashboards, and automations, then writing TypeScript services on Azure for identity auditing, governed LLM access, and webhook delivery.",
    "Outside of school I'm training for my next half-Ironman, and I've been getting into embedded systems and hardware projects, a change of pace from the software I've worked on in the past.",
  ],
  education: {
    degree: "B.S. Computer Engineering",
    school: "University of Illinois Urbana-Champaign",
    college: "Grainger College of Engineering",
    minor: "Hoeft Technology & Management",
    expected: "Expected May 2029",
    gpa: "3.75 / 4.00",
  },
  interests: [
    "Artificial intelligence",
    "Autonomous vehicles",
    "Product development",
    "Product management",
    "Embedded systems",
    "Cloud infrastructure",
    "Developer tooling",
    "Hardware–software systems",
    "High frequency trading",
  ],
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
    name: "IRONMAN 70.3 Rockford",
    location: "Rockford, Illinois",
    date: "2027-06-13T07:00:00-05:00",
    displayDate: "June 13, 2027",
    logoSrc: "/images/ironman-logo.png",
    logoAlt: "IRONMAN 70.3 logo",
  },
  headshot: {
    src: "/images/cole-murray-portrait.jpg",
    alt: "Cole Murray",
    width: 900,
    height: 1200,
  },
};
