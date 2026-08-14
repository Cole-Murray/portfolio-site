# Design direction

Status: **direction captured from owner references** (2026-08-11). Refine palette/type during build; do not ignore the reference hierarchy below.

## Design read

*Reading this as: personal CompE portfolio for recruiters and engineers, with a dark modern aesthetic, white typography on deep blue-gray, restrained scroll motion, simple looping spin accents (not cinematic 3D spectacles), and a single-page scroll with a strong featured-internship “second hero.”*

## Constraints from product brief

- Professional yet personal
- Modern + best-practice
- Tasteful themes and **small** animations
- Impress without over-engineering
- MVP speed over spectacle — but motion that *feels* intentional is in scope

## Settled decisions

- **Information architecture:** Single scrolling page. Sticky nav later.
- **Theme:** Dark modern (not light-first). Light mode is out of MVP scope unless revisited.
- **Primary aesthetic north star:** [Jesse Ermens](https://www.jesseermens.nl/#faq) — dark gray-blue, white type, loading + scroll polish, spinning hero accent.
- **Featured experience pattern:** Large “second hero” for the most recent summer internship (inspired by [Jesse Martinez](https://jessemartinezdesign.com/)); earlier roles get smaller treatment below.
- **Post-hero intro band (bento, 3 cards):** Ermens-style card strip below the hero, adapted for a student portfolio:
  - **Left (largest, spans full height):** a **terminal window** containing the headshot + short bio, styled with window chrome and `>` prompt lines.
  - **Right top:** **GitHub contribution graph** (the green squares) + a few headline stats.
  - **Right bottom:** **IRONMAN 70.3 Michigan** (Frankfort, Michigan) + live countdown to **September 20, 2026**. Logo: `docs/assets/brand/ironman-logo.png`.
- **GitHub card (MVP):** Placeholder contribution grid + stats; live data later.
- **Terminal motif — RESOLVED:** the site's single terminal moment is the **intro band's left card**. Do not apply terminal chrome anywhere else.
- **Motion philosophy:** Prefer simple, reliable spinning / looping accents and smooth scroll reveals. Explicitly avoid ambitious Apple-style cinematic scroll explosions (owner previously attempted an autonomous-car explosion scroll and it failed).
- **Loader (MVP):** Ermens-style boot screen — typewriter of **“Cole Murray”** with a **blinking cursor**, plus a simple progress/loading bar. Keep short; fade into the hero.
- **Hero marquee:** Not a scrolling name bar. Instead, an infinite horizontal **tech-stack badge strip** (icons/logos: Cursor, Claude, GitHub, Python, and more from content). Secondary to headline/CTA — atmospheric, not the hero focus.
- **3D hero object:** Deferred for MVP unless a cheap wireframe/low-poly spin is trivial. Photoreal crystal (Ermens) is Phase 4 / learning track — see “3D notes” below.

## Avoid

- Purple-on-white / purple-indigo gradient clichés
- Overly colorful palettes (Caleb’s site is a negative example on color intensity)
- Whole-site terminal / hacker theme (overused)
- Flat single-color backgrounds with no atmosphere
- Inter / Roboto / Arial as the primary identity
- Card grids *as the hero* (cards OK in the post-hero intro band and content sections)
- Floating badges / sticker overlays on hero media
- Over-ambitious scroll-driven 3D / cinematic product reveals for MVP
- Motion noise: glow spam, too many competing loops

## Firsthand review (2026-08-11)

Captured in a real browser (headless Edge via Puppeteer) and reviewed as screenshots in `docs/assets/refs/`. Notes below are from actually seeing them, and correct a few things the verbal description didn't capture.

**#1 Ermens — corrections/additions:**
- The hero "spin" is a **photoreal faceted iridescent crystal** rotating through a giant `WEBDESIGN` wordmark — visually stunning but **not cheap to build** (rendered 3D gem, not a basic spin). Treat as *aesthetic target*, not a literal build spec.
- Background is deep **navy-charcoal**, not black. Heavy uppercase geometric type. Logo collapses to a `JE/ER` monogram on scroll.
- Post-hero band is a **bento of mixed light + dark cards** with photos/thumbnails inside — good model for photo / intro / GitHub stats.
- Decorative crystals reappear as floating scroll accents beside numbered value props (`01/02/03`).

**#2 Martinez — corrections/additions:**
- More **monospace + terminal-flavored** than described: neon-green **wireframe line-art** shapes (cube, octahedron, terrain mesh) rotating on pure black.
- The "second hero" is really a **big-type stacked timeline** (`TWITCH 2024–NOW` largest, older roles smaller) + a monospace blurb. Exactly the internship-hierarchy model wanted.
- Projects: large preview images + `YEAR / ROLE / TECHNOLOGIES` chips (Next.js, AWS, Tailwind, Framer).
- **Its wireframe spin is the MVP-achievable version of the #1 crystal** — same "rotating object" feel, a fraction of the effort.

**#3 Caleb — corrections/additions:**
- The "too colorful" is a **burnt-orange ambient radial glow**. Otherwise dark.
- It's a **literal macOS terminal window** (traffic-light dots, `caleb@portfolio ~`, `> whoami`, `cat socials.txt`). Confirms: terminal theme is overused here.
- Peer signal: also **UIUC**, interned at **Fermilab (Batavia, IL)** — a direct comparison point for recruiters.

**Synthesis / recommendation:** #2 and #3 both lean monospace/terminal; only #1 is premium-differentiated. So: **Ermens' premium dark shell + Martinez's big-type experience hierarchy and achievable wireframe/low-poly spin + one terminal-flavored section only.** Render the wireframe spin in the navy-charcoal palette to get the "wow" without the crystal's cost — and without repeating the failed cinematic-3D attempt.

## Reference sites (ranked)

### 1. [jesseermens.nl](https://www.jesseermens.nl/#faq) — primary north star

Owner likes:

- Loading animation while the site boots
- Simple spinning animation in the hero background
- White font on a smooth dark gray-blue background
- Scroll animation quality overall
- Card section directly below the hero → adapt for: personal photo, brief intro, GitHub stats, small facts/items before experience

Overall: **dark modern aesthetic target.**

### 2. [jessemartinezdesign.com](https://jessemartinezdesign.com/) — layout / hierarchy

Owner likes:

- Slightly simpler than #1 but still polished
- **Large current-job section** (almost a second hero) — map this to the most recent summer internship with room for multiple cool projects from that role
- Smaller sections below for earlier internships / work
- Cyclical spinning animations (simpler object/shape spins preferred over complex scenes)

### 3. [calebkang.dev](https://www.calebkang.dev/) — selective borrow

Owner likes:

- Smooth, subtle animated background
- Terminal naming for sections (`> ls -la ./experience_` style) — use sparingly
- Scroll animation on work experience
- Smooth dark opaque texture on cards

Owner caveats:

- Too colorful overall — do not copy the palette intensity
- Full terminal theme is overused — expand and do better; at most one section

## Proposed page flow (single scroll)

1. **Loader** — type “Cole Murray” + blinking cursor + progress bar → fade out
2. **Hero** — name / headline / CTA; dark blue-gray field; **tech-stack logo marquee** (not name marquee); optional cheap spin accent if time
3. **Intro band** — bento: terminal (headshot + bio) | GitHub placeholder graph | IRONMAN 70.3 Michigan countdown (Frankfort, MI · Sept 20, 2026)
4. **Featured internship** — large second-hero block with project highlights from that summer
5. **Earlier experience** — denser / smaller sections
6. **Projects** (if not fully covered above) / **Interests**
7. **Contact**

Exact section labels TBD with content. Sticky nav anchors later.

## Motion budget

**MVP-friendly (aim for a few strong moves, not dozens):**

| Motion | Intent | Complexity |
| --- | --- | --- |
| Page loader | First impression | Low–medium — CSS/JS typewriter + bar; no 3D |
| Tech-stack marquee | Atmosphere / identity | Low — CSS infinite scroll of logos |
| Hero background spin | Atmosphere | Optional MVP — wireframe/low-poly only |
| Scroll reveals | Section entrance | Low–medium — opacity/transform, not cinematic |
| Ironman countdown tick | Personality / "this is live" | Low — client timer, 1s interval |
| Featured-role emphasis | Hierarchy | Layout > animation |

**Explicitly deferred / rejected for MVP:**

- Photoreal / glass / iridescent crystal hero (Ermens-level) — cool, learn later
- Apple-style explosion / scrub scroll of complex 3D models (e.g. autonomous car)
- Site-wide particle systems or loud colorful canvas backgrounds

## 3D notes (how those hero objects are made)

Rough difficulty ladder for “rotating object in the hero”:

| Level | What it looks like | How it’s usually made | MVP fit |
| --- | --- | --- | --- |
| **A — Easy** | Wireframe cube / octahedron / torus spinning | Three.js (or even CSS 3D) + `WireframeGeometry` / line materials; rotate in `requestAnimationFrame` | Yes |
| **B — Medium** | Low-poly solid with flat shading + soft light | Three.js mesh + `MeshStandardMaterial`, 1–2 lights | Maybe post-MVP |
| **C — Hard (Ermens-like)** | Photoreal faceted glass/crystal with refraction, iridescence, environment reflections | 3D model authored in Blender (or similar) → exported (glTF) → Three.js with **transmission / IOR / env map / HDR**, careful lighting, often custom or advanced materials; sometimes WebGL shaders | Phase 4 / learning |
| **D — Very hard** | Scroll-scrubbed cinematic product (car explode, etc.) | Scroll-tied timeline + high-poly assets + textures + performance budgeting | Skip (already tried; failed for good reason) |

**How a site like Ermens typically gets that crystal:**

1. **Model** — Designer/artist builds a faceted gem in Blender (or buys/customizes one).
2. **Materials** — Glass-like: transmission, thickness, roughness near 0, environment map so faces catch colorful reflections.
3. **Runtime** — Three.js (or Webflow’s 3D / Spline embed) loads the asset, places it over the giant type, spins slowly, maybe reacts slightly to mouse.
4. **Polish** — Color grading, bloom (sparingly), resize/DPR caps so phones don’t melt.

You already have a local **Three.js skill suite** for later learning. For MVP: ship the loader + marquee + dark layout; treat the crystal as a deliberate Phase 4 experiment once the site is live.

## Color (working direction)

- Base: smooth dark gray-blue (Ermens-like)
- Type: white / off-white primary
- Accent: one restrained accent TBD (not neon rainbow; not default AI purple)
- Cards: dark opaque surfaces with subtle depth (Caleb’s card texture as a cue, quieter palette)

Exact hex tokens: decide at scaffold time; document CSS variables in code.

## Typography (shipped)

| Role | Face | Notes |
| --- | --- | --- |
| Display | **Archivo**, `font-stretch: 115%` | Loaded with its `wdth` axis (`src/lib/fonts.ts`) so headings are drawn genuinely extended rather than faked with letter-spacing. This is what gives the hero the wide industrial weight the owner liked on Ermens' site. |
| Body | IBM Plex Sans | Engineering-flavoured, readable at long measure |
| Mono | IBM Plex Mono | Eyebrows, labels, terminal voice |

The width axis is applied in `globals.css` to `h1–h4` **and** the `.font-display`
utility, so non-heading display text stays consistent. Changing the face means
updating both `fonts.ts` and the `--font-display` token.

Alternatives rendered against real hero copy in
`docs/assets/type/specimens.html`: Syne, Bricolage Grotesque, Unbounded.

- Distinctive display + readable body (not Inter/system default)
- High contrast on dark backgrounds

## Open design decisions

- [ ] Exact accent color for rest of site (navy/white); Ironman card may use logo red/blue locally
- [x] Font pairing — Archivo Extended / IBM Plex Sans / IBM Plex Mono (owner reviewing alternatives)
- [x] Loader concept — typewriter “Cole Murray” + blinking cursor + loading bar
- [x] Tech marquee — badges/icons (not scrolling name). Moved out of the hero to sit between the intro band and the featured Nerdio section, so the first screen carries only one moving element.
- [ ] Full list of marquee logos / tech (from CONTENT.md)
- [x] Hero solid — **yes**, an extruded **Block I** beside the name, filled Illinois Orange with a navy outline, tumbling on a tilted axis at ~13s per revolution, and **draggable** — grab to orbit it, flick to spin it, and it eases back to the idle drift. Hand-projected to SVG in `src/components/ui/SpinningSolid.tsx`; no Three.js, so the WebGL non-goal still holds. Geometry lives in `src/lib/solid-geometry.ts`; swap shapes with the `shape` prop (`"block-i"` or `"icosahedron"`).
- [ ] Block I trademark (owner to review). The Illinois Block I is a University of Illinois mark, and the hero now renders it in the official orange (`#e84a27`) and navy (`#13294b`) at owner's request. Using it to indicate the school the owner actually attends is ordinary nominative use and low risk for a personal site, but it is closer to the protected mark than the earlier accent-blue wireframe was. Backing off is one prop: `shape="icosahedron"`.
- [x] Navigation — no bar. Boxed `CO/MU` monogram top-left, `MENU` toggle top-right, panel slides in from the right.
- [x] Terminal motif location — intro band left card only
- [x] GitHub contributions for MVP — **placeholder** (live wiring later)
- [x] Ironman race — **IRONMAN 70.3 Michigan**, Frankfort, Michigan, Sept 20, 2026; logo at `docs/assets/brand/ironman-logo.png`
- [ ] Post-race countdown behavior after Sept 20, 2026

## Notes for agents

- When taste conflicts with a reference, **prefer #1 (Ermens)** for color/motion feel and **#2 (Martinez)** for experience hierarchy.
- Do not rebuild these sites; steal *principles*, not layout clones or copy.
- Recruiter clarity still beats animation. If motion threatens LCP/INP, simplify.
