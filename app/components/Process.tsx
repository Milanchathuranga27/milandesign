"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useReducedMotion } from "../lib/useReducedMotion";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const STEPS = [
  {
    step: "Step One",
    title: "Discover",
    body: "I learn about your business, users, competitors, and goals to uncover opportunities worth solving.",
    img: "/images/process/1new.png",
  },
  {
    step: "Step Two",
    title: "Design",
    body: "From user flows and wireframes to polished interfaces, every screen is designed with purpose and usability in mind.",
    img: "/images/process/2new.png",
  },
  {
    step: "Step Three",
    title: "Validate",
    body: "I create interactive prototypes that stakeholders can click, explore, and validate, reducing costly changes later.",
    img: "/images/process/3new.png",
  },
];

export default function Process() {
  const root = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();

  useGSAP(
    () => {
      if (reduced) return;
      gsap.from("[data-process-step]", {
        autoAlpha: 0,
        y: 80,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: root.current,
          start: "top 65%",
        },
      });
    },
    { scope: root, dependencies: [reduced] }
  );

  return (
    <section ref={root} id="process" className="px-6 py-28 md:px-10 md:py-40">
      <div className="mb-4 flex items-center justify-between border-t border-foreground/10 pt-8 font-mono text-xs uppercase tracking-[0.25em] text-foreground/80">
        <p>→ Working Process</p>
        <p>[Just 3 Steps]</p>
      </div>
      <p className="mb-20 max-w-md text-lg text-muted">
        A modern, AI-accelerated path from first conversation to working
        product.
      </p>

      <div className="grid gap-12 md:grid-cols-3 md:gap-8">
        {STEPS.map((item) => (
          <article key={item.title} data-process-step className="group">
            <div className="img-toned mb-8 aspect-square overflow-hidden rounded-xl">
              <Image
                src={item.img}
                alt={`${item.title} phase illustration`}
                width={800}
                height={800}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <h3 className="mb-4 font-mono text-xl uppercase tracking-[0.15em]">
              {item.title}
            </h3>
            <p className="mb-6 leading-relaxed text-muted">{item.body}</p>
            <span className="inline-block rounded-md bg-foreground px-4 py-2 font-mono text-xs uppercase tracking-[0.2em] text-bg">
              {item.step}
            </span>
          </article>
        ))}
      </div>
    </section>
  );
}
