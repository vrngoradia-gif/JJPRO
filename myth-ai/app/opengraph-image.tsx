import { ImageResponse } from "next/og";

export const alt = "MYTH AI India - AI design studio for fashion and textiles";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", padding: 80, background: "#faf7f1", color: "#1e1911" }}>
        <div style={{ fontSize: 28, letterSpacing: 6, color: "#a9812f", textTransform: "uppercase" }}>MYTH AI India</div>
        <div style={{ fontSize: 72, marginTop: 24, lineHeight: 1.1 }}>India&apos;s design work, done. By us.</div>
        <div style={{ fontSize: 30, marginTop: 32, color: "#7d7364" }}>Prints, repeats, 3D garments and collections.</div>
      </div>
    ),
    size,
  );
}
