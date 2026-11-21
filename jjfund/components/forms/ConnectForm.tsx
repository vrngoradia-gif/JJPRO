"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { connect } from "@/lib/content";

type Status = "idle" | "submitting" | "success" | "error";

export default function ConnectForm({ defaultAudience }: { defaultAudience?: string }) {
  const [status, setStatus] = useState<Status>("idle");

  // Enquiries go browser-direct to FormSubmit (recipient jigjn14@gmail.com). Override with NEXT_PUBLIC_LEAD_ENDPOINT.
  const endpoint = process.env.NEXT_PUBLIC_LEAD_ENDPOINT || "https://formsubmit.co/ajax/jigjn14@gmail.com";

  const initialAudience = connect.audienceOptions.some((o) => o.value === defaultAudience)
    ? defaultAudience
    : connect.audienceOptions[0].value;

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    const formData = new FormData(e.currentTarget);
    formData.append("_subject", `New enquiry from ${window.location.hostname}`);
    formData.append("_site", window.location.hostname);
    formData.append("_template", "table");
    formData.append("_captcha", "false");
    formData.append("_replyto", String(formData.get("email") || ""));

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      const j = await res.clone().json().catch(() => null);
      if (res.ok && (!j || String(j.success) !== "false")) {
        setStatus("success");
        e.currentTarget.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-2xl border border-accent/30 bg-panel/60 p-8 text-center"
      >
        <p className="font-display text-xl text-accent-bright">{connect.form.successMessage}</p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" name="connect">
      <div>
        <label htmlFor="audience" className="mb-2 block text-xs uppercase tracking-widest text-paper-dim">
          I am a...
        </label>
        <select
          id="audience"
          name="audience"
          defaultValue={initialAudience}
          className="w-full border-b border-line bg-transparent py-3 text-paper outline-none transition-colors focus:border-accent"
        >
          {connect.audienceOptions.map((option) => (
            <option key={option.value} value={option.value} className="bg-ink-soft">
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="name" className="mb-2 block text-xs uppercase tracking-widest text-paper-dim">
          {connect.form.fields.name}
          <span className="text-accent-bright"> *</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="w-full border-b border-line bg-transparent py-3 text-paper outline-none transition-colors focus:border-accent"
        />
      </div>

      <div>
        <label htmlFor="email" className="mb-2 block text-xs uppercase tracking-widest text-paper-dim">
          {connect.form.fields.email}
          <span className="text-accent-bright"> *</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full border-b border-line bg-transparent py-3 text-paper outline-none transition-colors focus:border-accent"
        />
      </div>

      <div>
        <label htmlFor="company" className="mb-2 block text-xs uppercase tracking-widest text-paper-dim">
          {connect.form.fields.company}
        </label>
        <input
          id="company"
          name="company"
          type="text"
          className="w-full border-b border-line bg-transparent py-3 text-paper outline-none transition-colors focus:border-accent"
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-xs uppercase tracking-widest text-paper-dim">
          {connect.form.fields.message}
          <span className="text-accent-bright"> *</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full resize-none border-b border-line bg-transparent py-3 text-paper outline-none transition-colors focus:border-accent"
        />
      </div>

      <p className="text-sm leading-relaxed text-paper-dim">
        When you submit, the details you enter are sent through <a href="https://formsubmit.co/" target="_blank" rel="noreferrer" className="underline underline-offset-4">FormSubmit</a> to the enquiry inbox so the team can respond to your request. Please do not include sensitive personal information. <a href="/privacy" className="underline underline-offset-4">Privacy notice</a>.
      </p>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-4 w-full rounded-full bg-accent px-8 py-3.5 text-sm tracking-wide text-ink transition-colors hover:bg-accent-bright disabled:opacity-60 sm:w-auto"
      >
        {status === "submitting" ? "Sending…" : connect.form.submitLabel}
      </button>

      {status === "error" && <p className="text-sm text-red-400">{connect.form.errorMessage}</p>}
    </form>
  );
}
