"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useReducedMotion } from "../lib/useReducedMotion";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Hero() {
  const root = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();

  useGSAP(
    () => {
      if (reduced) return;

      // Entry: letters rise out of their masks with a slight tilt,
      // then an orange wave rolls across the name, then copy fades in.
      gsap
        .timeline({ defaults: { ease: "power4.out" } })
        .from("[data-hero-char]", {
          yPercent: 120,
          rotate: 10,
          duration: 1.1,
          stagger: 0.07,
          delay: 0.2,
        })
        .to(
          "[data-hero-char]",
          {
            color: "#ff6a00",
            duration: 0.25,
            stagger: 0.08,
            yoyo: true,
            repeat: 1,
            ease: "power1.inOut",
          },
          "-=0.3"
        )
        .from(
          "[data-hero-fade]",
          { autoAlpha: 0, y: 24, duration: 0.9, stagger: 0.12 },
          "<"
        );

      // Letters spring up when hovered.
      gsap.utils.toArray<HTMLElement>("[data-hero-char]").forEach((char) => {
        char.addEventListener("mouseenter", () => {
          gsap
            .timeline()
            .to(char, {
              yPercent: -18,
              color: "#ff6a00",
              duration: 0.18,
              ease: "power2.out",
            })
            .to(char, {
              yPercent: 0,
              color: "#f5f5f5",
              duration: 0.6,
              ease: "elastic.out(1, 0.4)",
            });
        });
      });

      // Parallax: background image drifts slower than the scroll.
      gsap.to("[data-hero-bg]", {
        yPercent: 18,
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // Headline drifts up and fades as the section scrolls away.
      gsap.to("[data-hero-name]", {
        yPercent: -12,
        autoAlpha: 0.25,
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "bottom 20%",
          scrub: true,
        },
      });
    },
    { scope: root, dependencies: [reduced] }
  );

  return (
    <section
      ref={root}
      id="top"
      className="relative flex h-svh flex-col justify-end overflow-hidden"
    >
      {/* Full-viewport background — untinted; the scrim below carries contrast */}
      <div data-hero-bg className="absolute inset-0 scale-110">
        <Image
          src="/images/hero/hero2.png"
          alt="Portrait of Milan"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-bg/80 via-bg/15 to-bg/50" />

      <div className="relative z-20 px-6 pb-10 md:px-10">
        <p
          data-hero-fade
          className="mb-4 font-mono text-xs uppercase tracking-[0.25em] text-foreground/80"
        >
          → UI/UX Engineer · 4+ Years of Experience
        </p>

        <h1
          data-hero-name
          aria-label="Milan"
          className="text-[clamp(4.5rem,17vw,17rem)] font-bold uppercase leading-[0.85] tracking-tight"
        >
          {"MILAN".split("").map((char, i) => (
            <span
              key={i}
              aria-hidden="true"
              className="inline-block overflow-hidden align-top"
            >
              <span data-hero-char className="inline-block will-change-transform">
                {char}
              </span>
            </span>
          ))}
        </h1>

        <div className="mt-8 flex flex-wrap items-end justify-between gap-8">
          <p
            data-hero-fade
            className="max-w-md text-lg text-foreground/90 md:text-xl"
          >
            I don't just design screens. I build realistic prototypes and production ready interfaces, helping teams validate ideas before writing thousands of lines of code.
          </p>


          <a
            data-hero-fade
            href="#about"
            className="hidden cursor-pointer items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-foreground/70 transition-colors hover:text-foreground lg:flex"
          >
            Scroll to explore
            <span
              aria-hidden="true"
              className="inline-block animate-scroll-cue motion-reduce:animate-none"
            >
              ↓
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
