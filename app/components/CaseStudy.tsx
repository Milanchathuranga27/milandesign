"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { splitIntoWords } from "../lib/splitText";
import { useReducedMotion } from "../lib/useReducedMotion";
import type { Project } from "../lib/projects";

gsap.registerPlugin(ScrollTrigger, useGSAP);

type CaseStudyProps = {
  project: Project;
  nextProject: Project;
};

export default function CaseStudy({ project, nextProject }: CaseStudyProps) {
  const root = useRef<HTMLDivElement>(null);
  const overviewRef = useRef<HTMLParagraphElement>(null);
  const reduced = useReducedMotion();
  const tone = project.realImagery ? "img-true" : "img-toned";

  useGSAP(
    () => {
      if (reduced) return;

      // Hero: title rises from mask, meta fades in, image clip-reveals.
      gsap
        .timeline({ defaults: { ease: "power4.out" } })
        .from("[data-cs-title] > span", {
          yPercent: 110,
          duration: 1.1,
          delay: 0.15,
        })
        .from(
          "[data-cs-fade]",
          { autoAlpha: 0, y: 24, duration: 0.8, stagger: 0.1 },
          "-=0.5"
        )
        .from(
          "[data-cs-hero-img]",
          {
            clipPath: "inset(100% 0% 0% 0%)",
            duration: 1.2,
            ease: "power3.inOut",
          },
          "-=0.8"
        );

      // Hero image parallax.
      gsap.fromTo(
        "[data-cs-hero-img] img",
        { yPercent: -10 },
        {
          yPercent: 10,
          ease: "none",
          scrollTrigger: {
            trigger: "[data-cs-hero-img]",
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );

      // Overview: word-by-word brighten scrub.
      if (overviewRef.current) {
        const words = splitIntoWords(overviewRef.current);
        gsap.fromTo(
          words,
          { color: "#3d3d3d" },
          {
            color: "#f5f5f5",
            stagger: 0.04,
            ease: "none",
            scrollTrigger: {
              trigger: overviewRef.current,
              start: "top 75%",
              end: "bottom 45%",
              scrub: true,
            },
          }
        );
      }

      // Generic section reveals.
      gsap.utils.toArray<HTMLElement>("[data-cs-reveal]").forEach((el) => {
        gsap.from(el, {
          autoAlpha: 0,
          y: 60,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 80%" },
        });
      });

      // Gallery images: clip reveal + inner parallax.
      gsap.utils.toArray<HTMLElement>("[data-cs-gallery-item]").forEach((el) => {
        gsap.from(el, {
          clipPath: "inset(10% 5% 10% 5%)",
          autoAlpha: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 82%" },
        });
      });

      // Metrics: numbers count up when they enter.
      gsap.utils.toArray<HTMLElement>("[data-cs-metric]").forEach((el) => {
        const target = parseFloat(el.dataset.csMetric ?? "0");
        const decimals = target % 1 === 0 ? 0 : 1;
        const counter = { value: 0 };
        gsap.to(counter, {
          value: target,
          duration: 1.6,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 85%" },
          onUpdate: () => {
            el.textContent = counter.value.toFixed(decimals);
          },
        });
      });
    },
    { scope: root, dependencies: [reduced] }
  );

  return (
    <div ref={root}>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="px-6 pt-36 md:px-10 md:pt-44">
        <p
          data-cs-fade
          className="mb-6 font-mono text-xs uppercase tracking-[0.25em] text-foreground/80"
        >
          → Case Study · {project.tags} · {project.year}
        </p>
        <h1
          data-cs-title
          className="overflow-hidden text-[clamp(3rem,10vw,10rem)] font-bold uppercase leading-[0.95] tracking-tight"
        >
          <span className="block">{project.title}</span>
        </h1>
        <p
          data-cs-fade
          className="mt-6 max-w-2xl text-xl text-foreground/90 md:text-2xl"
        >
          {project.intro}
        </p>

        {/* Meta grid */}
        <dl
          data-cs-fade
          className="mt-14 grid grid-cols-2 gap-8 border-t border-foreground/10 pt-8 font-mono text-xs uppercase tracking-[0.15em] md:grid-cols-4"
        >
          {(
            [
              ["Client", project.client],
              ["Role", project.role],
              ["Timeline", project.timeline],
              ["Tools", project.tools.join(", ")],
            ] as const
          ).map(([label, value]) => (
            <div key={label}>
              <dt className="mb-2 text-muted">{label}</dt>
              <dd className="leading-relaxed text-foreground">{value}</dd>
            </div>
          ))}
        </dl>

        <div
          data-cs-hero-img
          className={`${tone} mt-14 aspect-[16/9] rounded-xl`}
          style={{ clipPath: "inset(0% 0% 0% 0%)" }}
        >
          <Image
            src={project.heroImg}
            alt={`${project.title} hero visual`}
            width={1920}
            height={1080}
            priority
            className="h-full w-full scale-110 object-cover"
          />
        </div>
      </section>

      {/* ── Overview ─────────────────────────────────────────── */}
      <section className="px-6 py-28 md:px-10 md:py-40">
        <div className="mb-10 flex items-center gap-3 border-t border-foreground/10 pt-8">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-foreground/80">
            → Overview
          </p>
        </div>
        <p
          ref={overviewRef}
          className="mx-auto max-w-5xl text-2xl font-semibold leading-[1.2] tracking-tight md:text-4xl"
        >
          {project.overview}
        </p>
      </section>

      {/* ── Challenge & goals ────────────────────────────────── */}
      <section className="px-6 pb-28 md:px-10 md:pb-40">
        <div className="grid gap-12 border-t border-foreground/10 pt-8 md:grid-cols-2">
          <div data-cs-reveal>
            <p className="mb-8 font-mono text-xs uppercase tracking-[0.25em] text-foreground/80">
              → The Challenge
            </p>
            <p className="max-w-xl text-lg leading-relaxed text-muted">
              {project.challenge}
            </p>
          </div>
          <div data-cs-reveal>
            <p className="mb-8 font-mono text-xs uppercase tracking-[0.25em] text-foreground/80">
              → The Goals
            </p>
            <ul>
              {project.goals.map((goal, i) => (
                <li
                  key={i}
                  className="flex items-baseline gap-4 border-b border-foreground/10 py-4 text-lg"
                >
                  <span className="font-mono text-xs tracking-[0.2em] text-accent">
                    /0{i + 1}
                  </span>
                  {goal}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Process phases ───────────────────────────────────── */}
      <section className="px-6 pb-28 md:px-10 md:pb-40">
        <div className="mb-4 flex items-center justify-between border-t border-foreground/10 pt-8 font-mono text-xs uppercase tracking-[0.25em] text-foreground/80">
          <p>→ The Process</p>
          <p>[Just 3 Steps]</p>
        </div>

        <div className="space-y-20 pt-10 md:space-y-28">
          {project.phases.map((phase, i) => (
            <div
              key={phase.title}
              data-cs-reveal
              className={`grid items-center gap-8 md:grid-cols-2 md:gap-16 ${
                i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className={`${tone} aspect-[3/2] rounded-xl`}>
                <Image
                  src={phase.img}
                  alt={`${phase.title} phase of ${project.title}`}
                  width={1200}
                  height={800}
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-accent">
                  Phase 0{i + 1}
                </p>
                <h2 className="mb-5 font-mono text-2xl uppercase tracking-[0.15em] md:text-3xl">
                  {phase.title}
                </h2>
                <p className="max-w-lg text-lg leading-relaxed text-muted">
                  {phase.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Solution ─────────────────────────────────────────── */}
      <section className="px-6 pb-28 md:px-10 md:pb-40">
        <div className="mb-10 border-t border-foreground/10 pt-8">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-foreground/80">
            → The Solution
          </p>
        </div>
        <div data-cs-reveal className="grid gap-10 md:grid-cols-2 md:gap-16">
          {project.solution.map((paragraph, i) => (
            <p key={i} className="text-lg leading-relaxed text-foreground/90">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Gallery */}
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {project.gallery.map((src, i) => (
            <div
              key={src}
              data-cs-gallery-item
              className={`${tone} aspect-[4/3] rounded-xl ${
                i % 2 === 1 ? "md:mt-16" : ""
              }`}
            >
              <Image
                src={src}
                alt={`${project.title} design detail ${i + 1}`}
                width={1200}
                height={900}
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      {/* ── Results ──────────────────────────────────────────── */}
      <section className="px-6 pb-28 md:px-10 md:pb-40">
        <div className="mb-4 flex items-center justify-between border-t border-foreground/10 pt-8 font-mono text-xs uppercase tracking-[0.25em] text-foreground/80">
          <p>→ The Results</p>
          <p>[Measured Impact]</p>
        </div>
        <div className="grid gap-10 pt-10 md:grid-cols-3">
          {project.metrics.map((metric) => (
            <div key={metric.label} data-cs-reveal>
              <p className="text-gradient-brand text-6xl font-bold tracking-tight md:text-7xl">
                {metric.prefix}
                <span data-cs-metric={metric.value}>{metric.value}</span>
                {metric.suffix}
              </p>
              <p className="mt-3 font-mono text-xs uppercase tracking-[0.2em] text-muted">
                {metric.label}
              </p>
            </div>
          ))}
        </div>

        {/* Client quote */}
        {!project.hideQuote && (
          <figure data-cs-reveal className="mx-auto mt-28 max-w-4xl text-center">
            <blockquote className="text-2xl font-semibold leading-snug tracking-tight md:text-4xl">
              &ldquo;{project.quote.text}&rdquo;
            </blockquote>
            <figcaption className="mt-8 font-mono text-xs uppercase tracking-[0.2em] text-muted">
              {project.quote.name} — {project.quote.role}
            </figcaption>
          </figure>
        )}
      </section>

      {/* ── Next project ─────────────────────────────────────── */}
      <section className="border-t border-foreground/10">
        <Link
          href={`/work/${nextProject.slug}`}
          className="group block cursor-pointer overflow-hidden px-6 py-20 md:px-10 md:py-28"
        >
          <div className="flex items-center justify-between font-mono text-xs uppercase tracking-[0.25em] text-foreground/80">
            <p>→ Next Case Study</p>
            <p>{nextProject.year}</p>
          </div>
          <div className="mt-8 flex items-baseline justify-between gap-6">
            <h2 className="text-[clamp(2.5rem,8vw,8rem)] font-bold uppercase leading-none tracking-tight transition-colors duration-300 group-hover:text-accent">
              {nextProject.title}
            </h2>
            <span
              aria-hidden="true"
              className="text-4xl transition-transform duration-500 group-hover:translate-x-3 md:text-6xl"
            >
              →
            </span>
          </div>
          <p className="mt-4 font-mono text-xs uppercase tracking-[0.2em] text-muted">
            {nextProject.tags}
          </p>
        </Link>
      </section>
    </div>
  );
}
