import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function NotFound() {
  return (
    <div className="container mx-auto max-w-2xl px-4 py-32 text-center">
      <p className="text-7xl font-bold text-primary/20 mb-6">404</p>
      <h1 className="text-2xl font-bold mb-3">Page not found</h1>
      <p className="text-muted-foreground mb-10 leading-relaxed">
        That page does not exist. Try one of the calculators or browse the blog.
      </p>
      <div className="flex flex-wrap gap-3 justify-center">
        <Link href="/calculators" className={cn(buttonVariants())}>
          View Calculators
        </Link>
        <Link href="/blog" className={cn(buttonVariants({ variant: "outline" }))}>
          Browse Blog
        </Link>
        <Link href="/" className={cn(buttonVariants({ variant: "ghost" }))}>
          Go Home
        </Link>
      </div>
    </div>
  );
}
