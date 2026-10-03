import type { Metadata } from "next";
import SectionReveal from "@/components/ui/SectionReveal";
import CtaButton from "@/components/ui/CtaButton";
import ServiceCard from "@/components/ui/ServiceCard";
import FeatureGrid from "@/components/ui/FeatureGrid";
import RouteMap from "@/components/ui/RouteMap";
import { categories, processSteps, regions, siteMeta } from "@/lib/content";

export const metadata: Metadata = {
  title: `${siteMeta.name}: textile and commodity sourcing and export`,
  description: siteMeta.description,
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <section className="grid-texture px-6 pb-20 pt-32 text-center md:px-10 md:pb-28 md:pt-44">
        <SectionReveal>
          <p className="eyebrow">Textiles, fashion goods and commodities</p>
          <h1 className="h-display-xl text-balance mx-auto mt-6 max-w-4xl">{siteMeta.tagline}</h1>
          <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-paper-dim">
            We source and export from India, China and Latin America, with on-ground teams and a clear process from enquiry to delivery.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <CtaButton href="/contact">Ask for price / Inquire now</CtaButton>
            <CtaButton href="/products" variant="outline">Explore product categories</CtaButton>
          </div>
        </SectionReveal>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 md:px-10">
        <SectionReveal className="text-center">
          <p className="eyebrow">Sourcing excellence</p>
          <h2 className="h-display-lg text-balance mt-4">India. China. Latin America.</h2>
        </SectionReveal>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {regions.map((r) => (
            <div key={r.name} className="glow-border rounded-2xl bg-panel p-8">
              <h3 className="font-display text-xl">{r.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-paper-dim">{r.body}</p>
            </div>
          ))}
        </div>
        <div className="mx-auto mt-14 max-w-3xl"><RouteMap /></div>
      </section>

      <section className="border-y border-line bg-ink-soft px-6 py-20 md:px-10">
        <div className="mx-auto max-w-6xl">
          <SectionReveal className="text-center">
            <p className="eyebrow">What we source</p>
            <h2 className="h-display-lg text-balance mt-4">Product categories</h2>
          </SectionReveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((c) => (
              <ServiceCard key={c.slug} label={c.lead ? "Lead category" : "Category"} title={c.label} tagline={c.body} href="/products" />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 md:px-10">
        <SectionReveal className="text-center">
          <p className="eyebrow">How it works</p>
          <h2 className="h-display-lg text-balance mt-4">A clear process from enquiry to delivery</h2>
        </SectionReveal>
        <div className="mt-12"><FeatureGrid items={processSteps} /></div>
      </section>

      <section className="border-t border-line bg-ink-soft px-6 py-20 text-center md:px-10">
        <SectionReveal>
          <p className="eyebrow">For Indian brands</p>
          <h2 className="h-display-lg text-balance mx-auto mt-4 max-w-3xl">Your product, your brand, powered by our sourcing engine.</h2>
          <div className="mt-8"><CtaButton href="/d2c-consulting" variant="outline">D2C and brand consulting in India</CtaButton></div>
        </SectionReveal>
      </section>
    </>
  );
}
