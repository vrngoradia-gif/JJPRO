import type { Metadata } from "next";
import SectionReveal from "@/components/ui/SectionReveal";
import MagneticButton from "@/components/ui/MagneticButton";
import ContactForm from "@/components/forms/ContactForm";
import CalendlyEmbed from "@/components/forms/CalendlyEmbed";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import FAQSection from "@/components/ui/FAQSection";
import { contact, faqs } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact JJ PRO — Book a Call or Send a Message",
  description:
    "Get in touch with JJ PRO to talk fundraising, GTM or brand strategy. Send a message or book a free 30-minute intro call on our calendar today.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact JJ PRO — Book a Call or Send a Message",
    description:
      "Get in touch with JJ PRO to talk fundraising, GTM or brand strategy. Send a message or book a free 30-minute intro call on our calendar today.",
    url: "/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Contact", href: "/contact" }]} />
      <section className="px-6 pb-16 pt-10 text-center md:px-10 md:pt-12">
        <SectionReveal>
          <p className="eyebrow">{contact.hero.eyebrow}</p>
          <h1 className="h-display-xl text-balance mx-auto mt-6 max-w-4xl text-paper">
            {contact.hero.title}
          </h1>
          <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-paper-dim">
            {contact.hero.subtitle}
          </p>
        </SectionReveal>
      </section>

      <section className="mx-auto grid max-w-6xl gap-12 px-6 pb-24 md:grid-cols-2 md:px-10 md:pb-32">
        <SectionReveal>
          <h2 className="font-display text-2xl text-paper">{contact.form.heading}</h2>
          <div className="mt-8">
            <ContactForm
              formName="contact"
              submitLabel={contact.form.submitLabel}
              successMessage={contact.form.successMessage}
              errorMessage={contact.form.errorMessage}
              fields={[
                { name: "name", label: contact.form.fields.name, required: true },
                { name: "email", label: contact.form.fields.email, type: "email", required: true },
                { name: "company", label: contact.form.fields.company },
                { name: "message", label: contact.form.fields.message, type: "textarea", required: true },
              ]}
            />
          </div>

          <div className="mt-12 border-t border-line/60 pt-8">
            <p className="font-display text-lg text-paper">
              {contact.directEmail.heading}
            </p>
            <a
              href={`mailto:${contact.directEmail.general}`}
              className="mt-2 block text-sm text-gold"
            >
              {contact.directEmail.general}
            </a>
          </div>
        </SectionReveal>

        <SectionReveal delay={0.1}>
          <h2 className="font-display text-2xl text-paper">{contact.calendly.heading}</h2>
          <p className="mt-3 text-sm text-paper-dim">{contact.calendly.body}</p>
          <div className="mt-6">
            <CalendlyEmbed />
          </div>
        </SectionReveal>
      </section>

      <FAQSection items={faqs.contact} />

      <section className="border-t border-line/60 bg-ink-soft">
        <div className="mx-auto max-w-3xl px-6 py-24 text-center md:px-10 md:py-32">
          <SectionReveal>
            <p className="eyebrow">{contact.partnerCta.kicker}</p>
            <h2 className="h-display-lg text-balance mt-6 text-paper">
              {contact.partnerCta.heading}
            </h2>
            <p className="mt-4 text-base text-paper-dim">{contact.partnerCta.body}</p>
            <MagneticButton href={contact.partnerCta.button.href} variant="outline" className="mt-8">
              {contact.partnerCta.button.label}
            </MagneticButton>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
