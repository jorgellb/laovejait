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

export const serviciosFaqs: FaqItem[] = [
  {
    question: "¿Trabajáis cada servicio por separado?",
    answer:
      "No. Un servidor sin copias, una red sin segmentar o una IA sin permisos no resuelven el problema: lo desplazan. Diagnosticamos el sistema y priorizamos la capa que está frenando al resto.",
  },
  {
    question: "¿Empezáis siempre por inteligencia artificial?",
    answer:
      "No. Si la red cae, las copias no se restauran o nadie sabe quién accede a qué, primero se ordena esa base. La IA entra cuando hay datos localizables y un proceso claro que automatizar.",
  },
  {
    question: "¿Cómo decidís las prioridades?",
    answer:
      "Por impacto operativo: qué impide trabajar hoy, qué perderíais si un disco falla, y qué tareas repetidas consumen horas cada semana. El orden lo marca el negocio, no un catálogo.",
  },
];

export const iaFaqs: FaqItem[] = [
  {
    question: "¿Instaláis un chatbot y ya está?",
    answer:
      "No. Un chatbot sobre procesos rotos solo acelera el desorden. Diseñamos consulta de conocimiento, asistencia a personas y, cuando hay límites claros, ejecución de tareas.",
  },
  {
    question: "¿Qué es un RAG empresarial?",
    answer:
      "Un sistema que recupera fragmentos de vuestra documentación —manuales, tarifas, contratos, procedimientos— y los usa como contexto para responder. La calidad depende de fuentes, permisos y actualización.",
  },
  {
    question: "¿Los agentes actúan solos en el ERP?",
    answer:
      "Solo dentro de permisos definidos. Lo habitual es que clasifiquen, extraigan y propongan; una persona aprueba antes de escribir en el sistema. La ejecución autónoma se acota caso a caso.",
  },
  {
    question: "¿El modelo tiene que estar en local?",
    answer:
      "No siempre. Local, híbrido o cloud controlado se elige según privacidad, coste y rendimiento. Lo que no debe salir de la organización se deja fuera, con independencia del proveedor del modelo.",
  },
];

export const infraFaqs: FaqItem[] = [
  {
    question: "¿Solo instaláis servidores nuevos?",
    answer:
      "También mantenemos, documentamos y migráis lo que ya hay. Un servidor sin inventario ni monitorización es una improvisación pospuesta, da igual lo reciente que sea el hardware.",
  },
  {
    question: "¿Trabajáis con Windows Server y Linux?",
    answer:
      "Sí. El criterio es qué sostiene la operativa: directorio, archivos, virtualización o aplicaciones. No forzamos un sistema operativo por moda.",
  },
  {
    question: "¿Cuándo tiene sentido virtualizar?",
    answer:
      "Cuando hay varios servicios que no deberían compartir un único fallo, o cuando hay que probar, migrar o recuperar sin apagar toda la oficina. Si hay una sola carga y está clara, a veces un host bien mantenido basta.",
  },
];

export const cyberFaqs: FaqItem[] = [
  {
    question: "¿La ciberseguridad es un producto único?",
    answer:
      "No. Es un conjunto de capas: perímetro, identidad, puesto, datos y copias recuperables. Un antivirus sin copias o un firewall sin MFA deja huecos que el negocio nota el día que falla algo.",
  },
  {
    question: "¿Hacéis auditorías de hacking?",
    answer:
      "No vendemos teatro de pentest. Trabajamos hardening, accesos, segmentación, backups y recuperación. Si hace falta una prueba especializada, se encarga con alcance explícito.",
  },
  {
    question: "¿Las copias sirven si no se prueban?",
    answer:
      "No. Una copia que no se ha restaurado es una hipótesis. Programamos copias y comprobamos que se pueden recuperar, no solo que el job está en verde.",
  },
];

export const networkFaqs: FaqItem[] = [
  {
    question: "¿Por qué separar TPV, invitados e IoT?",
    answer:
      "Para que un problema en la red de invitados o en un sensor no arrastre caja, oficina o almacén. La VLAN no es un adorno: reduce exposición y aísla fallos.",
  },
  {
    question: "¿Montáis Wi-Fi de consumo en un hotel?",
    answer:
      "Si el tráfico, el roaming y el número de clientes lo desbordan, no. Diseñamos cobertura y capacidad alrededor del uso real: recepción, habitaciones, terraza o almacén.",
  },
  {
    question: "¿El cableado sigue siendo necesario?",
    answer:
      "Sí, en TPV, servidores, cámaras fijas y puntos que no pueden depender de radio. El Wi-Fi cubre movilidad; el cobre cubre lo que no puede fallar a media servicio.",
  },
];

export const supportFaqs: FaqItem[] = [
  {
    question: "¿El soporte es solo remoto?",
    answer:
      "Remoto cuando basta; presencial en el Levante Almeriense cuando hay que tocar rack, cableado, Wi-Fi o un equipo que no se diagnostica a distancia.",
  },
  {
    question: "¿Cerráis el ticket y desaparecéis?",
    answer:
      "No si la causa puede repetirse. Documentamos lo resuelto y, cuando el patrón es claro, lo convertimos en mantenimiento: actualización, copia, permiso o cambio de red.",
  },
  {
    question: "¿Atendéis PCs y también servidor?",
    answer:
      "Sí. Un puesto que no imprime suele ser síntoma de red, permisos o servidor. El diagnóstico mira el sistema, no solo el síntoma.",
  },
];

export const coverageFaqs: FaqItem[] = [
  {
    question: "¿Cubris todo el Levante Almeriense?",
    answer:
      "Sí: Vera, Mojácar, Garrucha, Huércal-Overa, Cuevas del Almanzora, Pulpí, Carboneras, Antas, Turre, Bédar, Lubrín y Los Gallardos. El remoto cubre el día a día; la visita se programa cuando hay que intervenir in situ.",
  },
  {
    question: "¿Es el mismo servicio en costa y en nave?",
    answer:
      "La base técnica es la misma; el diseño no. Un hotel necesita cobertura y TPV; una nave, servidor, copias y red de almacén. Por eso cada municipio tiene su propia página.",
  },
];
