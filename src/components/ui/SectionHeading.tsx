import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  id?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  id,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
      )}
    >
      {eyebrow ? (
        <p className="tech-label mb-4">{eyebrow}</p>
      ) : null}
      <h2
        id={id}
        className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl"
      >
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-base text-muted sm:text-lg">{description}</p>
      ) : null}
    </div>
  );
}
