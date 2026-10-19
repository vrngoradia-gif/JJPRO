import Reveal from "./Reveal";
const imgs = [["/img/fabric-roll.jpg", "Fabric"], ["/img/m-collection.jpg", "MYTH collection"], ["/img/a-flatlay.jpg", "Garments"], ["/img/z-cartons.jpg", "Packing"], ["/img/factory.jpg", "Production"], ["/img/a-rack.jpg", "The finished line"], ["/img/z-port.jpg", "Shipment"]];
export default function Gallery() {
  return (
    <section className="overflow-hidden py-16">
      <Reveal><p className="mb-6 text-center text-xs font-bold tracking-widest text-neutral-400">FROM FABRIC TO FREIGHT (ILLUSTRATIVE)</p></Reveal>
      <div className="marquee flex w-max gap-4">
        {[...imgs, ...imgs].map(([s, l], i) => (
          <div key={i} data-parallax className="relative h-56 w-72 shrink-0 overflow-hidden rounded-2xl sm:h-64 sm:w-96">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={s} alt={l} loading="lazy" className="h-full w-full object-cover" />
            <span className="absolute bottom-3 left-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold">{l}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
