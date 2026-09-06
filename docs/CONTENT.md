# Portfolio content inventory

Source of truth extracted from the résumé (`public/resume/ColeMurray_Resume.pdf`, WIP). Owner will add projects later. Do **not** invent missing coursework, metrics, or projects.

## Identity

- **Preferred name on site:** Cole (full: Cole A. Murray)
- **Headline / one-liner:** Computer Engineering @ UIUC (Grainger) — software & solutions engineering internships at Nerdio
- **Location / availability:** Greater Chicagoland Area / UIUC (Champaign)
- **Education:** B.S. Computer Engineering, University of Illinois at Urbana-Champaign, Grainger College of Engineering; Hoeft Technology & Management Minor; Expected May 2029; GPA 3.76/4.00
- **Awards:** Schaumburg Business Association Scholarship; Engineering Visionary Scholarship; Illinois State Seal of Biliteracy
- **Pronouns (optional):**

## Links

| Channel | URL |
| --- | --- |
| Email (public site) | coleam2u@gmail.com |
| Email (Illinois / resume) | colem5@illinois.edu |
| Phone | 847-460-2068 *(on resume only — not on public site)* |
| GitHub | https://github.com/Cole-Murray |
| LinkedIn | https://www.linkedin.com/in/cole-murray-184679367/ |
| Resume PDF | `public/resume/ColeMurray_Resume.pdf` |
| Other | |

## Photos

| Asset | Path | Notes |
| --- | --- | --- |
| Headshot / intro photo | `public/images/cole-murray-portrait.jpg` | Arms-crossed portrait with Block I backdrop; used in the intro terminal. |

## About / interests

Short bio (draft from resume facts — polish with owner later):

> Cole Murray is a Computer Engineering student at UIUC (Grainger) with a Hoeft Technology & Management minor. He’s interned two summers at Nerdio — most recently as a Software Engineer Intern building TypeScript services on Azure (MCP/identity tooling, LLM proxying, webhook platforms), and previously as a Solutions Engineer Intern shipping internal tools, dashboards, and automations.

Interests / hobbies worth showing (keep tasteful and specific):

- **Triathlon — IRONMAN 70.3 Michigan** in **Frankfort, Michigan** on **September 20, 2026** *(intro-band countdown card)*
- Phi Gamma Nu Professional Business Fraternity (Athletics + Mr. Business Fundraising committees)
- Spoken languages: English and Spanish
- Intro terminal `cat interests.txt`: Artificial intelligence · Autonomous vehicles · Product development · Product management · Embedded systems · Cloud infrastructure · Developer tooling · Hardware–software systems · Space systems
- *(owner TBD — e.g. F1 / Red Bull Racing interest hinted by headshot shirt; confirm before using)*

### Ironman 70.3 countdown card

| Field | Value |
| --- | --- |
| Race | **IRONMAN 70.3 Michigan** |
| Location | **Frankfort, Michigan** *(correct spelling — not Frankfurt)* |
| Race date | **September 20, 2026** |
| Display | Live countdown: days / hours / minutes / seconds |
| Post-race behavior | Flip to “completed” / result state when ready *(TBD after race)* |
| Logo asset | `public/images/ironman-logo.png` (owner-provided). Trademarked brand — fine for personal portfolio; don’t imply official affiliation. |
| Colors (from logo) | Red + blue accents — use sparingly on this card only so the site stays navy/white overall |

### GitHub contributions card

| Field | Value |
| --- | --- |
| Username | `Cole-Murray` |
| Data | Live GraphQL via `GITHUB_TOKEN` (`src/lib/github.ts`); falls back to placeholder grid if the token is missing |
| Stats | Contributions / yr · Public repos · Current streak |
| Cache | Revalidate about hourly |

## Work experience

Reverse chronological. **Featured “second hero” role:** Nerdio Software Engineer Intern (Summer 2026).

### Role 1 — Featured

- **Title:** Software Engineer Intern
- **Org:** Nerdio
- **Dates:** May 2026 – August 2026
- **Location / remote:** Skokie, IL
- **Bullets (impact-focused):**
  - Architected a TypeScript MCP server integrating Microsoft Graph and Azure ARM to audit privileged Entra ID / Azure RBAC access across a 60+-tenant multi-cloud identity platform; 12 tools, OAuth app-only auth, and Azure Container Apps hosting with Entra-authenticated HTTP transport
  - Built an authenticated LLM/API proxy so internal apps can call Claude without exposing the Anthropic API key — validates Entra ID JWTs, injects a server-side key, proxies the Anthropic API, and enforces per-user allowlists, model allowlists, and rate limits; deployed to Azure App Service with Key Vault secrets and structured audit logging
  - Engineered a TypeScript Azure Function App multi-destination webhook delivery platform that replaced scattered automations with a queue-backed routing system to Teams, Azure Communication Services Email, or HTTPS webhooks, with an append-only Table Storage audit log; Entra Easy Auth and a custom RBAC admin dashboard on Static Web Apps, with GitHub Actions OIDC CI/CD
- **Tech used:** TypeScript, Microsoft Graph, Azure ARM, Entra ID / Azure RBAC, Azure Container Apps, Azure App Service, Key Vault, Azure Functions, Table Storage, Static Web Apps, GitHub Actions OIDC, MCP, Claude/Anthropic API

### Role 2

- **Title:** Solutions Engineer Intern
- **Org:** Nerdio
- **Dates:** May 2025 – August 2025
- **Location / remote:** Skokie, IL
- **Bullets:**
  - Designed and built internal tools to support product, customer success, and operations teams
  - Developed interactive dashboards and apps to visualize product usage, customer interaction, and web traffic
  - Created large-scale data transformations to deliver actionable datasets to multiple departments
  - Built and implemented multiple automation workflows, including a real-time automated reply system for the company help forum and an email notification system for incoming support tickets
  - Gained familiarity leveraging AI tools such as Cursor and Copilot 365 to increase and optimize output
- **Tech used:** *(resume lists org-wide skills: Azure, Snowflake, Keboola, Zapier, Streamlit, Zendesk, Excel, Git — confirm which applied to this role)*

### Extracurricular (optional site section / about)

- **Org:** Phi Gamma Nu Professional Business Fraternity — Champaign, IL
- **Roles:** Athletics Committee; Mr. Business Fundraising Committee
- **Dates:** September 2025 – Present
- **Bullets:**
  - One of 30 new members selected from a pool of 900+ applicants through a rigorous multi-stage interview process
  - Coordinated athletic and fundraising events for upwards of 400 people across multiple campus organizations

## Projects

Resume currently says **“Coming SOON!”** — leave empty until owner provides. Do not invent.

### Project 1

- **Name:**
- **One-liner:**
- **Problem / what you built:**
- **Your role:**
- **Tech:**
- **Links:** (repo, demo, write-up)
- **Highlight / screenshot notes:**

## Skills (from resume — good marquee candidates)

Group lightly; avoid endless tag clouds on the site.

- **Languages:** Python, Java, SQL, JavaScript, Kotlin; React Native *(listed on resume under languages)*
- **Frameworks / tools:** Microsoft Azure, Snowflake, Git, Zendesk, Keboola, Zapier, Excel, Streamlit
- **From Nerdio SWE work (stronger for marquee):** TypeScript, Azure, Entra ID, MCP, Claude/Cursor, GitHub Actions
- **Hardware / CompE-specific:** *(not listed yet)*
- **Spoken:** English, Spanish
- **Learning now:** *(owner TBD)*

### Hero tech-stack marquee

Logos only — no labels. Shipped order:

TypeScript · C · C++ · Azure · Entra ID · Python · JavaScript · GitHub · Cursor · Claude · Snowflake · Streamlit · Kotlin

**Keboola and SQL are omitted.** Neither has a usable brand mark, and a lettered
tile would put text back into a strip that is meant to be purely pictorial. Both
still appear in the experience tech chips.

#### Logo sources and terms

| Source | Covers | Licence / terms |
| --- | --- | --- |
| [simple-icons](https://simpleicons.org/) | All but the two below | CC0 1.0 |
| Microsoft Entra architecture icons, via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Microsoft_Entra_ID_color_icon.svg) | `public/images/brands/entra-id.svg` | Microsoft trademark; see note |
| Azure mark, via [devicon](https://github.com/devicons/devicon) (MIT) | `public/images/brands/azure.svg` | Microsoft trademark; see note |

GitHub (`#181717`) and Cursor (`#000000`) are officially black and would be
invisible on the page background, so `src/lib/icons.ts` swaps any mark below a
luminance threshold to the foreground white — which is how both brands publish
their marks for dark backgrounds.

> **Trademark note (owner to review).** Microsoft permits its product icons in
> "architectural diagrams, training materials, or documentation" and asks that
> they not be used in marketing communications. A personal portfolio is not
> clearly inside that permission. Using them to factually indicate technologies
> worked with is ordinary nominative use and is very low risk in practice, but
> it is the owner's call — deleting the two entries from
> `src/content/skills.ts` removes them cleanly.

## Assets needed

- [x] Headshot — `public/images/cole-murray-portrait.jpg`
- [x] Resume PDF — `public/resume/ColeMurray_Resume.pdf` (WIP; projects TBD)
- [ ] Project screenshots / demos
- [ ] Favicon / simple logo mark
- [ ] Brand colors
- [x] Confirm public contact: `coleam2u@gmail.com`; phone off-site
- [x] Ironman: **IRONMAN 70.3 Michigan**, Frankfort, Michigan, September 20, 2026; logo at `public/images/ironman-logo.png`
- [x] GitHub stats for MVP: **placeholder** contribution graph + fake/zeroed numbers; wire live API later
- [x] Tech marquee logo list — logos only; Azure + Entra ID vendored under `public/images/brands/`
- [ ] Fill projects when ready
- [ ] Post-race countdown behavior (after Sept 20, 2026)

## Notes for agents

- Prefer owner-authored wording; edit for clarity only with approval on tone-sensitive lines.
- Do not fabricate employers, awards, or metrics.
- If content is missing, ask — do not placeholder-fake it in production copy.
- Resume is WIP: projects section intentionally empty until owner adds them.
- Featured experience hierarchy: **Nerdio SWE Intern (2026)** large; **Solutions Engineer Intern (2025)** smaller below; PGN optional in About.
