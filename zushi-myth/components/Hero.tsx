"use client";
import { motion } from "framer-motion";
import { track } from "@/lib/track";
import { WaButton } from "./WhatsAppFab";
import HeroGarment from "./HeroGarment";
export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden pt-28 pb-24 sm:pt-32 lg:pt-24">
      <div className="relative mx-auto max-w-7xl px-5 grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-5 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-1 text-xs font-semibold tracking-widest text-neutral-600">
            <span className="h-2 w-2 rounded-full bg-myth" /> MYTH AI <span className="text-neutral-400">×</span> <span className="h-2 w-2 rounded-full bg-zushi" /> ZUSHI
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-[2.6rem] leading-[1.04] sm:text-6xl xl:text-7xl ">
            Design it digitally. <em className="gold-em">Get it made</em> by a verified factory.
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="mt-6 max-w-xl text-lg text-neutral-600">
            MYTH creates the product, sample and visuals without a physical sample. ZUSHI matches it to a verified manufacturer and tracks production, quality and shipment until it lands.
          </motion.p>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.45 }} className="mt-9 flex flex-wrap gap-3">
            <a href="#contact" onClick={() => track("cta_demo_click", { location: "hero" })} className="rounded-full bg-ink px-6 py-3 font-semibold text-white hover:bg-neutral-800">Book a joint demo</a>
            <WaButton location="hero" label="WhatsApp us" />
            <a href="#how-it-works" className="px-3 py-3 font-semibold underline underline-offset-4 decoration-black/30 hover:decoration-ink">See how it works</a>
          </motion.div>
          <dl className="mt-10 grid max-w-xl grid-cols-3 gap-4 border-t border-black/15 pt-5">
            {[["150+", "brands onboarded on MYTH AI"], ["200+", "clothing categories on ZUSHI"], ["20+", "factories onboarded, pre-launch"]].map(([n, l]) => (
              <div key={n}><dt className="font-serif text-3xl">{n}</dt><dd className="mt-1 text-xs text-neutral-600">{l}</dd></div>
            ))}
          </dl>
          <p className="mt-5 text-sm text-neutral-500">Designers still decide. The platforms remove the waiting.</p>
        </div>
        <HeroGarment />
      </div>
    </section>
  );
}
