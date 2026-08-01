"use client";

import { useMagnetic } from "../lib/useMagnetic";

type FancyButtonProps = {
  label: string;
  href: string;
  variant?: "solid" | "outline";
  magnetic?: boolean;
};

// Pill button: gradient fill-sweep from bottom, label roll-up swap,
// arrow nudge, optional magnetic hover.
export default function FancyButton({
  label,
  href,
  variant = "outline",
  magnetic = false,
}: FancyButtonProps) {
  const ref = useMagnetic<HTMLAnchorElement>(magnetic ? 0.35 : 0);

  const base =
    variant === "solid"
      ? "bg-foreground text-bg"
      : "border border-foreground/25 text-foreground";

  return (
    <a
      ref={ref}
      href={href}
      className={`group relative inline-flex cursor-pointer items-center gap-3 overflow-hidden rounded-full px-7 py-3.5 font-mono text-xs uppercase tracking-[0.2em] ${base}`}
    >
      {/* gradient sweep layer */}
      <span
        aria-hidden="true"
        className="gradient-brand absolute inset-0 translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:translate-y-0"
      />
      {/* rolling label */}
      <span className="relative block overflow-hidden">
        <span className="block transition-transform duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:-translate-y-full">
          {label}
        </span>
        <span
          aria-hidden="true"
          className="absolute inset-0 block translate-y-full text-foreground transition-transform duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:translate-y-0"
        >
          {label}
        </span>
      </span>
      <span
        aria-hidden="true"
        className="relative transition-all duration-500 group-hover:translate-x-1 group-hover:text-foreground"
      >
        →
      </span>
    </a>
  );
}
