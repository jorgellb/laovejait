import { municipalityPath } from "@/lib/utils";

export type BusinessProfile = "tourism" | "industry" | "mixed";

export const businessProfileLabel: Record<BusinessProfile, string> = {
  tourism: "Hostelería y costa",
  industry: "Industria y comercio",
  mixed: "Mixto / interior",
};

export const businessProfileCode: Record<BusinessProfile, string> = {
  tourism: "TOURISM NODE",
  industry: "BUSINESS NODE",
  mixed: "MIXED NODE",
};

export type MunicipalityImage = {
  src: string;
  width: number;
  height: number;
};

export type MunicipalityMap = {
  lat: number;
  lon: number;
  zoom: number;
};

export type Municipality = {
  slug: string;
  name: string;
  province: "Almería";
  businessProfile: BusinessProfile;
  nearby: string[];
  image: MunicipalityImage | null;
  map: MunicipalityMap;
  metaTitle: string;
  metaDescription: string;
  heroDescription: string;
  intro: string;
  sectorHeading: string;
  sectorBody: string;
  localServices: string[];
  uniqueFaq: {
    question: string;
    answer: string;
  };
};

const STILL_SIZE = { width: 1672, height: 941 } as const;

function coverageStill(slug: string): MunicipalityImage {
  return {
    src: `/images/cobertura/mantenimiento-informatico-ia-${slug}-web.jpg`,
    width: STILL_SIZE.width,
    height: STILL_SIZE.height,
  };
}

export const coverageStillCaption =
  "Ilustración conceptual del servicio en el municipio. No representa un cliente concreto ni un caso publicado.";

export const municipalities: Municipality[] = [
  {
    slug: "vera",
    name: "Vera",
    province: "Almería",
    businessProfile: "industry",
    nearby: ["garrucha", "antas", "turre", "huercal-overa"],
    image: coverageStill("vera"),
    map: { lat: 37.2472, lon: -1.8681, zoom: 14 },
    metaTitle: "Mantenimiento informático e IA en Vera, Almería",
    metaDescription:
      "Soporte informático, servidores, redes, ciberseguridad e IA para comercios, almacenes y PYMEs de Vera y el Levante Almeriense.",
    heroDescription:
      "Vera concentra comercio, servicios y actividad hortofrutícola. Configuramos servidores, redes de almacén y oficinas, copias de seguridad y automatización documental para que el día a día no dependa de un PC suelto.",
    intro:
      "En Vera el cuello de botella suele ser operativo: albaranes, facturas, accesos compartidos y equipos que aguantan porque «siempre se ha hecho así». Ponemos orden en la infraestructura —servidores, copias, red y puestos— y, cuando aporta, conectamos esa documentación a un sistema RAG para consultar procedimientos sin rebuscar carpetas.",
    sectorHeading: "Infraestructura TI e IA aplicada a empresas de Vera",
    sectorBody:
      "Comercios del casco, almacenes de manipulado y despachos profesionales necesitan la misma base: puestos estables, una red que no se caiga en hora punta y copias que se puedan restaurar. Sobre esa base se puede automatizar clasificación de documentos o consultas internas con IA, sin montar un laboratorio que la empresa no va a mantener.",
    localServices: [
      "Mantenimiento de servidores y NAS en oficinas y almacenes",
      "Redes entre administración, muelle y puestos de trabajo",
      "Backup y recuperación de datos contables y de gestión",
      "RAG sobre procedimientos, tarifas y documentación interna",
      "Soporte presencial en Vera y municipios limítrofes",
    ],
    uniqueFaq: {
      question:
        "¿Tiene sentido un servidor propio para una PYME de Vera o basta la nube?",
      answer:
        "Depende del software, del volumen de archivos y de si hay varios puestos compartiendo la misma información. En Vera vemos ambos casos: un NAS o servidor local para gestión y copias, o un híbrido con Microsoft 365. Lo decidimos tras ver cómo trabajáis, no por moda.",
    },
  },
  {
    slug: "mojacar",
    name: "Mojácar",
    province: "Almería",
    businessProfile: "tourism",
    nearby: ["garrucha", "turre", "carboneras", "vera"],
    image: coverageStill("mojacar"),
    map: { lat: 37.1406, lon: -1.8514, zoom: 14 },
    metaTitle: "Informática e IA para hoteles y negocios en Mojácar",
    metaDescription:
      "Wi-Fi profesional, redes para TPV, ciberseguridad y asistentes de IA para hoteles, restaurantes y comercios de Mojácar.",
    heroDescription:
      "Mojácar combina residencias, hoteles y restauración con picos de ocupación. Ajustamos Wi-Fi de clientes, redes de TPV y copias, y estudiamos asistentes para consultas repetitivas cuando el negocio ya tiene canales digitales que integrar.",
    intro:
      "En Mojácar la red no es un extra: es el canal por el que el cliente pide la clave del Wi-Fi, el TPV cobra y recepción consulta reservas. Segmentamos invitados, personal y pagos, reforzamos la cobertura en habitaciones o terrazas, y revisamos que una incidencia de internet no arrastre a toda la operación.",
    sectorHeading:
      "Tecnología e IA para hoteles, restaurantes y negocios de Mojácar",
    sectorBody:
      "La temporada aprieta a recepción y sala. Además de Wi-Fi y TPV, se puede automatizar respuestas frecuentes —horarios, servicios, ubicación de documentos internos— con un asistente alimentado por la información del propio establecimiento. Eso no sustituye al personal; reduce interrupciones repetidas.",
    localServices: [
      "Wi-Fi profesional y redes mesh en hoteles y apartamentos",
      "Segmentación Guest / staff / TPV",
      "Ciberseguridad básica de puestos de recepción y caja",
      "Asistentes sobre documentación interna o FAQs del negocio",
      "Soporte en temporada alta con intervención local",
    ],
    uniqueFaq: {
      question:
        "¿Podéis mejorar el Wi-Fi de un hotel o restaurante en Mojácar sin cambiar toda la instalación?",
      answer:
        "A menudo sí. Primero medimos cobertura, interferencias y cómo está segmentada la red. En muchos casos basta con reubicar puntos de acceso, separar la red de invitados y ajustar canales. Si el cableado o el router no dan más de sí, lo diremos con claridad antes de proponer obra o equipos nuevos.",
    },
  },
  {
    slug: "garrucha",
    name: "Garrucha",
    province: "Almería",
    businessProfile: "tourism",
    nearby: ["vera", "mojacar", "antas"],
    image: coverageStill("garrucha"),
    map: { lat: 37.1814, lon: -1.8225, zoom: 14 },
    metaTitle: "Servicios informáticos y redes en Garrucha, Almería",
    metaDescription:
      "Redes, Wi-Fi, TPV, copias de seguridad e IA para restaurantes, hoteles y comercios del puerto de Garrucha.",
    heroDescription:
      "Garrucha vive del puerto, la restauración y el comercio de paseo. Mantenemos redes de sala y cocina, Wi-Fi de clientes y copias de TPV y gestión, con soporte presencial cuando un fallo corta el servicio en hora de comida o cena.",
    intro:
      "Un restaurante o un hotel en Garrucha no puede permitirse que la carta digital, el TPV o el correo de reservas cuelguen del mismo Wi-Fi abierto a los clientes. Separamos tráficos, revisamos copias y dejamos un esquema de red que el personal pueda explicar sin ser informáticos.",
    sectorHeading:
      "Tecnología e IA para hoteles, restaurantes y negocios de Garrucha",
    sectorBody:
      "En hostelería de puerto el pico es previsible: mediodía, noche y fines de semana. Priorizamos que caja y comandas no compartan canal con invitados, y que las copias de facturación existan fuera del TPV. Si hay volumen de consultas repetidas (menú, horarios, reservas), se puede apoyar con automatización sobre esa información.",
    localServices: [
      "Wi-Fi de clientes separado de caja y comandas",
      "Redes para TPV y puestos de sala",
      "Backup de gestión y facturación",
      "Soporte presencial en el núcleo urbano y el puerto",
      "Automatización de consultas frecuentes del negocio",
    ],
    uniqueFaq: {
      question:
        "Si se cae internet en un restaurante de Garrucha, ¿qué se puede dejar funcionando?",
      answer:
        "Depende de si el TPV, la comanda y la fiscalidad necesitan nube. Diseñamos la red para que un corte de WAN no arrastre Wi-Fi interno y, cuando el software lo permite, el cobro local siga operativo. Lo concreto se ve con vuestro TPV y operador, no con una promesa genérica.",
    },
  },
  {
    slug: "huercal-overa",
    name: "Huércal-Overa",
    province: "Almería",
    businessProfile: "industry",
    nearby: ["pulpi", "cuevas-del-almanzora", "vera", "antas"],
    image: coverageStill("huercal-overa"),
    map: { lat: 37.3897, lon: -1.9431, zoom: 13 },
    metaTitle: "Informático de empresas en Huércal-Overa",
    metaDescription:
      "Servidores, redes, ciberseguridad e integración de IA para empresas y comercios de Huércal-Overa y el Almanzora.",
    heroDescription:
      "Huércal-Overa es nudo comercial e interior del Almanzora. Mantenemos servidores, directorios, redes de nave y oficina, y proyectos de IA sobre facturas, albaranes y procedimientos de empresas que ya operan con volumen documental.",
    intro:
      "Entre el polígono, el comercio de avenida y las empresas de servicios hay un patrón común: varios puestos, un software de gestión y archivos que crecen sin política de copias. Intervenimos en servidores, Active Directory cuando aplica, y en el flujo documental antes de hablar de agentes de IA.",
    sectorHeading:
      "Infraestructura TI e IA aplicada a empresas de Huércal-Overa",
    sectorBody:
      "Las PYMEs de Huércal-Overa suelen combinar almacén, administración y comercial. Tiene sentido unificar accesos, copias y, después, un RAG o un agente que clasifique facturas y extraiga datos hacia el ERP. Sin esa base, la IA solo acelera el desorden.",
    localServices: [
      "Servidores Windows/Linux y virtualización",
      "Redes de nave, oficina y almacén",
      "Ciberseguridad y copias externas",
      "Automatización documental e integración con ERP",
      "Soporte en Huércal-Overa y desplazamientos por el Almanzora",
    ],
    uniqueFaq: {
      question:
        "¿Trabajáis con empresas de Huércal-Overa que ya tienen informático puntual?",
      answer:
        "Sí. Podemos encargarnos del mantenimiento continuo, de un proyecto concreto (migración, backup, red, IA) o coordinarnos con quien ya os lleva el software de gestión. No hace falta sustituir toda la cadena para ordenar infraestructura o documentación.",
    },
  },
  {
    slug: "cuevas-del-almanzora",
    name: "Cuevas del Almanzora",
    province: "Almería",
    businessProfile: "industry",
    nearby: ["huercal-overa", "pulpi", "vera", "antas"],
    image: coverageStill("cuevas-del-almanzora"),
    map: { lat: 37.2969, lon: -1.8797, zoom: 13 },
    metaTitle: "Mantenimiento informático en Cuevas del Almanzora",
    metaDescription:
      "Servidores, redes, backup e IA documental para empresas agrícolas e industriales de Cuevas del Almanzora.",
    heroDescription:
      "Cuevas del Almanzora mezcla agricultura, industria y servicios municipales dispersos. Conectamos sedes, reforzamos copias y redes, y aplicamos IA a procedimientos y documentación técnica cuando la empresa ya trabaja con archivos que nadie consigue encontrar a tiempo.",
    intro:
      "Cuando la administración está en el núcleo y la producción a kilómetros, el problema no es «tener internet»: es que los archivos, los permisos y las copias no viajen de forma fiable. Revisamos enlaces, VPN o accesos remotos con cabeza, y dejamos un esquema de copias que no dependa de un único disco en un despacho.",
    sectorHeading:
      "Infraestructura TI e IA aplicada a empresas de Cuevas del Almanzora",
    sectorBody:
      "Empresas agrícolas y de servicios generan albaranes, certificados y manuales de máquina. Un sistema RAG sobre esa base documental ahorra llamadas internas. Antes, hay que saber dónde viven esos archivos y quién puede verlos.",
    localServices: [
      "Conectividad entre sede y centros de trabajo",
      "Servidores, NAS y copias externas",
      "Ciberseguridad de accesos remotos",
      "RAG sobre manuales, calidad y procedimientos",
      "Soporte presencial en Cuevas y pedanías con cita",
    ],
    uniqueFaq: {
      question:
        "¿Podéis dar soporte en pedanías o centros de trabajo fuera del núcleo de Cuevas?",
      answer:
        "Sí, con planificación. El diagnóstico inicial a menudo se hace en remoto; la visita se programa cuando hay que tocar rack, cableado o equipos. Si hay varios centros, documentamos la red para no depender de «el que sabe cómo está montado».",
    },
  },
  {
    slug: "pulpi",
    name: "Pulpí",
    province: "Almería",
    businessProfile: "industry",
    nearby: ["huercal-overa", "cuevas-del-almanzora", "vera"],
    image: coverageStill("pulpi"),
    map: { lat: 37.4119, lon: -1.7447, zoom: 13 },
    metaTitle: "Informática industrial y IA en Pulpí, Almería",
    metaDescription:
      "Redes de nave, servidores, backup y automatización documental para empresas agroalimentarias y logísticas de Pulpí.",
    heroDescription:
      "Pulpí concentra empresas agroalimentarias y logísticas con turnos, almacenes y mucho papel digitalizado a medias. Montamos redes de nave, servidores y copias, y automatizamos facturas, albaranes y consultas sobre procedimientos de calidad.",
    intro:
      "En una central hortofrutícola o una nave de Pulpí el informático no es el de «formatear el PC»: es quien evita que la línea, la báscula o la oficina se queden sin red. Inventariamos switches, Wi-Fi de almacén y puestos de administración, y separamos lo que es crítico de lo que es navegación.",
    sectorHeading: "Infraestructura TI e IA aplicada a empresas de Pulpí",
    sectorBody:
      "El volumen documental —albaranes, residuos, calidad, facturación— es alto. Un agente o un RAG no sustituye al ERP; lo alimenta y evita búsquedas manuales. Lo hacemos después de asegurar copias y accesos, porque un modelo sobre datos mal gobernados no aporta control.",
    localServices: [
      "Redes de nave, VLAN y Wi-Fi de almacén",
      "Servidores, virtualización y monitorización",
      "Backup y planes de recuperación",
      "Extracción y clasificación de facturas y albaranes",
      "Ciberseguridad de accesos de temporada y proveedores",
    ],
    uniqueFaq: {
      question:
        "¿La IA puede leer albaranes y facturas de un almacén en Pulpí?",
      answer:
        "Puede extraer campos y clasificar documentos si la calidad de los PDF o escaneos es razonable y hay un destino claro (ERP, carpeta, hoja de control). No es magia: hay que definir qué campos importan, quién valida excepciones y dónde no debe entrar un modelo externo.",
    },
  },
  {
    slug: "carboneras",
    name: "Carboneras",
    province: "Almería",
    businessProfile: "tourism",
    nearby: ["mojacar", "garrucha", "lubrin"],
    image: coverageStill("carboneras"),
    map: { lat: 36.9967, lon: -1.8928, zoom: 14 },
    metaTitle: "Servicios informáticos e IA en Carboneras",
    metaDescription:
      "Wi-Fi, redes, ciberseguridad y soporte TI para hostelería, comercio e industria de Carboneras, Almería.",
    heroDescription:
      "Carboneras combina costa, hostelería e industria. Atendemos redes de hoteles y restaurantes, puestos de oficinas técnicas y copias de empresas que no pueden permitirse un corte largo, con posibilidad de visita en el municipio.",
    intro:
      "El perfil de Carboneras no es homogéneo: un chiringuito, un hotel y una empresa de servicios industriales no comparten el mismo riesgo. Por eso el diagnóstico separa Wi-Fi de público, puestos de ingeniería u oficina, y copias de proyectos o facturación.",
    sectorHeading:
      "Tecnología e IA para hoteles, restaurantes y negocios de Carboneras",
    sectorBody:
      "En hostelería priorizamos cobertura y TPV; en empresas de servicios, accesos, backup y, si hay normativa interna o manuales extensos, un RAG de consulta. La IA se plantea cuando hay un repositorio real, no como adorno de la web.",
    localServices: [
      "Wi-Fi profesional y segmentación en negocios de costa",
      "Redes de oficina e intervenciones en rack",
      "Ciberseguridad y copias de trabajo técnico",
      "Soporte remoto y presencial en Carboneras",
      "Asistentes internos sobre documentación de empresa",
    ],
    uniqueFaq: {
      question:
        "¿Cubrís Carboneras si el problema es de un negocio pequeño de temporada?",
      answer:
        "Sí. El alcance se ajusta: a veces basta un router bien configurado, copias del TPV y una red de invitados separada. No hace falta un proyecto de IA para dejar el local operativo; si más adelante hay volumen, se evalúa aparte.",
    },
  },
  {
    slug: "antas",
    name: "Antas",
    province: "Almería",
    businessProfile: "industry",
    nearby: ["vera", "huercal-overa", "cuevas-del-almanzora", "garrucha"],
    image: coverageStill("antas"),
    map: { lat: 37.2453, lon: -1.9175, zoom: 14 },
    metaTitle: "Mantenimiento informático e IA en Antas, Almería",
    metaDescription:
      "Soporte TI, servidores, redes y automatización para empresas agrícolas y PYMEs de Antas, en el Levante Almeriense.",
    heroDescription:
      "Antas está entre Vera y el Almanzora, con empresas agrícolas y servicios de tamaño medio. Mantenemos puestos, redes de finca u oficina, copias y, cuando hay archivos de calidad o de gestión dispersos, los preparamos para consulta con IA.",
    intro:
      "Muchas empresas de Antas tienen el servidor «en el PC del administrador» y las copias en un disco que viaja en el cajón. Ese es el primer trabajo: identificar qué es crítico, sacarlo a un NAS o servidor razonable y probar que se restaura. Después se puede hablar de automatizar facturas o consultas.",
    sectorHeading: "Infraestructura TI e IA aplicada a empresas de Antas",
    sectorBody:
      "El tejido es agrícola y de servicios. Interesa una red estable entre almacén y oficina, copias externas y un puesto de trabajo que no sea el único que «sabe» cómo se imprime o se envía al gestor. La IA entra cuando esos documentos ya tienen un sitio.",
    localServices: [
      "Puestos de trabajo, NAS y copias",
      "Redes de oficina y almacén",
      "Soporte presencial desde el eje Vera–Antas",
      "Ciberseguridad básica (accesos, MFA cuando aplique)",
      "Automatización documental para administración",
    ],
    uniqueFaq: {
      question: "¿Hacéis mantenimiento informático continuo en Antas?",
      answer:
        "Sí. Podemos dejar un plan de actualizaciones, copias y revisión periódica, más soporte cuando algo falla. No es un contrato 24/7 no confirmado: es mantenimiento real, con visitas en la comarca cuando el remoto no basta.",
    },
  },
  {
    slug: "turre",
    name: "Turre",
    province: "Almería",
    businessProfile: "mixed",
    nearby: ["mojacar", "vera", "garrucha", "los-gallardos"],
    image: coverageStill("turre"),
    map: { lat: 37.1522, lon: -1.895, zoom: 14 },
    metaTitle: "Servicios informáticos en Turre, Levante Almeriense",
    metaDescription:
      "Soporte informático, redes, backup e IA para negocios, viviendas turísticas y PYMEs de Turre (Almería).",
    heroDescription:
      "Turre equilibra campo, residencial y desbordamiento turístico de Mojácar. Atendemos redes doméstico-profesionales de alquiler, pequeños comercios y empresas de servicios, con el mismo criterio de copias y accesos que en un entorno más urbano.",
    intro:
      "En Turre hay negocios que parecen «caseros» y operan como empresa: varios apartamentos, un taller, un despacho. El riesgo es el mismo —un disco muerto, un Wi-Fi abierto, un correo comprometido—. Ordenamos esa base y solo proponemos IA si hay documentación o consultas que automatizar de verdad.",
    sectorHeading: "Infraestructura e IA para empresas y negocios de Turre",
    sectorBody:
      "Quien gestiona apartamentos necesita red de invitados y copias de reservas; quien tiene almacén o taller, puestos y facturación. El contenido de esta página no copia el de Mojácar ni el de Vera: el mix local obliga a dimensionar, no a empujar un pack de hotel o de nave.",
    localServices: [
      "Wi-Fi de alquiler turístico y pequeños negocios",
      "Puestos, copias y Microsoft 365 cuando corresponda",
      "Soporte presencial en Turre y Mojácar",
      "Ciberseguridad de correos y accesos",
      "Automatización ligera de consultas y documentos",
    ],
    uniqueFaq: {
      question:
        "Gestióno apartamentos en Turre: ¿qué informática hace falta de verdad?",
      answer:
        "Una red de invitados separada de la de gestión, copias de las reservas y facturas, y puestos que se puedan restaurar. El resto (cámaras, domótica, asistentes) solo si ya tenéis un canal claro. Empezar por Wi-Fi y backup evita sustos en temporada.",
    },
  },
  {
    slug: "bedar",
    name: "Bédar",
    province: "Almería",
    businessProfile: "mixed",
    nearby: ["los-gallardos", "turre", "lubrin", "vera"],
    image: null,
    map: { lat: 37.1886, lon: -1.9836, zoom: 14 },
    metaTitle: "Informático y soporte TI en Bédar, Almería",
    metaDescription:
      "Soporte remoto y presencial, redes, copias e informática para negocios y turismo rural de Bédar.",
    heroDescription:
      "Bédar es municipio de sierra con negocios pequeños y turismo rural. Priorizamos soporte efectivo —remoto primero, visita cuando hace falta—, copias y redes simples bien hechas, sin vender infraestructura que el negocio no va a administrar.",
    intro:
      "La cobertura y la orografía cambian el tipo de incidencia: un router mal colocado o una copia que nunca salió del pueblo. Trabajamos con esquemas simples, documentados, y con intervención presencial desde el Levante cuando el diagnóstico remoto se queda corto.",
    sectorHeading: "Tecnología práctica para empresas y alojamientos de Bédar",
    sectorBody:
      "Un alojamiento rural necesita Wi-Fi de huéspedes y copias de reservas; un autónomo, el puesto y el correo a salvo. La IA puede ayudar a consultar normativas o ficheros propios, pero solo si esos archivos existen y están organizados. En Bédar solemos empezar por lo segundo.",
    localServices: [
      "Soporte remoto y visitas concertadas",
      "Wi-Fi y redes de pequeño negocio o alojamiento",
      "Backup de facturación y documentos",
      "Puestos de trabajo y ofimática",
      "Asesoramiento realista sobre IA y automatización",
    ],
    uniqueFaq: {
      question: "¿Os desplazáis a Bédar para una incidencia puntual?",
      answer:
        "Sí, con cita. Primero intentamos dejar el servicio operativo en remoto. Si hay que cambiar equipo, revisar cableado o un NAS, programamos la visita. No prometemos un técnico permanente en sierra; sí cobertura real dentro del Levante Almeriense.",
    },
  },
  {
    slug: "lubrin",
    name: "Lubrín",
    province: "Almería",
    businessProfile: "mixed",
    nearby: ["bedar", "carboneras", "los-gallardos"],
    image: coverageStill("lubrin"),
    map: { lat: 37.2156, lon: -2.0669, zoom: 14 },
    metaTitle: "Servicios informáticos en Lubrín, Almería",
    metaDescription:
      "Mantenimiento informático, copias, redes y soporte para autónomos y pequeños negocios de Lubrín.",
    heroDescription:
      "Lubrín es un municipio rural del interior levantino. Ofrecemos informática de empresa a escala real: puestos, copias, red y soporte, más proyectos de IA solo cuando hay un volumen documental o un proceso que lo justifique.",
    intro:
      "Aquí no tiene sentido copiar el discurso de un hotel de Mojácar o de una central de Pulpí. El trabajo típico es recuperar un equipo, dejar copias fuera del cajón y evitar que el correo sea la única base de datos del negocio. Eso ya reduce incidencias más que cualquier eslogan de innovación.",
    sectorHeading: "Soporte TI e IA proporcionada para empresas de Lubrín",
    sectorBody:
      "Autónomos, almazaras, comercios y servicios municipales o privados necesitan continuidad, no un cuadro de mandos. Si más adelante hay archivos de calidad, catálogos o procedimientos, se puede construir un asistente interno. El orden de las piezas es ese.",
    localServices: [
      "Mantenimiento de PCs y copias de seguridad",
      "Redes doméstico-profesionales",
      "Soporte remoto y presencial concertado",
      "Ayuda con correo y ofimática empresarial",
      "Estudio de automatización si el volumen lo pide",
    ],
    uniqueFaq: {
      question: "¿Compensa la inteligencia artificial en un negocio de Lubrín?",
      answer:
        "Solo si hay documentos o tareas repetidas que hoy se hacen a mano (presupuestos tipo, archivos de proveedores, consultas internas). Si el problema es un PC inestable o no tener copias, la IA no lo arregla. Lo decimos en el diagnóstico, aunque eso signifique no vender un proyecto de modelo.",
    },
  },
  {
    slug: "los-gallardos",
    name: "Los Gallardos",
    province: "Almería",
    businessProfile: "mixed",
    nearby: ["vera", "turre", "bedar", "antas"],
    image: coverageStill("los-gallardos"),
    map: { lat: 37.1681, lon: -1.9392, zoom: 14 },
    metaTitle: "Informática para empresas en Los Gallardos",
    metaDescription:
      "Redes de nave, servidores, soporte y ciberseguridad para empresas del corredor A-7 en Los Gallardos, Almería.",
    heroDescription:
      "Los Gallardos está sobre el corredor de la A-7, con naves, talleres y servicios de paso. Instalamos y mantenemos redes de polígono, puestos, copias y accesos, y conectamos esa operativa con automatización documental cuando la administración ya va justa de tiempo.",
    intro:
      "Una nave en Los Gallardos suele tener oficina, taller y a veces Wi-Fi de cortesía. Mezclarlo todo en un único router de operadora es el fallo habitual. Segmentamos, dejamos copias de la gestión y revisamos que el acceso remoto de un proveedor no abra toda la red.",
    sectorHeading:
      "Infraestructura TI para naves y empresas de Los Gallardos",
    sectorBody:
      "El perfil es mixto: logística ligera, talleres, comercios y servicios. Interesa monitorizar lo mínimo (que el servidor o el NAS respondan), tener copias fuera del recinto y, si hay albaranes o facturas en volumen, plantear clasificación asistida. No es el mismo relato que un hotel de costa.",
    localServices: [
      "Redes de nave y oficina en polígono",
      "Servidores, NAS y copias externas",
      "Soporte a talleres y empresas de servicios",
      "Ciberseguridad de accesos y puestos",
      "Automatización administrativa cuando hay volumen",
    ],
    uniqueFaq: {
      question:
        "¿Montáis la red de una nave en Los Gallardos desde el switch hasta los puestos?",
      answer:
        "Sí: canalización existente o nueva, switches, Wi-Fi de almacén y puestos de oficina, con separación de invitados si los hay. Documentamos lo instalado para que un corte no dependa de memoria oral. El alcance de obra civil, si hace falta, se ve sobre el terreno.",
    },
  },
];

export function getMunicipality(slug: string): Municipality | undefined {
  return municipalities.find((item) => item.slug === slug);
}

export function getNearbyMunicipalities(
  municipality: Municipality,
): Municipality[] {
  return municipality.nearby
    .map((slug) => getMunicipality(slug))
    .filter((item): item is Municipality => Boolean(item));
}

export function municipalityHref(slug: string): string {
  return municipalityPath(slug);
}

export const municipalitySlugs = municipalities.map((item) => item.slug);
