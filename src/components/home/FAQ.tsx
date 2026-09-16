import { FAQItem } from "@/components/ui/FAQItem";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { FaqItem as Faq } from "@/data/faqs";

export function FAQ({
  items,
  title = "Preguntas frecuentes",
  eyebrow = "FAQ",
}: {
  items: Faq[];
  title?: string;
  eyebrow?: string;
}) {
  return (
    <section className="border-b border-border px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow={eyebrow} title={title} />
        <div className="mt-10 max-w-3xl">
          {items.map((item) => (
            <FAQItem
              key={item.question}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
