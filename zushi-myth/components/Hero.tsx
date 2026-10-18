"use client";
import { motion } from "framer-motion";
import { track } from "@/lib/track";
export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden pt-32 pb-24 grid-bg">
      <div className="pointer-events-none absolute -top-40 -left-32 h-[480px] w-[480px] rounded-full bg-myth/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -right-32 h-[480px] w-[480px] rounded-full bg-zushi/20 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-5 grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-5 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-1 text-xs font-semibold tracking-widest text-neutral-600">
            <span className="h-2 w-2 rounded-full bg-myth" /> MYTH AI <span className="text-neutral-400">×</span> <span className="h-2 w-2 rounded-full bg-zushi" /> ZUSHI
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-5xl md:text-6xl xl:text-7xl font-black leading-[1.02] tracking-tight">
            Design it digitally. <span className="grad-text">Get it made</span> by a verified factory.
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="mt-6 max-w-xl text-lg text-neutral-600">
            MYTH creates the product, sample and visuals without a physical sample. ZUSHI matches it to a verified manufacturer and tracks production, quality and shipment until it lands.
          </motion.p>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.45 }} className="mt-9 flex flex-wrap gap-3">
            <a href="#contact" onClick={() => track("cta_demo_click", { location: "hero" })} className="rounded-full bg-ink px-6 py-3 font-semibold text-white hover:bg-neutral-800">Book a joint demo</a>
            <a href="#how-it-works" className="rounded-full border border-black/15 bg-white px-6 py-3 font-semibold hover:border-black/40">See how it works</a>
          </motion.div>
          <p className="mt-6 text-sm text-neutral-500">Designers still decide. The platforms remove the waiting.</p>
        </div>
        <div className="relative">
          <div className="grid grid-cols-2 gap-4">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3, duration: 0.7 }} className="floaty rounded-3xl border border-myth/30 bg-white p-4 shadow-xl">
              <p className="text-[10px] font-bold tracking-widest text-myth">MYTH STUDIO</p>
              <div className="mt-3 aspect-[3/4] rounded-2xl bg-gradient-to-br from-myth/20 via-white to-myth-light/40 relative overflow-hidden">
                <svg viewBox="0 0 120 160" className="absolute inset-0 m-auto h-4/5">
                  <path d="M40 20 L20 40 L30 60 L40 55 L40 140 L80 140 L80 55 L90 60 L100 40 L80 20 Q60 40 40 20Z" fill="#4F5EFF" opacity=".85" />
                  <path d="M45 70 h30 M45 85 h30 M45 100 h30" stroke="#fff" strokeWidth="2" opacity=".6" />
                </svg>
                <span className="absolute bottom-2 left-2 rounded bg-white/90 px-2 py-0.5 text-[10px] font-semibold">Digital sample</span>
              </div>
              <p className="mt-3 text-xs text-neutral-500">Polo render, ready for production files</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.45, duration: 0.7 }} className="floaty rounded-3xl border border-zushi/30 bg-white p-4 shadow-xl" style={{ animationDelay: "1.2s" }}>
              <p className="text-[10px] font-bold tracking-widest text-zushi">ZUSHI ORDER TRACKING</p>
              <ul className="mt-3 space-y-3 text-xs">
                {[["RFQ sent", 100], ["Factory matched", 100], ["Production", 62], ["Quality check", 20], ["Shipment", 0]].map(([l, p]) => (
                  <li key={l as string}>
                    <div className="flex justify-between font-medium"><span>{l}</span><span className="text-neutral-400">{p}%</span></div>
                    <div className="mt-1 h-2 rounded-full bg-neutral-100"><motion.div initial={{ width: 0 }} animate={{ width: `${p}%` }} transition={{ delay: 0.9, duration: 1.1 }} className="h-2 rounded-full bg-zushi" /></div>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs text-neutral-500">Illustrative screen</p>
            </motion.div>
          </div>
          <svg className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-8" viewBox="0 0 96 32"><path d="M0 16 H96" stroke="#0c0c10" strokeWidth="2" className="dashflow" /></svg>
        </div>
      </div>
    </section>
  );
}
