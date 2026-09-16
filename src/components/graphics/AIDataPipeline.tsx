import { FlowNode, FlowPath } from "@/components/graphics/DataFlow";

const steps = [
  { x: 48, label: "EMPRESA", sub: "DATOS" },
  { x: 184, label: "DOCS", sub: "PDF · MAIL" },
  { x: 320, label: "INDEX", sub: "CHUNKS" },
  { x: 456, label: "VECTOR", sub: "DB" },
  { x: 592, label: "RAG", sub: "RETRIEVAL" },
  { x: 728, label: "LLM", sub: "MODELO" },
  { x: 864, label: "AGENTE", sub: "TAREAS" },
  { x: 1000, label: "ERP/API", sub: "SISTEMAS" },
];

const satellites = ["PDF", "DOCX", "EMAIL", "ERP", "SQL", "API"];

export function AIDataPipeline() {
  return (
    <div className="relative border border-border bg-background-elevated/80 p-4 sm:p-5">
      <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="tech-label">AI_PIPELINE</p>
        <p className="font-mono text-[0.58rem] tracking-[0.16em] text-muted">
          COMPANY DATA → SISTEMAS EXISTENTES
        </p>
      </div>
      <ul className="mb-4 flex flex-wrap gap-2" aria-hidden="true">
        {satellites.map((item) => (
          <li
            key={item}
            className="border border-border px-2 py-1 font-mono text-[0.58rem] tracking-[0.16em] text-muted"
          >
            {item}
          </li>
        ))}
      </ul>
      <svg
        className="hidden h-auto w-full overflow-visible text-cyan lg:block"
        viewBox="0 0 1048 120"
        role="img"
        aria-label="Pipeline de IA: de los datos de la empresa al ERP, CRM o API"
      >
        {steps.slice(0, -1).map((step, index) => (
          <FlowPath
            key={step.label}
            d={`M${step.x + 28} 44 H${steps[index + 1].x - 28}`}
            delay={`${index * 0.25}s`}
          />
        ))}
        {steps.map((step) => (
          <FlowNode key={step.label} x={step.x} y={44} label={step.label} sub={step.sub} />
        ))}
      </svg>
      <ol className="grid gap-2 sm:grid-cols-2 lg:hidden" aria-label="Pasos del pipeline de IA">
        {steps.map((step, index) => (
          <li
            key={step.label}
            className="flex items-center gap-3 border border-border/80 px-3 py-2"
          >
            <span className="font-mono text-[0.58rem] text-cyan">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="font-mono text-xs tracking-wide">{step.label}</span>
            <span className="ml-auto text-[0.65rem] text-muted">{step.sub}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}

export function RagExplain() {
  return (
    <svg
      className="h-auto w-full text-cyan"
      viewBox="0 0 280 280"
      role="img"
      aria-label="Cómo un RAG convierte documentos en respuestas: trozos, embeddings, búsqueda y modelo"
    >
      <text x="8" y="16" fill="#94a3b8" fontSize="8" fontFamily="ui-monospace, monospace" letterSpacing="0.16em">
        RAG_LAYER
      </text>
      {[18, 40, 62, 84].map((x) => (
        <rect key={x} x={x} y="32" width="16" height="20" fill="none" stroke="currentColor" opacity="0.7" />
      ))}
      <text x="110" y="46" fill="#f8fafc" fontSize="9" fontFamily="ui-monospace, monospace">
        DOCUMENTS
      </text>
      <FlowPath d="M50 58 V86" />
      {[18, 36, 54, 72, 90].map((x) => (
        <rect key={`c-${x}`} x={x} y="92" width="14" height="8" fill="currentColor" opacity="0.45" />
      ))}
      <text x="110" y="100" fill="#94a3b8" fontSize="8" fontFamily="ui-monospace, monospace">
        CHUNKS
      </text>
      <FlowPath d="M50 108 V132" delay="0.4s" />
      {Array.from({ length: 12 }, (_, i) => (
        <circle key={i} cx={20 + i * 8} cy="144" r="1.6" fill="currentColor" />
      ))}
      <text x="130" y="148" fill="#94a3b8" fontSize="8" fontFamily="ui-monospace, monospace">
        EMBEDDINGS
      </text>
      <FlowPath d="M50 154 V182" delay="0.8s" />
      <rect x="18" y="188" width="70" height="22" fill="none" stroke="currentColor" />
      <text x="28" y="203" fill="#f8fafc" fontSize="8" fontFamily="ui-monospace, monospace">
        VECTOR DB
      </text>
      <FlowPath d="M53 210 V234" delay="1.2s" />
      <text x="18" y="252" fill="#00f0ff" fontSize="9" fontFamily="ui-monospace, monospace" letterSpacing="0.12em">
        RETRIEVAL → LLM
      </text>
    </svg>
  );
}
