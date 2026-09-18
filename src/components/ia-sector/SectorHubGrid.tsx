"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { SectorCardMedia } from "@/components/ia-sector/SectorBlueprintMedia";
import {
  getIaSectors,
  iaSectorPath,
  sectorFilterIds,
  sectorFilterLabels,
  type SectorFilterId,
} from "@/data/ia-sectors";
import { cn } from "@/lib/utils";

const sectors = getIaSectors();

export function SectorHubGrid() {
  const [filter, setFilter] = useState<SectorFilterId>("todos");

  const visible = useMemo(
    () =>
      filter === "todos"
        ? sectors
        : sectors.filter((item) => item.filter === filter),
    [filter],
  );

  return (
    <div>
      <div
        className="flex flex-wrap gap-2"
        role="group"
        aria-label="Filtrar sectores"
      >
        {sectorFilterIds.map((id) => {
          const pressed = filter === id;
          return (
            <button
              key={id}
              type="button"
              aria-pressed={pressed}
              onClick={() => setFilter(id)}
              className={cn(
                "border px-3 py-2 font-mono text-[0.62rem] tracking-[0.16em] uppercase transition-colors duration-200",
                pressed
                  ? "border-cyan bg-cyan/10 text-cyan"
                  : "border-border text-muted hover:border-cyan hover:text-cyan",
              )}
            >
              {sectorFilterLabels[id]}
            </button>
          );
        })}
      </div>

      <ul className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {sectors.map((sector) => {
          const match = visible.includes(sector);
          return (
            <li
              key={sector.slug}
              className={cn(!match && "hidden")}
              data-sector={sector.slug}
            >
              <Link
                href={iaSectorPath(sector.slug)}
                scroll
                className="sector-card group flex h-full flex-col border border-border bg-background-panel/80"
              >
                <SectorCardMedia sector={sector} />
                <div className="flex flex-1 flex-col px-4 py-4">
                  <p className="font-mono text-[0.62rem] tracking-[0.18em] text-cyan">
                    {String(sector.hubOrder).padStart(2, "0")}
                    {" // "}
                    {sector.name.toUpperCase()}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {sector.hubPhrase}
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {sector.tags.map((tag) => (
                      <li
                        key={tag}
                        className="border border-border px-2 py-1 font-mono text-[0.58rem] tracking-[0.14em] text-muted uppercase"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-5 font-mono text-[0.62rem] tracking-[0.16em] text-cyan uppercase">
                    Explorar modelo →
                  </p>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
