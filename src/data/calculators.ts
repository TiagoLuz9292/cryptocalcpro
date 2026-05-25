import type { CalculatorMeta } from "@/types/calculator";

export const calculators: CalculatorMeta[] = [
  {
    slug: "crypto-position-size-calculator",
    name: "Crypto Position Size Calculator",
    shortName: "Position Size",
    description:
      "Calculate the optimal crypto position size based on your account balance, risk percentage, entry price, and stop loss.",
    longDescription:
      "Determine exactly how many units to buy so you never risk more than your chosen percentage on any single trade.",
    category: "position-sizing",
    keywords: [
      "crypto position size calculator",
      "position sizing",
      "risk per trade",
      "how many coins to buy",
      "bitcoin position size",
    ],
    fields: [
      {
        id: "accountSize",
        label: "Account Size",
        type: "number",
        unit: "USD",
        placeholder: "10000",
        min: 1,
        step: 1,
        defaultValue: 10000,
        helpText: "Your total trading account balance in USD.",
      },
      {
        id: "riskPercent",
        label: "Risk Per Trade",
        type: "number",
        unitOptions: [
          { value: "percent", label: "%" },
          { value: "dollar", label: "$" },
        ],
        unitFieldId: "riskUnit",
        placeholder: "1",
        min: 0.01,
        step: 0.01,
        defaultValue: 1,
        helpText: "Enter as % of account or a fixed $ amount — toggle the unit on the right.",
      },
      {
        id: "riskUnit",
        label: "",
        type: "hidden",
        defaultValue: "percent",
      },
      {
        id: "entryPrice",
        label: "Entry Price",
        type: "number",
        unit: "USD",
        placeholder: "50000",
        min: 0.0001,
        step: 0.01,
        defaultValue: 50000,
        helpText: "The price at which you will enter the trade.",
      },
      {
        id: "stopLossPrice",
        label: "Stop Loss Price",
        type: "number",
        unit: "USD",
        placeholder: "49000",
        min: 0.0001,
        step: 0.01,
        defaultValue: 49000,
        helpText: "Your stop loss price. Must differ from entry price.",
      },
    ],
    relatedSlugs: [
      "risk-reward-calculator",
      "leverage-liquidation-calculator",
      "trading-fee-calculator",
    ],
    faqs: [
      {
        question: "What is position sizing in crypto trading?",
        answer:
          "Position sizing is the process of determining how many units of a cryptocurrency to buy or sell on a given trade, based on your account size and maximum acceptable risk. Proper position sizing ensures that no single trade can devastate your account.",
      },
      {
        question: "What is the 1% rule in trading?",
        answer:
          "The 1% rule states that you should never risk more than 1% of your trading capital on a single trade. This means even a streak of 10 losing trades only costs you ~10% of your account, keeping you in the game.",
      },
      {
        question: "How is position size calculated?",
        answer:
          "Position Size = (Account Size × Risk%) ÷ |Entry Price − Stop Loss Price|. This gives you the number of units to buy. Multiply by the entry price to get the total position value in USD.",
      },
      {
        question: "Should I use the same position size for every trade?",
        answer:
          "No. Position size should vary based on the distance between your entry and stop loss. A tighter stop loss allows a larger position while still respecting your fixed risk amount.",
      },
    ],
    educationContent: {
      title: "Understanding Position Sizing",
      body: `Position sizing is the single most important skill separating profitable traders from losers. A trader with a mediocre strategy but excellent position sizing will outperform a trader with a great strategy and reckless sizing.

**The Core Formula**

Risk Amount = Account Size × Risk%
Position Size (units) = Risk Amount ÷ |Entry − Stop Loss|
Position Value (USD) = Position Size × Entry Price

**Example**: $10,000 account, 1% risk, entry at $50,000, stop at $49,000.
- Risk Amount = $100
- Position Size = $100 ÷ $1,000 = 0.1 BTC
- Position Value = 0.1 × $50,000 = $5,000

**Why Stop Loss Distance Matters**

A wider stop requires a smaller position. A tighter stop allows a larger position — at the same dollar risk. This is why experienced traders say "the stop dictates the size."

**Scaling Position Sizing to Your Goals**

Most professional traders risk 0.5%–2% per trade. Higher win rates and better R:R ratios allow riskier sizing. Beginners should start at 0.5% until they have a proven track record.`,
    },
  },

  {
    slug: "risk-reward-calculator",
    name: "Risk Reward Calculator",
    shortName: "Risk:Reward",
    description:
      "Calculate your risk-to-reward ratio, potential profit/loss, and breakeven win rate for any crypto trade.",
    longDescription:
      "Know your R:R before you enter. A good risk-reward ratio is the foundation of a profitable trading system.",
    category: "risk-management",
    keywords: [
      "risk reward calculator",
      "risk to reward ratio",
      "rr ratio crypto",
      "breakeven win rate",
      "trade calculator",
    ],
    fields: [
      {
        id: "entryPrice",
        label: "Entry Price",
        type: "number",
        unit: "USD",
        placeholder: "50000",
        min: 0.0001,
        step: 0.01,
        defaultValue: 50000,
      },
      {
        id: "stopLossPrice",
        label: "Stop Loss Price",
        type: "number",
        unit: "USD",
        placeholder: "49000",
        min: 0.0001,
        step: 0.01,
        defaultValue: 49000,
      },
      {
        id: "takeProfitPrice",
        label: "Take Profit Price",
        type: "number",
        unit: "USD",
        placeholder: "53000",
        min: 0.0001,
        step: 0.01,
        defaultValue: 53000,
      },
      {
        id: "riskAmount",
        label: "Risk Amount",
        type: "number",
        unit: "USD",
        placeholder: "100",
        min: 0.01,
        step: 0.01,
        defaultValue: 100,
        helpText: "How much USD you are risking on this trade.",
      },
    ],
    relatedSlugs: [
      "crypto-position-size-calculator",
      "prop-firm-daily-drawdown-calculator",
      "trading-fee-calculator",
    ],
    faqs: [
      {
        question: "What is a good risk-to-reward ratio?",
        answer:
          "A minimum of 1:2 is recommended — risking $1 to make $2. Many professional traders target 1:3 or higher. A 1:2 R:R means you only need to win 34% of your trades to break even.",
      },
      {
        question: "What is the breakeven win rate?",
        answer:
          "The breakeven win rate is the minimum win percentage needed to be profitable given your R:R ratio. Formula: Breakeven Win Rate = 1 ÷ (1 + R:R Ratio). At 1:2, you need to win 33.3% of trades to break even.",
      },
      {
        question: "Does a high R:R guarantee profit?",
        answer:
          "No. A high R:R ratio improves your edge but must be combined with a win rate that exceeds the breakeven threshold. A 1:5 R:R is useless if you only win 10% of the time.",
      },
    ],
    educationContent: {
      title: "Risk-Reward Ratio Explained",
      body: `The risk-to-reward ratio (R:R) compares the potential profit of a trade to its potential loss. It is the foundation of any sustainable trading strategy.

**How to Calculate R:R**

Reward = |Take Profit − Entry|
Risk = |Entry − Stop Loss|
R:R Ratio = Reward ÷ Risk

**Breakeven Win Rate**

Breakeven Win Rate = 1 ÷ (1 + R:R)

At R:R of 1:2 → breakeven win rate = 33.3%
At R:R of 1:3 → breakeven win rate = 25%

This means with a 1:3 R:R, you can lose 75% of your trades and still break even. Most retail traders lose because they take poor R:R trades while trying to achieve 70%+ win rates.

**The Professional Approach**

Professional traders focus on R:R first, then win rate second. A 40% win rate with 1:2.5 average R:R produces strong returns. A 60% win rate with 1:0.8 average R:R produces losses over time.`,
    },
  },

  {
    slug: "prop-firm-daily-drawdown-calculator",
    name: "Prop Firm Daily Drawdown Calculator",
    shortName: "Daily Drawdown",
    description:
      "Track your prop firm daily drawdown limit in real time. Avoid breaching account rules with this FTMO, FundedNext, and BrightFunded-compatible calculator.",
    longDescription:
      "Prop firm daily drawdown limits are the most common reason traders fail evaluations. This calculator keeps you safe.",
    category: "prop-firm",
    keywords: [
      "prop firm daily drawdown calculator",
      "FTMO daily loss limit",
      "funded account drawdown",
      "daily drawdown rule",
      "prop firm calculator",
    ],
    fields: [
      {
        id: "maxDailyDrawdownPercent",
        label: "Max Daily Drawdown",
        type: "number",
        unit: "%",
        placeholder: "5",
        min: 0.01,
        max: 100,
        step: 0.01,
        defaultValue: 5,
        helpText: "Your prop firm's maximum allowed daily loss as a percentage.",
      },
      {
        id: "startingBalance",
        label: "Starting Balance Today",
        type: "number",
        unit: "USD",
        placeholder: "100000",
        min: 1,
        step: 0.01,
        defaultValue: 100000,
        helpText: "Your balance at the start of today's trading session.",
      },
      {
        id: "currentPnl",
        label: "Current P&L Today",
        type: "number",
        unit: "USD",
        placeholder: "-500",
        step: 0.01,
        defaultValue: -500,
        helpText: "Enter a negative number for a loss (e.g. -500). Enter 0 if session not started.",
      },
    ],
    relatedSlugs: [
      "crypto-position-size-calculator",
      "risk-reward-calculator",
      "compounding-calculator",
    ],
    faqs: [
      {
        question: "How is prop firm daily drawdown calculated?",
        answer:
          "Most prop firms calculate daily drawdown from the balance at the start of the trading day. If your daily limit is 5% on a $100k account, you cannot lose more than $5,000 in a single day regardless of intraday profits.",
      },
      {
        question: "Does daily drawdown reset every day?",
        answer:
          "Yes — daily drawdown limits reset each day, typically at midnight server time or at a fixed time like 5 PM EST. Check your specific firm's rules as reset times vary.",
      },
      {
        question: "What happens if I breach my daily drawdown?",
        answer:
          "Breaching your daily drawdown limit typically results in immediate account termination or suspension. There is usually no grace period — the breach is final and the account is failed.",
      },
      {
        question: "How do I avoid breaching daily drawdown?",
        answer:
          "Use this calculator before each trade to know exactly how much room you have left. Stop trading for the day once you hit 80% of your limit. Never add to losing positions late in the day.",
      },
    ],
    educationContent: {
      title: "Prop Firm Drawdown Rules Explained",
      body: `Funded trading accounts come with strict rules designed to protect the firm's capital. The daily drawdown limit is the most commonly breached rule.

**Two Types of Drawdown**

1. **Daily Drawdown**: Maximum loss allowed in a single trading day. Resets daily.
2. **Maximum (Total) Drawdown**: Maximum total loss from peak balance or initial balance. Does NOT reset.

**Common Prop Firm Rules**
- FTMO: 5% daily, 10% total
- FundedNext: 5% daily, 10% total
- Apex Trader Funding: Trailing drawdown

**Strategy to Stay Safe**

1. Calculate your daily limit before the first trade
2. Set a hard stop at 70% of the limit
3. If you lose 3% in the first hour, stop trading
4. Never revenge trade to recover losses near the limit

**The Trailing Drawdown Trap**

Some firms use a trailing drawdown that tracks your highest balance rather than starting balance. This means profits temporarily reduce your safe zone. Always read your firm's specific documentation.`,
    },
  },

  {
    slug: "leverage-liquidation-calculator",
    name: "Leverage Liquidation Calculator",
    shortName: "Liquidation Price",
    description:
      "Calculate the exact liquidation price for any leveraged crypto position. Know your liquidation distance before entering any leveraged trade.",
    longDescription:
      "Avoid unexpected liquidations by calculating your exact liquidation price for long and short positions on any leverage.",
    category: "leverage",
    keywords: [
      "crypto liquidation calculator",
      "leverage liquidation price",
      "bitcoin liquidation calculator",
      "margin call calculator",
      "bybit liquidation",
    ],
    fields: [
      {
        id: "entryPrice",
        label: "Entry Price",
        type: "number",
        unit: "USD",
        placeholder: "50000",
        min: 0.0001,
        step: 0.01,
        defaultValue: 50000,
      },
      {
        id: "leverage",
        label: "Leverage",
        type: "number",
        unit: "x",
        placeholder: "10",
        min: 1,
        max: 200,
        step: 1,
        defaultValue: 10,
      },
      {
        id: "positionSide",
        label: "Position Side",
        type: "select",
        options: [
          { label: "Long (Buy)", value: "long" },
          { label: "Short (Sell)", value: "short" },
        ],
        defaultValue: "long",
      },
      {
        id: "maintenanceMargin",
        label: "Maintenance Margin",
        type: "number",
        unit: "%",
        placeholder: "0.5",
        min: 0.01,
        max: 10,
        step: 0.01,
        defaultValue: 0.5,
        helpText: "Typically 0.5% for most major crypto exchanges.",
      },
    ],
    relatedSlugs: [
      "crypto-position-size-calculator",
      "trading-fee-calculator",
      "risk-reward-calculator",
    ],
    faqs: [
      {
        question: "How is liquidation price calculated?",
        answer:
          "For a long position: Liquidation Price = Entry × (1 − 1/Leverage + Maintenance Margin%). For a short: Liquidation Price = Entry × (1 + 1/Leverage − Maintenance Margin%). Higher leverage means your liquidation price is much closer to entry.",
      },
      {
        question: "What is maintenance margin?",
        answer:
          "Maintenance margin is the minimum equity required to keep a leveraged position open. When your equity falls to this level, the exchange automatically liquidates your position. Most major exchanges set it at 0.5%.",
      },
      {
        question: "How much leverage is safe for crypto?",
        answer:
          "Most professional crypto traders use 3x–10x leverage at most. Higher leverage dramatically reduces your liquidation distance. At 100x leverage, a mere 1% move against you triggers liquidation.",
      },
      {
        question: "Can I avoid liquidation by adding margin?",
        answer:
          "Yes, adding margin to a losing position raises your maintenance margin threshold and moves your liquidation price further away. However, this can increase your total loss if the position continues against you.",
      },
    ],
    educationContent: {
      title: "Understanding Leverage and Liquidation",
      body: `Leverage amplifies both gains and losses. At 10x leverage, a 10% move in your favor doubles your capital — but a 10% move against you wipes out your entire position.

**Liquidation Price Formula**

Long: Liquidation = Entry × (1 − 1/Leverage + MM%)
Short: Liquidation = Entry × (1 + 1/Leverage − MM%)

Where MM% is the maintenance margin percentage.

**Leverage vs. Liquidation Distance**

| Leverage | Liquidation Distance |
|----------|---------------------|
| 2x       | ~50%                |
| 5x       | ~20%                |
| 10x      | ~10%                |
| 25x      | ~4%                 |
| 100x     | ~1%                 |

**Professional Leverage Guidelines**

- Use stop losses BEFORE your liquidation price
- Never add to a losing leveraged position
- Size down when using higher leverage
- Isolated margin is safer than cross margin for beginners
- Know your exchange's specific maintenance margin rates`,
    },
  },

  {
    slug: "dca-calculator",
    name: "DCA Calculator",
    shortName: "DCA",
    description:
      "Calculate your average entry price, total cost, and P&L when dollar cost averaging into any cryptocurrency.",
    longDescription:
      "Model your DCA strategy with multiple entries at different prices to find your true average cost basis.",
    category: "dca",
    keywords: [
      "DCA calculator crypto",
      "dollar cost average calculator",
      "average entry price calculator",
      "bitcoin DCA",
      "crypto cost basis",
    ],
    fields: [
      {
        id: "currentPrice",
        label: "Current Market Price",
        type: "number",
        unit: "USD",
        placeholder: "50000",
        min: 0.0001,
        step: 0.01,
        defaultValue: 50000,
        helpText: "The current price used to calculate unrealized P&L.",
      },
      {
        id: "entry1Price",
        label: "Entry 1 Price",
        type: "number",
        unit: "USD",
        placeholder: "60000",
        min: 0.0001,
        step: 0.01,
        defaultValue: 60000,
      },
      {
        id: "entry1Amount",
        label: "Entry 1 Amount",
        type: "number",
        unit: "USD",
        placeholder: "1000",
        min: 0.01,
        step: 0.01,
        defaultValue: 1000,
      },
      {
        id: "entry2Price",
        label: "Entry 2 Price",
        type: "number",
        unit: "USD",
        placeholder: "50000",
        min: 0,
        step: 0.01,
        defaultValue: 50000,
      },
      {
        id: "entry2Amount",
        label: "Entry 2 Amount",
        type: "number",
        unit: "USD",
        placeholder: "1000",
        min: 0,
        step: 0.01,
        defaultValue: 1000,
      },
      {
        id: "entry3Price",
        label: "Entry 3 Price (optional)",
        type: "number",
        unit: "USD",
        placeholder: "40000",
        min: 0,
        step: 0.01,
        defaultValue: 0,
      },
      {
        id: "entry3Amount",
        label: "Entry 3 Amount (optional)",
        type: "number",
        unit: "USD",
        placeholder: "0",
        min: 0,
        step: 0.01,
        defaultValue: 0,
      },
    ],
    relatedSlugs: [
      "compounding-calculator",
      "crypto-position-size-calculator",
      "trading-fee-calculator",
    ],
    faqs: [
      {
        question: "What is dollar cost averaging (DCA)?",
        answer:
          "DCA is an investment strategy where you divide your total investment into smaller amounts and buy at regular intervals or price levels. This reduces the impact of volatility and removes the need to time the market perfectly.",
      },
      {
        question: "How is average entry price calculated?",
        answer:
          "Average Entry = Total USD Invested ÷ Total Units Purchased. Each purchase gives you a different number of units at a different price. Summing all units and dividing total cost by total units gives your true average price.",
      },
      {
        question: "Is DCA better than lump sum investing?",
        answer:
          "Research shows lump sum investing outperforms DCA ~66% of the time in bull markets. However, DCA significantly reduces psychological stress and protects against buying near all-time highs. Most long-term investors prefer DCA for its simplicity.",
      },
    ],
    educationContent: {
      title: "Dollar Cost Averaging in Crypto",
      body: `DCA is one of the most effective strategies for accumulating cryptocurrency over time. Rather than trying to time the perfect entry, you buy at multiple price points.

**Average Entry Formula**

Total Units = Σ (Amount_i ÷ Price_i)
Average Entry = Total USD ÷ Total Units
Unrealized P&L = (Current Price − Average Entry) × Total Units

**DCA vs. Lump Sum**

DCA wins when markets are declining or sideways. Lump sum wins when markets trend up immediately after investment. For most retail investors, DCA removes the emotional burden of market timing.

**Optimizing Your DCA**

- Increase buy amounts when prices drop significantly
- Set price targets for each DCA level (e.g., -10%, -20%, -30% from ATH)
- Stick to your schedule regardless of market sentiment
- Track your average entry to know your true breakeven price`,
    },
  },

  {
    slug: "trading-fee-calculator",
    name: "Trading Fee Calculator",
    shortName: "Fee Calculator",
    description:
      "Calculate exact trading fees for crypto futures and spot trades. See how fees affect your net P&L across different exchanges and fee tiers.",
    longDescription:
      "Fees can silently destroy your trading edge. This calculator shows you the true cost of every trade.",
    category: "fees",
    keywords: [
      "crypto trading fee calculator",
      "binance fee calculator",
      "bybit fee calculator",
      "futures trading fees",
      "taker maker fee",
    ],
    fields: [
      {
        id: "positionSize",
        label: "Position Size",
        type: "number",
        unit: "USD",
        placeholder: "10000",
        min: 0.01,
        step: 0.01,
        defaultValue: 10000,
      },
      {
        id: "entryPrice",
        label: "Entry Price",
        type: "number",
        unit: "USD",
        placeholder: "50000",
        min: 0.0001,
        step: 0.01,
        defaultValue: 50000,
      },
      {
        id: "exitPrice",
        label: "Exit Price",
        type: "number",
        unit: "USD",
        placeholder: "52000",
        min: 0.0001,
        step: 0.01,
        defaultValue: 52000,
      },
      {
        id: "makerFee",
        label: "Maker Fee",
        type: "number",
        unit: "%",
        placeholder: "0.02",
        min: 0,
        max: 5,
        step: 0.001,
        defaultValue: 0.02,
        helpText: "Fee for limit orders (maker). Typically lower.",
      },
      {
        id: "takerFee",
        label: "Taker Fee",
        type: "number",
        unit: "%",
        placeholder: "0.05",
        min: 0,
        max: 5,
        step: 0.001,
        defaultValue: 0.05,
        helpText: "Fee for market orders (taker). Typically higher.",
      },
      {
        id: "orderType",
        label: "Order Type",
        type: "select",
        options: [
          { label: "Market (Taker both sides)", value: "taker-taker" },
          { label: "Limit (Maker both sides)", value: "maker-maker" },
          { label: "Limit entry, Market exit", value: "maker-taker" },
        ],
        defaultValue: "taker-taker",
      },
    ],
    relatedSlugs: [
      "crypto-position-size-calculator",
      "risk-reward-calculator",
      "leverage-liquidation-calculator",
    ],
    faqs: [
      {
        question: "What is the difference between maker and taker fees?",
        answer:
          "Maker fees apply when you place a limit order that adds liquidity to the order book (your order sits and waits). Taker fees apply when your order immediately matches an existing order (market orders always take). Maker fees are almost always lower.",
      },
      {
        question: "How much do trading fees affect profitability?",
        answer:
          "Significantly. A 0.05% taker fee on both sides of a trade means you need a 0.1% price move just to break even. For a scalper making 10 trades per day, fees can consume hundreds or thousands of dollars monthly.",
      },
      {
        question: "How can I reduce my trading fees?",
        answer:
          "Use limit orders instead of market orders, hold exchange tokens (BNB for Binance, etc.) for fee discounts, increase trading volume to reach lower fee tiers, and consider exchanges with maker rebates.",
      },
    ],
    educationContent: {
      title: "How Trading Fees Impact Your P&L",
      body: `Trading fees are one of the most overlooked costs in crypto trading. Even small fee percentages compound dramatically for active traders.

**Fee Calculation**

Entry Fee = Position Size × Entry Fee Rate
Exit Fee = Position Size × Exit Fee Rate
Total Fees = Entry Fee + Exit Fee
Net P&L = Gross P&L − Total Fees

**Fee Impact by Trading Style**

| Style | Trades/Day | Monthly Fee Cost (0.05% taker) |
|-------|------------|-------------------------------|
| Scalper | 20+ | $5,000+ on $500k volume |
| Day Trader | 5 | $1,250 on $500k volume |
| Swing Trader | 1 | $250 on $500k volume |

**Choosing the Right Exchange**

Lower fees aren't always better if execution quality suffers. Consider:
- Fee tiers and volume discounts
- Maker rebates (some exchanges pay you to make markets)
- Token discounts (BNB, FTT equivalents)
- Funding rates for perpetual futures`,
    },
  },

  {
    slug: "compounding-calculator",
    name: "Compounding Calculator",
    shortName: "Compounding",
    description:
      "Calculate the power of compounded returns for your crypto trading account. Model monthly returns, contributions, and long-term growth projections.",
    longDescription:
      "See how consistent monthly returns compound into extraordinary long-term wealth. The most motivating calculator for serious traders.",
    category: "compounding",
    keywords: [
      "trading compounding calculator",
      "crypto compounding returns",
      "monthly return calculator",
      "account growth calculator",
      "compound interest trading",
    ],
    fields: [
      {
        id: "initialCapital",
        label: "Initial Capital",
        type: "number",
        unit: "USD",
        placeholder: "10000",
        min: 1,
        step: 1,
        defaultValue: 10000,
      },
      {
        id: "monthlyReturn",
        label: "Monthly Return",
        type: "number",
        unit: "%",
        placeholder: "5",
        min: -99,
        max: 1000,
        step: 0.01,
        defaultValue: 5,
        helpText: "Average monthly return percentage.",
      },
      {
        id: "months",
        label: "Time Period",
        type: "number",
        unit: "months",
        placeholder: "24",
        min: 1,
        max: 600,
        step: 1,
        defaultValue: 24,
      },
      {
        id: "monthlyContribution",
        label: "Monthly Contribution",
        type: "number",
        unit: "USD",
        placeholder: "0",
        min: 0,
        step: 1,
        defaultValue: 0,
        helpText: "Optional: additional funds added each month.",
      },
    ],
    relatedSlugs: [
      "crypto-position-size-calculator",
      "dca-calculator",
      "risk-reward-calculator",
    ],
    faqs: [
      {
        question: "What monthly return should I target as a crypto trader?",
        answer:
          "Conservative traders target 3–5% per month. Aggressive traders may aim for 10–20%, but with proportionally higher risk. A consistent 5% monthly return compounds to 80% annual returns — exceptional by any standard.",
      },
      {
        question: "Is 10% monthly return realistic?",
        answer:
          "10% monthly is achievable but challenging to sustain. That would be 214% annualized. Most professional fund managers target 20–30% annually. If you're consistently hitting 10% monthly, you have a genuine edge — but verify over at least 12 months.",
      },
      {
        question: "How does compounding work in trading?",
        answer:
          "Compounding in trading means reinvesting your profits into future positions, so your position sizes grow along with your account. A 5% return on $10,000 = $500. Next month, 5% on $10,500 = $525. This exponential growth is the power of compounding.",
      },
    ],
    educationContent: {
      title: "The Power of Compound Returns",
      body: `Albert Einstein allegedly called compound interest "the eighth wonder of the world." Whether he said it or not, the math is undeniable.

**Compound Return Formula**

Final Balance = Initial × (1 + r)^n + Contribution × ((1 + r)^n − 1) / r

Where r = monthly return rate, n = number of months

**The Doubling Rule**

Use the Rule of 72: divide 72 by your monthly return to estimate how many months to double your money.
- 5% monthly → double in ~14 months
- 3% monthly → double in ~24 months
- 10% monthly → double in ~7 months

**Why Most Traders Fail to Compound**

1. They withdraw profits instead of reinvesting
2. Inconsistent returns — big wins offset by big losses
3. Increasing risk as account grows, causing drawdowns
4. Psychological pressure increases with account size

**The Sustainable Path**

Focus on consistency above all else. A trader who makes 3% every month for 3 years will outperform one who makes 30% one year and loses 20% the next. Your job is to protect the compounding curve.`,
    },
  },
  // ─── COIN-SPECIFIC POSITION SIZE VARIANTS ────────────────────────────────

  {
    slug: "bitcoin-position-size-calculator",
    parentSlug: "crypto-position-size-calculator",
    name: "Bitcoin Position Size Calculator",
    shortName: "BTC Position Size",
    description: "Calculate the exact number of Bitcoin to buy based on your account size, risk percentage, and BTC entry and stop loss prices.",
    longDescription: "Purpose-built for Bitcoin traders who want instant position sizing without manual math.",
    category: "position-sizing",
    keywords: ["bitcoin position size calculator", "BTC position size", "how much bitcoin to buy", "bitcoin risk calculator", "BTC trading calculator"],
    fields: [
      { id: "accountSize", label: "Account Size", type: "number", unit: "USD", placeholder: "10000", min: 1, step: 1, defaultValue: 10000 },
      { id: "riskPercent", label: "Risk Per Trade", type: "number", unitOptions: [{ value: "percent", label: "%" }, { value: "dollar", label: "$" }], unitFieldId: "riskUnit", placeholder: "1", min: 0.01, step: 0.01, defaultValue: 1 },
      { id: "riskUnit", label: "", type: "hidden", defaultValue: "percent" },
      { id: "entryPrice", label: "BTC Entry Price", type: "number", unit: "USD", placeholder: "67000", min: 0.0001, step: 1, defaultValue: 67000 },
      { id: "stopLossPrice", label: "BTC Stop Loss", type: "number", unit: "USD", placeholder: "65000", min: 0.0001, step: 1, defaultValue: 65000 },
    ],
    relatedSlugs: ["ethereum-position-size-calculator", "crypto-position-size-calculator", "risk-reward-calculator"],
    faqs: [
      { question: "How much Bitcoin should I buy per trade?", answer: "Use the 1% risk rule: risk no more than 1% of your account. Divide your risk amount by the distance between your BTC entry and stop loss price to get the exact BTC amount." },
      { question: "What is a safe stop loss distance for Bitcoin?", answer: "Bitcoin is volatile. Day traders often use 1–2% stops, while swing traders use 3–8% stops. Wider stops require smaller position sizes to maintain the same dollar risk." },
      { question: "Should I change my BTC position size based on market conditions?", answer: "Yes. In high-volatility periods, widen your stops and reduce size. In tight consolidation, you can use tighter stops and larger size — always keeping your dollar risk constant." },
    ],
    educationContent: {
      title: "Sizing Bitcoin Positions Correctly",
      body: `Bitcoin's volatility makes position sizing even more critical than in traditional markets. A 5% daily move is common for BTC — without proper sizing, a single bad trade can devastate your account.

**BTC-Specific Considerations**

Bitcoin typically trades with wider spreads and larger candles than forex or stocks. This means:
- Stop losses often need to be placed beyond key support/resistance levels, 1–3% away
- Position sizes are therefore often smaller in BTC terms but equal in USD risk
- Funding rates on BTC perpetuals can significantly impact P&L on held positions

**Example: $10,000 account, 1% risk, BTC at $67,000**

Stop at $65,000 (3% below entry):
- Risk amount: $100
- Position size: $100 ÷ $2,000 = 0.05 BTC
- Position value: $3,350

Stop at $66,000 (1.5% below entry):
- Risk amount: $100
- Position size: $100 ÷ $1,000 = 0.1 BTC
- Position value: $6,700

Same dollar risk, very different BTC amounts.`,
    },
  },

  {
    slug: "ethereum-position-size-calculator",
    parentSlug: "crypto-position-size-calculator",
    name: "Ethereum Position Size Calculator",
    shortName: "ETH Position Size",
    description: "Calculate how much Ethereum to buy per trade based on your account balance, risk tolerance, and ETH entry and stop loss prices.",
    longDescription: "Purpose-built for Ethereum traders and DeFi participants who need precise position sizing.",
    category: "position-sizing",
    keywords: ["ethereum position size calculator", "ETH position size", "how much ethereum to buy", "ETH trading calculator", "ethereum risk management"],
    fields: [
      { id: "accountSize", label: "Account Size", type: "number", unit: "USD", placeholder: "10000", min: 1, step: 1, defaultValue: 10000 },
      { id: "riskPercent", label: "Risk Per Trade", type: "number", unitOptions: [{ value: "percent", label: "%" }, { value: "dollar", label: "$" }], unitFieldId: "riskUnit", placeholder: "1", min: 0.01, step: 0.01, defaultValue: 1 },
      { id: "riskUnit", label: "", type: "hidden", defaultValue: "percent" },
      { id: "entryPrice", label: "ETH Entry Price", type: "number", unit: "USD", placeholder: "3500", min: 0.0001, step: 0.01, defaultValue: 3500 },
      { id: "stopLossPrice", label: "ETH Stop Loss", type: "number", unit: "USD", placeholder: "3350", min: 0.0001, step: 0.01, defaultValue: 3350 },
    ],
    relatedSlugs: ["bitcoin-position-size-calculator", "crypto-position-size-calculator", "leverage-liquidation-calculator"],
    faqs: [
      { question: "How is ETH position sizing different from BTC?", answer: "The formula is identical — the difference is the price. At $3,500 per ETH, your position sizes will be in larger unit counts than BTC. Always calculate in USD risk first, then divide by the price difference to get ETH units." },
      { question: "Should I use the same risk % for ETH as BTC?", answer: "ETH is generally slightly more volatile than BTC. Many traders reduce their risk per trade on altcoins by 25–50% compared to BTC positions to account for higher volatility." },
    ],
    educationContent: {
      title: "Position Sizing for Ethereum Trades",
      body: `Ethereum's price behavior differs from Bitcoin in important ways. ETH often has higher beta — it moves more aggressively in both directions relative to BTC.

**ETH Position Sizing Rules**

- ETH at $3,500 with a $150 stop distance = position size in whole ETH numbers
- Gas fees are irrelevant for position sizing (they're fixed, not percentage-based)
- ETH perps on Bybit/Binance follow the same liquidation mechanics as BTC

**The Beta Factor**

When BTC drops 5%, ETH often drops 7–10%. Size ETH positions slightly smaller than equivalent BTC trades if you want equal risk exposure to the crypto market.`,
    },
  },

  {
    slug: "solana-position-size-calculator",
    parentSlug: "crypto-position-size-calculator",
    name: "Solana Position Size Calculator",
    shortName: "SOL Position Size",
    description: "Calculate your Solana (SOL) position size based on account risk, entry price, and stop loss. Optimized defaults for SOL's typical price range.",
    longDescription: "Position sizing tool built for Solana traders and ecosystem participants.",
    category: "position-sizing",
    keywords: ["solana position size calculator", "SOL trading calculator", "solana risk calculator", "how much SOL to buy", "SOL position sizing"],
    fields: [
      { id: "accountSize", label: "Account Size", type: "number", unit: "USD", placeholder: "10000", min: 1, step: 1, defaultValue: 10000 },
      { id: "riskPercent", label: "Risk Per Trade", type: "number", unitOptions: [{ value: "percent", label: "%" }, { value: "dollar", label: "$" }], unitFieldId: "riskUnit", placeholder: "1", min: 0.01, step: 0.01, defaultValue: 1 },
      { id: "riskUnit", label: "", type: "hidden", defaultValue: "percent" },
      { id: "entryPrice", label: "SOL Entry Price", type: "number", unit: "USD", placeholder: "165", min: 0.0001, step: 0.01, defaultValue: 165 },
      { id: "stopLossPrice", label: "SOL Stop Loss", type: "number", unit: "USD", placeholder: "158", min: 0.0001, step: 0.01, defaultValue: 158 },
    ],
    relatedSlugs: ["bitcoin-position-size-calculator", "ethereum-position-size-calculator", "crypto-position-size-calculator"],
    faqs: [
      { question: "How volatile is Solana compared to Bitcoin?", answer: "SOL is significantly more volatile than BTC — often 2–3x the daily range. This means your stop losses should be wider (in percentage terms) and your position sizes correspondingly smaller for the same dollar risk." },
      { question: "What stop loss distance should I use for SOL?", answer: "Most SOL day traders use 2–4% stops. Swing traders use 5–10%. Calculate your position size based on your chosen stop, not the other way around." },
    ],
    educationContent: {
      title: "Sizing Solana Positions for High-Volatility Trading",
      body: `Solana is one of the highest-beta assets in crypto. Daily 10–20% moves are not uncommon, making disciplined position sizing even more critical than with BTC or ETH.

**Key Differences for SOL Trading**

- Use wider stops than you would for BTC (2–5% minimum)
- Reduce position size proportionally to compensate
- SOL has excellent liquidity on Bybit, Binance, and OKX perps
- Funding rates on SOL perps can be extreme during bull markets

**Risk-Adjusted Sizing**

For the same dollar risk, a SOL position will be smaller as a percentage of your portfolio than a BTC position — and that's correct. Higher volatility = smaller size = same risk.`,
    },
  },

  // ─── LEVERAGE VARIANTS ───────────────────────────────────────────────────

  {
    slug: "10x-leverage-liquidation-calculator",
    parentSlug: "leverage-liquidation-calculator",
    name: "10x Leverage Liquidation Calculator",
    shortName: "10x Liquidation",
    description: "Calculate your exact liquidation price at 10x leverage. See how far price can move against you before liquidation on both long and short positions.",
    longDescription: "The most commonly used leverage level — understand exactly where 10x leverage liquidates you.",
    category: "leverage",
    keywords: ["10x leverage liquidation calculator", "10x leverage crypto", "liquidation price 10x", "10 times leverage calculator", "10x futures calculator"],
    fields: [
      { id: "entryPrice", label: "Entry Price", type: "number", unit: "USD", placeholder: "50000", min: 0.0001, step: 0.01, defaultValue: 50000 },
      { id: "leverage", label: "Leverage", type: "number", unit: "x", placeholder: "10", min: 1, max: 200, step: 1, defaultValue: 10 },
      { id: "positionSide", label: "Position Side", type: "select", options: [{ label: "Long (Buy)", value: "long" }, { label: "Short (Sell)", value: "short" }], defaultValue: "long" },
      { id: "maintenanceMargin", label: "Maintenance Margin", type: "number", unit: "%", placeholder: "0.5", min: 0.01, max: 10, step: 0.01, defaultValue: 0.5 },
    ],
    relatedSlugs: ["25x-leverage-liquidation-calculator", "100x-leverage-liquidation-calculator", "leverage-liquidation-calculator"],
    faqs: [
      { question: "How far can price move at 10x leverage before liquidation?", answer: "At 10x leverage with 0.5% maintenance margin, your liquidation price is approximately 9.5% away from your entry. A $50,000 BTC long at 10x liquidates around $45,250." },
      { question: "Is 10x leverage safe for crypto?", answer: "10x is considered moderate-to-high for crypto. Most experienced traders use 3–10x maximum. Always set a stop loss well before your liquidation price to avoid being liquidated on normal volatility." },
    ],
    educationContent: {
      title: "Trading at 10x Leverage: What You Need to Know",
      body: `10x leverage is the most popular level among retail crypto futures traders. It offers meaningful amplification without the extreme liquidation proximity of 25x or higher.

**10x Leverage: The Math**

At 10x, a 10% adverse price move wipes out your entire margin (minus fees). Your liquidation occurs slightly before this — at approximately 9.5% — due to the maintenance margin requirement.

**Why Traders Choose 10x**

- Enough amplification to matter on a small account
- Liquidation distance is survivable with a proper stop loss
- Available on all major exchanges for BTC, ETH, SOL, and most top-20 coins

**Recommended Stop Loss Placement at 10x**

Place your stop loss at 3–6% from entry — well above the ~9.5% liquidation distance. This gives you room to be wrong without risking liquidation.`,
    },
  },

  {
    slug: "25x-leverage-liquidation-calculator",
    parentSlug: "leverage-liquidation-calculator",
    name: "25x Leverage Liquidation Calculator",
    shortName: "25x Liquidation",
    description: "Find your exact liquidation price at 25x leverage for crypto futures. Know exactly how close liquidation is before you enter.",
    longDescription: "At 25x leverage, liquidation is only 3.5% away. Know your numbers before you trade.",
    category: "leverage",
    keywords: ["25x leverage liquidation calculator", "25x leverage crypto", "liquidation price 25x leverage", "25x futures calculator"],
    fields: [
      { id: "entryPrice", label: "Entry Price", type: "number", unit: "USD", placeholder: "50000", min: 0.0001, step: 0.01, defaultValue: 50000 },
      { id: "leverage", label: "Leverage", type: "number", unit: "x", placeholder: "25", min: 1, max: 200, step: 1, defaultValue: 25 },
      { id: "positionSide", label: "Position Side", type: "select", options: [{ label: "Long (Buy)", value: "long" }, { label: "Short (Sell)", value: "short" }], defaultValue: "long" },
      { id: "maintenanceMargin", label: "Maintenance Margin", type: "number", unit: "%", placeholder: "0.5", min: 0.01, max: 10, step: 0.01, defaultValue: 0.5 },
    ],
    relatedSlugs: ["10x-leverage-liquidation-calculator", "100x-leverage-liquidation-calculator", "leverage-liquidation-calculator"],
    faqs: [
      { question: "How close is liquidation at 25x leverage?", answer: "At 25x leverage, your liquidation price is approximately 3.5% from your entry. Bitcoin regularly moves 3–5% in a single hour. This is why 25x requires extremely tight risk management." },
      { question: "What stop loss should I use at 25x?", answer: "With liquidation at 3.5%, your stop loss must be within 1–2% of your entry. This requires extremely precise entries near key support/resistance levels." },
    ],
    educationContent: {
      title: "25x Leverage: High Risk, Precise Execution Required",
      body: `At 25x leverage, the margin for error is extremely thin. Bitcoin's average hourly candle is often 0.5–1.5%. A single bad entry at 25x can hit your stop loss or liquidation within minutes.

**Who Should Use 25x?**

Only experienced traders with:
- Precise entry methods (order flow, level 2, tape reading)
- Sub-1% stop losses
- Fast execution platforms
- Real-time monitoring capability

**The Mathematics of 25x**

Your entire margin is wiped on a ~4% move. If Bitcoin moves from $50,000 to $48,000 — a move that happens multiple times per week — a 25x long is liquidated.

**Practical Alternative**

Consider using 10x leverage with a smaller account allocation to achieve similar P&L per dollar risked, with much more breathing room before liquidation.`,
    },
  },

  {
    slug: "100x-leverage-liquidation-calculator",
    parentSlug: "leverage-liquidation-calculator",
    name: "100x Leverage Liquidation Calculator",
    shortName: "100x Liquidation",
    description: "Calculate your liquidation price at 100x leverage. Understand exactly how a 1% price move wipes your entire margin at maximum leverage.",
    longDescription: "100x leverage means liquidation is just 1% away. Know what you're dealing with.",
    category: "leverage",
    keywords: ["100x leverage liquidation calculator", "100x leverage crypto", "liquidation price 100x", "maximum leverage calculator", "100x futures"],
    fields: [
      { id: "entryPrice", label: "Entry Price", type: "number", unit: "USD", placeholder: "50000", min: 0.0001, step: 0.01, defaultValue: 50000 },
      { id: "leverage", label: "Leverage", type: "number", unit: "x", placeholder: "100", min: 1, max: 200, step: 1, defaultValue: 100 },
      { id: "positionSide", label: "Position Side", type: "select", options: [{ label: "Long (Buy)", value: "long" }, { label: "Short (Sell)", value: "short" }], defaultValue: "long" },
      { id: "maintenanceMargin", label: "Maintenance Margin", type: "number", unit: "%", placeholder: "0.5", min: 0.01, max: 10, step: 0.01, defaultValue: 0.5 },
    ],
    relatedSlugs: ["25x-leverage-liquidation-calculator", "10x-leverage-liquidation-calculator", "leverage-liquidation-calculator"],
    faqs: [
      { question: "How much does price need to move to liquidate a 100x position?", answer: "At 100x leverage, you are liquidated on approximately a 0.5% adverse move (accounting for maintenance margin). On a $50,000 BTC long at 100x, a move to ~$49,500 triggers liquidation." },
      { question: "Why does anyone use 100x leverage?", answer: "Theoretically, 100x can be used for ultra-short scalps where position is held for seconds. In practice, most retail traders using 100x are gambling and will be liquidated quickly by normal market noise." },
    ],
    educationContent: {
      title: "100x Leverage: Understanding Maximum Risk",
      body: `100x leverage is the extreme end of the spectrum. At this leverage, your position is essentially a binary bet: the market moves in your favor within seconds, or you are liquidated.

**The Reality of 100x**

Crypto markets have a bid-ask spread and slippage. At 100x leverage, the spread alone can consume a significant portion of your margin before price even moves. Combined with the 0.5% maintenance margin requirement, effective liquidation distance is less than 0.5%.

**Why This Tool Exists**

Even if you do not plan to trade at 100x, understanding the liquidation math helps you comprehend all leverage levels. The formula is the same — only the numbers change.

**The Professional Perspective**

No professional crypto trader uses 100x leverage for directional trades. The risk:reward is unfavorable when normal market noise exceeds your liquidation distance. Use this calculator to understand the math, then choose a leverage level that gives you at least 5–10% breathing room.`,
    },
  },

  // ─── PROP FIRM VARIANTS ──────────────────────────────────────────────────

  {
    slug: "ftmo-drawdown-calculator",
    parentSlug: "prop-firm-daily-drawdown-calculator",
    name: "FTMO Drawdown Calculator",
    shortName: "FTMO Calculator",
    description: "Track your FTMO daily drawdown limit in real time. Pre-configured for FTMO's 5% daily loss rule on Challenge and Verification accounts.",
    longDescription: "Never breach your FTMO account again. Real-time tracking of your remaining daily loss budget.",
    category: "prop-firm",
    keywords: ["FTMO calculator", "FTMO drawdown calculator", "FTMO daily loss limit", "FTMO challenge calculator", "FTMO risk calculator"],
    fields: [
      { id: "maxDailyDrawdownPercent", label: "FTMO Daily Limit", type: "number", unit: "%", placeholder: "5", min: 0.01, max: 100, step: 0.01, defaultValue: 5, helpText: "FTMO standard: 5% daily loss limit." },
      { id: "startingBalance", label: "Balance at Day Start", type: "number", unit: "USD", placeholder: "100000", min: 1, step: 0.01, defaultValue: 100000 },
      { id: "currentPnl", label: "Current P&L Today", type: "number", unit: "USD", placeholder: "-500", step: 0.01, defaultValue: -500, helpText: "Enter a negative number for a loss (e.g. -500). Enter 0 if session not started." },
    ],
    relatedSlugs: ["fundednext-drawdown-calculator", "brightfunded-drawdown-calculator", "prop-firm-daily-drawdown-calculator"],
    faqs: [
      { question: "What is FTMO's daily drawdown limit?", answer: "FTMO allows a maximum daily loss of 5% of your account balance. On a $100,000 account, you cannot lose more than $5,000 in a single trading day. This applies to both the Challenge and Verification phases." },
      { question: "When does FTMO's daily drawdown reset?", answer: "FTMO resets the daily drawdown at midnight Central European Time (CET). If you're in New York (EST), that's 6 PM. In London (GMT), it's 11 PM. In Singapore (SGT), it's 7 AM." },
      { question: "Does FTMO use balance or equity for drawdown?", answer: "FTMO uses equity-based drawdown — your real-time account value including all open floating P&L. If your open positions are showing a $5,000 floating loss on a $100k account, you have already hit the limit even without closing trades." },
      { question: "What FTMO account sizes are available?", answer: "FTMO offers accounts of $10,000, $25,000, $50,000, $100,000, $200,000, and up to $2,000,000 through scaling. The 5% daily limit applies to all sizes." },
    ],
    educationContent: {
      title: "Mastering FTMO's Risk Rules",
      body: `FTMO is one of the most reputable prop trading firms. Their rules are strict but clear. Understanding them thoroughly is the difference between keeping your funded account and losing it.

**FTMO Rule Summary**

| Rule | Limit | Type |
|------|-------|------|
| Daily Loss | 5% | Resets daily at midnight CET |
| Maximum Loss | 10% | Never resets (from initial balance) |
| Profit Target (Challenge) | 10% | Must hit to pass |
| Profit Target (Verification) | 5% | Must hit to get funded |

**The Most Common FTMO Failure Reasons**

1. Revenge trading after morning losses
2. Ignoring floating P&L on open positions
3. Trading through high-impact news events
4. Not knowing the CET reset time for their timezone
5. Increasing size after profits to hit targets faster

**FTMO Scaling Plan**

After passing and getting funded, FTMO offers a scaling plan. Hit 10% profit over 4 months with consistent results and your account size increases by 25%. A $100k account can grow to $200k, then $400k over time — with the same 5% daily rule throughout.`,
    },
  },

  {
    slug: "fundednext-drawdown-calculator",
    parentSlug: "prop-firm-daily-drawdown-calculator",
    name: "FundedNext Drawdown Calculator",
    shortName: "FundedNext Calc",
    description: "Track your FundedNext daily drawdown in real time. Pre-configured for FundedNext's Stellar 2-Step daily loss limits across all account sizes.",
    longDescription: "Stay compliant with FundedNext rules and never breach your funded account.",
    category: "prop-firm",
    keywords: ["FundedNext calculator", "FundedNext drawdown", "FundedNext daily loss", "fundednext drawdown calculator", "funded next calculator"],
    fields: [
      { id: "maxDailyDrawdownPercent", label: "Daily Loss Limit", type: "number", unit: "%", placeholder: "5", min: 0.01, max: 100, step: 0.01, defaultValue: 5, helpText: "FundedNext Stellar 2-Step standard: 5% daily loss limit." },
      { id: "startingBalance", label: "Balance at Day Start", type: "number", unit: "USD", placeholder: "100000", min: 1, step: 0.01, defaultValue: 100000 },
      { id: "currentPnl", label: "Current P&L Today", type: "number", unit: "USD", placeholder: "-500", step: 0.01, defaultValue: -500, helpText: "Enter a negative number for a loss (e.g. -500). Enter 0 if session not started." },
    ],
    relatedSlugs: ["ftmo-drawdown-calculator", "brightfunded-drawdown-calculator", "prop-firm-daily-drawdown-calculator"],
    faqs: [
      { question: "What are FundedNext's drawdown rules?", answer: "FundedNext Stellar 2-Step uses a 5% daily drawdown limit and a 10% maximum drawdown — both static from your initial balance. These apply during both evaluation phases and the funded phase." },
      { question: "How is FundedNext different from FTMO?", answer: "FundedNext has a lower Phase 1 profit target (8% vs 10%), pays 15% of evaluation profits when you pass, and offers up to 90% profit split on funded accounts. FTMO has stronger brand recognition and a longer track record since 2015." },
    ],
    educationContent: {
      title: "FundedNext Risk Management",
      body: `FundedNext is one of the fastest-growing prop firms, having paid out over $284M to traders since 2022. Their Stellar 2-Step challenge follows the industry-standard 5%/10% drawdown structure.

**Key FundedNext Rules (Stellar 2-Step)**

- 5% daily drawdown (equity-based, static)
- 10% maximum drawdown (static from initial balance)
- Phase 1 profit target: 8%
- Phase 2 profit target: 5%
- 15% of evaluation profits paid when you pass — unique to FundedNext
- Up to 90% profit split on funded accounts

**Strategy for Passing**

Focus on consistency. Risk 0.5–1% per trade and stop trading at 60% of your daily limit. FundedNext rewards steady performance — the 8% Phase 1 target is more achievable than FTMO's 10% if you trade systematically.`,
    },
  },

  {
    slug: "brightfunded-drawdown-calculator",
    parentSlug: "prop-firm-daily-drawdown-calculator",
    name: "BrightFunded Drawdown Calculator",
    shortName: "BrightFunded Calc",
    description: "Track your BrightFunded daily drawdown in real time. Pre-configured for BrightFunded's 5% daily loss limit across all account sizes.",
    longDescription: "Stay compliant with BrightFunded rules and never breach your funded crypto account.",
    category: "prop-firm",
    keywords: ["BrightFunded calculator", "BrightFunded drawdown", "BrightFunded daily loss", "brightfunded drawdown calculator", "crypto prop firm calculator"],
    fields: [
      { id: "maxDailyDrawdownPercent", label: "Daily Loss Limit", type: "number", unit: "%", placeholder: "5", min: 0.01, max: 100, step: 0.01, defaultValue: 5, helpText: "BrightFunded standard: 5% daily loss limit." },
      { id: "startingBalance", label: "Balance at Day Start", type: "number", unit: "USD", placeholder: "100000", min: 1, step: 0.01, defaultValue: 100000 },
      { id: "currentPnl", label: "Current P&L Today", type: "number", unit: "USD", placeholder: "-500", step: 0.01, defaultValue: -500, helpText: "Enter a negative number for a loss (e.g. -500). Enter 0 if session not started." },
    ],
    relatedSlugs: ["ftmo-drawdown-calculator", "fundednext-drawdown-calculator", "prop-firm-daily-drawdown-calculator"],
    faqs: [
      { question: "What are BrightFunded's drawdown rules?", answer: "BrightFunded uses a 5% daily drawdown limit and a 10% maximum drawdown — both static from your initial balance. These apply during both evaluation phases and the funded phase." },
      { question: "How is BrightFunded different from FTMO?", answer: "BrightFunded has a lower Phase 1 profit target (8% vs 10%), offers 35 crypto pairs vs FTMO's 2 CFDs, pays out in 4–8 hours vs FTMO's 14 days, and offers up to 100% profit split vs FTMO's 90%. FTMO has a longer track record since 2015." },
      { question: "Can I trade crypto on BrightFunded?", answer: "Yes — BrightFunded offers 35 cryptocurrency pairs including Bitcoin, Ethereum, and major altcoins. Leverage is up to 5:1 on crypto. Adjust your position sizing for crypto volatility — risk 0.25–0.5% per trade rather than the 1% used on forex." },
    ],
    educationContent: {
      title: "BrightFunded Risk Management",
      body: `BrightFunded is purpose-built for crypto traders — 35 crypto pairs, fast payouts, and a scaling plan that can reach 100% profit split. Their drawdown structure is the same industry-standard 5%/10% model used by FTMO and FundedNext.

**Key BrightFunded Rules**

- 5% daily drawdown (equity-based, static)
- 10% maximum drawdown (static from initial balance)
- Phase 1 profit target: 8%
- Phase 2 profit target: 5%
- 35 cryptocurrency pairs available
- Payouts in 4–8 hours — fastest in the industry
- Up to 100% profit split via scaling plan

**Crypto-Specific Risk Management**

Crypto volatility is 3–5x higher than forex. Use 0.25–0.5% risk per trade on crypto pairs — not the 1% standard for forex. One BTC candle can move 5% in minutes. Your daily limit can be hit before you can manually close a position.`,
    },
  },

  // ─── DCA VARIANTS ────────────────────────────────────────────────────────

  {
    slug: "bitcoin-dca-calculator",
    parentSlug: "dca-calculator",
    name: "Bitcoin DCA Calculator",
    shortName: "Bitcoin DCA",
    description: "Calculate your Bitcoin average entry price, total BTC holdings, and unrealized P&L when dollar cost averaging into BTC at multiple price levels.",
    longDescription: "The essential tool for Bitcoin long-term accumulators and DCA investors.",
    category: "dca",
    keywords: ["bitcoin DCA calculator", "BTC dollar cost average", "bitcoin average price calculator", "BTC accumulation calculator", "bitcoin cost basis"],
    fields: [
      { id: "currentPrice", label: "Current BTC Price", type: "number", unit: "USD", placeholder: "67000", min: 0.0001, step: 1, defaultValue: 67000 },
      { id: "entry1Price", label: "Buy 1 Price", type: "number", unit: "USD", placeholder: "70000", min: 0.0001, step: 1, defaultValue: 70000 },
      { id: "entry1Amount", label: "Buy 1 Amount", type: "number", unit: "USD", placeholder: "1000", min: 0.01, step: 1, defaultValue: 1000 },
      { id: "entry2Price", label: "Buy 2 Price", type: "number", unit: "USD", placeholder: "65000", min: 0, step: 1, defaultValue: 65000 },
      { id: "entry2Amount", label: "Buy 2 Amount", type: "number", unit: "USD", placeholder: "1000", min: 0, step: 1, defaultValue: 1000 },
      { id: "entry3Price", label: "Buy 3 Price (optional)", type: "number", unit: "USD", placeholder: "55000", min: 0, step: 1, defaultValue: 0 },
      { id: "entry3Amount", label: "Buy 3 Amount (optional)", type: "number", unit: "USD", placeholder: "0", min: 0, step: 1, defaultValue: 0 },
    ],
    relatedSlugs: ["ethereum-dca-calculator", "dca-calculator", "compounding-calculator"],
    faqs: [
      { question: "What is the best DCA strategy for Bitcoin?", answer: "The most common strategies are weekly or monthly fixed-dollar purchases regardless of price, and dip-buying at key percentage drops from the all-time high (e.g., buying extra at -20%, -40%, -60%). Both strategies significantly lower average entry over time." },
      { question: "How often should I DCA into Bitcoin?", answer: "Research shows weekly DCA slightly outperforms monthly DCA in volatile markets. Daily DCA offers minimal additional benefit and higher transaction costs. Most investors use weekly or bi-weekly purchases." },
    ],
    educationContent: {
      title: "Dollar Cost Averaging Into Bitcoin",
      body: `Bitcoin's halving cycles create predictable (but not guaranteed) patterns of boom and bust. DCA smooths out your exposure across these cycles, removing the need to time the market perfectly.

**BTC DCA Strategies**

**Time-based DCA:** Buy a fixed dollar amount every week or month regardless of price.

**Level-based DCA:** Set buy orders at specific price levels (e.g., every 10% drop from the most recent high).

**Hybrid:** Combine both — regular small buys plus larger buys at significant dips.

**Historical Performance**

An investor who DCA'd $100/week into Bitcoin from 2019 to 2024 would hold approximately 1.2–1.8 BTC at average entries well below the 2024 all-time high — far better than most active traders achieved.

**The Emotional Advantage**

DCA removes the most destructive force in investing: emotional decision-making. You buy mechanically, hold through volatility, and don't panic sell at bottoms.`,
    },
  },

  {
    slug: "ethereum-dca-calculator",
    parentSlug: "dca-calculator",
    name: "Ethereum DCA Calculator",
    shortName: "Ethereum DCA",
    description: "Calculate your Ethereum average buy price, total ETH holdings, and current P&L when using a dollar cost averaging strategy into ETH.",
    longDescription: "Track your ETH accumulation strategy with multiple entry levels and see your true average cost basis.",
    category: "dca",
    keywords: ["ethereum DCA calculator", "ETH dollar cost average", "ethereum average price", "ETH accumulation", "ethereum cost basis calculator"],
    fields: [
      { id: "currentPrice", label: "Current ETH Price", type: "number", unit: "USD", placeholder: "3500", min: 0.0001, step: 0.01, defaultValue: 3500 },
      { id: "entry1Price", label: "Buy 1 Price", type: "number", unit: "USD", placeholder: "4000", min: 0.0001, step: 0.01, defaultValue: 4000 },
      { id: "entry1Amount", label: "Buy 1 Amount", type: "number", unit: "USD", placeholder: "1000", min: 0.01, step: 1, defaultValue: 1000 },
      { id: "entry2Price", label: "Buy 2 Price", type: "number", unit: "USD", placeholder: "3200", min: 0, step: 0.01, defaultValue: 3200 },
      { id: "entry2Amount", label: "Buy 2 Amount", type: "number", unit: "USD", placeholder: "1000", min: 0, step: 1, defaultValue: 1000 },
      { id: "entry3Price", label: "Buy 3 Price (optional)", type: "number", unit: "USD", placeholder: "2500", min: 0, step: 0.01, defaultValue: 0 },
      { id: "entry3Amount", label: "Buy 3 Amount (optional)", type: "number", unit: "USD", placeholder: "0", min: 0, step: 1, defaultValue: 0 },
    ],
    relatedSlugs: ["bitcoin-dca-calculator", "dca-calculator", "compounding-calculator"],
    faqs: [
      { question: "Is ETH a good DCA asset?", answer: "Ethereum has historically been a strong DCA asset due to its adoption in DeFi, NFTs, and Layer 2 scaling. Like Bitcoin, it experiences major boom-bust cycles that DCA smooths out over time." },
      { question: "Should I DCA ETH or BTC?", answer: "Many investors split DCA between both — BTC as the more stable store of value, ETH for higher growth potential. A 60/40 or 70/30 BTC/ETH split is common among long-term crypto investors." },
    ],
    educationContent: {
      title: "DCA Strategy for Ethereum Investors",
      body: `Ethereum's value proposition extends beyond store of value — it's the infrastructure layer for most of DeFi, NFTs, and Layer 2 scaling solutions. This creates demand drivers beyond just speculation.

**ETH-Specific DCA Considerations**

- ETH staking rewards (~4% APY) add a yield component to long-term holding
- Gas fees are irrelevant for DCA purchases (one-time cost, not ongoing)
- ETH correlates strongly with BTC but often has higher volatility
- The ETH/BTC ratio is a useful signal for relative momentum between the two

**Staking + DCA Combination**

If you DCA into ETH and stake it, you earn yield on your accumulation. Your average entry improves as staking rewards compound. This is one of the most effective long-term wealth-building strategies in crypto.`,
    },
  },

  // ─── RISK/REWARD VARIANTS ─────────────────────────────────────────────────

  {
    slug: "scalping-risk-reward-calculator",
    parentSlug: "risk-reward-calculator",
    name: "Scalping Risk Reward Calculator",
    shortName: "Scalping R:R",
    description: "Calculate risk-to-reward ratios optimized for scalping strategies with tight stops and quick profit targets on 1-minute to 15-minute timeframes.",
    longDescription: "Purpose-built for scalpers who need fast R:R calculations on tight entries.",
    category: "risk-management",
    keywords: ["scalping risk reward calculator", "scalping calculator crypto", "1 minute trading calculator", "scalp trading risk management", "tight stop loss calculator"],
    fields: [
      { id: "entryPrice", label: "Entry Price", type: "number", unit: "USD", placeholder: "50000", min: 0.0001, step: 0.01, defaultValue: 50000 },
      { id: "stopLossPrice", label: "Stop Loss (Tight)", type: "number", unit: "USD", placeholder: "49750", min: 0.0001, step: 0.01, defaultValue: 49750, helpText: "Scalping stops: 0.2–0.5% from entry." },
      { id: "takeProfitPrice", label: "Take Profit", type: "number", unit: "USD", placeholder: "50500", min: 0.0001, step: 0.01, defaultValue: 50500 },
      { id: "riskAmount", label: "Risk Amount", type: "number", unit: "USD", placeholder: "50", min: 0.01, step: 0.01, defaultValue: 50, helpText: "Scalpers typically risk less per trade due to higher frequency." },
    ],
    relatedSlugs: ["swing-trading-risk-reward-calculator", "risk-reward-calculator", "trading-fee-calculator"],
    faqs: [
      { question: "What R:R ratio should scalpers target?", answer: "Scalpers often accept lower R:R ratios (1:1.5 to 1:2) compared to swing traders, compensated by higher win rates (60–70%+). At 1:1.5 R:R with a 60% win rate, you have a profitable edge." },
      { question: "How do fees affect scalping profitability?", answer: "Fees are critical for scalpers. At 0.05% taker fee on both sides (0.1% round-trip), you need a 0.1% price move just to break even. At $50,000 BTC, that's $50 per BTC position. Use limit orders (maker fees) wherever possible." },
    ],
    educationContent: {
      title: "Risk Management for Crypto Scalpers",
      body: `Scalping requires a different approach to risk management than swing trading. The mathematics change significantly at small timeframes and tight stops.

**Scalping R:R vs. Win Rate Trade-off**

| Win Rate | Required R:R to be Profitable |
|----------|-------------------------------|
| 50% | > 1:1 |
| 60% | > 1:0.67 |
| 70% | > 1:0.43 |

Higher win rates allow lower R:R — but achieving 70% win rates consistently is extremely difficult.

**The Fee Problem for Scalpers**

A 0.1% round-trip fee on a scalp targeting 0.3% profit means you need to be right 33% of the time just to cover fees before making profit. This is why most scalpers:
1. Use maker (limit) orders exclusively
2. Trade on exchanges with rebates
3. Target at least 0.3–0.5% per trade to overcome fees

**Volume and Consistency**

A good scalper makes 10–20 small, consistent profits per day rather than chasing large moves. The compounding effect of many small wins outperforms a few large winners over time.`,
    },
  },

  {
    slug: "swing-trading-risk-reward-calculator",
    parentSlug: "risk-reward-calculator",
    name: "Swing Trading Risk Reward Calculator",
    shortName: "Swing Trading R:R",
    description: "Calculate risk-to-reward ratios for swing trades with wider stops and multi-day profit targets. Optimized for 4H to daily timeframe traders.",
    longDescription: "Purpose-built for swing traders who hold positions for days to weeks.",
    category: "risk-management",
    keywords: ["swing trading risk reward calculator", "swing trade calculator crypto", "daily timeframe risk calculator", "swing trading position size", "multi-day trade calculator"],
    fields: [
      { id: "entryPrice", label: "Entry Price", type: "number", unit: "USD", placeholder: "50000", min: 0.0001, step: 0.01, defaultValue: 50000 },
      { id: "stopLossPrice", label: "Stop Loss (Swing)", type: "number", unit: "USD", placeholder: "47500", min: 0.0001, step: 0.01, defaultValue: 47500, helpText: "Swing stops: 3–8% from entry is typical." },
      { id: "takeProfitPrice", label: "Take Profit", type: "number", unit: "USD", placeholder: "57500", min: 0.0001, step: 0.01, defaultValue: 57500 },
      { id: "riskAmount", label: "Risk Amount", type: "number", unit: "USD", placeholder: "200", min: 0.01, step: 0.01, defaultValue: 200 },
    ],
    relatedSlugs: ["scalping-risk-reward-calculator", "risk-reward-calculator", "crypto-position-size-calculator"],
    faqs: [
      { question: "What is a good R:R for swing trading?", answer: "Swing traders typically target 1:3 or higher R:R ratios. With wider stops (5–8%), you need larger price targets (15–24%) to justify the trade. Focus on major support/resistance levels and trend continuation patterns." },
      { question: "How long should I hold a swing trade?", answer: "Swing trades typically last 2–10 days, sometimes weeks. The key is holding until your target is hit or your stop is triggered — not exiting early due to impatience or daily fluctuations within your stop range." },
    ],
    educationContent: {
      title: "Risk Management for Swing Traders",
      body: `Swing trading crypto on the 4H or daily timeframe offers several advantages: reduced fee impact, less screen time, and the ability to catch major trend moves.

**Why Swing Traders Need Higher R:R**

Wider stops mean more money at risk per trade. To compensate, targets must be proportionally larger. A 5% stop with a 5% target (1:1 R:R) requires a 50%+ win rate just to break even. A 5% stop with a 15% target (1:3 R:R) only requires a 25% win rate.

**Finding Swing Trade Setups**

- Key support/resistance levels on daily charts
- Post-consolidation breakouts on high volume
- Higher-timeframe trend continuation setups
- Bitcoin dominance shifts (altcoin rotations)

**Holding Through Drawdowns**

The hardest part of swing trading is holding a position that temporarily moves against you within your stop range. If your analysis is correct and the stop hasn't been hit, stay in the trade. Exiting early due to discomfort destroys the mathematical edge of high R:R trading.`,
    },
  },
  // --- Position Size: XRP ---
  {
    slug: "xrp-position-size-calculator",
    parentSlug: "crypto-position-size-calculator",
    name: "XRP Position Size Calculator",
    shortName: "XRP Position Size",
    description: "Calculate the correct XRP position size based on your account balance, risk percentage, and stop loss distance.",
    longDescription: "Purpose-built for XRP traders with XRP-specific default prices and risk parameters.",
    category: "position-sizing",
    keywords: ["xrp position size calculator", "ripple position size", "xrp risk calculator", "how many xrp to buy", "xrp trading calculator"],
    fields: [
      { id: "accountSize", label: "Account Size", type: "number", unit: "USD", placeholder: "10000", min: 1, step: 1, defaultValue: 10000 },
      { id: "riskPercent", label: "Risk Per Trade", type: "number", unitOptions: [{ value: "percent", label: "%" }, { value: "dollar", label: "$" }], unitFieldId: "riskUnit", placeholder: "1", min: 0.01, step: 0.01, defaultValue: 1 },
      { id: "riskUnit", label: "", type: "hidden", defaultValue: "percent" },
      { id: "entryPrice", label: "XRP Entry Price", type: "number", unit: "USD", placeholder: "0.55", min: 0.0001, step: 0.0001, defaultValue: 0.55 },
      { id: "stopLossPrice", label: "Stop Loss Price", type: "number", unit: "USD", placeholder: "0.50", min: 0.0001, step: 0.0001, defaultValue: 0.50 },
    ],
    relatedSlugs: ["crypto-position-size-calculator", "bitcoin-position-size-calculator", "risk-reward-calculator"],
    faqs: [
      { question: "How do I calculate XRP position size?", answer: "Use the formula: Risk Amount = Account Size × Risk %. Position Size = Risk Amount ÷ |Entry − Stop Loss|. For XRP at $0.55 with a $0.50 stop and $100 risk: 100 ÷ 0.05 = 2,000 XRP." },
      { question: "How much XRP should I buy per trade?", answer: "Never risk more than 1–2% of your account on a single XRP trade. Calculate position size based on your stop loss distance, not on a fixed number of coins." },
    ],
    educationContent: {
      title: "Position Sizing for Low-Price Crypto Assets",
      body: `Trading lower-priced assets like XRP requires the same disciplined position sizing as Bitcoin — but the math feels different because you are dealing in thousands of coins rather than fractions.\n\nThe formula is identical: Risk Amount ÷ Stop Distance = Position Size (in coins). The only thing that changes is the scale.\n\n**Example:** $10,000 account, 1% risk ($100), XRP entry $0.55, stop $0.50 (stop distance $0.05): Position size = $100 ÷ $0.05 = 2,000 XRP.\n\nNever decide position size based on how many coins "feel right." Let the math decide.`,
    },
  },

  // --- Position Size: BNB ---
  {
    slug: "bnb-position-size-calculator",
    parentSlug: "crypto-position-size-calculator",
    name: "BNB Position Size Calculator",
    shortName: "BNB Position Size",
    description: "Calculate your optimal BNB position size based on account risk, BNB entry price, and stop loss placement.",
    longDescription: "Tailored for Binance Coin traders with BNB-specific default values.",
    category: "position-sizing",
    keywords: ["bnb position size calculator", "binance coin position size", "bnb risk calculator", "how many bnb to buy", "bnb trading size"],
    fields: [
      { id: "accountSize", label: "Account Size", type: "number", unit: "USD", placeholder: "10000", min: 1, step: 1, defaultValue: 10000 },
      { id: "riskPercent", label: "Risk Per Trade", type: "number", unitOptions: [{ value: "percent", label: "%" }, { value: "dollar", label: "$" }], unitFieldId: "riskUnit", placeholder: "1", min: 0.01, step: 0.01, defaultValue: 1 },
      { id: "riskUnit", label: "", type: "hidden", defaultValue: "percent" },
      { id: "entryPrice", label: "BNB Entry Price", type: "number", unit: "USD", placeholder: "600", min: 0.0001, step: 0.01, defaultValue: 600 },
      { id: "stopLossPrice", label: "Stop Loss Price", type: "number", unit: "USD", placeholder: "570", min: 0.0001, step: 0.01, defaultValue: 570 },
    ],
    relatedSlugs: ["crypto-position-size-calculator", "bitcoin-position-size-calculator", "trading-fee-calculator"],
    faqs: [
      { question: "How do I size a BNB trade correctly?", answer: "Calculate your risk amount (account size × risk %), then divide by the stop loss distance in dollars. This gives you the number of BNB to buy." },
      { question: "What is a good risk per trade for BNB?", answer: "The standard is 1% per trade. At 1% on a $10,000 account, your maximum loss per trade is $100 regardless of how volatile BNB is." },
    ],
    educationContent: {
      title: "Trading BNB: Size for the Stop, Not the Feeling",
      body: `BNB trades in a range that makes position sizing feel intuitive — but intuition is the enemy of consistent risk management.\n\nAlways calculate position size mathematically: your dollar risk divided by your stop distance in dollars gives you the exact number of BNB to buy.\n\nBNB is correlated with overall exchange volume and Binance ecosystem activity. It often moves in line with Bitcoin but can have independent catalysts. Size your positions to survive normal volatility without being stopped out by noise.`,
    },
  },

  // --- Leverage: 5x ---
  {
    slug: "5x-leverage-liquidation-calculator",
    parentSlug: "leverage-liquidation-calculator",
    name: "5x Leverage Liquidation Calculator",
    shortName: "5x Liquidation",
    description: "Calculate your exact liquidation price when trading with 5x leverage on crypto futures.",
    longDescription: "Calculate liquidation price, margin required, and safe stop loss levels for 5x leveraged positions.",
    category: "leverage",
    keywords: ["5x leverage liquidation calculator", "5x leverage crypto", "5x futures liquidation price", "5x leverage bitcoin", "low leverage crypto calculator"],
    fields: [
      { id: "entryPrice", label: "Entry Price", type: "number", unit: "USD", placeholder: "50000", min: 0.0001, step: 0.01, defaultValue: 50000 },
      { id: "leverage", label: "Leverage", type: "number", unit: "x", placeholder: "5", min: 1, max: 5, step: 1, defaultValue: 5 },
      { id: "direction", label: "Position Type", type: "select", options: [{ value: "long", label: "Long (Buy)" }, { value: "short", label: "Short (Sell)" }], defaultValue: "long" },
      { id: "maintenanceMargin", label: "Maintenance Margin", type: "number", unit: "%", placeholder: "0.5", min: 0, max: 5, step: 0.1, defaultValue: 0.5 },
    ],
    relatedSlugs: ["leverage-liquidation-calculator", "10x-leverage-liquidation-calculator", "crypto-position-size-calculator"],
    faqs: [
      { question: "How far is my liquidation price at 5x leverage?", answer: "At 5x leverage, your liquidation price is approximately 20% away from your entry (minus the maintenance margin percentage). This gives you much more room than higher leverage." },
      { question: "Is 5x leverage safe for beginners?", answer: "5x leverage is relatively conservative compared to higher options, but still carries significant risk. A 20% move against your position results in liquidation. Always use a stop loss well before your liquidation price." },
    ],
    educationContent: {
      title: "Why 5x Leverage Is the Practical Maximum for Most Traders",
      body: `Professional traders rarely use more than 5–10x leverage on directional trades. At 5x, your liquidation distance is approximately 20% — wide enough to survive normal crypto volatility without being wiped out by routine price swings.\n\n**The math of 5x leverage:**\n- Position value = Margin × 5\n- Liquidation distance ≈ 1/5 = 20%\n- A $50,000 Bitcoin position with $10,000 margin at 5x liquidates near $40,000\n\nHigher leverage reduces this distance dramatically: at 25x, you liquidate 4% from entry. At 100x, 1% from entry. For most traders, the fee and slippage costs alone make these levels impractical.`,
    },
  },

  // --- Leverage: 50x ---
  {
    slug: "50x-leverage-liquidation-calculator",
    parentSlug: "leverage-liquidation-calculator",
    name: "50x Leverage Liquidation Calculator",
    shortName: "50x Liquidation",
    description: "Calculate your liquidation price when using 50x leverage on crypto futures — and understand exactly how close it is to your entry.",
    longDescription: "Precisely calculates liquidation price and required margin for 50x leveraged positions.",
    category: "leverage",
    keywords: ["50x leverage liquidation calculator", "50x leverage crypto", "50x futures liquidation", "50x leverage bitcoin", "high leverage liquidation"],
    fields: [
      { id: "entryPrice", label: "Entry Price", type: "number", unit: "USD", placeholder: "50000", min: 0.0001, step: 0.01, defaultValue: 50000 },
      { id: "leverage", label: "Leverage", type: "number", unit: "x", placeholder: "50", min: 1, max: 200, step: 1, defaultValue: 50 },
      { id: "direction", label: "Position Type", type: "select", options: [{ value: "long", label: "Long (Buy)" }, { value: "short", label: "Short (Sell)" }], defaultValue: "long" },
      { id: "maintenanceMargin", label: "Maintenance Margin", type: "number", unit: "%", placeholder: "0.5", min: 0, max: 5, step: 0.1, defaultValue: 0.5 },
    ],
    relatedSlugs: ["leverage-liquidation-calculator", "100x-leverage-liquidation-calculator", "25x-leverage-liquidation-calculator"],
    faqs: [
      { question: "How far is liquidation at 50x leverage?", answer: "At 50x leverage, your liquidation price is approximately 2% from your entry. On Bitcoin at $50,000, a $1,000 move against you results in full liquidation of your margin." },
      { question: "Should I use 50x leverage in crypto trading?", answer: "50x leverage is only appropriate for very specific short-duration scalping setups with hard stops placed immediately after entry. For most traders, 50x leverage is a capital destruction mechanism, not a trading tool." },
    ],
    educationContent: {
      title: "50x Leverage: The 2% Liquidation Reality",
      body: `At 50x leverage, Bitcoin only needs to move 2% against your position to liquidate your entire margin. In a market where 2% intraday swings are routine, this leverage level is exceptionally dangerous for anything but the most precisely executed trades.\n\n**The liquidation math:**\n- Entry: $50,000\n- 50x leverage, long position\n- Liquidation ≈ $50,000 × (1 − 1/50) = $49,000\n- A single 2% pullback wipes your margin entirely\n\nIf you use 50x leverage, your stop loss must be placed within 1–1.5% of entry with immediate execution. Any delay or slippage during a volatile event can bypass your stop entirely and take your margin.`,
    },
  },

  // --- Leverage: Bybit-specific ---
  {
    slug: "bybit-liquidation-calculator",
    parentSlug: "leverage-liquidation-calculator",
    name: "Bybit Liquidation Price Calculator",
    shortName: "Bybit Liquidation",
    description: "Calculate your exact liquidation price on Bybit futures using Bybit's maintenance margin rates.",
    longDescription: "Bybit-specific liquidation calculator using Bybit perpetual futures maintenance margin parameters.",
    category: "leverage",
    keywords: ["bybit liquidation calculator", "bybit liquidation price", "bybit futures calculator", "bybit leverage calculator", "bybit perpetual futures"],
    fields: [
      { id: "entryPrice", label: "Entry Price", type: "number", unit: "USD", placeholder: "50000", min: 0.0001, step: 0.01, defaultValue: 50000 },
      { id: "leverage", label: "Leverage", type: "number", unit: "x", placeholder: "10", min: 1, max: 100, step: 1, defaultValue: 10 },
      { id: "direction", label: "Position Type", type: "select", options: [{ value: "long", label: "Long (Buy)" }, { value: "short", label: "Short (Sell)" }], defaultValue: "long" },
      { id: "maintenanceMargin", label: "Bybit Maintenance Margin", type: "number", unit: "%", placeholder: "0.5", min: 0, max: 5, step: 0.1, defaultValue: 0.5, helpText: "Bybit BTCUSDT perpetual: 0.5% for positions up to 500 BTC." },
    ],
    relatedSlugs: ["leverage-liquidation-calculator", "10x-leverage-liquidation-calculator", "trading-fee-calculator"],
    faqs: [
      { question: "What is Bybit's maintenance margin for Bitcoin?", answer: "Bybit uses a tiered maintenance margin system. For BTCUSDT perpetual, the maintenance margin rate is 0.5% for positions up to 500 BTC notional value. For larger positions, the rate increases. Always verify the current rate in Bybit's risk limit table." },
      { question: "Does Bybit use isolated or cross margin by default?", answer: "Bybit defaults to cross margin. When opening a new position, manually switch to isolated margin to cap your maximum loss to the margin allocated to that specific position." },
    ],
    educationContent: {
      title: "Bybit Perpetual Futures: Liquidation Mechanics",
      body: `Bybit uses a mark price (not last traded price) for liquidation calculations. This prevents unnecessary liquidations caused by temporary price wicks on low-liquidity exchanges.\n\n**Key Bybit-specific details:**\n- Liquidation is triggered when margin balance falls below maintenance margin\n- Mark price = index price (average across spot exchanges) + funding rate basis\n- Insurance fund covers insolvency before socialized losses apply\n- ADL (auto-deleveraging) is a last resort if insurance fund is depleted\n\nAlways check Bybit's risk limits page for your specific asset. Maintenance margin rates increase for larger position sizes.`,
    },
  },

  // --- Prop Firm: The Funded Trader ---
  {
    slug: "the-funded-trader-drawdown-calculator",
    parentSlug: "prop-firm-daily-drawdown-calculator",
    name: "The Funded Trader Drawdown Calculator",
    shortName: "The Funded Trader",
    description: "Track your daily drawdown limits for The Funded Trader (TFT) evaluation accounts in real time.",
    longDescription: "Purpose-built for The Funded Trader challenge and funded account drawdown tracking.",
    category: "prop-firm",
    keywords: ["the funded trader drawdown calculator", "TFT prop firm rules", "the funded trader daily limit", "funded trader challenge", "TFT drawdown"],
    fields: [
      { id: "accountSize", label: "Account Size", type: "number", unit: "USD", placeholder: "100000", min: 1, step: 1, defaultValue: 100000 },
      { id: "maxDailyDrawdown", label: "Max Daily Drawdown", type: "number", unit: "%", placeholder: "5", min: 0.1, max: 20, step: 0.1, defaultValue: 5 },
      { id: "startingBalance", label: "Today's Starting Balance", type: "number", unit: "USD", placeholder: "100000", min: 1, step: 1, defaultValue: 100000 },
      { id: "currentPnL", label: "Current P&L", type: "number", unit: "USD", placeholder: "0", step: 0.01, defaultValue: 0 },
    ],
    relatedSlugs: ["prop-firm-daily-drawdown-calculator", "ftmo-drawdown-calculator", "fundednext-drawdown-calculator"],
    faqs: [
      { question: "What are The Funded Trader's drawdown rules?", answer: "The Funded Trader standard plans use a 5% daily drawdown and 10% maximum drawdown, calculated from your starting balance. Rules can vary by plan type — always verify in your account dashboard." },
      { question: "How does The Funded Trader calculate daily drawdown?", answer: "Like most modern prop firms, TFT calculates daily drawdown based on equity (including floating losses on open positions), not just closed P&L. Reset time varies by plan — check your specific plan terms." },
    ],
    educationContent: {
      title: "Passing The Funded Trader Challenge",
      body: `The Funded Trader offers multiple challenge types (Standard, Rapid, Royal) with slightly different rules. The core drawdown rules are consistent across most plans: 5% daily and 10% maximum.\n\n**Key discipline rules:**\n- Track equity (including open positions), not just closed P&L\n- Stop trading at 70% of your daily limit to build in a buffer\n- Avoid large position sizes near news events\n- Know your daily reset time to avoid time zone errors\n\nThe Funded Trader's evaluation is designed to identify disciplined traders. Consistent small gains with strict drawdown management are more likely to result in funding than aggressive profit chasing.`,
    },
  },

  // --- Prop Firm: E8 Funding ---
  {
    slug: "e8-funding-drawdown-calculator",
    parentSlug: "prop-firm-daily-drawdown-calculator",
    name: "E8 Funding Drawdown Calculator",
    shortName: "E8 Funding",
    description: "Calculate and track your daily drawdown limits for E8 Funding evaluation and funded accounts.",
    longDescription: "Purpose-built for E8 Funding traders to track their daily 5% drawdown limit in real time.",
    category: "prop-firm",
    keywords: ["e8 funding drawdown calculator", "e8 funding rules", "e8 prop firm", "e8 funding daily limit", "e8 funding challenge"],
    fields: [
      { id: "accountSize", label: "Account Size", type: "number", unit: "USD", placeholder: "100000", min: 1, step: 1, defaultValue: 100000 },
      { id: "maxDailyDrawdown", label: "Max Daily Drawdown", type: "number", unit: "%", placeholder: "5", min: 0.1, max: 20, step: 0.1, defaultValue: 5 },
      { id: "startingBalance", label: "Today's Starting Balance", type: "number", unit: "USD", placeholder: "100000", min: 1, step: 1, defaultValue: 100000 },
      { id: "currentPnL", label: "Current P&L", type: "number", unit: "USD", placeholder: "0", step: 0.01, defaultValue: 0 },
    ],
    relatedSlugs: ["prop-firm-daily-drawdown-calculator", "ftmo-drawdown-calculator", "fundednext-drawdown-calculator"],
    faqs: [
      { question: "What are E8 Funding's drawdown rules?", answer: "E8 Funding uses a 5% daily drawdown limit and an 8% maximum drawdown on their standard plans. The daily drawdown is equity-based and resets at midnight server time." },
      { question: "What is E8 Funding's profit target?", answer: "E8 Funding Phase 1 requires an 8% profit target. Phase 2 requires a 5% target. Both phases share the same drawdown limits. Minimum trading days are required in each phase." },
    ],
    educationContent: {
      title: "E8 Funding: Risk Management During the Evaluation",
      body: `E8 Funding differentiates itself with an 8% maximum drawdown (versus FTMO's 10%), making it slightly tighter on the overall risk limit but with comparable daily rules.\n\n**E8-specific considerations:**\n- 8% max drawdown means your floor is $92,000 on a $100,000 account\n- After losing $5,000, you only have $3,000 of max drawdown remaining\n- Daily 5% limit still applies at all times\n\nApproach E8 with conservative sizing in the early days to build a profit cushion before the max drawdown limit becomes a constraint.`,
    },
  },

  // --- DCA: Solana ---
  {
    slug: "solana-dca-calculator",
    parentSlug: "dca-calculator",
    name: "Solana DCA Calculator",
    shortName: "Solana DCA",
    description: "Calculate your average SOL entry price and projected returns when dollar cost averaging into Solana.",
    longDescription: "Purpose-built for Solana investors using DCA to build positions over time.",
    category: "dca",
    keywords: ["solana dca calculator", "sol dollar cost averaging", "solana investment calculator", "dca solana", "buy solana every week"],
    fields: [
      { id: "initialInvestment", label: "Initial Investment", type: "number", unit: "USD", placeholder: "1000", min: 0, step: 1, defaultValue: 1000 },
      { id: "recurringAmount", label: "Recurring Amount", type: "number", unit: "USD", placeholder: "200", min: 1, step: 1, defaultValue: 200 },
      { id: "frequency", label: "Frequency", type: "select", options: [{ value: "weekly", label: "Weekly" }, { value: "biweekly", label: "Biweekly" }, { value: "monthly", label: "Monthly" }], defaultValue: "weekly" },
      { id: "periods", label: "Number of Periods", type: "number", unit: "periods", placeholder: "52", min: 1, max: 520, step: 1, defaultValue: 52 },
      { id: "currentPrice", label: "Current SOL Price", type: "number", unit: "USD", placeholder: "165", min: 0.01, step: 0.01, defaultValue: 165 },
      { id: "expectedPrice", label: "Expected Exit Price", type: "number", unit: "USD", placeholder: "330", min: 0.01, step: 0.01, defaultValue: 330 },
    ],
    relatedSlugs: ["dca-calculator", "bitcoin-dca-calculator", "ethereum-dca-calculator"],
    faqs: [
      { question: "Is DCA a good strategy for Solana?", answer: "DCA is particularly well-suited for Solana given its high volatility. SOL has experienced multiple 70–90% drawdowns and subsequent recoveries. Regular purchases across different price levels reduces the risk of buying at a cycle peak." },
      { question: "How often should I DCA into SOL?", answer: "Weekly or biweekly DCA provides a good balance between averaging frequency and keeping transaction fees manageable. Most exchanges now offer automated recurring purchases for Solana." },
    ],
    educationContent: {
      title: "DCA for High-Volatility Assets Like Solana",
      body: `Solana's price history is characterized by extreme volatility — larger percentage swings than Bitcoin or Ethereum are common. This makes DCA especially valuable: the wild price swings that make Solana stressful to buy at once become mechanical advantages when you're purchasing on a fixed schedule.\n\nKey consideration: Solana's ecosystem is younger and higher-risk than Bitcoin. DCA into Solana is a bet on continued ecosystem growth and adoption. Size your recurring purchases accordingly relative to your overall portfolio.`,
    },
  },

  // --- Fees: Bybit ---
  {
    slug: "bybit-trading-fee-calculator",
    parentSlug: "trading-fee-calculator",
    name: "Bybit Trading Fee Calculator",
    shortName: "Bybit Fees",
    description: "Calculate your exact trading fees on Bybit spot and futures, including maker/taker rates and the impact on your net P&L.",
    longDescription: "Bybit-specific fee calculator with current maker/taker rates for spot and perpetual futures.",
    category: "fees",
    keywords: ["bybit trading fee calculator", "bybit fees", "bybit maker taker fee", "bybit futures fees", "bybit fee structure"],
    fields: [
      { id: "positionSize", label: "Position Size", type: "number", unit: "USD", placeholder: "10000", min: 1, step: 1, defaultValue: 10000 },
      { id: "makerFee", label: "Bybit Maker Fee", type: "number", unit: "%", placeholder: "0.02", min: 0, max: 1, step: 0.001, defaultValue: 0.02, helpText: "Bybit futures maker: 0.02%. Spot maker: 0.10%." },
      { id: "takerFee", label: "Bybit Taker Fee", type: "number", unit: "%", placeholder: "0.055", min: 0, max: 1, step: 0.001, defaultValue: 0.055, helpText: "Bybit futures taker: 0.055%. Spot taker: 0.10%." },
      { id: "leverage", label: "Leverage", type: "number", unit: "x", placeholder: "1", min: 1, max: 100, step: 1, defaultValue: 1, helpText: "Fees on futures are on notional value (position size × leverage)." },
    ],
    relatedSlugs: ["trading-fee-calculator", "binance-trading-fee-calculator", "leverage-liquidation-calculator"],
    faqs: [
      { question: "What are Bybit's current trading fees?", answer: "Bybit charges 0.02% maker / 0.055% taker for perpetual futures, and 0.10% maker / 0.10% taker for spot trading. VIP tiers reduce these rates based on 30-day trading volume. Holding BYB tokens provides an additional 10% discount." },
      { question: "Are Bybit futures fees charged on notional or margin value?", answer: "Bybit charges fees on the notional position value (margin × leverage). On a $1,000 margin position at 10x leverage ($10,000 notional), the taker fee is 0.055% × $10,000 = $5.50 per trade." },
    ],
    educationContent: {
      title: "Understanding Bybit's Fee Structure",
      body: `Bybit's futures fees are among the lowest in the industry: 0.02% maker and 0.055% taker. For active traders, using limit orders (maker) instead of market orders (taker) reduces your fee cost by more than half.\n\n**Bybit fee reduction strategies:**\n- Use limit orders at your entry price to pay maker instead of taker fees\n- Achieve VIP status through trading volume for reduced rates\n- Hold BYB tokens for an additional 10% discount on fees\n- Use the Unified Trading Account to consolidate margin and reduce fees on hedged positions\n\nFor high-frequency traders on Bybit, maker fees matter more than taker. Design entries and exits around limit orders wherever execution allows.`,
    },
  },

  // --- Fees: Binance ---
  {
    slug: "binance-trading-fee-calculator",
    parentSlug: "trading-fee-calculator",
    name: "Binance Trading Fee Calculator",
    shortName: "Binance Fees",
    description: "Calculate your exact Binance trading fees for spot and futures trades, including BNB discount and VIP tier rates.",
    longDescription: "Binance-specific fee calculator with current maker/taker rates and BNB discount options.",
    category: "fees",
    keywords: ["binance trading fee calculator", "binance fees", "binance maker taker fee", "binance futures fees", "bnb fee discount"],
    fields: [
      { id: "positionSize", label: "Position Size", type: "number", unit: "USD", placeholder: "10000", min: 1, step: 1, defaultValue: 10000 },
      { id: "makerFee", label: "Binance Maker Fee", type: "number", unit: "%", placeholder: "0.02", min: 0, max: 1, step: 0.001, defaultValue: 0.02, helpText: "Binance futures maker: 0.02%. Spot maker: 0.10%." },
      { id: "takerFee", label: "Binance Taker Fee", type: "number", unit: "%", placeholder: "0.04", min: 0, max: 1, step: 0.001, defaultValue: 0.04, helpText: "Binance futures taker: 0.04%. Spot taker: 0.10%." },
      { id: "leverage", label: "Leverage", type: "number", unit: "x", placeholder: "1", min: 1, max: 125, step: 1, defaultValue: 1 },
    ],
    relatedSlugs: ["trading-fee-calculator", "bybit-trading-fee-calculator", "bnb-position-size-calculator"],
    faqs: [
      { question: "What are Binance's current trading fees?", answer: "Binance charges 0.02% maker / 0.04% taker for futures (USDT-M), and 0.10% maker / 0.10% taker for spot. Holding BNB and paying fees in BNB provides a 10% discount. VIP tiers further reduce rates based on volume and BNB holdings." },
      { question: "How much does using BNB save on Binance fees?", answer: "Paying fees with BNB provides a 10% discount. On $50,000 of monthly futures trading (taker), this saves approximately $2/month — not dramatic, but meaningful over a year of active trading." },
    ],
    educationContent: {
      title: "Optimizing Fees on Binance Futures",
      body: `Binance offers some of the best futures fee rates in the industry: 0.02% maker / 0.04% taker on USDT-M perpetuals. Combined with BNB discounts and VIP tier reductions, high-volume traders can achieve very low effective rates.\n\n**Binance fee optimization checklist:**\n- Enable BNB fee payment for automatic 10% discount\n- Use limit orders for entries to pay maker (0.02%) instead of taker (0.04%)\n- Aim for VIP 1 ($1M monthly volume) to unlock reduced taker rates\n- Monitor funding rates before holding positions overnight\n\nFor most retail traders, the default 0.02%/0.04% futures rates are already competitive. Focus on limit orders and BNB payment as the highest-impact optimizations.`,
    },
  },

  // --- Position Size: ADA ---
  {
    slug: "ada-position-size-calculator",
    parentSlug: "crypto-position-size-calculator",
    name: "Cardano (ADA) Position Size Calculator",
    shortName: "ADA Position Size",
    description: "Calculate your optimal ADA position size based on your account risk, entry price, and stop loss distance.",
    longDescription: "Purpose-built for Cardano traders with ADA-specific default prices.",
    category: "position-sizing",
    keywords: ["ada position size calculator", "cardano position size", "ada risk calculator", "how many ada to buy", "cardano trading size"],
    fields: [
      { id: "accountSize", label: "Account Size", type: "number", unit: "USD", placeholder: "10000", min: 1, step: 1, defaultValue: 10000 },
      { id: "riskPercent", label: "Risk Per Trade", type: "number", unitOptions: [{ value: "percent", label: "%" }, { value: "dollar", label: "$" }], unitFieldId: "riskUnit", placeholder: "1", min: 0.01, step: 0.01, defaultValue: 1 },
      { id: "riskUnit", label: "", type: "hidden", defaultValue: "percent" },
      { id: "entryPrice", label: "ADA Entry Price", type: "number", unit: "USD", placeholder: "0.45", min: 0.0001, step: 0.0001, defaultValue: 0.45 },
      { id: "stopLossPrice", label: "Stop Loss Price", type: "number", unit: "USD", placeholder: "0.40", min: 0.0001, step: 0.0001, defaultValue: 0.40 },
    ],
    relatedSlugs: ["crypto-position-size-calculator", "xrp-position-size-calculator", "risk-reward-calculator"],
    faqs: [
      { question: "How do I calculate ADA position size?", answer: "Divide your risk amount (account size × risk %) by the stop loss distance in dollars. For ADA at $0.45 with a $0.40 stop and $100 risk: 100 ÷ 0.05 = 2,000 ADA." },
      { question: "What is a good stop loss for ADA trades?", answer: "ADA typically requires stops of 8–15% on the daily chart due to its volatility. For day trades on the 1H–4H chart, 3–6% stops are more appropriate. Always place your stop at a structural level, not an arbitrary percentage." },
    ],
    educationContent: {
      title: "Position Sizing for Cardano",
      body: `ADA trades at low dollar values, which means position sizes in number of coins can be very large — but the risk calculation is identical to any other asset. Use the formula: Risk Amount ÷ Stop Distance (in USD) = Number of ADA coins.\n\nADA's correlation with Bitcoin is high during macro moves but it can have independent catalysts around Cardano ecosystem events. Always account for ADA's characteristic volatility when setting stop distances.`,
    },
  },

  // --- Position Size: AVAX ---
  {
    slug: "avax-position-size-calculator",
    parentSlug: "crypto-position-size-calculator",
    name: "Avalanche (AVAX) Position Size Calculator",
    shortName: "AVAX Position Size",
    description: "Calculate your correct AVAX position size based on account balance, risk percentage, and stop loss placement.",
    longDescription: "Purpose-built for Avalanche traders with AVAX-specific default values.",
    category: "position-sizing",
    keywords: ["avax position size calculator", "avalanche position size", "avax risk calculator", "how many avax to buy", "avax trading calculator"],
    fields: [
      { id: "accountSize", label: "Account Size", type: "number", unit: "USD", placeholder: "10000", min: 1, step: 1, defaultValue: 10000 },
      { id: "riskPercent", label: "Risk Per Trade", type: "number", unitOptions: [{ value: "percent", label: "%" }, { value: "dollar", label: "$" }], unitFieldId: "riskUnit", placeholder: "1", min: 0.01, step: 0.01, defaultValue: 1 },
      { id: "riskUnit", label: "", type: "hidden", defaultValue: "percent" },
      { id: "entryPrice", label: "AVAX Entry Price", type: "number", unit: "USD", placeholder: "35", min: 0.0001, step: 0.01, defaultValue: 35 },
      { id: "stopLossPrice", label: "Stop Loss Price", type: "number", unit: "USD", placeholder: "31", min: 0.0001, step: 0.01, defaultValue: 31 },
    ],
    relatedSlugs: ["crypto-position-size-calculator", "solana-position-size-calculator", "risk-reward-calculator"],
    faqs: [
      { question: "How volatile is AVAX compared to Bitcoin?", answer: "AVAX is significantly more volatile than Bitcoin, with intraday moves of 5–10% common. This requires wider stops and smaller position values relative to your account size to maintain proper risk management." },
      { question: "What leverage should I use for AVAX futures?", answer: "Given AVAX's volatility, most experienced traders limit AVAX futures leverage to 3–5x maximum. Higher leverage dramatically increases the chance of liquidation during routine volatility." },
    ],
    educationContent: {
      title: "Trading AVAX: Volatility and Position Sizing",
      body: `Avalanche is a high-beta crypto asset — it tends to move more aggressively than Bitcoin in both directions. This means position sizes must be calculated carefully.\n\nThe formula handles this automatically: if your stop is 10% from entry on AVAX versus 5% on ETH, the formula will halve your AVAX position size to maintain the same dollar risk. Let the math do the adjustment.`,
    },
  },

  // --- Leverage: 20x ---
  {
    slug: "20x-leverage-liquidation-calculator",
    parentSlug: "leverage-liquidation-calculator",
    name: "20x Leverage Liquidation Calculator",
    shortName: "20x Liquidation",
    description: "Calculate your exact liquidation price when using 20x leverage on crypto futures positions.",
    longDescription: "Precise liquidation price calculation for 20x leveraged long and short positions.",
    category: "leverage",
    keywords: ["20x leverage liquidation calculator", "20x leverage crypto", "20x futures liquidation price", "20x leverage bitcoin", "medium leverage liquidation"],
    fields: [
      { id: "entryPrice", label: "Entry Price", type: "number", unit: "USD", placeholder: "50000", min: 0.0001, step: 0.01, defaultValue: 50000 },
      { id: "leverage", label: "Leverage", type: "number", unit: "x", placeholder: "20", min: 1, max: 200, step: 1, defaultValue: 20 },
      { id: "direction", label: "Position Type", type: "select", options: [{ value: "long", label: "Long (Buy)" }, { value: "short", label: "Short (Sell)" }], defaultValue: "long" },
      { id: "maintenanceMargin", label: "Maintenance Margin", type: "number", unit: "%", placeholder: "0.5", min: 0, max: 5, step: 0.1, defaultValue: 0.5 },
    ],
    relatedSlugs: ["leverage-liquidation-calculator", "10x-leverage-liquidation-calculator", "25x-leverage-liquidation-calculator"],
    faqs: [
      { question: "How far is my liquidation price at 20x leverage?", answer: "At 20x leverage, your liquidation price is approximately 5% from your entry. On Bitcoin at $50,000, a $2,500 move against you results in full margin liquidation." },
      { question: "Is 20x leverage suitable for crypto trading?", answer: "20x leverage is high-risk for crypto. A 5% move against your position liquidates your margin — and crypto routinely moves 5% in a few hours. Use 20x only with a hard stop loss placed at 2–3% from entry and be aware of market hours with low liquidity." },
    ],
    educationContent: {
      title: "20x Leverage: The 5% Liquidation Zone",
      body: `At 20x leverage, your entire margin is consumed by a 5% adverse move. In crypto markets, 5% intraday moves are common — even for Bitcoin.\n\nIf you use 20x leverage, your stop loss must be placed at 2–3% from entry to ensure it triggers well before liquidation. Any wider and you risk being liquidated instead of stopped out.\n\nThe practical question: if your stop is 2–3% from entry, is the target large enough to justify the trade at 1:2+ R:R? If the answer is no, the leverage is too high for the setup.`,
    },
  },

  // --- DCA: BNB ---
  {
    slug: "bnb-dca-calculator",
    parentSlug: "dca-calculator",
    name: "BNB DCA Calculator",
    shortName: "BNB DCA",
    description: "Calculate your average BNB entry price and projected returns when dollar cost averaging into Binance Coin.",
    longDescription: "Purpose-built for BNB investors using DCA to build positions in Binance Coin over time.",
    category: "dca",
    keywords: ["bnb dca calculator", "binance coin dca", "bnb dollar cost averaging", "buy bnb every week", "binance coin investment strategy"],
    fields: [
      { id: "initialInvestment", label: "Initial Investment", type: "number", unit: "USD", placeholder: "1000", min: 0, step: 1, defaultValue: 1000 },
      { id: "recurringAmount", label: "Recurring Amount", type: "number", unit: "USD", placeholder: "200", min: 1, step: 1, defaultValue: 200 },
      { id: "frequency", label: "Frequency", type: "select", options: [{ value: "weekly", label: "Weekly" }, { value: "biweekly", label: "Biweekly" }, { value: "monthly", label: "Monthly" }], defaultValue: "monthly" },
      { id: "periods", label: "Number of Periods", type: "number", unit: "periods", placeholder: "12", min: 1, max: 520, step: 1, defaultValue: 12 },
      { id: "currentPrice", label: "Current BNB Price", type: "number", unit: "USD", placeholder: "600", min: 0.01, step: 0.01, defaultValue: 600 },
      { id: "expectedPrice", label: "Expected Exit Price", type: "number", unit: "USD", placeholder: "1200", min: 0.01, step: 0.01, defaultValue: 1200 },
    ],
    relatedSlugs: ["dca-calculator", "bitcoin-dca-calculator", "bnb-position-size-calculator"],
    faqs: [
      { question: "Is BNB a good DCA asset?", answer: "BNB's value is closely tied to Binance exchange activity, trading volume, and the broader Binance ecosystem. It has a different risk profile than BTC or ETH — it carries exchange-specific risk. Factor this into your allocation decision." },
      { question: "Does BNB have a burn mechanism?", answer: "Yes — Binance periodically burns BNB tokens using a portion of exchange profits, reducing total supply over time. This burn mechanism is a deflationary pressure on supply, though it does not guarantee price appreciation." },
    ],
    educationContent: {
      title: "DCA for Exchange Tokens Like BNB",
      body: `BNB is primarily an exchange utility token — its value depends heavily on Binance's market position and trading volume. This creates a different risk profile than protocol tokens like ETH or commodity tokens like BTC.\n\nDCA into BNB is a bet on Binance maintaining its dominant market position in crypto. The fee discount utility (10% off Binance fees when paying in BNB) creates organic demand, but the token's performance is closely correlated with Binance's overall business health.`,
    },
  },

  // --- DCA: XRP ---
  {
    slug: "xrp-dca-calculator",
    parentSlug: "dca-calculator",
    name: "XRP DCA Calculator",
    shortName: "XRP DCA",
    description: "Calculate your XRP average purchase price and total returns when using a dollar cost averaging strategy.",
    longDescription: "Purpose-built for XRP investors building positions over time with regular purchases.",
    category: "dca",
    keywords: ["xrp dca calculator", "ripple dca", "xrp dollar cost averaging", "buy xrp every week", "xrp investment calculator"],
    fields: [
      { id: "initialInvestment", label: "Initial Investment", type: "number", unit: "USD", placeholder: "500", min: 0, step: 1, defaultValue: 500 },
      { id: "recurringAmount", label: "Recurring Amount", type: "number", unit: "USD", placeholder: "100", min: 1, step: 1, defaultValue: 100 },
      { id: "frequency", label: "Frequency", type: "select", options: [{ value: "weekly", label: "Weekly" }, { value: "biweekly", label: "Biweekly" }, { value: "monthly", label: "Monthly" }], defaultValue: "weekly" },
      { id: "periods", label: "Number of Periods", type: "number", unit: "periods", placeholder: "52", min: 1, max: 520, step: 1, defaultValue: 52 },
      { id: "currentPrice", label: "Current XRP Price", type: "number", unit: "USD", placeholder: "0.55", min: 0.0001, step: 0.0001, defaultValue: 0.55 },
      { id: "expectedPrice", label: "Expected Exit Price", type: "number", unit: "USD", placeholder: "2.00", min: 0.0001, step: 0.0001, defaultValue: 2.00 },
    ],
    relatedSlugs: ["dca-calculator", "bitcoin-dca-calculator", "xrp-position-size-calculator"],
    faqs: [
      { question: "Is DCA a good strategy for XRP?", answer: "XRP has high price volatility and unique regulatory risk factors. DCA reduces timing risk but does not eliminate the fundamental risks specific to XRP. Allocate accordingly as part of a diversified strategy." },
      { question: "How much XRP should I buy per week with DCA?", answer: "Decide on a fixed USD amount based on your overall budget and portfolio allocation — not based on how many coins that buys. The number of coins you accumulate will naturally vary with price, which is the mechanical advantage of DCA." },
    ],
    educationContent: {
      title: "XRP: DCA Strategy Considerations",
      body: `XRP occupies a unique position in crypto: it is both a speculative asset and a payment network token with real institutional use cases through Ripple's payment corridors.\n\nDCA into XRP is appropriate if you believe in the long-term adoption of the Ripple payment network and XRP's role within it. The regulatory history (SEC case) has created additional price volatility beyond normal crypto cycles — factor this into your position sizing and DCA allocation.`,
    },
  },

  // --- Fees: OKX ---
  {
    slug: "okx-trading-fee-calculator",
    parentSlug: "trading-fee-calculator",
    name: "OKX Trading Fee Calculator",
    shortName: "OKX Fees",
    description: "Calculate your exact OKX trading fees for spot and futures, including maker/taker rates and their impact on trade profitability.",
    longDescription: "OKX-specific fee calculator with current maker/taker rates for spot and perpetual futures.",
    category: "fees",
    keywords: ["okx trading fee calculator", "okx fees", "okx maker taker fee", "okx futures fees", "okx fee structure"],
    fields: [
      { id: "positionSize", label: "Position Size", type: "number", unit: "USD", placeholder: "10000", min: 1, step: 1, defaultValue: 10000 },
      { id: "makerFee", label: "OKX Maker Fee", type: "number", unit: "%", placeholder: "0.02", min: 0, max: 1, step: 0.001, defaultValue: 0.02, helpText: "OKX futures maker: 0.02%. Spot maker: 0.08%." },
      { id: "takerFee", label: "OKX Taker Fee", type: "number", unit: "%", placeholder: "0.05", min: 0, max: 1, step: 0.001, defaultValue: 0.05, helpText: "OKX futures taker: 0.05%. Spot taker: 0.10%." },
      { id: "leverage", label: "Leverage", type: "number", unit: "x", placeholder: "1", min: 1, max: 125, step: 1, defaultValue: 1 },
    ],
    relatedSlugs: ["trading-fee-calculator", "bybit-trading-fee-calculator", "binance-trading-fee-calculator"],
    faqs: [
      { question: "What are OKX's current trading fees?", answer: "OKX charges 0.02% maker / 0.05% taker for perpetual futures, and 0.08% maker / 0.10% taker for spot. Holding OKB tokens provides fee discounts, and VIP tiers reduce rates further based on 30-day volume." },
      { question: "How does OKX compare to Binance on fees?", answer: "OKX futures fees (0.02%/0.05%) are slightly higher than Binance (0.02%/0.04%) on the taker side. For most active traders, this difference is small. OKX has historically offered better liquidity on certain altcoin pairs." },
    ],
    educationContent: {
      title: "OKX Fee Structure and Optimization",
      body: `OKX is one of the top three crypto derivatives exchanges globally. Its fee structure is competitive with Binance and Bybit, particularly at VIP tiers.\n\n**OKX fee optimization:**\n- Hold OKB tokens for a 10% fee discount\n- Use limit orders for maker rates wherever possible\n- The Unified Account feature on OKX allows cross-margin across spot and derivatives, which can improve capital efficiency\n\nFor traders who split their activity between multiple exchanges, OKX's fee structure is nearly identical to Bybit. Choose based on liquidity for your specific trading pairs.`,
    },
  },

  // --- Position Size: DOT ---
  {
    slug: "dot-position-size-calculator",
    parentSlug: "crypto-position-size-calculator",
    name: "Polkadot (DOT) Position Size Calculator",
    shortName: "DOT Position Size",
    description: "Calculate the correct DOT position size based on your account risk, entry price, and stop loss distance.",
    longDescription: "Purpose-built for Polkadot traders with DOT-specific default prices.",
    category: "position-sizing",
    keywords: ["dot position size calculator", "polkadot position size", "dot risk calculator", "how many dot to buy", "polkadot trading calculator"],
    fields: [
      { id: "accountSize", label: "Account Size", type: "number", unit: "USD", placeholder: "10000", min: 1, step: 1, defaultValue: 10000 },
      { id: "riskPercent", label: "Risk Per Trade", type: "number", unitOptions: [{ value: "percent", label: "%" }, { value: "dollar", label: "$" }], unitFieldId: "riskUnit", placeholder: "1", min: 0.01, step: 0.01, defaultValue: 1 },
      { id: "riskUnit", label: "", type: "hidden", defaultValue: "percent" },
      { id: "entryPrice", label: "DOT Entry Price", type: "number", unit: "USD", placeholder: "7", min: 0.0001, step: 0.01, defaultValue: 7 },
      { id: "stopLossPrice", label: "Stop Loss Price", type: "number", unit: "USD", placeholder: "6.20", min: 0.0001, step: 0.01, defaultValue: 6.20 },
    ],
    relatedSlugs: ["crypto-position-size-calculator", "ada-position-size-calculator", "risk-reward-calculator"],
    faqs: [
      { question: "How do I calculate DOT position size?", answer: "Divide your risk amount by the stop distance in dollars. For DOT at $7 with a $6.20 stop ($0.80 distance) and $100 risk: 100 ÷ 0.80 = 125 DOT." },
      { question: "What affects DOT price most?", answer: "DOT price is driven by Polkadot's parachain auction activity, overall developer ecosystem growth, and macro crypto sentiment. DOT has high correlation with Bitcoin during broad market moves." },
    ],
    educationContent: {
      title: "Trading Polkadot: Position Sizing Considerations",
      body: `Polkadot trades at lower dollar values, meaning position sizes in number of tokens can be large. The position sizing formula is identical to any other asset — Risk Amount ÷ Stop Distance = Number of DOT.\n\nDOT's parachain auction cycles can create independent price catalysts. Factor these into your stop placement and position timing, especially around major parachain events.`,
    },
  },

  // --- Position Size: LINK ---
  {
    slug: "link-position-size-calculator",
    parentSlug: "crypto-position-size-calculator",
    name: "Chainlink (LINK) Position Size Calculator",
    shortName: "LINK Position Size",
    description: "Calculate your optimal LINK position size based on account balance, risk percentage, and stop loss placement.",
    longDescription: "Purpose-built for Chainlink traders with LINK-specific default prices.",
    category: "position-sizing",
    keywords: ["link position size calculator", "chainlink position size", "link risk calculator", "how many chainlink to buy", "chainlink trading calculator"],
    fields: [
      { id: "accountSize", label: "Account Size", type: "number", unit: "USD", placeholder: "10000", min: 1, step: 1, defaultValue: 10000 },
      { id: "riskPercent", label: "Risk Per Trade", type: "number", unitOptions: [{ value: "percent", label: "%" }, { value: "dollar", label: "$" }], unitFieldId: "riskUnit", placeholder: "1", min: 0.01, step: 0.01, defaultValue: 1 },
      { id: "riskUnit", label: "", type: "hidden", defaultValue: "percent" },
      { id: "entryPrice", label: "LINK Entry Price", type: "number", unit: "USD", placeholder: "14", min: 0.0001, step: 0.01, defaultValue: 14 },
      { id: "stopLossPrice", label: "Stop Loss Price", type: "number", unit: "USD", placeholder: "12.50", min: 0.0001, step: 0.01, defaultValue: 12.50 },
    ],
    relatedSlugs: ["crypto-position-size-calculator", "avax-position-size-calculator", "risk-reward-calculator"],
    faqs: [
      { question: "How do I size a LINK trade correctly?", answer: "Use your risk amount divided by the stop distance: $100 risk ÷ ($14.00 − $12.50) = $100 ÷ $1.50 = 66.7 LINK. This ensures your loss is exactly $100 if stopped out." },
      { question: "Is LINK highly correlated with Bitcoin?", answer: "LINK has moderate correlation with Bitcoin during macro moves, but can diverge significantly during DeFi-specific rallies or oracle adoption news. Factor in LINK-specific catalysts when setting trade parameters." },
    ],
    educationContent: {
      title: "Trading LINK: Oracle Token Volatility",
      body: `Chainlink is the dominant oracle network in DeFi. Its price is influenced by DeFi ecosystem growth, new protocol integrations, and macro crypto sentiment.\n\nLINK has historically shown strong performance during DeFi expansion phases and significant correlation with ETH. When sizing LINK trades, consider its DeFi beta — it often amplifies ETH moves in both directions.`,
    },
  },

  // --- Leverage: 3x ---
  {
    slug: "3x-leverage-liquidation-calculator",
    parentSlug: "leverage-liquidation-calculator",
    name: "3x Leverage Liquidation Calculator",
    shortName: "3x Liquidation",
    description: "Calculate your liquidation price when trading with 3x leverage — the safest leveraged option for beginners.",
    longDescription: "Liquidation price calculator for 3x leveraged long and short positions.",
    category: "leverage",
    keywords: ["3x leverage liquidation calculator", "3x leverage crypto", "3x futures liquidation price", "safe leverage crypto", "beginner leverage calculator"],
    fields: [
      { id: "entryPrice", label: "Entry Price", type: "number", unit: "USD", placeholder: "50000", min: 0.0001, step: 0.01, defaultValue: 50000 },
      { id: "leverage", label: "Leverage", type: "number", unit: "x", placeholder: "3", min: 1, max: 10, step: 1, defaultValue: 3 },
      { id: "direction", label: "Position Type", type: "select", options: [{ value: "long", label: "Long (Buy)" }, { value: "short", label: "Short (Sell)" }], defaultValue: "long" },
      { id: "maintenanceMargin", label: "Maintenance Margin", type: "number", unit: "%", placeholder: "0.5", min: 0, max: 5, step: 0.1, defaultValue: 0.5 },
    ],
    relatedSlugs: ["leverage-liquidation-calculator", "5x-leverage-liquidation-calculator", "crypto-position-size-calculator"],
    faqs: [
      { question: "How far is liquidation at 3x leverage?", answer: "At 3x leverage, your liquidation price is approximately 33% from your entry. This wide buffer makes 3x leverage far safer than higher levels for traders learning futures." },
      { question: "Is 3x leverage good for beginners?", answer: "3x leverage is one of the safest leverage levels for beginners. The ~33% liquidation distance means normal crypto volatility is very unlikely to liquidate your position, and the lower fees of futures vs spot still apply." },
    ],
    educationContent: {
      title: "Why 3x Leverage Is Ideal for Beginning Futures Traders",
      body: `3x leverage provides the main benefits of futures trading (lower fees than spot, ability to short) while keeping the liquidation distance large enough to absorb normal market volatility.\n\nAt 3x leverage on Bitcoin, your position would only be liquidated by a 33% adverse move — comparable to the worst single-day crashes in Bitcoin history, not routine trading ranges.\n\nThis makes 3x a practical starting point: low enough risk to learn the mechanics of futures, high enough to make the capital efficiency meaningful.`,
    },
  },

  // --- Prop Firm: Apex Trader Funding ---
  {
    slug: "apex-trader-funding-drawdown-calculator",
    parentSlug: "prop-firm-daily-drawdown-calculator",
    name: "Apex Trader Funding Drawdown Calculator",
    shortName: "Apex Trader Funding",
    description: "Track your daily drawdown limits for Apex Trader Funding evaluation and funded accounts.",
    longDescription: "Purpose-built for Apex Trader Funding traders to manage their daily loss limits in real time.",
    category: "prop-firm",
    keywords: ["apex trader funding drawdown calculator", "apex trader funding rules", "apex funded account", "apex trader daily limit", "apex prop firm"],
    fields: [
      { id: "accountSize", label: "Account Size", type: "number", unit: "USD", placeholder: "100000", min: 1, step: 1, defaultValue: 100000 },
      { id: "maxDailyDrawdown", label: "Max Daily Drawdown", type: "number", unit: "%", placeholder: "5", min: 0.1, max: 20, step: 0.1, defaultValue: 5 },
      { id: "startingBalance", label: "Today's Starting Balance", type: "number", unit: "USD", placeholder: "100000", min: 1, step: 1, defaultValue: 100000 },
      { id: "currentPnL", label: "Current P&L", type: "number", unit: "USD", placeholder: "0", step: 0.01, defaultValue: 0 },
    ],
    relatedSlugs: ["prop-firm-daily-drawdown-calculator", "ftmo-drawdown-calculator", "brightfunded-drawdown-calculator"],
    faqs: [
      { question: "What are Apex Trader Funding's drawdown rules?", answer: "Apex Trader Funding uses a trailing drawdown model on most plans. The trailing drawdown rises with your profits until it locks at your starting balance. Daily loss limits vary by plan — check your specific Apex account dashboard for exact limits." },
      { question: "How does Apex Trader Funding differ from TopStep?", answer: "Both use trailing drawdown models. Apex is primarily focused on CME futures traders and offers a similar evaluation structure to TopStep. Apex has historically offered more aggressive promotional pricing and multiple active accounts simultaneously." },
    ],
    educationContent: {
      title: "Apex Trader Funding: Managing the Trailing Drawdown",
      body: `Like TopStep, Apex Trader Funding uses a trailing drawdown that rises with your profits until it locks at your initial starting balance. This makes the early days of the evaluation the most dangerous — your floor is close to your current balance before you've built a profit buffer.\n\n**Apex-specific tip:** Apex allows multiple accounts simultaneously. This is an advantage, but also a risk — trading multiple accounts at the same time means correlated drawdowns if market conditions turn against you across all positions simultaneously. Manage each account's daily limit independently.`,
    },
  },

  // --- Prop Firm: Tradeify ---
  {
    slug: "tradeify-drawdown-calculator",
    parentSlug: "prop-firm-daily-drawdown-calculator",
    name: "Tradeify Drawdown Calculator",
    shortName: "Tradeify",
    description: "Track your daily drawdown limits for Tradeify (formerly Leeloo Trading) evaluation and funded accounts.",
    longDescription: "Purpose-built for Tradeify traders to monitor their daily loss limits and prevent account termination.",
    category: "prop-firm",
    keywords: ["tradeify drawdown calculator", "tradeify rules", "leeloo trading drawdown", "tradeify funded account", "tradeify daily limit"],
    fields: [
      { id: "accountSize", label: "Account Size", type: "number", unit: "USD", placeholder: "100000", min: 1, step: 1, defaultValue: 100000 },
      { id: "maxDailyDrawdown", label: "Max Daily Drawdown", type: "number", unit: "%", placeholder: "4", min: 0.1, max: 20, step: 0.1, defaultValue: 4 },
      { id: "startingBalance", label: "Today's Starting Balance", type: "number", unit: "USD", placeholder: "100000", min: 1, step: 1, defaultValue: 100000 },
      { id: "currentPnL", label: "Current P&L", type: "number", unit: "USD", placeholder: "0", step: 0.01, defaultValue: 0 },
    ],
    relatedSlugs: ["prop-firm-daily-drawdown-calculator", "brightfunded-drawdown-calculator", "apex-trader-funding-drawdown-calculator"],
    faqs: [
      { question: "What are Tradeify's drawdown rules?", answer: "Tradeify's rules vary by plan. Most plans use a trailing drawdown similar to TopStep and Apex. Check your specific Tradeify plan documentation for exact daily loss limits and maximum drawdown parameters." },
      { question: "Is Tradeify the same as Leeloo Trading?", answer: "Tradeify is the rebranded name for Leeloo Trading. The platform and core evaluation structure are the same, with the same focus on CME futures trading." },
    ],
    educationContent: {
      title: "Trading on Tradeify (Leeloo) Funded Accounts",
      body: `Tradeify focuses on CME futures trading, similar to TopStep and Apex. The core discipline requirements are identical: manage your daily loss limit, never breach the trailing drawdown, and build a profit buffer early in the evaluation.\n\nThe trailing drawdown is the primary risk — protect your account in the first week by trading smaller than you think you need to. Once the drawdown trails up to your starting balance, the evaluation becomes significantly safer.`,
    },
  },

  // --- DCA: DOT ---
  {
    slug: "dot-dca-calculator",
    parentSlug: "dca-calculator",
    name: "Polkadot DCA Calculator",
    shortName: "Polkadot DCA",
    description: "Calculate your average DOT entry price and projected returns when dollar cost averaging into Polkadot.",
    longDescription: "Purpose-built for Polkadot investors building positions over time with regular DCA purchases.",
    category: "dca",
    keywords: ["polkadot dca calculator", "dot dollar cost averaging", "dca polkadot", "buy dot every week", "dot investment calculator"],
    fields: [
      { id: "initialInvestment", label: "Initial Investment", type: "number", unit: "USD", placeholder: "500", min: 0, step: 1, defaultValue: 500 },
      { id: "recurringAmount", label: "Recurring Amount", type: "number", unit: "USD", placeholder: "100", min: 1, step: 1, defaultValue: 100 },
      { id: "frequency", label: "Frequency", type: "select", options: [{ value: "weekly", label: "Weekly" }, { value: "biweekly", label: "Biweekly" }, { value: "monthly", label: "Monthly" }], defaultValue: "weekly" },
      { id: "periods", label: "Number of Periods", type: "number", unit: "periods", placeholder: "52", min: 1, max: 520, step: 1, defaultValue: 52 },
      { id: "currentPrice", label: "Current DOT Price", type: "number", unit: "USD", placeholder: "7", min: 0.0001, step: 0.01, defaultValue: 7 },
      { id: "expectedPrice", label: "Expected Exit Price", type: "number", unit: "USD", placeholder: "20", min: 0.0001, step: 0.01, defaultValue: 20 },
    ],
    relatedSlugs: ["dca-calculator", "bitcoin-dca-calculator", "dot-position-size-calculator"],
    faqs: [
      { question: "Is DCA a good strategy for DOT?", answer: "Polkadot's price is tied to ecosystem development and parachain activity. DCA reduces timing risk, but DOT carries more specific risk than BTC or ETH due to its reliance on the Polkadot ecosystem's continued development." },
      { question: "What interval is best for DOT DCA?", answer: "Weekly is the optimal interval for DOT given its volatility. Monthly DCA works fine too — the difference in average cost is minimal over a full year." },
    ],
    educationContent: {
      title: "DCA Into Polkadot: Ecosystem Bet Considerations",
      body: `Polkadot DCA is a bet on the long-term success of the parachain ecosystem. Unlike Bitcoin (pure store of value) or Ethereum (DeFi layer), DOT's value proposition is tied to parachain adoption and cross-chain interoperability.\n\nFor DCA purposes, the mechanics are identical to any other asset. The due diligence is different — evaluate Polkadot ecosystem health, parachain activity, and developer growth when deciding allocation size.`,
    },
  },

  // --- Fees: Kraken ---
  {
    slug: "kraken-trading-fee-calculator",
    parentSlug: "trading-fee-calculator",
    name: "Kraken Trading Fee Calculator",
    shortName: "Kraken Fees",
    description: "Calculate your exact Kraken trading fees for spot trading, including maker/taker rates and fee tier levels.",
    longDescription: "Kraken-specific fee calculator with current maker/taker rates for spot trading.",
    category: "fees",
    keywords: ["kraken trading fee calculator", "kraken fees", "kraken maker taker fee", "kraken spot fees", "kraken fee structure"],
    fields: [
      { id: "positionSize", label: "Position Size", type: "number", unit: "USD", placeholder: "10000", min: 1, step: 1, defaultValue: 10000 },
      { id: "makerFee", label: "Kraken Maker Fee", type: "number", unit: "%", placeholder: "0.16", min: 0, max: 1, step: 0.001, defaultValue: 0.16, helpText: "Kraken starter maker fee: 0.16%. Reduces to 0% at $50M+ monthly volume." },
      { id: "takerFee", label: "Kraken Taker Fee", type: "number", unit: "%", placeholder: "0.26", min: 0, max: 1, step: 0.001, defaultValue: 0.26, helpText: "Kraken starter taker fee: 0.26%. Reduces to 0.10% at $50M+ monthly volume." },
      { id: "leverage", label: "Leverage", type: "number", unit: "x", placeholder: "1", min: 1, max: 5, step: 1, defaultValue: 1 },
    ],
    relatedSlugs: ["trading-fee-calculator", "binance-trading-fee-calculator", "bybit-trading-fee-calculator"],
    faqs: [
      { question: "Are Kraken's fees higher than Binance?", answer: "Yes. Kraken's starter fees (0.16% maker / 0.26% taker) are significantly higher than Binance (0.10%/0.10% spot, 0.02%/0.04% futures). Kraken's primary advantages are regulatory compliance, reputation, and availability in more jurisdictions." },
      { question: "Does Kraken have futures trading?", answer: "Yes — Kraken Futures (formerly Crypto Facilities) offers perpetual and fixed-term futures contracts with lower fees than spot. Futures fees start at 0.02% maker / 0.05% taker, comparable to Binance and Bybit." },
    ],
    educationContent: {
      title: "Kraken: Higher Fees, But Worth Considering For Some Traders",
      body: `Kraken's spot fees are the highest of the major exchanges at the starter tier. For active traders doing significant volume, these fees create a large annual cost disadvantage versus Binance or Bybit.\n\nHowever, Kraken has advantages that matter to certain traders:\n- Strong regulatory standing in the US and Europe\n- No history of the security or insolvency issues that have affected other exchanges\n- Deep liquidity on BTC and ETH pairs\n- OTC desk for large orders\n\nFor long-term investors doing occasional large purchases, Kraken's fees are acceptable. For active traders executing dozens of trades per week, Binance or Bybit are significantly cheaper.`,
    },
  },

  // --- Fees: MEXC ---
  {
    slug: "mexc-trading-fee-calculator",
    parentSlug: "trading-fee-calculator",
    name: "MEXC Trading Fee Calculator",
    shortName: "MEXC Fees",
    description: "Calculate your exact MEXC trading fees for spot and futures. MEXC charges zero maker fee on futures — one of the lowest fee structures in crypto.",
    longDescription: "MEXC-specific fee calculator with current maker/taker rates. MEXC futures maker fee is 0.000% — effectively free maker orders.",
    category: "fees",
    keywords: ["mexc trading fee calculator", "mexc fees", "mexc maker taker fee", "mexc futures fees", "mexc zero maker fee"],
    fields: [
      { id: "positionSize", label: "Position Size", type: "number", unit: "USD", placeholder: "10000", min: 1, step: 1, defaultValue: 10000 },
      { id: "makerFee", label: "MEXC Maker Fee", type: "number", unit: "%", placeholder: "0.000", min: 0, max: 1, step: 0.001, defaultValue: 0, helpText: "MEXC futures maker: 0.000% (zero). Spot maker: 0.000%." },
      { id: "takerFee", label: "MEXC Taker Fee", type: "number", unit: "%", placeholder: "0.010", min: 0, max: 1, step: 0.001, defaultValue: 0.010, helpText: "MEXC futures taker: 0.010%. Spot taker: 0.050%." },
      { id: "leverage", label: "Leverage", type: "number", unit: "x", placeholder: "1", min: 1, max: 200, step: 1, defaultValue: 1, helpText: "MEXC offers up to 200× leverage on perpetual futures." },
    ],
    relatedSlugs: ["trading-fee-calculator", "bybit-trading-fee-calculator", "kucoin-trading-fee-calculator"],
    faqs: [
      { question: "Does MEXC really have zero maker fees?", answer: "Yes. MEXC charges 0.000% maker fee and 0.010% taker fee on perpetual futures — making it one of the cheapest exchanges for limit-order traders. Spot maker fee is also 0.000%, with spot taker at 0.050%." },
      { question: "How does MEXC compare to Binance on futures fees?", answer: "MEXC is significantly cheaper on futures: 0.000%/0.010% vs Binance's 0.020%/0.040%. A trader doing $1M monthly futures volume saves approximately $300/month in taker fees on MEXC vs Binance." },
    ],
    educationContent: {
      title: "MEXC: The Lowest Futures Fees in Crypto",
      body: `MEXC's fee structure is among the most competitive in the industry. With zero maker fees on perpetual futures and only 0.010% taker fee, it undercuts Binance (0.02%/0.04%) and Bybit (0.02%/0.055%) significantly.\n\n**Who benefits most from MEXC's fees:**\n- High-frequency traders who execute many trades daily\n- Limit-order traders who can consistently get maker fills\n- Traders doing large notional volume where fee savings compound quickly\n\n**MEXC fee optimization:**\n- Use limit orders to pay 0% maker fee on futures — essentially free entry and exit\n- MEXC supports up to 200× leverage, though high leverage dramatically increases liquidation risk\n- Available in most regions, but verify your jurisdiction before opening an account\n\nFor pure fee minimization, MEXC's futures fees are difficult to beat. The trade-off is lower liquidity depth on some altcoin pairs compared to Binance or Bybit.`,
    },
  },

  // --- Fees: KuCoin ---
  {
    slug: "kucoin-trading-fee-calculator",
    parentSlug: "trading-fee-calculator",
    name: "KuCoin Trading Fee Calculator",
    shortName: "KuCoin Fees",
    description: "Calculate your exact KuCoin trading fees for spot and futures, including maker/taker rates and KCS token discount.",
    longDescription: "KuCoin-specific fee calculator with current maker/taker rates for spot and perpetual futures.",
    category: "fees",
    keywords: ["kucoin trading fee calculator", "kucoin fees", "kucoin maker taker fee", "kucoin futures fees", "kucoin kcs discount"],
    fields: [
      { id: "positionSize", label: "Position Size", type: "number", unit: "USD", placeholder: "10000", min: 1, step: 1, defaultValue: 10000 },
      { id: "makerFee", label: "KuCoin Maker Fee", type: "number", unit: "%", placeholder: "0.02", min: 0, max: 1, step: 0.001, defaultValue: 0.02, helpText: "KuCoin futures maker: 0.020%. Spot maker: 0.080%." },
      { id: "takerFee", label: "KuCoin Taker Fee", type: "number", unit: "%", placeholder: "0.06", min: 0, max: 1, step: 0.001, defaultValue: 0.06, helpText: "KuCoin futures taker: 0.060%. Spot taker: 0.100%." },
      { id: "leverage", label: "Leverage", type: "number", unit: "x", placeholder: "1", min: 1, max: 100, step: 1, defaultValue: 1 },
    ],
    relatedSlugs: ["trading-fee-calculator", "bybit-trading-fee-calculator", "mexc-trading-fee-calculator"],
    faqs: [
      { question: "What are KuCoin's current trading fees?", answer: "KuCoin charges 0.020% maker / 0.060% taker for perpetual futures, and 0.080% maker / 0.100% taker for spot. Holding KCS (KuCoin Shares) and paying fees in KCS provides a 20% discount. VIP tiers reduce rates further based on 30-day trading volume." },
      { question: "How much does holding KCS reduce KuCoin fees?", answer: "Holding at least 6 KCS and paying fees in KCS provides a 20% discount on trading fees. At base rates, this brings futures taker fees from 0.060% to 0.048% — a meaningful saving for active traders." },
    ],
    educationContent: {
      title: "KuCoin Fee Structure and KCS Discount",
      body: `KuCoin's futures fees (0.02%/0.06%) are competitive but slightly higher on the taker side than Binance (0.04%) and MEXC (0.01%). The key differentiator is the KCS discount: holding 6+ KCS and paying fees in KCS gives a 20% reduction.\n\n**KuCoin fee optimization:**\n- Hold at least 6 KCS and enable KCS fee payment for 20% discount\n- Use limit orders for futures entries to pay 0.020% maker instead of 0.060% taker\n- KuCoin's spot fees (0.08%/0.10%) are slightly better than most exchanges at the base level\n- VIP tier 1 starts at $1M monthly volume with meaningful taker fee reductions\n\nKuCoin lists over 700 trading pairs — for less common tokens, KuCoin may be the only major exchange available, making fee optimization here especially important.`,
    },
  },

  // --- Fees: BingX ---
  {
    slug: "bingx-trading-fee-calculator",
    parentSlug: "trading-fee-calculator",
    name: "BingX Trading Fee Calculator",
    shortName: "BingX Fees",
    description: "Calculate your exact BingX perpetual swap trading fees, including maker/taker rates and their impact on your trading profitability.",
    longDescription: "BingX-specific fee calculator with current maker/taker rates for perpetual swap trading.",
    category: "fees",
    keywords: ["bingx trading fee calculator", "bingx fees", "bingx maker taker fee", "bingx perpetual fees", "bingx fee structure"],
    fields: [
      { id: "positionSize", label: "Position Size", type: "number", unit: "USD", placeholder: "10000", min: 1, step: 1, defaultValue: 10000 },
      { id: "makerFee", label: "BingX Maker Fee", type: "number", unit: "%", placeholder: "0.020", min: 0, max: 1, step: 0.001, defaultValue: 0.020, helpText: "BingX perpetual swaps maker: 0.020%. Spot maker: 0.100%." },
      { id: "takerFee", label: "BingX Taker Fee", type: "number", unit: "%", placeholder: "0.050", min: 0, max: 1, step: 0.001, defaultValue: 0.050, helpText: "BingX perpetual swaps taker: 0.050%. Spot taker: 0.100%." },
      { id: "leverage", label: "Leverage", type: "number", unit: "x", placeholder: "1", min: 1, max: 150, step: 1, defaultValue: 1, helpText: "BingX supports up to 150× leverage on perpetual swaps." },
    ],
    relatedSlugs: ["trading-fee-calculator", "bybit-trading-fee-calculator", "phemex-trading-fee-calculator"],
    faqs: [
      { question: "What are BingX's current perpetual swap fees?", answer: "BingX charges 0.020% maker / 0.050% taker on perpetual swaps. Spot trading fees are 0.100% maker / 0.100% taker. BingX also offers copy trading, where fee structures may differ from standard trading." },
      { question: "Does BingX offer fee discounts?", answer: "BingX offers VIP tier discounts based on 30-day trading volume and also runs promotions with reduced fees for new users. Check the BingX fee page for current promotions and VIP tier requirements." },
    ],
    educationContent: {
      title: "BingX: Copy Trading and Competitive Perpetual Fees",
      body: `BingX's perpetual swap fees (0.020%/0.050%) are in line with industry standards — comparable to OKX and Bybit. BingX differentiates itself through its copy trading feature, which allows traders to automatically mirror the positions of top performers.\n\n**BingX fee facts:**\n- Perpetual swap fees are charged on notional value (margin × leverage)\n- Spot fees (0.10%/0.10%) are standard for the industry\n- Copy trading incurs the same base fee plus a profit share to the strategy provider\n- BingX supports up to 150× leverage, though positions over 20× have dramatically reduced liquidation buffers\n\nFor traders primarily using BingX for copy trading, the relevant total cost is the platform fee plus profit share, not just the maker/taker rate alone.`,
    },
  },

  // --- Fees: Phemex ---
  {
    slug: "phemex-trading-fee-calculator",
    parentSlug: "trading-fee-calculator",
    name: "Phemex Trading Fee Calculator",
    shortName: "Phemex Fees",
    description: "Calculate your exact Phemex trading fees for perpetual contract trading, including maker/taker rates and premium membership benefits.",
    longDescription: "Phemex-specific fee calculator with current maker/taker rates for perpetual contract trading.",
    category: "fees",
    keywords: ["phemex trading fee calculator", "phemex fees", "phemex maker taker fee", "phemex perpetual fees", "phemex fee structure"],
    fields: [
      { id: "positionSize", label: "Position Size", type: "number", unit: "USD", placeholder: "10000", min: 1, step: 1, defaultValue: 10000 },
      { id: "makerFee", label: "Phemex Maker Fee", type: "number", unit: "%", placeholder: "0.010", min: 0, max: 1, step: 0.001, defaultValue: 0.010, helpText: "Phemex perpetuals maker: 0.010%. Spot maker: 0.100%." },
      { id: "takerFee", label: "Phemex Taker Fee", type: "number", unit: "%", placeholder: "0.060", min: 0, max: 1, step: 0.001, defaultValue: 0.060, helpText: "Phemex perpetuals taker: 0.060%. Spot taker: 0.100%." },
      { id: "leverage", label: "Leverage", type: "number", unit: "x", placeholder: "1", min: 1, max: 100, step: 1, defaultValue: 1 },
    ],
    relatedSlugs: ["trading-fee-calculator", "bybit-trading-fee-calculator", "bingx-trading-fee-calculator"],
    faqs: [
      { question: "What are Phemex's current trading fees?", answer: "Phemex charges 0.010% maker / 0.060% taker on perpetual contracts, and 0.100% maker / 0.100% taker on spot. Phemex's premium membership (paid subscription) eliminates spot trading fees entirely — useful for frequent spot traders." },
      { question: "What is Phemex Premium membership?", answer: "Phemex offers a paid subscription that removes spot trading fees completely. For high-volume spot traders, the monthly subscription cost can be recovered quickly. For futures traders, standard maker/taker fees apply regardless of membership tier." },
    ],
    educationContent: {
      title: "Phemex: Low Maker Fee and Unique Premium Membership",
      body: `Phemex's perpetual contract maker fee (0.010%) is half of Bybit and Binance's 0.020%. For limit-order traders who consistently get maker fills, this is a significant ongoing saving. The taker fee (0.060%) is slightly higher than competitors.\n\n**Phemex fee highlights:**\n- Maker fee at 0.010% is among the lowest for limit-order futures traders\n- Taker fee at 0.060% is higher than Bybit (0.055%) and Binance (0.040%)\n- Premium membership eliminates spot fees — unique in the industry\n- VIP tiers reduce fees further for high-volume traders\n\n**Who benefits most from Phemex:**\n- Limit-order traders who consistently get maker fills (0.010% is excellent)\n- Spot traders on the premium plan (zero spot fees)\n- Derivatives traders who want a clean, focused interface\n\nFor market-order futures traders, Binance or MEXC offer lower taker fees. For limit-order futures traders, Phemex's 0.010% maker rate is one of the best available.`,
    },
  },

  // --- Leverage: Binance Liquidation ---
  {
    slug: "binance-liquidation-calculator",
    parentSlug: "leverage-liquidation-calculator",
    name: "Binance Liquidation Price Calculator",
    shortName: "Binance Liquidation",
    description: "Calculate your exact liquidation price on Binance USDT-M perpetual futures using Binance's maintenance margin rates.",
    longDescription: "Binance-specific liquidation calculator using USDT-M perpetual futures maintenance margin parameters.",
    category: "leverage",
    keywords: ["binance liquidation calculator", "binance liquidation price", "binance futures liquidation", "binance leverage calculator", "binance perpetual futures liquidation"],
    fields: [
      { id: "entryPrice", label: "Entry Price", type: "number", unit: "USD", placeholder: "50000", min: 0.0001, step: 0.01, defaultValue: 50000 },
      { id: "leverage", label: "Leverage", type: "number", unit: "x", placeholder: "10", min: 1, max: 125, step: 1, defaultValue: 10 },
      { id: "direction", label: "Position Type", type: "select", options: [{ value: "long", label: "Long (Buy)" }, { value: "short", label: "Short (Sell)" }], defaultValue: "long" },
      { id: "maintenanceMargin", label: "Binance Maintenance Margin", type: "number", unit: "%", placeholder: "0.4", min: 0, max: 5, step: 0.1, defaultValue: 0.4, helpText: "Binance BTCUSDT perpetual: 0.4% for positions up to 50 BTC notional." },
    ],
    relatedSlugs: ["leverage-liquidation-calculator", "bybit-liquidation-calculator", "10x-leverage-liquidation-calculator"],
    faqs: [
      { question: "What is Binance's maintenance margin for Bitcoin futures?", answer: "Binance USDT-M perpetuals use a tiered maintenance margin system. For BTCUSDT, the base rate is 0.40% for positions up to 50 BTC notional. Larger positions have higher maintenance margin requirements. Always verify the current rate in Binance's risk parameters page." },
      { question: "Does Binance use isolated or cross margin by default?", answer: "Binance defaults to cross margin, where your entire futures wallet acts as collateral. In isolated margin mode, only the margin allocated to that specific position is at risk. Always verify your margin mode before opening a position." },
    ],
    educationContent: {
      title: "Binance Futures Liquidation: How It Works",
      body: `Binance uses mark price (not last price) for liquidation calculations. Mark price is derived from the index price — a weighted average of spot prices across multiple exchanges — plus a funding basis. This prevents liquidations caused by temporary price spikes on Binance alone.\n\n**Key Binance-specific liquidation details:**\n- Liquidation occurs when margin balance falls below maintenance margin requirement\n- Binance's insurance fund absorbs losses before auto-deleveraging (ADL) kicks in\n- Cross margin: entire futures wallet is collateral — one position can affect others\n- Isolated margin: only allocated margin is at risk — recommended for most traders\n- BTCUSDT maintenance margin: 0.40% for standard retail position sizes\n\nApproximate formula for long positions: Liquidation price ≈ Entry × (1 − 1/Leverage + MaintenanceMargin%). Always use isolated margin to cap your maximum loss per position.`,
    },
  },

  // --- Leverage: OKX Liquidation ---
  {
    slug: "okx-liquidation-calculator",
    parentSlug: "leverage-liquidation-calculator",
    name: "OKX Liquidation Price Calculator",
    shortName: "OKX Liquidation",
    description: "Calculate your exact liquidation price on OKX perpetual futures using OKX's maintenance margin rates.",
    longDescription: "OKX-specific liquidation calculator using perpetual futures maintenance margin parameters.",
    category: "leverage",
    keywords: ["okx liquidation calculator", "okx liquidation price", "okx futures liquidation", "okx leverage calculator", "okx perpetual futures liquidation"],
    fields: [
      { id: "entryPrice", label: "Entry Price", type: "number", unit: "USD", placeholder: "50000", min: 0.0001, step: 0.01, defaultValue: 50000 },
      { id: "leverage", label: "Leverage", type: "number", unit: "x", placeholder: "10", min: 1, max: 125, step: 1, defaultValue: 10 },
      { id: "direction", label: "Position Type", type: "select", options: [{ value: "long", label: "Long (Buy)" }, { value: "short", label: "Short (Sell)" }], defaultValue: "long" },
      { id: "maintenanceMargin", label: "OKX Maintenance Margin", type: "number", unit: "%", placeholder: "0.5", min: 0, max: 5, step: 0.1, defaultValue: 0.5, helpText: "OKX BTC-USDT perpetual: 0.5% for standard retail positions." },
    ],
    relatedSlugs: ["leverage-liquidation-calculator", "bybit-liquidation-calculator", "binance-liquidation-calculator"],
    faqs: [
      { question: "What is OKX's maintenance margin for BTC perpetuals?", answer: "OKX uses a tiered maintenance margin system. For BTC-USDT perpetuals, the base maintenance margin rate is 0.50% for standard retail position sizes. Larger positions have higher margin requirements. Verify current rates in OKX's trading rules." },
      { question: "How does OKX's Unified Account affect liquidation risk?", answer: "OKX's Unified Account combines margin across spot, futures, and options in a single pool. Profits on one position can offset losses on another, potentially preventing liquidation. However, a large losing position can also impact your other holdings." },
    ],
    educationContent: {
      title: "OKX Perpetual Futures: Liquidation and the Unified Account",
      body: `OKX uses mark price for liquidation, calculated from its index (average of spot prices across major exchanges) plus a funding basis component. This protects traders from being liquidated by short-term price anomalies on OKX alone.\n\n**OKX-specific liquidation details:**\n- Mark price = index price + 8h funding basis EMA\n- Maintenance margin: 0.50% for standard BTC-USDT retail positions\n- Unified Account allows cross-collateralization between spot, futures, and options\n- OKX's insurance fund is one of the largest in the industry\n- Partial liquidation is used where possible to avoid full position close-out\n\n**Practical advice:** OKX's Unified Account is powerful but complex. For straightforward futures trading, use isolated margin mode to keep each position's risk clearly defined. Reserve cross/unified margin for more advanced portfolio hedging strategies.`,
    },
  },
];

export function getCalculatorBySlug(slug: string): CalculatorMeta | undefined {
  return calculators.find((c) => c.slug === slug);
}

export function getRelatedCalculators(slug: string): CalculatorMeta[] {
  const calc = getCalculatorBySlug(slug);
  if (!calc) return [];
  return calc.relatedSlugs
    .map((s) => getCalculatorBySlug(s))
    .filter((c): c is CalculatorMeta => c !== undefined);
}

export function getCalculatorsByCategory(category: string): CalculatorMeta[] {
  return calculators.filter((c) => c.category === category);
}
