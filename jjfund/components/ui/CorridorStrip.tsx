export default function CorridorStrip({ cities }: { cities: string[] }) {
  return (
    <div className="relative py-4">
      <div className="bridge-line absolute inset-x-0 top-1/2 h-px -translate-y-1/2" aria-hidden />
      <div className="relative flex flex-wrap items-center justify-center gap-x-3 gap-y-4 px-4">
        {cities.map((city, i) => (
          <span key={city} className="flex items-center gap-3">
            <span className="rounded-full border border-line bg-ink px-4 py-2 text-xs tracking-wide text-paper sm:text-sm">
              {city}
            </span>
            {i < cities.length - 1 && (
              <span className="text-accent-dim" aria-hidden>
                —
              </span>
            )}
          </span>
        ))}
      </div>
    </div>
  );
}
