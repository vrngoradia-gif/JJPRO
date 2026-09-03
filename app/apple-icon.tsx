import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#060605",
          backgroundImage:
            "radial-gradient(circle at 70% 25%, rgba(203,161,88,0.35), transparent 65%)",
        }}
      >
        <div
          style={{
            display: "flex",
            fontFamily: "Georgia, 'Times New Roman', serif",
            fontSize: 84,
            fontWeight: 600,
            letterSpacing: -2,
            color: "#e8c77e",
          }}
        >
          JJ
        </div>
      </div>
    ),
    { ...size }
  );
}
