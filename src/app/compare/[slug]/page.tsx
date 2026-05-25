import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { comparisons, getComparisonBySlug } from "@/data/comparisons";
import { getCalculatorBySlug } from "@/data/calculators";
import { affiliateLinks } from "@/data/affiliates";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { CheckCircle2, XCircle, MinusCircle, Gift, ArrowRight } from "lucide-react";

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

  const isExchange = !!comparison.exchangeA;

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

      {/* Exchange comparison: side-by-side pros/cons */}
      {isExchange && comparison.prosA && comparison.prosB ? (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
            {[
              { name: comparison.entityA, pros: comparison.prosA, cons: comparison.consA ?? [] },
              { name: comparison.entityB, pros: comparison.prosB, cons: comparison.consB ?? [] },
            ].map(({ name, pros, cons }) => (
              <div key={name} className="rounded-xl border border-border bg-card p-6 flex flex-col gap-5">
                <h2 className="text-lg font-bold">{name}</h2>

                <div>
                  <p className="text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-3">
                    Advantages
                  </p>
                  <ul className="space-y-2">
                    {pros.map((pro, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span className="text-muted-foreground leading-snug">{pro}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="text-xs font-semibold text-red-400 uppercase tracking-wider mb-3">
                    Disadvantages
                  </p>
                  <ul className="space-y-2">
                    {cons.map((con, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <XCircle className="h-4 w-4 text-red-400/70 shrink-0 mt-0.5" />
                        <span className="text-muted-foreground leading-snug">{con}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Fee reference table — no winner badges */}
          <h2 className="text-base font-semibold mb-3 text-muted-foreground">Fee Reference</h2>
          <div className="rounded-xl border border-border overflow-hidden mb-10">
            <div className="grid grid-cols-[1fr_auto_auto] gap-4 px-4 py-2.5 bg-secondary/30 border-b border-border/50">
              <span className="text-xs text-muted-foreground uppercase tracking-wider">Feature</span>
              <span className="text-xs font-semibold text-center w-28">{comparison.entityA}</span>
              <span className="text-xs font-semibold text-center w-28">{comparison.entityB}</span>
            </div>
            {comparison.rows.map((row, i) => (
              <div
                key={i}
                className={`grid grid-cols-[1fr_auto_auto] gap-4 items-center px-4 py-3 ${
                  i % 2 === 0 ? "bg-card" : "bg-card/60"
                } border-b border-border/50 last:border-0`}
              >
                <span className="text-sm text-muted-foreground">{row.feature}</span>
                <span className="text-sm text-center w-28">{row.a}</span>
                <span className="text-sm text-center w-28">{row.b}</span>
              </div>
            ))}
          </div>
        </>
      ) : (
        <>
          {/* Non-exchange comparison: original table with winner badges */}
          <div className="grid grid-cols-[1fr_auto_auto] gap-4 mb-2 px-4">
            <span className="text-xs text-muted-foreground uppercase tracking-wider">Feature</span>
            <span className="text-sm font-semibold text-center w-28">{comparison.entityA}</span>
            <span className="text-sm font-semibold text-center w-28">{comparison.entityB}</span>
          </div>
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

          {/* Verdict — only for non-exchange comparisons */}
          <div className="rounded-xl border border-primary/20 bg-primary/5 p-6 mb-10">
            <h2 className="text-lg font-bold mb-2">Verdict</h2>
            <p className="text-muted-foreground leading-relaxed">{comparison.verdict}</p>
          </div>
        </>
      )}

      {/* Affiliate buttons */}
      {(() => {
        const isPropFirm = comparison.category === "prop-firm";
        const keyA = comparison.exchangeA ?? comparison.entityA.toLowerCase().replace(/\s/g, "");
        const keyB = comparison.exchangeB ?? comparison.entityB.toLowerCase().replace(/\s/g, "");
        const linkA = affiliateLinks[keyA];
        const linkB = affiliateLinks[keyB];
        if (!linkA && !linkB) return null;
        return (
          <section className="mb-10">
            <div className="flex items-center gap-2 mb-4">
              <Gift className="h-4 w-4 text-amber-400" />
              <h2 className="text-lg font-bold">{isPropFirm ? "Start a Challenge" : "Open an Account"}</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { key: keyA, name: comparison.entityA, link: linkA },
                { key: keyB, name: comparison.entityB, link: linkB },
              ].map(({ key, name, link }) =>
                link ? (
                  <a
                    key={key}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                    className="flex items-center justify-between rounded-xl border border-border bg-card p-5 hover:border-amber-400/40 hover:bg-secondary/20 transition-all group"
                  >
                    <div>
                      <p className="font-semibold group-hover:text-primary transition-colors">{name}</p>
                      <p className="text-xs text-emerald-400 font-medium mt-0.5">
                        {isPropFirm ? "Get funded — start your challenge" : "Welcome bonus on first deposit"}
                      </p>
                    </div>
                    <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all shrink-0" />
                  </a>
                ) : null
              )}
            </div>
          </section>
        );
      })()}

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
