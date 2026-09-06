import type { Metadata } from "next";
import Link from "next/link";
import SectionReveal from "@/components/ui/SectionReveal";
import { solutions } from "@/lib/content";

export const metadata: Metadata = {
  title: solutions.hero.heading,
  description: solutions.hero.sub,
  alternates: { canonical: "/solutions" },
};

export default function SolutionsPage() {
  return (
    <>
      <section className="border-b border-line/60 pt-40 pb-20 md:pt-48 md:pb-28">
        <div className="mx-auto max-w-4xl px-6 text-center md:px-10">
          <SectionReveal>
            <h1 className="h-display-xl accent-gradient-text text-balance">{solutions.hero.heading}</h1>
          </SectionReveal>
          <SectionReveal delay={0.05}>
            <p className="mx-auto mt-6 max-w-xl text-balance text-paper-dim">{solutions.hero.sub}</p>
          </SectionReveal>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <div className="grid gap-6 md:grid-cols-2">
            {solutions.verticals.map((vertical, i) => (
              <SectionReveal key={vertical.slug} delay={i * 0.06}>
                <Link
                  href={`/solutions/${vertical.slug}`}
                  className="group flex h-full flex-col justify-between rounded-2xl border border-line/70 bg-panel/50 p-8 transition-all duration-300 hover:border-accent/60 hover:bg-panel"
                >
                  <div>
                    <h2 className="font-display text-xl text-paper">{vertical.name}</h2>
                    <ul className="mt-4 space-y-2">
                      {vertical.services.slice(0, 3).map((s) => (
                        <li key={s} className="text-sm text-paper-dim">
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <span className="mt-8 inline-flex items-center gap-1 text-xs uppercase tracking-wide text-accent-bright opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    Explore →
                  </span>
                </Link>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
