import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

/**
 * Tab favicon — a compact echo of the site monogram (white tile, CO/MU,
 * accent dot). Generated at request time so it stays in sync with the brand.
 */
export default function Icon() {
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
            width: 26,
            height: 26,
            borderRadius: 5,
            background: "#f0f1f4",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            color: "#060709",
            fontSize: 9,
            fontWeight: 700,
            lineHeight: 0.9,
            letterSpacing: "-0.05em",
            fontFamily: "ui-sans-serif, system-ui, sans-serif",
          }}
        >
          <div style={{ display: "flex" }}>CO</div>
          <div style={{ display: "flex" }}>MU</div>
        </div>
        <div
          style={{
            position: "absolute",
            right: 2,
            bottom: 2,
            width: 7,
            height: 7,
            borderRadius: 999,
            background: "#8fb4e8",
            border: "2px solid #0a0b0d",
          }}
        />
      </div>
    ),
    { ...size },
  );
}
