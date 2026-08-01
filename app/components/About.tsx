"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { splitIntoWords } from "../lib/splitText";
import { useReducedMotion } from "../lib/useReducedMotion";
import FancyButton from "./FancyButton";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const STATEMENT =
  "I'm Milan, a UI UX Designer with 4+ years of experience transforming ideas into powerful digital products through user research, interface design, and AI powered workflows that turn concepts into reality in days, not months.";

export default function About() {
  const root = useRef<HTMLElement>(null);
  const statementRef = useRef<HTMLParagraphElement>(null);
  const reduced = useReducedMotion();

  useGSAP(
    () => {
      if (reduced) return;
      if (!statementRef.current) return;

      // Xenith-style scrub: words brighten from muted gray to white.
      const words = splitIntoWords(statementRef.current);
      gsap.fromTo(
        words,
        { color: "#3d3d3d" },
        {
          color: "#f5f5f5",
          stagger: 0.06,
          ease: "none",
          scrollTrigger: {
            trigger: statementRef.current,
            start: "top 75%",
            end: "bottom 40%",
            scrub: true,
          },
        }
      );

      gsap.from("[data-about-fade]", {
        autoAlpha: 0,
        y: 40,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: "[data-about-bottom]",
          start: "top 80%",
        },
      });
    },
    { scope: root, dependencies: [reduced] }
  );

  return (
    <section ref={root} id="about" className="px-6 py-28 md:px-10 md:py-40">
      <div className="mb-14 flex items-center gap-3 border-t border-foreground/10 pt-8">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-foreground/80">
          → About Me
        </p>
      </div>

      <p
        ref={statementRef}
        className="mx-auto max-w-5xl text-3xl font-semibold leading-[1.15] tracking-tight md:text-5xl"
      >
        {STATEMENT}
      </p>

      <div
        data-about-bottom
        className="mx-auto mt-20 grid max-w-5xl gap-10 md:grid-cols-[auto_1fr_1fr]"
      >
        <div
          data-about-fade
          className="img-toned h-72 w-56 rounded-xl"
        >
          <Image
            src="/images/aboutnew.png"
            alt="Milan, UI/UX designer"
            width={448}
            height={576}
            className="h-full w-full object-cover"
          />
        </div>
        <div data-about-fade className="max-w-sm">
          <p className="text-muted">
            I believe great design solves real problems. Every decision I make is driven by user needs, business goals, and creating experiences people genuinely enjoy using.
          </p>
          <div className="mt-8">
            <FancyButton label="Learn About Me" href="#contact" />
          </div>
        </div>
        <p data-about-fade className="max-w-sm text-muted">
          I don't hand over static designs. I deliver interactive, testable prototypes that make development faster and decisions easier.
        </p>
      </div>
    </section>
  );
}
