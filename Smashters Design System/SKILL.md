---
name: smashters-design
description: Use this skill to generate well-branded interfaces and assets for Smashters / Dumpster Fire Golf Club (DFGC), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the `README.md` file within this skill, and explore the other available files. Everything you need lives at the root of this folder:

- `colors_and_type.css` — all design tokens (CSS custom properties + `@font-face` for the Azalea display face)
- `fonts/` — `Azalea.otf` / `Azalea.ttf`
- `assets/images/` — Smashters word mark, DFGC heraldic crest, favicon
- `ui_kits/smashters/` — reusable JSX components + a clickable `index.html` kit that recreates the phone app
- `preview/` — swatch + specimen cards used by the Design System preview tab
- `index.html` — the full production Smashters app, imported verbatim (11.5k lines). Search this when you need the exact markup/class names of a component in the live product.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. Include `<link rel="stylesheet" href="colors_and_type.css">` (or inline the vars) and then compose with the UI-kit JSX or with raw classes pulled from `index.html`.

If working on production code, read the rules in `README.md` — especially the **CONTENT FUNDAMENTALS** (voice is broadcast-golf reverence undercut by irreverence; uppercase tracked labels; no emoji) and **VISUAL FOUNDATIONS** (Masters green + broadcast yellow; Ryder red vs blue for teams; soft shadows, no borders; 3D cube tab transitions; confetti + haptic on wins) sections — to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design (a new screen? a slide? a broadcast overlay? an email invite?), ask 2–4 focused questions (surface, variation count, Smashters-only vs DFGC-crest-forward, etc.), and act as an expert designer who outputs HTML artifacts *or* production code, depending on the need.
