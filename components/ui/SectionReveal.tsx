"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { fadeUp, easeOut } from "@/lib/motion";

export default function SectionReveal({
  children,
  className = "",
  delay = 0,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "span";
}) {
  const Comp = motion[as];
  return (
    <Comp
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, ease: easeOut, delay }}
      className={className}
    >
      {children}
    </Comp>
  );
}
