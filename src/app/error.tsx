"use client";

import { useEffect } from "react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Error({
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
      <p className="text-5xl font-bold text-primary/20 mb-6">Error</p>
      <h1 className="text-2xl font-bold mb-3">Something went wrong</h1>
      <p className="text-muted-foreground mb-10 leading-relaxed">
        An unexpected error occurred. Try again or head back to the calculators.
      </p>
      <div className="flex flex-wrap gap-3 justify-center">
        <button onClick={reset} className={cn(buttonVariants())}>
          Try Again
        </button>
        <Link href="/calculators" className={cn(buttonVariants({ variant: "outline" }))}>
          View Calculators
        </Link>
        <Link href="/" className={cn(buttonVariants({ variant: "ghost" }))}>
          Go Home
        </Link>
      </div>
    </div>
  );
}
