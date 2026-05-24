import Link from "next/link";
import { BookMarked } from "lucide-react";
import { getTermBySlug } from "@/data/glossary";

const CATEGORY_TERMS: Record<string, string[]> = {
  "position-sizing": ["position-sizing", "risk-per-trade", "stop-loss", "risk-reward-ratio"],
  "risk-management": ["risk-management", "drawdown", "risk-per-trade", "expected-value"],
  "leverage":        ["leverage", "liquidation-price", "margin", "maintenance-margin"],
  "fees":            ["maker-fee", "taker-fee", "slippage", "spread"],
  "dca":             ["dca", "cost-basis", "compounding", "volatility"],
  "prop-firm":       ["prop-firm-challenge", "daily-drawdown", "trailing-drawdown", "profit-target"],
  "compounding":     ["compounding", "r-multiple", "expected-value", "risk-per-trade"],
};

const SLUG_TERMS: Record<string, string[]> = {
  "leverage-liquidation-calculator":   ["leverage", "liquidation-price", "isolated-margin", "mark-price"],
  "binance-liquidation-calculator":    ["liquidation-price", "mark-price", "maintenance-margin", "isolated-margin"],
  "okx-liquidation-calculator":        ["liquidation-price", "mark-price", "maintenance-margin", "cross-margin"],
  "bybit-liquidation-calculator":      ["liquidation-price", "mark-price", "maintenance-margin", "isolated-margin"],
  "trading-fee-calculator":            ["maker-fee", "taker-fee", "slippage", "spread"],
  "bybit-trading-fee-calculator":      ["maker-fee", "taker-fee", "funding-rate", "perpetual-futures"],
  "binance-trading-fee-calculator":    ["maker-fee", "taker-fee", "slippage", "leverage"],
  "okx-trading-fee-calculator":        ["maker-fee", "taker-fee", "funding-rate", "perpetual-futures"],
  "mexc-trading-fee-calculator":       ["maker-fee", "taker-fee", "slippage", "spread"],
  "kucoin-trading-fee-calculator":     ["maker-fee", "taker-fee", "slippage", "spread"],
  "bingx-trading-fee-calculator":      ["maker-fee", "taker-fee", "funding-rate", "perpetual-futures"],
  "phemex-trading-fee-calculator":     ["maker-fee", "taker-fee", "funding-rate", "perpetual-futures"],
  "bitcoin-dca-calculator":            ["dca", "cost-basis", "volatility", "compounding"],
  "risk-reward-calculator":            ["risk-reward-ratio", "r-multiple", "win-rate", "expected-value"],
  "crypto-position-size-calculator":   ["position-sizing", "risk-per-trade", "stop-loss", "risk-management"],
  "ftmo-drawdown-calculator":          ["prop-firm-challenge", "daily-drawdown", "trailing-drawdown", "profit-target"],
  "prop-firm-daily-drawdown-calculator": ["daily-drawdown", "prop-firm-challenge", "trailing-drawdown", "profit-target"],
};

interface KeyTermsBlockProps {
  slug: string;
  category: string;
}

export function KeyTermsBlock({ slug, category }: KeyTermsBlockProps) {
  const termSlugs = SLUG_TERMS[slug] ?? CATEGORY_TERMS[category] ?? [];
  const terms = termSlugs
    .map((s) => getTermBySlug(s))
    .filter((t): t is NonNullable<typeof t> => t !== undefined);

  if (terms.length === 0) return null;

  return (
    <section className="mt-10">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold flex items-center gap-2">
          <BookMarked className="h-4 w-4 text-primary" />
          Key Terms
        </h2>
        <Link
          href="/glossary"
          className="text-xs text-muted-foreground hover:text-primary transition-colors"
        >
          Full glossary →
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {terms.map((term) => (
          <Link
            key={term.slug}
            href={`/glossary/${term.slug}`}
            className="group rounded-xl border border-border bg-card p-4 hover:border-primary/40 hover:bg-secondary/20 transition-all"
          >
            <p className="font-semibold text-sm group-hover:text-primary transition-colors mb-1">
              {term.term}
            </p>
            <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
              {term.shortDef}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
