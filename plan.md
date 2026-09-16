# PROMPT MAESTRO — WEB DE SERVICIOS INFORMÁTICOS + IA GENERATIVA  
## Levante Almeriense · Next.js · React · TypeScript · Tailwind · SEO Local

Actúa simultáneamente como:

- Senior Full-Stack Developer especializado en React, Next.js y TypeScript.
- Senior UI/UX Designer especializado en interfaces tecnológicas, SaaS B2B, ciberseguridad e inteligencia artificial.
- Frontend Engineer especializado en animaciones, rendimiento y responsive design.
- Technical SEO Consultant especializado en SEO Local y SEO programático.
- Conversion Copywriter B2B especializado en servicios tecnológicos para PYMEs.
- Arquitecto de software responsable de mantener el código modular, escalable y mantenible.

Tu objetivo es diseñar y desarrollar una web profesional de alto nivel para una empresa especializada en:

- Servicios informáticos para empresas.
- Mantenimiento informático.
- Servidores e infraestructura TI.
- Redes profesionales.
- Ciberseguridad.
- Copias de seguridad.
- Soporte técnico remoto y presencial.
- Integración de Inteligencia Artificial Generativa.
- LLMs privados/locales.
- Sistemas RAG sobre documentación empresarial.
- Agentes de IA.
- Automatización de procesos empresariales.

La empresa presta servicio principalmente en el Levante Almeriense:

Vera, Mojácar, Garrucha, Huércal-Overa, Cuevas del Almanzora, Pulpí, Carboneras, Antas, Turre, Bédar, Lubrín y Los Gallardos.

El objetivo comercial principal de la web es generar contactos cualificados de empresas, comercios, hoteles, restaurantes, despachos profesionales, industrias, almacenes, negocios agrícolas y PYMEs de la comarca.

---

# 1. FORMA DE TRABAJO

Antes de modificar código:

1. Analiza la estructura actual del repositorio.
2. Identifica dependencias existentes.
3. Reutiliza componentes existentes cuando tenga sentido.
4. Define brevemente la arquitectura que vas a implementar.
5. Después comienza directamente la implementación.

No solicites confirmación entre cada fase salvo que exista un bloqueo técnico real.

Trabaja de forma incremental y evita realizar modificaciones destructivas innecesarias.

No generes únicamente snippets aislados.

Quiero una implementación real integrada dentro del proyecto.

Todos los componentes deben:

- Ser reutilizables.
- Tener tipado TypeScript correcto.
- Ser responsive.
- Mantener una arquitectura clara.
- Evitar duplicación de código.
- Evitar dependencias innecesarias.
- Ser accesibles mediante teclado.
- Respetar `prefers-reduced-motion`.
- Mantener buen rendimiento.

No utilices Lorem Ipsum.

Todo el contenido debe ser contenido final en español listo para producción.

---

# 2. STACK TECNOLÓGICO

Utiliza:

- Next.js con App Router.
- React.
- TypeScript estricto.
- Tailwind CSS.
- Framer Motion para microinteracciones y animaciones.
- Lucide React para iconografía cuando sea necesario.
- `next/font` para las fuentes.
- Server Components siempre que sea razonable.
- Client Components únicamente cuando sean necesarios para interacción o animaciones.

Para elementos 3D puede utilizarse:

- CSS 3D.
- `transform-style: preserve-3d`.
- `perspective`.
- `rotateX`.
- `rotateY`.
- `rotateZ`.

Spline podrá utilizarse únicamente si realmente aporta valor:

```bash
@splinetool/react-spline
```

No conviertas una sección sencilla en una dependencia 3D pesada si puede resolverse correctamente con CSS.

Prioriza rendimiento.

---

# 3. DIRECCIÓN VISUAL

La web debe transmitir:

- Tecnología avanzada.
- Infraestructura crítica.
- Inteligencia artificial.
- Seguridad.
- Precisión.
- Profesionalidad.
- Capacidad técnica.
- Empresa tecnológica local seria.

NO quiero una web genérica de agencia de marketing.

NO quiero una estética excesivamente gamer.

NO quiero abuso de glow, partículas o animaciones.

Debe sentirse como una combinación entre:

- Centro de operaciones de infraestructura.
- SaaS empresarial.
- Dashboard de ciberseguridad.
- Laboratorio de IA.
- Empresa tecnológica B2B premium.

Referencias visuales conceptuales:

- Aceternity UI.
- Magic UI.
- Uiverse.
- Interfaces HUD minimalistas.
- Dashboards de infraestructura cloud.
- Interfaces de ciberseguridad.

No copies literalmente diseños de terceros.

---

# 4. SISTEMA DE DISEÑO

## Colores

Fondo principal:

```css
#030712
```

Fondos secundarios:

```css
#050914
#080d18
#0b1120
```

Negro:

```css
#000000
```

Cian tecnológico:

```css
#00F0FF
```

Púrpura IA:

```css
#BF00FF
```

Texto principal:

```css
#F8FAFC
```

Texto secundario:

```css
#94A3B8
```

Bordes:

```css
rgba(148,163,184,0.15)
```

---

# 5. TIPOGRAFÍA

Utiliza preferentemente:

- Geist Sans para titulares y cuerpo.
- Geist Mono o JetBrains Mono para etiquetas, estados y elementos técnicos.

Jerarquía visual:

H1:
- Muy destacado.
- Desktop aproximadamente 64–80 px cuando haya espacio.
- Mobile aproximadamente 40–48 px.
- Tracking ligeramente negativo.

H2:
- 40–56 px desktop.

Texto:
- 16–18 px.
- Excelente legibilidad.
- Ancho de línea controlado.

Etiquetas técnicas:

- Uppercase.
- Monospace.
- Tracking elevado.
- Tamaño pequeño.

---

# 6. ELEMENTOS GRÁFICOS

Utiliza de forma controlada:

- Grid tecnológico muy sutil.
- Gradientes radiales.
- Líneas de circuito.
- Nodos conectados.
- Indicadores de estado.
- Scan lines extremadamente suaves.
- Bordes técnicos.
- Esquinas recortadas mediante `clip-path`.
- Destellos puntuales.
- Animaciones de flujo de datos.
- Pequeños indicadores ONLINE.
- Números técnicos decorativos.
- Coordenadas o etiquetas visuales abstractas.

Evita saturar la interfaz.

---

# 7. ESTRUCTURA GENERAL DE LA HOME

Construye una página principal con las siguientes secciones:

1. Navbar.
2. Hero.
3. Indicadores / trust bar.
4. Servicios principales.
5. Infraestructura + IA.
6. Ventajas competitivas.
7. Soluciones según sector.
8. Cobertura geográfica.
9. Proceso de trabajo.
10. FAQ.
11. CTA final.
12. Footer.

Debe existir una narrativa de conversión clara:

PROBLEMA → CAPACIDAD TÉCNICA → SERVICIOS → DIFERENCIACIÓN → CONFIANZA → CONTACTO.

---

# 8. HEADER / NAVBAR FUTURISTA

Crea un Navbar sticky con:

- Fondo semitransparente.
- `backdrop-blur`.
- Borde inferior muy sutil.
- Apariencia HUD.
- Responsive completo.

Debe incluir:

Logo / nombre de empresa.

Links:

- Servicios
- Inteligencia Artificial
- Infraestructura
- Ciberseguridad
- Cobertura
- Contacto

Indicador:

```text
● CORE_IA & INFRAESTRUCTURA: ONLINE
```

El punto debe tener una animación suave de pulso.

CTA:

```text
SOLICITAR ASISTENCIA
```

El botón debe utilizar:

- Tipografía monospace.
- Borde cian.
- Esquinas técnicas.
- Hover de inversión de color.

En móvil crea un menú accesible y visualmente coherente con el diseño.

---

# 9. HERO PRINCIPAL

Desktop:

```text
50% contenido
50% visual tecnológico
```

Mobile:

```text
contenido
visual
```

Eyebrow:

```text
SERVICIOS IT // IA GENERATIVA // LEVANTE ALMERIENSE
```

H1 exacto o ligeramente optimizado sin perder intención SEO:

```text
Infraestructura Informática e Integración de IA Generativa en el Levante Almeriense
```

Subtítulo:

```text
Soporte técnico presencial, ciberseguridad, mantenimiento de servidores e implementación de LLMs privados, sistemas RAG y automatización con IA para empresas de Vera, Mojácar, Huércal-Overa y todo el Levante Almeriense.
```

CTA principal:

```text
DESPLEGAR IA EN MI EMPRESA
```

CTA secundario:

```text
ASISTENCIA TÉCNICA
```

Debajo:

```text
SERVIDORES · REDES · CIBERSEGURIDAD · IA PRIVADA · AUTOMATIZACIÓN
```

Añade pequeños indicadores visuales:

```text
MONITORIZACIÓN
ACTIVE

BACKUP
SYNC

AI NODE
ONLINE
```

No realices afirmaciones falsas sobre sistemas que realmente estén online. Estos indicadores deben entenderse como elementos visuales de interfaz, no telemetría real.

---

# 10. HERO VISUAL ISOMÉTRICO

En el lado derecho crea una composición tecnológica abstracta.

Concepto:

Un núcleo de procesamiento de IA conectado a:

- Servidor.
- Base de datos.
- Documentos.
- Red empresarial.
- Automatizaciones.

Puede representarse mediante varias capas CSS 3D.

Transformación base orientativa:

```css
perspective(1200px)
rotateX(55deg)
rotateZ(-42deg)
```

Elementos:

- Nodo central iluminado.
- Capas flotantes.
- Líneas de datos.
- Pequeños nodos.
- Rack abstracto.
- Paneles transparentes.
- Etiquetas técnicas.

Ejemplos:

```text
LLM_NODE
RAG_INDEX
VECTOR_DB
ERP_API
BACKUP_NODE
FIREWALL
```

Al pasar el cursor:

- Elevación sutil.
- Más profundidad.
- Ligero cambio de perspectiva.
- Glow moderado.

Nunca sacrifiques legibilidad o rendimiento.

---

# 11. TRUST BAR

Debajo del Hero crea una franja visual con:

```text
IA PRIVADA
RAG EMPRESARIAL
SERVIDORES
CIBERSEGURIDAD
REDES
BACKUPS
SOPORTE LOCAL
AUTOMATIZACIÓN
```

Puede existir desplazamiento horizontal muy lento.

Debe detenerse o simplificarse con `prefers-reduced-motion`.

---

# 12. SERVICIOS PRINCIPALES

Título:

```text
Infraestructura sólida. Inteligencia aplicada.
```

Introducción:

Redacta un texto orientado a empresarios explicando que la tecnología debe reducir incidencias, proteger los datos y automatizar trabajo, no añadir complejidad.

Implementa un Bento Grid responsive.

Servicios:

## 01 — Inteligencia Artificial Generativa para Empresas

Incluye:

- LLMs privados.
- Modelos ejecutados localmente cuando sea viable.
- Sistemas RAG.
- Búsqueda inteligente sobre documentación interna.
- Agentes de IA.
- Automatización de tareas.
- Integración con herramientas empresariales.
- Clasificación documental.
- Extracción de información.
- Asistentes internos.
- Privacidad de datos.

Copy orientativo:

```text
Integramos inteligencia artificial sobre los procesos y datos reales de tu empresa. Desde asistentes internos capaces de consultar documentación corporativa hasta agentes que clasifican correos, procesan documentos, extraen información o automatizan tareas administrativas.
```

Explica que no todos los proyectos requieren ejecutar un modelo completamente en local y que la arquitectura debe elegirse según privacidad, coste, rendimiento y necesidades reales.

No hagas afirmaciones absolutas sobre privacidad.

---

## 02 — Servidores e Infraestructura TI

Incluye:

- Windows Server.
- Linux.
- NAS.
- Virtualización.
- Active Directory.
- Almacenamiento.
- Monitorización.
- Actualizaciones.
- Diagnóstico.
- Mantenimiento preventivo.
- Migraciones.

Copy final profesional y orientado a negocio.

---

## 03 — Ciberseguridad y Backup

Incluye:

- Firewalls.
- Protección endpoint.
- Hardening.
- Segmentación.
- MFA.
- Gestión de accesos.
- Backups automatizados.
- Copias externas.
- Recuperación.
- Monitorización.

No prometas seguridad absoluta.

Utiliza expresiones como:

```text
reducir superficie de ataque
```

o

```text
mejorar resiliencia
```

---

## 04 — Redes, Wi-Fi y TPV

Especialmente pensado para:

- Hoteles.
- Restaurantes.
- Apartamentos.
- Comercios.
- Oficinas.
- Naves.
- Almacenes.

Incluye:

- Wi-Fi profesional.
- VLAN.
- Redes mesh cuando corresponda.
- Cableado.
- Switches gestionables.
- Segmentación.
- Redes para TPV.
- Guest Wi-Fi.
- Optimización de cobertura.

---

## 05 — Soporte Técnico

Incluye:

- Soporte remoto.
- Intervenciones presenciales.
- Diagnóstico.
- Resolución de incidencias.
- PCs.
- Servidores.
- Redes.
- Software empresarial.

Evita afirmar disponibilidad `24/7` salvo que sea un servicio real confirmado.

Si no se ha proporcionado esa información, utiliza:

```text
Soporte técnico remoto y presencial para empresas
```

---

# 13. TARJETA DE SERVICIO INTERACTIVA

Crea un componente reutilizable:

```tsx
<ServiceCard />
```

Props aproximadas:

```ts
type ServiceCardProps = {
  index: string
  title: string
  description: string
  icon?: React.ReactNode
  features?: string[]
  className?: string
}
```

Estado normal:

- Fondo oscuro.
- Border gris/cian muy suave.
- Texto blanco.
- Número cian.

Hover:

- Fondo cian o gradiente cian.
- Texto negro.
- Número negro.
- Icono invertido.
- Ligera elevación.
- Cambio de borde.

Transición:

```text
250–400 ms
```

Añade un ligero efecto diagonal utilizando pseudo-elementos o `clip-path`.

Debe funcionar correctamente sin hover en dispositivos táctiles.

---

# 14. BLOQUE “IA EMPRESARIAL”

Crear una sección específica de gran impacto visual.

Título:

```text
La IA debe trabajar con el conocimiento de tu empresa.
```

Explicar de forma sencilla:

### LLM PRIVADO

Modelos utilizados dentro de una arquitectura diseñada según las necesidades de privacidad y control de la empresa.

### RAG EMPRESARIAL

Permite consultar información procedente de:

- PDFs.
- Procedimientos.
- Manuales.
- Facturas.
- Catálogos.
- Bases documentales.
- Documentación interna.

### AGENTES DE IA

Automatización de procesos como:

- Clasificación documental.
- Extracción de información.
- Gestión inicial de consultas.
- Generación de borradores.
- Análisis.
- Flujos administrativos.

### INTEGRACIONES

Conexión con:

- ERP.
- CRM.
- Correo.
- Bases de datos.
- APIs.
- Aplicaciones internas.

Incluye un diagrama visual:

```text
EMPRESA
   ↓
DOCUMENTOS
   ↓
RAG / VECTOR DB
   ↓
LLM
   ↓
AGENTE IA
   ↓
ERP / CRM / EMAIL / API
```

Transforma este flujo en un componente visual atractivo y responsive.

---

# 15. VENTAJAS COMPETITIVAS

Crear cuatro bloques.

## Arquitectura de IA orientada a privacidad

```text
Diseñamos cada integración teniendo en cuenta dónde se procesan los datos, qué información puede salir de la organización y qué arquitectura resulta adecuada para cada caso.
```

## Soporte técnico local

```text
Asistencia para empresas del Levante Almeriense con posibilidad de intervención presencial en la comarca.
```

## Infraestructura + IA

```text
No tratamos la inteligencia artificial como un elemento aislado. La integramos con servidores, redes, almacenamiento, seguridad y procesos empresariales.
```

## Monitorización preventiva

```text
Supervisión y mantenimiento destinados a detectar incidencias antes de que terminen afectando a la operativa.
```

IMPORTANTE:

No afirmar tiempos concretos como:

```text
respuesta garantizada < 2 horas
```

salvo que el negocio realmente pueda garantizarlo.

Si se desea conservar el concepto, utilizar:

```text
respuesta prioritaria en el Levante Almeriense
```

---

# 16. SOLUCIONES POR SECTOR

Añade una sección para:

## Hostelería y turismo

Servicios:

- Wi-Fi profesional.
- Redes para hoteles.
- TPV.
- Segmentación.
- Automatización de consultas.
- Asistentes multilingües.
- Integración con documentación.
- Ciberseguridad.

Municipios especialmente relevantes:

- Mojácar.
- Garrucha.
- Carboneras.

---

## Industria, logística y agricultura

Servicios:

- Servidores.
- Redes.
- Automatización documental.
- Procesamiento de facturas.
- IA sobre documentación.
- Copias de seguridad.
- Monitorización.
- Ciberseguridad.

Municipios especialmente relevantes:

- Vera.
- Huércal-Overa.
- Pulpí.
- Cuevas del Almanzora.
- Antas.

---

## Comercio y despachos profesionales

Servicios:

- Puestos de trabajo.
- Redes.
- Backup.
- Microsoft 365 o servicios equivalentes cuando corresponda.
- Gestión documental.
- Automatización mediante IA.
- Soporte técnico.

---

# 17. COBERTURA GEOGRÁFICA

Título:

```text
Servicio informático en todo el Levante Almeriense
```

Texto introductorio final optimizado naturalmente para SEO.

Debe mencionar explícitamente:

- Vera.
- Mojácar.
- Garrucha.
- Huércal-Overa.
- Cuevas del Almanzora.
- Pulpí.
- Carboneras.
- Antas.
- Turre.
- Bédar.
- Lubrín.
- Los Gallardos.

No realizar keyword stuffing.

Crear links internos hacia las landing pages locales.

Ejemplo:

```tsx
<Link href="/mantenimiento-informatico-ia-vera">
  Servicios informáticos en Vera
</Link>
```

---

# 18. LANDING PAGES SEO PROGRAMÁTICAS

Implementa páginas locales reutilizables.

Preferiblemente mediante rutas dinámicas:

```text
/servicios-informaticos/[municipio]
```

o una arquitectura SEO equivalente limpia.

Ejemplos finales:

```text
/servicios-informaticos/vera
/servicios-informaticos/mojacar
/servicios-informaticos/garrucha
/servicios-informaticos/huercal-overa
/servicios-informaticos/cuevas-del-almanzora
/servicios-informaticos/pulpi
/servicios-informaticos/carboneras
/servicios-informaticos/antas
/servicios-informaticos/turre
/servicios-informaticos/bedar
/servicios-informaticos/lubrin
/servicios-informaticos/los-gallardos
```

Si existe una razón SEO o de arquitectura sólida para una estructura distinta, puedes utilizarla, pero mantenla consistente.

Centraliza los datos en una estructura similar a:

```ts
type Municipality = {
  slug: string
  name: string
  province: string
  businessProfile: "tourism" | "industry" | "mixed"
  nearby?: string[]
  metaTitle: string
  metaDescription: string
  heroDescription: string
}
```

Archivo sugerido:

```text
src/data/municipalities.ts
```

No dupliques páginas manualmente.

---

# 19. CONTENIDO DE LAS LANDING LOCALES

Cada página deberá tener contenido suficientemente específico.

No limitarse a sustituir el nombre del municipio.

H1:

```text
Mantenimiento Informático e Inteligencia Artificial para Empresas en [MUNICIPIO]
```

Introducción adaptada al municipio.

---

# 20. ADAPTACIÓN POR TIPO DE MUNICIPIO

## Perfil turístico / hostelería

Aplicar especialmente a:

- Mojácar.
- Garrucha.
- Carboneras.

Enfatizar:

- Hoteles.
- Restaurantes.
- Apartamentos.
- Comercios.
- Wi-Fi.
- TPV.
- Redes.
- Atención automatizada.
- Asistentes multilingües.
- Automatización de reservas o consultas cuando exista integración técnica disponible.
- Ciberseguridad.

H2 orientativo:

```text
Tecnología e IA para hoteles, restaurantes y negocios de [MUNICIPIO]
```

---

## Perfil empresarial / industrial / agrícola

Aplicar especialmente a:

- Vera.
- Huércal-Overa.
- Pulpí.
- Cuevas del Almanzora.
- Antas.

Enfatizar:

- Automatización documental.
- Facturas.
- Albaranes.
- Bases de conocimiento.
- RAG.
- Servidores.
- Redes.
- Backup.
- Ciberseguridad.
- Puestos de trabajo.
- Procesos B2B.

H2:

```text
Infraestructura TI e IA aplicada a empresas de [MUNICIPIO]
```

---

## Perfil mixto

Adaptar el contenido de forma equilibrada.

---

# 21. FAQ LOCAL

Cada landing debe incluir como mínimo cinco preguntas útiles.

Entre ellas:

```text
¿Ofrecéis soporte informático presencial en [MUNICIPIO]?
```

```text
¿Cómo puede utilizar una PYME de [MUNICIPIO] la inteligencia artificial?
```

```text
¿Es posible utilizar IA con documentación privada de mi empresa?
```

```text
¿Podéis mantener nuestros servidores y red empresarial?
```

```text
¿Trabajáis con hoteles, restaurantes, comercios y pequeñas empresas?
```

Las respuestas deben:

- Ser claras.
- Evitar marketing vacío.
- Resolver intención de búsqueda.
- Explicar límites cuando sea necesario.

---

# 22. SEO ON-PAGE

Implementa correctamente:

- `generateMetadata`.
- `<title>`.
- Meta description.
- Canonical.
- Open Graph.
- Twitter/X metadata si procede.
- Jerarquía H1/H2/H3.
- URLs limpias.
- Enlaces internos.
- Alt text.
- Sitemap.
- Robots.
- Metadata por municipio.

Crear si procede:

```text
app/sitemap.ts
app/robots.ts
```

Evitar metadatos duplicados.

---

# 23. META TITLE HOME

Crear un title atractivo próximo a:

```text
Servicios Informáticos e IA para Empresas | Levante Almeriense
```

Mantenerlo dentro de una longitud razonable.

---

# 24. META DESCRIPTION HOME

Crear una descripción similar a:

```text
Mantenimiento informático, servidores, redes, ciberseguridad e integración de IA generativa para empresas en Vera, Mojácar, Huércal-Overa y el Levante Almeriense.
```

Optimizar para CTR sin keyword stuffing.

---

# 25. KEYWORDS TRANSACCIONALES

Utiliza las siguientes búsquedas como guía semántica, no como una lista que haya que repetir artificialmente:

1. mantenimiento informático Vera
2. empresa informática Vera Almería
3. servicios informáticos Mojácar
4. mantenimiento informático Mojácar
5. informático empresas Huércal-Overa
6. empresa informática Huércal-Overa
7. mantenimiento servidores Almería
8. soporte informático Levante Almeriense
9. ciberseguridad empresas Almería
10. instalación redes empresas Vera
11. inteligencia artificial empresas Almería
12. automatización IA empresas Vera
13. integración IA empresas Huércal-Overa
14. IA para hoteles Mojácar
15. inteligencia artificial para PYMEs Almería

Incorpora además variaciones semánticas naturales:

- soporte IT.
- servicios TI.
- infraestructura informática.
- automatización empresarial.
- IA privada.
- agentes de IA.
- modelos LLM.
- RAG empresarial.
- servidores para empresas.
- seguridad informática.
- backup empresarial.

NO hagas keyword stuffing.

---

# 26. DATOS ESTRUCTURADOS

Implementa JSON-LD válido.

Utilizar:

```text
LocalBusiness
```

y cuando resulte apropiado:

```text
ProfessionalService
Service
FAQPage
BreadcrumbList
```

Puede utilizarse `@graph`.

Ejemplo conceptual:

```ts
const schema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: company.name,
  url: company.url,
  telephone: company.phone,
  areaServed: [
    "Vera",
    "Mojácar",
    "Garrucha",
    "Huércal-Overa",
    "Cuevas del Almanzora",
    "Pulpí",
    "Carboneras",
    "Antas",
    "Turre",
    "Bédar",
    "Lubrín",
    "Los Gallardos"
  ]
}
```

IMPORTANTE:

NO inventes:

- Dirección.
- Teléfono.
- Email.
- CIF.
- Coordenadas.
- Horarios.
- Valoraciones.
- Número de reseñas.
- Precio.
- Redes sociales.

Si esos datos no existen en el proyecto, centralízalos como placeholders claramente identificados en un archivo:

```text
src/config/company.ts
```

Ejemplo:

```ts
export const companyConfig = {
  name: "TODO_COMPANY_NAME",
  url: "TODO_DOMAIN",
  phone: "TODO_PHONE",
  email: "TODO_EMAIL",
  address: null,
  latitude: null,
  longitude: null
}
```

El JSON-LD debe omitir propiedades desconocidas en producción en lugar de publicar información ficticia.

---

# 27. CATÁLOGO DE SERVICIOS EN SCHEMA

Añade un catálogo mediante:

```text
OfferCatalog
```

Servicios:

- Mantenimiento informático.
- Soporte técnico.
- Mantenimiento de servidores.
- Instalación de redes.
- Wi-Fi profesional.
- Ciberseguridad.
- Copias de seguridad.
- Inteligencia Artificial Generativa.
- Sistemas RAG.
- Agentes de IA.
- Automatización empresarial.

---

# 28. FAQ SCHEMA

Las FAQs visibles en la página pueden generar su correspondiente `FAQPage` JSON-LD cuando proceda.

El texto del schema debe coincidir con el contenido visible.

No crees FAQs ocultas exclusivamente para buscadores.

---

# 29. SEO LOCAL

Construye un enlazado interno lógico.

Home:

```text
/home
↓
servicios
↓
municipios
```

Las páginas locales deben enlazar:

- Home.
- Servicios relevantes.
- Otros municipios cercanos cuando tenga sentido.
- Contacto.

Añadir breadcrumbs visibles.

Ejemplo:

```text
Inicio > Servicios informáticos > Vera
```

Añadir también `BreadcrumbList`.

---

# 30. CONTENIDO SEO: REGLAS

Evita textos como:

```text
somos líderes
somos los mejores
número 1
soluciones revolucionarias
tecnología de vanguardia
```

salvo que exista evidencia verificable.

Prioriza lenguaje concreto:

```text
mantenimiento
configuración
automatización
monitorización
integración
diagnóstico
seguridad
servidores
redes
procesamiento documental
```

El contenido debe parecer escrito por una empresa técnica real.

---

# 31. CONVERSIÓN

Cada sección importante debe conducir hacia una acción.

CTA posibles:

```text
SOLICITAR DIAGNÓSTICO
```

```text
HABLAR CON UN TÉCNICO
```

```text
ESTUDIAR UN PROYECTO DE IA
```

```text
SOLICITAR ASISTENCIA
```

Evita tener demasiados CTA diferentes.

Prioriza:

CTA primario:

```text
SOLICITAR DIAGNÓSTICO
```

CTA secundario:

```text
HABLAR CON UN TÉCNICO
```

---

# 32. FORMULARIO DE CONTACTO

Crear un formulario visualmente integrado.

Campos:

- Nombre.
- Empresa.
- Email.
- Teléfono.
- Municipio.
- Servicio.
- Mensaje.

Selector servicio:

```text
Soporte informático
Servidores
Redes / Wi-Fi
Ciberseguridad
Backup
Proyecto de IA
RAG empresarial
Automatización
Otro
```

Checkbox de privacidad.

No inventes textos legales definitivos si no se dispone de información jurídica de la empresa.

Deja claramente identificados los lugares que requieren:

- Política de privacidad.
- Responsable del tratamiento.
- Datos fiscales.

Realiza validación accesible.

---

# 33. PROCESO DE TRABAJO

Crear una sección:

```text
01 // ANALIZAMOS
```

Infraestructura, procesos, riesgos y objetivos.

```text
02 // DISEÑAMOS
```

Arquitectura técnica adecuada al negocio.

```text
03 // DESPLEGAMOS
```

Infraestructura, automatización o solución de IA.

```text
04 // MONITORIZAMOS
```

Seguimiento, mantenimiento y mejora.

Visualmente debe sentirse como un pipeline técnico.

---

# 34. CTA FINAL

Título:

```text
Tu infraestructura no debería frenar a tu empresa.
```

Texto:

```text
Cuéntanos qué necesitas mejorar: servidores, red, seguridad, soporte técnico o automatización mediante inteligencia artificial. Analizaremos el problema y plantearemos una solución adecuada a tu entorno.
```

Botón principal:

```text
SOLICITAR DIAGNÓSTICO
```

Secundario:

```text
HABLAR CON UN TÉCNICO
```

---

# 35. FOOTER

Incluir:

- Branding.
- Servicios.
- Municipios.
- Contacto.
- Links legales.
- Sitemap simplificado.

Indicador visual:

```text
SYSTEM STATUS // OPERATIONAL
```

Debe ser puramente decorativo si no existe monitorización real.

Texto inferior:

```text
Servicios informáticos e integración de inteligencia artificial para empresas del Levante Almeriense.
```

---

# 36. ARQUITECTURA DE COMPONENTES

Organiza el proyecto de forma similar a:

```text
src/
├── app/
│   ├── page.tsx
│   ├── layout.tsx
│   ├── sitemap.ts
│   ├── robots.ts
│   ├── servicios-informaticos/
│   │   └── [municipio]/
│   │       └── page.tsx
│   └── ...
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   │
│   ├── home/
│   │   ├── Hero.tsx
│   │   ├── ServiceGrid.tsx
│   │   ├── ServiceCard.tsx
│   │   ├── AIArchitecture.tsx
│   │   ├── Advantages.tsx
│   │   ├── Industries.tsx
│   │   ├── Coverage.tsx
│   │   ├── Process.tsx
│   │   ├── FAQ.tsx
│   │   └── FinalCTA.tsx
│   │
│   ├── seo/
│   │   ├── JsonLd.tsx
│   │   └── Breadcrumbs.tsx
│   │
│   └── ui/
│
├── config/
│   └── company.ts
│
├── data/
│   ├── municipalities.ts
│   ├── services.ts
│   └── faqs.ts
│
└── lib/
    ├── metadata.ts
    ├── schema.ts
    └── utils.ts
```

Adáptalo al repositorio actual.

No reorganices todo el proyecto innecesariamente si ya existe una estructura sólida.

---

# 37. RENDIMIENTO

Objetivos:

- Evitar bundles JavaScript innecesarios.
- Usar Server Components por defecto.
- Lazy-load para Spline o elementos 3D pesados.
- Optimizar imágenes mediante `next/image`.
- Evitar vídeos pesados de fondo.
- Evitar canvas continuo si no aporta valor.
- Evitar listeners globales innecesarios.
- Animar preferentemente `transform` y `opacity`.
- Minimizar layout shifts.

Objetivo conceptual:

```text
Lighthouse Performance > 90
Accessibility > 95
Best Practices > 95
SEO > 95
```

No manipules artificialmente el proyecto sólo para obtener esos números.

---

# 38. RESPONSIVE

Debe verse especialmente bien en:

```text
375px
390px
430px
768px
1024px
1280px
1440px
1920px
```

Comprueba especialmente:

- Navbar.
- H1.
- Bento grid.
- Elemento isométrico.
- Botones.
- FAQ.
- Footer.
- Formularios.

No debe existir scroll horizontal accidental.

---

# 39. ACCESIBILIDAD

Implementa:

- HTML semántico.
- Contraste adecuado.
- Estados `focus-visible`.
- Labels reales.
- `aria-*` sólo cuando sea necesario.
- Navegación mediante teclado.
- Botones reales para acciones.
- Links reales para navegación.
- Respeto de `prefers-reduced-motion`.

No hagas que contenido importante dependa exclusivamente de animaciones.

---

# 40. ANIMACIONES

Utiliza Framer Motion de forma selectiva.

Permitido:

- Fade.
- Translate.
- Stagger.
- Glow suave.
- Hover elevation.
- Border sweep.
- Reveal de texto moderado.
- Flujo de datos.

Evitar:

- Scroll hijacking.
- Parallax agresivo.
- Cursor personalizado.
- Animaciones constantes innecesarias.
- Elementos que dificulten lectura.

Duraciones aproximadas:

```text
0.2–0.6 segundos
```

Las animaciones ambientales podrán ser más lentas.

---

# 41. COMPONENTES DE INTERFAZ

Crea componentes reutilizables cuando corresponda:

```text
TechBadge
StatusIndicator
CyberButton
ServiceCard
SectionHeading
GlowBorder
MunicipalityLink
MetricCard
FAQItem
TechPanel
DataFlow
```

No abuses de abstracciones si el componente sólo se utiliza una vez y no aporta claridad.

---

# 42. CALIDAD DEL CÓDIGO

El resultado debe:

- Compilar sin errores.
- No tener imports rotos.
- No contener variables inutilizadas.
- No usar `any` salvo caso excepcional justificado.
- No contener código muerto.
- No contener console.logs de debugging.
- No dejar componentes a medio implementar.
- No duplicar datos.
- Utilizar nombres descriptivos.

---

# 43. VALIDACIÓN FINAL

Antes de considerar terminada la implementación:

1. Ejecuta el linter.
2. Ejecuta TypeScript.
3. Ejecuta el build de producción.
4. Corrige errores.
5. Revisa rutas.
6. Revisa enlaces internos.
7. Comprueba metadata.
8. Comprueba JSON-LD.
9. Comprueba responsive.
10. Comprueba accesibilidad básica.
11. Comprueba que no existe Lorem Ipsum.
12. Comprueba que no has inventado información empresarial.
13. Comprueba que las landings municipales no sean contenido duplicado con simple sustitución del topónimo.

Utiliza los comandos disponibles en el proyecto, por ejemplo:

```bash
npm run lint
npm run build
```

o sus equivalentes si se utiliza `pnpm`, `yarn` o `bun`.

No cambies el package manager existente.

---

# 44. CRITERIOS DE ACEPTACIÓN

La tarea estará completada cuando exista:

- Home completamente diseñada y desarrollada.
- Diseño responsive.
- Navbar funcional.
- Hero tecnológico.
- Visual isométrico o equivalente.
- Sección de servicios.
- Bento Grid.
- Sección IA empresarial.
- Sección de ventajas.
- Sección por sectores.
- Cobertura geográfica.
- FAQs.
- CTA final.
- Footer.
- Landing pages dinámicas por municipio.
- Metadata dinámica.
- Sitemap.
- Robots.
- Breadcrumbs.
- JSON-LD.
- Datos centralizados.
- Contenido final en español.
- Links internos.
- Código TypeScript correcto.
- Build funcional.

---

# 45. PRIORIDADES

Si existe conflicto entre objetivos, utiliza este orden:

```text
1. Funcionamiento
2. Conversión
3. Claridad
4. SEO
5. Rendimiento
6. Accesibilidad
7. Diseño
8. Animaciones
9. Decoración
```

Nunca sacrifiques funcionamiento, UX o rendimiento únicamente para conseguir un efecto visual.

---

# 46. RESULTADO ESPERADO

No quiero únicamente una explicación de lo que harías.

Quiero que desarrolles la solución dentro del repositorio.

Cuando termines, proporciona un resumen conciso indicando:

- Archivos creados.
- Archivos modificados.
- Componentes principales.
- Arquitectura SEO implementada.
- Landings generadas.
- Datos que todavía necesitan ser proporcionados por el propietario del negocio.
- Resultado de lint/build.
- Cualquier decisión técnica relevante.

Si encuentras partes del proyecto que ya cumplen estos requisitos, reutilízalas y mejóralas en lugar de sustituirlas sin necesidad.

El resultado final debe parecer una empresa tecnológica B2B especializada en infraestructura crítica e Inteligencia Artificial, no una plantilla genérica de servicios informáticos.