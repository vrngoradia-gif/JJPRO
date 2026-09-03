export default function Marquee({ items }: { items: string[] }) {
  const loop = [...items, ...items];

  return (
    <div className="relative overflow-hidden">
      <div className="flex w-max animate-marquee gap-16 py-4">
        {loop.map((item, i) => (
          <span
            key={i}
            className="whitespace-nowrap font-display text-2xl text-paper-dim/50"
          >
            {item}
          </span>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-ink to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-ink to-transparent" />
    </div>
  );
}
