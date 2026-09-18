import type { ReactNode } from "react";

export function LegalDocument({
  eyebrow,
  title,
  updated,
  children,
}: {
  eyebrow: string;
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <p className="tech-label">{eyebrow}</p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight">{title}</h1>
      <p className="mt-3 text-sm text-muted">Última actualización: {updated}</p>
      <div className="legal-copy mt-10 space-y-5 text-sm leading-relaxed text-muted sm:text-base [&_a]:text-cyan [&_a]:underline-offset-2 [&_a]:hover:underline [&_h2]:mt-10 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-foreground [&_h2]:first:mt-0 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5">
        {children}
      </div>
    </article>
  );
}
