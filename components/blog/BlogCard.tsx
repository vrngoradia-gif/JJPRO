"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { BlogPost } from "@/lib/blog";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogCard({
  post,
  index = 0,
}: {
  post: BlogPost;
  index?: number;
}) {
  return (
    <Link href={`/blog/${post.slug}`} data-cursor-hover className="block h-full">
      <motion.article
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.7, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
        whileHover={{ y: -6 }}
        className="group h-full rounded-2xl border border-line/70 bg-panel/50 p-8 transition-colors hover:border-gold/40"
      >
        <div className="flex flex-wrap items-center gap-3 text-xs text-paper-dim">
          <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
          <span className="text-line">·</span>
          <span>{post.readingTime}</span>
        </div>
        <h3 className="mt-4 font-display text-xl text-paper">{post.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-paper-dim">{post.excerpt}</p>
        <div className="mt-6 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-line/60 px-3 py-1 text-[11px] text-paper-dim"
            >
              {tag}
            </span>
          ))}
        </div>
        <span className="mt-6 inline-flex items-center gap-2 text-sm text-gold opacity-0 transition-opacity group-hover:opacity-100">
          Read the article →
        </span>
      </motion.article>
    </Link>
  );
}
