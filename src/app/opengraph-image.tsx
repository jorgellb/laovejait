import { ImageResponse } from "next/og";
import { companyConfig } from "@/config/company";

export const alt =
  "La Oveja — servicios informáticos e IA para empresas del Levante Almeriense";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#030712",
          color: "#F8FAFC",
          padding: 72,
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 18,
            letterSpacing: 6,
            color: "#00F0FF",
            fontFamily: "monospace",
          }}
        >
          LA OVEJA · LEVANTE ALMERIENSE
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 64, fontWeight: 600, lineHeight: 1.05 }}>
            Infraestructura e IA para empresas
          </div>
          <div
            style={{
              marginTop: 24,
              fontSize: 28,
              color: "#94A3B8",
              maxWidth: 860,
            }}
          >
            {companyConfig.tagline}
          </div>
        </div>
      </div>
    ),
    size,
  );
}
