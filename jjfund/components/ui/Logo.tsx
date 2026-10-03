export default function Logo({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" role="img" aria-label="JJ Fund" fill="none">
      <rect x="1" y="1" width="46" height="46" rx="11" stroke="#253048" strokeWidth="1.5" />
      <path d="M8 31c6-14 26-14 32 0" stroke="#b98a3e" strokeWidth="2.6" strokeLinecap="round" />
      <circle cx="8" cy="31" r="3.2" fill="#d9ad63" />
      <circle cx="40" cy="31" r="3.2" fill="#5b8ec9" />
      <path d="M24 12v8M20 16h8" stroke="#f2f4f8" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
