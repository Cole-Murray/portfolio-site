# Portfolio Site

Personal portfolio for **Cole Murray** — Computer Engineering student at the University of Illinois (Grainger). A single scrolling page: boot loader → hero → intro bento → featured Nerdio internship → earlier experience → projects → about → contact.

This repo keeps two layers deliberately separate: `docs/` is the product brief and the AI-collaboration trail, `src/` is the app.

## Stack

| Layer | Choice |
| --- | --- |
| Framework | Next.js 16 (App Router, Turbopack) |
| Language | TypeScript (strict) |
| Styling | Tailwind CSS v4 with CSS-variable design tokens |
| Type | Space Grotesk (display) · IBM Plex Sans (body) · IBM Plex Mono (labels/terminal) |
| Icons | `simple-icons` (server-side only) |
| Motion | CSS keyframes + scroll-driven `animation-timeline: view()`; no animation library |
| Hosting | Vercel (not yet connected) |

See [docs/STACK.md](docs/STACK.md) for rationale and deferred decisions.

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
```

Other scripts:

```bash
npm run build      # production build
npm run start      # serve the production build
npm run lint       # ESLint (next/core-web-vitals + TypeScript rules)
npm run typecheck  # tsc --noEmit
```

## Editing content

No CMS. Every visitor-facing string lives in typed modules under `src/content/`, so copy changes never require touching JSX:

| File | Holds |
| --- | --- |
| `src/content/site.ts` | Name, headline, location, contact copy, socials, SEO strings |
| `src/content/experience.ts` | Roles; the one with `featured: true` renders as the second hero |
| `src/content/about.ts` | Bio, education, awards, languages, activities, race, headshot |
| `src/content/skills.ts` | Hero marquee items and the GitHub card placeholder |
| `src/content/projects.ts` | Empty until real projects exist |

Shapes are defined in `src/types/content.ts`. Facts originate in [docs/CONTENT.md](docs/CONTENT.md) — update that first, then mirror it here.

## Project structure

```text
src/
├── app/               # layout, page, globals.css, robots.ts, sitemap.ts
├── components/
│   ├── layout/        # PageLoader, SiteHeader, SiteFooter
│   ├── sections/      # one component per scroll region
│   └── ui/            # Section, TechMarquee, TerminalWindow, ContributionGraph,
│                      #   RaceCountdown, Typewriter, ExternalLink
├── content/           # typed copy (edit here)
├── lib/               # fonts, icons, cn, constants, motion-preference hook
└── types/             # content shapes
```

Design tokens (colours, fonts, shared `.surface-card` / `.btn` / `.chip` / `.eyebrow` classes, keyframes) are all declared in `src/app/globals.css`.

## Browser QA

With the dev server running:

```bash
node docs/assets/qa/_capture.mjs 3000
```

Writes full-page `desktop-1440.png` and `mobile-390.png` into `docs/assets/qa/`. Uses the Edge binary and the Puppeteer bundled with the Chrome DevTools MCP plugin, so it adds no project dependencies.

## Deploying to Vercel

Not connected yet — do this when you're ready to publish:

1. Push this repo to GitHub (`Cole-Murray/portfolio-site` or similar).
2. At [vercel.com/new](https://vercel.com/new), import the repo. Framework preset auto-detects Next.js; no build settings or environment variables are required.
3. Deploy `main`. Vercel gives you a `*.vercel.app` URL.
4. Update `site.url` in `src/content/site.ts` to the real origin so canonical URLs, Open Graph tags, `robots.txt`, and `sitemap.xml` point at production.
5. Optional: attach a custom domain, then update `site.url` again.

CLI alternative: `npx vercel` (preview) and `npx vercel --prod`.

## Known gaps

- **GitHub contributions card is a placeholder.** The grid is deterministic decorative art and the three stats render as `—`, labelled as such in the UI. Live data needs a GitHub token and a fetch layer.
- **Projects are intentionally empty.** The section ships an honest "coming soon" panel; nothing is invented.
- **No Open Graph image yet.** Metadata references one but no `opengraph-image` asset exists.
- **Sticky nav is minimal.** A plain sticky bar with anchors; no scroll-state or active-section behaviour.
- **Favicon is the Next.js default.** Replace `src/app/favicon.ico` with a real mark.
- **Post-race countdown state** shows a neutral "race day has passed" message; decide the real behaviour after September 20, 2026.

## Documentation

| Doc | Purpose |
| --- | --- |
| [docs/CONTEXT.md](docs/CONTEXT.md) | Who this is for, product goals, constraints |
| [docs/STACK.md](docs/STACK.md) | Technical stack and MVP scope |
| [docs/CONTENT.md](docs/CONTENT.md) | Content inventory (fact source) |
| [docs/DESIGN.md](docs/DESIGN.md) | Visual direction and motion budget |
| [docs/ROADMAP.md](docs/ROADMAP.md) | MVP → polish phases |
| [docs/TOOLS.md](docs/TOOLS.md) | Cursor skills, plugins, and MCPs used |
| [docs/plans/](docs/plans/) | Durable implementation plans |
| [AGENTS.md](AGENTS.md) | Operating contract for AI agents in this repo |
