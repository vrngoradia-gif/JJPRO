import Reveal from "./Reveal";
const lifecycle = [
  ["Trend & brief", "Start from a trend, a sketch or a photo.", "MYTH"],
  ["Design as a service", "Collections, patterns and colourways created with MYTH.", "MYTH"],
  ["Material sourcing", "Fabric and trims specified in the tech pack, then sourced through ZUSHI's factory network.", "ZUSHI"],
  ["Digital sampling", "Visuals and product photos before anything is cut.", "MYTH"],
  ["Factory match & RFQ", "Quotes compared on price, MOQ and lead time.", "ZUSHI"],
  ["Production & QC", "Stage tracking, delay alerts and quality checks.", "ZUSHI"],
  ["Shipment & documents", "Tracking, documents and insurance in one place.", "ZUSHI"],
];
export default function Services() {
  return (
    <section id="lifecycle" className="py-24">
      <div className="mx-auto max-w-7xl px-5">
        <Reveal><p className="text-xs font-bold tracking-widest text-neutral-500">THE FULL LIFECYCLE</p>
          <h2 className="mt-3 max-w-3xl text-4xl md:text-5xl font-black tracking-tight">From material to delivered apparel, on both platforms.</h2></Reveal>
        <div className="relative mt-14">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-myth to-zushi md:left-1/2" />
          <ol className="space-y-8">
            {lifecycle.map(([t, d, o], i) => (
              <Reveal key={t} delay={0.05}>
                <li className={`relative grid md:grid-cols-2 gap-4 pl-12 md:pl-0 ${i % 2 ? "md:[&>div]:col-start-2 md:[&>div]:pl-12" : "md:[&>div]:pr-12 md:[&>div]:text-right"}`}>
                  <span className={`absolute left-[10px] md:left-1/2 md:-translate-x-1/2 top-2 h-3 w-3 rounded-full ring-4 ring-white ${o === "MYTH" ? "bg-myth" : "bg-zushi"}`} />
                  <div>
                    <p className={`text-xs font-bold tracking-widest ${o === "MYTH" ? "text-myth" : "text-zushi"}`}>{o}</p>
                    <h3 className="text-xl font-bold">{t}</h3>
                    <p className="mt-1 text-neutral-600">{d}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
