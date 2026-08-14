# Agent guidance

Instructions for AI agents working in this repository.

## Project summary

Personal portfolio site for **Cole Murray**, a UIUC Computer Engineering rising sophomore. Goal: professional, personal, modern MVP on **TypeScript + React + Tailwind**, deployed on **Vercel**. Prefer **Next.js App Router** unless the owner rejects it.

## Source of truth

| Need | Read |
| --- | --- |
| Goals & constraints | [docs/CONTEXT.md](docs/CONTEXT.md) |
| Stack | [docs/STACK.md](docs/STACK.md) |
| Copy / experience / projects | [docs/CONTENT.md](docs/CONTENT.md) |
| Phases | [docs/ROADMAP.md](docs/ROADMAP.md) |
| Visual direction | [docs/DESIGN.md](docs/DESIGN.md) |
| Available tooling | [docs/TOOLS.md](docs/TOOLS.md) |

## Operating rules

1. **MVP first.** Ship a clean working site before ambitious visuals or architecture.
2. **No fake content.** Do not invent jobs, projects, or metrics. Ask or leave clearly marked placeholders only in drafts.
3. **No code until asked** during early setup/brainstorm phases; after scaffolding is approved, keep changes focused.
4. **Taste over templates.** Use design skills (`taste-skill`, `ui-ux-pro-max`, frontend design rules) — avoid generic AI portfolio aesthetics.
5. **Verify in the browser** before calling UI work done (Chrome DevTools MCP / `ce-test-browser`).
6. **Do not commit or push** unless the owner explicitly asks.

## Recommended workflow skills

- Scope / requirements: `ce-brainstorm` → `ce-plan` → `ce-work`
- Design: `taste-skill` / `senlindesign-taste-skill`, `ui-ux-pro-max`
- Quality: web-quality skills (a11y, SEO, performance, CWV)
- Browser QA: Chrome DevTools MCP, `ce-test-browser`
- Ship: `ce-commit` / `ce-commit-push-pr` only when requested

## Out of scope unless requested

- Three.js / heavy WebGL demos
- CMS, auth, databases
- Premature design systems / Storybook
- Over-abstracted component architecture for a mostly-static portfolio

## Framework note

This repo runs **Next.js 16 (App Router, Turbopack)**. Some APIs and conventions differ from older Next.js releases — check `node_modules/next/dist/docs/` before assuming an older pattern. `agentRules: false` in `next.config.ts` stops `next dev` from appending its own generated block to this file.
