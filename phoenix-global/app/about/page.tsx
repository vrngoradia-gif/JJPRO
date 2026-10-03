import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import FeatureGrid from "@/components/ui/FeatureGrid";
import { contactInfo, compliance } from "@/lib/content";

export const metadata: Metadata = { title: "About", description: "Phoenix Global is a trading and export company sourcing textiles and commodities from India, China and Latin America.", alternates: { canonical: "/about" } };

export default function About() {
  return (
    <>
      <PageHero eyebrow="About us" title="A sourcing and export partner for textiles and commodities." subtitle="Phoenix Global Corporation trades and exports goods around the world, with supply chain, sourcing and market knowledge at the core." cta={{ label: "Ask for price", href: "/contact" }} />
      <section className="mx-auto max-w-5xl px-6 pb-16 md:px-10">
        <h2 className="h-display-md">Core strengths</h2>
        <div className="mt-8"><FeatureGrid items={[
          { title: "Supply chain", body: "Planning, production follow-up, packing and shipping handled as one process." },
          { title: "Sourcing", body: "Verified suppliers across India, China and Latin America, with ground teams in each country." },
          { title: "Market knowledge", body: "We understand what buyers in North America, Europe, Africa and the Middle East expect." },
        ]} /></div>
      </section>
      <section className="mx-auto max-w-5xl px-6 pb-16 md:px-10">
        <h2 className="h-display-md">Regional hubs</h2>
        <div className="mt-8"><FeatureGrid items={contactInfo.offices.map((o) => ({ title: o.place, body: o.detail }))} columns={3} /></div>
      </section>
      <section className="mx-auto max-w-5xl px-6 pb-24 md:px-10">
        <h2 className="h-display-md">Quality, ethics and sustainability</h2>
        <div className="mt-8"><FeatureGrid items={compliance.items} /></div>
      </section>
    </>
  );
}
