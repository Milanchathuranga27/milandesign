"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useReducedMotion } from "../lib/useReducedMotion";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const EXPERIENCE = [
  {
    period: "2024 — Present",
    role: "Senior UI/UX Designer",
    company: "Azbow",
    points: [
      "Lead designer on client products spanning fintech, healthcare, and SaaS — from discovery workshops to developer handoff.",
      "Pioneered the studio's AI-native workflow: research synthesis with Gemini and working prototypes built with Claude, cutting concept-to-test time from weeks to days.",
      "Built and maintain the company-wide Figma component library used across every project.",
      "Mentor two junior designers; run internal design critiques and usability-testing practice.",
    ],
  },
  {
    period: "2022 — 2024",
    role: "UI/UX Designer",
    company: "Nexora Digital",
    points: [
      "Designed web and mobile interfaces for 12+ client projects, owning flows from wireframe to polished UI.",
      "Introduced prototype-based client reviews, cutting revision rounds from five to two on average.",
      "Ran moderated usability tests and translated findings into prioritized design changes.",
    ],
  },
  {
    period: "2021 — 2022",
    role: "Junior UI Designer",
    company: "Brightline Studio",
    points: [
      "Produced UI screens, icons, and marketing visuals under senior direction.",
      "Rebuilt the studio's internal asset library, halving time-to-first-draft on new projects.",
    ],
  },
];

const EDUCATION = [
  {
    period: "2017 — 2021",
    title: "BSc (Hons) in Information Technology",
    place: "University of Moratuwa, Sri Lanka",
  },
  {
    period: "2023",
    title: "Google UX Design Professional Certificate",
    place: "Coursera",
  },
];

const SKILLS = [
  "User Research & Interviews",
  "AI-Assisted Prototyping",
  "Interaction Design",
  "Design Systems",
  "AI Research Synthesis",
  "Usability Testing",
  "Accessibility (WCAG 2.2)",
  "Developer Handoff",
];

const TOOLS = [
  "Figma",
  "Claude",
  "Framer",
  "Adobe Suite",
  "Webflow",
  "Gemini",
  "Maze",
  "Hotjar",
];

export default function CVContent() {
  const root = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useGSAP(
    () => {
      if (reduced) return;
      gsap.from("[data-cv-reveal]", {
        autoAlpha: 0,
        y: 40,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.08,
        delay: 0.2,
      });
    },
    { scope: root, dependencies: [reduced] }
  );

  return (
    <div ref={root} className="cv-page px-6 pb-28 pt-36 md:px-10 md:pt-44">
      {/* Header */}
      <div data-cv-reveal className="border-t border-foreground/10 pt-8">
        <div className="flex flex-wrap items-start justify-between gap-6">
          <div>
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.25em] text-foreground/80">
              → Curriculum Vitae
            </p>
            <h1 className="text-[clamp(3rem,8vw,7rem)] font-bold uppercase leading-[0.95] tracking-tight">
              Milan
            </h1>
            <p className="mt-3 text-xl text-muted">
              UI/UX Designer · 4+ Years of Experience
            </p>
          </div>
          <div className="flex flex-col items-start gap-3 font-mono text-xs uppercase tracking-[0.15em] text-muted md:items-end">
            <a
              href="mailto:hello@milan.design"
              className="cursor-pointer transition-colors hover:text-foreground"
            >
              hello@milan.design
            </a>
            <p>Colombo, Sri Lanka</p>
            <p className="text-accent">Available for work</p>
            <button
              onClick={() => window.print()}
              className="print-hide mt-2 cursor-pointer rounded-full border border-foreground/25 px-5 py-2.5 font-mono text-xs uppercase tracking-[0.2em] transition-colors duration-300 hover:border-accent hover:text-accent"
            >
              Save as PDF ↓
            </button>
          </div>
        </div>
      </div>

      <div className="mt-20 grid gap-16 lg:grid-cols-[2fr_1fr] lg:gap-24">
        {/* Main column */}
        <div>
          <section data-cv-reveal>
            <h2 className="mb-8 font-mono text-xs uppercase tracking-[0.25em] text-foreground/80">
              → Experience
            </h2>
            <div className="space-y-12">
              {EXPERIENCE.map((job) => (
                <article
                  key={job.period}
                  className="border-t border-foreground/10 pt-6"
                >
                  <div className="mb-4 flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-2xl font-semibold tracking-tight">
                      {job.role}
                    </h3>
                    <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
                      {job.period}
                    </p>
                  </div>
                  <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-accent">
                    {job.company}
                  </p>
                  <ul className="space-y-2">
                    {job.points.map((point, i) => (
                      <li
                        key={i}
                        className="flex gap-3 leading-relaxed text-muted"
                      >
                        <span aria-hidden="true" className="text-accent">
                          —
                        </span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>

          <section data-cv-reveal className="mt-16">
            <h2 className="mb-8 font-mono text-xs uppercase tracking-[0.25em] text-foreground/80">
              → Education & Certification
            </h2>
            <div className="space-y-6">
              {EDUCATION.map((item) => (
                <article
                  key={item.title}
                  className="border-t border-foreground/10 pt-6"
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-lg font-semibold tracking-tight">
                      {item.title}
                    </h3>
                    <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
                      {item.period}
                    </p>
                  </div>
                  <p className="mt-1 text-muted">{item.place}</p>
                </article>
              ))}
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <aside className="space-y-16">
          <section data-cv-reveal>
            <h2 className="mb-6 font-mono text-xs uppercase tracking-[0.25em] text-foreground/80">
              → Skills
            </h2>
            <ul className="space-y-3">
              {SKILLS.map((skill) => (
                <li
                  key={skill}
                  className="border-b border-foreground/10 pb-3 text-muted"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </section>

          <section data-cv-reveal>
            <h2 className="mb-6 font-mono text-xs uppercase tracking-[0.25em] text-foreground/80">
              → Tools
            </h2>
            <ul className="flex flex-wrap gap-2">
              {TOOLS.map((tool) => (
                <li
                  key={tool}
                  className="rounded-full border border-foreground/20 px-4 py-2 font-mono text-xs uppercase tracking-[0.15em] text-muted"
                >
                  {tool}
                </li>
              ))}
            </ul>
          </section>

          <section data-cv-reveal>
            <h2 className="mb-6 font-mono text-xs uppercase tracking-[0.25em] text-foreground/80">
              → Languages
            </h2>
            <ul className="space-y-3 text-muted">
              <li className="border-b border-foreground/10 pb-3">
                English — Professional
              </li>
              <li className="border-b border-foreground/10 pb-3">
                Sinhala — Native
              </li>
            </ul>
          </section>
        </aside>
      </div>
    </div>
  );
}
