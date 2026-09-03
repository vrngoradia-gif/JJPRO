"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type Testimonial = { quote: string; name: string; role: string };

export default function TestimonialCarousel({ items }: { items: Testimonial[] }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % items.length);
    }, 6000);
    return () => clearInterval(id);
  }, [items.length]);

  const current = items[index];

  return (
    <div className="relative mx-auto max-w-3xl text-center">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="h-display-md text-balance text-paper">
            &ldquo;{current.quote}&rdquo;
          </p>
          <p className="mt-6 text-sm text-gold">{current.name}</p>
          <p className="text-xs text-paper-dim">{current.role}</p>
        </motion.div>
      </AnimatePresence>

      <div className="mt-10 flex justify-center gap-2">
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Show testimonial ${i + 1}`}
            className={`h-1.5 rounded-full transition-all ${
              i === index ? "w-6 bg-gold" : "w-1.5 bg-line"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
