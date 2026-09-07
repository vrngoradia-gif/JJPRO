import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import SectionReveal from "@/components/ui/SectionReveal";
import { services } from "@/lib/content";

const service = services.find((s) => s.slug === "capital-fundraising")!;

export const metadata: Metadata = {
  title: service.title,
  description: service.summary,
  alternates: { canonical: "/what-we-do/capital-fundraising" },
};

export default function CapitalFundraisingPage() {
  return (
    <>
      <PageHero
        eyebrow={service.label}
        title={service.tagline}
        subtitle={service.summary}
        cta={service.cta}
      />
      <section className="mx-auto max-w-3xl px-6 pb-24 md:px-10 md:pb-32">
        <SectionReveal>
          <p className="text-base leading-relaxed text-paper-dim">{service.body}</p>
        </SectionReveal>
      </section>
    </>
  );
}
