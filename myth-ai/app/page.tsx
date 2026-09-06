import Link from "next/link";
import SectionReveal from "@/components/ui/SectionReveal";
import CtaButton from "@/components/ui/CtaButton";
import { home, serviceAreas } from "@/lib/content";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-44 pb-28 md:pt-56 md:pb-36">
        <div className="grid-texture pointer-events-none absolute inset-0 opacity-40" aria-hidden />
        <div
          className="pointer-events-none absolute left-1/2 top-0 h-[32rem] w-[48rem] -translate-x-1/2 rounded-full bg-accent/20 blur-[140px]"
          aria-hidden
        />
        <div className="relative mx-auto max-w-5xl px-6 text-center md:px-10">
          <SectionReveal>
            <p className="eyebrow mb-6">Design as a Service · Agentic AI as a Service</p>
          </SectionReveal>
          <SectionReveal delay={0.05}>
            <h1 className="h-display-xl accent-gradient-text text-balance">{home.hero.headline}</h1>
          </SectionReveal>
          <SectionReveal delay={0.1}>
            <p className="mx-auto mt-8 max-w-2xl text-balance text-lg text-paper-dim">{home.hero.sub}</p>
          </SectionReveal>
          <SectionReveal delay={0.15}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              {home.hero.ctas.map((cta) => (
                <CtaButton key={cta.label} href={cta.href} variant={cta.variant} external={"external" in cta ? cta.external : false}>
                  {cta.label}
                </CtaButton>
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Five Acceleration Engines */}
      <section className="border-t border-line/60 py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <SectionReveal>
            <p className="eyebrow mb-4">{home.servicesBand.kicker}</p>
          </SectionReveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {serviceAreas.map((service, i) => (
              <SectionReveal key={service.id} delay={i * 0.05}>
                <Link
                  href={`/services#${service.slug}`}
                  className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-line/70 bg-panel/50 p-7 transition-all duration-300 hover:border-accent/60 hover:bg-panel"
                >
                  <div>
                    <span className="font-display text-2xl text-accent-bright">{service.id}</span>
                    <h3 className="mt-4 text-lg font-medium text-paper">{service.title}</h3>
                    <p className="mt-2 text-sm text-paper-dim">{service.short}</p>
                  </div>
                  <span className="mt-6 inline-flex items-center gap-1 text-xs uppercase tracking-wide text-accent-bright opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    Explore →
                  </span>
                </Link>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3D Spotlight */}
      <section className="relative overflow-hidden border-t border-line/60 py-24 md:py-32">
        <div
          className="pointer-events-none absolute -right-32 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-cyan/10 blur-[120px]"
          aria-hidden
        />
        <div className="relative mx-auto max-w-4xl px-6 text-center md:px-10">
          <SectionReveal>
            <p className="eyebrow mb-4">{home.spotlight3D.kicker}</p>
          </SectionReveal>
          <SectionReveal delay={0.05}>
            <h2 className="h-display-lg text-balance text-paper">{home.spotlight3D.heading}</h2>
          </SectionReveal>
          <SectionReveal delay={0.1}>
            <p className="mx-auto mt-6 max-w-xl text-balance text-paper-dim">{home.spotlight3D.body}</p>
          </SectionReveal>
          <SectionReveal delay={0.15}>
            <div className="mt-8">
              <CtaButton href={home.spotlight3D.cta.href} variant="outline">
                {home.spotlight3D.cta.label}
              </CtaButton>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* AAaaS Promo */}
      <section className="border-t border-line/60 py-20">
        <div className="mx-auto max-w-5xl px-6 md:px-10">
          <SectionReveal>
            <div className="glow-border flex flex-col items-start justify-between gap-6 rounded-2xl bg-panel/60 p-8 sm:flex-row sm:items-center md:p-10">
              <p className="max-w-xl text-balance text-paper-dim">{home.aaaasPromo.body}</p>
              <CtaButton href={home.aaaasPromo.cta.href} variant="solid" className="shrink-0">
                {home.aaaasPromo.cta.label}
              </CtaButton>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Value vs Market */}
      <section className="border-t border-line/60 py-24 md:py-32">
        <div className="mx-auto max-w-5xl px-6 md:px-10">
          <div className="grid gap-10 md:grid-cols-2">
            <SectionReveal>
              <p className="text-sm uppercase tracking-wide text-paper-dim/70">Before</p>
              <p className="mt-3 text-balance text-xl text-paper-dim">{home.valueVsMarket.oldWay}</p>
            </SectionReveal>
            <SectionReveal delay={0.08}>
              <p className="text-sm uppercase tracking-wide text-accent-bright">After</p>
              <p className="mt-3 text-balance text-xl text-paper">{home.valueVsMarket.newWay}</p>
            </SectionReveal>
          </div>

          <SectionReveal delay={0.12}>
            <div className="mt-14 divide-y divide-line/60 rounded-2xl border border-line/70">
              {home.valueVsMarket.rows.map((row) => (
                <div key={row.label} className="flex items-center justify-between px-6 py-5">
                  <span className="text-sm text-paper-dim">{row.label}</span>
                  <span className="font-display text-paper">{row.value}</span>
                </div>
              ))}
            </div>
          </SectionReveal>

          <SectionReveal delay={0.16}>
            <div className="mt-8">
              <CtaButton href={home.valueVsMarket.cta.href} variant="ghost">
                {home.valueVsMarket.cta.label} →
              </CtaButton>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* India Stats */}
      <section className="relative overflow-hidden border-t border-line/60 bg-ink-soft py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6 text-center md:px-10">
          <SectionReveal>
            <h2 className="h-display-md mx-auto max-w-3xl text-balance text-paper">{home.indiaStats.kicker}</h2>
          </SectionReveal>
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {home.indiaStats.stats.map((stat, i) => (
              <SectionReveal key={stat.label} delay={i * 0.06}>
                <p className="font-display text-4xl text-accent-bright md:text-5xl">{stat.value}</p>
                <p className="mt-3 text-sm text-paper-dim">{stat.label}</p>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="border-t border-line/60 py-28 md:py-36">
        <div className="mx-auto max-w-3xl px-6 text-center md:px-10">
          <SectionReveal>
            <h2 className="h-display-lg text-balance text-paper">{home.footerCta.heading}</h2>
          </SectionReveal>
          <SectionReveal delay={0.08}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              {home.footerCta.ctas.map((cta) => (
                <CtaButton key={cta.label} href={cta.href} variant={cta.variant} external={"external" in cta ? cta.external : false}>
                  {cta.label}
                </CtaButton>
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
