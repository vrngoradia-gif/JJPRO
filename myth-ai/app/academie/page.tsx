import type { Metadata } from "next";
import SectionReveal from "@/components/ui/SectionReveal";
import CtaButton from "@/components/ui/CtaButton";
import { academie } from "@/lib/content";

export const metadata: Metadata = {
  title: academie.hero.heading,
  description: academie.hero.sub,
  alternates: { canonical: "/academie" },
};

export default function AcademiePage() {
  return (
    <>
      <section className="border-b border-line/60 pt-40 pb-20 md:pt-48 md:pb-28">
        <div className="mx-auto max-w-3xl px-6 text-center md:px-10">
          <SectionReveal>
            <h1 className="h-display-xl accent-gradient-text text-balance">{academie.hero.heading}</h1>
          </SectionReveal>
          <SectionReveal delay={0.05}>
            <p className="mx-auto mt-6 max-w-xl text-balance text-paper-dim">{academie.hero.sub}</p>
          </SectionReveal>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <div className="grid gap-6 md:grid-cols-3">
            {academie.tracks.map((track, i) => (
              <SectionReveal key={track.slug} delay={i * 0.08}>
                <div className="flex h-full flex-col rounded-2xl border border-line/70 bg-panel/50 p-8">
                  <h2 className="font-display text-xl text-paper">{track.name}</h2>
                  <p className="mt-2 text-sm text-accent-bright">{track.detail}</p>
                  <ul className="mt-5 flex-1 space-y-2">
                    {track.curriculum.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-paper-dim">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-6 font-display text-lg text-paper">{track.pricing}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <section id={academie.book.slug} className="scroll-mt-28 border-t border-line/60 py-24 md:py-32">
        <div className="mx-auto max-w-2xl px-6 text-center md:px-10">
          <SectionReveal>
            <h2 className="h-display-lg text-balance text-paper">{academie.book.name}</h2>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              {academie.book.channels.map((channel) => (
                <span
                  key={channel}
                  className="rounded-full border border-line/70 bg-panel/40 px-4 py-2 text-sm text-paper-dim"
                >
                  {channel}
                </span>
              ))}
            </div>
            <div className="mt-10">
              <CtaButton href="/contact" variant="solid">
                Book a Workshop
              </CtaButton>
            </div>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
