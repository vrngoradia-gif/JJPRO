import Link from "next/link";
import Image from "next/image";
import { person } from "@/lib/schema";

export default function AuthorBio() {
  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-line/70 bg-panel/50 p-8 sm:flex-row sm:items-center">
      <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full border border-line/70">
        <Image
          src="/jignesh-jain.jpg"
          alt={person.name}
          fill
          sizes="64px"
          className="object-cover object-top"
        />
      </div>
      <div>
        <p className="font-display text-lg text-paper">{person.name}</p>
        <p className="text-sm text-paper-dim">{person.jobTitle}</p>
        <p className="mt-3 text-sm leading-relaxed text-paper-dim">
          Jignesh is the founder of JJ PRO and a startup mentor across
          multiple international accelerator and incubation programs. He
          writes on fundraising, GTM and brand strategy from direct, hands-on
          advisory experience.
        </p>
        <div className="mt-3 flex gap-4 text-xs text-gold">
          <Link href="/about-us" data-cursor-hover>
            About Jignesh →
          </Link>
          <a
            href={person.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor-hover
          >
            LinkedIn →
          </a>
        </div>
      </div>
    </div>
  );
}
