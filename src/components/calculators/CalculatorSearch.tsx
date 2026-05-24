"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Search, X, ArrowRight } from "lucide-react";
interface CalcItem {
  slug: string;
  name: string;
  shortName: string;
  description: string;
  category: string;
  keywords: string[];
}

interface CatItem {
  slug: string;
  name: string;
  description: string;
}

interface Props {
  calculators: CalcItem[];
  categories: CatItem[];
}

export function CalculatorSearch({ calculators, categories }: Props) {
  const [query, setQuery] = useState("");

  const trimmed = query.trim().toLowerCase();

  const results = useMemo(() => {
    if (!trimmed) return null;
    return calculators.filter((c) => {
      const haystack = [
        c.name,
        c.shortName,
        c.description,
        c.category,
        ...c.keywords,
      ]
        .join(" ")
        .toLowerCase();
      return haystack.includes(trimmed);
    });
  }, [trimmed, calculators]);

  const categoriesWithTools = useMemo(
    () =>
      categories
        .map((cat) => ({
          ...cat,
          tools: calculators.filter((c) => c.category === cat.slug),
        }))
        .filter((cat) => cat.tools.length > 0),
    [calculators, categories]
  );

  return (
    <>
      {/* Search input */}
      <div className="relative mb-10">
        <label htmlFor="calc-search" className="sr-only">Search calculators</label>
        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
        <input
          id="calc-search"
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search — try 'bitcoin', 'FTMO', 'liquidation', 'bybit'…"
          className="w-full rounded-xl border border-border bg-card pl-10 pr-10 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/40 transition-colors"
        />
        {query && (
          <button
            type="button"
            onClick={() => setQuery("")}
            className="absolute right-3.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Clear"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>

      {/* Results when searching */}
      {results !== null ? (
        results.length > 0 ? (
          <div>
            <p className="text-sm text-muted-foreground mb-4">
              {results.length} result{results.length !== 1 ? "s" : ""} for &ldquo;{trimmed}&rdquo;
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {results.map((calc) => {
                const cat = categories.find((c) => c.slug === calc.category);
                return (
                  <Link
                    key={calc.slug}
                    href={`/calculators/${calc.slug}`}
                    className="group rounded-xl border border-border bg-card p-5 hover:border-primary/40 hover:bg-secondary/20 transition-all flex flex-col gap-3"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <p className="font-semibold leading-tight">{calc.shortName}</p>
                      <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all mt-0.5" />
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2 flex-1">
                      {calc.description}
                    </p>
                    {cat && (
                      <span className="self-start text-xs text-muted-foreground bg-secondary/60 px-2 py-0.5 rounded-full">
                        {cat.name}
                      </span>
                    )}
                  </Link>
                );
              })}
            </div>
          </div>
        ) : (
          <div className="rounded-xl border border-border bg-card p-10 text-center">
            <p className="text-muted-foreground text-sm mb-3">
              No calculators found for &ldquo;{trimmed}&rdquo;
            </p>
            <button
              type="button"
              onClick={() => setQuery("")}
              className="text-xs text-primary hover:underline"
            >
              Clear search
            </button>
          </div>
        )
      ) : (
        /* Grouped by category — default view */
        <div className="space-y-12">
          {categoriesWithTools.map((cat) => (
            <section key={cat.slug}>
              <div className="flex items-baseline justify-between mb-4">
                <div>
                  <h2 className="text-xl font-bold">{cat.name}</h2>
                  <p className="text-sm text-muted-foreground mt-0.5">{cat.description}</p>
                </div>
                <Link
                  href={`/category/${cat.slug}`}
                  className="text-xs text-muted-foreground hover:text-primary transition-colors whitespace-nowrap ml-4"
                >
                  View all →
                </Link>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {cat.tools.map((tool) => (
                  <Link
                    key={tool.slug}
                    href={`/calculators/${tool.slug}`}
                    className="group rounded-xl border border-border bg-card p-5 hover:border-primary/40 hover:bg-secondary/20 transition-all flex flex-col gap-3"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <p className="font-semibold leading-tight">{tool.shortName}</p>
                      <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all mt-0.5" />
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2 flex-1">
                      {tool.description}
                    </p>
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>
      )}
    </>
  );
}
