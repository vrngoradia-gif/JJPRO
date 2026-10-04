"use client";

import Link from "next/link";
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";

export default function ServiceCard({ title, description, href, index = 0 }: { title: string; description: string; href?: string; index?: number }) {
  const reduce = useReducedMotion();
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-6, 6]), { stiffness: 200, damping: 20 });
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [6, -6]), { stiffness: 200, damping: 20 });
  const onMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (reduce || e.pointerType !== "mouse") return;
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onLeave = () => { mx.set(0); my.set(0); };
  const content = (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      style={reduce ? undefined : { rotateX, rotateY, transformPerspective: 900 }}
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
