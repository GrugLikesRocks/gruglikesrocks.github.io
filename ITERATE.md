# Portfolio iteration loop

You are working on Giorgio Bufalino's portfolio website in this folder. Your job is to run an improvement loop: assess the site, make the single highest-impact improvement, verify it, then loop again. Do not wait for permission between iterations. Keep going until a stop condition is hit.

Read `CLAUDE.md` in this folder first if you have not already. It carries the locked decisions. Nothing below overrides it, this file adds the loop protocol and the full content source of truth.

---

## 1. The loop

Each iteration follows exactly this cycle:

**ASSESS.** Open the current site and score it 1 to 10 on each dimension:
- Visual impact (does it feel dark, bold, modern, memorable)
- Responsiveness (360px, 768px, 1024px, 1440px, all flawless)
- Copy tightness (no verbosity, every sentence earns its place)
- Project depth (can a visitor click a project and properly understand it)
- Performance (loads fast, no jank, animations smooth, Lighthouse 90+)
- Accessibility (contrast, keyboard nav, alt text, reduced-motion support)
- Credibility (do the facts, metrics and story sell a founder who builds)

**PICK.** Choose the lowest-scoring dimension. Within it, pick the single change with the best effort-to-impact ratio. One focused change per iteration, not a grab bag.

**BUILD.** Implement it. Respect every rule in section 3.

**VERIFY.** Load the site in a real browser at all four widths. Screenshot, look at the screenshots, fix what is off. A change that breaks another breakpoint is not done. Re-run the score for the dimension you touched.

**LOG.** Append one line to `ITERATION_LOG.md` in this folder: iteration number, what changed, dimension scores before and after. Commit to git with a clear message if the folder is a repo (init one if not).

**LOOP.** Go back to ASSESS.

### Stop conditions

Stop and summarize for Giorgio when any of these is true:
- Every dimension scores 9 or higher for two consecutive iterations
- You have run 12 iterations
- You need something only Giorgio has (his GitHub username, app screenshots that need apps running, a decision that contradicts a locked decision, anything requiring accounts or payment)

When you stop, list what was done, current scores and the exact things you need from him.

### Guardrails

- NEVER invent facts, metrics, dates, employers or capabilities. Everything you may claim about Giorgio is in section 2 and the source files listed in CLAUDE.md. If a detail page needs a fact you do not have, write around it or leave a clearly marked `<!-- TODO: ask Giorgio -->`.
- Never remove content he approved (all 9 projects stay, the timeline stays, the photo stays).
- The site must remain static and deployable to Netlify or Vercel with zero configuration. Migrating from single-file to a small Vite or Astro project is allowed if that stays true.
- Do not touch the other project folders except to read them.

---

## 2. Content source of truth: Giorgio Bufalino

### Identity
- Giorgio Bufalino, Bristol, UK
- Positioning: founder who builds. Founder and CEO with a games technology background and a track record of building companies at the intersection of technology, data and sports entertainment. He raises the money, designs the product and ships the code.
- Email giorgiobufalino@gmail.com · LinkedIn linkedin.com/in/giorgiobufalino · GitHub github.com/GrugLikesRocks
- Languages: English is his first language, and he speaks Italian (the CV's "English fluent, Italian native" wording is misleading, he corrected it 29 Jul 2026)
- Photo: embedded in current index.html, original at `..\Slick-CV-Maker\giorgio-profile.jpeg`

### Career (dates from his CV, use these exactly)
- **Founder & CEO, Grug's Lair** · Nov 2022 to present · Bristol/London. Officially founded 2023 but he had been working on it since Nov 2022, which is the date to use. Leads strategy, product vision and fundraising. **Raised around $1M** pre-seed from Starkware (lead), Tim Ricci and Cartridge. **Built and led an 11 person team.** Raising a seed round. BFI certified UK studio.
- **Co-founder & Head of Research, Agrippa Capital** · Apr 2019 to Nov 2022. A **crypto hedge fund** (confirmed by Giorgio 29 Jul 2026). Built the research function from scratch, led a research team across gaming, AI and digital consumer markets, produced investment grade reports that shaped portfolio direction.
- **Co-founder & Head of Product, Volunteer Space** · Jul 2017 to Mar 2018 · Newport, UK. Marketplace connecting volunteers with organisations. Contributed to raising pre-seed funding from UK investors.
- **Tech Leader, The Alacrity Foundation** · Aug 2016 to Jul 2017 · Newport, UK. Graduate entrepreneurship programme: customer discovery, challenge-led innovation.
- **BSc Games Technology, University of the West of England** · Sep 2013 to May 2016. Computer games and programming.

### Flagship work (Grug's Lair)
**Blob Arena**, mobile-first competitive sports battler, the official interactive game of AMMA (Armored MMA). Turn-based combat, arcade pacing, leagues, weekly leaderboards, seasonal challenges, live event tie-ins. Unity + C#, on-chain referral and revenue system on Starknet. Launched iOS and Android Nov 2025, public early access. Metrics: 20,000+ total users (Giorgio's correction, 29 Jul 2026; repo docs still say 12,204+ as of Jan 2026, treat those as stale), peak MAU 1,645 (Oct 2025), 2,140,411 in-game transactions, ~12.5% on-site conversion at AMMA events, ~250 new users per event, 8 US events activated. AMMA broadcasts on Prime Video.

**Solco** (solco.live), B2B audience and impact intelligence SaaS. ALWAYS call it Solco, never "Grug's Lair Platform". Live positioning: "Audience & impact intelligence for festivals and live events", tagline "Your audience is alive. Watch it move." For festivals and live events at mid to large scale that need to understand their audience and prove its value. Five modules: Audience, Activations, Impact on the territory, Report & sponsors, White-label app. Real in-app terminology: Fan Intelligence (dormant and top fan views), **Ask Solco** (the AI agent, NOT "Ask Grug"), activations with QR and a public capture page at /c/:slug, presale/waitlist/competition activation types, ticketing CSV ingestion, Festival Map, Venue Impact, Territory Services. Consent is engineered in: marketing consent unticked by default, exports default to consented contacts only. Engineering facts from the July 2026 audits: 1,095 backend tests across 125 files, 78 tables, 64 migrations, 100,000 fan performance benchmark. No customer, revenue or pilot numbers exist, do not invent any.

### Dev projects (the lab, all real local codebases)
1. **QUANTGRUG** (`..\Football-Predictor`): football match prediction engine. Fuses a Python ML ensemble (soft-voting LogisticRegression + RandomForest + XGBoost, Dixon-Coles Poisson model, Elo-logit), de-vigged bookmaker odds and Polymarket prices into blended predictions, Claude writes the analysis. Rigorous rolling-origin walk-forward evaluation over 18,577 out-of-sample predictions benchmarked against Pinnacle closing odds, including finding and killing a feature leak that faked an edge. Leakage regression tests. TypeScript Express 5 API, React + Vite frontend, Python FastAPI ML service, Postgres + Drizzle, OpenAPI codegen, Vitest + pytest + GitHub Actions CI. The honest headline: the model does not yet beat the closing line, and he can explain why that is the interesting part.
2. **Blob Padel** (`..\Browser-Bloons-TD`): arcade padel game, web client + Expo mobile client sharing one Express API in a pnpm monorepo with generated API clients.
3. **Slick CV Maker** (`..\Slick-CV-Maker`): one structured profile in, tailored CV variants out (founder, PM, gaming, finance versions exist). TypeScript pnpm monorepo, Express 5, Drizzle, Orval OpenAPI codegen, HTML and PDF output.
4. **PuzzleVault** (`..\Puzzle-Frame-AI`): the Discogs for jigsaw puzzles. Catalog, collection, journaling, trading, gamification and frame shop, 21 database tables. React, Express, Drizzle.
5. **Cozypans** (`..\RecipeQuest`): bilingual EN/PL photography-first recipe blog with admin area and object storage. React, Express, Drizzle.
6. **Short-video social app** (`..\FartGram`, ALWAYS presented neutrally under this generic name): vertical video feed, auth, uploads, likes, comments, AI-assisted upload verification, storage behind a swappable interface.
7. **Dice Roller** (`..\Dice-Roller`): D20-style roller with persistent roll history. His end-to-end pattern testbed.

Screenshots for detail pages: each app runs locally, `..\LOCAL_SETUP.md` has the port map, database setup and run commands. If an app will not boot, use placeholders and log it, do not fake screenshots.

### Skills (grouped, sourced from CV + real repo stacks)
- Founder & strategy: company strategy, fundraising, investor relations, business development, partnerships, team leadership
- Product & game design: product management, game design, game economy design, live ops, UX, market research
- Engineering: TypeScript, React, Node + Express, Postgres, API design, Unity + C#, React Native

**The toolkit section lists skills and knowledge only.** Build tooling and deliverables do not belong there (Giorgio removed "pnpm monorepos" and by extension "OpenAPI codegen" and "pitch decks" on 29 Jul 2026). Specific tools still belong on project cards and detail pages, where they describe what a thing was built with rather than claiming a competency.
- Data & AI: Python, FastAPI, scikit-learn, XGBoost, model evaluation, Claude/LLM integration, analytics, Starknet

---

## 3. Design and copy rules

- **"Fighter select" direction** (Giorgio's pick, 29 Jul 2026, replacing a generic dark-portfolio look he said screamed "made by Claude"). Flat navy: bg `#0b1220`, panel `#111a2b`, hairline `#1e2a3d`, text `#e8e4dc`, muted `#8494ad`, one signal blue `#4a7fe8`. Space Grotesk 700 display, Inter body, JetBrains Mono HUD (his stated preference, do not change without asking). `border-radius: 0` everywhere. No grain, glow, gradients, marquees or pill buttons. See CLAUDE.md for the full banned list.
- Mobile-first. Disable hover tilt on touch devices. Respect `prefers-reduced-motion`.
- Copy voice: founder tone, confident and direct. Never use oxford commas. Never use em dashes anywhere in site copy. Short sentences beat long ones. If a sentence works without a word, cut the word.
- Less verbose everywhere: project card blurbs max ~30 words, detail pages carry the depth instead.
- Every project card opens a detail view (page or full-screen overlay) with: one-line pitch, the story, feature list, stack, metrics where they exist, screenshot slots, and space for live/GitHub links later.

## 4. Seed backlog for iteration 1

Start the first ASSESS knowing these are Giorgio's stated priorities: project detail pages first, tighter copy second, responsive polish third. Weight your first three iterations accordingly.
