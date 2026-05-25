import Link from "next/link";
import { ExternalLink, Gift } from "lucide-react";
import { affiliateLinks } from "@/data/affiliates";

interface AffiliateBlockProps {
  category: "prop-firm" | "exchange" | "generic";
  exchange?: string;
  className?: string;
}

const EXCHANGE_META: Record<string, { name: string; cta: string }> = {
  bybit:   { name: "Bybit",   cta: "Open account" },
  binance: { name: "Binance", cta: "Open account" },
  okx:     { name: "OKX",     cta: "Open account" },
  mexc:    { name: "MEXC",    cta: "Open account" },
  kraken:  { name: "Kraken",  cta: "Open account" },
  kucoin:  { name: "KuCoin",  cta: "Open account" },
  bingx:   { name: "BingX",   cta: "Open account" },
  phemex:  { name: "Phemex",  cta: "Open account" },
  bitget:  { name: "Bitget",  cta: "Open account" },
  ftmo:         { name: "FTMO",         cta: "Start challenge" },
  fundednext:   { name: "FundedNext",   cta: "Start challenge" },
  brightfunded: { name: "BrightFunded", cta: "Start challenge" },
};

const PROP_FIRMS = ["ftmo", "fundednext", "brightfunded"];

export function AffiliateBlock({ category, exchange, className }: AffiliateBlockProps) {
  // Build list of links to show
  let keys: string[];

  if (category === "prop-firm") {
    keys = PROP_FIRMS.filter((k) => affiliateLinks[k]);
  } else if (exchange && affiliateLinks[exchange]) {
    // Specific exchange requested — show it first, then others
    const others = Object.keys(affiliateLinks).filter(
      (k) => k !== exchange && !PROP_FIRMS.includes(k)
    );
    keys = [exchange, ...others];
  } else {
    // Generic exchange block — show all active exchange links
    keys = Object.keys(affiliateLinks).filter((k) => !PROP_FIRMS.includes(k));
  }

  if (keys.length === 0) return null;

  return (
    <div className={className}>
      <div className="rounded-xl border border-border bg-card p-5">
        {category !== "prop-firm" ? (
          <div className="flex items-center gap-3 mb-4">
            <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-secondary shrink-0">
              <Gift className="h-5 w-5 text-amber-400" />
            </div>
            <div>
              <p className="font-bold text-base text-amber-400 leading-tight">
                Get Your First Deposit Bonus
              </p>
              <p className="text-xs text-emerald-400 font-bold mt-0.5">
                All partner exchanges below offer welcome rewards for new accounts
              </p>
            </div>
          </div>
        ) : (
          <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold mb-4">
            Get funded — partner prop firms
          </p>
        )}
        <div className="flex flex-wrap gap-3">
          {keys.map((key) => {
            const link = affiliateLinks[key];
            const meta = EXCHANGE_META[key];
            if (!link || !meta) return null;
            return (
              <Link
                key={key}
                href={link}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-secondary px-4 py-2 text-sm font-medium hover:bg-muted hover:text-primary"
              >
                {meta.name}
                <ExternalLink className="h-3 w-3 text-muted-foreground" />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
