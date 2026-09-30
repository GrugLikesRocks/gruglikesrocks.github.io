// Every word a visitor reads lives here, so the copy can be checked in one place.
// Facts come from Giorgio's cv.md. Run _work/tools/voice-scan.mjs over this file before shipping.

const img = (name: string) => `${import.meta.env.BASE_URL}img/${name}.webp`;

export const EMAIL = 'giorgiobufalino@gmail.com';
export const MAILTO = `mailto:${EMAIL}`;

export const nav = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export const hero = {
  greeting: "Hi, I'm",
  name: 'Giorgio',
  line: 'Giorgio Bufalino. Product leader with 7+ years owning product end to end.',
  portrait: img('portrait'),
  portraitAlt: 'Giorgio Bufalino',
};

export const about = {
  heading: 'About me',
  lead: "Product leader with 7+ years owning product end to end. I take products from first idea to live release, then keep improving them on real user data. Most recently I was CEO and Product Owner at Grug's Lair, the sole PM on every title the studio made.",
  stats: [
    { value: '20,000+', label: 'Blob Arena users' },
    { value: '2.1M', label: 'In-game transactions' },
    { value: '11', label: 'Products designed and built' },
  ],
};

// His own words from the old site (12 Aug 2026). Keep them first person and conversational.
export const offDuty = {
  heading: 'Off duty',
  items: [
    {
      name: 'Music / DJ',
      text: 'I collect records and love electronic music. Nothing beats dropping a record you have been sitting on for weeks and feeling the room catch it.',
    },
    {
      name: 'Dungeon master',
      text: 'I run D&D campaigns for my friends. Building worlds and then improvising when the players ignore all of it is the best part of my week. Omenkeeper came out of running those games.',
    },
    {
      name: 'Gaming',
      text: 'Mostly soulslikes and roguelikes. I like games that expect you to work it out for yourself and let you fail until you do.',
    },
    {
      name: 'Food',
      text: 'I love food. Finding somewhere great to eat is the best part of going anywhere new.',
    },
    {
      name: 'Quantum tech',
      text: 'I am studying quantum technology in my spare time. It sits completely outside anything I ship, which is exactly why I like it.',
    },
  ],
};

export const services = {
  heading: 'What I do',
  items: [
    {
      name: 'Product',
      text: 'Strategy, roadmaps, specs and backlog. I run discovery with users, set the KPIs and take a product from first idea through launch and the updates after it.',
    },
    {
      name: 'Strategy and leadership',
      text: 'Company strategy, partnerships and hiring. I built and led an 11 person team across engineering, art, marketing and partnerships.',
    },
    {
      name: 'Engineering',
      text: 'TypeScript, React, Node and Postgres. I build my own products solo with Claude and Codex, from the data model to the deployed app.',
    },
    {
      name: 'Data and blockchain',
      text: 'Python, model evaluation and analytics, plus blockchain technology and forensics from years inside a crypto hedge fund.',
    },
    {
      name: 'Game design',
      text: 'Combat systems, progression, quests, leaderboards and reward loops, with an in-game economy balanced to hold them together.',
    },
  ],
};

export type Shot = { src: string; alt: string; position?: string };
export type Project = {
  name: string;
  category: string;
  text: string;
  url: string;
  shots: [Shot, Shot, Shot];
};

export const projects = {
  heading: 'Projects',
  button: 'Live project',
  items: [
    {
      name: 'Blob Arena',
      category: "Grug's Lair",
      text: 'The official interactive game of AMMA. Turn based combat with progression, quests and leaderboards, live on iOS and Android.',
      url: 'https://apps.apple.com/us/app/blob-arena/id6751915702',
      shots: [
        { src: img('blob-a'), alt: 'Blob Arena fighters in the cage', position: '80% center' },
        { src: img('blob-b'), alt: 'Blob Arena weekly leaderboard' },
        { src: img('blob-c'), alt: 'Blob Arena screens: arcade mode, the AMMA fighters and the move loadout' },
      ],
    },
    {
      name: 'Solco',
      category: 'Solo build',
      text: 'B2B SaaS for live events. Captures the crowd, segments it and proves its worth to sponsors and councils.',
      url: 'https://solco.live',
      shots: [
        { src: img('solco-a'), alt: 'Solco home page', position: 'left center' },
        { src: img('solco-b'), alt: 'Solco activation section' },
        { src: img('solco-c'), alt: 'Solco sponsor report with audience figures', position: 'left top' },
      ],
    },
    {
      name: 'QUANTGRUG',
      category: 'Solo build',
      text: 'Football prediction engine, benchmarked against Pinnacle closing odds across 18,500+ unseen predictions.',
      url: 'https://quantgrug.vercel.app',
      shots: [
        { src: img('quant-a'), alt: 'QUANTGRUG matchday predictions', position: 'left top' },
        { src: img('quant-b'), alt: 'QUANTGRUG model analytics with backtest charts', position: 'left top' },
        { src: img('quant-c'), alt: 'QUANTGRUG command centre dashboard', position: 'left top' },
      ],
    },
    {
      name: 'Omenkeeper',
      category: 'Solo build',
      text: 'Campaign command centre for D&D 5e. Quests, secrets, clue webs and combat, built for my own table.',
      url: 'https://dm-codex-rho.vercel.app',
      shots: [
        { src: img('omen-a'), alt: 'Omenkeeper quest board', position: 'left top' },
        { src: img('omen-b'), alt: 'Omenkeeper landing page', position: 'center top' },
        { src: img('omen-c'), alt: 'Omenkeeper campaign dashboard', position: 'left top' },
      ],
    },
  ] as Project[],
  more: {
    lead: '11 products designed and built.',
    label: 'The other seven',
    items: [
      { name: 'Blob Padel', url: 'https://blob-padel.vercel.app' },
      { name: 'PuzzleVault', url: 'https://puzzlevault.vercel.app' },
      { name: 'Cozypans', url: 'https://cozypans.vercel.app' },
      { name: 'Dice Roller', url: 'https://dice-roller-one-alpha.vercel.app' },
      { name: 'Short-video social app' },
      { name: 'Rising Revenant', note: 'development paused' },
      { name: 'Project: Fame', note: 'unreleased' },
    ] as { name: string; url?: string; note?: string }[],
  },
};

// Marquee tiles: his own product imagery, split across the two rows.
const tile = (name: string, alt: string) => ({ src: img(`m-${name}`), alt });
export const marquee = {
  rowOne: [
    tile('blob-arena', 'Blob Arena'),
    tile('solco-hero', 'Solco'),
    tile('quant-matchday', 'QUANTGRUG'),
    tile('omen-dashboard', 'Omenkeeper'),
    tile('padel-gameplay', 'Blob Padel'),
    tile('blob-phones', 'Blob Arena'),
    tile('puzzle-home', 'PuzzleVault'),
    tile('solco-report', 'Solco'),
    tile('cozypans', 'Cozypans'),
    tile('rr-keyart', 'Rising Revenant'),
  ],
  rowTwo: [
    tile('quant-dashboard', 'QUANTGRUG'),
    tile('omen-landing', 'Omenkeeper'),
    tile('blob-ranks', 'Blob Arena'),
    tile('solco-activate', 'Solco'),
    tile('dice-roller', 'Dice Roller'),
    tile('quant-match', 'QUANTGRUG'),
    tile('puzzle-catalog', 'PuzzleVault'),
    tile('omen-quests', 'Omenkeeper'),
    tile('blob-arcade', 'Blob Arena'),
    tile('solco-prove', 'Solco'),
  ],
};

export const experience = {
  heading: 'Experience',
  items: [
    {
      role: 'CEO & Product Owner',
      org: "Grug's Lair",
      when: 'Nov 2022 to Sep 2026',
      text: 'Sole PM across every studio title, from discovery through to live ops. Shipped Blob Arena on iOS and Android to 2.1M in-game transactions. Founded the studio, raised pre-seed from VCs and led an 11 person team for 4 years.',
    },
    {
      role: 'Head of Research, Product & Project Manager',
      org: 'Agrippa Capital',
      when: 'Apr 2019 to Nov 2022',
      text: 'Owned delivery of the research product at a crypto hedge fund. Built the research function from nothing and wrote the investment memos and sector reports that drove capital allocation.',
    },
    {
      role: 'Head of Product',
      org: 'Volunteer Space',
      when: 'Jul 2017 to Mar 2018',
      text: 'Shared responsibility for product direction and the business model on a volunteer management and recruitment platform. Designed the marketplace flows for discovery, matching and activation.',
    },
    {
      role: 'Tech Leader',
      org: 'The Alacrity Foundation',
      when: 'Aug 2016 to Jul 2017',
      text: 'Selective graduate technology programme focused on customer discovery, product validation and business development.',
    },
    {
      role: 'BSc Games Technology',
      org: 'University of the West of England',
      when: '2013 to 2016',
      text: 'Computer games and programming.',
    },
  ],
};

// From the Skills list in cv.md, trimmed to the product-led rules: no fundraising or founder items here.
export const skills = {
  heading: 'Skills',
  groups: [
    {
      name: 'Product',
      items: ['Product strategy and roadmapping', 'Feature specs and GDDs', 'User stories', 'Backlog management', 'Sprint planning and prioritisation', 'KPI definition and tracking', 'GTM planning', 'User research and feedback loops', 'Agile delivery'],
    },
    {
      name: 'Strategy and leadership',
      items: ['Vision setting', 'OKRs', 'Business model design', 'Executive team leadership', 'Cross-functional team management', 'Hiring', 'Partnerships and business development', 'Board and stakeholder communication'],
    },
    {
      name: 'Engineering',
      items: ['TypeScript', 'React', 'Node and Express', 'Postgres', 'Building with Claude and Codex', 'Unity and C# foundations', 'Unreal Engine 4 and C++ familiarity'],
    },
    {
      name: 'Data and blockchain',
      items: ['Python', 'Statistical modelling', 'Machine learning ensembles', 'Model evaluation', 'Analytics', 'Blockchain technology', 'Blockchain forensics', 'Starknet and the Dojo engine'],
    },
    {
      name: 'Research and analysis',
      items: ['Investment research and memos', 'Market and competitive analysis', 'Sector mapping', 'Due diligence', 'Portfolio and risk analysis', 'P&L oversight', 'Crypto and digital asset markets', 'Technology trend analysis'],
    },
    {
      name: 'Game design',
      items: ['Combat systems and fighter abilities', 'Progression systems', 'Game economy and reward balancing', 'Achievements and quests', 'Leaderboards', 'Player behaviour analysis'],
    },
    {
      name: 'Tools',
      items: ['Notion', 'Jira', 'Confluence', 'Figma', 'Google Workspace', 'Airtable', 'Excel and Google Sheets', 'Crunchbase'],
    },
    {
      name: 'Languages',
      items: ['English (native)', 'Italian (native)'],
    },
  ],
};

export const contact = {
  heading: "Let's talk",
  text: "If you need someone who can own a product from strategy to shipped code, let's talk.",
  availability: 'Open to new roles · Bristol, UK or remote · Open to relocation within the UK',
  button: 'Contact me',
  links: [
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/giorgiobufalino' },
    { label: 'GitHub', url: 'https://github.com/GrugLikesRocks' },
    { label: 'X', url: 'https://x.com/gruglikesrocks' },
  ],
  footer: 'Giorgio Bufalino',
};
