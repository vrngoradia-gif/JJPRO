import CtaButton from "@/components/ui/CtaButton";

export default function PriceCta() {
  return (
    <section className="border-t border-line bg-ink-soft px-6 py-14 text-center md:px-10">
      <h2 className="h-display-md mx-auto max-w-2xl text-balance">Need a price? Tell us what you want to buy.</h2>
      <p className="mx-auto mt-3 max-w-xl text-sm text-paper-dim">Send the product, quantity and destination. We reply with price, MOQ and lead time.</p>
      <div className="mt-6 flex flex-wrap justify-center gap-3">
        <CtaButton href="/contact">Ask for price / Inquire now</CtaButton>
      </div>
    </section>
  );
}
