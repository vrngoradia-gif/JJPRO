import Reveal from "./Reveal";
const rows = [
  ["Samples", "Physical samples shipped back and forth", "Digital sample reviewed before anything is cut"],
  ["Finding a factory", "Introductions and email chains", "Matched to verified factories, quotes side by side"],
  ["During production", "Chasing updates", "Stage tracking and delay alerts"],
  ["Shipping", "Documents in separate threads", "Tracking and documents in one place"],
];
export default function Compare() {
  return (
    <section className="bg-ink py-24 text-ink">
      <div className="mx-auto max-w-5xl px-5">
        <Reveal><p className="text-xs font-bold tracking-widest text-neutral-500">BEFORE AND AFTER</p><h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">The old way vs one connected line.</h2></Reveal>
        <div className="mt-12 overflow-hidden rounded-3xl border border-black/15">
          <div className="grid grid-cols-[1fr_1.4fr_1.4fr] bg-white px-4 py-3 text-xs font-bold tracking-widest sm:px-6"><span /><span className="text-neutral-500">TODAY</span><em className="gold-em">MYTH × ZUSHI</em></div>
          {rows.map(([a, b, c], i) => (
            <Reveal key={a} delay={i * 0.08}><div className="grid grid-cols-[1fr_1.4fr_1.4fr] gap-3 border-t border-black/15 px-4 py-5 text-sm sm:px-6 sm:text-base"><span className="font-bold">{a}</span><span className="text-neutral-500">{b}</span><span>{c}</span></div></Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
