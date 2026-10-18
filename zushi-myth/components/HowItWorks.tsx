"use client";
import { useEffect, useRef } from "react";
import Reveal from "./Reveal";
import { track } from "@/lib/track";
type Step = { n: number; owner: "MYTH" | "ZUSHI" | "HANDOFF"; title: string; text: string; sub: string; soon?: boolean };
const steps: Step[] = [
  { n: 1, owner: "MYTH", title: "Design the collection", text: "Text or image to design, Collection Lab.", sub: "MYTH" },
  { n: 2, owner: "MYTH", title: "Digital sample & visuals", text: "AI product photos, models, video. No physical sample.", sub: "MYTH Studio" },
  { n: 3, owner: "MYTH", title: "Factory-ready files", text: "Tech pack, BOM, vector/TIFF, colour separation.", sub: "MYTH PLM" },
  { n: 4, owner: "HANDOFF", title: "Send to ZUSHI", text: "The tech pack becomes an RFQ.", sub: "Handoff", soon: true },
  { n: 5, owner: "ZUSHI", title: "Match verified factories", text: "Fit on product, MOQ, price, timeline.", sub: "ZUSHI AI" },
  { n: 6, owner: "ZUSHI", title: "Quote, book slot, order", text: "Compare, negotiate, lock a production window.", sub: "ZUSHI" },
  { n: 7, owner: "ZUSHI", title: "Track production & QC", text: "Stage tracking, delay alerts, AI quality check.", sub: "ZUSHI" },
  { n: 8, owner: "ZUSHI", title: "Ship & release payment", text: "Shipment tracking, escrow by milestone.", sub: "ZUSHI" },
];
const color = { MYTH: "border-myth text-myth bg-myth/5", ZUSHI: "border-zushi text-zushi bg-zushi/5", HANDOFF: "border-ink text-ink bg-ink/5" };
export default function HowItWorks() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current; if (!el) return; let fired = false;
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting && !fired) { fired = true; track("how_it_works_view"); } }, { threshold: 0.5 });
    io.observe(el); return () => io.disconnect();
  }, []);
  return (
    <section id="how-it-works" className="py-24 bg-paper">
      <div className="mx-auto max-w-7xl px-5" ref={ref}>
        <Reveal><p className="text-xs font-bold tracking-widest text-neutral-500">HOW IT WORKS</p>
          <h2 className="mt-3 max-w-3xl text-4xl md:text-5xl font-black tracking-tight">One line from sketch to shipment.</h2>
          <p className="mt-4 max-w-2xl text-neutral-600">The brand designs in MYTH, sends a factory-ready file to ZUSHI, and follows the order to delivery. No re-keying, and fewer physical sample rounds before the order.</p></Reveal>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={(i % 4) * 0.08}>
              <div className={`relative h-full rounded-2xl border-2 p-6 ${color[s.owner]} ${s.owner === "HANDOFF" ? "border-dashed" : ""}`}>
                <div className="flex items-center justify-between"><span className="text-4xl font-black opacity-30">{s.n}</span>
                  <span className="rounded-full border px-2 py-0.5 text-[10px] font-bold tracking-widest">{s.owner === "HANDOFF" ? "MYTH → ZUSHI" : s.owner}</span></div>
                <h3 className="mt-4 text-lg font-bold text-ink">{s.title}</h3>
                <p className="mt-2 text-sm text-neutral-600">{s.text}</p>
                <p className="mt-4 text-xs font-semibold">{s.sub}{s.soon && <span className="ml-2 rounded bg-ink px-1.5 py-0.5 text-white">Coming soon</span>}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal><p className="mt-10 text-center text-sm text-neutral-500">Vision: supplier, cost and delivery data flowing back into the next collection.</p></Reveal>
      </div>
    </section>
  );
}
