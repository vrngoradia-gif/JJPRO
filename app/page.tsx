import SceneCanvas from "@/components/three/SceneCanvas";
import HeroBackdrop from "@/components/ui/HeroBackdrop";
import TiltPortrait from "@/components/ui/TiltPortrait";
import SectionReveal from "@/components/ui/SectionReveal";
import ServiceCard from "@/components/ui/ServiceCard";
import StatCounter from "@/components/ui/StatCounter";
import TestimonialCarousel from "@/components/ui/TestimonialCarousel";
import Marquee from "@/components/ui/Marquee";
import MagneticButton from "@/components/ui/MagneticButton";
import FAQSection from "@/components/ui/FAQSection";
import { home, faqs } from "@/lib/content";
import { person } from "@/lib/schema";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-screen items-center overflow-hidden pt-28">
        <HeroBackdrop />
        <SceneCanvas className="absolute inset-0 opacity-80 mix-blend-screen" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/75" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(203,161,88,0.2),transparent_55%)]" />

        <div className="relative z-10 mx-auto max-w-5xl px-6 text-center md:px-10">
          <SectionReveal>
            <p className="eyebrow">{home.hero.eyebrow}</p>
          </SectionReveal>
          <SectionReveal delay={0.1}>
            <h1 className="h-display-xl text-balance mt-6 text-paper">
              {home.hero.title}
            </h1>
          </SectionReveal>
          <SectionReveal delay={0.2}>
            <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-paper-dim md:text-lg">
              {home.hero.subtitle}
            </p>
          </SectionReveal>
          <SectionReveal delay={0.3}>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <MagneticButton href={home.hero.primaryCta.href}>
                {home.hero.primaryCta.label}
              </MagneticButton>
              <MagneticButton href={home.hero.secondaryCta.href} variant="outline">
                {home.hero.secondaryCta.label}
              </MagneticButton>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Intro */}
      <section className="mx-auto max-w-4xl px-6 py-24 text-center md:px-10 md:py-32">
        <SectionReveal>
          <p className="eyebrow">{home.intro.kicker}</p>
          <h2 className="h-display-lg text-balance mt-6 text-paper">
            {home.intro.heading}
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-paper-dim">
            {home.intro.body}
          </p>
        </SectionReveal>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-7xl px-6 pb-24 md:px-10 md:pb-32">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {home.services.map((s, i) => (
            <ServiceCard key={s.title} {...s} index={i} />
          ))}
        </div>
      </section>

      {/* About split */}
      <section className="border-t border-line/60 bg-ink-soft">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-2 md:px-10 md:py-32">
          <TiltPortrait src="/jignesh-jain.jpg" alt={person.name} />
          <SectionReveal delay={0.1} className="flex flex-col justify-center">
            <p className="eyebrow">{home.about.kicker}</p>
            <h2 className="h-display-lg text-balance mt-6 text-paper">
              {home.about.heading}
            </h2>
            <p className="mt-6 text-base leading-relaxed text-paper-dim">
              {home.about.body}
            </p>
            <MagneticButton href={home.about.cta.href} variant="outline" className="mt-8 self-start">
              {home.about.cta.label}
            </MagneticButton>
          </SectionReveal>
        </div>
      </section>

      {/* Stats (only shown when verified numbers are added in lib/content.ts) */}
      {home.stats.length > 0 && (
        <section className="mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-32">
          <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
            {home.stats.map((stat) => (
              <StatCounter key={stat.label} {...stat} />
            ))}
          </div>
        </section>
      )}

      {/* Clients marquee (hidden until real logos are added) */}
      {home.clients.logos.length > 0 && (
        <section className="border-y border-line/60 py-14">
          <p className="eyebrow mb-8 text-center">{home.clients.kicker}</p>
          <Marquee items={home.clients.logos} />
        </section>
      )}

      {/* Testimonials (hidden until real, approved quotes are added) */}
      {home.testimonials.length > 0 && (
        <section className="mx-auto max-w-5xl px-6 py-24 md:px-10 md:py-32">
          <SectionReveal>
            <TestimonialCarousel items={home.testimonials} />
          </SectionReveal>
        </section>
      )}

      {/* FAQ */}
      <FAQSection items={faqs.home} />

      {/* CTA */}
      <section className="border-t border-line/60 bg-ink-soft">
        <div className="mx-auto max-w-4xl px-6 py-24 text-center md:px-10 md:py-32">
          <SectionReveal>
            <p className="eyebrow">{home.cta.kicker}</p>
            <h2 className="h-display-lg text-balance mt-6 text-paper">
              {home.cta.heading}
            </h2>
            <MagneticButton href={home.cta.button.href} className="mt-10">
              {home.cta.button.label}
            </MagneticButton>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
