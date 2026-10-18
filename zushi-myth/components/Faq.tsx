"use client";
import { useState } from "react";
import Reveal from "./Reveal";
import { faqs } from "@/lib/faq";
export default function Faq() {
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" className="py-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }) }} />
      <div className="mx-auto max-w-3xl px-5">
        <Reveal><p className="text-xs font-bold tracking-widest text-neutral-500">FAQ</p>
          <h2 className="mt-3 text-4xl md:text-5xl font-black tracking-tight">Questions, answered.</h2></Reveal>
        <div className="mt-10 divide-y divide-black/10 border-y border-black/10">
          {faqs.map((f, i) => (
            <div key={f.q}>
              <button onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i} className="flex w-full items-center justify-between py-5 text-left text-lg font-semibold">
                {f.q}<span className="ml-4 text-2xl">{open === i ? "−" : "+"}</span>
              </button>
              {open === i && <p className="pb-5 text-neutral-600">{f.a}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
