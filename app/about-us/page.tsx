import type { Metadata } from "next";
import SectionReveal from "@/components/ui/SectionReveal";
import MagneticButton from "@/components/ui/MagneticButton";
import TiltPortrait from "@/components/ui/TiltPortrait";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import JsonLd from "@/components/seo/JsonLd";
import { personSchema, person } from "@/lib/schema";
import { aboutUs } from "@/lib/content";

export const metadata: Metadata = {
  title: "About Us — Meet Jignesh P Jain, Startup Consultant",
  description:
    "Meet Jignesh P Jain, founder of JJ PRO — a Mumbai-based startup, GTM and fundraising consultant advising founders across global markets.",
  alternates: { canonical: "/about-us" },
  openGraph: {
    title: "About Us — Meet Jignesh P Jain, Startup Consultant",
    description:
      "Meet Jignesh P Jain, founder of JJ PRO — a Mumbai-based startup, GTM and fundraising consultant advising founders across global markets.",
    url: "/about-us",
  },
};

export default function AboutUsPage() {
  return (
    <>
      <JsonLd data={personSchema()} />
      <Breadcrumbs items={[{ name: "About Us", href: "/about-us" }]} />
      <section className="px-6 pb-16 pt-10 text-center md:px-10 md:pt-12">
        <SectionReveal>
          <p className="eyebrow">{aboutUs.hero.eyebrow}</p>
          <h1 className="h-display-xl text-balance mx-auto mt-6 max-w-4xl text-paper">
            {aboutUs.hero.title}
          </h1>
          <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-paper-dim">
            {aboutUs.hero.subtitle}
          </p>
        </SectionReveal>
      </section>

      <section className="mx-auto grid max-w-6xl gap-12 px-6 pb-24 md:grid-cols-[0.85fr_1.15fr] md:px-10 md:pb-32">
        <TiltPortrait src="/jignesh-jain.jpg" alt={person.name} />
        <SectionReveal delay={0.1} className="flex flex-col justify-center">
          <div className="space-y-6 text-base leading-relaxed text-paper-dim">
            {aboutUs.bio.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          {aboutUs.highlights.length > 0 && (
            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-line/60 pt-8">
              {aboutUs.highlights.map((h) => (
                <div key={h.label}>
                  <p className="font-display text-2xl text-gold">{h.value}</p>
                  <p className="mt-1 text-xs text-paper-dim">{h.label}</p>
                </div>
              ))}
            </div>
          )}
        </SectionReveal>
      </section>

      <section className="border-t border-line/60 bg-ink-soft">
        <div className="mx-auto max-w-3xl px-6 py-24 text-center md:px-10 md:py-32">
          <SectionReveal>
            <p className="eyebrow">{aboutUs.coachingCta.kicker}</p>
            <h2 className="h-display-lg text-balance mt-6 text-paper">
              {aboutUs.coachingCta.heading}
            </h2>
            <p className="mt-4 text-base text-paper-dim">{aboutUs.coachingCta.body}</p>
            <MagneticButton href={aboutUs.coachingCta.button.href} className="mt-8">
              {aboutUs.coachingCta.button.label}
            </MagneticButton>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
