import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import InquiryForm from "@/components/forms/InquiryForm";
import CtaButton from "@/components/ui/CtaButton";
import { contactInfo } from "@/lib/content";
import { whatsappLink } from "@/lib/whatsapp";

export const metadata: Metadata = { title: "Contact", description: "Send an enquiry or ask for a price.", alternates: { canonical: "/contact" } };

export default async function Contact({ searchParams }: { searchParams: Promise<{ type?: string; product?: string }> }) {
  const { type } = await searchParams;
  return (
    <>
      <PageHero eyebrow="Contact us" title="Ask for a price or send an enquiry." subtitle="Include product, quantity and destination. Attach drawings or samples if you have them." />
      <section className="mx-auto grid max-w-6xl gap-12 px-6 pb-24 md:px-10 lg:grid-cols-[1.4fr_1fr]">
        <InquiryForm defaultType={type ?? "buyer"} />
        <aside className="space-y-8 text-sm">
          <div>
            <p className="eyebrow">Reach us directly</p>
            <ul className="mt-4 space-y-2 text-paper-dim">
              <li><a href={`mailto:${contactInfo.email}`} className="hover:text-accent-bright">{contactInfo.email}</a></li>
              {contactInfo.phone && <li>{contactInfo.phone}</li>}
            </ul>
            <div className="mt-4"><CtaButton external href={whatsappLink(contactInfo.whatsapp, "Hello, I would like a quote from Phoenix Global.")} variant="outline">WhatsApp us</CtaButton></div>
          </div>
          <div>
            <p className="eyebrow">Offices</p>
            <ul className="mt-4 space-y-2 text-paper-dim">{contactInfo.offices.map((o) => <li key={o.place}>{o.place}</li>)}</ul>
          </div>
          {contactInfo.calendly && <div><CtaButton external href={contactInfo.calendly} variant="outline">Book a call</CtaButton></div>}
        </aside>
      </section>
    </>
  );
}
