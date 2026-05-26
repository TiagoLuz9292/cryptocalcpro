"use client";

import Link from "next/link";
import { ExternalLink, TrendingUp, Trophy } from "lucide-react";
import { track } from "@vercel/analytics";
import { affiliateLinks } from "@/data/affiliates";

interface PartnerBlockProps {
  exchange?: string;
  featuredExchanges?: string[];
  className?: string;
}

const EXCHANGE_META: Record<string, { name: string }> = {
  bybit:        { name: "Bybit" },
  binance:      { name: "Binance" },
  okx:          { name: "OKX" },
  mexc:         { name: "MEXC" },
  kraken:       { name: "Kraken" },
  kucoin:       { name: "KuCoin" },
  bingx:        { name: "BingX" },
  phemex:       { name: "Phemex" },
  bitget:       { name: "Bitget" },
  ftmo:         { name: "FTMO" },
  fundednext:   { name: "FundedNext" },
  brightfunded: { name: "BrightFunded" },
};

const PROP_FIRM_KEYS = ["ftmo", "fundednext", "brightfunded"];
const DEFAULT_FEATURED = ["bybit", "binance"];

export function PartnerBlock({ exchange, featuredExchanges, className }: PartnerBlockProps) {
  const allExchangeKeys = Object.keys(affiliateLinks).filter((k) => !PROP_FIRM_KEYS.includes(k));
  const propFirmKeys = PROP_FIRM_KEYS.filter((k) => !!affiliateLinks[k]);

  const rawFeatured = featuredExchanges?.filter((k) => !PROP_FIRM_KEYS.includes(k) && !!affiliateLinks[k]);
  const featuredKeys =
    rawFeatured && rawFeatured.length > 0
      ? rawFeatured
      : exchange && affiliateLinks[exchange] && !PROP_FIRM_KEYS.includes(exchange)
        ? [exchange]
        : allExchangeKeys.filter((k) => DEFAULT_FEATURED.includes(k));

  const secondaryExchangeKeys = allExchangeKeys.filter((k) => !featuredKeys.includes(k));

  return (
    <div className={className}>
      <div className="rounded-xl border border-amber-400/30 bg-card overflow-hidden shadow-[0_0_30px_8px_rgba(251,191,36,0.14),0_0_70px_20px_rgba(251,191,36,0.06)]">
        <div className="flex flex-col md:flex-row">

          {/* Left — Crypto Exchanges 60% */}
          <div className="md:w-[60%] p-5 border-b md:border-b-0 md:border-r border-border/50">
            <div className="flex items-center gap-2 mb-1">
              <TrendingUp className="h-4 w-4 text-amber-400 shrink-0" />
              <p className="text-sm font-bold text-amber-400">Get Your First Deposit Bonus</p>
            </div>
            <p className="text-xs text-muted-foreground mb-4">Partner exchanges — welcome rewards for new accounts</p>

            {featuredKeys.length > 0 && (
              <div className="flex gap-2 mb-3">
                {featuredKeys.map((k) => {
                  const link = affiliateLinks[k];
                  const name = EXCHANGE_META[k]?.name ?? k;
                  if (!link) return null;
                  return (
                    <Link
                      key={k}
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer sponsored"
                      onClick={() => track("affiliate_click", { exchange: k, panel: "exchange" })}
                      className="flex-1 min-w-[120px] inline-flex items-center justify-center gap-2 rounded-lg border border-amber-400/40 bg-amber-400/10 px-4 py-3 text-sm font-semibold text-amber-300 hover:bg-amber-400/20 hover:text-amber-200 transition-colors"
                    >
                      {name}
                      <ExternalLink className="h-3.5 w-3.5" />
                    </Link>
                  );
                })}
              </div>
            )}

            {secondaryExchangeKeys.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {secondaryExchangeKeys.map((k) => {
                  const link = affiliateLinks[k];
                  const name = EXCHANGE_META[k]?.name ?? k;
                  if (!link) return null;
                  return (
                    <Link
                      key={k}
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer sponsored"
                      onClick={() => track("affiliate_click", { exchange: k, panel: "exchange" })}
                      className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-secondary px-3 py-1.5 text-xs font-medium hover:bg-muted hover:text-primary transition-colors"
                    >
                      {name}
                      <ExternalLink className="h-3 w-3 text-muted-foreground" />
                    </Link>
                  );
                })}
              </div>
            )}
          </div>

          {/* Right — Prop Firms 40% */}
          <div className="md:w-[40%] p-5">
            <div className="flex items-center gap-2 mb-1">
              <Trophy className="h-4 w-4 text-emerald-400 shrink-0" />
              <p className="text-sm font-bold text-emerald-400">Get Funded — Start a Challenge</p>
            </div>
            <p className="text-xs text-muted-foreground mb-4">Partner prop firms — trade with their capital</p>

            <div className="flex flex-col gap-2">
              {propFirmKeys.map((k) => {
                const link = affiliateLinks[k];
                const name = EXCHANGE_META[k]?.name ?? k;
                if (!link) return null;
                return (
                  <Link
                    key={k}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                    onClick={() => track("affiliate_click", { exchange: k, panel: "prop-firm" })}
                    className="w-full inline-flex items-center justify-center gap-2 rounded-lg border border-emerald-500/40 bg-emerald-500/10 px-4 py-3 text-sm font-semibold text-emerald-400 hover:bg-emerald-500/20 hover:text-emerald-300 transition-colors"
                  >
                    {name}
                    <ExternalLink className="h-3.5 w-3.5" />
                  </Link>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

// Backwards-compat alias — remove after all call sites migrated
export { PartnerBlock as AffiliateBlock };
