import Reveal from "./Reveal";
const cells = [
  { t: "Digital sampling", d: "See the product before anything is cut.", c: "col-span-2 bg-myth text-white", img: "/img/design.jpg" },
  { t: "Verified factories", d: "Matched on category, MOQ and lead time.", c: "bg-white", img: "/img/factory.jpg" },
  { t: "Stage tracking", d: "Production stages and delay alerts.", c: "bg-ink text-white" },
  { t: "Quality checks", d: "Inspection before shipment.", c: "bg-white" },
  { t: "Shipment and documents", d: "Tracking, documents and insurance in one place.", c: "col-span-2 bg-zushi text-white", img: "/img/ship.jpg" },
];
export default function Bento() {
  return (
    <section id="capabilities" className="py-24">
      <div className="mx-auto max-w-7xl px-5">
        <Reveal><p className="text-xs font-bold tracking-widest text-neutral-500">CAPABILITIES</p>
          <h2 className="mt-3 max-w-3xl text-4xl font-black tracking-tight md:text-5xl">Everything between the idea and the delivery.</h2></Reveal>
        <div className="mt-12 grid auto-rows-[220px] grid-cols-2 gap-4 lg:grid-cols-4">
          {cells.map((x, i) => (
            <Reveal key={x.t} delay={i * 0.06} className={`group relative overflow-hidden rounded-3xl border border-black/10 p-6 ${x.c} ${x.c.includes("col-span-2") ? "lg:col-span-2" : ""}`}>
              {x.img && /* eslint-disable-next-line @next/next/no-img-element */ <img src={x.img} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-25 transition-transform duration-700 group-hover:scale-110" />}
              <div className="relative flex h-full flex-col justify-end"><h3 className="text-xl font-bold">{x.t}</h3><p className="mt-1 text-sm opacity-80">{x.d}</p></div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
