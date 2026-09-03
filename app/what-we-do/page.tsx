import type { Metadata } from "next";
import SectionReveal from "@/components/ui/SectionReveal";
import MagneticButton from "@/components/ui/MagneticButton";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import FAQSection from "@/components/ui/FAQSection";
import { whatWeDo, faqs } from "@/lib/content";

export const metadata: Metadata = {
  title: "What We Do — Brand, Fundraising & Cross-Border GTM",
  description:
    "Explore JJ PRO's four disciplines — brand strategy, consulting, fundraising and cross-border GTM — built to give ambitious founders real leverage.",
  alternates: { canonical: "/what-we-do" },
  openGraph: {
    title: "What We Do — Brand, Fundraising & Cross-Border GTM",
    description:
      "Explore JJ PRO's four disciplines — brand strategy, consulting, fundraising and cross-border GTM — built to give ambitious founders real leverage.",
    url: "/what-we-do",
  },
};

export default function WhatWeDoPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "What We Do", href: "/what-we-do" }]} />
      <section className="px-6 pb-16 pt-10 text-center md:px-10 md:pt-12">
        <SectionReveal>
          <p className="eyebrow">{whatWeDo.hero.eyebrow}</p>
          <h1 className="h-display-xl text-balance mx-auto mt-6 max-w-4xl text-paper">
            {whatWeDo.hero.title}
          </h1>
          <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-paper-dim">
            {whatWeDo.hero.subtitle}
          </p>
        </SectionReveal>
      </section>

      <section className="mx-auto max-w-6xl divide-y divide-line/60 px-6 md:px-10">
        {whatWeDo.pillars.map((pillar, i) => (
          <div
            key={pillar.title}
            className="grid gap-8 py-16 md:grid-cols-[0.9fr_1.6fr] md:gap-16 md:py-24"
          >
            <SectionReveal>
              <span className="eyebrow">0{i + 1}</span>
              <h2 className="h-display-md mt-4 text-paper">{pillar.title}</h2>
            </SectionReveal>
            <SectionReveal delay={0.1}>
              <p className="text-base leading-relaxed text-paper-dim">
                {pillar.summary}
              </p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {pillar.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-3 text-sm text-paper"
                  >
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gold" />
                    {point}
                  </li>
                ))}
              </ul>
              {pillar.href && (
                <MagneticButton href={pillar.href} variant="outline" className="mt-8">
                  Explore Consulting
                </MagneticButton>
              )}
            </SectionReveal>
          </div>
        ))}
      </section>

      <FAQSection items={faqs.whatWeDo} />

      <section className="border-t border-line/60 bg-ink-soft">
        <div className="mx-auto max-w-3xl px-6 py-24 text-center md:px-10 md:py-32">
          <SectionReveal>
            <h2 className="h-display-lg text-balance text-paper">
              {whatWeDo.cta.heading}
            </h2>
            <p className="mt-4 text-base text-paper-dim">{whatWeDo.cta.body}</p>
            <MagneticButton href={whatWeDo.cta.button.href} className="mt-8">
              {whatWeDo.cta.button.label}
            </MagneticButton>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
