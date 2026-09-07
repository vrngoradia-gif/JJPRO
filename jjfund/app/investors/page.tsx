import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import SectionReveal from "@/components/ui/SectionReveal";
import { investors } from "@/lib/content";

export const metadata: Metadata = {
  title: "Investors",
  description: investors.subtitle,
  alternates: { canonical: "/investors" },
};

export default function InvestorsPage() {
  return (
    <>
      <PageHero
        eyebrow={investors.eyebrow}
        title={investors.title}
        subtitle={investors.subtitle}
        cta={investors.cta}
      />
      <section className="mx-auto max-w-3xl px-6 pb-24 md:px-10 md:pb-32">
        <SectionReveal>
          <p className="text-base leading-relaxed text-paper-dim">{investors.body}</p>
        </SectionReveal>
      </section>
    </>
  );
}
