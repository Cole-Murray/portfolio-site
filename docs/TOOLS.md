# Tools inventory — web development

Scanned from the local Cursor / Claude plugin and MCP environment on **2026-08-10**. Use this as a menu; do not load every skill on every task.

## Highest value for this portfolio

### Design & frontend craft

| Skill / plugin | Why it helps |
| --- | --- |
| **taste-skill** (`design-taste-frontend`) | Anti-slop portfolio/landing guidance; strong fit for this project |
| **senlindesign-taste-skill** | Additional design-taste guidance available locally |
| **ui-ux-pro-max** | Design system, brand, layout, and UI styling skills |
| **frontend-design** (Claude plugin, if enabled) | General frontend design craft |
| Cursor user rules (frontend design) | Hard rules: brand-first hero, no card-default, distinctive type, restrained motion |

### Quality & production readiness

| Skill | Use when |
| --- | --- |
| **web-quality-audit** | Full Lighthouse-style quality pass |
| **accessibility** | A11y review before recruiter share |
| **seo** | Titles, meta, sharing cards |
| **performance** / **core-web-vitals** | Load speed and CWV |
| **best-practices** | General web hygiene |

### Browser testing (MCP)

| Connector | Status | Capabilities |
| --- | --- | --- |
| **Chrome DevTools MCP** (`plugin-chrome-devtools-mcp-chrome-devtools`) | Server ready, **needs Google Chrome installed** | Navigate, snapshot, screenshot, console/network, Lighthouse audit, performance traces, responsive resize |

Also available as skills wrapping DevTools workflows: `chrome-devtools`, `a11y-debugging`, `debug-optimize-lcp`, `memory-leak-debugging`, `troubleshooting`, `ce-test-browser`.

#### Environment note (2026-08-11)

- **Chrome for Testing installed** (v151) at  
  `C:\Users\cmurray\AppData\Local\chrome-for-testing\chrome\win64-151.0.7922.138\chrome-win64\chrome.exe`  
  via `npx @puppeteer/browsers install chrome@stable` (user-local; not a system Google Chrome install).
- **Junction** also maps that binary to  
  `%LOCALAPPDATA%\Google\Chrome\Application\chrome.exe`  
  so the plugin MCP’s default “stable channel” path lookup succeeds.
- **Cursor `~/.cursor/mcp.json`** also defines a `chrome-devtools` server with `--executablePath` + `--headless`. Reload MCP / restart Cursor if that server doesn’t appear.
- **Current MCP status:** binary is found; first navigations sometimes fail with “Navigating frame was detached” (browser restarting). Screenshot fallback via Edge + `docs/assets/refs/_capture.mjs` still works. Retry Lighthouse after a Cursor MCP reload.
- Do not commit browser binaries; `/chrome/` is gitignored.

### Process / shipping (Compound Engineering)

Useful once we move from docs → build:

| Skill | Role |
| --- | --- |
| `ce-brainstorm` | Requirements / product framing |
| `ce-plan` | Implementation plan |
| `ce-work` | Execute the plan |
| `ce-proof` | Verification |
| `ce-optimize` / `ce-polish` | Post-MVP improvement |
| `ce-commit` / `ce-commit-push-pr` | Git + PR (only when owner asks) |
| `lfg` | End-to-end orchestration if desired |

### Superpowers (planning discipline)

| Skill | Role |
| --- | --- |
| `brainstorming` | Design before code |
| `writing-plans` / `executing-plans` | Structured implementation |
| `test-driven-development` | If/when tests are warranted |
| `verification-before-completion` | Don’t claim done without checks |

## Available but lower priority for MVP

| Tooling | Notes |
| --- | --- |
| **Three.js skill suite** (fundamentals → shaders) | Great for a later “wow” section; skip for MVP |
| **imagegen-frontend-web** / **image-to-code** | Optional for mockups or asset ideation |
| **brandkit** / **minimalist** / **brutalist** / **soft** taste variants | Pull only if design direction matches |
| **canvas** skill | For analytical artifacts in chat — not the portfolio site itself |
| **Keboola / Asana MCPs** | Not relevant to this portfolio |

## Not currently connected (consider later)

| Gap | Why consider |
| --- | --- |
| **Vercel MCP / dashboard integration** | Deploy is fine via CLI + GitHub integration; MCP optional |
| **Figma MCP** | Only if design starts in Figma |
| **GitHub MCP** | `gh` CLI already covers PRs/issues |

## Local CLI already available

- Node 22 + npm 10
- `npx vercel`
- `gh`

## Suggested usage sequence for this repo

1. Content + design docs (`CONTENT.md`, `DESIGN.md`)
2. `ce-brainstorm` / design approval for IA and visual direction
3. Scaffold Next.js (when owner green-lights code)
4. Build with taste + Tailwind skills
5. Verify with Chrome DevTools MCP + web-quality skills
6. Deploy via Vercel + GitHub
