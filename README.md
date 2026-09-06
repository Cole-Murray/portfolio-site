# Cole Murray — Portfolio

Personal site for **Cole Murray**, Computer Engineering at UIUC (Grainger). Live at **[colemurray.dev](https://colemurray.dev)**.

Single-page scroll: boot loader → hero → intro bento (terminal + GitHub + race countdown) → featured Nerdio internship → earlier experience → projects → about → contact.

## Stack

| Layer | Choice |
| --- | --- |
| Framework | Next.js (App Router) |
| Language | TypeScript (strict) |
| Styling | Tailwind CSS v4 + CSS variables |
| Type | Archivo · IBM Plex Sans · IBM Plex Mono · Tektur (race timer) |
| Hosting | Vercel · custom domain `colemurray.dev` |

## Run locally

```bash
npm install
cp .env.example .env.local   # optional: GITHUB_TOKEN for live contribution graph
npm run dev                  # http://localhost:3000
```

```bash
npm run build
npm run lint
npm run typecheck
```

## Content

Visitor-facing copy lives in typed modules under `src/content/` — edit there, not in JSX.

| File | Holds |
| --- | --- |
| `src/content/site.ts` | Name, hero, SEO, socials, canonical URL |
| `src/content/experience.ts` | Roles (`featured: true` → second hero) |
| `src/content/about.ts` | Bio, education, interests, race, headshot |
| `src/content/skills.ts` | Tech marquee |
| `src/content/projects.ts` | Projects (honest empty state until ready) |

Facts and inventory: [docs/CONTENT.md](docs/CONTENT.md).

## Structure

```text
src/
├── app/            # layout, page, metadata, robots, sitemap
├── components/
│   ├── layout/     # nav, footer, monogram, page loader
│   ├── sections/   # one component per scroll region
│   └── ui/         # terminal, solid, graphs, motion primitives
├── content/        # typed copy
├── lib/            # fonts, GitHub fetch, icons, geometry
└── types/
public/             # images + résumé PDF
docs/               # product brief, design notes, roadmap, plans
```

## Environment

| Variable | Required | Purpose |
| --- | --- | --- |
| `GITHUB_TOKEN` | No | Live GitHub contributions card (server-only). Falls back to placeholder without it. |
| `NEXT_PUBLIC_SITE_URL` | No | Overrides canonical origin; defaults to `site.url` in `src/content/site.ts`. |

## Documentation

| Doc | Purpose |
| --- | --- |
| [docs/CONTEXT.md](docs/CONTEXT.md) | Goals and constraints |
| [docs/STACK.md](docs/STACK.md) | Stack rationale |
| [docs/CONTENT.md](docs/CONTENT.md) | Content inventory |
| [docs/DESIGN.md](docs/DESIGN.md) | Visual direction |
| [docs/ROADMAP.md](docs/ROADMAP.md) | Phases |
| [docs/plans/](docs/plans/) | Implementation plans |
| [AGENTS.md](AGENTS.md) | Agent operating notes for this repo |
