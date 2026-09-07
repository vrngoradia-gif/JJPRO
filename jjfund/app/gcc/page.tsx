import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import SectionReveal from "@/components/ui/SectionReveal";
import FeatureGrid from "@/components/ui/FeatureGrid";
import { gcc } from "@/lib/content";

export const metadata: Metadata = {
  title: "GCC Establishment",
  description: gcc.subtitle,
  alternates: { canonical: "/gcc" },
};

export default function GccPage() {
  return (
    <>
      <PageHero eyebrow={gcc.eyebrow} title={gcc.title} subtitle={gcc.subtitle} cta={gcc.cta} />

      <section className="mx-auto max-w-6xl px-6 pb-24 md:px-10 md:pb-32">
        <FeatureGrid items={gcc.points} />
      </section>

      <section className="border-t border-line/60 bg-ink-soft px-6 py-24 md:px-10 md:py-32">
        <SectionReveal className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">Why we win</p>
          <p className="mt-6 text-lg leading-relaxed text-paper">{gcc.whyWeWin}</p>
        </SectionReveal>
      </section>
    </>
  );
}
