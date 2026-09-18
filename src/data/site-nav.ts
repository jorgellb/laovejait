import { municipalities } from "@/data/municipalities";
import type { ServiceInquiryOption } from "@/data/services";

export type NavLink = {
  href: string;
  label: string;
};

export type NavGroup = {
  id: "servicios" | "ia" | "cobertura";
  href: string;
  label: string;
  items: NavLink[];
};

export const serviceLinks: NavLink[] = [
  { href: "/infraestructura-ti", label: "Infraestructura TI" },
  { href: "/ciberseguridad", label: "Ciberseguridad" },
  { href: "/redes-wifi-tpv", label: "Redes, Wi-Fi y TPV" },
  { href: "/soporte-tecnico", label: "Soporte técnico" },
];

export const iaLinks: NavLink[] = [
  { href: "/inteligencia-artificial", label: "IA generativa para empresas" },
  { href: "/inteligencia-artificial#rag", label: "RAG empresarial" },
  { href: "/inteligencia-artificial#agentes", label: "Agentes IA" },
  { href: "/inteligencia-artificial#automatizacion", label: "Automatización" },
  { href: "/inteligencia-artificial#integraciones", label: "Integraciones" },
  { href: "/ia-por-sector", label: "IA por sector" },
];

export const coverageLinks: NavLink[] = [
  { href: "/cobertura", label: "Levante Almeriense" },
  ...municipalities.map((item) => ({
    href: `/servicios-informaticos/${item.slug}`,
    label: item.name,
  })),
];

export const navGroups: NavGroup[] = [
  { id: "servicios", href: "/servicios", label: "Servicios", items: serviceLinks },
  {
    id: "ia",
    href: "/inteligencia-artificial",
    label: "Inteligencia Artificial",
    items: iaLinks,
  },
  { id: "cobertura", href: "/cobertura", label: "Cobertura", items: coverageLinks },
];

export const primaryNav = {
  iaPorSector: { href: "/ia-por-sector", label: "IA por sector" },
  contacto: { href: "/contacto", label: "Contacto" },
  diagnostico: { href: "/contacto", label: "Solicitar diagnóstico" },
} as const;

export const relatedByPage: Record<string, NavLink[]> = {
  "/servicios": [
    { href: "/inteligencia-artificial", label: "Inteligencia artificial" },
    { href: "/ia-por-sector", label: "IA por sector" },
    { href: "/cobertura", label: "Cobertura" },
  ],
  "/inteligencia-artificial": [
    { href: "/infraestructura-ti", label: "Infraestructura TI" },
    { href: "/ciberseguridad", label: "Ciberseguridad" },
    { href: "/ia-por-sector", label: "IA por sector" },
  ],
  "/infraestructura-ti": [
    { href: "/ciberseguridad", label: "Ciberseguridad" },
    { href: "/redes-wifi-tpv", label: "Redes y Wi-Fi" },
    { href: "/inteligencia-artificial", label: "IA privada" },
  ],
  "/ciberseguridad": [
    { href: "/infraestructura-ti", label: "Infraestructura TI" },
    { href: "/redes-wifi-tpv", label: "Redes y Wi-Fi" },
    { href: "/soporte-tecnico", label: "Soporte técnico" },
  ],
  "/redes-wifi-tpv": [
    { href: "/ciberseguridad", label: "Ciberseguridad" },
    { href: "/infraestructura-ti", label: "Infraestructura TI" },
    { href: "/soporte-tecnico", label: "Soporte técnico" },
  ],
  "/soporte-tecnico": [
    { href: "/infraestructura-ti", label: "Infraestructura TI" },
    { href: "/redes-wifi-tpv", label: "Redes y Wi-Fi" },
    { href: "/ciberseguridad", label: "Ciberseguridad" },
  ],
  "/cobertura": [
    { href: "/servicios", label: "Servicios" },
    { href: "/ia-por-sector", label: "IA por sector" },
    { href: "/soporte-tecnico", label: "Soporte técnico" },
  ],
};

export const serviceQueryMap: Record<string, ServiceInquiryOption> = {
  ia: "Proyecto de IA",
  rag: "RAG empresarial",
  automatizacion: "Automatización",
  infraestructura: "Servidores",
  ciberseguridad: "Ciberseguridad",
  redes: "Redes / Wi-Fi",
  soporte: "Soporte informático",
  backup: "Backup",
};

export function contactHref(input: {
  servicio?: keyof typeof serviceQueryMap;
  sector?: string;
  cta: string;
  origen: string;
}): string {
  const params = new URLSearchParams();
  if (input.servicio) params.set("servicio", input.servicio);
  if (input.servicio === "ia" || input.servicio === "rag") {
    params.set("motivo", "ia");
  }
  if (input.sector) params.set("sector", input.sector);
  params.set("cta", input.cta);
  params.set("origen", input.origen);
  return `/contacto?${params.toString()}`;
}

export const hubPreviewSectors = [
  "industria-ingenieria",
  "logistica-transporte",
  "agricultura-ecologica",
  "agroalimentacion",
  "retail",
  "materiales-construccion",
] as const;
