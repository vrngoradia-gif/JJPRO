import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import SectionReveal from "@/components/ui/SectionReveal";
import FeatureGrid from "@/components/ui/FeatureGrid";
import { aiAutomation } from "@/lib/content";

export const metadata: Metadata = {
  title: "AI & Automation",
  description: aiAutomation.subtitle,
  alternates: { canonical: "/ai-automation" },
};

export default function AiAutomationPage() {
  return (
    <>
      <PageHero eyebrow={aiAutomation.eyebrow} title={aiAutomation.title} subtitle={aiAutomation.subtitle} />

      <section className="mx-auto max-w-6xl px-6 pb-24 md:px-10 md:pb-32">
        <SectionReveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">{aiAutomation.functionsKicker}</p>
        </SectionReveal>
        <div className="mt-10">
          <FeatureGrid items={aiAutomation.functions} />
        </div>
      </section>

      <section className="border-t border-line/60 bg-ink-soft px-6 py-24 md:px-10 md:py-32">
        <SectionReveal className="mx-auto max-w-3xl text-center">
          <p className="text-lg leading-relaxed text-paper">{aiAutomation.credibility}</p>
        </SectionReveal>
      </section>
    </>
  );
}
