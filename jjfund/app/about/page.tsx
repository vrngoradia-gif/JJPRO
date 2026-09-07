import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import SectionReveal from "@/components/ui/SectionReveal";
import { about } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description: about.subtitle,
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow={about.eyebrow} title={about.title} subtitle={about.subtitle} />

      <section className="mx-auto max-w-3xl px-6 pb-24 md:px-10 md:pb-32">
        <SectionReveal className="glow-border rounded-2xl bg-panel/60 p-8 md:p-12">
          <p className="eyebrow">Founder</p>
          <h2 className="font-display mt-4 text-2xl text-paper">{about.founder.name}</h2>
          <p className="mt-4 text-base leading-relaxed text-paper">{about.founder.anchorLine}</p>
          <p className="mt-4 text-sm leading-relaxed text-paper-dim">{about.founder.aiDna}</p>
          <p className="mt-4 text-sm leading-relaxed text-paper-dim">{about.founder.presence}</p>
          <a
            href={about.founder.linkedin}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center gap-2 text-sm text-accent-bright hover:text-accent"
          >
            View LinkedIn
            <span>→</span>
          </a>
        </SectionReveal>
      </section>
    </>
  );
}
