import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import FeatureGrid from "@/components/ui/FeatureGrid";
import { insights } from "@/lib/content";

export const metadata: Metadata = { title: "Insights", description: "Market trends, sourcing practice and D2C launch tips.", alternates: { canonical: "/insights" } };

export default function Insights() {
  return (
    <>
      <PageHero eyebrow="Insights" title="Notes on sourcing and trade." subtitle="Articles are coming soon on these topics." />
      <section className="mx-auto max-w-6xl px-6 pb-24 md:px-10"><FeatureGrid columns={2} items={insights.topics.map((t) => ({ title: t, body: "Coming soon." }))} /></section>
    </>
  );
}
