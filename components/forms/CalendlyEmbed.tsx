"use client";

const FALLBACK_URL = "https://calendly.com/jigjain/30min";

export default function CalendlyEmbed({ className = "" }: { className?: string }) {
  const url = process.env.NEXT_PUBLIC_CALENDLY_URL || FALLBACK_URL;

  return (
    <div
      className={`overflow-hidden rounded-2xl border border-line/70 bg-panel/40 ${className}`}
    >
      <iframe
        src={url}
        title="Book a call"
        loading="lazy"
        className="h-[700px] w-full"
        style={{ colorScheme: "light" }}
      />
    </div>
  );
}
