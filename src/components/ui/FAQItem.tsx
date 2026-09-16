export function FAQItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  return (
    <details className="group border-b border-border py-4">
      <summary className="cursor-pointer list-none font-medium text-foreground marker:hidden [&::-webkit-details-marker]:hidden">
        <span className="flex items-start justify-between gap-4">
          <span>{question}</span>
          <span className="font-mono text-cyan transition group-open:rotate-45">
            +
          </span>
        </span>
      </summary>
      <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted sm:text-base">
        {answer}
      </p>
    </details>
  );
}
