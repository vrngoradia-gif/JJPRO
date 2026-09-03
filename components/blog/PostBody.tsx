import type { BlogBlock } from "@/lib/blog";

export default function PostBody({ blocks }: { blocks: BlogBlock[] }) {
  return (
    <div className="space-y-6">
      {blocks.map((block, i) => {
        switch (block.type) {
          case "heading":
            return (
              <h2 key={i} className="font-display pt-4 text-2xl text-paper">
                {block.text}
              </h2>
            );
          case "paragraph":
            return (
              <p key={i} className="text-base leading-relaxed text-paper-dim">
                {block.text}
              </p>
            );
          case "list":
            return (
              <ul key={i} className="space-y-3">
                {block.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm leading-relaxed text-paper-dim"
                  >
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gold" />
                    {item}
                  </li>
                ))}
              </ul>
            );
          case "quote":
            return (
              <blockquote
                key={i}
                className="border-l-2 border-gold/50 pl-6 font-display text-xl italic text-paper"
              >
                {block.text}
              </blockquote>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
