# Stack

Decided and deferred technical choices. No application code exists yet.

## Decided (owner)

| Concern | Choice | Notes |
| --- | --- | --- |
| Language | TypeScript | Industry default for serious React apps |
| UI library | React | Requested; standard for portfolios of this type |
| Styling | Tailwind CSS | Fast iteration, consistent utility styling |
| Hosting | Vercel | First-class React/Next.js deploy, free hobby tier |

## Strong recommendation (not scaffolded yet)

| Concern | Recommendation | Why |
| --- | --- | --- |
| React framework | **Next.js (App Router)** | De facto industry pairing with React + TypeScript + Tailwind + Vercel; SSR/SSG, routing, image optimization, and zero-friction Vercel deploys |
| Package manager | npm (already installed) | Keep simple for MVP; pnpm later if needed |
| Fonts | `next/font` with distinctive faces | Avoid default Inter/system stack; load performantly |
| Motion | CSS first; add `motion` (ex-Framer Motion) only if needed | Loader typewriter + scroll reveals; keep deps light |
| Content | Static TypeScript/MDX data files | No CMS for MVP; easy to edit and version in git |

## MVP libraries (install at scaffold — reference list)

Planned npm packages once the Next.js app exists. Not installed yet.

| Package | Purpose |
| --- | --- |
| `next`, `react`, `react-dom`, `typescript` | App core (via `create-next-app`) |
| `tailwindcss` (+ PostCSS tooling from scaffold) | Styling |
| `simple-icons` and/or `@icons-pack/react-simple-icons` | Tech-stack marquee logos (Cursor, Claude, GitHub, Python, etc.) |
| `motion` | Optional — loader / scroll micro-interactions if CSS isn’t enough |
| `clsx` or `tailwind-merge` | Optional — class composition hygiene |

**Intentionally skip for MVP (keeps the site from looking templated):**

- `shadcn/ui` / heavy component kits
- Three.js / `@react-three/fiber` (Phase 4 crystal / 3D learning track)
- CMS SDKs, auth, database clients

Exact versions: pin at install time (`npm install …`), not here.

## Explicitly deferred

- Headless CMS (Sanity, Contentful, etc.)
- Analytics beyond a simple privacy-friendly option later
- i18n
- Design system package / Storybook
- Three.js / advanced WebGL (skills available for a later “wow” pass)
- Backend contact API (can start with `mailto:` or a form provider)
- `shadcn/ui` and similar template component systems

## Environment verified (2026-08-10)

| Tool | Version / status |
| --- | --- |
| Node.js | v22.22.3 |
| npm | 10.9.8 |
| Vercel CLI | available via `npx vercel` (58.x) |
| GitHub CLI | gh 2.96.0 |
| Git | repo on `main`, remote tracking `origin/main` |
| Browser QA | Edge + Puppeteer screenshots; Chrome for Testing optional for DevTools MCP |

## Scaffold command (when ready — do not run until approved)

```bash
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"
```

Confirm flags with the owner before scaffolding into this non-empty docs-first repo.

## Quality bar (best practices, not over-engineering)

- Semantic HTML and accessible navigation
- Responsive layout (mobile first)
- Sensible Core Web Vitals defaults (Next image/font, minimal JS)
- SEO basics: title, description, Open Graph
- Visual QA via Edge screenshots (and Lighthouse when convenient) before calling MVP “done”
- Load `taste-skill` / `ui-ux-pro-max` / `frontend-design` at UI build time — skills are already on disk; quality comes from using them, not installing more plugins
