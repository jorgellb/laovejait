"use client";

import { useReducedMotion } from "framer-motion";
import { useState } from "react";

const nodes = [
  { label: "LLM_NODE", x: "42%", y: "34%", tone: "cyan" },
  { label: "RAG_INDEX", x: "18%", y: "18%", tone: "violet" },
  { label: "VECTOR_DB", x: "68%", y: "16%", tone: "cyan" },
  { label: "ERP_API", x: "12%", y: "62%", tone: "muted" },
  { label: "BACKUP_NODE", x: "74%", y: "58%", tone: "muted" },
  { label: "FIREWALL", x: "46%", y: "78%", tone: "violet" },
];

export function IsoCore() {
  const reduce = useReducedMotion();
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  return (
    <div
      className="relative mx-auto aspect-square w-full max-w-[34rem]"
      onMouseMove={(event) => {
        if (reduce) return;
        const rect = event.currentTarget.getBoundingClientRect();
        const px = (event.clientX - rect.left) / rect.width - 0.5;
        const py = (event.clientY - rect.top) / rect.height - 0.5;
        setTilt({ x: py * -8, y: px * 8 });
      }}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
    >
      <div
        className="absolute inset-[8%] transition-transform duration-500 ease-out"
        style={{
          perspective: "1200px",
        }}
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
            className="absolute top-1/2 left-1/2 size-16 -translate-x-1/2 -translate-y-1/2 bg-cyan"
            style={{ transform: "translateZ(92px)" }}
          />
          <div
            className="absolute top-[8%] right-[8%] h-24 w-10 border border-border bg-background-elevated"
            style={{ transform: "translateZ(48px)" }}
          >
            <span className="absolute inset-x-1 top-2 h-1 bg-cyan/60" />
            <span className="absolute inset-x-1 top-5 h-1 bg-cyan/30" />
            <span className="absolute inset-x-1 top-8 h-1 bg-violet/50" />
          </div>
          {nodes.map((node) => (
            <div
              key={node.label}
              className="absolute"
              style={{
                left: node.x,
                top: node.y,
                transform: "translateZ(76px)",
              }}
            >
              <span
                className={
                  node.tone === "cyan"
                    ? "block size-2.5 bg-cyan"
                    : node.tone === "violet"
                      ? "block size-2.5 bg-violet"
                      : "block size-2.5 bg-muted"
                }
              />
              <span className="mt-1 block font-mono text-[0.55rem] tracking-[0.14em] text-cyan whitespace-nowrap">
                {node.label}
              </span>
            </div>
          ))}
        </div>
      </div>
      <p className="absolute top-2 left-2 font-mono text-[0.58rem] tracking-[0.18em] text-muted">
        GRID 04.12 · NODE-A
      </p>
      <p className="absolute right-2 bottom-2 font-mono text-[0.58rem] tracking-[0.18em] text-muted">
        ISO CORE {"//"} ABSTRACT
      </p>
    </div>
  );
}
