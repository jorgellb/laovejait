"use client";

import { useMemo, useState } from "react";
import { coverageNodes, coverageViewBox, landPath, coastPath } from "@/data/coverage-geo";
import {
  getMunicipality,
  municipalityHref,
  type BusinessProfile,
  type Municipality,
} from "@/data/municipalities";
import { cn } from "@/lib/utils";

const profileClass: Record<BusinessProfile, string> = {
  tourism: "fill-cyan",
  industry: "fill-violet",
  mixed: "fill-foreground",
};

const profileLabel: Record<BusinessProfile, string> = {
  tourism: "Hostelería y costa",
  industry: "Industria y comercio",
  mixed: "Mixto / interior",
};

function nodeBySlug(slug: string) {
  return coverageNodes.find((item) => item.slug === slug);
}

function previewFor(municipality: Municipality) {
  return {
    title: municipality.name,
    profile: profileLabel[municipality.businessProfile],
    items: municipality.localServices.slice(0, 3),
  };
}

export function CoverageMap({
  activeSlug,
  className,
}: {
  activeSlug?: string;
  className?: string;
}) {
  const [hovered, setHovered] = useState<string | null>(null);
  const focus = hovered ?? activeSlug ?? null;

  const links = useMemo(
    () =>
      coverageNodes.flatMap((node) => {
        const municipality = getMunicipality(node.slug);
        if (!municipality) return [];
        return municipality.nearby
          .map((slug) => nodeBySlug(slug))
          .filter((target): target is (typeof coverageNodes)[number] => Boolean(target))
          .filter((target) => target.slug > node.slug)
          .map((target) => ({ from: node, to: target }));
      }),
    [],
  );

  const vera = nodeBySlug("vera");
  const previewMunicipality = focus ? getMunicipality(focus) : null;
  const preview = previewMunicipality ? previewFor(previewMunicipality) : null;
  const neighbors = previewMunicipality
    ? new Set([previewMunicipality.slug, ...previewMunicipality.nearby])
    : null;

  return (
    <div className={cn("relative", className)}>
      <svg
        className="h-auto w-full text-cyan"
        viewBox={`0 0 ${coverageViewBox.width} ${coverageViewBox.height}`}
        width={coverageViewBox.width}
        height={coverageViewBox.height}
        role="img"
        aria-label="Red territorial de cobertura en el Levante Almeriense"
      >
        <rect width={coverageViewBox.width} height={coverageViewBox.height} fill="transparent" pointerEvents="none" />
        <g className="coverage-grid" opacity="0.12" stroke="currentColor" strokeWidth="0.4" pointerEvents="none">
          {Array.from({ length: 16 }, (_, i) => (
            <line key={`gv-${i}`} x1={32 * i} y1="0" x2={32 * i} y2={coverageViewBox.height} />
          ))}
          {Array.from({ length: 16 }, (_, i) => (
            <line key={`gh-${i}`} x1="0" y1={32 * i} x2={coverageViewBox.width} y2={32 * i} />
          ))}
        </g>
        <path d={landPath} fill="rgba(0,240,255,0.05)" pointerEvents="none" />
        <path d={landPath} fill="none" stroke="rgba(148,163,184,0.35)" strokeWidth="1.2" pointerEvents="none" />
        <path d={coastPath} fill="none" stroke="currentColor" strokeWidth="2" opacity="0.7" pointerEvents="none" />
        {vera ? (
          <circle
            className="coverage-radar node-ring"
            cx={vera.x}
            cy={vera.y}
            r="70"
            fill="none"
            stroke="currentColor"
            opacity="0.2"
            pointerEvents="none"
          />
        ) : null}
        <text x="400" y="390" fill="currentColor" opacity="0.35" fontSize="9" fontFamily="ui-monospace, monospace" letterSpacing="0.18em" pointerEvents="none">
          MEDITERRÁNEO
        </text>
        {links.map(({ from, to }) => {
          const hot = neighbors
            ? neighbors.has(from.slug) && neighbors.has(to.slug)
            : false;
          const hubLink = from.slug === "vera" || to.slug === "vera";
          return (
            <line
              key={`${from.slug}-${to.slug}`}
              className={cn(
                "coverage-link",
                hubLink && "flow-line-slow",
                neighbors ? (hot ? "is-hot" : "is-dim") : null,
              )}
              x1={from.x}
              y1={from.y}
              x2={to.x}
              y2={to.y}
              stroke="currentColor"
              strokeWidth={hot ? 1.4 : 0.8}
              opacity={neighbors ? undefined : hubLink ? 0.32 : 0.16}
              pointerEvents="none"
            />
          );
        })}
        {coverageNodes.map((node) => {
          const municipality = getMunicipality(node.slug);
          if (!municipality) return null;
          const active = focus === node.slug;
          const hub = node.slug === "vera";
          const labelX = node.anchor === "end" ? node.x - 14 : node.x + 14;
          return (
            <a
              key={node.slug}
              href={municipalityHref(node.slug)}
              className={cn("coverage-node", active && "is-active")}
              aria-label={`Servicios informáticos en ${municipality.name}`}
              aria-current={activeSlug === node.slug ? "page" : undefined}
              onMouseEnter={() => setHovered(node.slug)}
              onMouseLeave={() => setHovered(null)}
              onFocus={() => setHovered(node.slug)}
              onBlur={() => setHovered(null)}
            >
              <circle cx={node.x} cy={node.y} r={hub ? 18 : 13} fill="transparent" />
              <circle
                className="node-shell"
                cx={node.x}
                cy={node.y}
                r={hub ? 12 : active ? 11 : 9}
                fill="rgba(3,7,18,0.92)"
                stroke="currentColor"
                strokeWidth={hub || active ? 1.8 : 1}
              />
              <circle
                cx={node.x}
                cy={node.y}
                r="3.2"
                className={profileClass[municipality.businessProfile]}
              />
              <text
                className="coverage-label"
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
            LEVANTE_ALMERIENSE_NETWORK
          </text>
          <text x="24" y="488" letterSpacing="0.16em">
            VERA = NODO DE REFERENCIA
          </text>
          <text x="320" y="488" letterSpacing="0.16em">
            12 NODOS LOCALES
          </text>
        </g>
      </svg>
      {preview ? (
        <div className="coverage-preview pointer-events-none absolute right-3 bottom-3 hidden max-w-[16rem] border border-cyan/40 bg-[#030712]/95 p-3 sm:block">
          <p className="font-mono text-[0.58rem] tracking-[0.16em] text-cyan">
            {preview.title.toUpperCase()}
          </p>
          <p className="mt-1 text-[0.7rem] text-muted">{preview.profile}</p>
          <ul className="mt-2 space-y-1 text-[0.7rem] text-foreground/80">
            {preview.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="mt-2 font-mono text-[0.58rem] tracking-[0.14em] text-cyan">
            VER SERVICIOS →
          </p>
        </div>
      ) : null}
    </div>
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
