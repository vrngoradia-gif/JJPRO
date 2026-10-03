/**
 * Abstract hero backdrop: slow-drifting gold light, a fine grid and a
 * rotating orbit line-art. Pure CSS/SVG, no photo. Motion is turned off for
 * users who prefer reduced motion (see globals.css).
 */
export default function HeroBackdrop() {
  return (
    <div aria-hidden className="hero-backdrop absolute inset-0 overflow-hidden">
      <div className="hero-glow hero-glow-a" />
      <div className="hero-glow hero-glow-b" />
      <div className="hero-grid absolute inset-0" />
      <svg className="hero-orbits absolute left-1/2 top-1/2 h-[120vmin] w-[120vmin] -translate-x-1/2 -translate-y-1/2" viewBox="0 0 400 400" fill="none">
        <g stroke="rgba(203,161,88,0.28)" strokeWidth="0.6">
          <circle cx="200" cy="200" r="190" />
          <circle cx="200" cy="200" r="140" strokeDasharray="2 6" />
          <ellipse cx="200" cy="200" rx="190" ry="70" transform="rotate(30 200 200)" />
          <ellipse cx="200" cy="200" rx="190" ry="70" transform="rotate(-30 200 200)" />
        </g>
        <g fill="#cba158">
          <circle cx="390" cy="200" r="3" />
          <circle cx="60" cy="110" r="2" />
          <circle cx="110" cy="330" r="2.5" />
        </g>
      </svg>
    </div>
  );
}
