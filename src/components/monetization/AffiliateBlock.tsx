"use client";

import Link from "next/link";
import { ExternalLink, Gift } from "lucide-react";
import { track } from "@vercel/analytics";
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
const FEATURED = ["bybit", "binance"];

export function AffiliateBlock({ category, exchange, className }: AffiliateBlockProps) {
  let keys: string[];

  if (category === "prop-firm") {
    keys = PROP_FIRMS.filter((k) => affiliateLinks[k]);
  } else if (exchange && affiliateLinks[exchange]) {
    const others = Object.keys(affiliateLinks).filter(
      (k) => k !== exchange && !PROP_FIRMS.includes(k)
    );
    keys = [exchange, ...others];
  } else {
    keys = Object.keys(affiliateLinks).filter((k) => !PROP_FIRMS.includes(k));
  }

  if (keys.length === 0) return null;

  const isPropFirm = category === "prop-firm";

  // For exchange blocks: split into featured (2 large) and secondary (rest)
  const featuredKeys = isPropFirm ? [] : keys.filter((k) => FEATURED.includes(k));
  const secondaryKeys = isPropFirm ? keys : keys.filter((k) => !FEATURED.includes(k));

  const renderLink = (key: string, featured: boolean) => {
    const link = affiliateLinks[key];
    const meta = EXCHANGE_META[key];
    if (!link || !meta) return null;
    return (
      <Link
        key={key}
        href={link}
        target="_blank"
        rel="noopener noreferrer sponsored"
        onClick={() => track("affiliate_click", { exchange: key, category })}
        className={
          featured
            ? "flex-1 min-w-[140px] inline-flex items-center justify-center gap-2 rounded-lg border border-amber-400/40 bg-amber-400/10 px-5 py-3 text-sm font-semibold text-amber-300 hover:bg-amber-400/20 hover:text-amber-200 transition-colors"
            : "inline-flex items-center gap-2 rounded-lg border border-border bg-secondary px-4 py-2 text-sm font-medium hover:bg-muted hover:text-primary transition-colors"
        }
      >
        {meta.name}
        <ExternalLink className={featured ? "h-3.5 w-3.5" : "h-3 w-3 text-muted-foreground"} />
      </Link>
    );
  };

  return (
    <div className={className}>
      <div className="rounded-xl border border-amber-400/40 bg-card p-5 shadow-[0_0_15px_rgba(251,191,36,0.15),0_0_40px_rgba(251,191,36,0.07)]">
        <div className="flex items-center gap-3 mb-4">
          <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-secondary shrink-0">
            <Gift className="h-5 w-5 text-amber-400" />
          </div>
          <div>
            <p className="font-bold text-base text-amber-400 leading-tight">
              {isPropFirm ? "Get Funded — Start a Challenge" : "Get Your First Deposit Bonus"}
            </p>
            <p className="text-xs text-emerald-400 font-bold mt-0.5">
              {isPropFirm
                ? "Partner prop firms below — earn while you trade"
                : "All partner exchanges below offer welcome rewards for new accounts"}
            </p>
          </div>
        </div>

        {/* Featured row — Bybit + Binance larger */}
        {featuredKeys.length > 0 && (
          <div className="flex gap-3 mb-3">
            {featuredKeys.map((k) => renderLink(k, true))}
          </div>
        )}

        {/* Secondary row — remaining exchanges smaller */}
        {secondaryKeys.length > 0 && (
          <div className="flex flex-wrap justify-center gap-2">
            {secondaryKeys.map((k) => renderLink(k, false))}
          </div>
        )}
      </div>
    </div>
  );
}
