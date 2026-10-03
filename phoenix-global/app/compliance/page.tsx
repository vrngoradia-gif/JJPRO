import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import FeatureGrid from "@/components/ui/FeatureGrid";
import { compliance } from "@/lib/content";

export const metadata: Metadata = { title: "Compliance and quality", description: "Certifications, quality control and sustainability at Phoenix Global.", alternates: { canonical: "/compliance" } };

export default function Compliance() {
  return (
    <>
      <PageHero eyebrow="Compliance and quality" title="Checked before it ships." />
      <section className="mx-auto max-w-6xl px-6 pb-24 md:px-10"><FeatureGrid items={compliance.items} /></section>
    </>
  );
}
