"use client";
import { useEffect, useState } from "react";
import { track } from "@/lib/track";
const KEY = "zm_lead_popup";
export default function LeadPopup() {
  const [open, setOpen] = useState(false);
  const [state, setState] = useState<"idle" | "sending" | "ok" | "error">("idle");
  useEffect(() => {
    if (typeof window === "undefined" || sessionStorage.getItem(KEY)) return;
    if (window.location.pathname === "/thank-you") return;
    const t = setTimeout(() => { if (!sessionStorage.getItem(KEY)) { setOpen(true); track("lead_popup_view"); } }, Number(process.env.NEXT_PUBLIC_POPUP_DELAY_MS) || 60000);
    return () => clearTimeout(t);
  }, []);
  function close() { sessionStorage.setItem(KEY, "1"); setOpen(false); }
  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault(); setState("sending");
    const d = Object.fromEntries(new FormData(e.currentTarget).entries());
    try {
      const r = await fetch("/api/lead", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...d, interest: "Popup enquiry", source: "popup_60s", page: window.location.pathname }) });
      if (!r.ok) throw new Error();
      sessionStorage.setItem(KEY, "1"); track("form_submit", { source: "popup" }); setState("ok");
    } catch { setState("error"); }
  }
  if (!open) return null;
  const f = "w-full rounded-xl border border-black/15 bg-white px-3.5 py-2.5 text-sm outline-none focus:border-myth";
  return (
    <div className="fixed inset-0 z-[80] flex items-end justify-center bg-black/50 p-4 sm:items-center" onClick={close}>
      <div role="dialog" aria-modal="true" aria-label="Talk to MYTH and ZUSHI" onClick={(e) => e.stopPropagation()} className="relative w-full max-w-md overflow-hidden rounded-3xl bg-white shadow-2xl">
        <div className="h-1.5 bg-gold" />
        <button onClick={close} aria-label="Close" className="absolute right-4 top-4 text-2xl leading-none text-neutral-400 hover:text-ink">×</button>
        <div className="p-6">
          {state === "ok" ? (
            <div className="py-6 text-center"><p className="text-2xl font-black">Thanks, we'll be in touch.</p><p className="mt-2 text-neutral-600">The MYTH and ZUSHI teams will reach out soon.</p><button onClick={close} className="mt-6 rounded-full bg-ink px-6 py-2.5 text-sm font-semibold text-white">Close</button></div>
          ) : (
            <>
              <p className="text-xs font-bold tracking-widest text-neutral-500">MYTH AI × ZUSHI</p>
              <h3 className="mt-1 text-2xl font-black tracking-tight">Tell us what you want to make.</h3>
              <p className="mt-1 text-sm text-neutral-600">Leave your details and we'll come back with a plan from design to delivery.</p>
              <form onSubmit={submit} className="mt-5 grid gap-3">
                <input name="name" required placeholder="Name" className={f} />
                <input name="email" type="email" required placeholder="Email" className={f} />
                <input name="phone" type="tel" required placeholder="Phone (with country code)" className={f} />
                <textarea name="use_case" required rows={2} placeholder="Use case (e.g. 5,000 polos for a UK retailer)" className={f} />
                <button disabled={state === "sending"} className="rounded-full bg-ink px-6 py-3 font-bold text-white hover:bg-neutral-800 disabled:opacity-60">{state === "sending" ? "Sending..." : "Talk to us"}</button>
                {state === "error" && <p className="text-sm text-red-600">Something went wrong. Please try again or email admin@withzushi.com.</p>}
                <p className="text-[11px] text-neutral-500">By submitting you agree to be contacted about this request. <a href="/privacy" className="underline">Privacy</a></p>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
