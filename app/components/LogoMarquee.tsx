const CLIENTS = [
  "Nexora",
  "Brightline",
  "Cobalt",
  "Framewell",
  "Luminary",
  "Vantage",
  "Northwind",
  "Atlaslab",
];

// Infinite horizontal marquee — the track holds two copies of the list and
// translates -50% per loop, so the seam is invisible.
export default function LogoMarquee() {
  return (
    <section
      aria-label="Clients I've worked with"
      className="overflow-hidden border-y border-foreground/10 py-10"
    >
      <div className="flex w-max animate-marquee motion-reduce:animate-none">
        {[0, 1].map((copy) => (
          <ul
            key={copy}
            aria-hidden={copy === 1}
            className="flex shrink-0 items-center"
          >
            {CLIENTS.map((name) => (
              <li
                key={name}
                className="flex items-center gap-6 pr-6 text-2xl font-semibold tracking-tight text-muted transition-colors duration-300 hover:text-foreground md:pr-10 md:text-3xl"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-6 w-6 fill-current opacity-60"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="10" />
                </svg>
                {name}
                <span className="pl-6 text-muted/40 md:pl-10">/</span>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </section>
  );
}
