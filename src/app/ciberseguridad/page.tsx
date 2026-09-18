import type { Metadata } from "next";
import {
  DefenceDepth,
  DiagramFigure,
  VerticalSteps,
} from "@/components/graphics/system-diagrams";
import {
  CopyBlock,
  PageFaqs,
  PageHero,
  RelatedSystems,
  SplitSection,
} from "@/components/pages/PageChrome";
import { cyberFaqs } from "@/data/faqs";
import { contactHref } from "@/data/site-nav";
import { documentMetadata } from "@/lib/metadata";
import { servicePageGraph } from "@/lib/schema";

const path = "/ciberseguridad";

export const metadata: Metadata = documentMetadata(
  path,
  "Ciberseguridad y Backup para Empresas | Levante Almeriense | La Oveja",
  "Seguridad por capas para empresas: MFA, firewall, endpoint, segmentación, copias recuperables y respuesta. Menos superficie de ataque, mejor recuperación.",
  { absolute: true },
);

export default function CiberseguridadPage() {
  const contact = contactHref({
    servicio: "ciberseguridad",
    cta: "cyber-hero",
    origen: path,
  });
  return (
    <>
      <PageHero
        crumbs={[
          { name: "Inicio", href: "/" },
          { name: "Servicios", href: "/servicios" },
          { name: "Ciberseguridad" },
        ]}
        eyebrow="DEFENSA EN PROFUNDIDAD"
        title="Reducir superficie de ataque. Mejorar capacidad de recuperación."
        lead="Trabajamos seguridad por capas: identidad, perímetro, puesto, datos y copias que se pueden restaurar. No hay producto único que cubra el conjunto."
        primaryHref={contact}
        secondaryHref="#capas"
        secondaryLabel="Ver capas"
        reverse
        diagram={
          <DiagramFigure
            title="DEFENCE IN DEPTH"
            caption="El tráfico esperado atraviesa las capas. Un evento no autorizado se detiene en el perímetro. Sin teatro de capuchas."
          >
            <div className="mx-auto max-w-xs">
              <DefenceDepth />
            </div>
          </DiagramFigure>
        }
      />

      <CopyBlock index="01" title="El problema operativo">
        <p>
          Un ransomware o un disco muerto tienen el mismo efecto: la empresa no
          factura. La diferencia es si hay copias fuera, cuentas nominativas y
          una red que no comparte invitado con el TPV. Reducir exposición y
          poder recuperar es el objetivo; no un certificado de invulnerabilidad.
        </p>
      </CopyBlock>

      <SplitSection
        index="02"
        id="capas"
        title="Seguridad por capas"
        body={
          <>
            <p>
              MFA y cuentas con privilegio mínimo evitan que una contraseña
              reutilizada abra el directorio entero. El firewall y la
              segmentación evitan que un puerto de invitado vea el servidor de
              archivos. El endpoint cubre el portátil que se lleva a casa.
            </p>
            <p>
              Hardening, actualizaciones y monitorización cierran huecos
              conocidos. Backup y prueba de restauración cubren el día en que
              algo igual entra. La respuesta se documenta: quién desconecta,
              quién restaura, quién avisa.
            </p>
          </>
        }
        visual={
          <VerticalSteps
            items={[
              "Internet",
              "Edge firewall",
              "Identidad + MFA",
              "Segmentación de red",
              "Endpoint",
              "Aplicación",
              "Datos",
              "Backup recuperable",
            ]}
          />
        }
      />

      <CopyBlock index="03" title="Qué no prometemos">
        <p>
          No vendemos miedo ni un porcentaje de «protección». Un entorno más
          difícil de comprometer y más sencillo de restaurar es el resultado
          medible. Si hace falta una prueba ofensiva con alcance explícito, se
          encarga; no la disfrazamos de mantenimiento.
        </p>
      </CopyBlock>

      <RelatedSystems path={path} />
      <PageFaqs
        items={cyberFaqs}
        jsonLd={servicePageGraph({
          path,
          name: "Ciberseguridad y backup para empresas",
          description:
            "MFA, firewall, endpoint, segmentación y copias recuperables.",
          crumbs: [
            { name: "Inicio", path: "/" },
            { name: "Servicios", path: "/servicios" },
            { name: "Ciberseguridad", path },
          ],
          faqs: cyberFaqs,
        })}
        defaultService="Ciberseguridad"
        origen={path}
        cta="cyber-final"
      />
    </>
  );
}
