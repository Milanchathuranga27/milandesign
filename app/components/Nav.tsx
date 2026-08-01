"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-foreground/10 bg-bg/60 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="flex items-center justify-between px-6 py-5 md:px-10">
        <a href="/" className="text-lg font-semibold tracking-tight">
          Milan©
        </a>
        <ul className="hidden gap-8 font-mono text-xs uppercase tracking-[0.2em] md:flex">
          {["About", "Services", "Work", "Process", "Tools", "Contact"].map((item) => (
            <li key={item}>
              <a
                href={`/#${item.toLowerCase()}`}
                className="cursor-pointer text-foreground/80 transition-colors duration-200 hover:text-foreground"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-6">
          <span className="hidden font-mono text-xs uppercase tracking-[0.2em] text-foreground/80 lg:block">
            Colombo, LK
          </span>
          <Link
            href="/cv"
            className="group relative inline-flex cursor-pointer items-center gap-2 overflow-hidden rounded-full border border-foreground/25 px-4 py-2 font-mono text-xs uppercase tracking-[0.2em]"
          >
            <span
              aria-hidden="true"
              className="gradient-brand absolute inset-0 translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:translate-y-0"
            />
            <span className="relative">View CV</span>
            <span
              aria-hidden="true"
              className="relative transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            >
              ↗
            </span>
          </Link>
        </div>
      </nav>
    </header>
  );
}
