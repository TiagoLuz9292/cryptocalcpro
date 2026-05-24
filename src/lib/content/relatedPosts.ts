import { getAllPosts } from "@/lib/content/mdx";

// Maps calculator category → blog post slugs most relevant to it
const CATEGORY_POSTS: Record<string, string[]> = {
  "position-sizing": [
    "how-to-calculate-position-size-crypto",
    "position-sizing-mistakes",
    "risk-management-rules-trading",
    "stop-loss-placement-guide",
  ],
  "risk-management": [
    "risk-reward-ratio-explained",
    "risk-management-rules-trading",
    "crypto-risk-reward-examples",
    "stop-loss-placement-guide",
    "trading-journal-guide",
    "scalping-vs-swing-trading",
  ],
  "prop-firm": [
    "ftmo-daily-drawdown-rules-explained",
    "how-to-pass-prop-firm-challenge",
    "myfundedfx-rules-explained",
    "topstep-trading-combine-rules",
    "what-is-drawdown-trading",
    "prop-firm-profit-targets-explained",
    "prop-firm-vs-personal-account",
  ],
  "leverage": [
    "crypto-leverage-liquidation-explained",
    "best-leverage-for-beginners-crypto",
    "what-are-perpetual-futures-crypto",
    "crypto-futures-vs-spot-trading",
  ],
  "dca": [
    "dollar-cost-averaging-crypto-complete-guide",
    "bitcoin-dca-strategy",
    "ethereum-dca-strategy",
    "how-to-use-dca-bear-market",
  ],
  "fees": [
    "trading-fees-impact-profits",
    "crypto-futures-vs-spot-trading",
    "scalping-vs-swing-trading",
  ],
  "compounding": [
    "compounding-trading-account",
    "risk-management-rules-trading",
    "trading-journal-guide",
  ],
};

export function getRelatedPosts(category: string, currentSlug?: string, limit = 3) {
  const allPosts = getAllPosts();
  const targetSlugs = CATEGORY_POSTS[category] ?? [];

  return targetSlugs
    .filter((s) => s !== currentSlug)
    .map((slug) => allPosts.find((p) => p.slug === slug))
    .filter((p): p is NonNullable<typeof p> => p !== undefined)
    .slice(0, limit);
}
