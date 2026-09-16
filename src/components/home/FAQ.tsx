import { SectionFrame } from "@/components/graphics/SectionFrame";
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
    <SectionFrame>
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow={eyebrow} title={title} />
        <div className="mt-10 max-w-3xl border border-border bg-background-panel/60 px-5 sm:px-6">
          {items.map((item) => (
            <FAQItem
              key={item.question}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
      </div>
    </SectionFrame>
  );
}
