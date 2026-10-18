import Reveal from "./Reveal";
const groups = [
  ["Product creation", ["Istanbul", "London", "Mumbai"]],
  ["Manufacturing base", ["India", "Next: Bangladesh", "Next: Vietnam"]],
  ["Buyer markets", ["UAE", "UK", "Spain", "Germany", "Brazil", "Panama"]],
] as const;
export default function Reach() {
  return (
    <section id="reach" className="py-24 bg-ink text-white">
      <div className="mx-auto max-w-7xl px-5">
        <Reveal><p className="text-xs font-bold tracking-widest text-white/50">WHERE IT RUNS</p>
          <h2 className="mt-3 text-4xl md:text-5xl font-black tracking-tight">Designed in one place. Made in another. Sold everywhere.</h2></Reveal>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {groups.map(([t, chips], i) => (
            <Reveal key={t} delay={i * 0.1}>
              <p className="text-sm font-bold tracking-widest text-white/60">{t.toUpperCase()}</p>
              <div className="mt-4 flex flex-wrap gap-2">{chips.map((c) => <span key={c} className={`rounded-full border px-4 py-2 text-sm ${c.startsWith("Next") ? "border-white/20 text-white/50" : "border-white/40"}`}>{c}</span>)}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
