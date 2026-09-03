import type { Metadata } from "next";
import SectionReveal from "@/components/ui/SectionReveal";
import ContactForm from "@/components/forms/ContactForm";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import { partner } from "@/lib/content";

export const metadata: Metadata = {
  title: "Partner With Us — Investors, Agencies & Operators",
  description:
    "JJ PRO partners with investors, agencies and independent operators to serve founders better. Explore partnership opportunities with our practice.",
  alternates: { canonical: "/contact/partner" },
  openGraph: {
    title: "Partner With Us — Investors, Agencies & Operators",
    description:
      "JJ PRO partners with investors, agencies and independent operators to serve founders better. Explore partnership opportunities with our practice.",
    url: "/contact/partner",
  },
};

export default function PartnerPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Contact", href: "/contact" },
          { name: "Partner With Us", href: "/contact/partner" },
        ]}
      />
      <section className="px-6 pb-16 pt-10 text-center md:px-10 md:pt-12">
        <SectionReveal>
          <p className="eyebrow">{partner.hero.eyebrow}</p>
          <h1 className="h-display-xl text-balance mx-auto mt-6 max-w-4xl text-paper">
            {partner.hero.title}
          </h1>
          <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-paper-dim">
            {partner.hero.subtitle}
          </p>
        </SectionReveal>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-6 pb-24 md:grid-cols-3 md:px-10 md:pb-32">
        {partner.types.map((type, i) => (
          <SectionReveal key={type.title} delay={i * 0.08}>
            <div className="h-full rounded-2xl border border-line/70 bg-panel/50 p-8">
              <span className="eyebrow">0{i + 1}</span>
              <h2 className="font-display mt-4 text-xl text-paper">{type.title}</h2>
              <p className="mt-4 text-sm leading-relaxed text-paper-dim">
                {type.description}
              </p>
            </div>
          </SectionReveal>
        ))}
      </section>

      <section className="border-t border-line/60 bg-ink-soft">
        <div className="mx-auto max-w-2xl px-6 py-24 md:px-10 md:py-32">
          <SectionReveal>
            <h2 className="font-display text-center text-2xl text-paper">
              {partner.form.heading}
            </h2>
            <div className="mt-8">
              <ContactForm
                formName="partner"
                submitLabel={partner.form.submitLabel}
                fields={[
                  { name: "name", label: partner.form.fields.name, required: true },
                  { name: "email", label: partner.form.fields.email, type: "email", required: true },
                  { name: "organization", label: partner.form.fields.organization },
                  { name: "partnershipType", label: partner.form.fields.partnershipType },
                  { name: "message", label: partner.form.fields.message, type: "textarea", required: true },
                ]}
              />
            </div>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
