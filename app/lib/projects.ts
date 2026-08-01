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
  /** Real client screenshots render true-colour instead of duotone-toned. */
  realImagery?: boolean;
  intro: string;
  overview: string;
  challenge: string;
  goals: string[];
  phases: ProjectPhase[];
  solution: string[];
  gallery: string[];
  metrics: ProjectMetric[];
  quote: { text: string; name: string; role: string };
  /** Keeps the quote data in place but stops it rendering on the case study. */
  hideQuote?: boolean;
};

export const PROJECTS: Project[] = [
  {
    slug: "kiddoz-lk",
    title: "Kiddoz.lk",
    tags: "E-Commerce · UI/UX Redesign",
    year: "2026",
    client: "Kiddoz.lk",
    role: "UI/UX Designer",
    timeline: "4 weeks",
    tools: ["Figma"],
    heroImg: "/images/project1/bannernew.png",
    realImagery: true,
    intro:
      "Sri Lanka's biggest kids store, rebuilt around the mother behind every order.",
    overview:
      "Kiddoz.lk sells everything from newborn essentials to teen gear, but their old site converted like a catalogue instead of a store. Over four weeks I redesigned the full shopping experience with a mascot-led visual system, journey-based navigation, and a stripped-back ordering flow, so a mother browsing between school runs can find the right product and finish her order in one sitting.",
    challenge:
      "Almost every buyer on Kiddoz is a mother, often shopping on a phone with a child on her hip. The old site gave her a generic marketplace grid: no sense of who it was for, no way to shop by the stage her child is in, and a checkout long enough that carts were being abandoned halfway. The brand had a mascot sitting in the logo doing nothing, while the interface itself felt cold and adult. My challenge was to make a kids store actually feel like one, playful enough for the theme and calm enough for the mother paying for it.",
    goals: [
      "Design a kids-and-mother-friendly interface that still reads as trustworthy",
      "Build a mascot system that carries the brand across every page",
      "Make the site mobile-first, because that is where the mothers are",
      "Lay an SEO-ready structure with clean hierarchy, category and brand landing pages",
    ],
    phases: [
      {
        title: "Research",
        body: "I started with the buyer, not the catalogue. I mapped the five stages a Kiddoz customer moves through, from discovering the store to receiving the parcel, then tested that map against three personas: the new parent, the expecting mother, and the caregiver buying for someone else's child. The same pain points kept surfacing. Too many near-identical products, no guidance on what suits which age or size, and nothing that told her when the order would actually arrive. A competitor audit of the local baby and kids market found the same gap in every store, and that became the opportunity: none of them were designing for how a mother really shops.",
        img: "/images/project1/research.png",
      },
      {
        title: "Design",
        body: "The logo already had a mascot, so I built a family around it: a whole cast in different poses, outfits, and moods, used as section guides, empty states, banner characters, and category markers. In Figma I worked through several homepage and category directions before landing on the one that balanced play with clarity. Soft pastel surfaces, rounded cards, one confident pink to blue brand system, and product information that never gets buried under decoration.",
        img: "/images/project1/design.png",
      },
      {
        title: "Delivery",
        body: "The handover covered the full flow across desktop and mobile: home, category, brand, product, cart, and checkout, all on a consistent component library with states for every card, badge, and button. Deal modules, delivery promises, and payment plan options were designed as reusable blocks, so the Kiddoz team can restock the homepage for a new season without touching the layout.",
        img: "/images/project1/delivery.png",
      },
    ],
    solution: [
      "The homepage now opens with a promise instead of a product wall. Under 'Sri Lanka's Trusted Baby & Kids Store' sits a 'Shop For' row that asks where the mother is in her journey: new parent, expecting, quick restock, school essentials. Shop By Age sits beside Shop By Category in the nav, so a buyer unsure of sizing never has to guess. Mascots ride through the page as section characters, and the offer bar keeps free delivery and bank offers permanently in view.",
      "Product pages do the reassuring the old site never did: real pricing with the saving spelled out, star ratings, seller and brand links, size and weight guidance built into the imagery, illustrated highlight icons, local payment plans, and a same-day delivery cut-off stated before the add to cart. Buy Now sits next to Add to Cart so a decided buyer can skip the cart entirely, the single biggest change to the ordering flow and the one aimed straight at the drop-off rate.",
    ],
    gallery: [
      "/images/project1/solution-1.png",
      "/images/project1/solution-2.png",
      "/images/project1/solution-3.png",
      "/images/project1/solution-4.png",
    ],
    metrics: [
      { value: 4, suffix: " weeks", label: "Concept to full handover" },
      { value: 3, label: "Steps from product to placed order" },
      { value: 40, suffix: "+", label: "Screens across desktop and mobile" },
    ],
    // Placeholder copy: hidden until the real client feedback comes in.
    hideQuote: true,
    quote: {
      text: "Milan understood our buyers better than we did. The mascots made the site feel like ours, and the new ordering flow is far easier for mothers to get through.",
      name: "Kiddoz.lk",
      role: "Client",
    },
  },
  {
    slug: "sweetwater-resort",
    title: "SweetWater Resort",
    tags: "Hospitality · Website UI Design",
    year: "2026",
    client: "SweetWater Resort",
    role: "UI/UX Designer",
    timeline: "3 weeks",
    tools: ["Figma"],
    heroImg: "/images/project2/banner.png",
    realImagery: true,
    intro:
      "A lakeside resort that people loved and a website that was quietly losing them bookings.",
    overview:
      "SweetWater Resort is a small family run cabin resort on Fish Trap Lake, with a site that had not moved since the early 2000s. Everything about the place was warm and the website was not: stacked blue nav bars, a tiny availability button, no real photography, and nothing usable on a phone. I redesigned the full site UI around one job, getting a family from 'this looks nice' to a booked cabin, mobile first and in as few taps as possible.",
    challenge:
      "The old site had the information but hid it. Ten menu items sat in a row of blue tabs, the only booking entry point was a small 'Availability' button buried under a welcome message, and the photos of the lake, the beach, and the cabins, which are the entire reason someone books, were shrunk into a narrow banner. On a phone it was worse: the desktop layout simply scaled down, so every tap was a guess. Guests were calling to ask what the site already answered, and the resort was competing for summer bookings against Airbnb listings that looked ten years newer.",
    goals: [
      "Design mobile first, because holiday planning happens on a phone",
      "Cut ten nav items down to the five people actually use",
      "Put booking within reach on every screen, not behind one small button",
      "Let the lake and the cabins sell the stay through full-bleed photography",
    ],
    phases: [
      {
        title: "Research",
        body: "I started with the existing site and the questions it was failing to answer. Auditing every page surfaced the same pattern: content was there, hierarchy was not. Rates, cabins, FAQ, things to do, and directions all competed at the same level, so a first-time visitor had no route through. I mapped how a family actually plans a lake trip, dreaming, comparing, checking dates, then booking, and compared it against nearby resorts and Airbnb listings competing for the same summer weekends. The gap was obvious. Every competitor led with photography and a date picker; SweetWater led with a menu.",
        img: "/images/project2/research.png",
      },
      {
        title: "Design",
        body: "The redesign keeps the resort's identity, the pines and the green, and rebuilds everything around it. A full-bleed sunset hero replaces the banner strip, the ten-item nav collapses to five plus a phone number and a permanent Book Now, and the type moves to a clean modern sans with room to breathe. I designed mobile layouts alongside desktop rather than after it, so the phone version has its own hero crop, its own stacked cabin cards, and thumb-reachable actions instead of a shrunken desktop page.",
        img: "/images/project2/design.png",
      },
      {
        title: "Result",
        body: "The finished UI reads like the resort itself: unhurried, warm, and specific. 'The lake sets the pace here' opens the story section, backed by the details that actually matter to a booking decision, 13.7 miles of shoreline, the fish in it, the gardens, and an honest note that there is Wi-Fi in the cabins but no TVs. Every section ends with one clear next step, and Book Now never leaves the screen.",
        img: "/images/project2/result.png",
      },
    ],
    solution: [
      "Navigation went from ten competing tabs to five: About Us, Cabins, Things To Do, Gallery, Rates, with the phone number and a Book Now pill pinned to the right of the header on desktop and inside the mobile menu. The homepage now opens on the lake at sunset with two choices only, Book Your Stay or Explore the Cabins, so the visitor picks a lane in the first second instead of reading a menu.",
      "The booking flow is the whole point of the redesign. Cabin cards carry the photo, the character of the place, and a single View Cabin link, with stay length and the dog friendly policy stated up front so the questions that used to become phone calls are answered before the date picker. Rates sit one tap from the cabins, the gallery is a proper masonry grid of lake life instead of a banner, and on mobile every primary action sits in thumb reach.",
    ],
    gallery: [
      "/images/project2/solution1.png",
      "/images/project2/solution2.png",
      "/images/project2/solution3.png",
      "/images/project2/solution4.png",
    ],
    metrics: [
      { value: 3, suffix: " weeks", label: "Audit to full UI handover" },
      { value: 15, suffix: "+", label: "Screens across mobile and desktop" },
      { value: 3, label: "Taps from landing to booking" },
    ],
    // Placeholder copy: hidden until the real client feedback comes in.
    hideQuote: true,
    quote: {
      text: "Our old site never showed people what the resort actually feels like. The new design does, and guests can finally book from their phone without calling us first.",
      name: "SweetWater Resort",
      role: "Client",
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
