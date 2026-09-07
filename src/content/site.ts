import type { SiteMeta } from "@/types/content";

/** Public identity, contact paths, and SEO strings. Phone stays off-site. */
export const site: SiteMeta = {
  name: "Cole Murray",
  shortName: "Cole",
  heroTitle: "Hi, I'm Cole",
  role: "Computer Engineering · University of Illinois",
  headline: "Computer Engineering @ UIUC, SWE Intern @ Nerdio",
  heroNouns: ["student", "builder", "triathlete", "car enthusiast", "problem solver", "soccer player", "country music fan", "outdoorsman"],
  location: "Greater Chicagoland Area · Champaign, IL",
  email: "coleam2u@gmail.com",
  url: "https://colemurray.dev",
  contact: {
    headline: "Let's get in touch.",
    lead: "Email is the best way to reach me. LinkedIn, GitHub, and my resume are below.",
  },
  seo: {
    title: "Cole Murray — Computer Engineering @ Illinois",
    titleTemplate: "%s · Cole Murray",
    description:
      "Cole Murray is a Computer Engineering student at the University of Illinois (Grainger) who has interned twice at Nerdio, building TypeScript services on Azure for identity auditing, governed LLM access, and webhook delivery.",
    keywords: [
      "Cole Murray",
      "Computer Engineering",
      "University of Illinois",
      "UIUC",
      "Nerdio",
      "Software Engineer Intern",
      "TypeScript",
      "Azure",
    ],
    ogImageAlt: "Cole Murray — Computer Engineering at the University of Illinois",
  },
  socials: [
    {
      platform: "email",
      label: "Email",
      value: "coleam2u@gmail.com",
      href: "mailto:coleam2u@gmail.com",
    },
    {
      platform: "linkedin",
      label: "LinkedIn",
      value: "in/cole-murray",
      href: "https://www.linkedin.com/in/cole-murray-184679367/",
    },
    {
      platform: "github",
      label: "GitHub",
      value: "Cole-Murray",
      href: "https://github.com/Cole-Murray",
    },
    {
      platform: "resume",
      label: "Resume",
      value: "PDF",
      href: "/resume/ColeMurray_Resume.pdf",
      download: true,
    },
  ],
};
