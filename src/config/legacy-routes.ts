/**
 * Legacy URL policy for the previous digital-agency site on this domain.
 *
 * A) Semantic equivalent → 308 in `permanentRedirects` (next.config).
 * B) Partially related → only used when the destination is honestly the
 *    current contact, legal or services hub. Never map WordPress/Web3
 *    URLs to IA pages just to keep traffic.
 * C) Withdrawn services with no equivalent → HTTP 410 via `src/proxy.ts`.
 *
 * `/servicios` (exact) is now the live services hub. `/servicios/*` remains
 * C: those slugs were agency offers and must not collide with
 * `/servicios-informaticos/*`.
 */
export const permanentRedirects = [
  { source: "/contact", destination: "/contacto" },
  { source: "/contactanos", destination: "/contacto" },
  { source: "/privacy", destination: "/privacidad" },
  { source: "/privacy-policy", destination: "/privacidad" },
  { source: "/politica-de-privacidad", destination: "/privacidad" },
  { source: "/legal", destination: "/aviso-legal" },
  { source: "/aviso", destination: "/aviso-legal" },
  { source: "/legal-notice", destination: "/aviso-legal" },
  { source: "/politica-de-cookies", destination: "/cookies" },
  { source: "/cookie-policy", destination: "/cookies" },
  { source: "/terms", destination: "/terminos-y-condiciones" },
  { source: "/terminos", destination: "/terminos-y-condiciones" },
  { source: "/condiciones", destination: "/terminos-y-condiciones" },
  { source: "/home", destination: "/" },
  { source: "/index.html", destination: "/" },
] as const;

const goneExact = new Set([
  "/agencia",
  "/wordpress",
  "/diseno-web",
  "/diseno",
  "/desarrollo-web",
  "/desarrollo",
  "/ecommerce",
  "/e-commerce",
  "/tienda-online",
  "/web3",
  "/seo",
  "/portfolio",
  "/portafolio",
  "/proyectos",
  "/presupuesto",
  "/presupuesto-web",
  "/frontend",
  "/backend",
  "/performance",
  "/performance-web",
  "/desarrollo-api",
  "/blog",
  "/sobre-nosotros",
  "/quien-somos",
  "/quienes-somos",
  "/equipo",
  "/works",
  "/work",
  "/wp-admin",
  "/wp-login.php",
]);

const gonePrefixes = [
  "/servicios/",
  "/blog/",
  "/agencia/",
  "/portfolio/",
  "/proyectos/",
  "/wp-content/",
  "/wp-includes/",
  "/wp-json/",
];

export function normalizePath(pathname: string): string {
  if (!pathname) return "/";
  const trimmed = pathname.replace(/\/+$/, "");
  return trimmed === "" ? "/" : trimmed;
}

export function isGonePath(pathname: string): boolean {
  const path = normalizePath(pathname);
  if (
    path === "/servicios" ||
    path === "/servicios-informaticos" ||
    path.startsWith("/servicios-informaticos/")
  ) {
    return false;
  }
  if (goneExact.has(path)) return true;
  return gonePrefixes.some((prefix) => path.startsWith(prefix));
}

export function redirectDestination(pathname: string): string | undefined {
  const path = normalizePath(pathname);
  return permanentRedirects.find((item) => item.source === path)?.destination;
}
