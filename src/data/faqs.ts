import type { Municipality } from "@/data/municipalities";

export type FaqItem = {
  question: string;
  answer: string;
};

export const homeFaqs: FaqItem[] = [
  {
    question: "¿Qué tipo de empresas atendéis en el Levante Almeriense?",
    answer:
      "Trabajamos con PYMEs, comercios, hoteles, restaurantes, despachos, almacenes, naves e industrias de Vera, Mojácar, Huércal-Overa y el resto de la comarca. El trabajo se adapta al tamaño real del negocio, no a un paquete genérico.",
  },
  {
    question: "¿El soporte es remoto o también presencial?",
    answer:
      "Ambos. Resolvemos por remoto cuando es suficiente y nos desplazamos por el Levante Almeriense cuando hace falta intervenir in situ: servidores, cableado, Wi-Fi o equipos que no se pueden diagnosticar a distancia.",
  },
  {
    question: "¿Podéis implantar inteligencia artificial sin enviar documentos sensibles a internet?",
    answer:
      "Sí se puede diseñar así, pero no todos los proyectos lo requieren. Estudiamos qué datos pueden salir de la organización, qué conviene procesar en local o en un entorno controlado, y qué arquitectura encaja por privacidad, coste y rendimiento. No hay una receta única.",
  },
  {
    question: "¿Qué es un sistema RAG para una PYME?",
    answer:
      "Un RAG permite consultar la documentación interna de la empresa —manuales, procedimientos, facturas, catálogos o PDFs— mediante un modelo de lenguaje. En lugar de buscar archivo por archivo, el sistema recupera fragmentos relevantes y formula una respuesta a partir de esa base.",
  },
  {
    question: "¿Mantenéis servidores y redes existentes o solo instaláis desde cero?",
    answer:
      "Mantenemos lo que ya funciona y lo corregimos si está mal dimensionado. También desplegamos servidores, copias, firewalls o redes nuevas cuando el entorno actual no cubre la operativa o introduce demasiados riesgos.",
  },
    {
    question: "¿Cómo se empieza un proyecto?",
    answer:
      "Con un diagnóstico: inventario de infraestructura, procesos, riesgos y objetivos. A partir de ahí proponemos una arquitectura concreta —soporte, servidores, seguridad o IA— y solo desplegamos lo que el negocio necesita.",
  },
];

export function municipalityFaqs(municipality: Municipality): FaqItem[] {
  const { name, businessProfile } = municipality;

  const onSite: Record<Municipality["businessProfile"], string> = {
    tourism: `Sí. En ${name} el soporte presencial se usa sobre todo para Wi-Fi, rack, TPV y equipos de recepción o sala. El diagnóstico inicial suele ser remoto; la visita se programa cuando hay que tocar la instalación.`,
    industry: `Sí. En ${name} acudimos a oficina, almacén o nave cuando el problema es de servidor, red o copias. Lo que se puede cerrar en remoto se cierra en remoto.`,
    mixed: `Sí. En ${name} combinamos remoto y visita concertada. Si el negocio es pequeño, a menudo basta una sesión remota; si hay cableado o rack, vamos al sitio.`,
  };

  const aiUse: Record<Municipality["businessProfile"], string> = {
    tourism: `Una PYME de ${name} puede usarla para consultar su propia información (servicios del establecimiento, procedimientos de recepción, tarifas) o para clasificar consultas repetidas. No sustituye a recepción: reduce interrupciones si los datos de origen están ordenados.`,
    industry: `Una PYME de ${name} suele empezar por facturas, albaranes, procedimientos de calidad o manuales de máquina. Un RAG o un agente de clasificación tiene sentido cuando esos archivos ya existen y hay un destino claro (ERP, carpeta, responsable).`,
    mixed: `En ${name} el uso más realista es consultar documentación propia o automatizar tareas administrativas repetidas. Si el problema actual es un PC inestable o la falta de copias, eso se resuelve antes de hablar de modelos.`,
  };

  return [
    {
      question: `¿Ofrecéis soporte informático presencial en ${name}?`,
      answer: onSite[businessProfile],
    },
    {
      question: `¿Cómo puede utilizar una PYME de ${name} la inteligencia artificial?`,
      answer: aiUse[businessProfile],
    },
    {
      question: "¿Es posible utilizar IA con documentación privada de mi empresa?",
      answer:
        "Sí, diseñando dónde se procesan los datos. Un LLM privado o un entorno controlado puede consultar solo vuestros documentos. No todos los proyectos necesitan ejecutar el modelo en local; se elige según privacidad, coste y rendimiento, y se deja fuera lo que no deba salir de la organización.",
    },
    {
      question: "¿Podéis mantener nuestros servidores y red empresarial?",
      answer:
        "Sí. Mantenemos servidores Windows y Linux, NAS, copias, switches y Wi-Fi profesional. El alcance se define tras ver el inventario: no hay un paquete único que sirva igual a un hotel, un despacho y una nave.",
    },
    {
      question:
        "¿Trabajáis con hoteles, restaurantes, comercios y pequeñas empresas?",
      answer:
        "Sí. El Levante Almeriense es exactamente ese mix. El proyecto se dimensiona al negocio: a veces es segmentar Wi-Fi y TPV; otras, un servidor y un plan de copias; otras, un RAG sobre documentación interna.",
    },
    municipality.uniqueFaq,
  ];
}
