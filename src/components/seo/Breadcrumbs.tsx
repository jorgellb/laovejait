import Link from "next/link";
import { cn } from "@/lib/utils";

export type Crumb = {
  name: string;
  href?: string;
};

export function Breadcrumbs({
  items,
  className,
}: {
  items: Crumb[];
  className?: string;
}) {
  return (
    <nav aria-label="Migas de pan" className={cn("text-sm text-muted", className)}>
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, index) => {
          const last = index === items.length - 1;
          return (
            <li key={`${item.name}-${index}`} className="flex items-center gap-2">
              {item.href && !last ? (
                <Link href={item.href} className="hover:text-cyan">
                  {item.name}
                </Link>
              ) : (
                <span className={last ? "text-foreground" : undefined}>
                  {item.name}
                </span>
              )}
              {last ? null : <span aria-hidden="true">/</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
