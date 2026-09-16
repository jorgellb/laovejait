import { coverageNodes, coverageViewBox, landPath, coastPath } from "@/data/coverage-geo";
import {
  getMunicipality,
  municipalityHref,
  type BusinessProfile,
} from "@/data/municipalities";
import { cn } from "@/lib/utils";

const profileClass: Record<BusinessProfile, string> = {
  tourism: "fill-cyan",
  industry: "fill-violet",
  mixed: "fill-foreground",
};

function nodeBySlug(slug: string) {
  return coverageNodes.find((item) => item.slug === slug);
}

export function CoverageMap({
  activeSlug,
  className,
}: {
  activeSlug?: string;
  className?: string;
}) {
  const links = coverageNodes.flatMap((node) => {
    const municipality = getMunicipality(node.slug);
    if (!municipality) return [];
    return municipality.nearby
      .map((slug) => nodeBySlug(slug))
      .filter((target): target is (typeof coverageNodes)[number] => Boolean(target))
      .filter((target) => target.slug > node.slug)
      .map((target) => ({ from: node, to: target }));
  });

  return (
    <svg
      className={cn("h-auto w-full text-cyan", className)}
      viewBox={`0 0 ${coverageViewBox.width} ${coverageViewBox.height}`}
      width={coverageViewBox.width}
      height={coverageViewBox.height}
      role="img"
      aria-label="Mapa de cobertura de La Oveja en el Levante Almeriense"
    >
      <rect width={coverageViewBox.width} height={coverageViewBox.height} fill="#050914" pointerEvents="none" />
      <g opacity="0.12" stroke="currentColor" strokeWidth="0.4" pointerEvents="none">
        {Array.from({ length: 16 }, (_, i) => (
          <line key={`gv-${i}`} x1={32 * i} y1="0" x2={32 * i} y2={coverageViewBox.height} />
        ))}
        {Array.from({ length: 16 }, (_, i) => (
          <line key={`gh-${i}`} x1="0" y1={32 * i} x2={coverageViewBox.width} y2={32 * i} />
        ))}
      </g>
      <path d={landPath} fill="rgba(0,240,255,0.05)" pointerEvents="none" />
      <path
        d={landPath}
        fill="none"
        stroke="rgba(148,163,184,0.35)"
        strokeWidth="1.2"
        pointerEvents="none"
      />
      <path
        d={coastPath}
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        opacity="0.7"
        pointerEvents="none"
      />
      <text
        x="400"
        y="390"
        fill="currentColor"
        opacity="0.35"
        fontSize="9"
        fontFamily="ui-monospace, monospace"
        letterSpacing="0.18em"
        pointerEvents="none"
      >
        MEDITERRÁNEO
      </text>
      {links.map(({ from, to }) => (
        <line
          key={`${from.slug}-${to.slug}`}
          x1={from.x}
          y1={from.y}
          x2={to.x}
          y2={to.y}
          stroke="currentColor"
          strokeWidth="0.8"
          opacity="0.22"
          pointerEvents="none"
        />
      ))}
      {coverageNodes.map((node) => {
        const municipality = getMunicipality(node.slug);
        if (!municipality) return null;
        const active = activeSlug === node.slug;
        const labelX = node.anchor === "end" ? node.x - 14 : node.x + 14;
        return (
          <a
            key={node.slug}
            href={municipalityHref(node.slug)}
            className="coverage-node"
            aria-label={`Servicios informáticos en ${municipality.name}`}
            aria-current={active ? "page" : undefined}
          >
            <circle
              cx={node.x}
              cy={node.y}
              r={active ? 16 : 13}
              fill="transparent"
            />
            <circle
              cx={node.x}
              cy={node.y}
              r={active ? 11 : 9}
              fill="rgba(3,7,18,0.92)"
              stroke="currentColor"
              strokeWidth={active ? 1.8 : 1}
            />
            <circle
              cx={node.x}
              cy={node.y}
              r="3.2"
              className={profileClass[municipality.businessProfile]}
            />
            <text
              x={labelX}
              y={node.y + node.dy}
              textAnchor={node.anchor}
              fill="#f8fafc"
              fontSize="11"
              fontFamily="ui-monospace, monospace"
              letterSpacing="0.04em"
            >
              {municipality.name}
            </text>
          </a>
        );
      })}
      <g fill="currentColor" opacity="0.55" fontSize="8" fontFamily="ui-monospace, monospace" pointerEvents="none">
        <text x="24" y="22" letterSpacing="0.2em">
          GRID · LEVANTE ALMERIENSE
        </text>
        <text x="24" y="488" letterSpacing="0.16em">
          37.0N  1.8W
        </text>
        <text x="360" y="488" letterSpacing="0.16em">
          12 NODOS LOCALES
        </text>
      </g>
    </svg>
  );
}

export function CoverageLegend() {
  const items = [
    { label: "Costa / hostelería", tone: "bg-cyan" },
    { label: "Industria / comercio", tone: "bg-violet" },
    { label: "Mixto / interior", tone: "bg-foreground" },
  ];
  return (
    <ul className="flex flex-wrap gap-4 font-mono text-[0.62rem] tracking-[0.16em] text-muted uppercase">
      {items.map((item) => (
        <li key={item.label} className="flex items-center gap-2">
          <span className={cn("size-2", item.tone)} />
          {item.label}
        </li>
      ))}
    </ul>
  );
}
