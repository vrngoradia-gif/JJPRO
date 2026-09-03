# JJ PRO — Cinematic Portfolio Site

Premium, cinematic Next.js portfolio for JJ PRO (Jignesh — startup/GTM/fundraising
consulting), built with a dark luxury (black + gold) aesthetic, a 3D hero scene,
and motion-driven scroll reveals.

## Stack

- **Next.js (App Router, TypeScript)**
- **Tailwind CSS v4** (theme defined in `app/globals.css` via `@theme`)
- **Framer Motion** — scroll reveals, page transitions, magnetic buttons
- **React Three Fiber + drei** — 3D hero scene (`components/three`)
- **Lenis + GSAP/ScrollTrigger** — smooth scroll (`components/layout/SmoothScroll.tsx`)
- **Formspree** — contact form submission
- **Calendly** — inline booking embed

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

Copy `.env.example` to `.env.local` and fill in the real values before launch:

```bash
cp .env.example .env.local
```

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_FORMSPREE_ID` | Formspree form ID used by the Contact and Partner forms. Create a form at [formspree.io](https://formspree.io) and paste the ID (the part after `/f/` in your endpoint URL). |
| `NEXT_PUBLIC_CALENDLY_URL` | Full Calendly scheduling link embedded on the Contact page. |

## Content

All copy — hero text, service descriptions, stats, testimonials, bios — lives in
**`lib/content.ts`**, centralized and clearly commented with
`// TODO: replace with real client content` wherever placeholder text needs to be
swapped for the real thing. This is the single file to edit when handing real
content over from the client.

## Project Structure

```
app/                 Routes (one folder per page in the sitemap)
components/layout/   Navbar, Footer, SmoothScroll (Lenis), CustomCursor, PageTransition
components/three/    3D hero scene (SceneCanvas, HeroScene, FloatingGeometry, ParticleField)
components/ui/       Reusable motion primitives (ServiceCard, StatCounter, MagneticButton, etc.)
components/forms/    ContactForm (Formspree), CalendlyEmbed
lib/content.ts       All site copy
lib/motion.ts        Shared Framer Motion variants
```

## Notes

- The 3D hero (`components/three/SceneCanvas.tsx`) is dynamically imported with
  `ssr: false` and only mounts once in view. It falls back to a static gradient
  on devices with `prefers-reduced-motion` or low `navigator.hardwareConcurrency`.
- Build for production with `npm run build`.
- Deployment target is Vercel (zero-config — connect the repo and deploy).
