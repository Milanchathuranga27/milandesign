"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useReducedMotion } from "../lib/useReducedMotion";
import { TOOLS } from "../lib/tools";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function TechStack() {
  const root = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();

  useGSAP(
    () => {
      if (reduced) return;
      gsap.from("[data-tool-row]", {
        autoAlpha: 0,
        y: 50,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: root.current,
          start: "top 70%",
        },
      });
    },
    { scope: root, dependencies: [reduced] }
  );

  return (
    <section ref={root} id="tools" className="px-6 py-28 md:px-10 md:py-40">
      <div className="mb-4 flex items-center justify-between border-t border-foreground/10 pt-8 font-mono text-xs uppercase tracking-[0.25em] text-foreground/80">
        <p>→ My Toolbox</p>
        <p>[What I Work With]</p>
      </div>
      <h2 className="mb-16 text-[clamp(3rem,9vw,9rem)] font-bold uppercase leading-[0.95] tracking-tight">
        Design Toolkit
      </h2>

      <ul>
        {TOOLS.map((tool) => (
          <li key={tool.index} data-tool-row>
            <div className="group relative cursor-pointer overflow-hidden border-t border-foreground/10 last:border-b">
              {/* gradient wipes in from the left on hover */}
              <span
                aria-hidden="true"
                className="gradient-brand absolute inset-0 -translate-x-full transition-transform duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:translate-x-0"
              />
              <div className="relative grid grid-cols-[auto_1fr_auto] items-center gap-x-6 py-7 transition-transform duration-500 group-hover:translate-x-4 md:grid-cols-[4rem_1fr_1fr_6rem_auto] md:py-9">
                <span className="font-mono text-xs tracking-[0.2em] text-muted transition-colors duration-300 group-hover:text-foreground/80">
                  /{tool.index}
                </span>
                <h3 className="text-2xl font-semibold tracking-tight md:text-4xl lg:text-5xl">
                  {tool.name}
                </h3>
                <p className="hidden font-mono text-xs uppercase tracking-[0.2em] text-muted transition-colors duration-300 group-hover:text-foreground/90 md:block">
                  {tool.category}
                </p>
                <p className="hidden font-mono text-xs uppercase tracking-[0.2em] text-muted transition-colors duration-300 group-hover:text-foreground md:block">
                  {tool.level}
                </p>
                <span
                  aria-hidden="true"
                  className="text-2xl transition-transform duration-500 group-hover:-rotate-45 md:text-3xl"
                >
                  →
                </span>
              </div>
              {/* category shows under the name on mobile */}
              <p className="relative -mt-4 pb-6 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-muted md:hidden">
                {tool.category} · {tool.level}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
