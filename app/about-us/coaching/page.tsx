import type { Metadata } from "next";
import SectionReveal from "@/components/ui/SectionReveal";
import MagneticButton from "@/components/ui/MagneticButton";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import { coaching } from "@/lib/content";

export const metadata: Metadata = {
  title: "Startup Coaching & Mentoring",
  description:
    "Ongoing 1:1 startup coaching from JJ PRO — a consistent thinking partner for fundraising, board support and high-stakes founder decisions.",
  alternates: { canonical: "/about-us/coaching" },
  openGraph: {
    title: "Startup Coaching & Mentoring — JJ PRO",
    description:
      "Ongoing 1:1 startup coaching from JJ PRO — a consistent thinking partner for fundraising, board support and high-stakes founder decisions.",
    url: "/about-us/coaching",
  },
};

export default function CoachingPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: "About Us", href: "/about-us" },
          { name: "Coaching", href: "/about-us/coaching" },
        ]}
      />
      <section className="px-6 pb-16 pt-10 text-center md:px-10 md:pt-12">
        <SectionReveal>
          <p className="eyebrow">{coaching.hero.eyebrow}</p>
          <h1 className="h-display-xl text-balance mx-auto mt-6 max-w-4xl text-paper">
            {coaching.hero.title}
          </h1>
          <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-paper-dim">
            {coaching.hero.subtitle}
          </p>
        </SectionReveal>
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-16 text-center md:px-10">
        <SectionReveal>
          <p className="eyebrow">{coaching.format.kicker}</p>
          <h2 className="h-display-lg text-balance mt-6 text-paper">
            {coaching.format.heading}
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-paper-dim">
            {coaching.format.body}
          </p>
        </SectionReveal>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-24">
        <div className="grid gap-6 sm:grid-cols-2">
          {coaching.pillars.map((pillar, i) => (
            <SectionReveal key={pillar.title} delay={i * 0.08}>
              <div className="h-full rounded-2xl border border-line/70 bg-panel/50 p-8">
                <h3 className="font-display text-xl text-paper">{pillar.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-paper-dim">
                  {pillar.description}
                </p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 pb-24 md:px-10 md:pb-32">
        <SectionReveal>
          <p className="eyebrow mb-6 text-center">Who It&apos;s For</p>
          <ul className="space-y-4">
            {coaching.whoFor.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-xl border border-line/60 bg-panel/40 p-5 text-sm text-paper-dim"
              >
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gold" />
                {item}
              </li>
            ))}
          </ul>
        </SectionReveal>
      </section>

      <section className="border-t border-line/60 bg-ink-soft">
        <div className="mx-auto max-w-3xl px-6 py-24 text-center md:px-10 md:py-32">
          <SectionReveal>
            <h2 className="h-display-lg text-balance text-paper">
              {coaching.cta.heading}
            </h2>
            <MagneticButton href={coaching.cta.button.href} className="mt-8">
              {coaching.cta.button.label}
            </MagneticButton>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
