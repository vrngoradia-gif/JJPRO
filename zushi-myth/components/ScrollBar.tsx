"use client";
import { motion, useScroll, useSpring } from "framer-motion";
export default function ScrollBar() {
  const { scrollYProgress } = useScroll();
  const x = useSpring(scrollYProgress, { stiffness: 120, damping: 24 });
  return <motion.div style={{ scaleX: x }} className="fixed inset-x-0 top-0 z-[70] h-[2px] origin-left bg-gold" />;
}
