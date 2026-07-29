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
- Email giorgiobufalino@gmail.com · LinkedIn linkedin.com/in/giorgiobufalino · GitHub username TBD (placeholder until provided)
- Languages: English fluent, Italian native
- Photo: embedded in current index.html, original at `..\Slick-CV-Maker\giorgio-profile.jpeg`

### Career (dates from his CV, use these exactly)
- **Founder & CEO, Grug's Lair** · Nov 2022 to present · Bristol/London. Leads strategy, product vision and fundraising for a fan intelligence and engagement platform for sports organisations. Closed pre-seed backing from Starkware (lead), Tim Ricci and Cartridge. Raising a seed round. BFI certified UK studio. Team of ~10.
- **Co-founder & Head of Research, Agrippa Capital** · Apr 2019 to Nov 2022. Built the research function from scratch, led market analysis and investment research, produced insight reports for internal stakeholders and external partners.
- **Co-founder & Head of Product, Volunteer Space** · Jul 2017 to Mar 2018 · Newport, UK. Marketplace connecting volunteers with organisations. Contributed to raising pre-seed funding from UK investors.
- **Tech Leader, The Alacrity Foundation** · Aug 2016 to Jul 2017 · Newport, UK. Graduate entrepreneurship programme: customer discovery, challenge-led innovation.
- **BSc Games Technology, University of the West of England** · Sep 2013 to May 2016. Computer games and programming.

### Flagship work (Grug's Lair)
**Blob Arena**, mobile-first competitive sports battler, the official interactive game of AMMA (Armored MMA). Turn-based combat, arcade pacing, leagues, weekly leaderboards, seasonal challenges, live event tie-ins. Unity + C#, on-chain referral and revenue system on Starknet. Launched iOS and Android Nov 2025, public early access. Metrics: 12,204+ total users, peak MAU 1,645 (Oct 2025), 2,140,411 in-game transactions, ~12.5% on-site conversion at AMMA events, ~250 new users per event, 8 US events activated. AMMA broadcasts on Prime Video.

**Grug's Lair Platform**, B2B fan intelligence and engagement SaaS for combat sports promoters. QR activation network captures fans at live events in under 10 seconds into promoter-owned profiles. Automated behavioural segmentation (Whales, Engaged, Dormant, Discovery) with geographic mapping. Engagement products: Blob Arena at events, Raffle Engine, Draft Pit (in development), Creative Kit auto-generated promo assets. "Ask Grug" AI copilot recommends next-best campaigns. Target customer: promoters running 4 to 50 events per year.

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
- Founder & strategy: company strategy, fundraising, investor relations, business development, partnerships, team leadership, pitch decks
- Product & game design: product management, game design, game economy design, live ops, UX, market research
- Engineering: TypeScript, React, Node + Express, Postgres + Drizzle, pnpm monorepos, OpenAPI codegen, Unity + C#, Expo/React Native
- Data & AI: Python, FastAPI, scikit-learn, XGBoost, model evaluation, Claude/LLM integration, analytics, Starknet

---

## 3. Design and copy rules

- Dark and bold, almost futuristic: navy near-black `#050810`, electric blue accent `#45c4ff`, indigo secondary `#6d7cff`, Space Grotesk display, Inter body, JetBrains Mono labels. (Palette changed from lime/violet per Giorgio, 29 Jul 2026.)
- Mobile-first. Disable hover tilt on touch devices. Respect `prefers-reduced-motion`.
- Copy voice: founder tone, confident and direct. Never use oxford commas. Never use em dashes anywhere in site copy. Short sentences beat long ones. If a sentence works without a word, cut the word.
- Less verbose everywhere: project card blurbs max ~30 words, detail pages carry the depth instead.
- Every project card opens a detail view (page or full-screen overlay) with: one-line pitch, the story, feature list, stack, metrics where they exist, screenshot slots, and space for live/GitHub links later.

## 4. Seed backlog for iteration 1

Start the first ASSESS knowing these are Giorgio's stated priorities: project detail pages first, tighter copy second, responsive polish third. Weight your first three iterations accordingly.
