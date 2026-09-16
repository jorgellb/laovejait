import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export type ServiceCardProps = {
  index: string;
  title: string;
  description: string;
  icon?: ReactNode;
  scene?: ReactNode;
  status?: string;
  features?: string[];
  className?: string;
  spec?: string;
};

export function ServiceCard({
  index,
  title,
  description,
  icon,
  scene,
  status,
  features,
  className,
  spec,
}: ServiceCardProps) {
  return (
    <article
      className={cn(
        "service-card group relative flex h-full flex-col overflow-hidden border border-border bg-background-panel p-6 transition-[background,color,transform,border-color] duration-300",
        className,
      )}
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-8 -bottom-10 h-32 w-32 rotate-12 bg-cyan/10"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-0 h-px w-16 bg-cyan/50"
      />
      <div className="relative flex items-start justify-between gap-4">
        <span className="service-index font-mono text-sm tracking-[0.2em] text-cyan">
          {index}
        </span>
        {status ? (
          <span className="scene-status font-mono text-[0.58rem] tracking-[0.16em] text-cyan">
            {status}
          </span>
        ) : icon ? (
          <span className="service-icon text-cyan">{icon}</span>
        ) : null}
      </div>
      {scene ? (
        <div className="service-scene relative mt-5" aria-hidden="true">
          {scene}
        </div>
      ) : null}
      <h3 className="relative mt-5 text-xl font-semibold tracking-tight">
        {title}
      </h3>
      <p className="relative mt-3 text-sm leading-relaxed text-muted">
        {description}
      </p>
      {features?.length ? (
        <ul className="relative mt-5 space-y-2 text-sm text-muted">
          {features.map((feature) => (
            <li key={feature} className="flex gap-2">
              <span className="mt-1.5 size-1 shrink-0 bg-cyan" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      ) : null}
      <div className="relative mt-auto flex items-center justify-between gap-3 pt-6">
        <span className="h-px flex-1 bg-border" />
        <span className="flex gap-1" aria-hidden="true">
          <span className="h-3 w-8 bg-cyan/30" />
          <span className="h-3 w-4 bg-cyan/60" />
          <span className="pulse-dot h-3 w-2 bg-cyan" />
        </span>
        {spec ? (
          <span className="font-mono text-[0.58rem] tracking-[0.16em] text-cyan uppercase">
            {spec}
          </span>
        ) : null}
      </div>
    </article>
  );
}
