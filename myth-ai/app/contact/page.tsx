import type { Metadata } from "next";
import SectionReveal from "@/components/ui/SectionReveal";
import ContactForm, { type FormFieldConfig } from "@/components/forms/ContactForm";
import { contactPage, contact } from "@/lib/content";

export const metadata: Metadata = {
  title: contactPage.hero.heading,
  description: contactPage.hero.sub,
  alternates: { canonical: "/contact" },
};

const fields: FormFieldConfig[] = [
  { name: "name", label: "Name", type: "text", required: true },
  { name: "company", label: "Company", type: "text", required: true },
  { name: "role", label: "Role", type: "text" },
  { name: "industry", label: "Industry", type: "text" },
  { name: "phone", label: "Phone", type: "tel" },
  { name: "email", label: "Email", type: "email", required: true },
  {
    name: "interested_in",
    label: "Interested In",
    type: "select",
    required: true,
    options: contactPage.form.interestedIn,
  },
  { name: "message", label: "Brief / Message", type: "textarea" },
];

export default function ContactPage() {
  return (
    <section className="pt-40 pb-24 md:pt-48 md:pb-32">
      <div className="mx-auto max-w-5xl px-6 md:px-10">
        <div className="grid gap-16 md:grid-cols-2">
          <SectionReveal>
            <h1 className="h-display-xl accent-gradient-text text-balance">{contactPage.hero.heading}</h1>
            <p className="mt-6 max-w-md text-balance text-paper-dim">{contactPage.hero.sub}</p>

            <div className="mt-10 space-y-3 text-sm text-paper-dim">
              <p>
                Email:{" "}
                <a href={`mailto:${contact.email}`} className="text-paper hover:text-accent-bright">
                  {contact.email}
                </a>
              </p>
              <p>
                WhatsApp:{" "}
                <a href={contact.whatsappHref} target="_blank" rel="noreferrer" className="text-paper hover:text-accent-bright">
                  {contact.whatsapp}
                </a>
              </p>
              <p>Office: {contact.office}</p>
            </div>
          </SectionReveal>

          <SectionReveal delay={0.08}>
            <ContactForm fields={fields} />
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
