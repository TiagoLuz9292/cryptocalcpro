import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { comparisons, getComparisonBySlug } from "@/data/comparisons";
import { getCalculatorBySlug } from "@/data/calculators";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { CheckCircle2, MinusCircle } from "lucide-react";

export async function generateStaticParams() {
  return comparisons.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const comparison = getComparisonBySlug(slug);
  if (!comparison) return {};
  return buildPageMetadata({
    title: `${comparison.title}: Complete Comparison`,
    description: comparison.description,
    path: `/compare/${slug}`,
    keywords: comparison.keywords,
  });
}

function WinnerBadge({ winner, side }: { winner?: "a" | "b" | "tie"; side: "a" | "b" }) {
  if (winner === "tie") return <span className="text-xs text-muted-foreground/60">—</span>;
  if (winner === side) return <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />;
  return <MinusCircle className="h-4 w-4 text-muted-foreground/30 shrink-0" />;
}

export default async function ComparisonPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const comparison = getComparisonBySlug(slug);
  if (!comparison) notFound();

  const relatedCalcs = comparison.relatedCalcSlugs
    .map((s) => getCalculatorBySlug(s))
    .filter(Boolean);

  return (
    <div className="container mx-auto max-w-3xl px-4 py-10">
      <Breadcrumbs
        items={[
          { label: "Compare", href: "/compare" },
          { label: comparison.title, href: `/compare/${slug}` },
        ]}
      />

      <div className="mt-6 mb-10">
        <h1 className="text-3xl font-bold tracking-tight mb-3">{comparison.title}</h1>
        <p className="text-muted-foreground leading-relaxed">{comparison.description}</p>
      </div>

      {/* Column headers */}
      <div className="grid grid-cols-[1fr_auto_auto] gap-4 mb-2 px-4">
        <span className="text-xs text-muted-foreground uppercase tracking-wider">Feature</span>
        <span className="text-sm font-semibold text-center w-28">{comparison.entityA}</span>
        <span className="text-sm font-semibold text-center w-28">{comparison.entityB}</span>
      </div>

      {/* Comparison table */}
      <div className="rounded-xl border border-border overflow-hidden mb-10">
        {comparison.rows.map((row, i) => (
          <div
            key={i}
            className={`grid grid-cols-[1fr_auto_auto] gap-4 items-center px-4 py-3 ${
              i % 2 === 0 ? "bg-card" : "bg-card/60"
            } border-b border-border/50 last:border-0`}
          >
            <span className="text-sm text-muted-foreground">{row.feature}</span>
            <div className="flex items-center justify-center gap-1.5 w-28">
              <span className="text-sm text-center">{row.a}</span>
              <WinnerBadge winner={row.winner} side="a" />
            </div>
            <div className="flex items-center justify-center gap-1.5 w-28">
              <span className="text-sm text-center">{row.b}</span>
              <WinnerBadge winner={row.winner} side="b" />
            </div>
          </div>
        ))}
      </div>

      {/* Verdict */}
      <div className="rounded-xl border border-primary/20 bg-primary/5 p-6 mb-10">
        <h2 className="text-lg font-bold mb-2">Verdict</h2>
        <p className="text-muted-foreground leading-relaxed">{comparison.verdict}</p>
      </div>

      {/* Related calculators */}
      {relatedCalcs.length > 0 && (
        <div>
          <h2 className="text-lg font-bold mb-4">Related Calculators</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {relatedCalcs.map((calc) =>
              calc ? (
                <Link
                  key={calc.slug}
                  href={`/calculators/${calc.slug}`}
                  className="rounded-lg border border-border bg-card p-4 hover:border-primary/40 hover:bg-secondary/20 transition-all text-sm font-medium"
                >
                  {calc.shortName}
                </Link>
              ) : null
            )}
          </div>
        </div>
      )}
    </div>
  );
}
