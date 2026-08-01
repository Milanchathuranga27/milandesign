"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Draggable } from "gsap/Draggable";
import { InertiaPlugin } from "gsap/InertiaPlugin";
import { useGSAP } from "@gsap/react";
import { useReducedMotion } from "../lib/useReducedMotion";

gsap.registerPlugin(ScrollTrigger, Draggable, InertiaPlugin, useGSAP);

const TESTIMONIALS = [
  {
    quote:
      "Pixel Perfect is committed to intuitive user interfaces — and Milan delivered exactly that, screen after screen.",
    name: "Marco Isaac",
    role: "UX Designer at Pixel Perfect",
    img: "https://picsum.photos/id/91/640/720",
    tone: "img-toned",
    className: "left-[2%] top-[2%] lg:left-[2%] lg:top-[16%] lg:rotate-[-7deg]",
  },
  {
    quote:
      "Milan turned a vague product idea into a crystal-clear interface. Our activation rate jumped 40% after launch.",
    name: "Samantha Jones",
    role: "Creative Director at Innovate Creative",
    img: "https://picsum.photos/id/64/640/720",
    tone: "img-toned",
    className: "left-[22%] top-[14%] lg:left-[18%] lg:top-[28%] lg:rotate-[4deg]",
  },
  {
    quote:
      "Dedicated to crafting compelling narratives through visual storytelling — Milan elevated our whole brand.",
    name: "James Smith",
    role: "Founder at Visionary Media",
    img: "https://picsum.photos/id/453/640/720",
    tone: "img-toned",
    className: "left-[5%] top-[30%] lg:left-[38%] lg:top-[4%] lg:rotate-[-3deg]",
  },
  {
    quote:
      "Rare mix of craft and strategy. Every screen felt intentional, and the design system still scales with us today.",
    name: "Alex Chavez",
    role: "Chief Technology Officer at NextGen Solutions",
    img: "https://picsum.photos/id/342/640/720",
    tone: "img-toned",
    className: "left-[25%] top-[44%] lg:left-[56%] lg:top-[30%] lg:rotate-[6deg]",
  },
  {
    quote:
      "Milan excels at bespoke design solutions tailored to client needs — on time, sharp, and beyond expectations.",
    name: "Linda Brown",
    role: "Senior Designer at Artistry Lab",
    img: "https://picsum.photos/id/338/640/720",
    tone: "img-toned img-toned-cool",
    className: "left-[8%] top-[58%] lg:left-[74%] lg:top-[10%] lg:rotate-[-5deg]",
  },
];

export default function Testimonials() {
  const root = useRef<HTMLElement>(null);
  const deckRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useGSAP(
    () => {
      const cards = gsap.utils.toArray<HTMLElement>("[data-testimonial-card]");

      // Cards are draggable anywhere inside the deck; the most recently
      // touched card pops to the top (zIndexBoost).
      cards.forEach((card) => {
        Draggable.create(card, {
          type: "x,y",
          bounds: deckRef.current,
          inertia: true,
          edgeResistance: 0.75,
          zIndexBoost: true,
          onPress: () => gsap.to(card, { scale: 1.04, duration: 0.2 }),
          onRelease: () => gsap.to(card, { scale: 1, duration: 0.3 }),
        });
      });

      if (reduced) return;

      // Entry: the deck starts as a centered pile, then fans out to the
      // scattered layout as the section enters the viewport.
      const deck = deckRef.current;
      if (deck) {
        const deckRect = deck.getBoundingClientRect();
        gsap.from(cards, {
          x: (i, el) => {
            const r = (el as HTMLElement).getBoundingClientRect();
            return (
              deckRect.left +
              deckRect.width / 2 -
              (r.left + r.width / 2)
            );
          },
          y: (i, el) => {
            const r = (el as HTMLElement).getBoundingClientRect();
            return (
              deckRect.top +
              deckRect.height / 2 -
              (r.top + r.height / 2)
            );
          },
          rotation: () => gsap.utils.random(-14, 14),
          autoAlpha: 0,
          duration: 1.1,
          ease: "power3.inOut",
          stagger: 0.1,
          scrollTrigger: {
            trigger: deck,
            start: "top 70%",
          },
        });
      }

      // Oversized title scrubs sideways slightly for depth.
      gsap.to("[data-testimonial-title]", {
        xPercent: -6,
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    },
    { scope: root, dependencies: [reduced] }
  );

  return (
    <section ref={root} className="overflow-hidden py-28 md:py-40">
      <div className="px-6 md:px-10">
        <div className="mb-4 flex items-center justify-between border-t border-foreground/10 pt-8 font-mono text-xs uppercase tracking-[0.25em] text-foreground/80">
          <p>→ Testimonials</p>
          <p className="hidden md:block">[Drag the cards]</p>
        </div>
        <h2
          data-testimonial-title
          className="whitespace-nowrap text-[clamp(3rem,12vw,12rem)] font-bold uppercase leading-none tracking-tight"
        >
          What Clients Say
        </h2>
      </div>

      {/* Draggable playground */}
      <div
        ref={deckRef}
        className="relative mx-auto mt-10 h-[52rem] w-full max-w-450 lg:h-[46rem]"
      >
        {TESTIMONIALS.map((t) => (
          <figure
            key={t.name}
            data-testimonial-card
            className={`absolute w-64 cursor-grab touch-none select-none overflow-hidden rounded-2xl shadow-2xl shadow-black/60 will-change-transform active:cursor-grabbing md:w-80 ${t.className}`}
          >
            <div className={`${t.tone} absolute inset-0`}>
              <Image
                src={t.img}
                alt={`Portrait of ${t.name}`}
                fill
                sizes="(max-width: 768px) 256px, 320px"
                className="pointer-events-none object-cover"
                draggable={false}
              />
            </div>
            <div className="relative z-10 flex h-96 flex-col justify-between p-6 md:h-[26rem]">
              <span
                aria-hidden="true"
                className="text-6xl font-bold leading-none text-foreground/30"
              >
                &ldquo;
              </span>
              <div>
                <blockquote className="mb-5 text-base font-medium leading-snug md:text-lg">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption>
                  <p className="font-mono text-sm uppercase tracking-[0.15em]">
                    {t.name}
                  </p>
                  <p className="mt-1 font-mono text-[0.65rem] uppercase tracking-[0.15em] text-foreground/70">
                    {t.role}
                  </p>
                </figcaption>
              </div>
            </div>
          </figure>
        ))}
      </div>
    </section>
  );
}
