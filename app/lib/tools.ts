export type Tool = {
  index: string;
  name: string;
  category: string;
  level: string;
};

/** Single source for the toolbox — rendered in full on the home page
 *  (TechStack) and as names only on the CV. */
export const TOOLS: Tool[] = [
  {
    index: "01",
    name: "Figma",
    category: "Interface Design & Design Systems",
    level: "Expert",
  },
  {
    index: "02",
    name: "Claude",
    category: "Prototyping & Working Code",
    level: "Daily Driver",
  },
  {
    index: "03",
    name: "Cursor",
    category: "Frontend Development",
    level: "Advanced",
  },
  {
    index: "04",
    name: "Adobe Suite",
    category: "Visual Design & Illustration",
    level: "Advanced",
  },
  {
    index: "05",
    name: "Webflow",
    category: "No-Code Development",
    level: "Advanced",
  },
  {
    index: "06",
    name: "Chat GPT",
    category: "Brainstorming, Research & Content",
    level: "Advanced",
  },
  {
    index: "07",
    name: "Gemini",
    category: "Research Synthesis & Ideation",
    level: "Advanced",
  },
  {
    index: "08",
    name: "GitHub",
    category: "Version Control & Collaboration",
    level: "Working Knowledge",
  },
];
