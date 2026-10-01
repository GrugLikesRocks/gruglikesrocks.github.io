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
  lead: "Product leader with 7+ years owning product end to end. I take products from first idea to live release, then keep improving them on real user data. Now looking for a new permanent role. Most recently I was CEO and Product Owner at Grug's Lair, the sole PM on every title the studio made.",
  stats: [
    { value: '7+', label: 'Years owning product end to end' },
    { value: '11', label: 'Products designed and built' },
  ],
};

// Titles only (Giorgio, 30 Sep 2026). His longer lines for each live in the old index.html.
export const offDuty = {
  heading: 'Off duty',
  items: [
    { name: 'Music / DJ' },
    { name: 'Dungeon master' },
    { name: 'Quantum tech' },
    { name: 'Gaming' },
    { name: 'Food' },
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
      text: 'Technical enough to build what I spec and talk implementation with any engineering team. TypeScript, React, Node, Postgres and APIs, Python for data work, plus payments and deploys on Vercel.',
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
        { src: img('solco-c'), alt: 'Who Solco is for: plans from a first club night to large festival groups', position: 'left top' },
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
        { src: img('quant-c'), alt: 'QUANTGRUG dashboard', position: 'left top' },
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
    tile('solco-who', 'Solco'),
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
      items: ['Building 0 to 1 products', 'AI and prompt engineering', 'Building with Claude and Codex', 'Rapid prototyping', 'TypeScript', 'React', 'Node and Express', 'Postgres', 'REST APIs', 'Stripe payments', 'Git and GitHub', 'Vercel deployment', 'Unity and C# foundations', 'Unreal Engine 4 and C++ familiarity'],
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
