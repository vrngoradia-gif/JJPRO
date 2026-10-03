"use client";

import { useState, type FormEvent } from "react";
import { enquiryTypes } from "@/lib/content";

type Status = "idle" | "submitting" | "success" | "error";

const field = "w-full border-b border-line bg-transparent py-3 text-paper outline-none transition-colors focus:border-accent";
const label = "mb-2 block text-xs uppercase tracking-widest text-paper-dim";

export default function InquiryForm({ defaultType = "buyer" }: { defaultType?: string }) {
  const [status, setStatus] = useState<Status>("idle");
  // PLACEHOLDER: set NEXT_PUBLIC_FORMSPREE_ID in Vercel. File attachments need a Formspree plan that supports uploads.
  const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID;

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!formspreeId) { setStatus("error"); return; }
    setStatus("submitting");
    const form = e.currentTarget;
    try {
      const res = await fetch(`https://formspree.io/f/${formspreeId}`, { method: "POST", body: new FormData(form), headers: { Accept: "application/json" } });
      if (res.ok) { setStatus("success"); form.reset(); } else setStatus("error");
    } catch { setStatus("error"); }
  }

  if (status === "success") {
    return <div className="rounded-2xl border border-accent/30 bg-panel p-8 text-center"><p className="font-display text-xl text-accent-bright">Thank you. We will reply with a quote shortly.</p></div>;
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6" name="inquiry">
      <div>
        <label htmlFor="type" className={label}>I am...</label>
        <select id="type" name="enquiry_type" defaultValue={defaultType} className={field}>
          {enquiryTypes.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
        </select>
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        <div><label htmlFor="name" className={label}>Name *</label><input id="name" name="name" required className={field} /></div>
        <div><label htmlFor="company" className={label}>Company</label><input id="company" name="company" className={field} /></div>
        <div><label htmlFor="email" className={label}>Email *</label><input id="email" name="email" type="email" required className={field} /></div>
        <div><label htmlFor="phone" className={label}>Phone / WhatsApp</label><input id="phone" name="phone" className={field} /></div>
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        <div><label htmlFor="product" className={label}>Product *</label><input id="product" name="product" required placeholder="e.g. cotton knit fabric" className={field} /></div>
        <div><label htmlFor="quantity" className={label}>Quantity / MOQ</label><input id="quantity" name="quantity" className={field} /></div>
        <div><label htmlFor="destination" className={label}>Destination country</label><input id="destination" name="destination" className={field} /></div>
        <div><label htmlFor="file" className={label}>Attach a file (spec, tech pack, photo)</label><input id="file" name="attachment" type="file" multiple className="w-full py-2 text-sm text-paper-dim" /></div>
      </div>
      <div><label htmlFor="message" className={label}>Details *</label><textarea id="message" name="message" required rows={5} className={`${field} resize-none`} /></div>
      <button type="submit" disabled={status === "submitting"} className="w-full rounded-full bg-accent px-8 py-3.5 text-sm tracking-wide text-white transition-colors hover:bg-accent-bright disabled:opacity-60">
        {status === "submitting" ? "Sending..." : "Send enquiry"}
      </button>
      {status === "error" && <p className="text-sm text-red-700">{formspreeId ? "That did not go through. Please try again or use WhatsApp." : "The enquiry form is not connected yet. Please use WhatsApp or email for now."}</p>}
    </form>
  );
}
