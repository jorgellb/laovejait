import type { ReactNode } from "react";
import { FlowPath } from "@/components/graphics/DataFlow";
import { cn } from "@/lib/utils";

function Frame({
  children,
  className,
  wide = false,
}: {
  children: ReactNode;
  className?: string;
  wide?: boolean;
}) {
  return (
    <svg
      aria-hidden="true"
      viewBox={wide ? "0 0 220 72" : "0 0 180 64"}
      className={cn("h-14 w-full overflow-visible text-cyan", className)}
      fill="none"
    >
      {children}
    </svg>
  );
}

export function ServiceScene({ id }: { id: string }) {
  if (id === "inteligencia-artificial") {
    return (
      <Frame>
        <FlowPath d="M26 28 H62" />
        <FlowPath d="M78 28 H114" delay="0.45s" />
        <FlowPath d="M130 28 H158" delay="0.9s" />
        <rect x="10" y="16" width="16" height="22" stroke="currentColor" />
        <path d="M14 22 H22 M14 26 H20 M14 30 H22" stroke="currentColor" opacity="0.7" />
        <circle cx="70" cy="28" r="8" stroke="currentColor" />
        <circle cx="70" cy="28" r="2" fill="currentColor" />
        <circle cx="122" cy="28" r="8" stroke="currentColor" className="text-violet" />
        <circle cx="166" cy="28" r="6" fill="currentColor" />
        <text x="10" y="56" fill="currentColor" fontSize="7" fontFamily="ui-monospace, monospace">
          DOCUMENT → VECTOR → AI
        </text>
      </Frame>
    );
  }

  if (id === "infraestructura") {
    return (
      <Frame>
        <rect x="12" y="10" width="46" height="12" stroke="currentColor" />
        <rect x="12" y="24" width="46" height="12" stroke="currentColor" />
        <rect x="12" y="38" width="46" height="10" stroke="currentColor" />
        <circle cx="20" cy="16" r="1.6" fill="currentColor" />
        <circle cx="20" cy="30" r="1.6" fill="currentColor" />
        <FlowPath d="M58 33 H96" />
        <rect x="96" y="16" width="70" height="32" stroke="currentColor" />
        <path d="M104 26 H154 M104 34 H146 M104 42 H150" stroke="currentColor" />
      </Frame>
    );
  }

  if (id === "ciberseguridad") {
    return (
      <Frame>
        <text x="8" y="12" fill="currentColor" fontSize="6.5" fontFamily="ui-monospace, monospace">
          INTERNET
        </text>
        <FlowPath d="M28 16 V26" />
        <rect x="8" y="26" width="40" height="14" stroke="currentColor" />
        <text x="14" y="36" fill="currentColor" fontSize="7" fontFamily="ui-monospace, monospace">
          FW
        </text>
        <FlowPath d="M28 40 V50" delay="0.4s" />
        <text x="56" y="22" fill="#94a3b8" fontSize="6.5" fontFamily="ui-monospace, monospace">
          STAFF
        </text>
        <text x="56" y="36" fill="#94a3b8" fontSize="6.5" fontFamily="ui-monospace, monospace">
          TPV
        </text>
        <text x="56" y="50" fill="#94a3b8" fontSize="6.5" fontFamily="ui-monospace, monospace">
          GUEST
        </text>
        <FlowPath d="M108 16 V50" delay="0.8s" />
        <text x="118" y="20" fill="currentColor" fontSize="6.5" fontFamily="ui-monospace, monospace">
          3-2-1
        </text>
        <text x="118" y="36" fill="#94a3b8" fontSize="6.5" fontFamily="ui-monospace, monospace">
          LOCAL
        </text>
        <text x="118" y="52" fill="#94a3b8" fontSize="6.5" fontFamily="ui-monospace, monospace">
          OFFSITE
        </text>
      </Frame>
    );
  }

  if (id === "redes") {
    return (
      <Frame>
        <rect x="70" y="8" width="40" height="16" stroke="currentColor" />
        <text x="76" y="19" fill="currentColor" fontSize="7" fontFamily="ui-monospace, monospace">
          SWITCH
        </text>
        <FlowPath d="M90 24 V40" />
        <FlowPath d="M28 52 H152" delay="0.45s" />
        <circle cx="28" cy="52" r="5" stroke="currentColor" />
        <circle cx="90" cy="52" r="5" stroke="currentColor" />
        <circle cx="152" cy="52" r="5" stroke="currentColor" />
        <text x="20" y="40" fill="#94a3b8" fontSize="6" fontFamily="ui-monospace, monospace">
          AP
        </text>
        <text x="142" y="40" fill="#94a3b8" fontSize="6" fontFamily="ui-monospace, monospace">
          TPV
        </text>
      </Frame>
    );
  }

  return (
    <Frame>
      <rect x="16" y="12" width="54" height="36" stroke="currentColor" />
      <path d="M24 22 H58 M24 30 H50 M24 38 H54" stroke="currentColor" opacity="0.7" />
      <FlowPath d="M70 30 H108" />
      <circle cx="126" cy="30" r="16" stroke="currentColor" className="node-ring" />
      <circle cx="126" cy="30" r="4" fill="currentColor" />
      <text x="108" y="58" fill="currentColor" fontSize="7" fontFamily="ui-monospace, monospace">
        SCAN
      </text>
    </Frame>
  );
}

export function SectorScene({ id }: { id: "tourism" | "industry" | "mixed" }) {
  if (id === "tourism") {
    return (
      <Frame wide className="mb-5 h-16">
        <FlowPath d="M18 18 H70" />
        <FlowPath d="M86 18 H138" delay="0.4s" />
        <circle cx="18" cy="18" r="4" stroke="currentColor" />
        <circle cx="78" cy="18" r="4" stroke="currentColor" />
        <circle cx="146" cy="18" r="4" fill="currentColor" />
        <text x="160" y="21" fill="currentColor" fontSize="6.5" fontFamily="ui-monospace, monospace">
          AI
        </text>
        <FlowPath d="M18 48 H70" delay="0.2s" />
        <FlowPath d="M86 48 H138" delay="0.7s" />
        <circle cx="18" cy="48" r="4" stroke="currentColor" />
        <rect x="70" y="41" width="16" height="14" stroke="currentColor" />
        <circle cx="146" cy="48" r="4" stroke="currentColor" />
        <text x="8" y="34" fill="#94a3b8" fontSize="6" fontFamily="ui-monospace, monospace">
          BOOKING → PMS → GUEST
        </text>
        <text x="8" y="66" fill="#94a3b8" fontSize="6" fontFamily="ui-monospace, monospace">
          INTERNET → FW → STAFF / TPV
        </text>
      </Frame>
    );
  }

  if (id === "industry") {
    return (
      <Frame wide className="mb-5 h-16">
        <FlowPath d="M16 36 H204" />
        <circle cx="16" cy="36" r="4" stroke="currentColor" />
        <circle cx="64" cy="36" r="4" stroke="currentColor" />
        <circle cx="112" cy="36" r="4" stroke="currentColor" />
        <circle cx="160" cy="36" r="4" stroke="currentColor" />
        <circle cx="204" cy="36" r="4" fill="currentColor" />
        <text x="8" y="18" fill="currentColor" fontSize="6.5" fontFamily="ui-monospace, monospace">
          PDF / EMAIL / ALBARÁN
        </text>
        <text x="52" y="58" fill="#94a3b8" fontSize="6.5" fontFamily="ui-monospace, monospace">
          OCR → EXTRACTION → ERP → RAG
        </text>
      </Frame>
    );
  }

  return (
    <Frame wide className="mb-5 h-16">
      <circle cx="24" cy="32" r="5" stroke="currentColor" />
      <circle cx="72" cy="32" r="5" stroke="currentColor" />
      <circle cx="120" cy="32" r="5" stroke="currentColor" />
      <circle cx="168" cy="32" r="5" stroke="currentColor" />
      <circle cx="204" cy="32" r="5" fill="currentColor" />
      <text x="12" y="54" fill="#94a3b8" fontSize="6.5" fontFamily="ui-monospace, monospace">
        EMAIL · DOCS · CRM · BACKUP · AI
      </text>
    </Frame>
  );
}
