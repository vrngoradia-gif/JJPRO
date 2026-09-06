import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SectionReveal from "@/components/ui/SectionReveal";
import CtaButton from "@/components/ui/CtaButton";
import { solutions } from "@/lib/content";

export function generateStaticParams() {
  return solutions.verticals.map((v) => ({ slug: v.slug }));
}

function getVertical(slug: string) {
  return solutions.verticals.find((v) => v.slug === slug);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const vertical = getVertical(slug);
  if (!vertical) return {};
  return {
    title: vertical.name,
    alternates: { canonical: `/solutions/${vertical.slug}` },
  };
}

export default async function SolutionVerticalPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const vertical = getVertical(slug);
  if (!vertical) notFound();

  return (
    <>
      <section className="border-b border-line/60 pt-40 pb-20 md:pt-48 md:pb-28">
        <div className="mx-auto max-w-3xl px-6 text-center md:px-10">
          <SectionReveal>
            <p className="eyebrow mb-4">Solutions</p>
          </SectionReveal>
          <SectionReveal delay={0.05}>
            <h1 className="h-display-xl accent-gradient-text text-balance">{vertical.name}</h1>
          </SectionReveal>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6 md:px-10">
          <SectionReveal>
            <p className="eyebrow mb-4">Relevant Services</p>
            <ul className="divide-y divide-line/60 rounded-2xl border border-line/70">
              {vertical.services.map((s) => (
                <li key={s} className="px-6 py-4 text-sm text-paper-dim">
                  {s}
                </li>
              ))}
            </ul>
          </SectionReveal>

          {vertical.aaaas && (
            <SectionReveal delay={0.06}>
              <div className="glow-border mt-8 rounded-2xl bg-panel/60 p-6">
                <p className="eyebrow mb-2">AAaaS Fit</p>
                <p className="text-paper-dim">{vertical.aaaas}</p>
              </div>
            </SectionReveal>
          )}

          {vertical.marketAnchor && (
            <SectionReveal delay={0.1}>
              <p className="mt-8 text-center text-sm text-paper-dim">{vertical.marketAnchor}</p>
            </SectionReveal>
          )}

          {vertical.clusters && (
            <SectionReveal delay={0.14}>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                {vertical.clusters.map((cluster) => (
                  <span
                    key={cluster}
                    className="rounded-full border border-line/70 bg-panel/40 px-4 py-2 text-sm text-paper-dim"
                  >
                    {cluster}
                  </span>
                ))}
              </div>
            </SectionReveal>
          )}

          <SectionReveal delay={0.18}>
            <div className="mt-12 text-center">
              <CtaButton href={vertical.cta.href} variant="solid">
                {vertical.cta.label}
              </CtaButton>
            </div>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
