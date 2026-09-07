import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import SectionReveal from "@/components/ui/SectionReveal";
import ServiceCard from "@/components/ui/ServiceCard";
import { whatWeDoIntro, services, gcc } from "@/lib/content";

export const metadata: Metadata = {
  title: "What We Do",
  description: whatWeDoIntro.subtitle,
  alternates: { canonical: "/what-we-do" },
};

export default function WhatWeDoPage() {
  return (
    <>
      <PageHero eyebrow={whatWeDoIntro.eyebrow} title={whatWeDoIntro.title} subtitle={whatWeDoIntro.subtitle} />

      <section className="mx-auto max-w-6xl px-6 pb-24 md:px-10 md:pb-32">
        <div className="grid gap-6 sm:grid-cols-2">
          {services.map((service, i) => (
            <SectionReveal key={service.slug} delay={i * 0.08}>
              <ServiceCard
                label={service.label}
                title={service.title}
                tagline={service.tagline}
                href={service.cta.href}
              />
            </SectionReveal>
          ))}
        </div>

        <SectionReveal delay={0.3} className="mt-6">
          <ServiceCard label="FLAGSHIP" title="GCC Establishment" tagline={gcc.title} href="/gcc" />
        </SectionReveal>
      </section>
    </>
  );
}
