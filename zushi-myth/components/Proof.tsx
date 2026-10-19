import Reveal from "./Reveal";
import CountUp from "./CountUp";
const base = "https://myth-ai.com/wp-content/uploads/";
const logos = [["Koton", "2025/12/koton9388-150x150.jpg"], ["Mavi", "2025/12/mavi-logo-png_seeklogo-168440-150x150.png"], ["Lee Cooper", "2026/05/lee-cooper.jpg"], ["Zorlu", "2025/12/Zorlu-Logo-150x150.png"]];
export default function Proof() {
  return (
    <section id="proof" className="py-24">
      <div className="mx-auto max-w-7xl px-5">
        <Reveal><p className="text-xs font-bold tracking-widest text-neutral-500">PROOF</p>
          <h2 className="mt-3 text-4xl md:text-5xl font-black tracking-tight">Built for real fashion supply chains.</h2></Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <Reveal className="rounded-3xl border border-myth/30 p-8">
            <p className="text-xs font-bold tracking-widest text-myth">MYTH AI</p>
            <p className="mt-4 text-6xl font-black text-myth"><CountUp to={150} suffix="+" /></p><p className="text-neutral-600">brands onboarded</p>
            <p className="mt-8 text-xs font-bold tracking-widest text-neutral-500">BRANDS USING MYTH AI</p>
            <div className="mt-4 grid grid-cols-4 gap-3">
              {logos.map(([n, p]) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img key={n} src={base + p} alt={n} loading="lazy" className="aspect-square w-full bg-white object-contain p-2 grayscale transition hover:grayscale-0" />
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.1} className="rounded-3xl border border-zushi/30 p-8">
            <p className="text-xs font-bold tracking-widest text-zushi">ZUSHI</p>
            <div className="mt-4 flex flex-wrap gap-x-10 gap-y-4">
              <div><p className="text-6xl font-black text-zushi"><CountUp to={200} suffix="+" /></p><p className="text-neutral-600">clothing categories</p></div>
              <div><p className="text-6xl font-black text-zushi"><CountUp to={20} suffix="+" /></p><p className="text-neutral-600">factories onboarded (pre-launch)</p></div>
            </div>
            <p className="mt-6 text-sm text-neutral-500">Partners: Dun &amp; Bradstreet (trade verification), Indikos Forwarding and Fairmacs (logistics), Integrated Risk Insurance Brokers (insurance).</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
