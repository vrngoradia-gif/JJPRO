export default function Logo({ size = 34 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" role="img" aria-label="Phoenix Global" fill="none">
      <rect width="48" height="48" rx="11" fill="#1c1815" />
      <path d="M24 8c1 5-3 7-3 11 0 2 1 3 3 4-5 0-9-3-9-8 0-1 .3-2 .8-3C11 15 8 19 8 24c0 8 7 14 16 14s16-6 16-14c0-6-4-10-6-12 .5 3-1 5-3 6 1-6-2-11-7-16Z" fill="#c2531a" />
      <path d="M24 30c2 0 4 1.5 4 4s-2 4-4 4-4-1.5-4-4 2-4 4-4Z" fill="#fbf7f0" />
    </svg>
  );
}
