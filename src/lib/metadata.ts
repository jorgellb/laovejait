import type { Metadata } from "next";
import { companyConfig, siteUrl } from "@/config/company";
import type { Municipality } from "@/data/municipalities";

export const defaultTitle =
  "Servicios Informáticos e IA para Empresas | Levante Almeriense";

export const defaultDescription =
  "Mantenimiento informático, servidores, redes, ciberseguridad e integración de IA generativa para empresas en Vera, Mojácar, Huércal-Overa y el Levante Almeriense.";

export function absoluteUrl(path = "/"): string {
  if (path.startsWith("http")) return path;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${siteUrl}${normalized}`;
}

export const rootMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultTitle,
    template: `%s | ${companyConfig.legalName}`,
  },
  description: defaultDescription,
  applicationName: companyConfig.legalName,
  openGraph: {
    type: "website",
    locale: "es_ES",
    siteName: companyConfig.legalName,
    title: defaultTitle,
    description: defaultDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export function documentMetadata(
  path: string,
  title: string,
  description: string,
  options?: { absolute?: boolean },
): Metadata {
  const url = absoluteUrl(path);
  const displayTitle = options?.absolute
    ? title
    : `${title} | ${companyConfig.legalName}`;
  return {
    title: options?.absolute ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "es_ES",
      url,
      siteName: companyConfig.legalName,
      title: displayTitle,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title: displayTitle,
      description,
    },
  };
}

export function municipalityMetadata(municipality: Municipality): Metadata {
  const path = `/servicios-informaticos/${municipality.slug}`;
  return {
    title: { absolute: municipality.metaTitle },
    description: municipality.metaDescription,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "es_ES",
      url: absoluteUrl(path),
      siteName: companyConfig.legalName,
      title: municipality.metaTitle,
      description: municipality.metaDescription,
    },
    twitter: {
      card: "summary_large_image",
      title: municipality.metaTitle,
      description: municipality.metaDescription,
    },
  };
}
