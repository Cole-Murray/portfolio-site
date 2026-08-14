import type { ExperienceRole } from "@/types/content";

/**
 * Reverse chronological. Exactly one role carries `featured: true` — it renders
 * as the page's second hero. Bullets are resume copy from docs/CONTENT.md.
 */
export const experience: ExperienceRole[] = [
  {
    id: "nerdio-swe-2026",
    title: "Software Engineer Intern",
    org: "Nerdio",
    logoSrc: "/images/nerdio-logo.png",
    dates: "May 2026 — August 2026",
    startedOn: "2026-05",
    location: "Skokie, IL",
    featured: true,
    summary:
      "Three production TypeScript systems on Azure: an identity-audit MCP server, a governed LLM proxy, and a multi-destination webhook delivery platform.",
    bullets: [
      "Architected a TypeScript MCP server integrating Microsoft Graph and Azure ARM to audit privileged Entra ID / Azure RBAC access across a 60+-tenant multi-cloud identity platform; 12 tools, OAuth app-only auth, and Azure Container Apps hosting with Entra-authenticated HTTP transport.",
      "Built an authenticated LLM/API proxy so internal apps can call Claude without exposing the Anthropic API key — validates Entra ID JWTs, injects a server-side key, proxies the Anthropic API, and enforces per-user allowlists, model allowlists, and rate limits; deployed to Azure App Service with Key Vault secrets and structured audit logging.",
      "Engineered a TypeScript Azure Function App multi-destination webhook delivery platform that replaced scattered automations with a queue-backed routing system to Teams, Azure Communication Services Email, or HTTPS webhooks, with an append-only Table Storage audit log; Entra Easy Auth and a custom RBAC admin dashboard on Static Web Apps, with GitHub Actions OIDC CI/CD.",
    ],
    tech: [
      "TypeScript",
      "Microsoft Graph",
      "Azure ARM",
      "Entra ID",
      "Azure RBAC",
      "Azure Container Apps",
      "Azure App Service",
      "Key Vault",
      "Azure Functions",
      "Table Storage",
      "Static Web Apps",
      "GitHub Actions OIDC",
      "MCP",
      "Anthropic API",
    ],
  },
  {
    id: "nerdio-solutions-2025",
    title: "Solutions Engineer Intern",
    org: "Nerdio",
    dates: "May 2025 — August 2025",
    startedOn: "2025-05",
    location: "Skokie, IL",
    featured: false,
    bullets: [
      "Designed and built internal tools to support product, customer success, and operations teams.",
      "Developed interactive dashboards and apps to visualize product usage, customer interaction, and web traffic.",
      "Created large-scale data transformations to deliver actionable datasets to multiple departments.",
      "Built and implemented multiple automation workflows, including a real-time automated reply system for the company help forum and an email notification system for incoming support tickets.",
      "Leveraged AI tools such as Cursor and Copilot 365 to increase and optimize output.",
    ],
    // Résumé lists these org-wide rather than per-role; owner to confirm the subset.
    tech: ["Azure", "Snowflake", "Keboola", "Zapier", "Streamlit", "Zendesk", "Excel", "Git"],
  },
];

export const featuredRole =
  experience.find((role) => role.featured) ?? experience[0];

export const otherRoles = experience.filter((role) => !role.featured);
