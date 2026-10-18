"use client";
import { waLink, WA_ICON_PATH } from "@/lib/wa";
import { track } from "@/lib/track";
export function WaIcon({ size = 22 }: { size?: number }) {
  return <svg viewBox="0 0 32 32" width={size} height={size} aria-hidden="true" fill="currentColor"><path d={WA_ICON_PATH} /></svg>;
}
export function WaButton({ label = "Chat on WhatsApp", location, className = "" }: { label?: string; location: string; className?: string }) {
  return (
    <a href={waLink()} target="_blank" rel="noopener noreferrer" onClick={() => track("whatsapp_click", { location })}
      className={`inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 font-semibold text-white shadow-lg shadow-green-600/20 hover:brightness-95 ${className}`}>
      <WaIcon /> {label}
    </a>
  );
}
export default function WhatsAppFab() {
  return (
    <a href={waLink()} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp" onClick={() => track("whatsapp_click", { location: "fab" })}
      className="fixed right-5 bottom-[86px] z-[60] flex h-[54px] w-[54px] items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition-transform hover:scale-105">
      <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366]/40" style={{ animationDuration: "2.4s" }} />
      <span className="relative"><WaIcon size={28} /></span>
    </a>
  );
}
