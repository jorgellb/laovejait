import Link from "next/link";
import { FAQ } from "@/components/home/FAQ";
import { FinalCTA } from "@/components/home/FinalCTA";
import { Breadcrumbs, type Crumb } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { CyberButton } from "@/components/ui/CyberButton";
import { relatedByPage } from "@/data/site-nav";
import type { FaqItem } from "@/data/faqs";
import { cn } from "@/lib/utils";

export function PageHero({
  crumbs,
  eyebrow,
  title,
  lead,
  primaryHref,
  primaryLabel = "Solicitar diagnóstico",
  secondaryHref,
  secondaryLabel,
  diagram,
  reverse = false,
  id,
}: {
  crumbs: Crumb[];
  eyebrow: string;
  title: string;
  lead: string;
  primaryHref: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  diagram?: React.ReactNode;
  reverse?: boolean;
  id?: string;
}) {
  return (
    <article
      id={id}
      className="scroll-mt-28 border-b border-border px-4 py-12 sm:px-6"
    >
      <div
        className={cn(
          "mx-auto grid max-w-7xl items-start gap-10",
          diagram ? "lg:grid-cols-2" : false,
        )}
      >
        <div className={reverse ? "lg:order-2" : undefined}>
          <Breadcrumbs items={crumbs} />
          <p className="tech-label mt-8">{eyebrow}</p>
          <h1 className="mt-4 max-w-3xl text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted">{lead}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <CyberButton href={primaryHref}>{primaryLabel}</CyberButton>
            {secondaryHref && secondaryLabel ? (
              <CyberButton href={secondaryHref} variant="secondary">
                {secondaryLabel}
              </CyberButton>
            ) : null}
          </div>
        </div>
        {diagram ? <div className={reverse ? "lg:order-1" : undefined}>{diagram}</div> : null}
      </div>
    </article>
  );
}

export function RelatedSystems({ path }: { path: string }) {
  const items = relatedByPage[path];
  if (!items?.length) return null;
  return (
    <section className="border-b border-border px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <p className="tech-label">RELATED SYSTEMS</p>
        <h2 className="mt-3 text-2xl font-semibold">Sistemas conectados</h2>
        <p className="mt-3 max-w-2xl text-muted">
          Ninguna de estas capas se sostiene sola. Desde aquí puedes continuar
          por el siguiente componente del mismo sistema.
        </p>
        <ul className="mt-8 grid gap-3 md:grid-cols-3">
          {items.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                scroll
                className="flex min-h-16 items-center justify-between border border-border bg-background-panel px-4 py-4 text-sm hover:border-cyan hover:text-cyan"
              >
                <span>{item.label}</span>
                <span aria-hidden="true" className="font-mono text-cyan">
                  →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function PageFaqs({
  items,
  jsonLd,
  defaultService,
  origen,
  cta = "page-final",
}: {
  items: FaqItem[];
  jsonLd: Record<string, unknown>;
  defaultService?: string;
  origen: string;
  cta?: string;
}) {
  return (
    <>
      <JsonLd data={jsonLd} />
      <FAQ items={items} />
      <FinalCTA
        defaultService={defaultService}
        origen={origen}
        cta={cta}
      />
    </>
  );
}

export function CopyBlock({
  index,
  id,
  title,
  children,
}: {
  index: string;
  id?: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className="scroll-mt-28 border-b border-border px-4 py-16 sm:px-6"
    >
      <div className="mx-auto max-w-7xl">
        <p className="font-mono text-sm tracking-[0.2em] text-cyan">
          {index}
        </p>
        <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight">
          {title}
        </h2>
        <div className="mt-6 max-w-3xl space-y-4 text-muted">{children}</div>
      </div>
    </section>
  );
}

export function SplitSection({
  index,
  id,
  title,
  body,
  visual,
  reverse = false,
}: {
  index: string;
  id?: string;
  title: string;
  body: React.ReactNode;
  visual: React.ReactNode;
  reverse?: boolean;
}) {
  return (
    <section
      id={id}
      className="scroll-mt-28 border-b border-border px-4 py-16 sm:px-6"
    >
      <div
        className={cn(
          "mx-auto grid max-w-7xl items-start gap-10 lg:grid-cols-2",
        )}
      >
        <div className={reverse ? "lg:order-2" : undefined}>
          <p className="font-mono text-sm tracking-[0.2em] text-cyan">{index}</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">{title}</h2>
          <div className="mt-6 space-y-4 text-muted">{body}</div>
        </div>
        <div className={reverse ? "lg:order-1" : undefined}>{visual}</div>
      </div>
    </section>
  );
}
