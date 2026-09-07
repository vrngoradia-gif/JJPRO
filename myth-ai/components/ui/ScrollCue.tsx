"use client";

import { motion } from "framer-motion";

export default function ScrollCue() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.8 }}
      className="relative mx-auto mt-16 flex justify-center"
      aria-hidden
    >
      <motion.span
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        className="flex h-9 w-6 items-start justify-center rounded-full border border-line pt-1.5"
      >
        <span className="h-1.5 w-1 rounded-full bg-accent" />
      </motion.span>
    </motion.div>
  );
}
