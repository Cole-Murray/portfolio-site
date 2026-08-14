# Roadmap

MVP-first. Ship something real, then make it impressive.

## Phase 0 — Environment & context *(done)*

- [x] Initialize git repo / README
- [x] Documentation and agent context (`docs/*`, `AGENTS.md`)
- [x] Inventory useful skills / MCPs
- [x] Fill content inventory ([CONTENT.md](CONTENT.md)) — resume + LinkedIn + photo; projects TBD
- [x] Agree design direction ([DESIGN.md](DESIGN.md))
- [x] Implementation plan — [plans/2026-08-12-001-feat-portfolio-mvp-plan.md](plans/2026-08-12-001-feat-portfolio-mvp-plan.md)

## Phase 1 — Scaffold & deploy skeleton

- [ ] Scaffold Next.js + TypeScript + Tailwind (see plan U1 + folder structure)
- [ ] Minimal layout shell (nav deferred polish; footer + section anchors OK)
- [ ] Connect GitHub → Vercel
- [ ] Deploy to a public URL (custom domain optional later)

## Phase 2 — MVP content sections (single page)

1. **Loader + Hero** — typewriter name, headline, CTAs, tech marquee
2. **Intro band** — photo, bio, facts
3. **Featured experience** — Nerdio SWE 2026 (large)
4. **Earlier experience** — Nerdio Solutions 2025 (+ optional PGN in About)
5. **About** — education / awards / personality
6. **Contact** — `coleam2u@gmail.com` + socials + resume
7. **Projects** — omit or “coming soon” until owner provides

Also: responsive polish, basic SEO meta, favicon.

## Phase 3 — Tasteful polish

- Distinct typography and color system (not AI-default purple)
- 2–3 intentional micro-animations / transitions
- Project imagery and better visual hierarchy
- Accessibility pass + Lighthouse / Core Web Vitals check

## Phase 4 — Later wow (explicitly post-MVP)

Only after MVP is live and content is solid:

- Case-study deep dives
- Optional motion / canvas / Three.js experiment
- Blog or notes
- Analytics, contact form backend, CMS if content updates become painful

## Definition of done (MVP)

- Live on Vercel
- Real content (no lorem ipsum for core sections)
- Mobile + desktop usable
- Contact path obvious
- Owner would comfortably send the link to a recruiter
