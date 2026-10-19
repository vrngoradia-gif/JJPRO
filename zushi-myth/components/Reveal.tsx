"use client";
import { motion } from "framer-motion";
export default function Reveal({ children, delay = 0, className = "", parallax = false }: { children: React.ReactNode; delay?: number; className?: string; parallax?: boolean }) {
  return (
    <motion.div data-parallax={parallax ? "" : undefined} className={className} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.6, delay, ease: "easeOut" }}>
      {children}
    </motion.div>
  );
}
