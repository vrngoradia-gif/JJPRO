import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import RouteMap from "@/components/ui/RouteMap";
import FeatureGrid from "@/components/ui/FeatureGrid";

export const metadata: Metadata = { title: "Global reach", description: "Sourcing from India, China and Latin America and exporting to North America, Europe, Africa and the Middle East.", alternates: { canonical: "/global-reach" } };

export default function GlobalReach() {
  return (
    <>
      <PageHero eyebrow="Global reach" title="Sourced in three regions, shipped to four." subtitle="We export to North America, Europe, Africa and the Middle East, and arrange other destinations on request." cta={{ label: "Ask for price", href: "/contact" }} />
      <section className="mx-auto max-w-4xl px-6 pb-16 md:px-10"><RouteMap /></section>
      <section className="mx-auto max-w-6xl px-6 pb-24 md:px-10">
        <FeatureGrid items={[
          { title: "North America", body: "USA and Canada." },
          { title: "Europe", body: "UK, Germany, France and other markets." },
          { title: "Africa", body: "Selected markets across the continent." },
          { title: "Middle East", body: "Gulf and wider region." },
        ]} columns={2} />
        <p className="mt-8 text-sm text-paper-dim">Notable projects and client mentions will be added here with permission.</p>
      </section>
    </>
  );
}
