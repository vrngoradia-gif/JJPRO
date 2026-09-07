import type { Metadata } from "next";
import SectionReveal from "@/components/ui/SectionReveal";
import CtaButton from "@/components/ui/CtaButton";
import { pricing } from "@/lib/content";

export const metadata: Metadata = {
  title: pricing.hero.heading,
  description: pricing.hero.sub,
  alternates: { canonical: "/pricing" },
};

export default function PricingPage() {
  return (
    <>
      <section className="border-b border-line/60 pt-40 pb-20 md:pt-48 md:pb-28">
        <div className="mx-auto max-w-3xl px-6 text-center md:px-10">
          <SectionReveal>
            <h1 className="h-display-xl accent-gradient-text text-balance">{pricing.hero.heading}</h1>
          </SectionReveal>
          <SectionReveal delay={0.05}>
            <p className="mx-auto mt-6 max-w-xl text-balance text-paper-dim">{pricing.hero.sub}</p>
          </SectionReveal>
        </div>
      </section>

      {/* Market comparison */}
      <section className="border-b border-line/60 py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-6 md:px-10">
          <SectionReveal>
            <p className="eyebrow mb-10 text-center">What the Market Currently Pays</p>
          </SectionReveal>
          <SectionReveal delay={0.05}>
            <div className="overflow-x-auto rounded-2xl border border-line/70">
              <table className="w-full min-w-[560px] text-left text-sm">
                <thead>
                  <tr className="border-b border-line/60 bg-panel text-xs uppercase tracking-wide text-paper-dim">
                    <th className="px-6 py-4 font-normal">Service</th>
                    <th className="px-6 py-4 font-normal">Agency</th>
                    <th className="px-6 py-4 font-normal">Freelancer</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-line/60">
                  {pricing.marketComparison.map((row) => (
                    <tr key={row.service}>
                      <td className="px-6 py-4 text-paper">{row.service}</td>
                      <td className="px-6 py-4 text-paper-dim">{row.agency}</td>
                      <td className="px-6 py-4 text-paper-dim">{row.freelancer}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* DaaS cost per deliverable */}
      <section className="border-b border-line/60 py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-6 md:px-10">
          <SectionReveal>
            <p className="eyebrow mb-10 text-center">DaaS Cost Per Deliverable</p>
          </SectionReveal>
          <div className="grid gap-6 md:grid-cols-3">
            {pricing.daasCostPerDeliverable.map((tier, i) => (
              <SectionReveal key={tier.name} delay={i * 0.06}>
                <div className="rounded-2xl border border-line/70 bg-panel/50 p-7 text-center">
                  <h3 className="font-display text-lg text-paper">{tier.name}</h3>
                  <p className="mt-2 font-display text-2xl text-accent-bright">{tier.price}</p>
                  <p className="mt-2 text-sm text-paper-dim">{tier.deliverables}</p>
                  <p className="mt-1 text-xs uppercase tracking-wide text-paper-dim/70">{tier.perUnit}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
          <SectionReveal delay={0.14}>
            <p className="mx-auto mt-12 max-w-2xl text-balance text-center text-paper-dim">
              {pricing.callout}
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Self-serve platform */}
      <section className="border-b border-line/60 py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <SectionReveal>
            <p className="eyebrow mb-10 text-center">Self-Serve Platform</p>
          </SectionReveal>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {pricing.selfServe.map((tier, i) => (
              <SectionReveal key={tier.name} delay={i * 0.05}>
                <div className="flex h-full flex-col rounded-2xl border border-line/70 bg-panel/40 p-6">
                  <h3 className="text-sm font-medium text-paper">{tier.name}</h3>
                  <p className="mt-3 flex-1 text-sm text-paper-dim">{tier.price}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Academie + Digi add-ons */}
      <section className="border-b border-line/60 py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6 md:px-10">
          <SectionReveal>
            <p className="eyebrow mb-6 text-center">Add-ons</p>
            <div className="space-y-4">
              {pricing.academieDigi.map((item) => (
                <div
                  key={item.name}
                  className="flex flex-col gap-1 rounded-xl border border-line/70 bg-panel/40 p-5 sm:flex-row sm:items-center sm:justify-between"
                >
                  <span className="text-paper">{item.name}</span>
                  <span className="text-sm text-paper-dim">{item.price}</span>
                </div>
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Payment */}
      <section className="py-20">
        <div className="mx-auto max-w-2xl px-6 text-center md:px-10">
          <SectionReveal>
            <p className="eyebrow mb-4">Payment</p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {pricing.payment.methods.map((method) => (
                <span
                  key={method}
                  className="rounded-full border border-line/70 bg-panel/40 px-4 py-2 text-sm text-paper-dim"
                >
                  {method}
                </span>
              ))}
            </div>
            <p className="mt-4 text-sm text-paper-dim">{pricing.payment.terms}</p>
            <div className="mt-10">
              <CtaButton href="/services/daas" variant="solid">
                Start with DaaS
              </CtaButton>
            </div>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
