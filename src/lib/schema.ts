import { companyConfig, siteUrl } from "@/config/company";
import type { FaqItem } from "@/data/faqs";
import { municipalities } from "@/data/municipalities";
import { offerCatalog } from "@/data/services";

type JsonObject = Record<string, unknown>;

function omitEmpty(value: JsonObject): JsonObject {
  return Object.fromEntries(
    Object.entries(value).filter(([, entry]) => {
      if (entry === null || entry === undefined || entry === "") return false;
      if (Array.isArray(entry) && entry.length === 0) return false;
      return true;
    }),
  );
}

function postalAddress(): JsonObject | undefined {
  if (
    !companyConfig.address &&
    !companyConfig.postalCode &&
    !companyConfig.locality
  ) {
    return undefined;
  }
  return omitEmpty({
    "@type": "PostalAddress",
    streetAddress: companyConfig.address,
    postalCode: companyConfig.postalCode,
    addressLocality: companyConfig.locality,
    addressRegion: companyConfig.region,
    addressCountry: companyConfig.country,
  });
}

function geo(): JsonObject | undefined {
  if (companyConfig.latitude == null || companyConfig.longitude == null) {
    return undefined;
  }
  return {
    "@type": "GeoCoordinates",
    latitude: companyConfig.latitude,
    longitude: companyConfig.longitude,
  };
}

function sameAs(): string[] {
  return Object.values(companyConfig.social).filter(
    (value): value is string => Boolean(value),
  );
}

export function localBusinessNode(): JsonObject {
  return omitEmpty({
    "@type": ["LocalBusiness", "ProfessionalService"],
    "@id": `${siteUrl}/#business`,
    name: companyConfig.name,
    url: siteUrl,
    image: `${siteUrl}/opengraph-image`,
    telephone: companyConfig.phone,
    email: companyConfig.email,
    taxID: companyConfig.taxId,
    address: postalAddress(),
    geo: geo(),
    openingHours: companyConfig.openingHours,
    sameAs: sameAs(),
    areaServed: companyConfig.areaServed.map((name) => ({
      "@type": "AdministrativeArea",
      name,
    })),
    knowsAbout: [
      "Mantenimiento informático",
      "Ciberseguridad",
      "Infraestructura TI",
      "Inteligencia artificial generativa",
      "Sistemas RAG",
      "Agentes de IA",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Servicios informáticos e IA",
      itemListElement: offerCatalog.map((name) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name,
          areaServed: companyConfig.areaServed.map((area) => area),
        },
      })),
    },
  });
}

export function websiteNode(): JsonObject {
  return {
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    url: siteUrl,
    name: companyConfig.name,
    inLanguage: "es-ES",
    publisher: { "@id": `${siteUrl}/#business` },
  };
}

export function faqNode(faqs: FaqItem[], id = `${siteUrl}/#faq`): JsonObject {
  return {
    "@type": "FAQPage",
    "@id": id,
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function breadcrumbNode(
  items: Array<{ name: string; path: string }>,
): JsonObject {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteUrl}${item.path}`,
    })),
  };
}

export function municipalityServiceNode(slug: string, name: string): JsonObject {
  return {
    "@type": "Service",
    "@id": `${siteUrl}/servicios-informaticos/${slug}#service`,
    name: `Mantenimiento informático e inteligencia artificial en ${name}`,
    url: `${siteUrl}/servicios-informaticos/${slug}`,
    provider: { "@id": `${siteUrl}/#business` },
    areaServed: {
      "@type": "City",
      name,
    },
    serviceType: [
      "Mantenimiento informático",
      "Soporte técnico",
      "Ciberseguridad",
      "Inteligencia artificial generativa",
    ],
  };
}

export function siteGraph(): JsonObject {
  return {
    "@context": "https://schema.org",
    "@graph": [localBusinessNode(), websiteNode()],
  };
}

export function homeGraph(faqs: FaqItem[]): JsonObject {
  return {
    "@context": "https://schema.org",
    "@graph": [faqNode(faqs), municipalityIndexList()],
  };
}

export function municipalityGraph(
  slug: string,
  name: string,
  faqs: FaqItem[],
): JsonObject {
  return {
    "@context": "https://schema.org",
    "@graph": [
      localBusinessNode(),
      municipalityServiceNode(slug, name),
      faqNode(faqs, `${siteUrl}/servicios-informaticos/${slug}#faq`),
      breadcrumbNode([
        { name: "Inicio", path: "/" },
        { name: "Servicios informáticos", path: "/#servicios" },
        { name: name, path: `/servicios-informaticos/${slug}` },
      ]),
    ],
  };
}

export function municipalityIndexList(): JsonObject {
  return {
    "@type": "ItemList",
    name: "Servicio informático en el Levante Almeriense",
    itemListElement: municipalities.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: `Servicios informáticos en ${item.name}`,
      url: `${siteUrl}/servicios-informaticos/${item.slug}`,
    })),
  };
}
