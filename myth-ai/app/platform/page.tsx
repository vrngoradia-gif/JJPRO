import type { Metadata } from "next";
import Link from "next/link";
import SectionReveal from "@/components/ui/SectionReveal";
import CtaButton from "@/components/ui/CtaButton";
import { platform } from "@/lib/content";

export const metadata: Metadata = {
  title: platform.hero.heading,
  description: platform.hero.sub,
  alternates: { canonical: "/platform" },
};

export default function PlatformPage() {
  return (
    <>
      <section className="border-b border-line/60 pt-40 pb-20 md:pt-48 md:pb-28">
        <div className="mx-auto max-w-4xl px-6 text-center md:px-10">
          <SectionReveal>
            <p className="eyebrow mb-4">{platform.hero.kicker}</p>
          </SectionReveal>
          <SectionReveal delay={0.05}>
            <h1 className="h-display-xl accent-gradient-text text-balance">{platform.hero.heading}</h1>
          </SectionReveal>
          <SectionReveal delay={0.1}>
            <p className="mx-auto mt-6 max-w-xl text-balance text-paper-dim">{platform.hero.sub}</p>
          </SectionReveal>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <div className="grid gap-6 md:grid-cols-2">
            {platform.products.map((product, i) => (
              <SectionReveal key={product.slug} delay={i * 0.08}>
                <Link
                  href={`/platform/${product.slug}`}
                  className="group flex h-full flex-col justify-between rounded-2xl border border-line/70 bg-panel/50 p-8 transition-all duration-300 hover:border-accent/60 hover:bg-panel"
                >
                  <div>
                    <h2 className="font-display text-2xl text-paper">{product.name}</h2>
                    <p className="mt-1 text-sm text-accent-bright">{product.tagline}</p>
                    <p className="mt-4 text-sm text-paper-dim">{product.description}</p>
                    <p className="mt-4 text-xs uppercase tracking-wide text-paper-dim/70">{product.powers}</p>
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

      <section className="border-t border-line/60 py-20">
        <div className="mx-auto max-w-3xl px-6 text-center md:px-10">
          <SectionReveal>
            <p className="text-balance text-paper-dim">
              Prefer managed output over self-serve tools?
            </p>
            <div className="mt-6">
              <CtaButton href="/services/daas" variant="outline">
                Explore DaaS
              </CtaButton>
            </div>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
