"use client";

import { motion } from "framer-motion";
import { contact } from "@/lib/content";

export default function WhatsAppCta() {
  return (
    <motion.a
      href={contact.whatsappHref}
      target="_blank"
      rel="noreferrer"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 1 }}
      className="fixed bottom-6 right-6 z-40 flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-medium text-panel shadow-[0_10px_40px_rgba(169,129,47,0.4)] transition-all duration-300 hover:bg-accent-bright hover:shadow-[0_10px_50px_rgba(169,129,47,0.55)]"
    >
      <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden>
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.33 4.95L2 22l5.28-1.38a9.9 9.9 0 0 0 4.76 1.21h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.14-2.9-7.01A9.85 9.85 0 0 0 12.04 2Zm0 18.13h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.13.82.84-3.05-.2-.31a8.22 8.22 0 0 1-1.26-4.35c0-4.55 3.7-8.25 8.26-8.25 2.2 0 4.27.86 5.83 2.42a8.19 8.19 0 0 1 2.42 5.83c0 4.55-3.71 8.22-8.26 8.22Zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.24-.64.81-.78.97-.15.17-.29.19-.54.06-.25-.12-1.04-.38-1.99-1.22-.73-.65-1.23-1.46-1.37-1.71-.15-.24-.02-.38.11-.5.11-.11.25-.29.37-.44.12-.14.16-.24.24-.4.08-.17.04-.31-.02-.44-.06-.12-.56-1.35-.77-1.84-.2-.49-.4-.42-.56-.43-.14 0-.31 0-.47 0-.16 0-.43.06-.65.31-.23.24-.86.84-.86 2.04 0 1.2.88 2.37 1 2.53.12.17 1.73 2.64 4.2 3.7.59.25 1.04.4 1.4.52.59.19 1.12.16 1.54.1.47-.07 1.47-.6 1.68-1.18.2-.58.2-1.08.15-1.18-.06-.11-.22-.17-.47-.29Z" />
      </svg>
      WhatsApp a Brief
    </motion.a>
  );
}
