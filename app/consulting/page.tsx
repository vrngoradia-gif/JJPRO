import type { Metadata } from "next";
import SectionReveal from "@/components/ui/SectionReveal";
import MagneticButton from "@/components/ui/MagneticButton";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import FAQSection from "@/components/ui/FAQSection";
import { consulting, faqs } from "@/lib/content";

export const metadata: Metadata = {
  title: "Consulting — Business Transformation & D2C Strategy",
  description:
    "Operational depth for founders scaling past their first plateau: business transformation, virtual tech acceleration and D2C consulting. Talk to us.",
  alternates: { canonical: "/consulting" },
  openGraph: {
    title: "Consulting — Business Transformation & D2C Strategy",
    description:
      "Operational depth for founders scaling past their first plateau: business transformation, virtual tech acceleration and D2C consulting.",
    url: "/consulting",
  },
};

export default function ConsultingPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Consulting", href: "/consulting" }]} />
      <section className="px-6 pb-16 pt-10 text-center md:px-10 md:pt-12">
        <SectionReveal>
          <p className="eyebrow">{consulting.hero.eyebrow}</p>
          <h1 className="h-display-xl text-balance mx-auto mt-6 max-w-4xl text-paper">
            {consulting.hero.title}
          </h1>
          <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-paper-dim">
            {consulting.hero.subtitle}
          </p>
        </SectionReveal>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-6 pb-24 md:grid-cols-3 md:px-10 md:pb-32">
        {consulting.practices.map((practice, i) => (
          <SectionReveal key={practice.title} delay={i * 0.08}>
            <div className="h-full rounded-2xl border border-line/70 bg-panel/50 p-8">
              <span className="eyebrow">0{i + 1}</span>
              <h2 className="h-display-md mt-5 text-paper">{practice.title}</h2>
              <p className="mt-4 text-sm leading-relaxed text-paper-dim">
                {practice.summary}
              </p>
              <ul className="mt-6 space-y-3">
                {practice.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-3 text-sm text-paper"
                  >
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gold" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </SectionReveal>
        ))}
      </section>

      <FAQSection items={faqs.consulting} />

      <section className="border-t border-line/60 bg-ink-soft">
        <div className="mx-auto max-w-3xl px-6 py-24 text-center md:px-10 md:py-32">
          <SectionReveal>
            <h2 className="h-display-lg text-balance text-paper">
              {consulting.cta.heading}
            </h2>
            <MagneticButton href={consulting.cta.button.href} className="mt-8">
              {consulting.cta.button.label}
            </MagneticButton>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
