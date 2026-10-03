import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import FeatureGrid from "@/components/ui/FeatureGrid";
import ServiceCard from "@/components/ui/ServiceCard";
import { categories, regions, processSteps } from "@/lib/content";

export const metadata: Metadata = { title: "Sourcing capabilities", description: "Sourcing textiles, accessories, electronics and commodities from India, China and Latin America.", alternates: { canonical: "/sourcing" } };

export default function Sourcing() {
  return (
    <>
      <PageHero eyebrow="Sourcing capabilities" title="Sourcing from where each product is best made." subtitle="Regional teams find, vet and manage suppliers so you buy with confidence." cta={{ label: "Request a quote", href: "/contact" }} />
      <section className="mx-auto max-w-6xl px-6 pb-16 md:px-10">
        <h2 className="h-display-md">Regions we source from</h2>
        <div className="mt-8"><FeatureGrid items={regions.map((r) => ({ title: r.name, body: r.body }))} /></div>
      </section>
      <section className="mx-auto max-w-6xl px-6 pb-16 md:px-10">
        <h2 className="h-display-md">Categories sourced</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((c) => <ServiceCard key={c.slug} label={c.lead ? "Lead category" : "Category"} title={c.label} tagline={c.body} href="/products" />)}
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-6 pb-24 md:px-10">
        <h2 className="h-display-md">Our process</h2>
        <div className="mt-8"><FeatureGrid items={processSteps} /></div>
      </section>
    </>
  );
}
