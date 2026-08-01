"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useReducedMotion } from "../lib/useReducedMotion";
import { PROJECTS } from "../lib/projects";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Work() {
  const root = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();

  useGSAP(
    () => {
      if (reduced) return;

      // Clip-path reveal + inner-image parallax per card.
      gsap.utils.toArray<HTMLElement>("[data-work-card]").forEach((card) => {
        gsap.from(card, {
          clipPath: "inset(12% 6% 12% 6%)",
          autoAlpha: 0,
          y: 60,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: card, start: "top 80%" },
        });

        const img = card.querySelector("[data-work-img]");
        if (img) {
          gsap.fromTo(
            img,
            { yPercent: -8 },
            {
              yPercent: 8,
              ease: "none",
              scrollTrigger: {
                trigger: card,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
              },
            }
          );
        }
      });
    },
    { scope: root, dependencies: [reduced] }
  );

  return (
    <section ref={root} id="work" className="px-6 py-28 md:px-10 md:py-40">
      <div className="mb-4 flex items-center justify-between border-t border-foreground/10 pt-8 font-mono text-xs uppercase tracking-[0.25em] text-foreground/80">
        <p>→ Selected Work</p>
        <p>[2026]</p>
      </div>
      <h2 className="mb-16 text-[clamp(3rem,9vw,9rem)] font-bold uppercase leading-[0.95] tracking-tight">
        Projects
      </h2>

      <div className="grid gap-10 md:grid-cols-2 md:gap-x-8 md:gap-y-20">
        {PROJECTS.map((project, i) => (
          <Link
            key={project.slug}
            href={`/work/${project.slug}`}
            data-work-card
            className={`group block cursor-pointer ${i % 2 === 1 ? "md:mt-24" : ""}`}
          >
            <div
              className={`${
                project.realImagery ? "img-true" : "img-toned"
              } aspect-[3/2] overflow-hidden rounded-xl`}
            >
              <div data-work-img className="h-full w-full scale-110">
                <Image
                  src={project.heroImg}
                  alt={`${project.title} — ${project.tags}`}
                  width={1200}
                  height={800}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                />
              </div>
            </div>
            <div className="mt-5 flex items-baseline justify-between">
              <h3 className="text-2xl font-semibold tracking-tight transition-colors duration-300 group-hover:text-accent md:text-3xl">
                {project.title}
              </h3>
              <span className="font-mono text-xs tracking-[0.2em] text-muted">
                {project.year}
              </span>
            </div>
            <p className="mt-1 font-mono text-xs uppercase tracking-[0.2em] text-muted">
              {project.tags}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
