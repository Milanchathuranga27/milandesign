"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useReducedMotion } from "../lib/useReducedMotion";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const SERVICES = [
  {
    index: "01",
    title: "UI/UX Design",
    body: "Designing intuitive digital experiences that make complex products feel simple, engaging, and effortless to use.",
  },
  {
    index: "02",
    title: "AI Prototyping",
    body: "Building realistic, clickable prototypes that help teams validate ideas, gather feedback, and move faster with confidence.",
  },
  {
    index: "03",
    title: "Product Design",
    body: "Turning ideas into scalable digital products through research, user flows, interface design, and design systems.",
  },
  {
    index: "04",
    title: "Frontend Implementation",
    body: "Bringing designs to life with responsive, production-ready interfaces that closely match the final user experience.",
  },
];

export default function Services() {
  const root = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();

  useGSAP(
    () => {
      if (reduced) return;
      gsap.from("[data-service-card]", {
        autoAlpha: 0,
        y: 60,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.12,
        scrollTrigger: {
          trigger: root.current,
          start: "top 70%",
        },
      });
    },
    { scope: root, dependencies: [reduced] }
  );

  return (
    <section ref={root} id="services" className="px-6 py-28 md:px-10 md:py-40">
      <div className="mb-4 flex items-center justify-between border-t border-foreground/10 pt-8 font-mono text-xs uppercase tracking-[0.25em] text-foreground/80">
        <p>→ What I Do</p>
        <p>[4 Services]</p>
      </div>
      <h2 className="mb-16 text-[clamp(3rem,9vw,9rem)] font-bold uppercase leading-[0.95] tracking-tight">
        Services
      </h2>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {SERVICES.map((service) => (
          <article
            key={service.index}
            data-service-card
            className="group relative flex min-h-80 cursor-pointer flex-col justify-between overflow-hidden rounded-xl bg-surface p-8 transition-transform duration-300 hover:-translate-y-2"
          >
            {/* gradient fill sweeps up on hover */}
            <span
              aria-hidden="true"
              className="gradient-brand absolute inset-0 translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:translate-y-0"
            />
            <div className="relative flex items-start justify-between">
              <span className="font-mono text-xs tracking-[0.2em] text-muted transition-colors duration-300 group-hover:text-foreground/80">
                /{service.index}
              </span>
              <span
                aria-hidden="true"
                className="text-2xl transition-transform duration-300 group-hover:-rotate-45"
              >
                →
              </span>
            </div>
            <div className="relative">
              <h3 className="mb-3 text-2xl font-semibold tracking-tight">
                {service.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted transition-colors duration-300 group-hover:text-foreground/90">
                {service.body}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
