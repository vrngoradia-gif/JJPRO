import SectionRow from "@/components/ui/SectionRow";
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
      <section className="hero-streaks relative flex min-h-[88vh] items-center overflow-hidden pt-28">
        <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-12 px-6 md:grid-cols-[1fr_300px] md:px-10">
          <div>
            <SectionReveal>
              <span className="rule-bar" />
              <p className="eyebrow mt-8">{home.hero.eyebrow}</p>
            </SectionReveal>
            <SectionReveal delay={0.1}>
              <h1 className="h-display-xl mt-6 max-w-6xl text-paper">{home.hero.title}</h1>
            </SectionReveal>
            <SectionReveal delay={0.2}>
              <p className="mt-8 max-w-lg text-base leading-relaxed text-paper-dim md:text-lg">{home.hero.subtitle}</p>
            </SectionReveal>
            <SectionReveal delay={0.3}>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <MagneticButton href={home.hero.primaryCta.href}>{home.hero.primaryCta.label}</MagneticButton>
                <MagneticButton href={home.hero.secondaryCta.href} variant="outline">{home.hero.secondaryCta.label}</MagneticButton>
              </div>
            </SectionReveal>
          </div>
          <SectionReveal delay={0.4} className="self-end">
            <div className="border-l-4 border-gold pl-5">
              <p className="font-display text-lg font-bold text-paper">{person.name}</p>
              <p className="mt-1 text-sm text-paper-dim">Venture Partner, VNTR Mumbai</p>
              <a href="https://www.linkedin.com/in/jignesh1409/" target="_blank" rel="noopener noreferrer" className="mt-3 inline-block text-sm font-medium text-gold-bright">LinkedIn →</a>
              {/* PLACEHOLDER: add an approved personal quote and signature image here (theme has a quote + signature block). */}
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
      <SectionRow num="01" label="Services">
        <div className="grid gap-px md:grid-cols-2 lg:grid-cols-4">
          {home.services.map((s, i) => (
            <ServiceCard key={s.title} {...s} index={i} />
          ))}
        </div>
      </SectionRow>

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
        <section className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
          <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
            {home.stats.map((stat) => (
              <StatCounter key={stat.label} {...stat} />
            ))}
          </div>
        </section>
      )}

      {/* Clients: hidden until real logos are supplied in lib/content.ts (no ghost placeholders on the live site) */}
      {home.clients.logos.length > 0 && (
        <SectionRow num="03" label="Clients">
          <Marquee items={home.clients.logos} />
        </SectionRow>
      )}

      {/* Testimonials (hidden until real, approved quotes are added) */}
      {home.testimonials.length > 0 && (
        <section className="mx-auto max-w-5xl px-6 py-20 md:px-10 md:py-28">
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
