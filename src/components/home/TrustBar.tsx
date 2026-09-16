const items = [
  "IA PRIVADA",
  "RAG EMPRESARIAL",
  "SERVIDORES",
  "CIBERSEGURIDAD",
  "REDES",
  "BACKUPS",
  "SOPORTE LOCAL",
  "AUTOMATIZACIÓN",
];

export function TrustBar() {
  const sequence = [...items, ...items];
  return (
    <section
      aria-label="Capacidades"
      className="overflow-hidden border-b border-border bg-background-secondary"
    >
      <div className="marquee-track py-4">
        {sequence.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="mx-5 inline-flex items-center gap-5 font-mono text-[0.7rem] tracking-[0.28em] text-muted"
          >
            <span className="font-mono text-cyan/35" aria-hidden="true">
              [
            </span>
            <span className="size-1.5 bg-cyan/70" aria-hidden="true" />
            {item}
            <span className="font-mono text-cyan/35" aria-hidden="true">
              ]
            </span>
          </span>
        ))}
      </div>
    </section>
  );
}
