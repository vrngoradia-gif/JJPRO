import Link from "next/link";
import SectionReveal from "@/components/ui/SectionReveal";
import type { BlogPost } from "@/lib/content";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogCard({ post, index = 0 }: { post: BlogPost; index?: number }) {
  return (
    <SectionReveal delay={index * 0.06}>
      <Link
        href={`/resources/blog/${post.slug}`}
        className="group flex h-full flex-col justify-between rounded-2xl border border-line/70 bg-panel/50 p-7 transition-all duration-300 hover:border-accent/60 hover:bg-panel"
      >
        <div>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-line/70 px-2.5 py-1 text-xs text-accent-bright"
              >
                {tag}
              </span>
            ))}
          </div>
          <h3 className="mt-4 text-lg font-medium text-paper">{post.title}</h3>
          <p className="mt-2 text-sm text-paper-dim">{post.description}</p>
        </div>
        <div className="mt-6 flex items-center justify-between">
          <time dateTime={post.publishedAt} className="text-xs text-paper-dim/70">
            {formatDate(post.publishedAt)}
          </time>
          <span className="text-xs uppercase tracking-wide text-accent-bright opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            Read →
          </span>
        </div>
      </Link>
    </SectionReveal>
  );
}
