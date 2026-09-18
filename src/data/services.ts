export const serviceInquiryOptions = [
  "Soporte informático",
  "Servidores",
  "Redes / Wi-Fi",
  "Ciberseguridad",
  "Backup",
  "Proyecto de IA",
  "RAG empresarial",
  "Automatización",
  "Otro",
] as const;

export type ServiceInquiryOption = (typeof serviceInquiryOptions)[number];

export type ServiceCardContent = {
  index: string;
  id: string;
  title: string;
  description: string;
  features: string[];
  href: string;
};

export const mainServices: ServiceCardContent[] = [
  {
    index: "01",
    id: "inteligencia-artificial",
    title: "Inteligencia Artificial Generativa para Empresas",
    description:
      "Integramos inteligencia artificial sobre los procesos y datos reales de tu empresa. Desde asistentes internos capaces de consultar documentación corporativa hasta agentes que clasifican correos, procesan documentos, extraen información o automatizan tareas administrativas.",
    features: [
      "LLMs privados y modelos locales cuando resulte viable",
      "Sistemas RAG sobre PDFs, procedimientos y bases documentales",
      "Agentes de IA para clasificación, extracción y borradores",
      "Integración con ERP, CRM, correo y APIs internas",
      "Arquitectura elegida según privacidad, coste y rendimiento",
    ],
    href: "/inteligencia-artificial",
  },
  {
    index: "02",
    id: "infraestructura",
    title: "Servidores e Infraestructura TI",
    description:
      "Diseñamos, mantenemos y actualizamos la base técnica de la empresa: servidores Windows y Linux, almacenamiento, virtualización y directorio activo. El objetivo es que la operativa diaria no dependa de un equipo inestable o de copias improvisadas.",
    features: [
      "Windows Server, Linux y NAS",
      "Virtualización y Active Directory",
      "Monitorización y mantenimiento preventivo",
      "Diagnóstico, actualizaciones y migraciones",
    ],
    href: "/infraestructura-ti",
  },
  {
    index: "03",
    id: "ciberseguridad",
    title: "Ciberseguridad y Backup",
    description:
      "Reducimos la superficie de ataque y mejoramos la resiliencia: firewalls, protección de puestos, control de accesos y copias recuperables. No prometemos seguridad absoluta; sí un entorno más difícil de comprometer y más sencillo de restaurar.",
    features: [
      "Firewalls, endpoint y hardening",
      "Segmentación, MFA y gestión de accesos",
      "Backups automatizados y copias externas",
      "Pruebas de recuperación y monitorización",
    ],
    href: "/ciberseguridad",
  },
  {
    index: "04",
    id: "redes",
    title: "Redes, Wi-Fi y TPV",
    description:
      "Instalamos y ajustamos redes para hoteles, restaurantes, comercios, oficinas y naves: cobertura real, separación de invitados y tráfico de TPV, y switches gestionables cuando el negocio lo necesita.",
    features: [
      "Wi-Fi profesional y redes mesh cuando correspondan",
      "VLAN, segmentación y Guest Wi-Fi",
      "Cableado y switches gestionables",
      "Redes para TPV, almacenes y oficinas",
    ],
    href: "/redes-wifi-tpv",
  },
  {
    index: "05",
    id: "soporte",
    title: "Soporte Técnico",
    description:
      "Soporte técnico remoto y presencial para empresas. Diagnosticamos incidencias en PCs, servidores, redes y software empresarial, e intervenimos en el Levante Almeriense cuando el problema no se puede resolver a distancia.",
    features: [
      "Soporte remoto y visitas en la comarca",
      "Diagnóstico y resolución de incidencias",
      "PCs, servidores, redes y software",
      "Respuesta prioritaria en el Levante Almeriense",
    ],
    href: "/soporte-tecnico",
  },
];

export const offerCatalog = [
  "Mantenimiento informático",
  "Soporte técnico",
  "Mantenimiento de servidores",
  "Instalación de redes",
  "Wi-Fi profesional",
  "Ciberseguridad",
  "Copias de seguridad",
  "Inteligencia Artificial Generativa",
  "Sistemas RAG",
  "Agentes de IA",
  "Automatización empresarial",
] as const;
