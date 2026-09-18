"use client";

import { useReducedMotion } from "framer-motion";
import { useState } from "react";
import { FlowNode, FlowPath } from "@/components/graphics/DataFlow";

export function IsoCore() {
  const reduce = useReducedMotion();
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  return (
    <div
      className="infra-core relative mx-auto w-full max-w-[38rem] overflow-visible border border-border/80 bg-background-panel/50"
      onMouseMove={(event) => {
        if (reduce) return;
        const rect = event.currentTarget.getBoundingClientRect();
        const px = (event.clientX - rect.left) / rect.width - 0.5;
        const py = (event.clientY - rect.top) / rect.height - 0.5;
        setTilt({ x: py * -4, y: px * 4 });
      }}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
    >
      <span className="pointer-events-none absolute top-0 left-0 h-4 w-4 border-t border-l border-cyan/70" />
      <span className="pointer-events-none absolute top-0 right-0 h-4 w-4 border-t border-r border-cyan/70" />
      <span className="pointer-events-none absolute bottom-0 left-0 h-4 w-4 border-b border-l border-violet/50" />
      <span className="pointer-events-none absolute right-0 bottom-0 h-4 w-4 border-r border-b border-violet/50" />
      <p className="absolute top-2 left-3 font-mono text-[0.58rem] tracking-[0.18em] text-muted">
        INFRASTRUCTURE INTELLIGENCE CORE
      </p>
      <p className="absolute right-3 top-2 hidden font-mono text-[0.58rem] tracking-[0.18em] text-muted sm:block">
        NODE_01
      </p>

      <div
        className="px-1 pt-9 transition-transform duration-500 ease-out"
        style={{
          transform: `perspective(1200px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        }}
      >
        <svg
          className="hidden h-auto w-full text-cyan md:block"
          viewBox="0 0 560 540"
          role="img"
          aria-label="Arquitectura: servidor, red, datos, RAG, modelo y automatización conectados a un núcleo central"
        >
          <g opacity="0.1" stroke="currentColor" strokeWidth="0.4">
            {Array.from({ length: 8 }, (_, i) => (
              <line key={`gv-${i}`} x1={70 * i} y1="12" x2={70 * i} y2="528" />
            ))}
            {Array.from({ length: 7 }, (_, i) => (
              <line key={`gh-${i}`} x1="16" y1={70 * i + 16} x2="544" y2={70 * i + 16} />
            ))}
          </g>
          <circle cx="280" cy="258" r="92" fill="rgba(0,240,255,0.05)" />
          <circle cx="280" cy="258" r="48" fill="rgba(191,0,255,0.05)" />
          <FlowPath d="M280 51 V119" />
          <FlowPath d="M280 141 V236" delay="0.4s" />
          <FlowPath d="M291 130 H439" delay="0.8s" />
          <FlowPath d="M450 141 C450 198 332 232 302 246" delay="1.2s" />
          <FlowPath d="M91 250 H258" delay="0.2s" />
          <FlowPath d="M302 258 H469" delay="0.6s" />
          <FlowPath d="M80 261 V379" delay="1s" />
          <FlowPath d="M280 282 V379" delay="1.4s" />
          <FlowPath d="M480 261 V379" delay="0.9s" />
          <FlowPath d="M269 390 H191" delay="1.6s" />
          <FlowNode x={280} y={40} label="DATA" sub="DOCUMENTS" />
          <FlowNode x={280} y={130} label="RAG_INDEX" sub="RETRIEVAL" accent />
          <FlowNode x={450} y={130} label="VECTOR_DB" sub="ÍNDICE" />
          <FlowNode x={80} y={250} label="SERVER" sub="WIN · LINUX" />
          <FlowNode x={280} y={258} label="AI_CORE" sub="LLM · AUTO" hub />
          <FlowNode x={480} y={250} label="ERP_API" sub="CONECTORES" />
          <FlowNode x={80} y={390} label="BACKUP" sub="COPIA EXTERNA" />
          <FlowNode x={280} y={390} label="FIREWALL" sub="PERÍMETRO" accent />
          <FlowNode x={480} y={390} label="CRM" sub="EMAIL · API" />
          <FlowNode x={180} y={478} label="NETWORK" sub="VLAN · TPV" />
          <FlowNode x={380} y={478} label="AGENT" sub="TOOLS" accent />
        </svg>

        <svg
          className="h-auto w-full text-cyan md:hidden"
          viewBox="0 0 320 450"
          role="img"
          aria-label="Flujo simplificado de infraestructura e IA"
        >
          <FlowPath d="M160 41 V89" />
          <FlowPath d="M160 111 V188" delay="0.5s" />
          <FlowPath d="M71 210 H138" delay="0.2s" />
          <FlowPath d="M182 210 H249" delay="0.8s" />
          <FlowPath d="M160 232 V304" delay="1.1s" />
          <FlowPath d="M60 221 V368" delay="0.4s" />
          <FlowNode x={160} y={30} label="DATA" />
          <FlowNode x={160} y={100} label="RAG / VECTOR" accent />
          <FlowNode x={60} y={210} label="SERVER" />
          <FlowNode x={160} y={210} label="AI_CORE" hub />
          <FlowNode x={260} y={210} label="ERP" />
          <FlowNode x={160} y={320} label="FIREWALL" accent />
          <FlowNode x={60} y={380} label="BACKUP" />
          <FlowNode x={260} y={380} label="NETWORK" />
        </svg>
      </div>
      <p className="px-3 pb-3 font-mono text-[0.58rem] tracking-[0.16em] text-muted">
        SERVER → NETWORK → DATA → VECTOR / RAG → LLM → AGENT → ERP / API
      </p>
    </div>
  );
}
