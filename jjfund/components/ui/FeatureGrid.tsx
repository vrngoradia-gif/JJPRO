export default function FeatureGrid({
  items,
  columns = 3,
}: {
  items: { title: string; body: string }[];
  columns?: 2 | 3;
}) {
  return (
    <div
      className={`grid gap-6 ${columns === 2 ? "sm:grid-cols-2" : "sm:grid-cols-2 lg:grid-cols-3"}`}
    >
      {items.map((item) => (
        <div key={item.title} className="glow-border rounded-2xl bg-panel/60 p-6">
          <h3 className="font-display text-lg text-paper">{item.title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-paper-dim">{item.body}</p>
        </div>
      ))}
    </div>
  );
}
