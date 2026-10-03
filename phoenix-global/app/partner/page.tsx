import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import FeatureGrid from "@/components/ui/FeatureGrid";
import CtaButton from "@/components/ui/CtaButton";

export const metadata: Metadata = { title: "Partner with us", description: "For buyers, distributors, retailers, manufacturers and OEMs.", alternates: { canonical: "/partner" } };

export default function Partner() {
  return (
    <>
      <PageHero eyebrow="Partner with us" title="Buy from us, or supply through us." />
      <section className="mx-auto max-w-6xl px-6 pb-24 md:px-10">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="h-display-md">Buyers, distributors, retailers</h2>
            <div className="mt-6"><FeatureGrid columns={2} items={[
              { title: "Product catalogue", body: "Request our catalogue for your category." },
              { title: "Request for quote", body: "Price, MOQ and lead time for your specification." },
            ]} /></div>
            <div className="mt-6"><CtaButton href="/contact">Request a quote</CtaButton></div>
          </div>
          <div>
            <h2 className="h-display-md">Manufacturers and OEMs</h2>
            <div className="mt-6"><FeatureGrid columns={2} items={[
              { title: "Get listed as a vendor", body: "Tell us what you make and where." },
              { title: "Compliance checklist", body: "We share the checks suppliers must meet." },
            ]} /></div>
            <div className="mt-6"><CtaButton href="/contact?type=manufacturer" variant="outline">Register as a vendor</CtaButton></div>
          </div>
        </div>
      </section>
    </>
  );
}
