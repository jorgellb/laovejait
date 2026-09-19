import Link from "next/link";
import type { ButtonHTMLAttributes, MouseEventHandler, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";

type CyberButtonProps = {
  children: ReactNode;
  className?: string;
  variant?: Variant;
  href?: string;
  onClick?: MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "onClick">;

function variantClass(variant: Variant): string {
  if (variant === "primary") {
    return "border border-cyan bg-cyan text-[#031014] hover:bg-transparent hover:text-cyan";
  }
  if (variant === "secondary") {
    return "border border-cyan bg-transparent text-cyan hover:bg-cyan hover:text-[#031014]";
  }
  return "border border-border bg-transparent text-foreground hover:border-cyan hover:text-cyan";
}

export function CyberButton({
  children,
  className,
  variant = "primary",
  href,
  type = "button",
  onClick,
  ...rest
}: CyberButtonProps) {
  const styles = cn(
    "clip-tech inline-flex items-center justify-center gap-2 px-5 py-3 font-mono text-[0.72rem] font-medium tracking-[0.18em] uppercase transition-colors duration-300 disabled:cursor-not-allowed disabled:opacity-60",
    variantClass(variant),
    className,
  );

  if (href) {
    const hash = href.startsWith("#");
    const external =
      href.startsWith("http") ||
      href.startsWith("tel:") ||
      href.startsWith("mailto:") ||
      hash;
    if (external) {
      const newTab = href.startsWith("http");
      return (
        <a
          href={href}
          className={styles}
          onClick={onClick}
          {...(newTab
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} scroll className={styles} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={styles} onClick={onClick} {...rest}>
      {children}
    </button>
  );
}
