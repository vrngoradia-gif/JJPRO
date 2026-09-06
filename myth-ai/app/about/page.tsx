import type { Metadata } from "next";
import SectionReveal from "@/components/ui/SectionReveal";
import CtaButton from "@/components/ui/CtaButton";
import { about } from "@/lib/content";

export const metadata: Metadata = {
  title: about.hero.heading,
  description: about.hero.sub,
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-line/60 pt-40 pb-20 md:pt-48 md:pb-28">
        <div className="mx-auto max-w-3xl px-6 text-center md:px-10">
          <SectionReveal>
            <h1 className="h-display-xl accent-gradient-text text-balance">{about.hero.heading}</h1>
          </SectionReveal>
          <SectionReveal delay={0.05}>
            <p className="mx-auto mt-6 max-w-xl text-balance text-paper-dim">{about.hero.sub}</p>
          </SectionReveal>
        </div>
      </section>

      <section id="team" className="scroll-mt-28 border-b border-line/60 py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6 md:px-10">
          <SectionReveal>
            <p className="eyebrow mb-4">{about.team.heading}</p>
            <p className="text-balance text-paper-dim">{about.team.body}</p>
          </SectionReveal>
        </div>
      </section>

      <section className="border-b border-line/60 py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6 md:px-10">
          <SectionReveal>
            <p className="eyebrow mb-4">{about.partners.heading}</p>
            <p className="text-balance text-paper-dim">{about.partners.body}</p>
          </SectionReveal>
        </div>
      </section>

      <section className="border-b border-line/60 py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6 md:px-10">
          <SectionReveal>
            <p className="eyebrow mb-4">{about.office.heading}</p>
            <p className="text-balance text-paper-dim">{about.office.body}</p>
          </SectionReveal>
        </div>
      </section>

      <section id="press" className="scroll-mt-28 py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6 md:px-10">
          <SectionReveal>
            <p className="eyebrow mb-4">{about.press.heading}</p>
            <p className="text-balance text-paper-dim">{about.press.body}</p>
          </SectionReveal>
        </div>
      </section>

      <section className="border-t border-line/60 py-20">
        <div className="mx-auto max-w-3xl px-6 text-center md:px-10">
          <SectionReveal>
            <CtaButton href="/contact" variant="solid">
              Get in Touch
            </CtaButton>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
