import type { Metadata } from "next";
import SectionReveal from "@/components/ui/SectionReveal";
import BlogCard from "@/components/blog/BlogCard";
import { blogPosts, siteMeta } from "@/lib/content";

export const metadata: Metadata = {
  title: "Blog",
  description: `Guides and playbooks on AI-accelerated fashion design from ${siteMeta.name}.`,
  alternates: { canonical: "/resources/blog" },
};

export default function BlogIndexPage() {
  return (
    <section className="pt-40 pb-24 md:pt-48 md:pb-32">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <SectionReveal>
          <p className="eyebrow mb-4 text-center">Blog</p>
          <h1 className="h-display-xl accent-gradient-text text-balance text-center">
            Guides for accelerating fashion design
          </h1>
        </SectionReveal>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {blogPosts.map((post, i) => (
            <BlogCard key={post.slug} post={post} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
