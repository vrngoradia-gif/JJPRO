export default function Logomark({
  size = 34,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <span
      style={{ width: size, height: size }}
      className={`relative inline-flex shrink-0 items-center justify-center rounded-[0.65rem] bg-gradient-to-br from-accent-bright to-accent-dim shadow-[0_2px_14px_rgba(169,129,47,0.35)] ${className}`}
      aria-hidden
    >
      <span
        style={{ fontSize: size * 0.48 }}
        className="font-display font-semibold leading-none text-panel"
      >
        M
      </span>
    </span>
  );
}
