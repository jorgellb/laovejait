import { resolveSiteUrl } from "@/config/site-url";

/**
 * Datos públicos de la empresa.
 * No inventar teléfono, email, dirección, CIF, horarios ni redes.
 * Completar los campos TODO_* cuando el propietario los confirme.
 */

export const siteUrl = resolveSiteUrl(process.env.NEXT_PUBLIC_SITE_URL);

export const companyConfig = {
  name: "La Oveja",
  copyrightYear: 2026,
  tagline:
    "Servicios informáticos e integración de inteligencia artificial para empresas del Levante Almeriense.",
  url: siteUrl,
  phone: "+34 623 808 058",
  email: "info@laoveja.es",
  /** TODO_ADDRESS */
  address: null as string | null,
  postalCode: null as string | null,
  locality: null as string | null,
  region: "Almería",
  country: "ES",
  /** TODO_CIF */
  taxId: null as string | null,
  /** TODO_COORDINATES */
  latitude: null as number | null,
  longitude: null as number | null,
  /** TODO_HOURS */
  openingHours: null as string | null,
  social: {
    linkedin: null as string | null,
    instagram: null as string | null,
    x: null as string | null,
  },
  areaServed: [
    "Vera",
    "Mojácar",
    "Garrucha",
    "Huércal-Overa",
    "Cuevas del Almanzora",
    "Pulpí",
    "Carboneras",
    "Antas",
    "Turre",
    "Bédar",
    "Lubrín",
    "Los Gallardos",
  ] as const,
} as const;

export const legalPlaceholders = {
  privacyPolicy: "Información provisional",
  legalNotice: "Información provisional",
  cookies: "Información provisional",
  dataController: "pendiente de designación",
} as const;

export function phoneHref(): string {
  return `tel:${companyConfig.phone.replace(/\s+/g, "")}`;
}

export function whatsappHref(): string {
  return `https://wa.me/${companyConfig.phone.replace(/\D/g, "")}`;
}

export function mailHref(): string {
  return `mailto:${companyConfig.email}`;
}

export function technicianHref(): string {
  return whatsappHref();
}
