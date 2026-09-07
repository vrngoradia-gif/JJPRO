import type { Metadata } from "next";
import SectionReveal from "@/components/ui/SectionReveal";
import CtaButton from "@/components/ui/CtaButton";
import ServiceCard from "@/components/ui/ServiceCard";
import DoorCard from "@/components/ui/DoorCard";
import CorridorStrip from "@/components/ui/CorridorStrip";
import { home, services, audiences, corridorCities, gcc, siteMeta } from "@/lib/content";

export const metadata: Metadata = {
  title: `${siteMeta.name} — ${siteMeta.tagline}`,
  description: siteMeta.description,
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <section className="grid-texture px-6 pb-20 pt-32 text-center md:px-10 md:pb-28 md:pt-44">
        <SectionReveal>
          <p className="eyebrow">{home.hero.eyebrow}</p>
          <h1 className="h-display-xl text-balance mx-auto mt-6 max-w-4xl">{home.hero.title}</h1>
          <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-paper-dim">
            {home.hero.subtitle}
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <CtaButton href={home.hero.primaryCta.href}>{home.hero.primaryCta.label}</CtaButton>
            <CtaButton href={home.hero.secondaryCta.href} variant="outline">
              {home.hero.secondaryCta.label}
            </CtaButton>
          </div>
        </SectionReveal>
      </section>

      <section className="border-y border-line/60 bg-ink-soft px-6 py-16 md:px-10">
        <SectionReveal className="mx-auto max-w-4xl text-center">
          <p className="eyebrow">{home.corridor.kicker}</p>
          <p className="mx-auto mt-4 max-w-xl text-sm text-paper-dim">{home.corridor.body}</p>
        </SectionReveal>
        <SectionReveal delay={0.1} className="mt-10">
          <CorridorStrip cities={corridorCities} />
        </SectionReveal>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-32">
        <SectionReveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">{home.whatWeDo.kicker}</p>
          <h2 className="h-display-lg text-balance mt-6">{home.whatWeDo.heading}</h2>
          <p className="mt-4 text-base text-paper-dim">{home.whatWeDo.body}</p>
        </SectionReveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
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

      <section className="border-y border-line/60 bg-ink-soft px-6 py-24 md:px-10 md:py-32">
        <SectionReveal className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">{home.aiEdge.kicker}</p>
          <h2 className="h-display-lg text-balance mt-6">{home.aiEdge.heading}</h2>
          <p className="mt-4 text-base text-paper-dim">{home.aiEdge.body}</p>
          <div className="mt-8">
            <CtaButton href={home.aiEdge.cta.href} variant="outline">
              {home.aiEdge.cta.label}
            </CtaButton>
          </div>
        </SectionReveal>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-32">
        <SectionReveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">{home.serve.kicker}</p>
          <h2 className="h-display-lg text-balance mt-6">{home.serve.heading}</h2>
        </SectionReveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {audiences.map((audience, i) => (
            <SectionReveal key={audience.key} delay={i * 0.08}>
              <DoorCard
                label={audience.label}
                subtitle={audience.subtitle}
                want={audience.want}
                offer={audience.offer}
                action={audience.action}
              />
            </SectionReveal>
          ))}
        </div>

        <SectionReveal delay={0.3} className="mx-auto mt-16 max-w-2xl text-center">
          <p className="eyebrow">{home.proof.kicker}</p>
          <p className="mt-4 text-sm text-paper-dim">{home.proof.note}</p>
        </SectionReveal>
      </section>
    </>
  );
}
