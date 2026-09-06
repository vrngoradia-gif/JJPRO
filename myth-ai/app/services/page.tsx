import type { Metadata } from "next";
import Link from "next/link";
import SectionReveal from "@/components/ui/SectionReveal";
import CtaButton from "@/components/ui/CtaButton";
import { services, serviceAreas, subServices3D } from "@/lib/content";

export const metadata: Metadata = {
  title: services.hero.heading,
  description: services.hero.sub,
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <section className="border-b border-line/60 pt-40 pb-20 md:pt-48 md:pb-28">
        <div className="mx-auto max-w-4xl px-6 text-center md:px-10">
          <SectionReveal>
            <h1 className="h-display-xl accent-gradient-text text-balance">{services.hero.heading}</h1>
          </SectionReveal>
          <SectionReveal delay={0.05}>
            <p className="mx-auto mt-6 max-w-xl text-balance text-paper-dim">{services.hero.sub}</p>
          </SectionReveal>
        </div>
      </section>

      {/* DaaS / AAaaS path cards */}
      <section className="border-b border-line/60 py-20">
        <div className="mx-auto max-w-5xl px-6 md:px-10">
          <div className="grid gap-6 md:grid-cols-2">
            {services.paths.map((path, i) => (
              <SectionReveal key={path.name} delay={i * 0.08}>
                <Link
                  href={path.href}
                  className="group flex h-full flex-col justify-between rounded-2xl border border-line/70 bg-panel/50 p-8 transition-all duration-300 hover:border-accent/60 hover:bg-panel"
                >
                  <div>
                    <h2 className="font-display text-2xl text-paper">{path.name}</h2>
                    <p className="mt-1 text-sm text-accent-bright">{path.label}</p>
                    <p className="mt-4 text-sm text-paper-dim">{path.description}</p>
                  </div>
                  <span className="mt-8 inline-flex items-center gap-1 text-xs uppercase tracking-wide text-accent-bright opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    Learn more →
                  </span>
                </Link>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Five service areas */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-5xl px-6 md:px-10">
          <SectionReveal>
            <p className="eyebrow mb-4 text-center">The Five Acceleration Engines</p>
          </SectionReveal>

          <div className="mt-16 space-y-24">
            {serviceAreas.map((service, i) => (
              <div key={service.id} id={service.slug} className="scroll-mt-28">
                <SectionReveal delay={i * 0.04}>
                  <div className="grid gap-10 md:grid-cols-[auto_1fr]">
                    <span className="font-display text-4xl text-accent-bright">{service.id}</span>
                    <div>
                      <h3 className="h-display-md text-paper">{service.title}</h3>
                      <p className="mt-2 text-sm text-accent-bright">{service.engine}</p>
                      <p className="mt-4 max-w-2xl text-paper-dim">{service.summary}</p>
                      <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                        {service.bullets.map((b) => (
                          <li key={b} className="flex items-start gap-2 text-sm text-paper-dim">
                            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                            {b}
                          </li>
                        ))}
                      </ul>
                      <p className="mt-6 text-xs uppercase tracking-wide text-paper-dim/70">
                        Deliverable — {service.deliverable}
                      </p>
                    </div>
                  </div>
                </SectionReveal>

                {/* 11 sub-services under 3D Garment Visualization */}
                {service.id === "03" && (
                  <SectionReveal delay={0.1}>
                    <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                      {subServices3D.map((sub) => (
                        <div
                          key={sub.id}
                          className="rounded-xl border border-line/70 bg-panel/40 p-5"
                        >
                          <span className="text-xs text-accent-bright">{sub.id}</span>
                          <h4 className="mt-1 text-sm font-medium text-paper">{sub.title}</h4>
                          <ul className="mt-3 space-y-1">
                            {sub.bullets.map((b) => (
                              <li key={b} className="text-xs text-paper-dim">
                                {b}
                              </li>
                            ))}
                          </ul>
                          <p className="mt-3 text-[11px] uppercase tracking-wide text-paper-dim/60">
                            {sub.deliverable}
                          </p>
                        </div>
                      ))}
                    </div>
                  </SectionReveal>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line/60 py-20">
        <div className="mx-auto max-w-3xl px-6 text-center md:px-10">
          <SectionReveal>
            <h2 className="h-display-lg text-balance text-paper">Ready to brief us?</h2>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <CtaButton href="/services/daas" variant="solid">
                Start with DaaS
              </CtaButton>
              <CtaButton href="/services/aaaas" variant="outline">
                Explore AAaaS
              </CtaButton>
            </div>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
