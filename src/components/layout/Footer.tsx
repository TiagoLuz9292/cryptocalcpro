import Link from "next/link";
import { siteConfig } from "@/data/site";
import { categories } from "@/data/categories";
import { calculators } from "@/data/calculators";
import { comparisons } from "@/data/comparisons";
import { BarChart2 } from "lucide-react";

export function Footer() {
  const featuredCalcs = calculators.slice(0, 4);
  const featuredComparisons = comparisons.slice(0, 4);

  return (
    <footer className="border-t border-border/50 bg-card mt-16">
      <div className="container mx-auto max-w-6xl px-4 py-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
          <div className="space-y-3">
            <Link href="/" className="flex items-center gap-2 font-bold">
              <div className="flex h-7 w-7 items-center justify-center rounded-md bg-primary">
                <BarChart2 className="h-3.5 w-3.5 text-primary-foreground" />
              </div>
              {siteConfig.name}
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {siteConfig.tagline}. Free professional tools for crypto traders.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-semibold">Top Calculators</h3>
            <ul className="space-y-2">
              {featuredCalcs.map((calc) => (
                <li key={calc.slug}>
                  <Link
                    href={`/calculators/${calc.slug}`}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {calc.shortName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-semibold">Categories</h3>
            <ul className="space-y-2">
              {categories.slice(0, 5).map((cat) => (
                <li key={cat.slug}>
                  <Link
                    href={`/category/${cat.slug}`}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-semibold">Compare</h3>
            <ul className="space-y-2">
              {featuredComparisons.map((c) => (
                <li key={c.slug}>
                  <Link
                    href={`/compare/${c.slug}`}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {c.entityA} vs {c.entityB}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/compare"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  All comparisons →
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-semibold">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/blog" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/calculators" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  All Calculators
                </Link>
              </li>
              <li>
                <Link href="/glossary" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Glossary
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border/50 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/privacy-policy" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <span className="text-xs text-muted-foreground">·</span>
            <p className="text-xs text-muted-foreground">
              For educational purposes only. Not financial advice.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
