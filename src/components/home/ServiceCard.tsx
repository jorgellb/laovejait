import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export type ServiceCardProps = {
  index: string;
  title: string;
  description: string;
  icon?: ReactNode;
  features?: string[];
  className?: string;
};

export function ServiceCard({
  index,
  title,
  description,
  icon,
  features,
  className,
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
      <div className="relative flex items-start justify-between gap-4">
        <span className="service-index font-mono text-sm tracking-[0.2em] text-cyan">
          {index}
        </span>
        {icon ? (
          <span className="service-icon text-cyan">{icon}</span>
        ) : null}
      </div>
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
    </article>
  );
}
