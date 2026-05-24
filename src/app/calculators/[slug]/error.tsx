"use client";

import { useEffect } from "react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function CalculatorError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="container mx-auto max-w-2xl px-4 py-32 text-center">
      <h1 className="text-2xl font-bold mb-3">Calculator failed to load</h1>
      <p className="text-muted-foreground mb-10 leading-relaxed">
        This calculator encountered an error. Try reloading or pick a different tool.
      </p>
      <div className="flex flex-wrap gap-3 justify-center">
        <button onClick={reset} className={cn(buttonVariants())}>
          Try Again
        </button>
        <Link href="/calculators" className={cn(buttonVariants({ variant: "outline" }))}>
          All Calculators
        </Link>
      </div>
    </div>
  );
}
