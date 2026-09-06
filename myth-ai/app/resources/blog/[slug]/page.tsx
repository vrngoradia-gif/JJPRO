import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SectionReveal from "@/components/ui/SectionReveal";
import CtaButton from "@/components/ui/CtaButton";
import PostBody from "@/components/blog/PostBody";
import BlogCard from "@/components/blog/BlogCard";
import { blogPosts } from "@/lib/content";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

function getPost(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/resources/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      url: `/resources/blog/${post.slug}`,
      publishedTime: post.publishedAt,
      tags: post.tags,
    },
  };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <>
      <article className="mx-auto max-w-3xl px-6 pb-24 pt-40 md:px-10 md:pb-32 md:pt-48">
        <SectionReveal>
          <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-paper-dim">
            <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
            {post.tags.map((tag) => (
              <span key={tag} className="rounded-full border border-line/70 px-2.5 py-1 text-accent-bright">
                {tag}
              </span>
            ))}
          </div>
          <h1 className="h-display-lg text-balance mt-6 text-center text-paper">{post.title}</h1>
          <p className="mx-auto mt-6 max-w-2xl text-center text-base leading-relaxed text-paper-dim">
            {post.description}
          </p>
        </SectionReveal>

        <SectionReveal delay={0.1} className="mt-16">
          <PostBody blocks={post.blocks} />
        </SectionReveal>
      </article>

      {related.length > 0 && (
        <section className="border-t border-line/60 bg-ink-soft">
          <div className="mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-32">
            <SectionReveal>
              <p className="eyebrow mb-10 text-center">Keep Reading</p>
              <div className="grid gap-6 md:grid-cols-2">
                {related.map((p, i) => (
                  <BlogCard key={p.slug} post={p} index={i} />
                ))}
              </div>
            </SectionReveal>
          </div>
        </section>
      )}

      <section className="border-t border-line/60">
        <div className="mx-auto max-w-3xl px-6 py-24 text-center md:px-10 md:py-32">
          <SectionReveal>
            <h2 className="h-display-lg text-balance text-paper">Ready to accelerate your pipeline?</h2>
            <div className="mt-8">
              <CtaButton href="/contact" variant="solid">
                Book a Call
              </CtaButton>
            </div>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
