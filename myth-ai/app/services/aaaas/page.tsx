import type { Metadata } from "next";
import SectionReveal from "@/components/ui/SectionReveal";
import CtaButton from "@/components/ui/CtaButton";
import { aaaas } from "@/lib/content";

export const metadata: Metadata = {
  title: "AAaaS — Agentic AI as a Service",
  description: aaaas.hero.sub,
  alternates: { canonical: "/services/aaaas" },
};

export default function AaaasPage() {
  return (
    <>
      <section className="border-b border-line/60 pt-40 pb-20 md:pt-48 md:pb-28">
        <div className="mx-auto max-w-3xl px-6 text-center md:px-10">
          <SectionReveal>
            <p className="eyebrow mb-4">Agentic AI as a Service</p>
          </SectionReveal>
          <SectionReveal delay={0.05}>
            <h1 className="h-display-xl accent-gradient-text text-balance">{aaaas.hero.heading}</h1>
          </SectionReveal>
          <SectionReveal delay={0.1}>
            <p className="mx-auto mt-6 max-w-xl text-balance text-paper-dim">{aaaas.hero.sub}</p>
          </SectionReveal>
          <SectionReveal delay={0.15}>
            <p className="mt-4 text-sm text-accent-bright">{aaaas.hero.forWhom}</p>
          </SectionReveal>
          <SectionReveal delay={0.2}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              {aaaas.hero.ctas.map((cta) => (
                <CtaButton key={cta.label} href={cta.href} variant={cta.variant}>
                  {cta.label}
                </CtaButton>
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Comparison */}
      <section className="border-b border-line/60 py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-6 md:px-10">
          <SectionReveal>
            <p className="eyebrow mb-10 text-center">DaaS vs AAaaS</p>
          </SectionReveal>
          <SectionReveal delay={0.05}>
            <div className="overflow-hidden rounded-2xl border border-line/70">
              <div className="grid grid-cols-3 bg-panel px-6 py-4 text-xs uppercase tracking-wide text-paper-dim">
                <span />
                <span className="text-center">DaaS</span>
                <span className="text-center text-accent-bright">AAaaS</span>
              </div>
              <div className="divide-y divide-line/60">
                {aaaas.comparison.rows.map((row) => (
                  <div key={row.label} className="grid grid-cols-3 items-center px-6 py-4">
                    <span className="text-sm text-paper">{row.label}</span>
                    <span className="text-center text-sm text-paper-dim">{row.daas}</span>
                    <span className="text-center text-sm text-paper">{row.aaaas}</span>
                  </div>
                ))}
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* How it works */}
      <section className="border-b border-line/60 py-24 md:py-32">
        <div className="mx-auto max-w-4xl px-6 md:px-10">
          <SectionReveal>
            <p className="eyebrow mb-10 text-center">How It Works</p>
          </SectionReveal>
          <div className="space-y-10">
            {aaaas.howItWorks.map((step, i) => (
              <SectionReveal key={step.step} delay={i * 0.06}>
                <div className="rounded-2xl border border-line/70 bg-panel/40 p-7">
                  <div className="flex items-center gap-4">
                    <span className="font-display text-2xl text-accent-bright">{step.step}</span>
                    <h3 className="text-sm font-medium uppercase tracking-wide text-paper">{step.label}</h3>
                  </div>
                  {step.example && (
                    <p className="mt-4 text-sm italic text-paper-dim">{step.example}</p>
                  )}
                  {step.body && <p className="mt-4 text-sm text-paper-dim">{step.body}</p>}
                  {step.items && (
                    <ul className="mt-4 space-y-2">
                      {step.items.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-paper-dim">
                          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section className="border-b border-line/60 py-24 md:py-32">
        <div className="mx-auto max-w-5xl px-6 md:px-10">
          <SectionReveal>
            <p className="eyebrow mb-10 text-center">Example Briefs</p>
          </SectionReveal>
          <div className="grid gap-6 md:grid-cols-3">
            {aaaas.useCases.map((useCase, i) => (
              <SectionReveal key={useCase.name} delay={i * 0.08}>
                <div className="flex h-full flex-col rounded-2xl border border-line/70 bg-panel/50 p-7">
                  <h3 className="font-display text-lg text-paper">{useCase.name}</h3>
                  <p className="mt-3 flex-1 text-sm text-paper-dim">{useCase.brief}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {useCase.services.map((s) => (
                      <span
                        key={s}
                        className="rounded-full border border-line/70 px-2.5 py-1 text-xs text-accent-bright"
                      >
                        Service {s}
                      </span>
                    ))}
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Packages + integrations */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-5xl px-6 md:px-10">
          <div className="grid gap-10 md:grid-cols-2">
            <SectionReveal>
              <p className="eyebrow mb-6">Packages</p>
              <ul className="space-y-4">
                {aaaas.packages.map((pkg) => (
                  <li key={pkg.name} className="rounded-xl border border-line/70 bg-panel/40 p-5">
                    <p className="text-paper">{pkg.name}</p>
                    <p className="mt-1 text-sm text-paper-dim">{pkg.price}</p>
                  </li>
                ))}
              </ul>
            </SectionReveal>
            <SectionReveal delay={0.08}>
              <p className="eyebrow mb-6">Integrations</p>
              <div className="flex flex-wrap gap-3">
                {aaaas.integrations.map((integration) => (
                  <span
                    key={integration}
                    className="rounded-full border border-line/70 bg-panel/40 px-4 py-2 text-sm text-paper-dim"
                  >
                    {integration}
                  </span>
                ))}
              </div>
            </SectionReveal>
          </div>

          <SectionReveal delay={0.14}>
            <div className="mt-16 text-center">
              <CtaButton href="/contact" variant="solid">
                Request AAaaS Demo
              </CtaButton>
            </div>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
