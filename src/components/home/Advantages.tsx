import { SectionHeading } from "@/components/ui/SectionHeading";
import { TechPanel } from "@/components/ui/GlowBorder";

const items = [
  {
    index: "01",
    title: "Arquitectura de IA orientada a privacidad",
    body: "Diseñamos cada integración teniendo en cuenta dónde se procesan los datos, qué información puede salir de la organización y qué arquitectura resulta adecuada para cada caso.",
  },
  {
    index: "02",
    title: "Soporte técnico local",
    body: "Asistencia para empresas del Levante Almeriense con posibilidad de intervención presencial en la comarca.",
  },
  {
    index: "03",
    title: "Infraestructura + IA",
    body: "No tratamos la inteligencia artificial como un elemento aislado. La integramos con servidores, redes, almacenamiento, seguridad y procesos empresariales.",
  },
  {
    index: "04",
    title: "Monitorización preventiva",
    body: "Supervisión y mantenimiento destinados a detectar incidencias antes de que terminen afectando a la operativa. Respuesta prioritaria en el Levante Almeriense.",
  },
];

export function Advantages() {
  return (
    <section className="border-b border-border px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="POR QUÉ ESTE ENFOQUE"
          title="Capacidad técnica, no teatro de innovación."
        />
        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {items.map((item) => (
            <TechPanel key={item.index}>
              <p className="font-mono text-xs tracking-[0.2em] text-cyan">
                {item.index}
              </p>
              <h3 className="mt-3 text-xl font-semibold">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
                {item.body}
              </p>
            </TechPanel>
          ))}
        </div>
      </div>
    </section>
  );
}
