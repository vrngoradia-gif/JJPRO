import type { Metadata } from "next";
import SectionReveal from "@/components/ui/SectionReveal";
import CtaButton from "@/components/ui/CtaButton";
import FAQSection from "@/components/ui/FAQSection";
import { daas } from "@/lib/content";

export const metadata: Metadata = {
  title: "DaaS — Design as a Service",
  description: daas.hero.sub,
  alternates: { canonical: "/services/daas" },
};

export default function DaasPage() {
  return (
    <>
      <section className="border-b border-line/60 pt-40 pb-20 md:pt-48 md:pb-28">
        <div className="mx-auto max-w-3xl px-6 text-center md:px-10">
          <SectionReveal>
            <p className="eyebrow mb-4">Design as a Service</p>
          </SectionReveal>
          <SectionReveal delay={0.05}>
            <h1 className="h-display-xl accent-gradient-text text-balance">{daas.hero.heading}</h1>
          </SectionReveal>
          <SectionReveal delay={0.1}>
            <p className="mx-auto mt-6 max-w-xl text-balance text-paper-dim">{daas.hero.sub}</p>
          </SectionReveal>
          <SectionReveal delay={0.15}>
            <p className="mt-4 text-sm text-accent-bright">{daas.hero.promise}</p>
          </SectionReveal>
          <SectionReveal delay={0.2}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              {daas.hero.ctas.map((cta) => (
                <CtaButton key={cta.label} href={cta.href} variant={cta.variant} external={"external" in cta ? cta.external : false}>
                  {cta.label}
                </CtaButton>
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* How it works */}
      <section className="border-b border-line/60 py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-6 md:px-10">
          <SectionReveal>
            <p className="eyebrow mb-10 text-center">How It Works</p>
          </SectionReveal>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {daas.howItWorks.map((step, i) => (
              <SectionReveal key={step.step} delay={i * 0.06}>
                <span className="font-display text-3xl text-accent-bright">{step.step}</span>
                <h3 className="mt-3 text-sm font-medium uppercase tracking-wide text-paper">{step.label}</h3>
                <p className="mt-2 text-sm text-paper-dim">{step.body}</p>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section id="packages" className="scroll-mt-28 py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <SectionReveal>
            <p className="eyebrow mb-10 text-center">Packages</p>
          </SectionReveal>
          <div className="grid gap-6 md:grid-cols-3">
            {daas.packages.map((pkg, i) => (
              <SectionReveal key={pkg.name} delay={i * 0.08}>
                <div
                  className={`flex h-full flex-col rounded-2xl border p-8 ${
                    pkg.featured
                      ? "glow-border border-accent/60 bg-panel"
                      : "border-line/70 bg-panel/50"
                  }`}
                >
                  {pkg.featured && (
                    <span className="mb-4 inline-block w-fit rounded-full bg-accent/20 px-3 py-1 text-xs font-medium text-accent-bright">
                      Most Popular
                    </span>
                  )}
                  <h3 className="font-display text-xl text-paper">{pkg.name}</h3>
                  <p className="mt-2 font-display text-3xl text-accent-bright">{pkg.price}</p>
                  <ul className="mt-6 flex-1 space-y-3">
                    {pkg.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-paper-dim">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <CtaButton
                    href={pkg.name === "Scale" ? "/contact" : "https://wa.me/91XXXXXXXXXX"}
                    variant={pkg.featured ? "solid" : "outline"}
                    className="mt-8"
                    external={pkg.name !== "Scale"}
                  >
                    {pkg.name === "Scale" ? "Talk to Us" : "Get Started"}
                  </CtaButton>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <FAQSection items={daas.faq} />
    </>
  );
}
