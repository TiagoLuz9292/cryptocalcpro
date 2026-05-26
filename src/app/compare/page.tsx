import type { Metadata } from "next";
import Link from "next/link";
import { comparisons } from "@/data/comparisons";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { PartnerBlock } from "@/components/monetization/AffiliateBlock";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = buildPageMetadata({
  title: "Crypto Trading Comparisons",
  description:
    "Side-by-side comparisons of prop firms, leverage levels, exchanges, and trading styles. Objective data, no fluff.",
  path: "/compare",
  keywords: ["prop firm comparison", "crypto exchange comparison", "leverage comparison", "trading style comparison"],
});

const categoryLabels: Record<string, string> = {
  "prop-firm": "Prop Firms",
  "leverage": "Leverage",
  "fees": "Exchange Fees",
  "risk-management": "Trading Style",
};

export default function ComparePage() {
  const grouped = comparisons.reduce<Record<string, typeof comparisons>>((acc, c) => {
    const key = categoryLabels[c.category] ?? c.category;
    if (!acc[key]) acc[key] = [];
    acc[key].push(c);
    return acc;
  }, {});

  return (
    <div className="container mx-auto max-w-3xl px-4 py-12">
      <div className="mb-10">
        <h1 className="text-3xl font-bold tracking-tight mb-3">Comparisons</h1>
        <p className="text-muted-foreground leading-relaxed max-w-xl">
          Objective side-by-side comparisons for the decisions that matter most — prop firms,
          leverage levels, exchanges, and trading styles.
        </p>
      </div>

      <div className="space-y-10">
        {Object.entries(grouped).map(([label, items]) => (
          <section key={label}>
            <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
              {label}
            </h2>
            <div className="space-y-2">
              {items.map((comp) => (
                <Link
                  key={comp.slug}
                  href={`/compare/${comp.slug}`}
                  className="group flex items-start justify-between gap-4 rounded-xl border border-border bg-card p-5 hover:border-primary/40 hover:bg-secondary/20 transition-all"
                >
                  <div>
                    <p className="font-semibold mb-1">{comp.title}</p>
                    <p className="text-sm text-muted-foreground line-clamp-1">{comp.description}</p>
                  </div>
                  <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all mt-1" />
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>
      <PartnerBlock className="mt-12" />
    </div>
  );
}
