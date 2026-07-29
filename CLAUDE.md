# Portfolio Website — project context

Personal portfolio site for **Giorgio Bufalino**. He is job hunting: the site targets future employers and doubles as a personal collection of everything he has built. Positioning is **"founder who builds"**: lead with the founder/CEO story, use the dev projects as proof he ships.

## Current state

`index.html` is a complete self-contained first version (inline CSS/JS, profile photo embedded as a base64 data URL). Built in Cowork, July 2026. It renders and works, but it is a starting point, not a finished site.

## Locked decisions (do not relitigate without asking Giorgio)

- **Design:** dark and bold. Near-black background, lime accent `#c8ff2e`, violet secondary `#7c5cff`, Space Grotesk display + Inter body + JetBrains Mono labels (Google Fonts). Modern, fresh, some motion.
- **Hosting:** Vercel or Netlify (static).
- **Curation:** all projects included, but FartGram/OnlyFarts is presented neutrally as "Short-video social app" with no crude branding.
- **Contact:** giorgiobufalino@gmail.com, linkedin.com/in/giorgiobufalino, GitHub (username still TBD — button currently points at github.com, fix when he provides it), profile photo included.
- **Copy voice:** founder tone. Never use oxford commas and never use em dashes anywhere in site copy.

## Backlog (Giorgio's requested next steps, in priority order)

1. **Clickable projects → detail pages.** Each project card should open a rich detail view (screenshots, feature list, stack, story). Decided approach: detail pages/views on the site itself, since none of the apps are publicly deployed. Live-demo and GitHub links can be added per project later as they come online. Screenshots need to be captured from the locally running apps (see LOCAL_SETUP.md one level up in `..\` for how to run each).
2. **Less verbose copy.** Tighten everything. Shorter card descriptions, shorter section intros. Keep the facts, cut the prose.
3. **Responsive design as a priority.** Current version has basic breakpoints only. Design mobile-first, test at 360px, 768px, 1024px and 1440px. The oversized hero type, stats grid, marquee, timeline and card tilt all need proper small-screen treatment (disable tilt on touch devices).
4. Consider whether to stay single-file or migrate to a small Vite/Astro project now that detail pages are coming. Migration is acceptable if it stays static and trivially deployable to Vercel/Netlify.

## Content sources (all local, one level up from this folder)

- CV facts, career history, skills: `..\Slick-CV-Maker\giorgio-bufalino-cv.html` (plus role-specific variants alongside it)
- Grug's Lair company facts, Blob Arena metrics (12,204+ users, 1,645 peak MAU, 2.1M transactions, AMMA partnership, Starkware pre-seed): `..\Grug's Lair\CLAUDE.md`
- Platform description (fan intelligence, QR capture, segments, Ask Grug): `..\Platform\grugslair-platform-overview.md`
- Dev projects (each has its own README.md + CLAUDE.md): `..\Football-Predictor` (QUANTGRUG), `..\Browser-Bloons-TD` (Blob Padel), `..\Slick-CV-Maker`, `..\Puzzle-Frame-AI` (PuzzleVault), `..\RecipeQuest` (Cozypans), `..\Dice-Roller`, `..\FartGram` (present neutrally)
- How to run any project locally for screenshots: `..\LOCAL_SETUP.md`

## Facts to keep accurate

- Founder & CEO, Grug's Lair, Nov 2022 to present (CV date; use it consistently)
- Co-founder & Head of Research, Agrippa Capital, Apr 2019 to Nov 2022
- Co-founder & Head of Product, Volunteer Space, Jul 2017 to Mar 2018
- Tech Leader, The Alacrity Foundation, Aug 2016 to Jul 2017
- BSc Games Technology, UWE Bristol, 2013 to 2016
- Based in Bristol, UK. Languages: English fluent, Italian native.

## Conventions

- Keep the site static and deployable by drag-and-drop. No server, no database, no localStorage requirement.
- Every visible copy change follows the voice rule above.
- Verify responsive layouts in a real browser at the four widths listed before calling anything done.
