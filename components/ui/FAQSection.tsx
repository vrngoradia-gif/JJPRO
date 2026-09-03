"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import JsonLd from "@/components/seo/JsonLd";
import { faqSchema, type FaqItem } from "@/lib/schema";

/**
 * Question-phrased accordion with 40-60 word direct-answer paragraphs —
 * built for featured-snippet / AEO eligibility. Emits matching FAQPage
 * JSON-LD alongside the visible markup.
 */
export default function FAQSection({
  heading = "Frequently Asked Questions",
  items,
}: {
  heading?: string;
  items: FaqItem[];
}) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="mx-auto max-w-3xl px-6 py-24 md:px-10 md:py-32">
      <JsonLd data={faqSchema(items)} />
      <h2 className="h-display-lg text-balance text-center text-paper">{heading}</h2>
      <dl className="mt-12 divide-y divide-line/60 border-y border-line/60">
        {items.map((item, i) => {
          const isOpen = open === i;
          return (
            <div key={item.question}>
              <dt>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 py-6 text-left"
                >
                  <span className="font-display text-lg text-paper">
                    {item.question}
                  </span>
                  <span
                    className={`shrink-0 text-xl text-gold transition-transform ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>
              </dt>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.dd
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="pb-6 text-sm leading-relaxed text-paper-dim">
                      {item.answer}
                    </p>
                  </motion.dd>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </dl>
    </section>
  );
}
