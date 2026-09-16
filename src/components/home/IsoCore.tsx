"use client";

import { useReducedMotion } from "framer-motion";
import { useState } from "react";
import { GlowRing, NeuralMesh } from "@/components/graphics/overlays";

const hudNodes = [
  { label: "RAG INDEX", sub: "DOCS → VECTORES", x: "2%", y: "8%" },
  { label: "VECTOR DB", sub: "ÍNDICE PRIVADO", x: "70%", y: "6%" },
  { label: "BUSINESS DOCS", sub: "PDF · PROCEDIMIENTOS", x: "0%", y: "38%" },
  { label: "SERVER NODE", sub: "WIN · LINUX · NAS", x: "72%", y: "40%" },
  { label: "ERP / CRM", sub: "CONECTORES", x: "4%", y: "72%" },
  { label: "BACKUP SYNC", sub: "COPIA EXTERNA", x: "68%", y: "74%" },
];

export function IsoCore() {
  const reduce = useReducedMotion();
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  return (
    <div
      className="relative mx-auto aspect-square w-full max-w-[36rem] border border-border/80 bg-background-panel/40"
      onMouseMove={(event) => {
        if (reduce) return;
        const rect = event.currentTarget.getBoundingClientRect();
        const px = (event.clientX - rect.left) / rect.width - 0.5;
        const py = (event.clientY - rect.top) / rect.height - 0.5;
        setTilt({ x: py * -8, y: px * 8 });
      }}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
    >
      <span className="pointer-events-none absolute top-0 left-0 h-4 w-4 border-t border-l border-cyan/70" />
      <span className="pointer-events-none absolute top-0 right-0 h-4 w-4 border-t border-r border-cyan/70" />
      <span className="pointer-events-none absolute bottom-0 left-0 h-4 w-4 border-b border-l border-violet/50" />
      <span className="pointer-events-none absolute right-0 bottom-0 h-4 w-4 border-r border-b border-violet/50" />

      <div className="pointer-events-none absolute inset-6 text-cyan/25">
        <NeuralMesh />
      </div>
      <div className="pointer-events-none absolute inset-[18%] text-cyan/40">
        <GlowRing />
      </div>

      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full text-cyan/35"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        {hudNodes.map((node) => (
          <line
            key={node.label}
            className="flow-line"
            x1="50"
            y1="50"
            x2={Number.parseFloat(node.x) + 12}
            y2={Number.parseFloat(node.y) + 8}
            stroke="currentColor"
            strokeWidth="0.4"
          />
        ))}
      </svg>

      <div
        className="absolute inset-[22%] transition-transform duration-500 ease-out"
        style={{ perspective: "1200px" }}
      >
        <div
          className="relative h-full w-full"
          style={{
            transform: reduce
              ? "rotateX(55deg) rotateZ(-42deg)"
              : `rotateX(${55 + tilt.x}deg) rotateZ(${-42 + tilt.y}deg)`,
            transformStyle: "preserve-3d",
          }}
        >
          <div className="absolute inset-0 border border-cyan/25 bg-[linear-gradient(rgba(0,240,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(0,240,255,0.08)_1px,transparent_1px)] bg-[size:28px_28px]" />
          <div
            className="absolute inset-[12%] border border-violet/30 bg-background-panel/70"
            style={{ transform: "translateZ(28px)" }}
          />
          <div
            className="absolute inset-[28%] border border-cyan/50 bg-cyan/10 shadow-[0_0_40px_rgba(0,240,255,0.25)]"
            style={{ transform: "translateZ(64px)" }}
          />
          <div
            className="absolute top-1/2 left-1/2 size-14 -translate-x-1/2 -translate-y-1/2 bg-cyan"
            style={{ transform: "translateZ(92px)" }}
          />
        </div>
      </div>

      {hudNodes.map((node) => (
        <div
          key={node.label}
          className="absolute border border-border/80 bg-[#030712]/85 px-2 py-1.5 backdrop-blur-sm"
          style={{ left: node.x, top: node.y }}
        >
          <p className="font-mono text-[0.58rem] tracking-[0.16em] text-cyan">
            {node.label}
          </p>
          <p className="font-mono text-[0.52rem] tracking-[0.12em] text-muted">
            {node.sub}
          </p>
        </div>
      ))}

      <p className="absolute top-2 left-3 font-mono text-[0.58rem] tracking-[0.18em] text-muted">
        OPS CORE · AI NODE
      </p>
      <p className="absolute right-3 bottom-2 font-mono text-[0.58rem] tracking-[0.18em] text-muted">
        INFRAESTRUCTURA + RAG
      </p>
    </div>
  );
}
