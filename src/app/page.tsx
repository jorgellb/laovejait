import { Advantages } from "@/components/home/Advantages";
import { AIArchitecture } from "@/components/home/AIArchitecture";
import { Coverage } from "@/components/home/Coverage";
import { FAQ } from "@/components/home/FAQ";
import { FinalCTA } from "@/components/home/FinalCTA";
import { Hero } from "@/components/home/Hero";
import { Industries } from "@/components/home/Industries";
import { Process } from "@/components/home/Process";
import { ServiceGrid } from "@/components/home/ServiceGrid";
import { TrustBar } from "@/components/home/TrustBar";
import { JsonLd } from "@/components/seo/JsonLd";
import { homeFaqs } from "@/data/faqs";
import { homeGraph } from "@/lib/schema";

export default function HomePage() {
  return (
    <>
      <JsonLd data={homeGraph(homeFaqs)} />
      <Hero />
      <TrustBar />
      <ServiceGrid />
      <AIArchitecture />
      <Advantages />
      <Industries />
      <Coverage />
      <Process />
      <FAQ items={homeFaqs} />
      <FinalCTA />
    </>
  );
}
