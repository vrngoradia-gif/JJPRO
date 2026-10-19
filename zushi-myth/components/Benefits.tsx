"use client";
import { useState } from "react";
import Reveal from "./Reveal";
import { track } from "@/lib/track";
export const tabs = {
  "Brands & Retailers": ["Fewer physical sample rounds before you approve a design", "A factory-ready tech pack, not a mood board", "Choose factories on capacity, certifications and track record", "See every order stage without chasing anyone"],
  Manufacturers: ["Complete tech packs and production files up front", "Matched to global buyers whose orders fit your lines", "Manage RFQs, orders and updates from the ZUSHI factory app", "Use MYTH to show buyers new styles before you sample"],
  "Buying Houses": ["Several clients' collections and orders in one place", "Show clients realistic visuals before any sampling", "Compare factories side by side on price, MOQ and lead time", "One record per order, from quote to shipment"],
} as const;
export default function Benefits() {
  const keys = Object.keys(tabs) as (keyof typeof tabs)[];
  const [tab, setTab] = useState<keyof typeof tabs>(keys[0]);
  const pick = (k: keyof typeof tabs) => {
    setTab(k); track("audience_tab", { tab: k });
    window.dispatchEvent(new CustomEvent("audience-tab", { detail: k }));
  };
  return (
    <section id="for-you" className="py-24 bg-paper">
      <div className="mx-auto max-w-5xl px-5">
        <Reveal><p className="text-xs font-bold tracking-widest text-neutral-500">FOR YOU</p>
          <h2 className="mt-3 text-4xl md:text-5xl font-black tracking-tight">What you get.</h2></Reveal>
        <div role="tablist" className="mt-8 flex w-full rounded-full bg-white p-1 shadow sm:inline-flex sm:w-auto">
          {keys.map((k) => <button key={k} role="tab" aria-selected={tab === k} onClick={() => pick(k)} className={`flex-1 whitespace-nowrap rounded-full px-2 py-2 text-center text-[13px] font-semibold transition sm:flex-none sm:px-5 sm:text-sm ${tab === k ? "bg-ink text-white" : "text-neutral-600 hover:text-ink"}`}>{k}</button>)}
        </div>
        <ul className="mt-8 grid gap-4 md:grid-cols-2">
          {tabs[tab].map((b) => <li key={b} className="rounded-2xl bg-white p-6 shadow-sm"><p className="text-xs font-bold tracking-widest text-neutral-400">YOU GET</p><p className="mt-2 text-lg font-semibold">{b}</p></li>)}
        </ul>
        <a href="#contact" onClick={() => track("cta_demo_click", { location: "benefits" })} className="mt-8 inline-block rounded-full bg-ink px-6 py-3 font-semibold text-white">Book a joint demo</a>
      </div>
    </section>
  );
}
