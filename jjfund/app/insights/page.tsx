import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import SectionReveal from "@/components/ui/SectionReveal";
import { insights } from "@/lib/content";

export const metadata: Metadata = {
  title: "Insights",
  description: insights.subtitle,
  alternates: { canonical: "/insights" },
};

export default function InsightsPage() {
  return (
    <>
      <PageHero eyebrow={insights.eyebrow} title={insights.title} subtitle={insights.subtitle} />
      <section className="mx-auto max-w-3xl px-6 pb-24 text-center md:px-10 md:pb-32">
        <SectionReveal>
          {/* TODO: replace with real client content — no posts published yet */}
          <p className="text-sm text-paper-dim">
            The first perspectives on building across the corridor are coming soon.
          </p>
        </SectionReveal>
      </section>
    </>
  );
}
