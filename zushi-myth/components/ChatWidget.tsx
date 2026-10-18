"use client";
import { useEffect, useRef, useState } from "react";
import { waLink } from "@/lib/wa";
import { track } from "@/lib/track";
type Cta = { label: string; href: string };
type Item = { label: string; answer: string; cta?: Cta };
const menu: Item[] = [
  { label: "What is MYTH AI x ZUSHI?", answer: "MYTH AI creates the fashion product digitally: design, digital samples and visuals. ZUSHI matches it to a verified factory and tracks production, quality and shipment. One line from sketch to shipment.", cta: { label: "See how it works", href: "/#how-it-works" } },
  { label: "Do you do design as a service?", answer: "Yes. MYTH can create collections, patterns and colourways for you, then hand the tech pack to ZUSHI for sourcing and production.", cta: { label: "Talk to us", href: "/#contact" } },
  { label: "Can you source fabric and trims?", answer: "Yes. Fabric and trims are specified in the tech pack and sourced through ZUSHI's factory network. Pricing is quoted per order.", cta: { label: "Request a quote", href: "/#contact" } },
  { label: "Who is this for?", answer: "Brands and retailers, manufacturers and export houses, and buying houses or agents. Each gets a different view of the same flow.", cta: { label: "See who it's for", href: "/#for-you" } },
  { label: "Read the blog", answer: "We publish practical guides on sourcing, sampling, MOQs, QC and shipping for apparel.", cta: { label: "Open the blog", href: "/blog" } },
];
export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [msgs, setMsgs] = useState<{ from: "bot" | "user"; text: string; cta?: Cta }[]>([
    { from: "bot", text: "Hi! I can answer quick questions about MYTH AI x ZUSHI. Pick one below, or chat with us on WhatsApp." },
  ]);
  const end = useRef<HTMLDivElement>(null);
  useEffect(() => { end.current?.scrollIntoView({ block: "end" }); }, [msgs, open]);
  function pick(i: Item) {
    track("chatbot_question", { q: i.label });
    setMsgs((m) => [...m, { from: "user", text: i.label }, { from: "bot", text: i.answer, cta: i.cta }]);
  }
  return (
    <>
      {open && (
        <div role="dialog" aria-label="MYTH x ZUSHI assistant" className="fixed right-3 sm:right-5 bottom-[116px] sm:bottom-[150px] z-[60] flex w-[340px] max-w-[calc(100vw-40px)] flex-col overflow-hidden rounded-3xl border border-black/10 bg-white shadow-2xl" style={{ maxHeight: "min(540px, calc(100vh - 180px))" }}>
          <div className="flex items-center justify-between bg-ink px-4 py-3 text-white">
            <div><p className="text-sm font-bold">MYTH × ZUSHI assistant</p><p className="text-xs text-white/60">Quick answers, no signup</p></div>
            <button onClick={() => setOpen(false)} aria-label="Close" className="text-2xl leading-none text-white/70 hover:text-white">×</button>
          </div>
          <div className="flex-1 space-y-2 overflow-y-auto p-4 text-sm">
            {msgs.map((m, i) => (
              <div key={i} className={`flex flex-col ${m.from === "bot" ? "items-start" : "items-end"}`}>
                <div className={`max-w-[88%] whitespace-pre-wrap rounded-2xl px-3.5 py-2.5 ${m.from === "bot" ? "bg-neutral-100" : "bg-myth text-white"}`}>{m.text}</div>
                {m.cta && <a href={m.cta.href} onClick={() => setOpen(false)} className="mt-1.5 rounded-full bg-ink px-3.5 py-1.5 text-xs font-semibold text-white">{m.cta.label}</a>}
              </div>
            ))}
            <div className="flex flex-wrap gap-2 pt-1">
              {menu.map((i) => <button key={i.label} onClick={() => pick(i)} className="rounded-full border border-black/15 px-3 py-1.5 text-xs hover:border-black/50">{i.label}</button>)}
            </div>
            <div ref={end} />
          </div>
          <div className="border-t border-black/10 p-3">
            <a href={waLink()} target="_blank" rel="noopener noreferrer" onClick={() => track("whatsapp_click", { location: "chatbot" })} className="block rounded-full bg-[#25D366] px-4 py-2 text-center text-sm font-semibold text-white">Continue on WhatsApp</a>
          </div>
        </div>
      )}
      <button onClick={() => { setOpen(!open); track("chatbot_toggle", { open: String(!open) }); }} aria-label="Open assistant"
        className="fixed right-3 bottom-3 sm:right-5 sm:bottom-5 z-[60] flex h-[44px] w-[44px] sm:h-[54px] sm:w-[54px] items-center justify-center rounded-full bg-ink text-white shadow-2xl transition-transform hover:scale-105">
        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12Z" /></svg>
      </button>
    </>
  );
}
