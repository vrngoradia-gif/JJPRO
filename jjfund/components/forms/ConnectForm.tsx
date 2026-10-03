"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { connect } from "@/lib/content";

type Status = "idle" | "submitting" | "success" | "error";

export default function ConnectForm({ defaultAudience }: { defaultAudience?: string }) {
  const [status, setStatus] = useState<Status>("idle");

  // Form service ID comes from NEXT_PUBLIC_FORMSPREE_ID. Enquiries are delivered to the address set on that Formspree form (jignesh@myth-ai.com, see .env.example).
  const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID;
  const endpoint = `https://formspree.io/f/${formspreeId}`;

  const initialAudience = connect.audienceOptions.some((o) => o.value === defaultAudience)
    ? defaultAudience
    : connect.audienceOptions[0].value;

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    if (!formspreeId) { setStatus("error"); return; }
    const formData = new FormData(e.currentTarget);
    formData.append("_subject", `New enquiry from ${window.location.hostname}`);
    formData.append("_site", window.location.hostname);

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
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
