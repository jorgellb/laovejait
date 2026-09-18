import type { Metadata } from "next";
import { AIArchitecture } from "@/components/home/AIArchitecture";
import { Capabilities } from "@/components/home/Capabilities";
import { Coverage } from "@/components/home/Coverage";
import { FAQ } from "@/components/home/FAQ";
import { FinalCTA } from "@/components/home/FinalCTA";
import { Hero } from "@/components/home/Hero";
import { Interconnect } from "@/components/home/Interconnect";
import { Process } from "@/components/home/Process";
import { SectorPreview } from "@/components/home/SectorPreview";
import { SecurityTeaser } from "@/components/home/SecurityTeaser";
import { TrustBar } from "@/components/home/TrustBar";
import { JsonLd } from "@/components/seo/JsonLd";
import { siteUrl } from "@/config/company";
import { homeFaqs } from "@/data/faqs";
import { homeGraph } from "@/lib/schema";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  openGraph: { url: siteUrl },
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={homeGraph(homeFaqs)} />
      <Hero />
      <TrustBar />
      <Capabilities />
      <Interconnect />
      <AIArchitecture />
      <SectorPreview />
      <SecurityTeaser />
      <Coverage />
      <Process />
      <FAQ items={homeFaqs} />
      <FinalCTA origen="/" cta="home-final" />
    </>
  );
}
