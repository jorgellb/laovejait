"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

const sources = ["DOCUMENTOS", "EMAIL", "ERP", "SQL", "APIs"];
const stages = [
  {
    id: "ingest",
    label: "INGESTION",
    body: "Entra lo que la empresa ya produce: archivos, correo, tablas y APIs. Sin inventario de fuentes no hay RAG útil.",
  },
  {
    id: "chunk",
    label: "CHUNK / PARSE",
    body: "Se parte y se estructura. Un PDF de 80 páginas no se consulta entero: se recupera el fragmento pertinente.",
  },
  {
    id: "embed",
    label: "EMBEDDINGS",
    body: "Cada fragmento se convierte en un vector. Eso permite buscar por significado, no solo por palabra exacta.",
  },
  {
    id: "vector",
    label: "VECTOR DB",
    body: "El índice vive con permisos. Quien no puede ver un contrato en el file server tampoco debería recuperarlo aquí.",
  },
  {
    id: "retrieve",
    label: "RETRIEVAL",
    body: "La pregunta recupera contexto. Si el índice está sucio o desactualizado, la respuesta también lo estará.",
  },
  {
    id: "llm",
    label: "LLM",
    body: "El modelo redacta a partir del contexto recuperado. No es una base de datos: es un compilador de lenguaje.",
  },
  {
    id: "agent",
    label: "AGENT + TOOLS",
    body: "Cuando hay que actuar —clasificar, extraer, escribir en ERP— el agente usa herramientas con límites.",
  },
  {
    id: "human",
    label: "HUMAN APPROVAL",
    body: "Las acciones con efecto operativo pasan por una persona, salvo las que estén explícitamente autorizadas.",
  },
  {
    id: "action",
    label: "ACTION",
    body: "El resultado vuelve al proceso: una respuesta, un documento, un registro o una tarea en el sistema existente.",
  },
];

export function KnowledgePipeline() {
  const [active, setActive] = useState(stages[0].id);
  const current = stages.find((item) => item.id === active) ?? stages[0];

  return (
    <div>
      <svg
        className="arch-canvas hidden h-auto w-full text-cyan lg:block"
        viewBox="0 0 920 280"
        role="img"
        aria-labelledby="pipe-title pipe-desc"
      >
        <title id="pipe-title">Pipeline de conocimiento</title>
        <desc id="pipe-desc">
          Documentos, correo, ERP y APIs se ingieren, se indexan, se consultan
          con un modelo y, si corresponde, se ejecutan tras aprobación humana.
        </desc>
        {sources.map((label, index) => (
          <g key={label} className="arch-node">
            <rect
              x={16 + index * 180}
              y={18}
              width={160}
              height={36}
              className="arch-block"
            />
            <text
              x={96 + index * 180}
              y={41}
              textAnchor="middle"
              fill="#f8fafc"
              fontSize="9"
              fontFamily="ui-monospace, monospace"
              letterSpacing="0.12em"
            >
              {label}
            </text>
          </g>
        ))}
        <path
          d="M 96 54 V 86 H 460"
          fill="none"
          stroke="currentColor"
          className="flow-line-slow"
          opacity="0.7"
        />
        {stages.map((stage, index) => {
          const x = 12 + (index % 5) * 180;
          const y = index < 5 ? 98 : 176;
          const selected = stage.id === active;
          return (
            <g
              key={stage.id}
              className={cn("arch-node", selected && "is-active")}
              tabIndex={0}
              onMouseEnter={() => setActive(stage.id)}
              onFocus={() => setActive(stage.id)}
            >
              <rect
                x={x}
                y={y}
                width={168}
                height={44}
                className={stage.id === "human" ? "arch-gate" : "arch-block"}
              />
              <text
                x={x + 84}
                y={y + 27}
                textAnchor="middle"
                fill="#f8fafc"
                fontSize="9"
                fontFamily="ui-monospace, monospace"
                letterSpacing="0.1em"
              >
                {stage.label}
              </text>
            </g>
          );
        })}
      </svg>

      <ol className="grid gap-2 lg:hidden">
        {stages.map((stage, index) => (
          <li key={stage.id}>
            <button
              type="button"
              className={cn(
                "flex min-h-11 w-full flex-col items-start border px-3 py-3 text-left",
                stage.id === active
                  ? "border-cyan bg-cyan/5"
                  : "border-border bg-background-panel",
              )}
              onClick={() => setActive(stage.id)}
              aria-pressed={stage.id === active}
            >
              <span className="font-mono text-[0.62rem] tracking-[0.16em] text-cyan">
                {String(index + 1).padStart(2, "0")} {"//"} {stage.label}
              </span>
              <span className="mt-2 text-sm text-muted">{stage.body}</span>
            </button>
          </li>
        ))}
      </ol>

      <p className="mt-4 hidden border-l border-cyan/50 pl-4 text-sm text-muted lg:block">
        <span className="font-mono text-[0.62rem] tracking-[0.16em] text-cyan">
          {current.label}
        </span>
        <span className="mt-2 block">{current.body}</span>
      </p>
    </div>
  );
}
