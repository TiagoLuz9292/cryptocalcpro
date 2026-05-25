export interface Category {
  slug: string;
  name: string;
  description: string;
  icon: string;
  intro?: string;
}

export const categories: Category[] = [
  {
    slug: "position-sizing",
    name: "Position Sizing",
    description: "Calculate optimal position sizes based on account risk and trade parameters.",
    icon: "BarChart2",
    intro: "Position sizing is the single most important variable in trading. It determines how much of your account you put at risk on each trade — and done correctly, it's what separates traders who survive drawdowns from those who blow up. These calculators let you define your risk in dollar terms (typically 1–2% of account per trade) and instantly get the exact position size, whether you're trading Bitcoin spot, Ethereum perpetuals, or Solana futures. All calculators support both long and short positions and work with any stop-loss distance.",
  },
  {
    slug: "risk-management",
    name: "Risk Management",
    description: "Tools to protect your capital and manage downside exposure.",
    icon: "Shield",
    intro: "Professional traders don't focus on how much they can make — they focus on how much they can lose. Risk management tools quantify your downside before you enter a trade: your risk/reward ratio tells you whether a setup is worth taking, your drawdown tells you how badly a losing streak will hurt your account, and your stop-loss placement determines whether you'll be stopped out by normal volatility or only when your thesis is actually wrong. Use these tools before every trade, not after.",
  },
  {
    slug: "prop-firm",
    name: "Prop Firm",
    description: "Navigate prop firm rules, drawdown limits, and evaluation targets.",
    icon: "Building2",
    intro: "Prop firm evaluations (FTMO, FundedNext, Topstep) have strict drawdown rules that end your challenge the moment you breach them — no exceptions, no recovery. The daily drawdown limit is the most dangerous: on most firms it's 5% of your starting or peak balance, meaning a single bad day can fail a challenge you've been building for weeks. These calculators tell you exactly how much margin you have left at any point in your evaluation so you can size positions accordingly and never approach the limit by accident.",
  },
  {
    slug: "leverage",
    name: "Leverage & Liquidation",
    description: "Understand leverage mechanics and avoid liquidation.",
    icon: "TrendingUp",
    intro: "Leverage amplifies both profits and losses — but the most dangerous effect is the liquidation price. At 10× leverage, a 10% adverse move wipes out your entire margin. At 25×, only a 4% move is needed. These calculators show you exactly where your liquidation price sits before you open a position, so you can set your stop-loss well above it and avoid the catastrophic scenario of a rapid move liquidating your position before your stop can execute. Always know your liquidation price before entering any leveraged trade.",
  },
  {
    slug: "dca",
    name: "Dollar Cost Averaging",
    description: "Optimize your DCA strategy with average price and P&L calculations.",
    icon: "RefreshCw",
    intro: "Dollar-cost averaging (DCA) is the strategy of buying a fixed dollar amount of an asset at regular intervals regardless of price. When prices fall, you buy more units; when they rise, fewer — automatically lowering your average cost over time. It removes the stress of timing the market and is especially effective during bear markets where lump-sum buying feels psychologically difficult. These calculators show your average purchase price, total cost, unrealized P&L, and how much the asset needs to recover for you to break even.",
  },
  {
    slug: "fees",
    name: "Trading Fees",
    description: "Calculate fees and their impact on your trading P&L.",
    icon: "Receipt",
    intro: "Trading fees seem small in isolation but compound into a significant drag on profitability. A scalper making 50 trades a day at 0.1% taker fee on a $10,000 position pays $50 in fees per day — $1,000+ per month — before a single dollar of profit. These calculators break down the real cost of your trading strategy across maker/taker fees, exchange comparisons, and how fees affect your minimum required win rate to stay profitable.",
  },
  {
    slug: "compounding",
    name: "Compounding",
    description: "Model account growth with reinvested returns over time.",
    icon: "TrendingUp",
    intro: "Compounding is what turns consistent small gains into significant wealth over time. A trading account that grows 3% per month reinvested turns $10,000 into $43,000 in three years — without adding any new capital. The key insight is that losses compound against you just as aggressively: a 20% drawdown requires a 25% gain to recover. These calculators model realistic account growth scenarios with your actual return rate and show why protecting capital (avoiding large drawdowns) matters far more than chasing large gains.",
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
