import { ImageResponse } from "next/og";
export const alt = "Phoenix Global - global sourcing, local insight, trusted delivery";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function OgImage() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", padding: 80, background: "#fbf7f0", color: "#1c1815" }}>
        <div style={{ fontSize: 28, letterSpacing: 6, color: "#c2531a", textTransform: "uppercase" }}>Phoenix Global</div>
        <div style={{ fontSize: 76, marginTop: 24, lineHeight: 1.1 }}>Global sourcing. Local insight. Trusted delivery.</div>
        <div style={{ fontSize: 30, marginTop: 32, color: "#6f655a" }}>Textiles and commodities from India, China and Latin America.</div>
      </div>
    ),
    size,
  );
}
