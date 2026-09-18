import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SectorDetail } from "@/components/ia-sector/SectorDetail";
import { getIaSector, getIaSectors, iaSectorPath } from "@/data/ia-sectors";
import { absoluteUrl } from "@/lib/metadata";

export const dynamicParams = false;

type SectorPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getIaSectors().map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: SectorPageProps): Promise<Metadata> {
  const { slug } = await params;
  const sector = getIaSector(slug);
  if (!sector) return {};
  const path = iaSectorPath(sector.slug);
  return {
    title: { absolute: `${sector.seoTitle} | La Oveja IT` },
    description: sector.seoDescription,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "es_ES",
      url: absoluteUrl(path),
      siteName: "La Oveja IT",
      title: `${sector.seoTitle} | La Oveja IT`,
      description: sector.seoDescription,
      ...(sector.image.src
        ? {
            images: [
              {
                url: sector.image.src,
                width: sector.image.width,
                height: sector.image.height,
                alt: sector.alt,
              },
            ],
          }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: `${sector.seoTitle} | La Oveja IT`,
      description: sector.seoDescription,
    },
  };
}

export default async function IaSectorPage({ params }: SectorPageProps) {
  const { slug } = await params;
  const sector = getIaSector(slug);
  if (!sector) notFound();
  return <SectorDetail sector={sector} />;
}
