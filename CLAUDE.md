@AGENTS.md

# Project: UI/UX Designer Portfolio — Landing Page

A single-page portfolio landing site for a UI/UX designer, in the style of premium Webflow agency templates (Adox, Prompt, Novasite, Inertia, Xenith). Dark, cinematic, animation-heavy.

## Stack

- Next.js 16.2.10 (App Router, `app/` directory). This Next.js version is newer than training data — read `node_modules/next/dist/docs/` before using unfamiliar APIs.
- React 19, TypeScript, Tailwind CSS 4 (CSS-first config via `@theme` in `app/globals.css` — there is no `tailwind.config.js`).
- GSAP + ScrollTrigger for all scroll-driven animation. Lenis for smooth scrolling.
- Install when needed: `npm i gsap lenis`.
- GSAP must only run in client components (`"use client"`), inside `useGSAP()` or `useEffect` with proper cleanup (`gsap.context` / ScrollTrigger kill on unmount).

## Design system

### Colors
Red-orange mix on near-black. Define as CSS variables in `@theme`:

- `--color-bg: #0A0A0A` (page background), `--color-surface: #141414` (cards)
- `--color-primary: #E5202C` (crimson red)
- `--color-accent: #FF6A00` (vivid orange)
- Signature gradient: `linear-gradient(135deg, #E5202C, #FF6A00)` — used for card backgrounds, image overlays, hover fills
- Text: `#F5F5F5` primary, `#8A8A8A` muted

### Typography
- Font: SF Pro (`-apple-system, "SF Pro Display", "SF Pro Text", system-ui, sans-serif`). Do not load Google fonts.
- A monospace secondary (`"SF Mono", ui-monospace`) for labels/eyebrows in UPPERCASE with letter-spacing (e.g. `→ WORKING PROCESS`, `[JUST 3 STEP]`).
- Headlines: huge, tight (`tracking-tight`, `leading-[0.95]`), often full-viewport-width uppercase (e.g. section titles like "TESTIMONIALS", "WHAT CLIENTS SAY").

### Images
- Dummy images only for now: use https://picsum.photos or local placeholders.
- All imagery gets the duotone/toned treatment from the references: apply a red-orange gradient overlay (`mix-blend-mode: multiply` or `overlay`) or CSS duotone filter so photos read as red/orange-tinted. Blue-to-orange gradient duotones (like the testimonial cards) are also on-palette.

## Page sections (in order)

1. **Hero** — full-viewport toned image or gradient bg, oversized name/logo, one-line positioning statement, small thumbnail strip or scroll cue.
2. **About** — large statement paragraph with scroll-scrub text reveal (words fade from muted gray to white as you scroll, like Xenith).
3. **Marquee / logos** — infinite horizontal logo scroll.
4. **Services** — cards (Branding / UI-UX / Development / Product Design) with hover effects.
5. **Selected work** — project cards with parallax images and hover zoom.
6. **Working process** — 3 steps (Research / Design / Development) with staggered reveal.
7. **Testimonials** — stacked/fanned gradient cards with photos.
8. **CTA + Footer** — oversized contact line, magnetic button, marquee footer text.

## Animation requirements

- **Smooth scroll**: Lenis, integrated with ScrollTrigger.
- **Section transitions**: fade/slide/clip-path reveals as sections enter viewport.
- **Parallax**: background images and decorative elements move at different scroll speeds.
- **Text effects**: per-word/per-char scrub reveals on headlines and the About statement; split lines with staggered y-translate on entry.
- **Marquees**: infinite loops for logos and footer.
- **Buttons (fancy, required)**: pill buttons with hover fill-sweep (gradient wipes in from bottom/left), text slide-swap (label rolls up, duplicate rolls in), arrow nudge, and magnetic hover (button subtly follows cursor) on primary CTAs.
- **Cards**: hover lift + image scale (1.05–1.1) + gradient overlay shift.
- Respect `prefers-reduced-motion`: disable scrub/parallax, keep simple fades.

## Conventions

- Work in the root project (`app/`), NOT the nested `my-app/` copy — ignore `my-app/` entirely.
- One component per section in `app/components/` (e.g. `Hero.tsx`, `About.tsx`, `Services.tsx`).
- Shared animation helpers in `app/lib/` (e.g. `useSplitText`, magnetic button hook).
- Server components by default; add `"use client"` only where animation/interactivity requires it.
- Verify with `npm run dev` and `npm run build` before considering work done.
