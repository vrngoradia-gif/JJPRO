import Reveal from "./Reveal";
const cards = [
  { name: "MYTH AI", color: "myth", line: "The AI-native operating system for fashion product creation.", items: ["MYTH PLM: tech packs, BOM, materials, trims, sampling", "MYTH Studio: AI product photos, models, video", "MYTH DIGI: searchable design archive", "MYTH API: runs on the brand's own stack"], url: "https://myth-ai.com", label: "Visit myth-ai.com" },
  { name: "ZUSHI", color: "zushi", line: "The AI-powered B2B operating system for global trade.", items: ["Verified, scored factory network", "RFQs, quotes and live production slots", "Production, QC and shipment tracking", "ZUSHI AI: source by text, voice or photo"], url: "https://withzushi.com", label: "Visit withzushi.com" },
];
export default function Partners() {
  return (
    <section id="partners" className="py-24">
      <div className="mx-auto max-w-7xl px-5">
        <Reveal><p className="text-xs font-bold tracking-widest text-neutral-500">WHO BRINGS WHAT</p>
          <h2 className="mt-3 text-4xl md:text-5xl font-black tracking-tight">Two platforms. One finished product.</h2></Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {cards.map((c, i) => (
            <Reveal key={c.name} delay={i * 0.1}>
              <div className={`h-full rounded-3xl border-2 p-8 ${c.color === "myth" ? "border-myth/40" : "border-zushi/40"}`}>
                <p className={`text-2xl font-black tracking-tight ${c.color === "myth" ? "text-myth" : "text-zushi tracking-[0.18em]"}`}>{c.name}</p>
                <p className="mt-3 text-xl font-semibold">{c.line}</p>
                <ul className="mt-6 space-y-3">
                  {c.items.map((t) => <li key={t} className="flex gap-3 text-neutral-700"><span className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${c.color === "myth" ? "bg-myth" : "bg-zushi"}`} />{t}</li>)}
                </ul>
                <a href={c.url} target="_blank" rel="noopener" className="mt-8 inline-block font-semibold underline underline-offset-4">{c.label} →</a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
