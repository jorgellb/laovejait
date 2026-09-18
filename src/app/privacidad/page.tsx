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
  "/privacidad",
  "Política de privacidad",
  "Política de privacidad de La Oveja IT: responsable del tratamiento, formulario de contacto, derechos y proveedores técnicos reales del sitio.",
);

export default function PrivacyPage() {
  return (
    <LegalDocument
      eyebrow="PROTECCIÓN DE DATOS"
      title="Política de privacidad"
      updated={companyConfig.legalUpdated}
    >
      <h2>1. Responsable del tratamiento</h2>
      <ul>
        <li>Identidad: {companyConfig.legalName}</li>
        <li>NIF: {companyConfig.taxId}</li>
        <li>Domicilio: {formatPostalAddress()}</li>
        <li>
          Correo:{" "}
          <a href={mailHref()}>{companyConfig.email}</a>
        </li>
        <li>
          Teléfono:{" "}
          <a href={phoneHref()}>{companyConfig.phone}</a>
        </li>
      </ul>

      <h2>2. Ámbito</h2>
      <p>
        Esta política describe el tratamiento de datos personales realizado a
        través del sitio {companyConfig.url}, incluido el formulario de
        contacto. No cubre el tratamiento que pueda derivarse de un proyecto
        contractual de infraestructura o de inteligencia artificial, que se
        documentará en el acuerdo correspondiente.
      </p>

      <h2>3. Datos recogidos</h2>
      <p>A través del formulario de contacto se recogen:</p>
      <ul>
        <li>nombre;</li>
        <li>empresa;</li>
        <li>correo electrónico;</li>
        <li>teléfono;</li>
        <li>municipio;</li>
        <li>servicio solicitado;</li>
        <li>mensaje;</li>
        <li>aceptación de esta información de privacidad.</li>
      </ul>
      <p>
        El formulario incluye un campo oculto antispam. Si se rellena, la
        solicitud no se tramita como un contacto real.
      </p>
      <p>
        Si el usuario llama, escribe un correo o usa WhatsApp, se tratarán los
        datos que facilite en esa conversación para atender la consulta.
      </p>

      <h2>4. Finalidad</h2>
      <p>
        Los datos se utilizan para gestionar la solicitud, contactar con el
        interesado, valorar el alcance técnico y, en su caso, preparar un
        presupuesto o una propuesta. No se utilizan para enviar publicidad
        comercial no solicitada.
      </p>

      <h2>5. Legitimación</h2>
      <p>
        El tratamiento se basa en la aplicación de medidas precontractuales a
        petición del interesado y, cuando el usuario marca la casilla del
        formulario, en el consentimiento. El teléfono y el correo son
        necesarios para responder: si no se facilitan, no se puede tramitar la
        solicitud.
      </p>

      <h2>6. Conservación</h2>
      <p>
        Los datos de una solicitud no convertida en encargo se conservan el
        tiempo estrictamente necesario para gestionarla y atender posibles
        aclaraciones, y el que impongan las obligaciones legales aplicables.
        Si nace una relación de prestación de servicios, el plazo se regirá
        por el contrato y por las obligaciones contables y fiscales
        correspondientes.
      </p>

      <h2>7. Destinatarios y proveedores técnicos</h2>
      <p>
        Los datos no se ceden a terceros para su uso comercial. Pueden acceder
        a ellos proveedores que actúan como encargados del tratamiento en la
        medida estrictamente necesaria para operar el sitio y el correo:
      </p>
      <ul>
        <li>
          Vercel, Inc., como plataforma de alojamiento y entrega del sitio.
        </li>
        <li>
          Resend, cuando el envío del formulario por correo electrónico está
          configurado en el entorno de producción.
        </li>
      </ul>
      <p>
        Este sitio no incorpora Google Analytics, Google Maps, píxeles
        publicitarios, chatbots de terceros, reCAPTCHA, Turnstile ni herramientas
        de grabación de sesión.
      </p>

      <h2>8. Transferencias internacionales</h2>
      <p>
        Vercel y Resend pueden tratar datos en servidores situados fuera del
        Espacio Económico Europeo. En ese caso, el tratamiento se sujeta a las
        garantías previstas en la normativa de protección de datos (por
        ejemplo, cláusulas contractuales tipo u otras medidas reconocidas).
      </p>

      <h2>9. Servicios de inteligencia artificial</h2>
      <p>
        La arquitectura, la ubicación del procesamiento y los proveedores
        utilizados en un proyecto de inteligencia artificial se determinarán
        en función del proyecto y de los requisitos técnicos y de privacidad
        acordados con el cliente. Esta web no afirma que todos los datos de
        un proyecto permanezcan siempre en local ni que nunca se envíen a
        terceros.
      </p>

      <h2>10. Derechos</h2>
      <p>El interesado puede ejercer los derechos de:</p>
      <ul>
        <li>acceso;</li>
        <li>rectificación;</li>
        <li>supresión;</li>
        <li>oposición;</li>
        <li>limitación del tratamiento;</li>
        <li>portabilidad, cuando proceda;</li>
        <li>retirada del consentimiento, cuando el tratamiento se base en él.</li>
      </ul>
      <p>
        Para ejercerlos, puede escribir a{" "}
        <a href={mailHref()}>{companyConfig.email}</a>. También puede reclamar
        ante la Agencia Española de Protección de Datos (aepd.es).
      </p>

      <h2>11. Seguridad</h2>
      <p>
        Se aplican medidas técnicas y organizativas razonables para proteger
        los datos (conexión cifrada al sitio, acceso restringido al correo de
        contacto y validación del formulario). Ningún sistema es
        completamente invulnerable.
      </p>

      <h2>12. Menores</h2>
      <p>
        Los servicios se dirigen a empresas y profesionales. El formulario no
        está pensado para menores de 14 años. Si se detecta un envío de un
        menor, se eliminará.
      </p>

      <h2>13. Cookies</h2>
      <p>
        El uso de cookies se describe en la{" "}
        <Link href="/cookies">política de cookies</Link>.
      </p>

      <h2>14. Cambios</h2>
      <p>
        Esta política puede actualizarse si cambia el sitio, los proveedores
        o la normativa. La versión vigente es la publicada en esta página.
      </p>
    </LegalDocument>
  );
}
