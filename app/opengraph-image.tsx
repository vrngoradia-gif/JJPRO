import { ImageResponse } from "next/og";
import { siteMeta } from "@/lib/content";

export const alt = `${siteMeta.name} — ${siteMeta.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
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
          background: "#0f1829",
          backgroundImage:
            "radial-gradient(circle at 80% 20%, rgba(214,51,108,0.35), transparent 60%)",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 28,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#d6336c",
          }}
        >
          {siteMeta.name}
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 28,
            fontSize: 64,
            fontWeight: 600,
            lineHeight: 1.15,
            color: "#ffffff",
            maxWidth: 980,
          }}
        >
          {siteMeta.tagline}
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 28,
            fontSize: 28,
            color: "#a89f8f",
            maxWidth: 900,
          }}
        >
          Brand Strategy · Fundraising · GTM · Business Transformation
        </div>
      </div>
    ),
    { ...size }
  );
}
