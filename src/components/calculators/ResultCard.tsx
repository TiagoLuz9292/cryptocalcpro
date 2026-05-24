import type { CalculatorResult } from "@/types/calculator";
import { cn } from "@/lib/utils";

interface ResultCardProps {
  result: CalculatorResult;
}

const colorClasses = {
  default: "text-foreground",
  success: "text-emerald-400",
  warning: "text-amber-400",
  danger: "text-red-400",
};

export function ResultCard({ result }: ResultCardProps) {
  const color = colorClasses[result.color ?? "default"];

  if (result.highlighted) {
    return (
      <div className="rounded-lg border border-border bg-secondary/30 p-4">
        <p className="text-xs text-muted-foreground mb-1">{result.label}</p>
        <p className={cn("text-2xl font-bold font-mono tracking-tight", color)}>
          {result.value}
          {result.unit && (
            <span className="ml-1.5 text-base font-normal text-muted-foreground">
              {result.unit}
            </span>
          )}
        </p>
        {result.description && (
          <p className="mt-1 text-xs text-muted-foreground">{result.description}</p>
        )}
      </div>
    );
  }

  return (
    <div className="flex items-center justify-between py-2 border-b border-border/50 last:border-0">
      <div>
        <span className="text-sm text-muted-foreground">{result.label}</span>
        {result.description && (
          <p className="text-xs text-muted-foreground mt-0.5">{result.description}</p>
        )}
      </div>
      <span className={cn("text-sm font-mono font-semibold", color)}>
        {result.value}
        {result.unit && (
          <span className="ml-1 text-xs text-muted-foreground font-normal">{result.unit}</span>
        )}
      </span>
    </div>
  );
}
