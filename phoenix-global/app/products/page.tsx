import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import CtaButton from "@/components/ui/CtaButton";
import { categories } from "@/lib/content";

export const metadata: Metadata = { title: "Product portfolio", description: "Fashion and textile, accessories, paper and packaging, electronics, commodities and custom OEM/ODM products.", alternates: { canonical: "/products" } };

export default function Products() {
  return (
    <>
      <PageHero eyebrow="Product portfolio" title="What we supply." subtitle="Textiles and fashion lead our range. Every category is quoted per enquiry, with MOQ and lead time." cta={{ label: "Ask for price / Inquire now", href: "/contact" }} />
      <section className="mx-auto max-w-6xl px-6 pb-24 md:px-10">
        <div className="space-y-6">
          {categories.map((c) => (
            <article key={c.slug} id={c.slug} className="glow-border grid gap-6 rounded-2xl bg-panel p-8 md:grid-cols-[1.2fr_1fr]">
              <div>
                {c.lead && <p className="eyebrow">Lead category</p>}
                <h2 className="font-display mt-2 text-2xl">{c.label}</h2>
                <p className="mt-3 text-sm leading-relaxed text-paper-dim">{c.body}</p>
                <p className="mt-4 text-xs text-paper-dim">Product gallery, MOQ, lead time and compliance details are shared with each quote.</p>
                <div className="mt-6"><CtaButton href={`/contact?product=${encodeURIComponent(c.label)}`}>Inquire about {c.label}</CtaButton></div>
              </div>
              <ul className="space-y-2 text-sm">
                {c.items.map((i) => <li key={i} className="rounded-full border border-line px-4 py-2">{i}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
