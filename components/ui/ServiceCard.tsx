"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function ServiceCard({ title, description, href, index = 0 }: { title: string; description: string; href?: string; index?: number }) {
  const content = (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
      className="group h-full border border-line bg-panel/40 p-8 transition-colors hover:bg-panel"
    >
      <h3 className="font-display text-2xl font-bold leading-tight text-paper">{title}</h3>
      <span className="rule-bar mt-6" />
      <p className="mt-6 text-sm leading-relaxed text-paper-dim">{description}</p>
      {href && <span className="mt-6 inline-flex text-sm font-medium text-gold-bright">Learn more →</span>}
    </motion.div>
  );
  if (!href) return content;
  return <Link href={href} data-cursor-hover className="block h-full">{content}</Link>;
}
