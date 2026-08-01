export type ProjectMetric = {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
};

export type ProjectPhase = {
  title: string;
  body: string;
  img: string;
};

export type Project = {
  slug: string;
  title: string;
  tags: string;
  year: string;
  client: string;
  role: string;
  timeline: string;
  tools: string[];
  heroImg: string;
  intro: string;
  overview: string;
  challenge: string;
  goals: string[];
  phases: ProjectPhase[];
  solution: string[];
  gallery: string[];
  metrics: ProjectMetric[];
  quote: { text: string; name: string; role: string };
};

export const PROJECTS: Project[] = [
  {
    slug: "pulse-banking",
    title: "Pulse Banking",
    tags: "Mobile App · UI/UX",
    year: "2026",
    client: "Pulse Financial",
    role: "Lead Product Designer",
    timeline: "16 weeks",
    tools: ["Figma", "Claude", "Maze"],
    heroImg: "https://picsum.photos/id/180/1920/1080",
    intro: "Rebuilding mobile banking around moments, not menus.",
    overview:
      "Pulse Financial's legacy app was losing younger customers to neobanks. Over 16 weeks I led the end-to-end redesign of their mobile experience — from research and IA to a full design system — turning a menu-heavy utility into a personal, glanceable money companion.",
    challenge:
      "The existing app buried everyday actions under five levels of navigation. Support logs showed users failing at basics: finding a card PIN, splitting a bill, understanding pending transactions. Meanwhile the brand felt corporate and cold in a market where competitors feel like consumer products.",
    goals: [
      "Cut time-to-complete for the top 10 tasks by half",
      "Introduce a personalized home feed without overwhelming users",
      "Design a system the in-house team could ship without me",
      "Pass WCAG 2.2 AA across every core flow",
    ],
    phases: [
      {
        title: "Research",
        body: "Three weeks of discovery: 14 customer interviews, support-ticket mining, and a competitive teardown of six neobanks. The insight that reframed everything — users don't think in accounts, they think in moments: payday, rent day, weekend spending.",
        img: "https://picsum.photos/id/20/1200/800",
      },
      {
        title: "Design",
        body: "I mapped the top tasks to a moment-based home feed in Figma, then went straight to a working prototype built with Claude — real screens with real interactions. The card-freeze gesture went through nine coded versions before it felt effortless.",
        img: "https://picsum.photos/id/48/1200/800",
      },
      {
        title: "Delivery",
        body: "The final system shipped as a tokenized Figma library with 120+ components, motion specs, and accessibility annotations. I paired with engineers weekly through the build, reviewing every screen against the design intent.",
        img: "https://picsum.photos/id/119/1200/800",
      },
    ],
    solution: [
      "The redesigned app opens on a feed of cards ranked by relevance: an upcoming bill, a salary just landed, a subscription that doubled in price. Every card expands into its action — pay, freeze, split — without leaving the feed.",
      "A persistent bottom dock keeps the four anchor tasks one thumb-tap away. The visual language moved from corporate blue to a warm dark theme with the brand's coral accent, and every state — loading, empty, error — was designed, not defaulted.",
    ],
    gallery: [
      "https://picsum.photos/id/160/1200/900",
      "https://picsum.photos/id/6/1200/900",
      "https://picsum.photos/id/2/1200/900",
      "https://picsum.photos/id/9/1200/900",
    ],
    metrics: [
      { value: 40, prefix: "+", suffix: "%", label: "Task completion rate" },
      { value: 58, prefix: "-", suffix: "%", label: "Time on top 10 tasks" },
      { value: 4.8, suffix: "★", label: "App Store rating, up from 3.1" },
    ],
    quote: {
      text: "Milan turned a vague product idea into a crystal-clear interface. Our activation rate jumped 40% after launch.",
      name: "Samantha Jones",
      role: "Head of Product at Pulse Financial",
    },
  },
  {
    slug: "orbit-analytics",
    title: "Orbit Analytics",
    tags: "SaaS Dashboard · Design System",
    year: "2025",
    client: "Orbit Data Inc.",
    role: "Senior UI/UX Designer",
    timeline: "12 weeks",
    tools: ["Figma", "Claude", "Hotjar"],
    heroImg: "https://picsum.photos/id/3/1920/1080",
    intro: "Making a power tool feel simple without dumbing it down.",
    overview:
      "Orbit's analytics platform was powerful and unusable in equal measure — 60+ chart types, endless configuration, and a 40% trial drop-off in the first session. I redesigned the core dashboard experience and built the design system that now underpins the whole product.",
    challenge:
      "Power users loved Orbit's depth; everyone else drowned in it. New users faced a blank canvas and a wall of options with no opinion about where to start. Sales demos needed an engineer on the call. The product had features, but no defaults, no hierarchy, and no path.",
    goals: [
      "Get a new user to their first meaningful chart in under 3 minutes",
      "Reduce configuration UI without removing capability",
      "Unify 4 years of inconsistent UI into one system",
      "Keep the power users' keyboard-driven speed intact",
    ],
    phases: [
      {
        title: "Research",
        body: "Session recordings told the story: new users opened the chart builder, hovered, and left. I ran task-based tests with 10 participants and interviewed the 5 heaviest power users to map what 'fast' meant to them before touching a wireframe.",
        img: "https://picsum.photos/id/1/1200/800",
      },
      {
        title: "Design",
        body: "The answer was opinionated defaults: template-first dashboard creation, a smart chart picker that suggests the right visualization from the data shape, and progressive disclosure that hides the 80% of options most users never touch. A Claude-built working prototype let power users test keyboard speed on day one.",
        img: "https://picsum.photos/id/60/1200/800",
      },
      {
        title: "Delivery",
        body: "I rebuilt the UI kit as a themeable token system — light and dark, density modes for data-heavy screens — and documented usage in Storybook alongside the engineers. The system now covers 95% of new feature UI without custom design.",
        img: "https://picsum.photos/id/180/1200/800",
      },
    ],
    solution: [
      "New users now start from live templates seeded with their own data — never a blank canvas. The chart builder leads with a recommendation and tucks advanced configuration behind a single 'customize' surface that power users can bypass entirely with shortcuts.",
      "A consistent 8pt-grid component system replaced the patchwork UI: one table, one filter bar, one date picker — everywhere. Dashboards finally feel like one product, and dark mode shipped for free from the token architecture.",
    ],
    gallery: [
      "https://picsum.photos/id/366/1200/900",
      "https://picsum.photos/id/201/1200/900",
      "https://picsum.photos/id/48/1200/900",
      "https://picsum.photos/id/119/1200/900",
    ],
    metrics: [
      { value: 62, prefix: "-", suffix: "%", label: "First-session drop-off" },
      { value: 3, suffix: " min", label: "Median time to first chart" },
      { value: 120, suffix: "+", label: "Components in the new system" },
    ],
    quote: {
      text: "Rare mix of craft and strategy. Every screen felt intentional, and the design system still scales with us today.",
      name: "Alex Chavez",
      role: "CTO at Orbit Data Inc.",
    },
  },
  {
    slug: "kindred-health",
    title: "Kindred Health",
    tags: "Web Platform · UX Research",
    year: "2025",
    client: "Kindred Care Group",
    role: "UX Designer & Researcher",
    timeline: "10 weeks",
    tools: ["Figma", "Gemini", "Maze"],
    heroImg: "https://picsum.photos/id/119/1920/1080",
    intro: "Designing calm into a stressful moment: booking care online.",
    overview:
      "Kindred's patient portal was built for administrators, not patients. Booking an appointment took 11 steps and a phone call. I led research and redesign of the patient journey — appointment booking, results, and messaging — for a platform serving 200,000 patients.",
    challenge:
      "Users arrive anxious. They're booking care for themselves or a parent, often on a phone, often in a hurry. The old portal met them with insurance jargon, dead-end error states, and forms that reset on validation errors. 30% of booking attempts ended in a call to the front desk — the exact cost the portal was meant to remove.",
    goals: [
      "Make booking possible in under 2 minutes on mobile",
      "Write every screen in plain language at an 8th-grade reading level",
      "Design for stressed, older, and low-vision users first",
      "Cut booking-related support calls by half",
    ],
    phases: [
      {
        title: "Research",
        body: "I shadowed front-desk staff for two days, listening to the calls the portal caused. Usability tests with 12 patients aged 29–78 — including screen-reader and low-vision sessions — were synthesized with Gemini into a severity-ranked map of 40 friction points, in hours instead of a week.",
        img: "https://picsum.photos/id/25/1200/800",
      },
      {
        title: "Design",
        body: "The new booking flow asks one question per screen — who, why, when — with plain-language copy reviewed by a health-literacy specialist. Insurance verification moved to the end, asynchronous, so it never blocks the appointment.",
        img: "https://picsum.photos/id/36/1200/800",
      },
      {
        title: "Delivery",
        body: "Every component shipped with accessibility acceptance criteria: focus order, ARIA labels, 200% zoom behavior. I ran validation rounds with the same participants from discovery — the flow tested at 100% completion in the final round.",
        img: "https://picsum.photos/id/76/1200/800",
      },
    ],
    solution: [
      "Booking is now a conversation, not a form: three plain-language questions, visible progress, and a running summary the patient can edit at any point. Time slots load with real availability and one-tap rescheduling replaced the cancellation dead end.",
      "Results and messages moved to a single timeline view — no more hunting through tabs. High-contrast, large-type by default, the interface passed WCAG 2.2 AA and, more importantly, testing with the actual patients who struggled most with the old portal.",
    ],
    gallery: [
      "https://picsum.photos/id/152/1200/900",
      "https://picsum.photos/id/160/1200/900",
      "https://picsum.photos/id/175/1200/900",
      "https://picsum.photos/id/342/1200/900",
    ],
    metrics: [
      { value: 90, suffix: " sec", label: "Median mobile booking time" },
      { value: 54, prefix: "-", suffix: "%", label: "Booking support calls" },
      { value: 100, suffix: "%", label: "Final-round task completion" },
    ],
    quote: {
      text: "Milan designed with real empathy — our oldest patients now book online without calling us. That never happened before.",
      name: "Linda Brown",
      role: "Digital Director at Kindred Care Group",
    },
  },
  {
    slug: "forma-studio",
    title: "Forma Studio",
    tags: "Brand · Web Design",
    year: "2024",
    client: "Forma Architecture Studio",
    role: "Designer & Webflow Developer",
    timeline: "8 weeks",
    tools: ["Figma", "Webflow", "Adobe Suite"],
    heroImg: "https://picsum.photos/id/1076/1920/1080",
    intro: "A portfolio as considered as the buildings it shows.",
    overview:
      "Forma is a boutique architecture studio whose work is quiet, precise, and photographed beautifully — none of which their template website communicated. I designed and built a new identity-led site that lets the work breathe and wins the studio the clients it deserves.",
    challenge:
      "Architecture portfolios are a crowded genre of full-bleed photos and thin serif type. Forma needed to feel distinct without shouting — and the site had to be maintainable by two architects with no design tools, publishing new projects themselves in an afternoon.",
    goals: [
      "Create a visual identity that extends from site to proposals",
      "Make each project page feel like a printed monograph",
      "Hand over a CMS the studio can run without me",
      "Load in under 2 seconds on a gallery-heavy page",
    ],
    phases: [
      {
        title: "Research",
        body: "I audited 20 studio sites with the founders, marking what felt generic versus honest. Workshops surfaced the studio's voice: material, restrained, warm. That became the design brief — and the typography direction followed from their construction drawings.",
        img: "https://picsum.photos/id/101/1200/800",
      },
      {
        title: "Design",
        body: "The system pairs an editorial grid with generous whitespace and a single accent drawn from terracotta. Project pages read like chapters: a full-bleed opener, drawings beside photographs, and captions set like plate numbers in a monograph.",
        img: "https://picsum.photos/id/122/1200/800",
      },
      {
        title: "Delivery",
        body: "Built in Webflow with a CMS structure matched to how the studio actually documents projects. I recorded walkthrough videos and ran a handover session — the founders published their next project unassisted three days after launch.",
        img: "https://picsum.photos/id/142/1200/800",
      },
    ],
    solution: [
      "The site opens with the studio's best photograph and nothing else — no carousel, no tagline soup. Navigation is two words. Each project page sequences hero, concept, drawings, and detail shots in a rhythm designed around how architects present work in person.",
      "Image delivery is aggressively optimized: responsive sources, lazy loading, and a palette-matched blur-up so the gallery pages feel instant. The whole site scores 98+ on performance while carrying full-resolution photography.",
    ],
    gallery: [
      "https://picsum.photos/id/1076/1200/900",
      "https://picsum.photos/id/122/1200/900",
      "https://picsum.photos/id/101/1200/900",
      "https://picsum.photos/id/142/1200/900",
    ],
    metrics: [
      { value: 3, suffix: "×", label: "Qualified inquiries per month" },
      { value: 98, label: "Lighthouse performance score" },
      { value: 2, suffix: " days", label: "To first self-published project" },
    ],
    quote: {
      text: "Milan understood our studio better than we could articulate it ourselves. The site feels like us — clients say so on the first call.",
      name: "Marco Isaac",
      role: "Founding Partner at Forma Studio",
    },
  },
];

export function getProject(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}

export function getNextProject(slug: string): Project {
  const index = PROJECTS.findIndex((p) => p.slug === slug);
  return PROJECTS[(index + 1) % PROJECTS.length];
}
