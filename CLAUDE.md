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
- **Hosting:** live on GitHub Pages at **https://gruglikesrocks.github.io** (user page). The repo is `GrugLikesRocks/gruglikesrocks.github.io`, default branch `main`, added as the `origin` remote. A `.nojekyll` file makes Pages serve the files as-is. To publish changes: commit, then `git push`. Pages rebuilds automatically in a minute or two. Stays static, so Netlify/Vercel remain valid alternatives.
- **Curation:** all projects included, but FartGram/OnlyFarts is presented neutrally as "Short-video social app" with no crude branding.
- **Section placement (set by Giorgio 12 Aug 2026):** the flagship "Building Grug's Lair" section holds **Blob Arena, Project: Fame and Rising Revenant**. The grid runs on six tracks so the three titles sit flush three across down to 880px, then stack.
- **Rising Revenant (added 13 Aug 2026 at Giorgio's request).** The studio's first title, discontinued. His CV says "development paused"; he calls it discontinued, and the card uses his word. Facts on the card come from public sources, not from him, so **get him to confirm them**: a last player standing strategy game on **Starknet** built with **Unity and the Dojo engine**, where players fortify outposts, buy reinforcements and survive randomised world events; **three playtests**, the third and final one on 1 Apr 2024. Sources: [Inside Grug's Lair: The Making of Rising Revenant](https://thelootherald.substack.com/p/inside-grugs-lair-the-making-of-rising) (also reports a 100,000 $LORDS Frontinus House grant and a six person team, both left off the site for now) and the [Starknet Propulsion Program](https://propulsion.starknet.org/) listing. Do not repeat the programme's "up to $1M in STRK" line as if Rising Revenant received it: that describes the programme, and it would clash with his own $1M raised figure. No screenshots exist locally, so it is a locked slot like Project: Fame. **Solco sits in "The lab"** as entry 01, keeping its `data-project="platform"` overlay, screenshot and live badge. Because a commercial product now sits in the lab, its intro reads "Products and side projects I have designed and built", not "projects I build for the love of it".
- **Project: Fame is a locked slot.** The only sourced fact is his CV line, "Original game title (unreleased / in development)". It therefore has **no overlay, no `data-project` and no invented detail**: a striped "Unannounced" placeholder, an "In development" badge and two honest spec rows. Do not write a pitch, metrics, feature list or screenshots for it until Giorgio supplies real ones. `.f-card.locked` also cancels the hover treatment so it does not read as clickable.
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

## The hero portrait

The embedded base64 photo is **400x444, not the original 400x400**. The source crop cut the top of his hair, so on 12 Aug 2026 the canvas was extended 44px upward and the new band filled with the wall behind him (top rows sampled per column, subject columns interpolated out, blurred and faded with height). Do not swap it back to the square original, and do not try to fix headroom with `object-position`: the frame is `aspect-ratio:3/4` so the image fills it exactly on the vertical and the Y offset does nothing. The script that built it is in the session scratchpad as `extend-portrait.ps1`.

## Backlog (Giorgio's requested next steps, in priority order)

1. **Clickable projects → detail pages.** Each project card should open a rich detail view (screenshots, feature list, stack, story). Decided approach: detail pages/views on the site itself, since none of the apps are publicly deployed. Live-demo and GitHub links can be added per project later as they come online. Screenshots need to be captured from the locally running apps (see LOCAL_SETUP.md one level up in `..\` for how to run each).
2. **Less verbose copy.** Tighten everything. Shorter card descriptions, shorter section intros. Keep the facts, cut the prose.
3. ~~**Responsive design as a priority.**~~ Done 12 Aug 2026 and verified with headless captures at 320, 360, 390, 414, 740 landscape, 768, 820, 900, 1024, 1280 and 1440. Zero horizontal overflow at every width, all 31 reveal elements fire, project overlay and mobile menu both work on a phone. Re-verify these widths after any layout change.
4. Consider whether to stay single-file or migrate to a small Vite/Astro project now that detail pages are coming. Migration is acceptable if it stays static and trivially deployable to Vercel/Netlify.

## Content sources (all local, one level up from this folder)

- CV facts, career history, skills: `..\Slick-CV-Maker\giorgio-bufalino-cv.html` (plus role-specific variants alongside it)
- Grug's Lair company facts, Blob Arena metrics (20,000+ users per Giorgio Jul 2026, the file's 12,204+ is stale; 1,645 peak MAU, 2.1M transactions, AMMA partnership, Starkware pre-seed): `..\Grug's Lair\CLAUDE.md`
- Platform description (fan intelligence, QR capture, segments, Ask Grug): `..\Platform\grugslair-platform-overview.md`
- Dev projects (each has its own README.md + CLAUDE.md): `..\Football-Predictor` (QUANTGRUG), `..\Browser-Bloons-TD` (Blob Padel), `..\Slick-CV-Maker`, `..\Puzzle-Frame-AI` (PuzzleVault), `..\RecipeQuest` (Cozypans), `..\Dice-Roller`, `..\FartGram` (present neutrally)
- **Dungeon Master Codex lives OUTSIDE the Projects folder**, at `C:\Users\Giorgio\Documents\GitHub\dungeon-master-codex`. Giorgio flagged it as missing on 29 Jul 2026. Do not assume the Projects folder is the full inventory. If a project seems absent, ask or search wider before concluding it does not exist.
- How to run any project locally for screenshots: `..\LOCAL_SETUP.md`

## Facts to keep accurate

- Founder & CEO, Grug's Lair, **Nov 2022 to present**. Date conflict resolved by Giorgio 29 Jul 2026: the company was **officially founded in 2023**, but he had been working on it since **Nov 2022**, which is the date the CV and the site use. Both sources were right about different things, so do not "correct" this to 2023.
- Grug's Lair: **raised around $1M** and **built and led an 11 person team**. Investor list corrected by Giorgio 12 Aug 2026 to **PTC, Starkware, Cartridge and Angels**. Tim Ricci is no longer named, so do not reinstate him from older notes or from the CV. The list appears twice on the site, in the record sheet and in the Blob Arena overlay story, so change both together.
- Co-founder & Head of Research, Agrippa Capital, Apr 2019 to Nov 2022. It was a **crypto hedge fund** (confirmed by Giorgio 29 Jul 2026), not a generic "capital research firm".
- Co-founder & Head of Product, Volunteer Space, Jul 2017 to Mar 2018
- Tech Leader, The Alacrity Foundation, Aug 2016 to Jul 2017
- BSc Games Technology, UWE Bristol, 2013 to 2016
- **Hobbies (his own words, 12 Aug 2026):** he collects records and loves electronic music, runs D&D campaigns as dungeon master, games with soulslikes and roguelikes as favourite genres, loves food, and is studying quantum technology in his spare time. Five cards in total, and the grid CSS is tuned to that count. These are the "Off duty" section on the site. The dungeon master card deliberately ties back to Dungeon Master Codex. He asked for this copy to sound human rather than AI written, so keep it first person and conversational. Avoid stacked sentence fragments ("Decks, crates and long mixes."), noun triplets and neat aphoristic closers: those were the exact tells he rejected.
- Based in Bristol, UK. **English is his first language** (he corrected this on 29 Jul 2026; the CV's "English fluent, Italian native" phrasing is misleading). He also speaks Italian.

## Conventions

- Keep the site static and deployable by drag-and-drop. No server, no database, no localStorage requirement.
- Every visible copy change follows the voice rule above.
- Verify responsive layouts in a real browser at the four widths listed before calling anything done.
