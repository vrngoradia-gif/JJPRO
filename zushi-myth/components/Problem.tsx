import Reveal from "./Reveal";
export default function Problem() {
  return (
    <section id="problem" className="py-24">
      <div className="mx-auto max-w-7xl px-5">
        <Reveal><p className="text-xs font-bold tracking-widest text-neutral-500">THE PROBLEM</p>
          <h2 className="mt-3 max-w-3xl text-4xl md:text-5xl font-black tracking-tight">Fashion supply chains break at the handoff.</h2></Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <Reveal className="rounded-3xl border border-myth/40 bg-myth/10 p-8">
            <p className="text-xs font-bold tracking-widest text-myth-light">DESIGN SIDE</p>
            <h3 className="mt-3 text-2xl font-bold">Every change means a new physical sample.</h3>
            <div className="mt-6 flex gap-10">
              <div><p className="text-5xl font-black text-myth-light">7</p><p className="text-sm text-neutral-600">days to make one sample</p></div>
              <div><p className="text-5xl font-black text-myth-light">6-10</p><p className="text-sm text-neutral-600">samples before one design is approved</p></div>
            </div>
            <p className="mt-6 text-neutral-600">Then the studio bill starts: models, photographer, location, retouching.</p>
            <p className="mt-4 text-xs text-neutral-500">Company figures from MYTH AI.</p>
          </Reveal>
          <Reveal delay={0.1} className="rounded-3xl border border-zushi/50 bg-zushi/10 p-8">
            <p className="text-xs font-bold tracking-widest text-red-300">SOURCING SIDE</p>
            <h3 className="mt-3 text-2xl font-bold">Then the order disappears into WhatsApp.</h3>
            <ul className="mt-6 space-y-3 text-neutral-700">
              {["Quotes on WhatsApp", "Status updates by email", "Documents in five places", "No clear way to know if a factory is verified"].map((t) => <li key={t} className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-red-400" />{t}</li>)}
            </ul>
          </Reveal>
        </div>
        <Reveal><p className="mt-12 text-center text-2xl md:text-3xl font-semibold text-neutral-700">Two disconnected halves, and nobody owns the handoff.</p></Reveal>
      </div>
    </section>
  );
}
