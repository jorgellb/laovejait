import { cn } from "@/lib/utils";

function GlyphFrame({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 32 32"
      className={cn("size-6", className)}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
    >
      {children}
    </svg>
  );
}

export function ServiceGlyph({
  id,
  className,
}: {
  id: string;
  className?: string;
}) {
  if (id === "inteligencia-artificial") {
    return (
      <GlyphFrame className={className}>
        <circle cx="16" cy="16" r="4" />
        <circle cx="16" cy="6" r="2" />
        <circle cx="26" cy="16" r="2" />
        <circle cx="16" cy="26" r="2" />
        <circle cx="6" cy="16" r="2" />
        <path d="M16 10 V8 M22 16 H24 M16 22 V24 M10 16 H8" />
      </GlyphFrame>
    );
  }
  if (id === "infraestructura") {
    return (
      <GlyphFrame className={className}>
        <rect x="7" y="6" width="18" height="6" />
        <rect x="7" y="14" width="18" height="6" />
        <rect x="7" y="22" width="18" height="5" />
        <path d="M11 9 H13 M11 17 H13 M11 24.5 H13" />
      </GlyphFrame>
    );
  }
  if (id === "ciberseguridad") {
    return (
      <GlyphFrame className={className}>
        <path d="M16 5 L25 9 V16 C25 22 16 27 16 27 C16 27 7 22 7 16 V9 Z" />
        <path d="M12 16 L15 19 L21 13" />
      </GlyphFrame>
    );
  }
  if (id === "redes") {
    return (
      <GlyphFrame className={className}>
        <circle cx="16" cy="16" r="3" />
        <circle cx="6" cy="8" r="2" />
        <circle cx="26" cy="8" r="2" />
        <circle cx="7" cy="24" r="2" />
        <circle cx="25" cy="24" r="2" />
        <path d="M8 9.5 L13.5 14 M24 9.5 L18.5 14 M9 22.5 L13.8 18 M23 22.5 L18.2 18" />
      </GlyphFrame>
    );
  }
  return (
    <GlyphFrame className={className}>
      <rect x="8" y="7" width="16" height="18" />
      <path d="M12 12 H20 M12 16 H18 M12 20 H16" />
    </GlyphFrame>
  );
}
