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
  "/terminos-y-condiciones",
  "Términos y condiciones",
  "Términos y condiciones de los servicios informáticos e integración de IA de La Oveja IT para empresas.",
);

export default function TermsPage() {
  return (
    <LegalDocument
      eyebrow="CONDICIONES DE SERVICIO"
      title="Términos y condiciones"
      updated={companyConfig.legalUpdated}
    >
      <h2>1. Identificación</h2>
      <p>
        Estos términos regulan de forma general la solicitud y prestación de
        servicios por {companyConfig.legalName} (NIF {companyConfig.taxId}),
        con domicilio en {formatPostalAddress()}. Contacto:{" "}
        <a href={mailHref()}>{companyConfig.email}</a> ·{" "}
        <a href={phoneHref()}>{companyConfig.phone}</a>.
      </p>

      <h2>2. Objeto y ámbito</h2>
      <p>
        {companyConfig.legalName} presta servicios informáticos B2B:
        mantenimiento y soporte, servidores, redes, Wi-Fi profesional,
        ciberseguridad, copias de seguridad e integración de inteligencia
        artificial, RAG, automatización y agentes, principalmente para empresas
        del Levante Almeriense. El detalle de cada encargo se concreta en el
        presupuesto, propuesta o contrato aceptado por ambas partes.
      </p>

      <h2>3. Solicitudes y presupuestos</h2>
      <p>
        El envío del formulario, un correo o un mensaje no implica aceptación
        automática del trabajo. {companyConfig.legalName} puede pedir
        información adicional, visitar la sede o rechazar un encargo si el
        alcance no es viable. Los precios, plazos y forma de pago, cuando
        existan, constarán en el documento comercial aceptado. Este sitio no
        publica tarifas generales.
      </p>

      <h2>4. Aceptación</h2>
      <p>
        El contrato se entiende celebrado cuando el cliente acepta de forma
        expresa el presupuesto o la propuesta, por escrito o por un medio
        equivalente que deje constancia.
      </p>

      <h2>5. Prestación del servicio</h2>
      <p>
        El trabajo se ejecutará con la diligencia profesional propia de
        servicios informáticos. El cliente facilitará el acceso razonable a
        sistemas, personas de contacto y documentación necesaria. Las
        intervenciones presenciales se programan; el soporte remoto cubre el
        día a día cuando la incidencia lo permite.
      </p>

      <h2>6. Obligaciones del cliente</h2>
      <p>El cliente se obliga a:</p>
      <ul>
        <li>proporcionar información veraz sobre su entorno técnico;</li>
        <li>mantener copias de los datos que considere críticos, salvo que el encargo incluya expresamente el diseño y la operación de copias;</li>
        <li>no solicitar acciones ilícitas o que vulneren derechos de terceros;</li>
        <li>designar interlocutores y autorizar accesos con el nivel mínimo necesario;</li>
        <li>abonar los importes acordados en el documento comercial.</li>
      </ul>

      <h2>7. Acceso a sistemas</h2>
      <p>
        Cualquier acceso a servidores, redes, cuentas o paneles se realizará
        para cumplir el encargo. El cliente puede revocar credenciales al
        terminar el trabajo. {companyConfig.legalName} no utilizará esos
        accesos para finalidades ajenas al servicio contratado.
      </p>

      <h2>8. Copias de seguridad</h2>
      <p>
        Salvo que el contrato incluya de forma expresa el diseño, la
        monitorización o la restauración de copias, el cliente es responsable
        de disponer de copias recuperables de su información. Cuando sí se
        contrate este servicio, el alcance (local, externo, frecuencia y
        pruebas) será el pactado. Ninguna copia elimina por completo el riesgo
        de pérdida.
      </p>

      <h2>9. Confidencialidad</h2>
      <p>
        Cada parte guardará confidencialidad sobre la información técnica y
        de negocio de la otra a la que acceda con motivo del servicio, salvo
        obligación legal o autorización. Esta obligación continúa tras la
        finalización del encargo durante el tiempo que fije el contrato o, en
        su defecto, el que resulte razonable según la naturaleza de la
        información.
      </p>

      <h2>10. Propiedad intelectual</h2>
      <p>
        El cliente conserva los derechos sobre sus datos, documentos y
        software preexistente. {companyConfig.legalName} conserva los
        derechos sobre metodologías, plantillas y herramientas propias. Los
        entregables específicos del proyecto se cederán o licenciarán en los
        términos del contrato. El código y los contenidos de este sitio web
        no forman parte de ningún encargo.
      </p>

      <h2>11. Servicios y software de terceros</h2>
      <p>
        El trabajo puede depender de operadores de internet, fabricantes,
        nubes, licencias o APIs ajenas. {companyConfig.legalName} no
        responde de interrupciones, cambios de condiciones o fallos de esos
        terceros. Las licencias de software de terceros se rigen por sus
        propios términos.
      </p>

      <h2>12. Limitaciones técnicas y seguridad</h2>
      <p>
        La informática y la ciberseguridad reducen riesgos; no los eliminan.
        No se garantiza la ausencia total de incidentes, malware o accesos
        no autorizados. El cliente debe aplicar las recomendaciones
        razonables de endurecimiento, copias y control de accesos que se le
        comuniquen.
      </p>

      <h2>13. Inteligencia artificial y automatización</h2>
      <p>
        Los sistemas de IA pueden producir resultados inexactos o incompletos.
        El cliente es responsable de revisar las salidas antes de usarlas en
        decisiones operativas, jurídicas o comerciales. La arquitectura, la
        ubicación del procesamiento y los proveedores utilizados se
        determinarán en función del proyecto y de los requisitos técnicos y de
        privacidad acordados con el cliente. No se afirma que los datos
        permanezcan siempre en local ni que nunca se envíen a un proveedor.
      </p>

      <h2>14. Responsabilidad</h2>
      <p>
        {companyConfig.legalName} responderá de los daños causados por dolo o
        negligencia en los términos de la legislación aplicable. No se
        asumen compromisos de disponibilidad 24/7, tiempos de respuesta
        garantizados ni penalizaciones, salvo que consten por escrito en el
        contrato. Cualquier limitación de responsabilidad se interpretará
        conforme a normas imperativas.
      </p>

      <h2>15. Fuerza mayor</h2>
      <p>
        Ninguna parte será responsable de incumplimientos debidos a
        circunstancias extraordinarias fuera de su control razonable
        (cortes generalizados de red, desastres, cambios legales
        imprevisibles o fallos masivos de proveedores críticos).
      </p>

      <h2>16. Modificaciones</h2>
      <p>
        Estos términos pueden actualizarse para el futuro. Los encargos ya
        aceptados se rigen por el documento comercial vigente en el momento
        de la aceptación, salvo pacto posterior.
      </p>

      <h2>17. Comunicaciones</h2>
      <p>
        Las comunicaciones relativas al servicio podrán realizarse por
        correo electrónico, teléfono o WhatsApp a los datos facilitados por
        el cliente.
      </p>

      <h2>18. Legislación</h2>
      <p>
        Estos términos se rigen por la legislación española aplicable. Las
        controversias se someterán a los tribunales que correspondan
        conforme a derecho. El{" "}
        <Link href="/aviso-legal">aviso legal</Link> y la{" "}
        <Link href="/privacidad">política de privacidad</Link> complementan
        este documento.
      </p>
    </LegalDocument>
  );
}
