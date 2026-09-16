import { cn } from "@/lib/utils";

const steps = [
  { code: "01", title: "EMPRESA", hint: "Procesos reales" },
  { code: "02", title: "DOCUMENTOS", hint: "PDF · procedimientos" },
  { code: "03", title: "RAG / VECTOR DB", hint: "Índice privado" },
  { code: "04", title: "LLM", hint: "Local o controlado" },
  { code: "05", title: "AGENTE IA", hint: "Tareas concretas" },
  { code: "06", title: "ERP / CRM / API", hint: "Sistemas existentes" },
];

export function PipelineDiagram({ className }: { className?: string }) {
  return (
    <ol
      className={cn("grid gap-3 md:grid-cols-6", className)}
      aria-label="Flujo de datos de IA empresarial"
    >
      {steps.map((step, index) => (
        <li key={step.code} className="relative">
          <div className="flex h-full flex-col border border-border bg-background-elevated/90 px-3 py-4">
            <span className="pointer-events-none absolute top-2 right-2 size-1.5 bg-cyan/70" />
            <span className="font-mono text-[0.58rem] tracking-[0.2em] text-cyan">
              {step.code}
            </span>
            <span className="mt-3 font-mono text-xs tracking-wide text-foreground">
              {step.title}
            </span>
            <span className="mt-2 text-[0.7rem] leading-relaxed text-muted">
              {step.hint}
            </span>
          </div>
          {index < steps.length - 1 ? (
            <span
              aria-hidden="true"
              className="pointer-events-none absolute top-1/2 -right-2 hidden w-4 md:block"
            >
              <svg viewBox="0 0 16 8" className="h-2 w-4 text-cyan">
                <path
                  className="flow-line"
                  d="M0 4 H16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.4"
                />
              </svg>
            </span>
          ) : null}
        </li>
      ))}
    </ol>
  );
}
