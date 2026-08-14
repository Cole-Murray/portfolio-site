import type { SiteMeta } from "@/types/content";

/** Public identity, contact paths, and SEO strings. Phone stays off-site. */
export const site: SiteMeta = {
  name: "Cole Murray",
  shortName: "Cole",
  role: "Computer Engineering · University of Illinois",
  headline: "I build cloud tooling that makes internal teams faster.",
  intro:
    "Rising sophomore in Computer Engineering at UIUC (Grainger) with a Hoeft Technology & Management minor. Two summers at Nerdio — most recently writing TypeScript services on Azure for identity auditing, governed LLM access, and webhook delivery.",
  location: "Greater Chicagoland Area · Champaign, IL",
  email: "coleam2u@gmail.com",
  url: "https://colemurray.vercel.app",
  contact: {
    headline: "Let's get in touch.",
    lead: "Email is the best way to reach me. LinkedIn, GitHub, and my résumé are below.",
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
      label: "Résumé",
      value: "PDF",
      href: "/resume/ColeMurray_Resume.pdf",
      download: true,
    },
  ],
};
