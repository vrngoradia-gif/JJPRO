import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import SectionReveal from "@/components/ui/SectionReveal";
import { partners } from "@/lib/content";

export const metadata: Metadata = {
  title: "Partners",
  description: partners.subtitle,
  alternates: { canonical: "/partners" },
};

export default function PartnersPage() {
  return (
    <>
      <PageHero
        eyebrow={partners.eyebrow}
        title={partners.title}
        subtitle={partners.subtitle}
        cta={partners.cta}
      />
      <section className="mx-auto max-w-3xl px-6 pb-16 md:px-10">
        <SectionReveal>
          <p className="text-base leading-relaxed text-paper-dim">{partners.body}</p>
          <aside aria-label="External website notice" className="mt-8 rounded-2xl border border-line bg-panel/60 p-6 text-sm leading-relaxed text-paper-dim">
            Links to partner websites take you to independent third-party websites. Their own privacy policies and terms apply to information you provide there. Following a link does not submit this website&apos;s enquiry form or send your form answers to that partner.
          </aside>
        </SectionReveal>
      </section>
      <section className="mx-auto max-w-4xl px-6 pb-24 md:px-10 md:pb-32">
        <SectionReveal className="flex flex-wrap justify-center gap-3">
          {partners.network.map((item) => (
            <span
              key={item}
              className="rounded-full border border-line bg-panel/60 px-5 py-2 text-sm text-paper-dim"
            >
              {item}
            </span>
          ))}
        </SectionReveal>
      </section>
    </>
  );
}
