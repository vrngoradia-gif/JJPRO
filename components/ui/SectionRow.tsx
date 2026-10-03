import SectionReveal from "@/components/ui/SectionReveal";

/** Theme layout: numbered label in a narrow left column, content on the right, ruled top border. */
export default function SectionRow({ num, label, children, soft = false }: { num: string; label: string; children: React.ReactNode; soft?: boolean }) {
  return (
    <section className={`border-t border-line ${soft ? "bg-ink-soft" : ""}`}>
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-16 md:grid-cols-[180px_1fr] md:px-10 md:py-24">
        <SectionReveal>
          <p className="num-label">{num}</p>
          <p className="mt-2 font-display text-base font-bold text-paper">{label}</p>
        </SectionReveal>
        <div>{children}</div>
      </div>
    </section>
  );
}
