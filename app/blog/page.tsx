import type { Metadata } from "next";
import SectionReveal from "@/components/ui/SectionReveal";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import BlogCard from "@/components/blog/BlogCard";
import JsonLd from "@/components/seo/JsonLd";
import { blogCollectionSchema } from "@/lib/schema";
import { blogPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog — Fundraising, GTM & Brand Strategy Insights",
  description:
    "Practical insights on startup fundraising, cross-border GTM and brand positioning from JJ PRO, written for founders preparing to raise or scale.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "JJ PRO Blog — Fundraising, GTM & Brand Strategy Insights",
    description:
      "Practical insights on startup fundraising, cross-border GTM and brand positioning from JJ PRO, written for founders preparing to raise or scale.",
    url: "/blog",
  },
};

export default function BlogIndexPage() {
  return (
    <>
      <JsonLd data={blogCollectionSchema(blogPosts)} />
      <Breadcrumbs items={[{ name: "Blog", href: "/blog" }]} />

      <section className="px-6 pb-16 pt-10 text-center md:px-10 md:pt-12">
        <SectionReveal>
          <p className="eyebrow">Insights</p>
          <h1 className="h-display-xl text-balance mx-auto mt-6 max-w-4xl text-paper">
            Fundraising, GTM & brand strategy — from the field.
          </h1>
          <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-paper-dim">
            Practical, no-fluff writing on the decisions founders actually
            face — raising capital, entering new markets and getting brand
            positioning right.
          </p>
        </SectionReveal>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24 md:px-10 md:pb-32">
        <div className="grid gap-6 md:grid-cols-2">
          {blogPosts.map((post, i) => (
            <BlogCard key={post.slug} post={post} index={i} />
          ))}
        </div>
      </section>
    </>
  );
}
