import { ImageResponse } from "next/og";
import { siteMeta } from "@/lib/content";
import { getAllSlugs, getBlogPost } from "@/lib/blog";

export const alt = "JJ PRO Blog";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export default async function OpengraphImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  const title = post?.title ?? siteMeta.name;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          padding: "80px",
          background: "#060605",
          backgroundImage:
            "radial-gradient(circle at 80% 20%, rgba(203,161,88,0.35), transparent 60%)",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 26,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#cba158",
          }}
        >
          {siteMeta.name} — Blog
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 28,
            fontSize: 56,
            fontWeight: 600,
            lineHeight: 1.2,
            color: "#f3efe6",
            maxWidth: 1000,
          }}
        >
          {title}
        </div>
      </div>
    ),
    { ...size }
  );
}
