export const conceptualCaption =
  "Modelo conceptual de aplicación de inteligencia artificial en el sector. Las interfaces, procesos y métricas representadas son ejemplos ilustrativos y no resultados atribuidos a un cliente real.";

export const sectorFilterIds = [
  "todos",
  "industria",
  "comercio",
  "servicios",
  "agro",
  "salud",
  "formacion",
  "finanzas",
  "energia",
  "medios",
] as const;

export type SectorFilterId = (typeof sectorFilterIds)[number];

export const sectorFilterLabels: Record<SectorFilterId, string> = {
  todos: "Todos",
  industria: "Industria",
  comercio: "Comercio",
  servicios: "Servicios",
  agro: "Agro",
  salud: "Salud",
  formacion: "Formación",
  finanzas: "Finanzas",
  energia: "Energía",
  medios: "Medios",
};

export type IaFaq = {
  question: string;
  answer: string;
};

export type IaSolution = {
  title: string;
  body: string;
};

export type BrandHold = {
  flag: "NEEDS_BRAND_NEUTRAL_VERSION";
  brands: string[];
};

export type IaSectorImage = {
  src: string | null;
  width: number;
  height: number;
  brandHold: BrandHold | null;
};

export type IaSector = {
  slug: string;
  hubOrder: number;
  filter: SectorFilterId;
  name: string;
  shortName: string;
  h1: string;
  lead: string;
  hubPhrase: string;
  tags: [string, string, string];
  alt: string;
  seoTitle: string;
  seoDescription: string;
  image: IaSectorImage;
  problem: string;
  problemItems: string[];
  dataSources: string[];
  systems: string[];
  aiLayer: string[];
  workflow: string[];
  solutions: IaSolution[];
  automatable: string[];
  needsConfirmation: string[];
  humanControl: string[];
  kpis: string[];
  startNotes: string[];
  riskNotes: string[];
  related: string[];
  faqs: IaFaq[];
};

const DEFAULT_START = [
  "Analizamos el proceso, los datos que ya existen y los sistemas implicados.",
  "Priorizamos un caso acotado, con información disponible y riesgo controlable.",
  "Construimos un piloto que asiste o automatiza una tarea concreta.",
  "Integramos el flujo con las herramientas que ya usa la empresa.",
  "Medimos el resultado y decidimos si ampliar, ajustar o descartar.",
];

function img(
  file: string | null,
  width: number,
  height: number,
  brandHold: BrandHold | null = null,
): IaSectorImage {
  return {
    src: file ? `/images/ia-por-sector/${file}` : null,
    width,
    height,
    brandHold,
  };
}

export const iaEcosystemImage = {
  src: "/images/ia-por-sector/ia-ecosistema-empresa.jpg",
  width: 1672,
  height: 941,
  alt: "Esquema conceptual de un ecosistema empresarial conectando documentos, datos, servidores, cloud, seguridad, analítica e inteligencia artificial.",
} as const;

export const iaSectors: IaSector[] = [
  {
    slug: "industria-ingenieria",
    hubOrder: 1,
    filter: "industria",
    name: "Industria e ingeniería",
    shortName: "Industria",
    h1: "IA para industria, ingeniería y fabricación",
    lead: "Conecta ingeniería, planificación, fabricación, calidad, mantenimiento y logística con una capa de inteligencia sobre documentación y datos operativos.",
    hubPhrase:
      "Ingeniería, fabricación, calidad y mantenimiento leídos sobre la misma base documental.",
    tags: ["CAD", "MES", "CMMS"],
    alt: "Esquema técnico de aplicación de IA en industria e ingeniería, conectando documentación, planificación, fabricación y mantenimiento.",
    seoTitle: "IA para industria e ingeniería | Automatización empresarial",
    seoDescription:
      "Modelos de inteligencia artificial para conectar ingeniería, fabricación, calidad, mantenimiento y documentación técnica en empresas industriales.",
    image: img(null, 1672, 941, {
      flag: "NEEDS_BRAND_NEUTRAL_VERSION",
      brands: ["MTS Industrial"],
    }),
    problem:
      "En una empresa industrial el conocimiento está repartido entre planos, listas de materiales, partes, calidad y el saber de taller. Buscar un criterio, comparar una revisión o reconstruir por qué se retrasó un montaje consume horas que no salen en ningún KPI.",
    problemItems: [
      "Documentación técnica difícil de consultar en el momento de la decisión",
      "Desviaciones de plazo detectadas tarde",
      "Retrabajos por cambios de especificación mal comunicados",
      "Mantenimiento reactivo cuando ya hay una parada",
    ],
    dataSources: [
      "ERP",
      "CAD y P&ID",
      "BOM",
      "MES",
      "CMMS",
      "sensores",
      "planificación",
      "partes de trabajo",
      "documentación técnica",
    ],
    systems: [
      "ERP",
      "software CAD",
      "MES",
      "CMMS",
      "gestión documental",
      "bases de datos",
      "APIs internas",
    ],
    aiLayer: [
      "Consulta RAG sobre documentación técnica",
      "Extracción y comparación de revisiones",
      "Predicción de retrasos a partir de histórico y carga",
      "Apoyo a mantenimiento predictivo",
      "Clasificación de no conformidades",
      "Resumen de estado de proyecto",
    ],
    workflow: [
      "Ingeniería",
      "Planificación",
      "Fabricación",
      "Calidad",
      "Montaje",
      "Mantenimiento",
      "Medición",
    ],
    solutions: [
      {
        title: "RAG técnico",
        body: "Consultar procedimientos, planos y criterios sin reabrir carpetas enteras.",
      },
      {
        title: "Comparación documental",
        body: "Detectar diferencias entre revisiones y preparar el cambio para quien debe aprobarlo.",
      },
      {
        title: "Planificación asistida",
        body: "Priorizar tareas y alertar de cuellos de botella con datos de carga real.",
      },
      {
        title: "Calidad",
        body: "Clasificar incidencias y agrupar evidencias para el responsable de calidad.",
      },
      {
        title: "Mantenimiento",
        body: "Cruzar historial, sensores y partes para anticipar intervenciones.",
      },
      {
        title: "Logística de taller",
        body: "Coordinar materiales y equipos con la secuencia de montaje.",
      },
    ],
    automatable: [
      "Clasificación de partes y no conformidades",
      "Resúmenes de proyecto",
      "Búsqueda sobre documentación",
    ],
    needsConfirmation: [
      "Cambios de planificación",
      "Prioridad de órdenes",
      "Compras extraordinarias",
    ],
    humanControl: [
      "Cambios de especificación",
      "Decisiones de seguridad",
      "Calidad crítica",
      "Mantenimiento con impacto en seguridad",
    ],
    kpis: [
      "Retrabajos",
      "Desviaciones de plazo",
      "Paradas",
      "Incidencias de calidad",
      "Tiempo de búsqueda documental",
      "Coste de no conformidad",
    ],
    startNotes: DEFAULT_START,
    riskNotes: [
      "La IA no sustituye el criterio de ingeniería ni valida por sí sola un cambio de diseño.",
    ],
    related: [
      "logistica-transporte",
      "superficies-materiales",
      "energia",
    ],
    faqs: [
      {
        question: "¿Hace falta cambiar el ERP para empezar?",
        answer:
          "No. El punto de partida es el proceso y los datos que ya existen. Si el ERP expone información usable, se conecta; si no, se trabaja con exportaciones, documentación y un piloto acotado.",
      },
      {
        question: "¿Puede conectarse con CAD, MES o CMMS?",
        answer:
          "Puede diseñarse sobre esas categorías de sistema cuando hay acceso a archivos, bases o APIs. No prometemos un conector concreto hasta ver el entorno real.",
      },
      {
        question: "¿Qué datos hacen falta para un primer piloto?",
        answer:
          "Un conjunto limitado de procedimientos, órdenes o historial de mantenimiento, con permisos claros. No hace falta digitalizar toda la planta de golpe.",
      },
      {
        question: "¿Qué debería seguir aprobando una persona?",
        answer:
          "Cambios de especificación, calidad crítica, seguridad y cualquier actuación de mantenimiento que afecte a personas o a la continuidad de línea.",
      },
    ],
  },
  {
    slug: "logistica-transporte",
    hubOrder: 2,
    filter: "industria",
    name: "Logística y transporte",
    shortName: "Logística",
    h1: "IA para logística y transporte",
    lead: "Conecta pedidos, tráfico, flota, conductores, almacén y documentación para planificar mejor cada movimiento y reducir trabajo operativo.",
    hubPhrase:
      "Pedidos, rutas, flota y entregas coordinados con información en tiempo real.",
    tags: ["TMS", "GPS", "ERP"],
    alt: "Esquema isométrico de aplicación de IA en logística y transporte, conectando pedidos, rutas, flota, entregas y analítica.",
    seoTitle: "IA para logística y transporte | Automatización empresarial",
    seoDescription:
      "Modelos de inteligencia artificial para conectar pedidos, rutas, flota, entregas, documentación y sistemas empresariales en compañías de logística y transporte.",
    image: img("logistica-transporte.jpg", 1672, 941),
    problem:
      "El trabajo se pierde entre el teléfono, el correo, el TMS y las hojas de ruta. Cada incidencia se reescribe varias veces: al conductor, al cliente y a administración. La planificación mejora cuando esos fragmentos se leen juntos.",
    problemItems: [
      "Pedidos que llegan por canales distintos y se teclean a mano",
      "Rutas que se rehacen cuando ya hay un camión en marcha",
      "Documentación de entrega y facturación desconectadas",
      "Atención al cliente sin contexto de dónde está el envío",
    ],
    dataSources: [
      "ERP",
      "TMS",
      "GPS y telemática",
      "correo",
      "CRM",
      "pedidos",
      "partes",
      "facturas",
      "sensores de flota",
    ],
    systems: [
      "ERP",
      "TMS",
      "CRM",
      "correo",
      "GPS",
      "software de almacén",
      "APIs de clientes",
    ],
    aiLayer: [
      "Predicción de demanda y volumen",
      "Planificación asistida de cargas",
      "Optimización de rutas",
      "Estimación de llegada",
      "Detección de incidencias",
      "Clasificación documental",
      "Atención con contexto del envío",
    ],
    workflow: [
      "Pedido",
      "Priorización",
      "Carga",
      "Ruta",
      "Seguimiento",
      "Entrega",
      "Documentación",
      "Facturación",
    ],
    solutions: [
      {
        title: "Pedidos y demanda",
        body: "Unificar entradas y priorizar volumen con el histórico real, no con una media inventada.",
      },
      {
        title: "Cargas y rutas",
        body: "Proponer asignaciones y trayectos para que operaciones confirme o ajuste.",
      },
      {
        title: "Flota y mantenimiento",
        body: "Cruzar estado del vehículo, alertas y disponibilidad antes de asignar.",
      },
      {
        title: "Control de entregas",
        body: "Seguimiento, pruebas de entrega y avisos al cliente con el estado real.",
      },
      {
        title: "Documentación",
        body: "Extraer y clasificar albaranes, CMR y facturas para reducir tecleo.",
      },
      {
        title: "Atención",
        body: "Responder consultas repetidas con el contexto del pedido, y escalar lo excepcional.",
      },
    ],
    automatable: [
      "Clasificación de documentos",
      "Avisos de estado",
      "Borradores de respuesta al cliente",
      "Resúmenes de jornada",
    ],
    needsConfirmation: [
      "Cambios de ruta con impacto en coste",
      "Reasignación de cargas",
      "Compromisos de entrega fuera de lo habitual",
    ],
    humanControl: [
      "Incidencias de seguridad",
      "Decisiones sobre conductores",
      "Costes extraordinarios",
      "Cambios críticos de ruta",
    ],
    kpis: [
      "Kilómetros en vacío",
      "Entregas a tiempo",
      "Ocupación",
      "Incidencias",
      "Tiempo administrativo",
      "Coste por ruta",
    ],
    startNotes: DEFAULT_START,
    riskNotes: [
      "Las cifras que aparecen en esquemas ilustrativos no son resultados medidos de un cliente.",
    ],
    related: ["industria-ingenieria", "agroalimentacion", "supermercados"],
    faqs: [
      {
        question: "¿Necesito cambiar mi TMS o mi ERP?",
        answer:
          "No como punto de partida. Se estudia qué datos ya salen de esos sistemas y se diseña el piloto sobre ellos.",
      },
      {
        question: "¿La IA puede cambiar rutas sola?",
        answer:
          "Puede proponer. Los cambios con impacto en seguridad, coste o compromiso de entrega deben confirmarse por operaciones.",
      },
      {
        question: "¿Qué datos hacen falta para empezar?",
        answer:
          "Un histórico reciente de pedidos, rutas o documentos de entrega. Con eso se ve si hay señal suficiente para un piloto.",
      },
      {
        question: "¿Se puede conectar con el software actual?",
        answer:
          "Si hay API, exportación o buzón de documentos, sí se puede plantear. La integración concreta se confirma al ver el entorno.",
      },
    ],
  },
  {
    slug: "agricultura-ecologica",
    hubOrder: 3,
    filter: "agro",
    name: "Agricultura ecológica",
    shortName: "Agricultura",
    h1: "IA para agricultura ecológica",
    lead: "Convierte sensores, meteorología, imágenes y conocimiento agronómico en recomendaciones para utilizar mejor agua, recursos y tiempo.",
    hubPhrase:
      "Campo, riego, clima y cosecha leídos juntos para decidir con criterio agronómico.",
    tags: ["sensores", "riego", "trazabilidad"],
    alt: "Esquema isométrico de aplicación de IA en agricultura ecológica, conectando sensores, riego, cultivo, cosecha y trazabilidad.",
    seoTitle: "IA para agricultura ecológica | Automatización e IA aplicada",
    seoDescription:
      "Modelos de inteligencia artificial para conectar sensores, meteorología, riego, cosecha y trazabilidad en explotaciones de agricultura ecológica.",
    image: img("agricultura-ecologica.jpg", 1536, 1024),
    problem:
      "El cuaderno de campo, el riego y la observación visual viven en sitios distintos. Se riega por costumbre, se reacciona tarde a un estrés hídrico y la trazabilidad se reconstruye cuando el cliente la pide.",
    problemItems: [
      "Decisiones de riego sin cruzar clima, suelo y parcela",
      "Detección tardía de estrés o plaga",
      "Cosecha planificada con poca visibilidad de madurez",
      "Trazabilidad que se arma a posteriori",
    ],
    dataSources: [
      "sensores de humedad",
      "estaciones meteorológicas",
      "imágenes de dron o satélite",
      "histórico de cultivo",
      "riego",
      "cuaderno de campo",
      "ERP",
    ],
    systems: [
      "sensores y estaciones",
      "ERP agrícola",
      "cuaderno digital",
      "correo",
      "software de riego",
      "gestión documental",
    ],
    aiLayer: [
      "Detección de estrés hídrico",
      "Predicción de rendimiento",
      "Recomendación de riego",
      "Apoyo visual a detección de incidencias",
      "Planificación de cosecha",
      "Trazabilidad y resumen de lote",
    ],
    workflow: [
      "Campo",
      "Sensores",
      "Análisis",
      "Recomendación",
      "Validación agronómica",
      "Acción",
      "Medición",
    ],
    solutions: [
      {
        title: "Monitorización",
        body: "Unificar humedad, clima e imágenes por parcela para ver el estado real.",
      },
      {
        title: "Riego",
        body: "Proponer cuándo y dónde regar, para que el criterio agronómico confirme.",
      },
      {
        title: "Incidencias de cultivo",
        body: "Alertar de patrones anómalos. El tratamiento lo decide quien conoce el campo.",
      },
      {
        title: "Cosecha",
        body: "Ayudar a estimar ventana de recolección y capacidad de personal.",
      },
      {
        title: "Trazabilidad",
        body: "Preparar el hilo de lote, origen y manejo para quien lo tiene que firmar.",
      },
      {
        title: "Distribución",
        body: "Coordinar salida a cliente con calidad y disponibilidad reales.",
      },
    ],
    automatable: [
      "Alertas de umbral",
      "Resúmenes de parcela",
      "Clasificación de registros de campo",
    ],
    needsConfirmation: [
      "Cambios de programa de riego",
      "Prioridad de cosecha",
    ],
    humanControl: [
      "Tratamientos",
      "Decisiones agronómicas",
      "Uso de productos",
      "Cosecha",
    ],
    kpis: [
      "Consumo de agua",
      "Rendimiento",
      "Merma",
      "Tiempo de campo",
      "Incidencias",
      "Consumo de recursos",
    ],
    startNotes: DEFAULT_START,
    riskNotes: [
      "La IA no sustituye el criterio agronómico ni decide tratamientos por su cuenta.",
    ],
    related: ["agroalimentacion", "energia", "industria-ingenieria"],
    faqs: [
      {
        question: "¿Hace falta una explotación muy sensorada para empezar?",
        answer:
          "No. Se parte de lo que ya se registra: riego, clima, cuaderno o histórico. Los sensores se añaden si el piloto lo justifica.",
      },
      {
        question: "¿La IA puede decidir un tratamiento?",
        answer:
          "No. Puede señalar un patrón. El tratamiento y el uso de productos quedan en manos de quien tiene la responsabilidad agronómica.",
      },
      {
        question: "¿Qué se mide en un piloto?",
        answer:
          "Tiempo de decisión, agua, incidencias detectadas a tiempo y calidad de la trazabilidad. No se afirman porcentajes genéricos.",
      },
      {
        question: "¿Se conecta con el ERP agrícola?",
        answer:
          "Si hay exportación o API, sí se evalúa. Si el ERP es rígido, el piloto puede vivir primero sobre archivos y registros de campo.",
      },
    ],
  },
  {
    slug: "agroalimentacion",
    hubOrder: 4,
    filter: "agro",
    name: "Agroalimentación",
    shortName: "Agroalimentación",
    h1: "IA para empresas agroalimentarias",
    lead: "Conecta campo, cosecha, planta, calidad, frío, inventario y clientes para mejorar continuidad, trazabilidad y planificación.",
    hubPhrase:
      "De la parcela al cliente: calidad, frío, stock y pedidos en un mismo hilo.",
    tags: ["calidad", "frío", "ERP"],
    alt: "Esquema técnico de aplicación de IA en agroalimentación, conectando cultivo, procesado, calidad, cadena de frío y distribución.",
    seoTitle: "IA para agroalimentación | Automatización empresarial",
    seoDescription:
      "Modelos de inteligencia artificial para conectar cultivo, calidad, procesado, cadena de frío, inventario y clientes en empresas agroalimentarias.",
    image: img(null, 1672, 941, {
      flag: "NEEDS_BRAND_NEUTRAL_VERSION",
      brands: ["Primaflor"],
    }),
    problem:
      "El producto fresco no espera a que administración reconstruya un lote. Cuando calidad, almacén y comercial no comparten el mismo estado, aparece merma, rotura o una entrega que no se puede defender.",
    problemItems: [
      "Planificación de cosecha y planta desalineadas",
      "Calidad registrada tarde o en papeles sueltos",
      "Stock de fresco difícil de priorizar",
      "Cadena de frío e incidencias mal documentadas",
    ],
    dataSources: [
      "campo",
      "sensores",
      "meteorología",
      "ERP",
      "producción",
      "calidad",
      "almacén",
      "pedidos",
      "clientes",
    ],
    systems: [
      "ERP",
      "calidad",
      "almacén",
      "CRM",
      "sensores de frío",
      "documentación",
      "APIs de clientes",
    ],
    aiLayer: [
      "Predicción de rendimiento",
      "Apoyo al momento de cosecha",
      "Control visual asistido",
      "Planificación de planta",
      "Previsión de demanda",
      "Priorización de stock",
      "Alertas de frío y calidad",
    ],
    workflow: [
      "Cultivo",
      "Cosecha",
      "Control",
      "Procesado",
      "Almacén",
      "Cadena de frío",
      "Cliente",
    ],
    solutions: [
      {
        title: "Planificación agronómica",
        body: "Cruzar parcela, clima e histórico para preparar cosecha y recursos.",
      },
      {
        title: "Calidad",
        body: "Clasificar evidencias y alertar no conformidades para supervisión humana.",
      },
      {
        title: "Planta",
        body: "Ayudar a secuenciar líneas según pedido, frescura y personal disponible.",
      },
      {
        title: "Stock y frío",
        body: "Priorizar rotación y detectar desviaciones de temperatura a tiempo.",
      },
      {
        title: "Demanda",
        body: "Anticipar pedidos recurrentes sin tratar el forecast como un pedido firme.",
      },
      {
        title: "Comercial",
        body: "Consultar disponibilidad y trazabilidad antes de comprometer una salida.",
      },
    ],
    automatable: [
      "Alertas de umbral de frío",
      "Clasificación de registros de calidad",
      "Resúmenes de lote",
    ],
    needsConfirmation: [
      "Cambios de plan de cosecha",
      "Rechazo o desviación de producto",
      "Compromisos comerciales",
    ],
    humanControl: [
      "Decisiones de calidad",
      "Liberación de lote",
      "Criterio agronómico",
      "Relación con el cliente",
    ],
    kpis: [
      "Merma",
      "Calidad",
      "Incidencias de frío",
      "Entregas",
      "Stock de fresco",
      "Tiempo de trazabilidad",
    ],
    startNotes: DEFAULT_START,
    riskNotes: [
      "No se presentan marcas agroalimentarias como clientes. El modelo es sectorial y conceptual.",
    ],
    related: ["agricultura-ecologica", "logistica-transporte", "supermercados"],
    faqs: [
      {
        question: "¿El piloto tiene que cubrir de la semilla al lineal?",
        answer:
          "No. Se elige un tramo —calidad, frío, pedidos o cosecha— donde ya hay datos y un cuello de botella claro.",
      },
      {
        question: "¿La IA libera un lote?",
        answer:
          "No. Puede reunir evidencias y señalar desviaciones. La liberación de lote sigue siendo una decisión de calidad.",
      },
      {
        question: "¿Qué sistemas se suelen conectar?",
        answer:
          "ERP, calidad, almacén y, si existe, sensor de frío o exportación de pedidos. Las marcas concretas se confirman en el diagnóstico.",
      },
      {
        question: "¿Sirve para producto fresco y para procesado?",
        answer:
          "Sí, con flujos distintos. El fresco prioriza merma y frío; el procesado, secuencia de planta y no conformidades.",
      },
    ],
  },
  {
    slug: "materiales-construccion",
    hubOrder: 5,
    filter: "comercio",
    name: "Materiales de construcción",
    shortName: "Materiales",
    h1: "IA para distribución de materiales de construcción",
    lead: "Ayuda al equipo comercial a encontrar el producto adecuado, preparar presupuestos, conocer disponibilidad y coordinar almacén y entrega.",
    hubPhrase:
      "Catálogo, stock, presupuesto y entrega alineados para vender sin perderse en fichas.",
    tags: ["catálogo", "stock", "ERP"],
    alt: "Esquema isométrico de aplicación de IA en distribución de materiales de construcción, conectando catálogo, stock, ventas y logística.",
    seoTitle:
      "IA para materiales de construcción | Automatización empresarial",
    seoDescription:
      "Modelos de inteligencia artificial para conectar catálogo, presupuestos, stock, almacén y entrega en distribución de materiales de construcción.",
    image: img("materiales-construccion.jpg", 1536, 1024),
    problem:
      "El comercial busca una ficha, el almacén otra disponibilidad y el presupuesto se arma a mano. El cliente espera una respuesta que cruza producto, stock y plazo, y esa respuesta hoy vive en tres sitios.",
    problemItems: [
      "Catálogo difícil de consultar con criterio técnico",
      "Presupuestos lentos y con copiar-pegar",
      "Stock que no coincide con lo que se promete",
      "Entregas coordinadas tarde con el mostrador",
    ],
    dataSources: [
      "ERP",
      "catálogo",
      "tarifas",
      "fichas técnicas",
      "CRM",
      "proveedores",
      "stock",
      "historial",
      "correo",
      "e-commerce",
    ],
    systems: [
      "ERP",
      "CRM",
      "e-commerce",
      "correo",
      "gestión documental",
      "software de almacén",
    ],
    aiLayer: [
      "Búsqueda y recomendación de producto",
      "Apoyo a presupuestos",
      "Consulta de disponibilidad",
      "Clasificación de consultas",
      "Priorización de compras",
      "Asistencia postventa",
    ],
    workflow: [
      "Consulta",
      "Producto",
      "Presupuesto",
      "Stock",
      "Pedido",
      "Entrega",
      "Postventa",
    ],
    solutions: [
      {
        title: "Catálogo técnico",
        body: "Encontrar el material adecuado a partir de uso, medida o ficha, no solo de referencia.",
      },
      {
        title: "Presupuestos",
        body: "Preparar borradores a partir de tarifas y equivalentes para que comercial revise.",
      },
      {
        title: "Stock y compras",
        body: "Alertar roturas y sugerir reposición según rotación real.",
      },
      {
        title: "Atención",
        body: "Responder disponibilidad y estado de pedido, y escalar lo que exige mostrador.",
      },
      {
        title: "Logística",
        body: "Coordinar salida y ruta corta con el compromiso de entrega.",
      },
      {
        title: "Documentación",
        body: "Localizar fichas, certificados y albaranes sin reabrir el archivo.",
      },
    ],
    automatable: [
      "Clasificación de consultas",
      "Búsqueda de fichas",
      "Avisos de stock",
    ],
    needsConfirmation: [
      "Precios especiales",
      "Equivalencias de producto",
      "Compromisos de plazo",
    ],
    humanControl: [
      "Negociación comercial",
      "Excepciones de tarifa",
      "Incidencias de obra",
    ],
    kpis: [
      "Tiempo de presupuesto",
      "Rotura de stock",
      "Errores de pedido",
      "Tiempo de respuesta",
      "Incidencias de entrega",
    ],
    startNotes: DEFAULT_START,
    riskNotes: [],
    related: ["superficies-materiales", "retail", "industria-ingenieria"],
    faqs: [
      {
        question: "¿Sustituye al comercial de mostrador?",
        answer:
          "No. Reduce la búsqueda y el tecleo para que el comercial decida y cierre. Las equivalencias y precios especiales se confirman.",
      },
      {
        question: "¿Se conecta con el ERP de almacén?",
        answer:
          "Si hay stock consultable, ese es el dato más útil del piloto. La forma de conexión se ve en el diagnóstico.",
      },
      {
        question: "¿Sirve también para e-commerce?",
        answer:
          "Sí, sobre todo para búsqueda, fichas y disponibilidad. El canal online no exige automatizar la venta completa.",
      },
      {
        question: "¿Qué alcance tendría un primer piloto?",
        answer:
          "Normalmente un family de producto o el flujo consulta → disponibilidad → borrador de presupuesto.",
      },
    ],
  },
  {
    slug: "retail",
    hubOrder: 6,
    filter: "comercio",
    name: "Retail",
    shortName: "Comercio",
    h1: "IA para retail y comercio",
    lead: "Conecta tienda, almacén, catálogo, atención y canal online para vender con menos fricción operativa.",
    hubPhrase:
      "Tienda, stock, atención y canal digital coordinados sobre los mismos datos.",
    tags: ["TPV", "stock", "CRM"],
    alt: "Esquema isométrico de aplicación de IA en retail, conectando tienda, almacén, atención al cliente y canal online.",
    seoTitle: "IA para retail | Automatización e IA aplicada",
    seoDescription:
      "Modelos de inteligencia artificial para conectar catálogo, stock, tienda, atención y canal online en comercios y retail.",
    image: img("retail.jpg", 1536, 1024),
    problem:
      "La tienda sabe lo que se vende, el almacén lo que hay y el canal online otra cosa. Las consultas repetidas, las roturas y las campañas se resuelven a pulso porque esos datos no se leen juntos.",
    problemItems: [
      "Surtido y reposición poco anticipados",
      "Atención repetida sobre horarios, stock y pedidos",
      "Tienda y online desalineados",
      "Promociones difíciles de evaluar a posteriori",
    ],
    dataSources: [
      "TPV",
      "ERP",
      "stock",
      "catálogo",
      "CRM",
      "e-commerce",
      "correo",
      "promociones",
    ],
    systems: [
      "TPV",
      "ERP",
      "CRM",
      "e-commerce",
      "correo",
      "software de almacén",
    ],
    aiLayer: [
      "Previsión de demanda",
      "Recomendación de surtido",
      "Detección de baja rotación",
      "Clasificación de consultas",
      "Apoyo a campañas",
      "Priorización de reposición",
    ],
    workflow: [
      "Demanda",
      "Surtido",
      "Stock",
      "Tienda",
      "Canal online",
      "Atención",
      "Medición",
    ],
    solutions: [
      {
        title: "Producto",
        body: "Anticipar qué rotará y qué ocupa sitio sin venderse.",
      },
      {
        title: "Tienda",
        body: "Apoyar horarios, reposición y consultas de mostrador con datos reales.",
      },
      {
        title: "Atención",
        body: "Resolver preguntas repetidas y dejar a una persona lo que exige criterio.",
      },
      {
        title: "Canal online",
        body: "Alinear disponibilidad, pedidos y recogida con el stock de tienda.",
      },
      {
        title: "Logística corta",
        body: "Preparar reposición entre almacén y punto de venta.",
      },
      {
        title: "Dirección",
        body: "Resumir ventas, roturas e incidencias sin un cuadro de mando ficticio.",
      },
    ],
    automatable: [
      "Respuestas frecuentes",
      "Alertas de rotura",
      "Clasificación de tickets",
    ],
    needsConfirmation: [
      "Cambios de precio",
      "Campañas",
      "Pedidos a proveedor",
    ],
    humanControl: [
      "Relación con el cliente en tienda",
      "Excepciones comerciales",
      "Devoluciones conflictivas",
    ],
    kpis: [
      "Rotura de stock",
      "Tiempo de respuesta",
      "Tareas administrativas",
      "Alineación tienda-online",
      "Rotación",
    ],
    startNotes: DEFAULT_START,
    riskNotes: [],
    related: ["supermercados", "materiales-construccion", "logistica-transporte"],
    faqs: [
      {
        question: "¿Sirve para un comercio pequeño, no solo para una cadena?",
        answer:
          "Sí. El tamaño del piloto se ajusta a TPV, stock y el canal que realmente usáis. No hace falta un stack de gran superficie.",
      },
      {
        question: "¿Automatiza descuentos y campañas?",
        answer:
          "Puede proponer o preparar mensajes. Precio, margen y campaña los confirma quien lleva el negocio.",
      },
      {
        question: "¿Qué datos hacen falta?",
        answer:
          "Ventas, stock y, si existe, el buzón de consultas. Con eso se ve el primer cuello de botella.",
      },
      {
        question: "¿Hay que cambiar el TPV?",
        answer:
          "No como requisito. Se parte de la exportación o del software que ya está en caja.",
      },
    ],
  },
  {
    slug: "supermercados",
    hubOrder: 7,
    filter: "comercio",
    name: "Supermercados",
    shortName: "Supermercados",
    h1: "IA para supermercados",
    lead: "Mejora previsión, surtido, reposición, promociones y logística para vender mejor reduciendo roturas y desperdicio.",
    hubPhrase:
      "Surtido, reposición y fresco coordinados para reducir rotura y merma.",
    tags: ["TPV", "merma", "reposición"],
    alt: "Esquema isométrico de aplicación de IA en supermercados, conectando surtido, stock, tienda, logística y clientes.",
    seoTitle: "IA para supermercados | Automatización empresarial",
    seoDescription:
      "Modelos de inteligencia artificial para conectar previsión de demanda, surtido, reposición, merma y logística en supermercados.",
    image: img("supermercados.jpg", 1672, 941),
    problem:
      "El lineal se rompe o se tira producto porque la previsión, la promoción y la reposición no hablan. El desperdicio no es solo un problema ético: es un proceso que se puede leer antes de que el producto caduque.",
    problemItems: [
      "Roturas en referencias de alta rotación",
      "Merma de fresco mal anticipada",
      "Promociones que descuadran el stock",
      "Reposición de tienda poco priorizada",
    ],
    dataSources: [
      "TPV",
      "ERP",
      "stock",
      "proveedores",
      "fidelización",
      "e-commerce",
      "mermas",
      "promociones",
    ],
    systems: [
      "TPV",
      "ERP",
      "almacén",
      "fidelización",
      "e-commerce",
      "software de pedidos a proveedor",
    ],
    aiLayer: [
      "Previsión de demanda",
      "Reposición asistida",
      "Detección de anomalías",
      "Apoyo a promociones",
      "Segmentación operativa",
      "Priorización de rutas internas",
    ],
    workflow: [
      "Demanda",
      "Pedido",
      "Almacén",
      "Tienda",
      "Fresco",
      "Promoción",
      "Medición",
    ],
    solutions: [
      {
        title: "Demanda",
        body: "Anticipar qué se va a pedir mañana con el histórico de tienda, no con una media nacional.",
      },
      {
        title: "Fresco y merma",
        body: "Priorizar rotación y señalar partidas en riesgo para que tienda actúe.",
      },
      {
        title: "Reposición",
        body: "Ordenar lo que debe subir a lineal según rotura probable.",
      },
      {
        title: "Promociones",
        body: "Cruzar oferta y stock antes de empujar una referencia.",
      },
      {
        title: "Logística de tienda",
        body: "Coordinar almacén, muelle y horario de personal.",
      },
      {
        title: "Atención y fidelización",
        body: "Resolver consultas repetidas y dejar la excepción al equipo de tienda.",
      },
    ],
    automatable: [
      "Alertas de rotura",
      "Listas de reposición",
      "Resúmenes de merma",
    ],
    needsConfirmation: [
      "Pedidos a proveedor",
      "Cambios de surtido",
      "Promociones",
    ],
    humanControl: [
      "Calidad de fresco",
      "Retirada de producto",
      "Relación con el cliente en tienda",
    ],
    kpis: [
      "Rotura",
      "Merma",
      "Stock",
      "Tiempo de reposición",
      "Coste logístico interno",
    ],
    startNotes: DEFAULT_START,
    riskNotes: [
      "No se usan porcentajes de ilustraciones como promesa de merma o venta.",
    ],
    related: ["retail", "logistica-transporte", "agroalimentacion"],
    faqs: [
      {
        question: "¿El piloto cubre toda la tienda?",
        answer:
          "Mejor no. Se elige fresco, una familia de alta rotación o el flujo de reposición. Ampliar viene después de medir.",
      },
      {
        question: "¿Reemplaza al jefe de tienda?",
        answer:
          "No. Prioriza y alerta. Pedido, retirada y promoción siguen siendo decisiones del equipo.",
      },
      {
        question: "¿Hace falta un data lake?",
        answer:
          "No. Con TPV, stock y merma exportables se puede estudiar un primer caso.",
      },
      {
        question: "¿Aplica a un supermercado independiente?",
        answer:
          "Sí, con un alcance más pequeño. El valor está en el proceso, no en el tamaño de la cadena.",
      },
    ],
  },
  {
    slug: "inmobiliario",
    hubOrder: 8,
    filter: "servicios",
    name: "Inmobiliario",
    shortName: "Inmobiliario",
    h1: "IA para inmobiliarias",
    lead: "Conecta captación, catálogo, visitas, contratos y atención para reducir trabajo repetido sin sustituir el criterio comercial.",
    hubPhrase:
      "Captación, inmuebles, visitas y documentación con menos idas y venidas.",
    tags: ["CRM", "catálogo", "contratos"],
    alt: "Esquema técnico de aplicación de IA en actividad inmobiliaria, conectando captación, catálogo, visitas y documentación.",
    seoTitle: "IA para inmobiliarias | Automatización e IA aplicada",
    seoDescription:
      "Modelos de inteligencia artificial para conectar captación, catálogo de inmuebles, visitas, atención y documentación en inmobiliarias.",
    image: img(null, 1672, 941, {
      flag: "NEEDS_BRAND_NEUTRAL_VERSION",
      brands: ["idealista", "fotocasa", "habitaclia", "kyero", "pisos.com"],
    }),
    problem:
      "Cada inmueble genera fotos, anuncios, visitas, llamadas y papeles. El tiempo se va en reescribir lo mismo y en calentar contactos que no encajan. La IA puede ordenar; no debe perfilar personas por características protegidas.",
    problemItems: [
      "Captación y seguimiento comercial dispersos",
      "Fichas y anuncios reescritos a mano",
      "Agenda de visitas frágil",
      "Contratos y documentos difíciles de localizar",
    ],
    dataSources: [
      "CRM",
      "catálogo de inmuebles",
      "correo",
      "llamadas",
      "documentos",
      "agenda",
      "web propia",
    ],
    systems: [
      "CRM",
      "gestión documental",
      "correo",
      "agenda",
      "web",
      "almacenamiento de archivos",
    ],
    aiLayer: [
      "Clasificación de consultas",
      "Borradores de ficha y resumen de inmueble",
      "Priorización de seguimiento",
      "Extracción de datos de contratos",
      "Preparación de visitas",
      "Respuestas frecuentes",
    ],
    workflow: [
      "Captación",
      "Ficha",
      "Publicación",
      "Consulta",
      "Visita",
      "Documentación",
      "Cierre",
    ],
    solutions: [
      {
        title: "Captación",
        body: "Ordenar leads y recordatorios según el estado real del CRM, no según intuición suelta.",
      },
      {
        title: "Catálogo",
        body: "Preparar descripciones y datos de ficha para que el agente revise y publique.",
      },
      {
        title: "Atención",
        body: "Responder horarios, zona y documentación básica, y pasar a humano lo comercial.",
      },
      {
        title: "Visitas",
        body: "Ayudar a confirmar, recordar y dejar constancia, sin asignar citas a ciegas.",
      },
      {
        title: "Documentación",
        body: "Localizar contratos, notas simples y requisitos para quien debe firmar.",
      },
      {
        title: "Operaciones",
        body: "Resumir cartera e incidencias de alquiler o postventa.",
      },
    ],
    automatable: [
      "Clasificación de consultas",
      "Borradores de ficha",
      "Recordatorios",
    ],
    needsConfirmation: [
      "Publicación de un inmueble",
      "Valoración",
      "Compromisos de visita o de oferta",
    ],
    humanControl: [
      "Negociación",
      "Selección de inquilino o comprador",
      "Cualquier filtro sobre personas",
    ],
    kpis: [
      "Tiempo de publicación",
      "Tiempo de respuesta",
      "Visitas fallidas",
      "Horas administrativas",
      "Documentos localizados a tiempo",
    ],
    startNotes: DEFAULT_START,
    riskNotes: [
      "No se segmentan candidatos por características protegidas.",
      "No se presentan portales inmobiliarios como partners o clientes.",
    ],
    related: ["retail", "formacion", "materiales-construccion"],
    faqs: [
      {
        question: "¿Publica anuncios sola en portales?",
        answer:
          "No. Puede preparar la ficha. La publicación y el canal los decide la agencia. No asumimos integraciones con portales concretos.",
      },
      {
        question: "¿Puede filtrar inquilinos o compradores?",
        answer:
          "No por atributos protegidos ni como scoring opaco de personas. El criterio comercial y legal sigue siendo humano.",
      },
      {
        question: "¿Qué datos hacen falta?",
        answer:
          "CRM, fichas y el buzón de consultas. Con un conjunto pequeño de inmuebles se prueba el flujo.",
      },
      {
        question: "¿Sustituye al agente?",
        answer:
          "No. Reduce reescritura y búsqueda. Captación, visita y cierre siguen siendo trabajo comercial.",
      },
    ],
  },
  {
    slug: "clinicas-dentales",
    hubOrder: 9,
    filter: "salud",
    name: "Clínicas dentales",
    shortName: "Clínicas",
    h1: "IA para clínicas dentales",
    lead: "Reduce carga administrativa en agenda, atención y documentación para que el tiempo clínico se quede en el sillón, no en el mostrador.",
    hubPhrase:
      "Agenda, atención y administración con apoyo, sin sustituir al odontólogo.",
    tags: ["agenda", "CRM", "documentos"],
    alt: "Esquema técnico de aplicación de IA en clínicas dentales, conectando agenda, atención, documentación y administración.",
    seoTitle: "IA para clínicas dentales | Automatización administrativa",
    seoDescription:
      "Modelos de inteligencia artificial para apoyar agenda, atención y administración en clínicas dentales, siempre bajo supervisión profesional.",
    image: img("clinicas-dentales.jpg", 1672, 941),
    problem:
      "La clínica pierde tiempo en teléfono, recordatorios, papeles y seguimientos. Eso no se resuelve con un chatbot que finge ser dentista. Se resuelve ordenando administración y dejando el criterio clínico donde debe estar.",
    problemItems: [
      "Agenda con ausencias y huecos mal aprovechados",
      "Recepción saturada de consultas repetidas",
      "Documentación y presupuestos lentos",
      "Seguimientos que dependen de la memoria del equipo",
    ],
    dataSources: [
      "agenda",
      "CRM",
      "historial administrativo",
      "formularios",
      "documentos",
      "facturación",
    ],
    systems: [
      "software de clínica",
      "agenda",
      "correo",
      "teléfono y mensajería",
      "facturación",
      "gestión documental",
    ],
    aiLayer: [
      "Clasificación de consultas",
      "Apoyo a agenda y recordatorios",
      "Borradores de documentación administrativa",
      "Resúmenes para el equipo",
      "Seguimiento de citas",
    ],
    workflow: [
      "Consulta",
      "Agenda",
      "Recepción",
      "Documentación",
      "Tratamiento",
      "Seguimiento",
      "Administración",
    ],
    solutions: [
      {
        title: "Primer contacto",
        body: "Clasificar motivo y urgencia aparente para que recepción asigne, no para diagnosticar.",
      },
      {
        title: "Agenda",
        body: "Recordatorios y detección de huecos. La cita la confirma el equipo.",
      },
      {
        title: "Recepción",
        body: "Responder horarios, preparación de visita y dudas administrativas.",
      },
      {
        title: "Documentación",
        body: "Preparar borradores de información y formularios para revisión humana.",
      },
      {
        title: "Administración",
        body: "Clasificar facturas, consentimientos y seguimientos no clínicos.",
      },
      {
        title: "Dirección",
        body: "Ver ocupación y ausencias como proceso, no como un ranking de pacientes.",
      },
    ],
    automatable: [
      "Recordatorios",
      "Clasificación de llamadas administrativas",
      "Borradores de mensajes",
    ],
    needsConfirmation: [
      "Citas",
      "Cambios de agenda",
      "Envío de información clínica",
    ],
    humanControl: [
      "Diagnóstico",
      "Plan de tratamiento",
      "Lectura de pruebas",
      "Cualquier decisión clínica",
    ],
    kpis: [
      "Ausencias",
      "Tiempo de recepción",
      "Tiempo administrativo",
      "Seguimientos realizados",
      "Ocupación de agenda",
    ],
    startNotes: DEFAULT_START,
    riskNotes: [
      "La IA no se presenta como odontólogo ni realiza diagnósticos autónomos.",
      "Cualquier apoyo sobre imagen clínica es asistencia al profesional y queda bajo supervisión.",
    ],
    related: ["formacion", "retail", "inmobiliario"],
    faqs: [
      {
        question: "¿La IA diagnostica o lee radiografías sola?",
        answer:
          "No en este modelo. El criterio clínico es del profesional. Cualquier apoyo sobre imagen sería asistencia supervisada, no un diagnóstico autónomo.",
      },
      {
        question: "¿Se conecta con el software de la clínica?",
        answer:
          "Se estudia agenda, documentación y facturación. No prometemos un conector concreto hasta ver el programa que usáis.",
      },
      {
        question: "¿Qué datos hacen falta?",
        answer:
          "Agenda, buzón de recepción y documentos administrativos. El historial clínico solo entra si hay base legal, minimización y control de acceso.",
      },
      {
        question: "¿Qué puede ejecutarse automáticamente?",
        answer:
          "Recordatorios, clasificación de consultas administrativas y borradores. Citas, clínica y envío de información sensible requieren persona.",
      },
    ],
  },
  {
    slug: "formacion",
    hubOrder: 10,
    filter: "formacion",
    name: "Formación",
    shortName: "Formación",
    h1: "IA para empresas de formación",
    lead: "Conecta captación, catálogo, contenidos, aprendizaje, soporte y administración para crear experiencias formativas más personalizadas.",
    hubPhrase:
      "Catálogo, campus, tutoría y administración conectados sin automatizar el criterio académico.",
    tags: ["LMS", "CRM", "contenidos"],
    alt: "Esquema isométrico de aplicación de IA en empresas de formación, conectando captación, catálogo, campus, tutoría y administración.",
    seoTitle: "IA para empresas de formación | Automatización e IA aplicada",
    seoDescription:
      "Modelos de inteligencia artificial para conectar captación, catálogo, campus, tutoría y administración en empresas de formación.",
    image: img("formacion.jpg", 1672, 941),
    problem:
      "Marketing promete un curso, el campus tiene otro ritmo y administración persigue matrículas y certificados. El alumno pregunta lo mismo veinte veces. La IA puede ordenar esa fricción; no debe decidir por su cuenta quién aprueba.",
    problemItems: [
      "Captación y catálogo poco alineados",
      "Soporte al alumno repetitivo",
      "Contenidos difíciles de adaptar o localizar",
      "Administración de matrícula y certificados lenta",
    ],
    dataSources: [
      "CRM",
      "LMS",
      "campus",
      "formularios",
      "pagos",
      "contenidos",
      "encuestas",
      "soporte",
    ],
    systems: [
      "CRM",
      "LMS",
      "correo",
      "pasarela de pago",
      "campus",
      "gestión documental",
    ],
    aiLayer: [
      "Recomendación de itinerario",
      "Tutor interno sobre materiales del curso",
      "Resúmenes y apoyo a contenidos",
      "Clasificación de tickets de soporte",
      "Subtitulado o adaptación asistida",
    ],
    workflow: [
      "Captación",
      "Matrícula",
      "Campus",
      "Tutoría",
      "Soporte",
      "Evaluación",
      "Administración",
    ],
    solutions: [
      {
        title: "Captación",
        body: "Ordenar consultas y encajar oferta con el perfil declarado, sin scoring opaco.",
      },
      {
        title: "Catálogo",
        body: "Ayudar a encontrar el curso adecuado según objetivo y nivel.",
      },
      {
        title: "Aprendizaje",
        body: "Tutor sobre el material del curso, con límites claros de lo que no puede certificar.",
      },
      {
        title: "Contenidos",
        body: "Borradores, resúmenes y adaptación para que el docente revise.",
      },
      {
        title: "Soporte",
        body: "Resolver dudas de acceso, calendario y materiales, y escalar lo académico.",
      },
      {
        title: "Administración",
        body: "Clasificar matrículas, pagos y certificados para reducir idas y venidas.",
      },
    ],
    automatable: [
      "Tickets repetidos de acceso",
      "Resúmenes de material",
      "Clasificación de leads",
    ],
    needsConfirmation: [
      "Ofertas comerciales",
      "Cambios de itinerario",
      "Comunicaciones evaluativas",
    ],
    humanControl: [
      "Evaluación",
      "Aprobación y certificación",
      "Decisiones académicas de alto impacto",
    ],
    kpis: [
      "Matriculación",
      "Finalización",
      "Abandono",
      "Tiempo de soporte",
      "Tiempo administrativo",
    ],
    startNotes: DEFAULT_START,
    riskNotes: [
      "Las decisiones académicas de alto impacto requieren revisión humana.",
    ],
    related: ["clinicas-dentales", "medios-radio", "retail"],
    faqs: [
      {
        question: "¿Puede evaluar o aprobar alumnos?",
        answer:
          "No de forma autónoma. Puede apoyar al docente con resúmenes o detección de lagunas. La evaluación queda en el equipo académico.",
      },
      {
        question: "¿Se conecta con el LMS?",
        answer:
          "Si el campus permite exportar o integrar, sí se estudia. Si no, el piloto puede empezar por soporte y contenidos.",
      },
      {
        question: "¿Genera los cursos enteros?",
        answer:
          "Puede asistir borradores. El diseño instruccional y la calidad docente los valida el equipo de formación.",
      },
      {
        question: "¿Qué alcance tiene un primer piloto?",
        answer:
          "Un programa, un canal de soporte o el flujo de matrícula. No un campus completo el primer mes.",
      },
    ],
  },
  {
    slug: "energia",
    hubOrder: 11,
    filter: "energia",
    name: "Energía",
    shortName: "Energía",
    h1: "IA para comercializadoras eléctricas",
    lead: "Conecta mercados, demanda, contratos, facturación y atención para reaccionar antes y gestionar mejor la energía.",
    hubPhrase:
      "Contratos, facturación, demanda y atención con una capa de control, no de piloto automático.",
    tags: ["contratos", "facturación", "CRM"],
    alt: "Esquema técnico de aplicación de IA en comercializadoras eléctricas, conectando demanda, contratos, facturación y atención.",
    seoTitle: "IA para comercializadoras eléctricas | Automatización empresarial",
    seoDescription:
      "Modelos de inteligencia artificial para conectar demanda, contratos, facturación y atención en comercializadoras eléctricas, sin asumir que operan red o generación.",
    image: img("energia.jpg", 1672, 941),
    problem:
      "Una comercializadora vive de contratos, precios, facturas e incidencias. Si se mezcla ese oficio con el de una eléctrica que opera red o generación, el discurso deja de servir. El modelo se adapta a lo que la empresa es de verdad.",
    problemItems: [
      "Atención saturada por facturas e incidencias",
      "Contratos y cambios de potencia difíciles de explicar",
      "Forecast y compras poco conectados con cartera",
      "Reporting que se arma a mano cada mes",
    ],
    dataSources: [
      "consumo",
      "precios",
      "contratos",
      "facturación",
      "CRM",
      "meteorología",
      "mercado",
      "telemedida cuando exista",
    ],
    systems: [
      "CRM",
      "facturación",
      "sistemas de mercado",
      "correo",
      "atención",
      "bases de datos",
    ],
    aiLayer: [
      "Predicción de demanda",
      "Segmentación operativa",
      "Detección de anomalías de consumo o factura",
      "Atención con contexto de contrato",
      "Análisis de factura",
      "Reporting asistido",
    ],
    workflow: [
      "Mercado",
      "Cartera",
      "Contrato",
      "Factura",
      "Atención",
      "Incidencia",
      "Medición",
    ],
    solutions: [
      {
        title: "Demanda y forecast",
        body: "Apoyar la previsión con el histórico de cartera, sin tratarla como despacho de red.",
      },
      {
        title: "Contratos",
        body: "Localizar condiciones y preparar explicaciones para que operaciones valide.",
      },
      {
        title: "Facturación",
        body: "Detectar anomalías y preparar revisiones antes de que el cliente llame.",
      },
      {
        title: "Atención",
        body: "Resolver consultas repetidas de factura y estado, y escalar reclamaciones.",
      },
      {
        title: "Autoconsumo",
        body: "Ordenar documentación y dudas frecuentes cuando ese servicio exista de verdad.",
      },
      {
        title: "Reporting",
        body: "Resumir cartera e incidencias para dirección, con trazas de de dónde sale cada cifra.",
      },
    ],
    automatable: [
      "Clasificación de tickets",
      "Borradores de explicación de factura",
      "Alertas de anomalía",
    ],
    needsConfirmation: [
      "Cambios contractuales",
      "Regularizaciones",
      "Comunicaciones de impago",
    ],
    humanControl: [
      "Condiciones comerciales",
      "Reclamaciones",
      "Decisiones de mercado",
    ],
    kpis: [
      "Error de forecast",
      "Tiempo de atención",
      "Incidencias de facturación",
      "Tiempo de resolución",
      "Coste operativo de backoffice",
    ],
    startNotes: DEFAULT_START,
    riskNotes: [
      "No se asume que la comercializadora posee red o generación. El lenguaje se adapta al modelo real de empresa.",
      "Algunos esquemas ilustrativos muestran generación o red como contexto visual; no describen el perímetro de un cliente concreto.",
    ],
    related: ["industria-ingenieria", "agricultura-ecologica", "banca-finanzas"],
    faqs: [
      {
        question: "¿El modelo sirve si no operamos red ni generación?",
        answer:
          "Sí. De hecho, ese es el caso más frecuente en comercializadoras. Se trabaja sobre contratos, facturas, demanda y atención.",
      },
      {
        question: "¿Puede cambiar un contrato sola?",
        answer:
          "No. Puede localizar condiciones y preparar un borrador. El cambio lo confirma operaciones.",
      },
      {
        question: "¿Qué datos hacen falta?",
        answer:
          "Facturación, contratos y tickets de atención. El resto —telemedida, mercado— entra si existe y aporta al caso.",
      },
      {
        question: "¿Se conecta con el sistema de facturación?",
        answer:
          "Si hay exportación o API, es el corazón del piloto. La integración se confirma al ver el software.",
      },
    ],
  },
  {
    slug: "medios-radio",
    hubOrder: 12,
    filter: "medios",
    name: "Medios y radio",
    shortName: "Medios",
    h1: "IA para medios y radio",
    lead: "Conecta redacción, archivo, producción, emisión y audiencia para producir más rápido sin ceder la responsabilidad editorial.",
    hubPhrase:
      "Redacción, archivo, producción y emisión con la última palabra en manos humanas.",
    tags: ["archivo", "redacción", "emisión"],
    alt: "Esquema isométrico de aplicación de IA en medios y radio, conectando redacción, archivo, producción, emisión y audiencia.",
    seoTitle: "IA para medios y radio | Automatización e IA aplicada",
    seoDescription:
      "Modelos de inteligencia artificial para conectar redacción, archivo, producción y emisión en medios y radio, manteniendo la responsabilidad editorial humana.",
    image: img("medios-radio.jpg", 1672, 941),
    problem:
      "Una redacción pequeña reescribe, busca en el archivo y atiende audiencia con el mismo equipo que tiene que emitir. La IA puede acelerar tareas; no puede firmar la información.",
    problemItems: [
      "Archivo difícil de reutilizar",
      "Producción repetitiva de cortes y resúmenes",
      "Publicidad y emisión poco coordinadas con redacción",
      "Atención a audiencia sin contexto",
    ],
    dataSources: [
      "archivo",
      "CMS",
      "guiones",
      "audio",
      "pauta",
      "CRM publicitario",
      "audiencia",
      "correo",
    ],
    systems: [
      "CMS",
      "archivo audiovisual",
      "correo",
      "CRM",
      "herramientas de emisión",
      "gestión documental",
    ],
    aiLayer: [
      "Transcripción y resumen asistido",
      "Búsqueda en archivo",
      "Borradores para revisión editorial",
      "Clasificación de contenidos",
      "Apoyo a pauta y atención",
    ],
    workflow: [
      "Ideación",
      "Archivo",
      "Producción",
      "Revisión editorial",
      "Emisión",
      "Audiencia",
      "Archivo de nuevo",
    ],
    solutions: [
      {
        title: "Redacción",
        body: "Preparar borradores y recortes de contexto para que el periodista edite.",
      },
      {
        title: "Archivo",
        body: "Encontrar cortes, programas y documentos por tema, fecha o invitado.",
      },
      {
        title: "Producción",
        body: "Transcribir, subtitular y agrupar materiales para el equipo técnico.",
      },
      {
        title: "Emisión",
        body: "Apoyar la pauta y detectar huecos, sin automatizar lo que sale al aire.",
      },
      {
        title: "Audiencia",
        body: "Clasificar mensajes y preguntas frecuentes.",
      },
      {
        title: "Publicidad",
        body: "Ordenar disponibilidad y materiales, con cierre humano.",
      },
    ],
    automatable: [
      "Transcripción",
      "Etiquetado de archivo",
      "Clasificación de mensajes",
    ],
    needsConfirmation: [
      "Publicación",
      "Titulares",
      "Lo que se emite",
    ],
    humanControl: [
      "Responsabilidad editorial",
      "Verificación",
      "Decisiones sobre fuentes y terceros",
    ],
    kpis: [
      "Tiempo de producción",
      "Reutilización de archivo",
      "Tiempo de respuesta a audiencia",
      "Horas de edición repetitiva",
    ],
    startNotes: DEFAULT_START,
    riskNotes: [
      "La responsabilidad editorial permanece humana.",
    ],
    related: ["formacion", "retail", "inmobiliario"],
    faqs: [
      {
        question: "¿Puede publicar o emitir sola?",
        answer:
          "No. Puede preparar materiales. La publicación y la emisión las firma el equipo editorial.",
      },
      {
        question: "¿Se conecta con el archivo o el CMS?",
        answer:
          "Si hay archivos accesibles o exportación, sí se estudia. No damos por hecha una integración con una plataforma concreta.",
      },
      {
        question: "¿Genera noticias?",
        answer:
          "Puede asistir borradores a partir de material propio. La verificación y el criterio son del medio.",
      },
      {
        question: "¿Qué piloto tiene más sentido?",
        answer:
          "Archivo + transcripción, o atención de audiencia. Son tareas repetidas y medibles.",
      },
    ],
  },
  {
    slug: "superficies-materiales",
    hubOrder: 13,
    filter: "industria",
    name: "Superficies y materiales",
    shortName: "Superficies",
    h1: "IA para fabricantes de superficies y materiales",
    lead: "Conecta especificación, producción, stock, logística y red comercial para gestionar proyectos complejos con mayor visibilidad.",
    hubPhrase:
      "Prescripción, producción, stock y red comercial sobre la misma especificación.",
    tags: ["catálogo", "producción", "CRM"],
    alt: "Esquema isométrico de aplicación de IA en fabricación de superficies y materiales, conectando prescripción, producción, stock y distribución.",
    seoTitle:
      "IA para superficies y materiales | Automatización empresarial",
    seoDescription:
      "Modelos de inteligencia artificial para conectar prescripción, catálogo, producción, stock y red comercial en fabricantes de superficies y materiales.",
    image: img("superficies-materiales.jpg", 1672, 941),
    problem:
      "Un proyecto de superficie recorre arquitecto, muestra, fábrica, almacén y obra. Si cada uno tiene una ficha distinta, aparecen mermas, plazos rotos y un comercial que promete lo que producción no puede.",
    problemItems: [
      "Prescripción lenta sobre un catálogo técnico amplio",
      "Producción y stock poco visibles para la red comercial",
      "Calidad e incidencias difíciles de rastrear por proyecto",
      "Postventa desconectada del pedido original",
    ],
    dataSources: [
      "ERP",
      "CRM",
      "CAD",
      "catálogo",
      "fichas",
      "MES",
      "calidad",
      "stock",
      "pedidos",
    ],
    systems: [
      "ERP",
      "CRM",
      "MES",
      "CAD",
      "gestión documental",
      "almacén",
      "APIs de red comercial",
    ],
    aiLayer: [
      "Recomendación de material",
      "Búsqueda técnica",
      "Apoyo a previsión de demanda",
      "Asistencia comercial",
      "Planificación",
      "Clasificación de incidencias",
    ],
    workflow: [
      "Prescripción",
      "Pedido",
      "Producción",
      "Calidad",
      "Stock",
      "Entrega",
      "Postventa",
    ],
    solutions: [
      {
        title: "Prescripción",
        body: "Encontrar el material según uso, color y ficha técnica para que comercial o el estudio confirmen.",
      },
      {
        title: "Catálogo",
        body: "Mantener equivalentes, acabados y disponibilidad consultables.",
      },
      {
        title: "Producción",
        body: "Cruzar pedidos y capacidad para detectar desviaciones pronto.",
      },
      {
        title: "Stock",
        body: "Priorizar lo que debe fabricarse o moverse según proyecto.",
      },
      {
        title: "Logística",
        body: "Coordinar salida a obra o distribuidor con el estado real.",
      },
      {
        title: "Postventa",
        body: "Localizar el lote y la incidencia sin reabrir el correo entero.",
      },
    ],
    automatable: [
      "Búsqueda de fichas",
      "Clasificación de incidencias",
      "Resúmenes de proyecto",
    ],
    needsConfirmation: [
      "Compromisos de plazo",
      "Equivalencias de material",
      "Cambios de especificación",
    ],
    humanControl: [
      "Calidad de producto",
      "Aceptación de proyecto",
      "Excepciones de red comercial",
    ],
    kpis: [
      "Merma",
      "Plazo",
      "Stock",
      "Incidencias",
      "Tiempo de prescripción",
      "Entregas",
    ],
    startNotes: DEFAULT_START,
    riskNotes: [
      "No se presenta ninguna marca de superficies como cliente.",
    ],
    related: ["materiales-construccion", "retail", "industria-ingenieria"],
    faqs: [
      {
        question: "¿Reemplaza al prescriptor o al comercial?",
        answer:
          "No. Acelera la búsqueda técnica y el estado de pedido. La especificación y el cierre siguen siendo humanos.",
      },
      {
        question: "¿Se conecta con ERP y MES?",
        answer:
          "Esas son las categorías habituales. La viabilidad depende de si el dato de producción y stock es consultable.",
      },
      {
        question: "¿Qué piloto encaja mejor?",
        answer:
          "Búsqueda de catálogo + estado de pedido, o clasificación de incidencias de postventa.",
      },
      {
        question: "¿Sirve para fábrica y para distribución?",
        answer:
          "Sí, con flujos distintos. Fábrica prioriza producción y calidad; distribución, stock y entrega.",
      },
    ],
  },
  {
    slug: "banca-finanzas",
    hubOrder: 14,
    filter: "finanzas",
    name: "Banca y finanzas",
    shortName: "Finanzas",
    h1: "IA para banca y servicios financieros",
    lead: "Utiliza IA para asistir a clientes y empleados, analizar documentación y agilizar operaciones dentro de un marco de control, seguridad y supervisión.",
    hubPhrase:
      "Documentación, atención y operaciones con supervisión. Sin crédito automático.",
    tags: ["documentos", "RAG", "operaciones"],
    alt: "Esquema técnico de aplicación de IA en servicios financieros, conectando documentación, atención, operaciones y control.",
    seoTitle: "IA para banca y finanzas | Automatización supervisada",
    seoDescription:
      "Modelos de inteligencia artificial para asistir documentación, atención y operaciones en servicios financieros, con supervisión humana y sin decisiones autónomas de crédito o inversión.",
    image: img(null, 1672, 941, {
      flag: "NEEDS_BRAND_NEUTRAL_VERSION",
      brands: ["CaixaBank"],
    }),
    problem:
      "El trabajo pesado está en documentos, consultas internas y operaciones repetidas. Eso se puede asistir. Lo que no se puede vender es un modelo que concede crédito, asesora inversiones o decide elegibilidad por su cuenta.",
    problemItems: [
      "Documentación lenta de localizar y clasificar",
      "Empleados que reescriben las mismas respuestas",
      "Operaciones con mucho tecleo y poco control visible",
      "Riesgo de automatizar decisiones que deben ser humanas",
    ],
    dataSources: [
      "documentación interna",
      "CRM",
      "correo",
      "expedientes",
      "operaciones",
      "bases de conocimiento",
    ],
    systems: [
      "gestión documental",
      "CRM",
      "correo",
      "herramientas internas",
      "control de accesos",
      "registros de auditoría",
    ],
    aiLayer: [
      "Asistente interno con RAG",
      "Clasificación documental",
      "Detección de anomalías operativas",
      "Resumen de expedientes",
      "Apoyo a atención, no a asesoramiento personalizado autónomo",
    ],
    workflow: [
      "Entrada",
      "Clasificación",
      "Contexto",
      "Recomendación",
      "Supervisión",
      "Acción",
      "Registro",
    ],
    solutions: [
      {
        title: "Conocimiento interno",
        body: "Consultar procedimientos y criterios publicados para el empleado, con control de acceso.",
      },
      {
        title: "Documentos",
        body: "Clasificar y extraer campos para que operaciones revise.",
      },
      {
        title: "Atención",
        body: "Preparar respuestas frecuentes. El asesoramiento personalizado no se delega al modelo.",
      },
      {
        title: "Operaciones",
        body: "Reducir tecleo en flujos repetidos, dejando la autorización en el circuito existente.",
      },
      {
        title: "Anomalías",
        body: "Señalar patrones raros para investigación humana, no como veredicto.",
      },
      {
        title: "Reporting",
        body: "Resumir colas y tiempos, sin inventar un cuadro de rentabilidad.",
      },
    ],
    automatable: [
      "Clasificación documental",
      "Borradores internos",
      "Enrutado de consultas",
    ],
    needsConfirmation: [
      "Cualquier acción sobre un expediente",
      "Comunicaciones al cliente",
      "Cambios operativos",
    ],
    humanControl: [
      "Crédito",
      "Inversión",
      "Elegibilidad",
      "Riesgo",
      "Fraude como decisión final",
    ],
    kpis: [
      "Tiempo operativo",
      "Tiempo de respuesta interna",
      "Documentos procesados con revisión",
      "Incidencias",
      "Retrabajo administrativo",
    ],
    startNotes: DEFAULT_START,
    riskNotes: [
      "No se presentan entidades financieras como clientes.",
      "No hay decisiones autónomas de crédito, inversión, elegibilidad o riesgo.",
      "No se genera asesoramiento financiero personalizado como si procediera de una entidad regulada.",
    ],
    related: ["formacion", "inmobiliario", "energia"],
    faqs: [
      {
        question: "¿Puede decidir un crédito o una inversión?",
        answer:
          "No. Ese perímetro queda fuera. El modelo asiste documentación y operaciones bajo supervisión.",
      },
      {
        question: "¿Qué datos hacen falta para empezar?",
        answer:
          "Un corpus interno de procedimientos y un flujo documental repetido, con permisos y registro de uso.",
      },
      {
        question: "¿Cómo se controla el acceso?",
        answer:
          "La arquitectura se diseña teniendo en cuenta permisos, separación de datos, logs y aprobación humana. No se afirma una certificación genérica.",
      },
      {
        question: "¿Puede atender al cliente final?",
        answer:
          "Puede ayudar en consultas operativas frecuentes. No sustituye al asesor ni emite recomendaciones personalizadas de producto financiero.",
      },
    ],
  },
];

export const footerPrioritySectors = [
  { slug: "industria-ingenieria", label: "Industria" },
  { slug: "logistica-transporte", label: "Logística" },
  { slug: "agricultura-ecologica", label: "Agricultura" },
  { slug: "retail", label: "Comercio" },
] as const;

export function iaSectorPath(slug: string): string {
  return `/ia-por-sector/${slug}`;
}

export function getIaSectors(): IaSector[] {
  return [...iaSectors].sort((a, b) => a.hubOrder - b.hubOrder);
}

export function getIaSector(slug: string): IaSector | undefined {
  return iaSectors.find((item) => item.slug === slug);
}

export function getRelatedSectors(sector: IaSector): IaSector[] {
  return sector.related
    .map((slug) => getIaSector(slug))
    .filter((item): item is IaSector => Boolean(item));
}

export function brandHoldSectors(): IaSector[] {
  return iaSectors.filter((item) => item.image.brandHold);
}

export function iaContactHref(input: {
  sector?: string;
  cta: string;
  source: string;
}): string {
  const params = new URLSearchParams();
  params.set("motivo", "ia");
  if (input.sector) params.set("sector", input.sector);
  params.set("cta", input.cta);
  params.set("origen", input.source);
  return `/contacto?${params.toString()}`;
}
