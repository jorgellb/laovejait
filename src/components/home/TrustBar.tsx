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
            className="mx-6 font-mono text-[0.7rem] tracking-[0.28em] text-muted"
          >
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}
