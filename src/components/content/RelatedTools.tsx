import Link from "next/link";
import type { CalculatorMeta } from "@/types/calculator";
import { ArrowRight } from "lucide-react";

interface RelatedToolsProps {
  tools: CalculatorMeta[];
}

export function RelatedTools({ tools }: RelatedToolsProps) {
  if (tools.length === 0) return null;

  return (
    <section className="mt-12">
      <h2 className="text-xl font-bold mb-4">Related Calculators</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {tools.map((tool) => (
          <Link
            key={tool.slug}
            href={`/calculators/${tool.slug}`}
            className="group rounded-lg border border-border bg-card p-4 hover:border-primary/40 hover:bg-secondary/30 transition-all"
          >
            <div className="flex items-start justify-between gap-2">
              <div>
                <p className="text-sm font-semibold leading-tight">{tool.shortName}</p>
                <p className="mt-1 text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                  {tool.description}
                </p>
              </div>
              <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground group-hover:text-primary transition-colors mt-0.5" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
