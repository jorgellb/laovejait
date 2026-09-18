import { resolveSiteUrl } from "@/config/site-url";

export const siteUrl = resolveSiteUrl(process.env.NEXT_PUBLIC_SITE_URL);

export const companyConfig = {
  name: "La Oveja",
  legalName: "La Oveja IT",
  copyrightYear: 2026,
  legalUpdated: "18 de septiembre de 2026",
  tagline:
    "Servicios informáticos e integración de inteligencia artificial para empresas del Levante Almeriense.",
  url: siteUrl,
  domain: "laoveja.es",
  phone: "+34 623 808 058",
  email: "info@laoveja.es",
  taxId: "05865555A",
  address: {
    street: "Avenida Juan Sebastian Elcano 1",
    locality: "Vera",
    postalCode: "004621",
    region: "Almería",
    country: "España",
  },
  latitude: null as number | null,
  longitude: null as number | null,
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

export function formatPostalAddress(): string {
  const { street, locality, postalCode } = companyConfig.address;
  return `${street}, ${locality}, ${postalCode}`;
}

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
