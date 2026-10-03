"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";

export type FormFieldConfig = {
  name: string;
  label: string;
  type?: "text" | "email" | "tel" | "textarea" | "select";
  required?: boolean;
  options?: string[];
};

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm({
  fields,
  submitLabel = "Send Brief",
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

  // Form service ID comes from NEXT_PUBLIC_FORMSPREE_ID. Enquiries are delivered to the address set on that Formspree form (jignesh@myth-ai.com, see .env.example).
  const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID;
  const endpoint = `https://formspree.io/f/${formspreeId}`;

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
        <p className="font-display text-xl text-accent-bright">{successMessage}</p>
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
            {field.required && <span className="text-accent-bright"> *</span>}
          </label>
          {field.type === "textarea" ? (
            <textarea
              id={field.name}
              name={field.name}
              required={field.required}
              rows={5}
              className="w-full resize-none border-b border-line bg-transparent py-3 text-paper outline-none transition-colors focus:border-accent"
            />
          ) : field.type === "select" ? (
            <select
              id={field.name}
              name={field.name}
              required={field.required}
              defaultValue=""
              className="w-full border-b border-line bg-transparent py-3 text-paper outline-none transition-colors focus:border-accent"
            >
              <option value="" disabled>
                Select an option
              </option>
              {field.options?.map((option) => (
                <option key={option} value={option} className="bg-ink-soft">
                  {option}
                </option>
              ))}
            </select>
          ) : (
            <input
              id={field.name}
              name={field.name}
              type={field.type || "text"}
              required={field.required}
              className="w-full border-b border-line bg-transparent py-3 text-paper outline-none transition-colors focus:border-accent"
            />
          )}
        </div>
      ))}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-4 w-full rounded-full bg-accent px-8 py-3.5 text-sm tracking-wide text-panel transition-colors hover:bg-accent-bright disabled:opacity-60 sm:w-auto"
      >
        {status === "submitting" ? "Sending…" : submitLabel}
      </button>

      {status === "error" && <p className="text-sm text-red-400">{errorMessage}</p>}
    </form>
  );
}
