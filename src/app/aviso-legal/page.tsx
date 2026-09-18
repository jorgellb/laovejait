import type { Metadata } from "next";
import Link from "next/link";
import { LegalDocument } from "@/components/legal/LegalDocument";
import {
  companyConfig,
  formatPostalAddress,
  mailHref,
  phoneHref,
} from "@/config/company";
import { documentMetadata } from "@/lib/metadata";

export const metadata: Metadata = documentMetadata(
  "/aviso-legal",
  "Aviso legal",
  "Aviso legal de La Oveja IT: identificación del titular, condiciones de uso y responsabilidad del sitio laoveja.es.",
);

export default function LegalNoticePage() {
  return (
    <LegalDocument
      eyebrow="INFORMACIÓN LEGAL"
      title="Aviso legal"
      updated={companyConfig.legalUpdated}
    >
      <h2>1. Titular del sitio</h2>
      <p>
        El sitio web {companyConfig.domain} ({companyConfig.url}) es titularidad
        de {companyConfig.legalName}.
      </p>
      <ul>
        <li>Nombre comercial: {companyConfig.legalName}</li>
        <li>NIF: {companyConfig.taxId}</li>
        <li>Domicilio: {formatPostalAddress()}</li>
        <li>
          Teléfono:{" "}
          <a href={phoneHref()}>{companyConfig.phone}</a>
        </li>
        <li>
          Correo:{" "}
          <a href={mailHref()}>{companyConfig.email}</a>
        </li>
      </ul>

      <h2>2. Finalidad del sitio</h2>
      <p>
        Este sitio informa sobre servicios informáticos, infraestructura TI,
        ciberseguridad, redes, copias de seguridad, soporte técnico e
        integración de inteligencia artificial para empresas, con cobertura en
        el Levante Almeriense. También permite solicitar un diagnóstico o
        contacto profesional.
      </p>

      <h2>3. Condiciones de acceso y uso</h2>
      <p>
        El acceso al sitio es libre y gratuito. El usuario se compromete a
        utilizarlo de forma lícita, a no introducir contenidos ilícitos o
        lesivos y a no intentar acceder a zonas restringidas, sistemas o datos
        ajenos. La mera navegación no implica la contratación de servicios.
      </p>

      <h2>4. Contratación de servicios</h2>
      <p>
        Las solicitudes enviadas a través del formulario, correo, teléfono o
        WhatsApp no constituyen por sí solas un contrato. El alcance, precio y
        condiciones de cada trabajo se fijan en el presupuesto, propuesta o
        contrato aceptado por ambas partes. Véase también los{" "}
        <Link href="/terminos-y-condiciones">términos y condiciones</Link>.
      </p>

      <h2>5. Propiedad intelectual e industrial</h2>
      <p>
        Los textos, gráficos, logotipos, estructura, código y demás contenidos
        de este sitio son titularidad de {companyConfig.legalName} o de sus
        licenciantes. Queda prohibida su reproducción, distribución o
        transformación sin autorización, salvo los actos lícitos de uso
        personal o las excepciones previstas en la normativa de propiedad
        intelectual.
      </p>

      <h2>6. Responsabilidad</h2>
      <p>
        Se procura que la información del sitio sea clara y actual, pero puede
        contener errores u omisiones. {companyConfig.legalName} no garantiza la
        disponibilidad ininterrumpida del sitio ni que esté libre de virus u
        otros elementos técnicos ajenos. El usuario es responsable de disponer
        de herramientas adecuadas para navegar de forma segura.
      </p>

      <h2>7. Enlaces externos</h2>
      <p>
        El sitio puede incluir enlaces a recursos de terceros (por ejemplo,
        WhatsApp). {companyConfig.legalName} no controla esos destinos ni
        responde de sus contenidos, políticas o disponibilidad.
      </p>

      <h2>8. Datos de carácter personal</h2>
      <p>
        El tratamiento de datos se describe en la{" "}
        <Link href="/privacidad">política de privacidad</Link>. El uso de
        cookies, en la <Link href="/cookies">política de cookies</Link>.
      </p>

      <h2>9. Modificaciones</h2>
      <p>
        El titular puede actualizar este aviso, el sitio y los servicios
        descritos para adaptarlos a cambios técnicos, organizativos o
        normativos. La versión vigente es la publicada en esta URL.
      </p>

      <h2>10. Legislación y fuero</h2>
      <p>
        Este aviso se rige por la legislación española que resulte aplicable.
        Para cualquier controversia, las partes se someten a los tribunales que
        correspondan conforme a la normativa vigente, sin perjuicio de los
        derechos que asistan a los consumidores y usuarios cuando dicha
        condición sea de aplicación.
      </p>
    </LegalDocument>
  );
}
