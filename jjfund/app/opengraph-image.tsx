import { ImageResponse } from "next/og";

export const alt = "JJ Fund - AI-native venture platform connecting Western startups with Asia";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", padding: 80, background: "#0a0e1a", color: "#f2f4f8" }}>
        <div style={{ fontSize: 28, letterSpacing: 6, color: "#d9ad63", textTransform: "uppercase" }}>JJ Fund</div>
        <div style={{ fontSize: 68, marginTop: 24, lineHeight: 1.1 }}>Capital, capability and the corridor, in one AI-native partner.</div>
        <div style={{ fontSize: 30, marginTop: 32, color: "#97a2b8" }}>West to Asia: funding, venture building, GCC set-up.</div>
      </div>
    ),
    size,
  );
}
