import { markets, regions } from "@/lib/content";

// Simple animated sourcing-to-market route diagram (sources on the left, markets on the right).
export default function RouteMap() {
  const src = regions.map((r, i) => ({ label: r.name, y: 50 + i * 80 }));
  const dst = markets.map((m, i) => ({ label: m, y: 30 + i * 60 }));
  return (
    <svg viewBox="0 0 640 300" role="img" aria-label="Sourcing regions connected to export markets" className="w-full">
      <style>{`.flow{stroke-dasharray:6 6;animation:dash 2.2s linear infinite}@keyframes dash{to{stroke-dashoffset:-24}}@media(prefers-reduced-motion:reduce){.flow{animation:none}}`}</style>
      {src.flatMap((s) => dst.map((d) => (
        <path key={`${s.label}-${d.label}`} className="flow" d={`M150 ${s.y} C 320 ${s.y}, 320 ${d.y}, 490 ${d.y}`} fill="none" stroke="#c2531a" strokeOpacity="0.35" strokeWidth="1.5" />
      )))}
      {src.map((s) => (
        <g key={s.label}><circle cx="150" cy={s.y} r="7" fill="#1d5c58" /><text x="138" y={s.y + 4} textAnchor="end" fontSize="15" fill="#1c1815">{s.label}</text></g>
      ))}
      {dst.map((d) => (
        <g key={d.label}><circle cx="490" cy={d.y} r="7" fill="#c2531a" /><text x="504" y={d.y + 4} fontSize="15" fill="#1c1815">{d.label}</text></g>
      ))}
      <text x="150" y="285" textAnchor="middle" fontSize="11" fill="#6f655a" letterSpacing="2">SOURCING</text>
      <text x="490" y="285" textAnchor="middle" fontSize="11" fill="#6f655a" letterSpacing="2">MARKETS</text>
    </svg>
  );
}
