import type { BlogBlock } from "@/lib/content";

export default function PostBody({ blocks }: { blocks: BlogBlock[] }) {
  return (
    <div className="space-y-6">
      {blocks.map((block, i) => {
        switch (block.type) {
          case "heading":
            return (
              <h2 key={i} className="h-display-md pt-4 text-paper">
                {block.text}
              </h2>
            );
          case "paragraph":
            return (
              <p key={i} className="leading-relaxed text-paper-dim">
                {block.text}
              </p>
            );
          case "list":
            return (
              <ul key={i} className="space-y-2">
                {block.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-paper-dim">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            );
          case "quote":
            return (
              <blockquote
                key={i}
                className="border-l-2 border-accent pl-6 text-lg italic text-paper"
              >
                {block.text}
                {block.attribution && (
                  <footer className="mt-2 text-sm not-italic text-paper-dim">
                    — {block.attribution}
                  </footer>
                )}
              </blockquote>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
