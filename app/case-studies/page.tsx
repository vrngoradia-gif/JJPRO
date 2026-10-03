import type { Metadata } from "next";
import SectionReveal from "@/components/ui/SectionReveal";
import MagneticButton from "@/components/ui/MagneticButton";

export const metadata: Metadata = {
  title: "Case Studies",
  description: "Selected engagements by JJ PRO. Case studies are added with client approval.",
  alternates: { canonical: "/case-studies" },
};

export default function CaseStudies() {
  return (
    <section className="hero-streaks px-6 pb-24 pt-40 md:px-10">
      <div className="mx-auto max-w-5xl">
        <SectionReveal>
          <span className="rule-bar" />
          <p className="eyebrow mt-8">Case Studies</p>
          <h1 className="h-display-lg mt-6">Selected work, shared with client approval.</h1>
          {/* PLACEHOLDER: add real, approved case studies here. */}
          <p className="mt-6 max-w-xl text-paper-dim">We publish case studies only when clients have agreed. To hear about relevant engagements, get in touch.</p>
          <div className="mt-10"><MagneticButton href="/contact">Start a Conversation</MagneticButton></div>
        </SectionReveal>
      </div>
    </section>
  );
}
