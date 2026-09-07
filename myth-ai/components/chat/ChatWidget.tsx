"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import Logomark from "@/components/ui/Logomark";
import { contact, daas, aaaas, contactPage } from "@/lib/content";

type TopicKey = "daas" | "aaaas" | "pricing" | "contact";

const topics: Record<
  TopicKey,
  { label: string; body: string; ctaLabel: string; ctaHref: string }
> = {
  daas: {
    label: "Managed Design (DaaS)",
    body: daas.hero.sub,
    ctaLabel: "Explore DaaS",
    ctaHref: "/services/daas",
  },
  aaaas: {
    label: "Autonomous Scale (AAaaS)",
    body: aaaas.hero.sub,
    ctaLabel: "Explore AAaaS",
    ctaHref: "/services/aaaas",
  },
  pricing: {
    label: "Pricing",
    body: `Starter ${daas.packages[0].price} · Growth ${daas.packages[1].price} · Scale ${daas.packages[2].price} — full plan comparison and self-serve tools on our pricing page.`,
    ctaLabel: "View Pricing",
    ctaHref: "/pricing",
  },
  contact: {
    label: "Talk to Our Team",
    body: contactPage.hero.sub,
    ctaLabel: "Open Contact Form",
    ctaHref: "/contact",
  },
};

const menuOrder: TopicKey[] = ["daas", "aaaas", "pricing", "contact"];

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [topic, setTopic] = useState<TopicKey | null>(null);

  const closeAndReset = () => {
    setOpen(false);
    setTopic(null);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="flex w-[21rem] max-w-[calc(100vw-3rem)] flex-col overflow-hidden rounded-2xl border border-line bg-panel shadow-[0_24px_70px_rgba(30,25,17,0.22)]"
          >
            {/* Header */}
            <div className="flex items-center justify-between gap-3 border-b border-line/70 bg-ink-soft/60 px-5 py-4">
              <div className="flex items-center gap-3">
                <Logomark size={30} />
                <div>
                  <p className="text-sm font-medium text-paper">Myth AI</p>
                  <p className="text-xs text-paper-dim">Guided assistant</p>
                </div>
              </div>
              <button
                onClick={closeAndReset}
                aria-label="Close chat"
                className="flex h-7 w-7 items-center justify-center rounded-full text-paper-dim transition-colors hover:bg-ink-soft hover:text-paper"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            {/* Body */}
            <div className="max-h-[24rem] overflow-y-auto px-5 py-5">
              {!topic ? (
                <div className="space-y-4">
                  <div className="rounded-2xl bg-ink-soft px-4 py-3 text-sm text-paper-dim">
                    Hi — what can I help you accelerate today?
                  </div>
                  <div className="flex flex-col gap-2">
                    {menuOrder.map((key) => (
                      <button
                        key={key}
                        onClick={() => setTopic(key)}
                        className="rounded-full border border-line px-4 py-2.5 text-left text-sm text-paper transition-colors hover:border-accent hover:text-accent-bright"
                      >
                        {topics[key].label}
                      </button>
                    ))}
                    <a
                      href={contact.whatsappHref}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full border border-accent/40 bg-accent/10 px-4 py-2.5 text-left text-sm text-accent-bright transition-colors hover:bg-accent/20"
                    >
                      WhatsApp us directly →
                    </a>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="rounded-2xl bg-ink-soft px-4 py-3 text-sm text-paper-dim">
                    {topics[topic].body}
                  </div>
                  <Link
                    href={topics[topic].ctaHref}
                    onClick={closeAndReset}
                    className="inline-flex w-full items-center justify-center rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-panel transition-colors hover:bg-accent-bright"
                  >
                    {topics[topic].ctaLabel}
                  </Link>
                  <button
                    onClick={() => setTopic(null)}
                    className="text-xs uppercase tracking-wide text-paper-dim transition-colors hover:text-paper"
                  >
                    ← Back to menu
                  </button>
                </div>
              )}
            </div>

            <div className="border-t border-line/70 px-5 py-3 text-center text-[0.7rem] text-paper-dim/70">
              Guided assistant · Our team replies to briefs within hours
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close chat" : "Open chat"}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-accent text-panel shadow-[0_10px_40px_rgba(169,129,47,0.4)] transition-all duration-300 hover:bg-accent-bright hover:shadow-[0_10px_50px_rgba(169,129,47,0.55)]"
      >
        {open ? (
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2}>
            <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
            <path d="M12 2C6.48 2 2 5.94 2 10.8c0 2.6 1.28 4.93 3.3 6.53-.11.99-.44 2.36-1.3 3.67 1.65-.2 3.19-.86 4.4-1.72 1.1.36 2.3.56 3.6.56 5.52 0 10-3.94 10-8.8S17.52 2 12 2Z" />
          </svg>
        )}
      </motion.button>
    </div>
  );
}
