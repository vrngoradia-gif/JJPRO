"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function ServiceCard({
  title,
  description,
  href,
  index = 0,
}: {
  title: string;
  description: string;
  href?: string;
  index?: number;
}) {
  const content = (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -6 }}
      className="group relative h-full rounded-2xl border border-line/70 bg-panel/50 p-8 transition-colors hover:border-gold/40"
    >
      <span className="eyebrow">0{index + 1}</span>
      <h3 className="mt-5 font-display text-2xl text-paper">{title}</h3>
      <p className="mt-4 text-sm leading-relaxed text-paper-dim">{description}</p>
      {href && (
        <span className="mt-6 inline-flex items-center gap-2 text-sm text-gold opacity-0 transition-opacity group-hover:opacity-100">
          Learn more →
        </span>
      )}
    </motion.div>
  );

  if (!href) return content;

  return (
    <Link href={href} data-cursor-hover className="block h-full">
      {content}
    </Link>
  );
}
