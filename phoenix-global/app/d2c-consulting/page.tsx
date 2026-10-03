import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import FeatureGrid from "@/components/ui/FeatureGrid";
import InquiryForm from "@/components/forms/InquiryForm";
import { d2c } from "@/lib/content";

export const metadata: Metadata = { title: "D2C and brand consulting in India", description: "OEM/ODM matching, white-label sourcing, product-market fit advice and supply chain for Indian D2C brands.", alternates: { canonical: "/d2c-consulting" } };

export default function D2C() {
  return (
    <>
      <PageHero eyebrow="D2C and brand consulting, India" title="Your product, your brand, powered by our sourcing engine." subtitle="We help Indian D2C brands find the right manufacturer, white-label products and run the supply chain behind them." />
      <section className="mx-auto max-w-6xl px-6 pb-16 md:px-10">
        <h2 className="h-display-md">How we help</h2>
        <div className="mt-8"><FeatureGrid items={d2c.services} columns={2} /></div>
      </section>
      <section className="mx-auto max-w-6xl px-6 pb-16 md:px-10">
        <h2 className="h-display-md">Key industries</h2>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">{d2c.industries.map((i) => <li key={i} className="rounded-full border border-line px-5 py-3 text-sm">{i}</li>)}</ul>
      </section>
      <section className="mx-auto max-w-2xl px-6 pb-24 md:px-10">
        <h2 className="h-display-md">Launch with us</h2>
        <div className="mt-8"><InquiryForm defaultType="d2c" /></div>
      </section>
    </>
  );
}
