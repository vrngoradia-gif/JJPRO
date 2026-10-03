import { network, type SiteKey } from "@/lib/network";

export default function NetworkStrip({ current }: { current: SiteKey }) {
  const others = network.filter((s) => s.key !== current);
  return (
    <section aria-label="Related sites" style={{ borderTop: "1px solid var(--net-line)", background: "var(--net-bg)", color: "var(--net-fg)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "40px 24px" }}>
        <p style={{ margin: 0, fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--net-accent)", fontWeight: 600 }}>Explore the network</p>
        <div style={{ display: "grid", gap: 16, marginTop: 18, gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" }}>
          {others.map((s) => (
            <a key={s.key} href={s.url} target="_blank" rel="noopener" style={{ display: "block", padding: 18, border: "1px solid var(--net-line)", borderRadius: 14, color: "inherit", textDecoration: "none" }}>
              <span style={{ display: "block", fontWeight: 600, fontSize: 16 }}>{s.name} <span aria-hidden="true" style={{ color: "var(--net-accent)" }}>&rarr;</span></span>
              <span style={{ display: "block", marginTop: 6, fontSize: 13, lineHeight: 1.5, color: "var(--net-dim)" }}>{s.blurb}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
