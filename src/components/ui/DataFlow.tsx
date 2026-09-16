import { cn } from "@/lib/utils";

const steps = [
  "EMPRESA",
  "DOCUMENTOS",
  "RAG / VECTOR DB",
  "LLM",
  "AGENTE IA",
  "ERP / CRM / EMAIL / API",
];

export function DataFlow({ className }: { className?: string }) {
  return (
    <ol
      className={cn(
        "grid gap-3 md:grid-cols-6",
        className,
      )}
      aria-label="Flujo de datos de IA empresarial"
    >
      {steps.map((step, index) => (
        <li key={step} className="relative">
          <div className="flex h-full flex-col border border-border bg-background-elevated px-3 py-4">
            <span className="font-mono text-[0.58rem] tracking-[0.2em] text-cyan">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="mt-3 font-mono text-xs tracking-wide text-foreground">
              {step}
            </span>
          </div>
          {index < steps.length - 1 ? (
            <span
              aria-hidden="true"
              className="pointer-events-none absolute top-1/2 -right-2 hidden h-px w-4 bg-cyan/50 md:block"
            />
          ) : null}
        </li>
      ))}
    </ol>
  );
}
