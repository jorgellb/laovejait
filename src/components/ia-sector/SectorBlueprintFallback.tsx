import type { IaSector } from "@/data/ia-sectors";

export function SectorBlueprintFallback({
  sector,
  className,
}: {
  sector: IaSector;
  className?: string;
}) {
  const modules = sector.solutions.slice(0, 8);
  const sources = sector.dataSources.slice(0, 6);

  return (
    <svg
      viewBox="0 0 1672 941"
      role="img"
      aria-hidden="true"
      className={className}
    >
      <rect width="1672" height="941" fill="#050914" />
      <rect
        x="24"
        y="24"
        width="1624"
        height="893"
        fill="#0b1120"
        stroke="rgba(0,240,255,0.22)"
      />
      <text
        x="56"
        y="72"
        fill="#00f0ff"
        fontFamily="ui-monospace, monospace"
        fontSize="18"
        letterSpacing="4"
      >
        MODELO SECTORIAL // {String(sector.hubOrder).padStart(2, "0")}
      </text>
      <text x="56" y="118" fill="#f8fafc" fontSize="36" fontWeight="600">
        {sector.name}
      </text>
      <text x="56" y="156" fill="#94a3b8" fontSize="18">
        Datos → IA → decisión supervisada → acción en sistemas existentes
      </text>

      {sources.map((source, index) => (
        <g key={source} transform={`translate(56 ${198 + index * 44})`}>
          <rect
            width="280"
            height="36"
            fill="#080d18"
            stroke="rgba(148,163,184,0.2)"
          />
          <text x="14" y="24" fill="#94a3b8" fontSize="14">
            {source}
          </text>
        </g>
      ))}

      <rect
        x="686"
        y="330"
        width="300"
        height="220"
        fill="#080d18"
        stroke="#00f0ff"
      />
      <text
        x="836"
        y="420"
        textAnchor="middle"
        fill="#00f0ff"
        fontFamily="ui-monospace, monospace"
        fontSize="18"
        letterSpacing="6"
      >
        CAPA IA
      </text>
      <text
        x="836"
        y="468"
        textAnchor="middle"
        fill="#f8fafc"
        fontSize="28"
        fontWeight="600"
      >
        Analiza · propone
      </text>
      <text x="836" y="504" textAnchor="middle" fill="#94a3b8" fontSize="16">
        Una persona aprueba
      </text>

      {modules.map((module, index) => {
        const column = index < 4 ? 0 : 1;
        const row = index % 4;
        const x = column === 0 ? 380 : 1030;
        const y = 210 + row * 118;
        return (
          <g key={module.title} transform={`translate(${x} ${y})`}>
            <rect
              width="260"
              height="96"
              fill="#080d18"
              stroke="rgba(0,240,255,0.2)"
            />
            <text
              x="16"
              y="34"
              fill="#00f0ff"
              fontFamily="ui-monospace, monospace"
              fontSize="13"
            >
              {String(index + 1).padStart(2, "0")}
            </text>
            <text x="16" y="64" fill="#f8fafc" fontSize="18">
              {module.title}
            </text>
          </g>
        );
      })}

      {["DATOS", "IA", "DECISIÓN", "ACCIÓN", "RESULTADO"].map((step, index) => (
        <g key={step} transform={`translate(${56 + index * 318} 820)`}>
          <rect
            width="300"
            height="64"
            fill="#080d18"
            stroke="rgba(191,0,255,0.28)"
          />
          <text
            x="20"
            y="40"
            fill="#00f0ff"
            fontFamily="ui-monospace, monospace"
            fontSize="16"
            letterSpacing="3"
          >
            {step}
          </text>
        </g>
      ))}
    </svg>
  );
}
