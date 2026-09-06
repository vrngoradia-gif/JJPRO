import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SectionReveal from "@/components/ui/SectionReveal";
import CtaButton from "@/components/ui/CtaButton";
import { platform } from "@/lib/content";

export function generateStaticParams() {
  return platform.products.map((p) => ({ slug: p.slug }));
}

function getProduct(slug: string) {
  return platform.products.find((p) => p.slug === slug);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  return {
    title: product.name,
    description: product.description,
    alternates: { canonical: `/platform/${product.slug}` },
  };
}

export default async function PlatformProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  return (
    <>
      <section className="border-b border-line/60 pt-40 pb-20 md:pt-48 md:pb-28">
        <div className="mx-auto max-w-3xl px-6 text-center md:px-10">
          <SectionReveal>
            <p className="eyebrow mb-4">Platform</p>
          </SectionReveal>
          <SectionReveal delay={0.05}>
            <h1 className="h-display-xl accent-gradient-text text-balance">{product.name}</h1>
          </SectionReveal>
          <SectionReveal delay={0.1}>
            <p className="mt-4 text-lg text-accent-bright">{product.tagline}</p>
          </SectionReveal>
          <SectionReveal delay={0.15}>
            <p className="mx-auto mt-6 max-w-xl text-balance text-paper-dim">{product.description}</p>
          </SectionReveal>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6 md:px-10">
          <SectionReveal>
            <div className="rounded-2xl border border-line/70 bg-panel/50 p-8">
              <p className="eyebrow mb-3">What it powers</p>
              <p className="text-paper">{product.powers}</p>
            </div>
          </SectionReveal>

          <SectionReveal delay={0.08}>
            <div className="glow-border mt-8 flex flex-col items-start justify-between gap-6 rounded-2xl bg-panel/60 p-8 sm:flex-row sm:items-center">
              <p className="text-paper-dim">{product.crossSell}</p>
              <CtaButton href={product.crossSellCta.href} variant="solid" className="shrink-0">
                {product.crossSellCta.label}
              </CtaButton>
            </div>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
