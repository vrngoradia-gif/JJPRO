export function MythMark({ className = "" }: { className?: string }) {
  return <span className={`font-black tracking-tight text-myth ${className}`}>MYTH<span className="text-ink/70"> AI</span></span>;
}
export function ZushiMark({ className = "" }: { className?: string }) {
  return <span className={`font-black tracking-[0.18em] text-zushi ${className}`}>ZUSHI</span>;
}
export function Lockup({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 text-lg ${className}`}>
      <MythMark /> <span className="text-neutral-400 font-light">×</span> <ZushiMark />
    </span>
  );
}
