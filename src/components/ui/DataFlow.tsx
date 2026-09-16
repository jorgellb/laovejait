import { PipelineDiagram } from "@/components/graphics/PipelineDiagram";

export function DataFlow({ className }: { className?: string }) {
  return <PipelineDiagram className={className} />;
}
