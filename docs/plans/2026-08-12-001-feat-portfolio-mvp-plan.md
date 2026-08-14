---
title: "Portfolio MVP - Plan"
date: 2026-08-12
artifact_contract: ce-unified-plan/v1
artifact_readiness: implementation-ready
product_contract_source: ce-plan-bootstrap
execution: code
origin: docs/CONTEXT.md, docs/DESIGN.md, docs/CONTENT.md, docs/STACK.md
---

# Portfolio MVP - Plan

## Goal Capsule

**Objective:** Ship a single-page, dark-modern personal portfolio for Cole Murray on Next.js + TypeScript + Tailwind, deployed to Vercel, using real resume content (Nerdio featured) and tasteful motion — without over-engineering or inventing projects.

**Product authority:** `docs/CONTENT.md` (facts) > `docs/DESIGN.md` (visual) > `docs/STACK.md` (tech) > this plan (how).

**Stop conditions / non-goals for this plan:** Photoreal 3D crystal, sticky nav polish (structure only / deferred UI), CMS, auth, invented projects, whole-site terminal theme, shadcn/template kits.

---

## Product Contract

### Actors

- Primary: recruiters / hiring managers / engineers evaluating Cole in ~30–60s
- Secondary: Cole updating content later via typed content files (not a CMS)

### Requirements

- R1. Single scrolling page with clear section order: loader → hero → intro band → featured Nerdio SWE → earlier experience → about → contact (projects omitted or “coming soon” until owner adds them).
- R2. Dark modern aesthetic (Ermens north star): white type on deep navy-charcoal; not purple-AI defaults; not full terminal theme.
- R3. Boot loader: typewriter “Cole Murray” + blinking cursor + progress bar, then fade into hero.
- R4. Hero includes headline/CTAs and a secondary infinite **tech-stack logo marquee** (not a scrolling name bar).
- R5. Intro band is a three-card bento: (a) large left **terminal window** card holding headshot + short bio, (b) top-right **GitHub contribution graph** + stats, (c) bottom-right **Ironman 70.3 live countdown** to September 20. The terminal card is the site's only terminal-styled element.
- R6. Featured experience is a large “second hero” for Nerdio Software Engineer Intern (May–Aug 2026); Solutions Engineer Intern (2025) is smaller below.
- R7. Contact is obvious: `mailto:coleam2u@gmail.com`, LinkedIn, GitHub, resume download. Phone stays off-site.
- R8. Real content only — copy from `docs/CONTENT.md` / resume; no fabricated projects or metrics.
- R9. Responsive (mobile + desktop), accessible basics, SEO meta + OG.
- R10. Repo structure itself should read as intentional: content separated from UI, docs/agent contract visible — a clean example of engineering + AI-assisted workflow (prompt engineering), not a dump of generated files.

### Acceptance examples

- AE1. A recruiter lands, sees loader briefly, then name/headline, can scroll to Nerdio 2026 work and understand what Cole built in under a minute.
- AE2. Clicking email opens a mail client to `coleam2u@gmail.com`; LinkedIn/GitHub/resume work.
- AE3. Changing a bullet in `src/content/experience.ts` updates the site without hunting through JSX.
- AE5. The Ironman countdown decrements while the page is open and shows a sane state if the race date has passed.
- AE4. Site deploys on Vercel from `main` and loads on a phone without horizontal overflow.

### Scope boundaries

**In:** Scaffold, typed content layer, section components, loader, marquee, featured + secondary experience, about, contact, public assets, SEO, Vercel deploy.

**Out:** Crystal/Three.js, live GitHub API (optional later), project case studies until owner provides them, sticky nav interaction polish (can ship minimal anchors later), blog/CMS.

---

## Planning Contract

### Key technical decisions

- KTD1. **Next.js App Router + `src/`** — industry default with Vercel; `create-next-app` into this docs-first repo with care for existing `docs/`, `AGENTS.md`.
- KTD2. **Content as typed TypeScript modules** under `src/content/` — single source for site strings; `docs/CONTENT.md` remains the human/agent inventory; app never hardcodes resume bullets in JSX.
- KTD3. **Section components compose the page** — `src/app/page.tsx` is a thin orchestrator; each scroll region is one component under `src/components/sections/`.
- KTD4. **CSS-first motion; `motion` only if needed** — loader typewriter and marquee can be CSS/JS light; avoid Framer by default.
- KTD5. **Icons via `simple-icons` / React wrapper** — marquee logos; prefer SVG, monochrome on dark.
- KTD6. **Public vs docs assets** — optimized runtime assets in `public/`; source/WIP/refs stay in `docs/assets/`.
- KTD7. **Showcase repo shape** — keep `docs/` + `AGENTS.md` + `docs/plans/` as first-class (this is the prompt-engineering / process signal). App code stays shallow and readable — impress with clarity, not folder depth.

### Target repository structure

Goal: a recruiter or engineer opening the GitHub repo should immediately see *process* (`docs/`, `AGENTS.md`, plans) and *product* (`src/`) as separate, intentional layers — the same discipline you’d expect from a strong intern who uses AI well.

```text
portfolio-site/
├── AGENTS.md                 # Agent operating contract (prompt-engineering artifact)
├── README.md                 # Human entry: what / stack / how to run / link to docs
├── package.json
├── next.config.ts
├── tsconfig.json
├── postcss.config.mjs
├── eslint.config.mjs
├── .gitignore
├── .env.example              # empty or placeholders only; no secrets
│
├── docs/                     # Product brief + AI collaboration trail (do not delete)
│   ├── CONTEXT.md
│   ├── CONTENT.md            # Human inventory (resume-sourced); not imported by app
│   ├── DESIGN.md
│   ├── STACK.md
│   ├── ROADMAP.md
│   ├── TOOLS.md
│   ├── plans/                # Durable plans (this file)
│   │   └── 2026-08-12-001-feat-portfolio-mvp-plan.md
│   └── assets/               # Source / WIP — not all shipped to production
│       ├── photos/
│       ├── resume/
│       └── refs/             # Reference site screenshots + capture script
│
├── public/                   # Runtime static files (CDN-served)
│   ├── favicon.ico
│   ├── images/
│   │   └── cole-murray-headshot.webp   # optimized from docs/assets/photos
│   └── resume/
│       └── ColeMurray_Resume.pdf       # downloadable copy for visitors
│
└── src/
    ├── app/                  # Next.js App Router only
    │   ├── layout.tsx        # fonts, metadata, shell
    │   ├── page.tsx          # composes sections in scroll order
    │   ├── globals.css       # CSS variables, base, marquee/loader keyframes
    │   ├── robots.ts         # optional MVP
    │   └── sitemap.ts        # optional MVP
    │
    ├── components/
    │   ├── layout/
    │   │   ├── PageLoader.tsx
    │   │   ├── SiteHeader.tsx    # minimal; sticky polish deferred
    │   │   └── SiteFooter.tsx
    │   ├── sections/
    │   │   ├── HeroSection.tsx
    │   │   ├── IntroBandSection.tsx
    │   │   ├── FeaturedExperienceSection.tsx
    │   │   ├── ExperienceSection.tsx
    │   │   ├── AboutSection.tsx
    │   │   ├── ContactSection.tsx
    │   │   └── ProjectsSection.tsx   # gated / “coming soon” until content exists
    │   └── ui/               # tiny primitives only (no design-system sprawl)
    │       ├── Section.tsx           # shared padding / max-width / id anchors
    │       ├── TechMarquee.tsx
    │       ├── TerminalWindow.tsx    # chrome + prompt lines (intro band only)
    │       ├── ContributionGraph.tsx # GitHub green squares
    │       ├── RaceCountdown.tsx     # Ironman 70.3 live timer (client component)
    │       ├── ExternalLink.tsx
    │       └── Typewriter.tsx        # loader text + cursor
    │
    ├── content/              # Typed site data — edit here to update copy
    │   ├── site.ts           # name, headline, emails, socials, SEO strings
    │   ├── experience.ts     # featured + other roles
    │   ├── about.ts          # bio, education, awards, extracurricular
    │   ├── skills.ts         # marquee items { name, iconSlug }
    │   ├── projects.ts       # empty array or comingSoon flag until owner fills
    │   └── index.ts          # re-exports
    │
    ├── types/
    │   └── content.ts        # ExperienceRole, SkillItem, Project, SiteMeta, etc.
    │
    └── lib/
        ├── fonts.ts          # next/font setup (distinctive; not Inter)
        ├── cn.ts             # optional clsx/tailwind-merge helper
        └── constants.ts      # section ids, breakpoints helpers if needed
```

**Structure principles (why this layout):**

| Principle | Practice |
| --- | --- |
| Content ≠ UI | Copy lives in `src/content/`; components only render |
| Docs ≠ runtime | `docs/` informs agents/humans; `public/` ships binaries |
| Thin app router | `page.tsx` lists sections; no 400-line mega-file |
| Named by job | `FeaturedExperienceSection` beats `Section2` |
| No fake architecture | No `features/`, no Storybook, no `hooks/` until something is reused thrice |
| Prompt-engineering visible | `AGENTS.md` + `docs/plans/` stay in repo — process is part of the portfolio |

**Import alias:** `@/*` → `src/*` (create-next-app default with `src/`).

### Assumptions

- A1. Projects can ship as omitted or a honest “Coming soon” block; not blocking deploy.
- A2. GitHub stats in intro band: static numbers or omit for MVP if API auth is annoying.
- A3. Accent color + exact font pairing chosen during U2 implementation using `taste-skill` (not blocking plan readiness).
- A4. Scaffold into existing repo root; preserve `docs/` and `AGENTS.md`.

### Open questions

- OQ1 (deferred): Exact marquee logo set — draft in `CONTENT.md`; finalize in U3.
- OQ2 (deferred): Sticky nav timing — after MVP scroll sections exist.
- OQ3 (deferred): Custom domain vs `*.vercel.app`.
- OQ4 (settled): Race = **IRONMAN 70.3 Michigan**, Frankfort, Michigan, **September 20, 2026**. Logo at `docs/assets/brand/ironman-logo.png`.
- OQ5 (settled for MVP): GitHub contributions = **placeholder** grid + stats; live API later.
- OQ6 (deferred): Post-race countdown behavior after Sept 20, 2026.

### Sequencing

1. U1 Scaffold + tokens + fonts + empty shell deployable  
2. U2 Content types + migrate resume data into `src/content/`  
3. U3 Loader + Hero + Tech marquee  
4. U4 Intro band + Featured Nerdio + secondary experience  
5. U5 About + Contact + resume public asset + SEO  
6. U6 Visual QA + Vercel production deploy  

---

## Implementation Units

### U1. Scaffold Next.js app and design tokens

**Goal:** Runnable Next.js + Tailwind app in-repo with dark CSS variables and fonts wired; existing docs preserved.

**Files:**
- Create: `package.json`, `next.config.ts`, `tsconfig.json`, `src/app/layout.tsx`, `src/app/page.tsx`, `src/app/globals.css`, `src/lib/fonts.ts`
- Preserve: `docs/**`, `AGENTS.md`, `.gitignore` (extend for `.next/`, `node_modules/`)

**Approach:** Run `create-next-app` into the repo (or manual equivalent) with TypeScript, Tailwind, App Router, `src/`, `@/*`. Define CSS variables for navy-charcoal background, white text, one restrained accent. Load distinctive display + body via `next/font`. Placeholder page only.

**Verify:** `npm run dev` loads; no Inter-as-identity; `docs/` still present.

### U2. Typed content layer from CONTENT.md

**Goal:** All site copy addressable from `src/content/*` with shared types.

**Files:**
- Create: `src/types/content.ts`, `src/content/site.ts`, `experience.ts`, `about.ts`, `skills.ts`, `projects.ts`, `index.ts`

**Approach:** Mirror `docs/CONTENT.md` into typed modules. Mark featured role explicitly (`featured: true`). `projects.ts` exports `{ comingSoon: true, items: [] }` until owner adds projects. Public email only `coleam2u@gmail.com`.

**Verify:** Typecheck passes; no resume bullets left only in markdown for runtime.

### U3. Loader, hero, tech marquee

**Goal:** First viewport matches design intent: loader → hero + marquee.

**Files:**
- Create: `src/components/layout/PageLoader.tsx`, `src/components/sections/HeroSection.tsx`, `src/components/ui/Typewriter.tsx`, `src/components/ui/TechMarquee.tsx`
- Update: `src/app/page.tsx`, `src/app/globals.css`
- Install: `simple-icons` or `@icons-pack/react-simple-icons` as needed

**Approach:** Short loader (prefer reduced-motion: skip or instant). Hero: name as brand-level signal, one headline, short support, CTAs (Experience / Contact / Resume). Marquee secondary. Prefer CSS animation for marquee loop.

**Verify:** Edge screenshot of hero; `prefers-reduced-motion` respected; logos readable on dark.

### U4. Intro band + experience hierarchy

**Goal:** Photo/intro cards then large Nerdio 2026 block + smaller 2025 role.

**Files:**
- Create: `src/components/sections/IntroBandSection.tsx`, `FeaturedExperienceSection.tsx`, `ExperienceSection.tsx`, `src/components/ui/Section.tsx`
- Create: `src/components/ui/TerminalWindow.tsx`, `ContributionGraph.tsx`, `RaceCountdown.tsx`
- Copy optimize: `public/images/cole-murray-headshot.webp` from `docs/assets/photos/`

**Approach:** Intro band is a 3-card bento (see `docs/assets/wireframe/page-structure.html`):

- **Left card, spans both rows — `TerminalWindow`:** window chrome (three dots + title), headshot, and bio rendered as `>` prompt output. This is the site's only terminal styling.
- **Top right — `ContributionGraph`:** GitHub green squares + 2–3 headline numbers.
- **Bottom right — `RaceCountdown`:** Ironman 70.3 mark + live days/hours/minutes/seconds to race day. Client component with a 1s interval; must clear on unmount and render a non-negative fallback state once the date passes.

Featured section uses large type / generous space (Martinez hierarchy). Other roles denser list. Section `id`s for future nav anchors. On mobile the bento collapses to a single column: terminal → GitHub → countdown.

**Data notes:**
- GitHub contributions for MVP: **placeholder** green-square grid + placeholder stats. Do not block on API/token. Leave a clear TODO to wire live data later.
- Race lives in `src/content/about.ts` (or `site.ts`): `IRONMAN 70.3 Michigan`, Frankfort, Michigan, ISO date `2026-09-20`. Countdown target = that date.
- Logo: copy `docs/assets/brand/ironman-logo.png` → `public/images/ironman-logo.png` for runtime. Personal portfolio use of the mark; don’t claim official affiliation.

**Verify:** Desktop + mobile screenshots; featured role visually dominates; content matches CONTENT.md; countdown ticks and degrades gracefully after race day.

### U5. About, contact, SEO, resume download

**Goal:** Close the page with education/about and clear contact paths; shipable metadata.

**Files:**
- Create: `AboutSection.tsx`, `ContactSection.tsx`, `SiteFooter.tsx`, optional `SiteHeader.tsx`
- Create: `public/resume/ColeMurray_Resume.pdf`
- Update: `src/app/layout.tsx` metadata (title, description, OG)

**Approach:** About: education, awards, PGN briefly. Contact: mailto, LinkedIn, GitHub, resume link. No phone. Projects section: omit or minimal coming-soon — do not invent.

**Verify:** All links work; metadata present; resume downloads.

### U6. QA pass and Vercel deploy

**Goal:** Production URL Cole would send a recruiter.

**Files:** touch only for bugs found in QA.

**Approach:** Visual QA via Edge/Puppeteer screenshots (desktop + mobile widths). Fix overflow, contrast, loader timing. Connect GitHub → Vercel; deploy `main`. Document URL in README.

**Verify:** Live URL; Definition of Done checklist green.

---

## Verification Contract

- `npm run lint` / `npm run build` succeed locally before deploy.
- Manual: desktop ~1440px and mobile ~390px screenshots of loader/hero, featured experience, contact.
- Links: email, LinkedIn, GitHub, resume — clicked once each.
- Reduced motion: site still usable.
- No invented project content in production.

---

## Definition of Done

- [ ] Structure matches the target tree (content / sections / docs preserved)
- [ ] Live on Vercel
- [ ] Real Nerdio content rendered; projects honest (empty or coming soon)
- [ ] Loader + marquee + featured hierarchy present
- [ ] Contact: `coleam2u@gmail.com` + socials + resume
- [ ] Mobile + desktop usable; owner willing to send the link

---

## Appendix

### Design / content origins

- Structural wireframe: `docs/assets/wireframe/page-structure.html` (open in a browser) with captures `wireframe-full.png` / `wireframe-mobile.png`
- Visual: `docs/DESIGN.md`, refs in `docs/assets/refs/`
- Facts: `docs/CONTENT.md`, `docs/assets/resume/ColeMurray_Resume.pdf`
- Stack: `docs/STACK.md`

### Explicitly deferred (Phase 4+)

- Three.js / crystal hero
- Sticky nav polish
- Live GitHub stats API
- Project case studies
- Custom domain
