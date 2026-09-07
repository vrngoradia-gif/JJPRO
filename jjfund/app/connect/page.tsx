import type { Metadata } from "next";
import SectionReveal from "@/components/ui/SectionReveal";
import ConnectForm from "@/components/forms/ConnectForm";
import { connect } from "@/lib/content";

export const metadata: Metadata = {
  title: "Connect",
  description: connect.subtitle,
  alternates: { canonical: "/connect" },
};

export default async function ConnectPage({
  searchParams,
}: {
  searchParams: Promise<{ as?: string }>;
}) {
  const { as } = await searchParams;

  return (
    <>
      <section className="grid-texture px-6 pb-16 pt-32 text-center md:px-10 md:pb-20 md:pt-40">
        <SectionReveal>
          <p className="eyebrow">{connect.eyebrow}</p>
          <h1 className="h-display-xl text-balance mx-auto mt-6 max-w-3xl">{connect.title}</h1>
          <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-paper-dim">
            {connect.subtitle}
          </p>
        </SectionReveal>
      </section>

      <section className="mx-auto max-w-2xl px-6 pb-24 md:px-10 md:pb-32">
        <SectionReveal>
          <h2 className="font-display text-2xl text-paper">{connect.form.heading}</h2>
          <div className="mt-8">
            <ConnectForm defaultAudience={as} />
          </div>
        </SectionReveal>

        <SectionReveal delay={0.1} className="mt-12 border-t border-line/60 pt-8">
          <p className="font-display text-lg text-paper">{connect.directEmail.heading}</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a href={`mailto:${connect.directEmail.founder}`} className="text-accent-bright hover:text-accent">
                Founders — {connect.directEmail.founder}
              </a>
            </li>
            <li>
              <a href={`mailto:${connect.directEmail.investor}`} className="text-accent-bright hover:text-accent">
                Investors — {connect.directEmail.investor}
              </a>
            </li>
            <li>
              <a href={`mailto:${connect.directEmail.partner}`} className="text-accent-bright hover:text-accent">
                Partners — {connect.directEmail.partner}
              </a>
            </li>
          </ul>
        </SectionReveal>
      </section>
    </>
  );
}
