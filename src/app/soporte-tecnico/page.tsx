import type { Metadata } from "next";
import {
  DiagramFigure,
  IncidentPipeline,
  VerticalSteps,
} from "@/components/graphics/system-diagrams";
import {
  CopyBlock,
  PageFaqs,
  PageHero,
  RelatedSystems,
} from "@/components/pages/PageChrome";
import { supportFaqs } from "@/data/faqs";
import { contactHref } from "@/data/site-nav";
import { documentMetadata } from "@/lib/metadata";
import { servicePageGraph } from "@/lib/schema";

const path = "/soporte-tecnico";

export const metadata: Metadata = documentMetadata(
  path,
  "Soporte Informático para Empresas | Levante Almeriense | La Oveja",
  "Soporte remoto y presencial para PCs, servidores, redes y software. Diagnóstico de causa raíz, documentación y mantenimiento en el Levante Almeriense.",
  { absolute: true },
);

export default function SoportePage() {
  const contact = contactHref({
    servicio: "soporte",
    cta: "soporte-hero",
    origen: path,
  });
  return (
    <>
      <PageHero
        crumbs={[
          { name: "Inicio", href: "/" },
          { name: "Servicios", href: "/servicios" },
          { name: "Soporte técnico" },
        ]}
        eyebrow="COMMAND CENTER"
        title="Soporte técnico que entiende el sistema completo."
        lead="Remoto cuando basta; presencial en la comarca cuando hay que tocar rack, cableado o un equipo que no se diagnostica a distancia. El ticket no acaba en el apaño."
        primaryHref={contact}
        secondaryHref="#pipeline"
        secondaryLabel="Ver pipeline"
        diagram={
          <DiagramFigure
            title="INCIDENT PIPELINE"
            caption="Detectar, clasificar, diagnosticar, resolver, documentar y prevenir. El patrón importa más que el clic de cierre."
          >
            <IncidentPipeline />
            <VerticalSteps
              className="mt-4 md:hidden"
              items={[
                "Detectar",
                "Clasificar",
                "Diagnosticar",
                "Resolver",
                "Documentar",
                "Prevenir",
              ]}
            />
          </DiagramFigure>
        }
      />

      <CopyBlock index="01" id="pipeline" title="Incidencia y causa raíz">
        <p>
          Un PC que no imprime puede ser el driver, el servidor, la VLAN o un
          permiso. Por eso el soporte mira el sistema: puesto, servidor, red y
          software de gestión. Cerrar el síntoma sin dejar rastro garantiza que
          el lunes vuelva el mismo corte.
        </p>
        <p>
          Documentamos lo resuelto. Cuando el patrón es claro —actualización,
          disco, Wi-Fi, copia— pasa a mantenimiento. El objetivo no es acumular
          tickets: es reducir los que se repiten.
        </p>
      </CopyBlock>

      <CopyBlock index="02" title="Remoto y presencial">
        <p>
          El diagnóstico inicial suele ser remoto. La visita se programa en el
          Levante Almeriense cuando hay que intervenir in situ. No prometemos
          un reloj de 24/7 que no operamos: prometemos un canal técnico y un
          desplazamiento cuando el problema lo exige.
        </p>
      </CopyBlock>

      <RelatedSystems path={path} />
      <PageFaqs
        items={supportFaqs}
        jsonLd={servicePageGraph({
          path,
          name: "Soporte técnico para empresas",
          description:
            "Soporte remoto y presencial, diagnóstico y mantenimiento en el Levante Almeriense.",
          crumbs: [
            { name: "Inicio", path: "/" },
            { name: "Servicios", path: "/servicios" },
            { name: "Soporte técnico", path },
          ],
          faqs: supportFaqs,
        })}
        defaultService="Soporte informático"
        origen={path}
        cta="soporte-final"
      />
    </>
  );
}
