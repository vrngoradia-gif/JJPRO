export default function Logo({ size = 36 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" role="img" aria-label="JJ PRO" fill="none">
      <circle cx="24" cy="24" r="22" stroke="#cba158" strokeWidth="1.5" />
      <path d="M17 12v17a5 5 0 0 1-5 5" stroke="#e8c77e" strokeWidth="3" strokeLinecap="round" />
      <path d="M29 12v17a5 5 0 0 1-5 5" stroke="#cba158" strokeWidth="3" strokeLinecap="round" />
      <circle cx="17" cy="9" r="1.8" fill="#e8c77e" />
      <circle cx="29" cy="9" r="1.8" fill="#cba158" />
      <path d="M33 22h8M37 18v8" stroke="#e8c77e" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  );
}
