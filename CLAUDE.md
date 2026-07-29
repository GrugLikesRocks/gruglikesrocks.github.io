# Portfolio Website — project context

Personal portfolio site for **Giorgio Bufalino**. He is job hunting: the site targets future employers and doubles as a personal collection of everything he has built. Positioning is **"founder who builds"**: lead with the founder/CEO story, use the dev projects as proof he ships.

## Current state

`index.html` is a complete self-contained first version (inline CSS/JS, profile photo embedded as a base64 data URL). Built in Cowork, July 2026. It renders and works, but it is a starting point, not a finished site.

## Locked decisions (do not relitigate without asking Giorgio)

- **Design: "fighter select".** Chosen by Giorgio 29 Jul 2026 after he said the previous version screamed "made by Claude". The concept borrows the *structure* of a fighting-game character-select screen (his flagship is Blob Arena, his degree is Games Technology) while keeping the copy professional. Roster grid of projects, HUD readouts, targeting brackets on hover, honest spec blocks instead of invented power bars.
  - **Palette (flat, no effects):** bg `#0b1220`, panel `#111a2b`, hairline `#1e2a3d`, warm off-white text `#e8e4dc`, muted `#8494ad`, single signal blue `#4a7fe8`. One accent only, used sparingly, never as a glow.
  - **Type:** Space Grotesk 700 (display, uppercase), Inter (body), JetBrains Mono (HUD labels, spec rows, numbers). Giorgio asked for this trio back on 29 Jul 2026 after trying Archivo Black / Archivo / Martian Mono. It is a common AI-portfolio stack, but the tell was always the *whole package*, and the layout now carries the originality. Do not swap these without asking him.
  - **Hard rule: `border-radius: 0` everywhere.** No pills, no rounded cards.
  - **Banned (these are the AI-portfolio tells):** grain overlays, blueprint grids, radial glow blobs, gradient-filled text, scrolling keyword marquees, blinking terminal cursors, pill buttons, cards that lift on hover.
- **Hosting:** Vercel or Netlify (static).
- **Curation:** all projects included, but FartGram/OnlyFarts is presented neutrally as "Short-video social app" with no crude branding.
- **Contact:** giorgiobufalino@gmail.com, linkedin.com/in/giorgiobufalino, github.com/GrugLikesRocks, profile photo included.
- **Product naming:** the B2B platform is **Solco** (solco.live), NOT "Grug's Lair Platform". Use Solco's own terminology: Fan Intelligence, Ask Solco (not Ask Grug), activations, capture page, territory impact, sponsor report, white-label app. Live positioning: "Audience & impact intelligence for festivals and live events."
- **No availability signalling:** the "Open to new opportunities" hero pill and the "looking for my next challenge" line were removed at Giorgio's request. Do not reintroduce job-hunting language without asking.
- **Copy voice:** founder tone. Never use oxford commas and never use em dashes anywhere in site copy.

## Running the apps locally for screenshots (verified 29 Jul 2026)

Real screenshots live in `screens/` and are wired into each project overlay via the `screens:` array in the `PROJECTS` object (filename, caption, width, height). To recapture:

- Postgres 17 is installed natively at `localhost:5432`, role `grug` / `grugdev`, one database per project. All 7 databases exist.
- **Windows gotcha 1:** the npm `dev` scripts use Unix syntax (`NODE_ENV=development tsx ...`) which cmd cannot parse. Run `npx dotenv-cli -e .env -- npx tsx server/index.ts` instead of `npm run dev`.
- **Windows gotcha 2:** `server.listen({ reusePort: true })` throws `ENOTSUP` on Windows. Fixed in RecipeQuest, FartGram and Puzzle-Frame-AI by making it conditional on `process.platform`. This is a real portability fix, not a local hack.
- **RecipeQuest and FartGram** need Replit auth env vars to boot: `REPL_ID`, `SESSION_SECRET`, `ISSUER_URL=https://replit.com/oidc`, `REPLIT_DOMAINS=localhost:<port>`. With those set they boot and serve public pages fine.
- **Blob Padel** menus are portrait-only and canvas-rendered, so screenshots need a portrait viewport and coordinate clicks, not DOM clicks. Flow: skip tutorial, tap a tournament, PLAY NOW, SELECT & PLAY, START MATCH, then rotate to landscape for gameplay.
- **The short-video app has no screenshots on purpose.** Its running build still shows the original crude branding, which the curation rule forbids. Do not add screens for it unless Giorgio rebrands the app itself.
- Blob Arena is a Unity mobile title and is not in the local project set, so it has no screenshots. Solco uses a capture of the live solco.live site.

## Backlog (Giorgio's requested next steps, in priority order)

1. **Clickable projects → detail pages.** Each project card should open a rich detail view (screenshots, feature list, stack, story). Decided approach: detail pages/views on the site itself, since none of the apps are publicly deployed. Live-demo and GitHub links can be added per project later as they come online. Screenshots need to be captured from the locally running apps (see LOCAL_SETUP.md one level up in `..\` for how to run each).
2. **Less verbose copy.** Tighten everything. Shorter card descriptions, shorter section intros. Keep the facts, cut the prose.
3. **Responsive design as a priority.** Current version has basic breakpoints only. Design mobile-first, test at 360px, 768px, 1024px and 1440px. The oversized hero type, stats grid, marquee, timeline and card tilt all need proper small-screen treatment (disable tilt on touch devices).
4. Consider whether to stay single-file or migrate to a small Vite/Astro project now that detail pages are coming. Migration is acceptable if it stays static and trivially deployable to Vercel/Netlify.

## Content sources (all local, one level up from this folder)

- CV facts, career history, skills: `..\Slick-CV-Maker\giorgio-bufalino-cv.html` (plus role-specific variants alongside it)
- Grug's Lair company facts, Blob Arena metrics (20,000+ users per Giorgio Jul 2026, the file's 12,204+ is stale; 1,645 peak MAU, 2.1M transactions, AMMA partnership, Starkware pre-seed): `..\Grug's Lair\CLAUDE.md`
- Platform description (fan intelligence, QR capture, segments, Ask Grug): `..\Platform\grugslair-platform-overview.md`
- Dev projects (each has its own README.md + CLAUDE.md): `..\Football-Predictor` (QUANTGRUG), `..\Browser-Bloons-TD` (Blob Padel), `..\Slick-CV-Maker`, `..\Puzzle-Frame-AI` (PuzzleVault), `..\RecipeQuest` (Cozypans), `..\Dice-Roller`, `..\FartGram` (present neutrally)
- How to run any project locally for screenshots: `..\LOCAL_SETUP.md`

## Facts to keep accurate

- Founder & CEO, Grug's Lair, Nov 2022 to present (CV date; use it consistently)
- Co-founder & Head of Research, Agrippa Capital, Apr 2019 to Nov 2022
- Co-founder & Head of Product, Volunteer Space, Jul 2017 to Mar 2018
- Tech Leader, The Alacrity Foundation, Aug 2016 to Jul 2017
- BSc Games Technology, UWE Bristol, 2013 to 2016
- Based in Bristol, UK. **English is his first language** (he corrected this on 29 Jul 2026; the CV's "English fluent, Italian native" phrasing is misleading). He also speaks Italian.

## Conventions

- Keep the site static and deployable by drag-and-drop. No server, no database, no localStorage requirement.
- Every visible copy change follows the voice rule above.
- Verify responsive layouts in a real browser at the four widths listed before calling anything done.
