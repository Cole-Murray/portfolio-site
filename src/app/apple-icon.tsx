import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

/** Home-screen / bookmark mark — same monogram, scaled for touch icons. */
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
          background: "#0a0b0d",
          position: "relative",
        }}
      >
        <div
          style={{
            width: 132,
            height: 132,
            borderRadius: 28,
            background: "#f0f1f4",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            color: "#060709",
            fontSize: 44,
            fontWeight: 700,
            lineHeight: 0.9,
            letterSpacing: "-0.04em",
            fontFamily: "ui-sans-serif, system-ui, sans-serif",
          }}
        >
          <div style={{ display: "flex" }}>CO</div>
          <div style={{ display: "flex" }}>MU</div>
        </div>
        <div
          style={{
            position: "absolute",
            right: 22,
            bottom: 22,
            width: 28,
            height: 28,
            borderRadius: 999,
            background: "#8fb4e8",
            border: "6px solid #0a0b0d",
          }}
        />
      </div>
    ),
    { ...size },
  );
}
