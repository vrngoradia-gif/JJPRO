import type { Metadata } from "next";
import Link from "next/link";
import SectionReveal from "@/components/ui/SectionReveal";
import CtaButton from "@/components/ui/CtaButton";
import FAQSection from "@/components/ui/FAQSection";
import BlogCard from "@/components/blog/BlogCard";
import { resources, blogPosts } from "@/lib/content";

export const metadata: Metadata = {
  title: resources.hero.heading,
  description: resources.hero.sub,
  alternates: { canonical: "/resources" },
};

export default function ResourcesPage() {
  return (
    <>
      <section className="border-b border-line/60 pt-40 pb-20 md:pt-48 md:pb-28">
        <div className="mx-auto max-w-3xl px-6 text-center md:px-10">
          <SectionReveal>
            <h1 className="h-display-xl accent-gradient-text text-balance">{resources.hero.heading}</h1>
          </SectionReveal>
          <SectionReveal delay={0.05}>
            <p className="mx-auto mt-6 max-w-xl text-balance text-paper-dim">{resources.hero.sub}</p>
          </SectionReveal>
        </div>
      </section>

      {/* Blog */}
      <section className="border-b border-line/60 py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <div className="mb-10 flex items-center justify-between">
            <SectionReveal>
              <p className="eyebrow">Latest from the Blog</p>
            </SectionReveal>
            <Link href="/resources/blog" className="text-sm text-accent-bright hover:text-accent">
              View all →
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {blogPosts.map((post, i) => (
              <BlogCard key={post.slug} post={post} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Gated resources */}
      <section className="border-b border-line/60 py-24 md:py-32">
        <div className="mx-auto max-w-5xl px-6 md:px-10">
          <div className="grid gap-6 md:grid-cols-2">
            <SectionReveal>
              <div id={resources.trendsReport.slug} className="scroll-mt-28 flex h-full flex-col rounded-2xl border border-line/70 bg-panel/50 p-8">
                <p className="eyebrow mb-3">Gated Download</p>
                <h3 className="font-display text-xl text-paper">{resources.trendsReport.title}</h3>
                <p className="mt-3 flex-1 text-sm text-paper-dim">{resources.trendsReport.description}</p>
                <CtaButton href="/contact" variant="outline" className="mt-6 self-start">
                  Request Access
                </CtaButton>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.06}>
              <div id={resources.designRates.slug} className="scroll-mt-28 flex h-full flex-col rounded-2xl border border-line/70 bg-panel/50 p-8">
                <p className="eyebrow mb-3">Gated Download</p>
                <h3 className="font-display text-xl text-paper">{resources.designRates.title}</h3>
                <p className="mt-3 flex-1 text-sm text-paper-dim">{resources.designRates.description}</p>
                <CtaButton href="/contact" variant="outline" className="mt-6 self-start">
                  Request Access
                </CtaButton>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Tutorials */}
      <section id={resources.tutorials.slug} className="scroll-mt-28 border-b border-line/60 py-24 md:py-32">
        <div className="mx-auto max-w-4xl px-6 md:px-10">
          <SectionReveal>
            <p className="eyebrow mb-3 text-center">{resources.tutorials.title}</p>
            <p className="mb-10 text-center text-sm text-paper-dim">{resources.tutorials.note}</p>
          </SectionReveal>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {resources.tutorials.items.map((item, i) => (
              <SectionReveal key={item} delay={i * 0.05}>
                <div className="rounded-xl border border-line/70 bg-panel/40 p-5 text-sm text-paper-dim">
                  {item}
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <FAQSection items={resources.faq} />
    </>
  );
}
