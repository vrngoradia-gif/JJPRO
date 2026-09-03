"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";

export type FormFieldConfig = {
  name: string;
  label: string;
  type?: "text" | "email" | "textarea";
  required?: boolean;
};

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm({
  fields,
  submitLabel = "Send",
  successMessage = "Thanks — we'll be in touch soon.",
  errorMessage = "Something went wrong. Please try again.",
  formName = "contact",
}: {
  fields: FormFieldConfig[];
  submitLabel?: string;
  successMessage?: string;
  errorMessage?: string;
  formName?: string;
}) {
  const [status, setStatus] = useState<Status>("idle");

  // TODO: replace with the real Formspree form ID in .env.local (see .env.example)
  const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID || "YOUR_FORM_ID";
  const endpoint = `https://formspree.io/f/${formspreeId}`;

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    const formData = new FormData(e.currentTarget);

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
        className="rounded-2xl border border-gold/30 bg-panel/60 p-8 text-center"
      >
        <p className="font-display text-xl text-gold">{successMessage}</p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" name={formName}>
      {fields.map((field) => (
        <div key={field.name}>
          <label
            htmlFor={field.name}
            className="mb-2 block text-xs uppercase tracking-widest text-paper-dim"
          >
            {field.label}
            {field.required && <span className="text-gold"> *</span>}
          </label>
          {field.type === "textarea" ? (
            <textarea
              id={field.name}
              name={field.name}
              required={field.required}
              rows={5}
              className="w-full resize-none border-b border-line bg-transparent py-3 text-paper outline-none transition-colors focus:border-gold"
            />
          ) : (
            <input
              id={field.name}
              name={field.name}
              type={field.type || "text"}
              required={field.required}
              className="w-full border-b border-line bg-transparent py-3 text-paper outline-none transition-colors focus:border-gold"
            />
          )}
        </div>
      ))}

      <button
        type="submit"
        disabled={status === "submitting"}
        data-cursor-hover
        className="mt-4 w-full rounded-full bg-gold px-8 py-3.5 text-sm tracking-wide text-ink transition-colors hover:bg-gold-bright disabled:opacity-60 sm:w-auto"
      >
        {status === "submitting" ? "Sending…" : submitLabel}
      </button>

      {status === "error" && (
        <p className="text-sm text-red-400">{errorMessage}</p>
      )}
    </form>
  );
}
