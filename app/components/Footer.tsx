"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useReducedMotion } from "../lib/useReducedMotion";
import { useMagnetic } from "../lib/useMagnetic";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Footer() {
  const root = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const magneticRef = useMagnetic<HTMLAnchorElement>(0.3);

  useGSAP(
    () => {
      if (reduced) return;
      gsap.from("[data-cta-line]", {
        autoAlpha: 0,
        y: 80,
        duration: 1,
        ease: "power4.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: root.current,
          start: "top 70%",
        },
      });
    },
    { scope: root, dependencies: [reduced] }
  );

  return (
    <footer ref={root} id="contact" className="relative overflow-hidden pt-28 md:pt-40">
      <div className="px-6 text-center md:px-10">
        <p
          data-cta-line
          className="mb-6 font-mono text-xs uppercase tracking-[0.25em] text-foreground/80"
        >
          → Have a project in mind?
        </p>
        <h2
          data-cta-line
          className="mx-auto max-w-5xl text-[clamp(2.5rem,7vw,7rem)] font-bold uppercase leading-[0.95] tracking-tight"
        >
          Let&apos;s build something{" "}
          <span className="text-gradient-brand">great</span>
        </h2>

        <div data-cta-line className="mt-12 flex justify-center">
          {/* Magnetic primary CTA with gradient sweep + rolling label */}
          <a
            ref={magneticRef}
            href="mailto:hello@milan.design"
            className="group relative inline-flex cursor-pointer items-center gap-3 overflow-hidden rounded-full bg-foreground px-10 py-5 font-mono text-sm uppercase tracking-[0.2em] text-bg"
          >
            <span
              aria-hidden="true"
              className="gradient-brand absolute inset-0 translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:translate-y-0"
            />
            <span className="relative block overflow-hidden">
              <span className="block transition-transform duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:-translate-y-full">
                hello@milan.design
              </span>
              <span
                aria-hidden="true"
                className="absolute inset-0 block translate-y-full text-foreground transition-transform duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:translate-y-0"
              >
                hello@milan.design
              </span>
            </span>
            <span
              aria-hidden="true"
              className="relative transition-all duration-500 group-hover:translate-x-1 group-hover:text-foreground"
            >
              →
            </span>
          </a>
        </div>

        <ul
          data-cta-line
          className="mt-14 flex justify-center gap-8 font-mono text-xs uppercase tracking-[0.2em] text-muted"
        >
          {["Dribbble", "Behance", "LinkedIn", "Instagram"].map((social) => (
            <li key={social}>
              <a
                href="#top"
                className="cursor-pointer transition-colors duration-200 hover:text-foreground"
              >
                {social}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Footer marquee */}
      <div className="mt-24 overflow-hidden border-t border-foreground/10 py-6">
        <div className="flex w-max animate-marquee motion-reduce:animate-none">
          {[0, 1].map((copy) => (
            <p
              key={copy}
              aria-hidden={copy === 1}
              className="shrink-0 whitespace-nowrap text-[clamp(3rem,8vw,8rem)] font-bold uppercase leading-none tracking-tight text-foreground/10"
            >
              Milan — UI/UX Designer — Available for work —&nbsp;
            </p>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between px-6 py-6 font-mono text-xs uppercase tracking-[0.2em] text-muted md:px-10">
        <p>© 2026 Milan</p>
        <p>Colombo, Sri Lanka</p>
      </div>
    </footer>
  );
}
