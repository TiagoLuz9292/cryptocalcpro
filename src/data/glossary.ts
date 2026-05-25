export interface GlossaryTerm {
  slug: string;
  term: string;
  shortDef: string;
  body: string;
  relatedTerms: string[];
  relatedCalcSlugs: string[];
  keywords: string[];
}

export const glossaryTerms: GlossaryTerm[] = [
  {
    slug: "liquidation-price",
    term: "Liquidation Price",
    shortDef: "The price at which your leveraged position is forcibly closed by the exchange to prevent negative balance.",
    body: `When you trade with leverage, you borrow funds from the exchange. If the market moves against you and your margin falls below the **maintenance margin** threshold, the exchange automatically closes (liquidates) your position before you can lose more than your deposited collateral.

**How it's calculated:**

For a long position:
> Liquidation Price ≈ Entry Price × (1 − 1/Leverage + Maintenance Margin Rate)

For a short position:
> Liquidation Price ≈ Entry Price × (1 + 1/Leverage − Maintenance Margin Rate)

**Example:** You open a BTC long at $50,000 with 10× leverage and 0.5% maintenance margin.
> $50,000 × (1 − 0.1 + 0.005) = **$45,250**

If BTC drops to $45,250, you get liquidated.

**How to avoid liquidation:**
- Use lower leverage (5× or less for beginners)
- Set a stop-loss well above your liquidation price
- Never use the full margin balance on a single trade`,
    relatedTerms: ["leverage", "margin", "maintenance-margin", "stop-loss"],
    relatedCalcSlugs: ["liquidation-price-calculator", "btc-liquidation-price", "eth-liquidation-price"],
    keywords: ["what is liquidation price", "liquidation price crypto", "how is liquidation price calculated", "avoid liquidation crypto"],
  },
  {
    slug: "drawdown",
    term: "Drawdown",
    shortDef: "The percentage decline from a peak equity value to a subsequent trough — measures how much your account has lost from its highest point.",
    body: `Drawdown is the most important risk metric for traders and prop firm challengers. It measures how far your account has fallen from its peak before recovering.

**Types of drawdown:**

| Type | Definition |
|---|---|
| Absolute drawdown | Loss from starting balance |
| Relative drawdown | Loss from highest balance reached |
| Daily drawdown | Max loss in a single trading day |

**Example:** Your account peaks at $110,000 then falls to $99,000.
> Drawdown = (110,000 − 99,000) / 110,000 = **10%**

**Why it matters for prop firms:**

Most prop firms (FTMO, FundedNext, BrightFunded) enforce hard drawdown limits:
- **FTMO**: 10% max overall, 5% daily
- **FundedNext**: 10% max overall, 5% daily

Breach either limit and you fail the challenge — no exceptions.

**Managing drawdown:**
- Size positions so a losing streak of 5–10 trades stays within 3–5% drawdown
- Use a daily loss limit equal to your best expected daily gain
- Stop trading when you hit 50–70% of your drawdown limit`,
    relatedTerms: ["prop-firm-challenge", "daily-drawdown", "position-sizing", "risk-management"],
    relatedCalcSlugs: ["ftmo-drawdown-calculator", "fundednext-drawdown-calculator", "brightfunded-drawdown-calculator"],
    keywords: ["what is drawdown trading", "drawdown crypto", "prop firm drawdown rules", "how to calculate drawdown"],
  },
  {
    slug: "leverage",
    term: "Leverage",
    shortDef: "A multiplier that lets you control a larger position than your deposited capital — amplifying both gains and losses.",
    body: `Leverage lets you open a position worth more than your account balance by borrowing the difference from the exchange.

**How it works:**

With $1,000 and 10× leverage, you control a $10,000 position. A 1% move in your favor returns $100 (10% of your $1,000). A 1% move against you loses $100. At 10×, a 10% adverse move wipes out your entire margin.

**Common leverage levels:**

| Leverage | Max loss before liquidation (approx.) |
|---|---|
| 2× | ~50% |
| 5× | ~20% |
| 10× | ~10% |
| 20× | ~5% |
| 100× | ~1% |

**Choosing the right leverage:**
- Beginners: 2–5× maximum
- Intermediate: 5–10×
- Experienced: 10–20× with strict stops

High leverage (50×, 100×) is almost never appropriate for discretionary traders — even a 1% stop gap can be wiped by normal volatility.`,
    relatedTerms: ["liquidation-price", "margin", "perpetual-futures", "position-sizing"],
    relatedCalcSlugs: ["crypto-leverage-calculator", "liquidation-price-calculator", "margin-calculator"],
    keywords: ["what is leverage crypto", "crypto leverage explained", "how does leverage work", "best leverage for trading"],
  },
  {
    slug: "dca",
    term: "Dollar-Cost Averaging (DCA)",
    shortDef: "An investment strategy where you buy a fixed dollar amount of an asset at regular intervals, regardless of price.",
    body: `Dollar-Cost Averaging (DCA) removes the need to time the market. Instead of trying to buy at the bottom, you invest the same amount every week, month, or interval — buying more when prices are low and less when prices are high.

**Example:**

You invest $200/month in Bitcoin for 6 months:

| Month | BTC Price | BTC Bought |
|---|---|---|
| Jan | $40,000 | 0.005 |
| Feb | $35,000 | 0.00571 |
| Mar | $25,000 | 0.008 |
| Apr | $30,000 | 0.00667 |
| May | $38,000 | 0.00526 |
| Jun | $45,000 | 0.00444 |

Total invested: $1,200 | Total BTC: 0.03408 | Average price: **$35,210** vs. a lump sum at Jan price of $40,000.

**DCA works best when:**
- You believe in the long-term value of an asset
- You want to reduce volatility risk
- You're investing regularly from income (monthly salary, etc.)

**DCA does NOT protect you if the asset goes to zero.** It smooths your entry, it doesn't guarantee profit.`,
    relatedTerms: ["compounding", "position-sizing", "bear-market"],
    relatedCalcSlugs: ["bitcoin-dca-calculator", "ethereum-dca-calculator", "dot-dca-calculator"],
    keywords: ["what is dca crypto", "dollar cost averaging explained", "dca strategy bitcoin", "how to dca crypto"],
  },
  {
    slug: "risk-reward-ratio",
    term: "Risk/Reward Ratio (R:R)",
    shortDef: "The ratio between the potential loss on a trade and the potential profit — e.g. 1:2 means risking $1 to make $2.",
    body: `The risk/reward ratio (R:R or RR) tells you how much you expect to gain for every dollar you risk on a trade. It's the foundation of professional position sizing.

**Formula:**
> R:R = Distance to stop-loss / Distance to take-profit

**Example:** You buy BTC at $50,000.
- Stop-loss: $49,000 (risk = $1,000)
- Take-profit: $52,000 (reward = $2,000)
- R:R = 1,000 / 2,000 = **1:2**

**Why it matters:**

With a 1:2 R:R, you only need to win **33% of trades** to break even. With 1:3, you only need **25%**.

| R:R | Breakeven Win Rate |
|---|---|
| 1:1 | 50% |
| 1:2 | 33% |
| 1:3 | 25% |
| 1:4 | 20% |

**Minimum viable R:R:**

Most professional traders use at least 1:2. Below 1:1.5, commissions and spread will eat your edge. Targeting 1:3 or better gives you a significant buffer even with a modest win rate.`,
    relatedTerms: ["position-sizing", "stop-loss", "drawdown", "win-rate"],
    relatedCalcSlugs: ["risk-reward-calculator", "position-size-calculator"],
    keywords: ["what is risk reward ratio", "risk reward crypto", "how to calculate risk reward", "1:2 risk reward"],
  },
  {
    slug: "perpetual-futures",
    term: "Perpetual Futures",
    shortDef: "A derivative contract that lets you speculate on an asset's price with leverage — with no expiry date, kept in sync with spot via a funding rate.",
    body: `Perpetual futures (also called perps) are the most popular instrument on crypto derivatives exchanges like Binance, Bybit, and OKX. Unlike traditional futures, they never expire — you can hold them indefinitely.

**How they stay pegged to spot price:**

Exchanges use a **funding rate** — paid every 8 hours between longs and shorts — to keep the perpetual price close to the spot price:
- When perp price > spot: longs pay shorts (discourages buying)
- When perp price < spot: shorts pay longs (discourages selling)

**Key mechanics:**

| Feature | Perpetual Futures | Spot |
|---|---|---|
| Leverage | Yes (up to 100×) | Usually no |
| Expiry | None | N/A |
| Funding rate | Yes (every 8h) | No |
| Short selling | Easy | Hard/impossible |

**Funding rate impact:**

On a $10,000 long position with a 0.01% funding rate every 8 hours:
> Cost per day = $10,000 × 0.01% × 3 = **$3/day** or ~$90/month

High funding rates (0.05%+) make holding longs expensive. Factor this in on longer-term leveraged positions.`,
    relatedTerms: ["leverage", "liquidation-price", "funding-rate", "margin"],
    relatedCalcSlugs: ["crypto-leverage-calculator", "liquidation-price-calculator"],
    keywords: ["what are perpetual futures crypto", "perps crypto explained", "perpetual futures vs spot", "funding rate crypto"],
  },
  {
    slug: "position-sizing",
    term: "Position Sizing",
    shortDef: "Calculating how much of your account to risk on a single trade to keep losses within your predefined risk limit.",
    body: `Position sizing is how professional traders control risk. Instead of deciding trade size by feel, you calculate it mathematically so each loss stays within a fixed percentage of your account.

**The formula:**
> Position Size = (Account × Risk%) / (Entry − Stop-Loss)

**Example:**
- Account: $10,000
- Risk per trade: 1%
- Entry: $50,000
- Stop-loss: $49,000 (distance = $1,000)

> Position Size = ($10,000 × 1%) / $1,000 = **0.1 BTC**

Maximum loss on this trade: $100 (1% of account) ✓

**Why 1–2% per trade?**

If you risk 1% per trade and lose 10 in a row (rare but possible), you're down ~10% — recoverable. If you risk 10% per trade and lose 10 in a row, you're broke.

**Position sizing for prop firms:**

Most prop firm challenges have a 5% daily drawdown limit. With a 1:2 R:R and 1% risk per trade, you'd need to lose 5 trades in a row before hitting the daily limit — very unlikely.`,
    relatedTerms: ["risk-reward-ratio", "drawdown", "stop-loss", "leverage"],
    relatedCalcSlugs: ["position-size-calculator", "risk-reward-calculator", "btc-position-size", "eth-position-size"],
    keywords: ["what is position sizing", "position sizing crypto", "how to calculate position size", "position size formula"],
  },
  {
    slug: "maintenance-margin",
    term: "Maintenance Margin",
    shortDef: "The minimum account balance required to keep a leveraged position open — falling below this triggers liquidation.",
    body: `When trading with leverage, exchanges require you to maintain a minimum balance relative to your position size. This minimum is called the **maintenance margin**.

**Initial vs. maintenance margin:**

| Type | Description |
|---|---|
| Initial margin | Required to open a position |
| Maintenance margin | Minimum to keep it open |

If your account equity drops below the maintenance margin, the exchange issues a **margin call** (warning) and then liquidates your position.

**Typical rates (varies by exchange and leverage):**

| Leverage | Initial Margin | Maintenance Margin |
|---|---|---|
| 5× | 20% | 0.5–1% |
| 10× | 10% | 0.5–1% |
| 20× | 5% | 0.5–1% |
| 100× | 1% | 0.5% |

**Practical implication:**

The maintenance margin is built into the liquidation price formula. A 0.5% maintenance margin means your liquidation hits slightly before you'd expect from a pure leverage calculation. Always account for this when setting stop-losses.`,
    relatedTerms: ["liquidation-price", "leverage", "margin", "perpetual-futures"],
    relatedCalcSlugs: ["liquidation-price-calculator", "margin-calculator", "crypto-leverage-calculator"],
    keywords: ["what is maintenance margin", "maintenance margin crypto", "initial vs maintenance margin", "margin call crypto"],
  },
  {
    slug: "stop-loss",
    term: "Stop-Loss",
    shortDef: "An order that automatically closes your position at a specified price to limit losses on a trade.",
    body: `A stop-loss is an automatic exit order placed below (for longs) or above (for shorts) your entry price. When the market reaches that level, your position is closed — limiting the loss to a predefined amount.

**Types of stop-loss:**

| Type | How it works |
|---|---|
| Fixed stop | Set at a static price level |
| ATR-based stop | Set at N × Average True Range from entry |
| Percentage stop | Set at X% below entry |
| Structure stop | Set below the nearest support level |

**Placing a stop-loss:**

The best stop-losses are placed at levels where your trade thesis is invalidated — not just where you'd lose a comfortable amount. Common placements:
- Below the last swing low (for longs)
- Above the last swing high (for shorts)
- Below/above a key support/resistance level

**Stop-loss vs. liquidation:**

Your stop-loss should ALWAYS be above your liquidation price. If your stop is at −5% and liquidation is at −8%, fine. But if you remove your stop and hold, a fast move can liquidate you before you react.

A good rule: set your stop where your thesis is wrong, then size your position so that stop represents 1–2% of account risk.`,
    relatedTerms: ["position-sizing", "risk-reward-ratio", "liquidation-price", "drawdown"],
    relatedCalcSlugs: ["position-size-calculator", "risk-reward-calculator"],
    keywords: ["what is stop loss crypto", "how to set stop loss", "stop loss placement guide", "stop loss vs liquidation"],
  },
  {
    slug: "funding-rate",
    term: "Funding Rate",
    shortDef: "A periodic payment between long and short holders in perpetual futures markets that keeps the contract price close to the spot price.",
    body: `The funding rate is the mechanism exchanges use to keep perpetual futures prices anchored to the underlying spot market. Every 8 hours (on most exchanges), one side of the market pays the other.

**How it works:**
- Funding rate **positive** → Longs pay shorts (perp > spot, market is bullish)
- Funding rate **negative** → Shorts pay longs (perp < spot, market is bearish)

**Calculating funding cost:**
> Funding cost = Position Size × Funding Rate

**Example:** $10,000 long, funding rate = 0.01%
> Every 8 hours: $10,000 × 0.01% = **$1**
> Per day: $3 | Per month: ~$90

**Reading the market from funding rates:**

| Rate | Signal |
|---|---|
| 0.01% (neutral) | Balanced market |
| 0.05–0.1%+ | Extreme long bias — potential crowded trade |
| Negative | Extreme short bias — potential short squeeze |

High positive funding rates often precede corrections — everyone is long and overleveraged. Contrarian traders use this as a signal.

**Which exchanges?**

Bybit and Binance settle funding every 8 hours. OKX settles every hour at 1/3 the rate. Always check the current rate before holding large leveraged positions overnight.`,
    relatedTerms: ["perpetual-futures", "leverage", "liquidation-price", "margin"],
    relatedCalcSlugs: ["crypto-leverage-calculator", "bybit-fees-calculator", "binance-futures-fees"],
    keywords: ["what is funding rate crypto", "funding rate explained", "how funding rate works", "funding rate bybit binance"],
  },
  {
    slug: "compounding",
    term: "Compounding",
    shortDef: "Reinvesting profits so future returns are calculated on an ever-growing base — generating exponential growth over time.",
    body: `Compounding is the process of reinvesting your earnings so that each period's return is calculated on a larger base. It's often called the "eighth wonder of the world" because even small consistent gains compound into significant growth.

**The formula:**
> Final Balance = Starting Balance × (1 + r)^n

Where r = return per period, n = number of periods.

**Example — 1% daily gain, 252 trading days:**
> $10,000 × (1.01)^252 = **$122,299**

That's 12× on 1% per day. But 1% per day consistently is extremely rare — this example illustrates the math, not a realistic expectation.

**Realistic compounding — 3% per month:**
> $10,000 × (1.03)^12 = **$13,439** (+34.4% in a year)

**Drawdown impact on compounding:**

A 20% drawdown requires a 25% gain to recover. Losses compound against you too:
> $10,000 → −20% → $8,000 → needs +25% just to get back to start

This is why drawdown control matters more than return maximization — protecting capital preserves your compounding base.`,
    relatedTerms: ["drawdown", "position-sizing", "risk-management", "dca"],
    relatedCalcSlugs: ["compound-interest-calculator", "trading-compounding-calculator"],
    keywords: ["what is compounding trading", "compound interest crypto", "compounding returns calculator", "trading account compounding"],
  },
  {
    slug: "prop-firm-challenge",
    term: "Prop Firm Challenge",
    shortDef: "A paid evaluation where traders prove they can hit a profit target while respecting drawdown limits — passing earns a funded account.",
    body: `A prop firm challenge (also called an evaluation or combine) is a paid assessment designed to identify disciplined traders. Pass the evaluation and the firm funds your account — you trade their capital and split the profits.

**Typical challenge structure:**

| Phase | Profit Target | Max Drawdown | Time |
|---|---|---|---|
| Phase 1 | 8–10% | 10% overall / 5% daily | 30 days |
| Phase 2 | 4–5% | 10% overall / 5% daily | 60 days |
| Funded | — | 10% overall / 5% daily | Ongoing |

**Major prop firms and their rules:**

| Firm | Phase 1 Target | Daily Drawdown | Overall DD |
|---|---|---|---|
| FTMO | 10% | 5% | 10% |
| FundedNext | 8% | 5% | 10% |
| BrightFunded | 8% | 5% | 10% |

**Common failure reasons:**

1. Breaching the daily drawdown on a single bad day
2. Overtrading trying to hit the profit target quickly
3. Holding positions over high-impact news events
4. Not using a stop-loss

**Sizing strategy for challenges:**

Risk 0.5–1% per trade. With a 5% daily drawdown limit and 1% risk, you can lose 5 trades in a day before failing — enough buffer for bad days without reckless sizing.`,
    relatedTerms: ["drawdown", "daily-drawdown", "position-sizing", "risk-management"],
    relatedCalcSlugs: ["ftmo-drawdown-calculator", "fundednext-drawdown-calculator", "brightfunded-drawdown-calculator"],
    keywords: ["what is prop firm challenge", "how to pass prop firm challenge", "prop firm evaluation rules", "ftmo challenge explained"],
  },
  {
    slug: "win-rate",
    term: "Win Rate",
    shortDef: "The percentage of trades that end in profit — used alongside R:R to determine whether a strategy has a positive expected value.",
    body: `Win rate is the proportion of your trades that close in profit. On its own it tells you very little — a 70% win rate with a 1:0.5 R:R loses money, while a 35% win rate with a 1:3 R:R is highly profitable.

**Formula:**
> Win Rate = Winning Trades / Total Trades × 100

**Win rate and R:R together:**

The combination of win rate and R:R determines your **expected value (EV)** per trade:
> EV = (Win Rate × Average Win) − (Loss Rate × Average Loss)

**Breakeven win rates by R:R:**

| R:R | Minimum Win Rate to Break Even |
|---|---|
| 1:1 | 50% |
| 1:2 | 33% |
| 1:3 | 25% |
| 1:4 | 20% |
| 1:0.5 | 67% |

**Why high win rate is a trap:**

Many new traders chase high win rates (70%+) by using wide take-profits and tight stop-losses. This produces small, frequent wins and occasional catastrophic losses. A single 1:0.3 R:R loss can wipe out 10 small wins. Focus on positive EV, not win rate in isolation.

**Realistic win rates:**

- Scalping: 55–65% (tight R:R, high frequency)
- Swing trading: 35–50% (wide R:R, low frequency)
- Trend following: 30–40% (R:R of 1:3 or better)`,
    relatedTerms: ["risk-reward-ratio", "position-sizing", "drawdown"],
    relatedCalcSlugs: ["risk-reward-calculator", "position-size-calculator"],
    keywords: ["what is win rate trading", "win rate crypto", "win rate vs risk reward", "good win rate trading"],
  },
  {
    slug: "take-profit",
    term: "Take-Profit",
    shortDef: "An order that automatically closes your position at a target price to lock in gains.",
    body: `A take-profit (TP) is a limit order that closes your position when the price reaches your profit target. Like a stop-loss, it executes automatically — removing the need to watch the screen and the temptation to hold too long.

**How it works:**

For a long position at $50,000:
- Stop-loss: $49,000 (−$1,000 risk)
- Take-profit: $52,000 (+$2,000 reward)
- This gives a 1:2 R:R

The exchange fills your take-profit order when the market touches $52,000, banking the $2,000 gain.

**Setting a take-profit:**

The best take-profits are placed at levels of expected resistance — not arbitrary round numbers:
- The next major resistance level
- The previous swing high
- A Fibonacci extension level
- A measured move target (height of the consolidation pattern)

**Partial take-profits:**

Many traders close part of their position at the first target and move their stop to breakeven, letting the remainder run. Example:
- Close 50% at 1:2 (secured profit, free risk on remainder)
- Close remaining 50% at 1:4

**Take-profit vs. trailing stop:**

A take-profit locks in a specific price. A trailing stop follows the price upward and closes if it reverses by a set amount — useful in trending markets where you want to capture more upside without a fixed target.`,
    relatedTerms: ["stop-loss", "risk-reward-ratio", "position-sizing"],
    relatedCalcSlugs: ["risk-reward-calculator", "position-size-calculator"],
    keywords: ["what is take profit crypto", "how to set take profit", "take profit vs trailing stop", "take profit trading"],
  },
  {
    slug: "margin-call",
    term: "Margin Call",
    shortDef: "A notification from your exchange that your account equity has fallen too low to support your open positions — requiring you to add funds or face liquidation.",
    body: `A margin call is the exchange warning you that your margin balance has dropped below the required minimum. If you don't act quickly — by depositing more funds or reducing your position — the exchange will automatically liquidate your positions.

**The sequence of events:**

1. You open a leveraged position using margin
2. The market moves against you
3. Your equity falls toward the **maintenance margin** level
4. Exchange sends a margin call notification
5. If equity falls further, position is liquidated automatically

**Margin call vs. liquidation:**

| Event | Trigger | Action Required |
|---|---|---|
| Margin call | Equity near maintenance margin | Add funds or reduce position |
| Liquidation | Equity at/below maintenance margin | Position auto-closed by exchange |

**How to avoid margin calls:**

- Use conservative leverage (5× or less)
- Set a stop-loss well above your liquidation price
- Don't use your full margin balance on a single trade
- Keep reserve capital in your account

**Cross vs. isolated margin:**

- **Isolated margin**: Only the margin allocated to one trade is at risk. A margin call on one position doesn't affect others.
- **Cross margin**: All account equity backs all positions. One bad trade can drain margin from other open positions.

Most traders use isolated margin to contain risk per trade.`,
    relatedTerms: ["liquidation-price", "maintenance-margin", "leverage", "stop-loss"],
    relatedCalcSlugs: ["liquidation-price-calculator", "crypto-leverage-calculator", "margin-calculator"],
    keywords: ["what is margin call crypto", "margin call explained", "how to avoid margin call", "margin call vs liquidation"],
  },
  {
    slug: "slippage",
    term: "Slippage",
    shortDef: "The difference between the expected price of a trade and the actual price at which it executes — caused by market movement between order placement and fill.",
    body: `Slippage occurs when your order fills at a different price than you expected. It's an invisible cost that affects every market order and is especially significant for large positions and in low-liquidity markets.

**Why slippage happens:**

When you place a market order, you agree to buy/sell at whatever price is available in the order book. If the order book is thin, your large order "eats through" multiple price levels:
- You want to buy 10 BTC
- 3 BTC available at $50,000
- 4 BTC available at $50,010
- 3 BTC available at $50,025
- Average fill price: $50,012 (slippage: $12/BTC)

**Positive vs. negative slippage:**

- **Negative slippage**: You pay more than expected (buying) or receive less (selling) — the most common type
- **Positive slippage**: You get a better price than expected — possible in fast-moving markets

**Estimating slippage:**

| Position Size vs. Daily Volume | Expected Slippage |
|---|---|
| < 0.1% | Minimal (< 0.01%) |
| 0.1–1% | Low (0.01–0.05%) |
| 1–5% | Moderate (0.05–0.2%) |
| > 5% | High (0.2%+) |

**How to minimize slippage:**

- Use **limit orders** instead of market orders (you set the price, it either fills or doesn't)
- Trade only in high-liquidity markets (BTC, ETH on major exchanges)
- Break large orders into smaller chunks (iceberg orders)
- Trade during peak liquidity hours (US/EU market overlap)`,
    relatedTerms: ["spread", "maker-fee", "position-sizing", "stop-loss"],
    relatedCalcSlugs: ["trading-fee-calculator", "position-size-calculator"],
    keywords: ["what is slippage crypto", "slippage trading explained", "how to reduce slippage", "slippage market order"],
  },
  {
    slug: "spread",
    term: "Bid-Ask Spread",
    shortDef: "The difference between the highest price a buyer will pay (bid) and the lowest price a seller will accept (ask) — a hidden cost on every trade.",
    body: `The bid-ask spread is the gap between what buyers are willing to pay and what sellers are asking for. It's the most immediate cost you pay when entering and exiting any trade, even before exchange fees.

**Example:**
- BTC bid: $49,990 (highest buyer price)
- BTC ask: $50,010 (lowest seller price)
- Spread: $20 (0.04%)

If you buy at $50,010 and immediately sell at $49,990, you lose $20 without the price moving.

**Maker vs. taker and the spread:**

- **Taker orders** (market orders): You cross the spread and pay the ask. Immediate fill, but you absorb the spread cost.
- **Maker orders** (limit orders): You post at a price and wait. If filled, you get the better side of the spread and pay lower exchange fees.

**Spread varies by:**

| Factor | Effect on Spread |
|---|---|
| Market liquidity | High liquidity = tight spread |
| Time of day | Peak hours = tighter spread |
| Market volatility | High volatility = wider spread |
| Asset popularity | BTC/ETH much tighter than altcoins |

**Real-world spread costs:**

BTC/USDT on Binance: ~0.01–0.02% spread
Altcoin pairs: 0.1–0.5% or wider

For scalpers who open and close many positions, spread cost accumulates rapidly and must be factored into strategy profitability alongside exchange fees.`,
    relatedTerms: ["slippage", "maker-fee", "position-sizing", "win-rate"],
    relatedCalcSlugs: ["trading-fee-calculator", "scalping-risk-reward-calculator"],
    keywords: ["what is bid ask spread crypto", "spread trading explained", "bid ask spread explained", "how spread affects trading"],
  },
  {
    slug: "order-types",
    term: "Order Types",
    shortDef: "The different instructions you can give an exchange to buy or sell — market, limit, stop, stop-limit, and trailing stop orders each serve a distinct purpose.",
    body: `Choosing the right order type is essential for executing your strategy as intended. Using the wrong order type can result in bad fills, unexpected liquidations, or missing your entry entirely.

**Core order types:**

| Order Type | What it does | Best used for |
|---|---|---|
| Market order | Buys/sells immediately at best available price | Fast entry/exit, high liquidity assets |
| Limit order | Waits for a specific price before filling | Precise entries, maker fee savings |
| Stop (market) | Triggers a market order when price hits a level | Stop-loss execution |
| Stop-limit | Triggers a limit order when price hits a level | Stop-loss with price control |
| Trailing stop | Stop that follows price at a fixed distance | Locking in profits in trending markets |

**Market orders:**

Pros: Immediate fill. Cons: Subject to slippage, pays taker fees.
Use when: Speed is critical (news event, fast breakout).

**Limit orders:**

Pros: Precise price, maker rebates. Cons: May not fill if price doesn't reach your level.
Use when: Entering at a specific price or below (buying dips, selling rallies).

**Stop-loss orders — market vs. limit:**

A stop-market triggers a market order at your stop price, guaranteeing a fill but potentially with slippage. A stop-limit triggers a limit order, which may not fill if price gaps through your level. In fast-moving markets, stop-market is safer for actual protection.

**Trailing stop:**

If you're long BTC at $50,000 with a $1,000 trailing stop and BTC rises to $55,000, your stop moves to $54,000. If BTC then falls $1,000 to $54,000, you're out — locking in a $4,000 profit even though you never set a specific take-profit target.`,
    relatedTerms: ["stop-loss", "take-profit", "slippage", "spread"],
    relatedCalcSlugs: ["risk-reward-calculator", "position-size-calculator"],
    keywords: ["crypto order types explained", "market vs limit order crypto", "stop loss order types", "trailing stop crypto"],
  },

  {
    slug: "margin",
    term: "Margin",
    shortDef: "The collateral you deposit to open and maintain a leveraged trading position.",
    body: `Margin is the capital you put up as collateral when opening a leveraged trade. It is not the full cost of the position — it is the security deposit the exchange holds to cover potential losses.

**Initial vs. maintenance margin:**

| Type | Purpose |
|---|---|
| Initial margin | Required to open the position |
| Maintenance margin | Minimum to keep it open |

**Example:** Opening a $10,000 BTC position at 10× leverage requires $1,000 initial margin. That $1,000 is your margin — the remaining $9,000 is borrowed from the exchange.

**Margin modes:**
- **Isolated margin**: Only the allocated margin backs one position. Maximum loss = margin deposited.
- **Cross margin**: Entire account balance backs all positions. More flexibility, but a single loss can affect other trades.

**Margin ratio:**
Most exchanges display a margin ratio — the percentage of your maintenance margin being consumed. At 100%, you face liquidation. Keep it well below 80% as a safety buffer.`,
    relatedTerms: ["isolated-margin", "cross-margin", "maintenance-margin", "liquidation-price", "leverage"],
    relatedCalcSlugs: ["leverage-liquidation-calculator", "bybit-liquidation-calculator"],
    keywords: ["what is margin trading crypto", "margin trading explained", "how does margin work crypto", "crypto margin definition"],
  },

  {
    slug: "isolated-margin",
    term: "Isolated Margin",
    shortDef: "A margin mode where only the funds specifically allocated to one position are at risk — losses are capped at your deposited margin for that trade.",
    body: `Isolated margin confines your risk to the amount you explicitly assign to a single position. If that position is liquidated, only the allocated margin is lost — not your entire account.

**How it works:**

You open a BTC long and allocate $500 as isolated margin. If the trade goes against you and reaches liquidation:
- **Isolated margin**: You lose $500 maximum. Other trades and your remaining balance are unaffected.
- **Cross margin**: Your entire futures wallet could be drained.

**When to use isolated margin:**
- When entering a trade you're not fully confident in
- When you want precise, predefined maximum loss per trade
- For new positions while learning a market

**Trade-off:** Isolated margin is less capital-efficient than cross margin. Your liquidation price is fixed at opening based on allocated margin only — you cannot benefit from account-wide profits unless you add margin manually.

**Most professional retail traders use isolated margin** for most positions to maintain clear risk control per trade.`,
    relatedTerms: ["margin", "cross-margin", "liquidation-price", "maintenance-margin"],
    relatedCalcSlugs: ["leverage-liquidation-calculator", "binance-liquidation-calculator", "bybit-liquidation-calculator"],
    keywords: ["what is isolated margin crypto", "isolated vs cross margin", "isolated margin explained", "isolated margin trading"],
  },

  {
    slug: "cross-margin",
    term: "Cross Margin",
    shortDef: "A margin mode where your entire account balance is shared as collateral across all open positions — improving liquidation resistance but increasing interconnected risk.",
    body: `In cross margin mode, your full available balance acts as collateral for all open positions simultaneously. This gives each position more buffer against liquidation — but it also means one large losing position can drain margin from all your others.

**How it differs from isolated margin:**

| Feature | Isolated | Cross |
|---|---|---|
| Collateral per trade | Fixed allocation | Full account balance |
| Max loss on one trade | Allocated margin only | Entire account balance |
| Liquidation resistance | Lower | Higher |
| Risk containment | Per-trade | Account-wide |

**When cross margin makes sense:**
- Hedged positions (long and short simultaneously) — cross margin prevents both sides from independently liquidating
- Traders with highly correlated positions who want shared margin efficiency
- Professionals who actively manage margin across multiple positions

**The risk:** One catastrophic losing trade in cross margin can trigger a cascade — its losses drain the margin protecting other positions, which then liquidate too. This is how traders lose entire accounts in a single session.

**Recommendation:** Use isolated margin by default. Reserve cross margin for specific hedging strategies once you understand the mechanics.`,
    relatedTerms: ["isolated-margin", "margin", "liquidation-price", "maintenance-margin"],
    relatedCalcSlugs: ["leverage-liquidation-calculator", "okx-liquidation-calculator"],
    keywords: ["what is cross margin crypto", "cross margin vs isolated margin", "cross margin trading explained", "cross margin risk"],
  },

  {
    slug: "open-interest",
    term: "Open Interest",
    shortDef: "The total number of outstanding derivative contracts (futures or options) that have not been settled — a measure of market participation and sentiment.",
    body: `Open interest (OI) is the total number of active futures or options contracts across all traders at any given moment. Unlike trading volume (which counts every transaction), open interest only counts contracts that are still open.

**How it changes:**
- OI **increases** when a new long and new short position open against each other
- OI **decreases** when an existing position is closed
- OI stays the **same** when a position is transferred from one trader to another

**Reading open interest:**

| Price Direction | OI Change | Signal |
|---|---|---|
| Price up + OI up | New money entering long | Bullish |
| Price up + OI down | Shorts covering | Weaker bullish signal |
| Price down + OI up | New money entering short | Bearish |
| Price down + OI down | Longs capitulating | Weaker bearish signal |

**Liquidation risk from high OI:**

Very high open interest combined with high leverage creates liquidation risk. If price moves sharply, cascading liquidations (one triggers another) can amplify the move significantly. Traders call this a "liquidation cascade."

**Where to find OI data:** CoinGlass and most exchange dashboards show current open interest and historical charts.`,
    relatedTerms: ["perpetual-futures", "funding-rate", "liquidation-price", "leverage"],
    relatedCalcSlugs: ["leverage-liquidation-calculator", "crypto-position-size-calculator"],
    keywords: ["what is open interest crypto", "open interest explained futures", "open interest trading signal", "how to use open interest"],
  },

  {
    slug: "long-position",
    term: "Long Position",
    shortDef: "A trade that profits when the asset price goes up — you buy expecting the price to rise.",
    body: `Going long means buying an asset (or a contract) with the expectation that its price will increase. It is the most fundamental trade in any market.

**In spot trading:** You buy BTC at $50,000 and sell at $60,000. Profit: $10,000.

**In futures trading:** You open a long contract at $50,000 with leverage. If price rises to $55,000, you profit from the $5,000 move multiplied by your leverage — without owning actual BTC.

**Long position mechanics in futures:**

| Scenario | Outcome |
|---|---|
| Price rises above entry | Profit proportional to leverage |
| Price falls to stop-loss | Loss capped at stop |
| Price falls to liquidation price | Position forcibly closed, margin lost |

**Funding rate impact on longs:**

In perpetual futures, if the funding rate is positive (longs pay shorts), holding a long position costs money every 8 hours. During bull markets with high funding rates, this carrying cost can be significant for positions held overnight.

**Long vs. short bias:**

Most retail traders default to longs because they align with the general expectation that crypto appreciates over time. However, over-crowded long positions (visible through high positive funding rates and rising open interest) often precede sharp corrections.`,
    relatedTerms: ["short-position", "leverage", "perpetual-futures", "funding-rate", "stop-loss"],
    relatedCalcSlugs: ["leverage-liquidation-calculator", "crypto-position-size-calculator"],
    keywords: ["what is a long position crypto", "going long crypto explained", "long trade meaning", "long position futures"],
  },

  {
    slug: "short-position",
    term: "Short Position",
    shortDef: "A trade that profits when the asset price goes down — you sell a contract expecting the price to fall.",
    body: `Short selling allows traders to profit from declining prices. In crypto futures, shorting is straightforward: you open a short contract, and if the price falls, you profit.

**How shorting works in futures:**

You open a short BTC contract at $50,000. If BTC falls to $45,000:
> Profit = $5,000 per contract (before fees and funding)

If BTC rises to $55,000:
> Loss = $5,000 (position moves against you)

**Short position liquidation:**

For shorts, liquidation occurs when the price rises to your liquidation level — the opposite of longs. Use the same liquidation formula:
> Liquidation Price ≈ Entry × (1 + 1/Leverage − Maintenance Margin Rate)

At 10× leverage, a short is liquidated approximately 9% above your entry price.

**Short selling in spot markets:**

In spot trading, shorting requires borrowing the asset — complex, expensive, and not available everywhere. Crypto futures make short selling accessible to any trader with a derivatives account.

**When shorts make sense:**
- Bearish market conditions or downtrends
- Hedging an existing long spot position
- Trading around high-impact news with bearish expectations

**The squeeze risk:**

Heavily shorted markets are vulnerable to short squeezes — rapid price rises that force short sellers to close (buy back), which accelerates the price rise further. Monitor short funding rates as a warning signal.`,
    relatedTerms: ["long-position", "leverage", "perpetual-futures", "funding-rate", "liquidation-price"],
    relatedCalcSlugs: ["leverage-liquidation-calculator", "crypto-position-size-calculator"],
    keywords: ["what is a short position crypto", "how to short crypto futures", "short selling crypto explained", "short position trading"],
  },

  {
    slug: "mark-price",
    term: "Mark Price",
    shortDef: "A fair-value price calculated from multiple spot exchanges that exchanges use for liquidation — preventing manipulated wicks from triggering false liquidations.",
    body: `Mark price is the reference price used by futures exchanges to calculate unrealised P&L and trigger liquidations. It is deliberately different from the last traded price on that exchange.

**Why mark price exists:**

Without it, a large trader could briefly crash the price on a single exchange, triggering mass liquidations, then profit from the forced selling. Mark price closes this attack vector.

**How it is calculated:**
> Mark Price ≈ Index Price + Funding Basis

Where:
- **Index price** = weighted average of BTC spot prices across multiple major exchanges (Binance, Coinbase, Kraken, etc.)
- **Funding basis** = EMA of the difference between perpetual and spot prices

**Practical implications:**

If Binance's last price briefly wicks to $45,000 but the mark price stays at $48,000 (because other exchanges show $48,000+), your position is NOT liquidated at the wick. You're only liquidated when the broader market — the index — reaches your liquidation level.

**Mark price vs. last price — which is displayed?**

Most exchange interfaces show both. Your unrealised P&L uses mark price. Order fills use last traded price. Your liquidation trigger uses mark price.

Always check the mark price when assessing how close you are to liquidation — not the last price.`,
    relatedTerms: ["index-price", "liquidation-price", "perpetual-futures", "funding-rate"],
    relatedCalcSlugs: ["leverage-liquidation-calculator", "bybit-liquidation-calculator", "binance-liquidation-calculator"],
    keywords: ["what is mark price crypto", "mark price vs last price", "mark price liquidation explained", "how mark price works"],
  },

  {
    slug: "index-price",
    term: "Index Price",
    shortDef: "A weighted average of an asset's price across multiple major spot exchanges — used as the basis for mark price and liquidation calculations in futures markets.",
    body: `The index price aggregates BTC (or any asset) prices across multiple reputable spot exchanges into a single fair-value figure. It is the foundation of the mark price used in futures liquidation.

**Typical index composition for BTC:**

Most major exchanges (Binance, Bybit, OKX) use a weighted average of BTC/USD prices from 3–8 spot exchanges, excluding outliers to prevent manipulation.

**Example components:**
- Coinbase BTC/USD: $50,020 (30% weight)
- Kraken BTC/USD: $49,990 (25% weight)
- Binance BTC/USDT: $50,010 (25% weight)
- Bitstamp BTC/USD: $50,000 (20% weight)

> Index price ≈ $50,007

**Why it matters for traders:**

Your futures P&L and liquidation price both reference the index, not just the exchange you're trading on. This means:
1. Short-lived price anomalies on one exchange don't affect your position
2. During extreme volatility, index price can briefly differ significantly from any individual exchange's last price
3. Arbitrageurs continuously align exchange prices with the index

**Where to find it:** Displayed on the futures trading interface of every major exchange, usually alongside the mark price and last price.`,
    relatedTerms: ["mark-price", "perpetual-futures", "funding-rate", "liquidation-price"],
    relatedCalcSlugs: ["leverage-liquidation-calculator", "okx-liquidation-calculator"],
    keywords: ["what is index price crypto", "index price futures trading", "crypto index price explained", "how index price is calculated"],
  },

  {
    slug: "unrealized-pnl",
    term: "Unrealized P&L",
    shortDef: "The profit or loss on an open position that has not yet been locked in by closing the trade — calculated using the current mark price.",
    body: `Unrealized P&L (also called unrealised profit and loss, or UPnL) is the theoretical profit or loss on a position that is still open. It updates in real time as the price moves but is not yours until you close the trade.

**Formula:**
- **Long**: UPnL = (Mark Price − Entry Price) × Position Size
- **Short**: UPnL = (Entry Price − Mark Price) × Position Size

**Example:** You open a BTC long at $50,000 for 0.1 BTC. BTC mark price is now $52,000.
> UPnL = ($52,000 − $50,000) × 0.1 = **+$200**

This $200 is unrealised — if BTC falls back to $50,000 before you close, it disappears.

**Unrealized vs. Realized P&L:**

| Type | Definition | When it counts |
|---|---|---|
| Unrealized | Open position, not closed | Theoretical — can change |
| Realized | Closed position | Permanent — locked in |

**Why this distinction matters:**

Many traders make the mistake of treating unrealized profits as real. An account showing +$5,000 unrealized P&L can become −$2,000 if the trade reverses before closing. Take-profit orders convert unrealized gains to realized gains — use them.

**Impact on margin:**

Unrealized P&L affects your available margin in cross margin mode. Positive UPnL increases your effective balance (and liquidation buffer). Negative UPnL reduces it.`,
    relatedTerms: ["realized-pnl", "mark-price", "take-profit", "stop-loss", "position-sizing"],
    relatedCalcSlugs: ["risk-reward-calculator", "leverage-liquidation-calculator"],
    keywords: ["what is unrealized pnl crypto", "unrealized profit loss trading", "upnl meaning crypto", "unrealized vs realized pnl"],
  },

  {
    slug: "realized-pnl",
    term: "Realized P&L",
    shortDef: "The actual profit or loss locked in after closing a position — the real, permanent result of a trade.",
    body: `Realized P&L is the final, actual profit or loss from a trade after it has been closed. Unlike unrealized P&L (which fluctuates with price), realized P&L is permanent and directly adds to or subtracts from your account balance.

**When P&L becomes realized:**
- Closing a long or short position
- Being liquidated (realized as a loss equal to your margin)
- Partial position close (portion of trade is realized)

**Formula:**
- **Long close**: Realized P&L = (Close Price − Entry Price) × Quantity − Fees
- **Short close**: Realized P&L = (Entry Price − Close Price) × Quantity − Fees

**Example:**
- Long BTC: Entry $48,000, Close $52,000, 0.1 BTC, taker fee 0.04%
- Gross P&L = ($52,000 − $48,000) × 0.1 = $400
- Fees = ($48,000 × 0.04%) + ($52,000 × 0.04%) = $19.20 + $20.80 = $40
- **Net realized P&L = $360**

**Tracking realized P&L matters for:**
- Tax reporting (in most jurisdictions, realized gains are taxable events)
- Prop firm challenges (drawdown is often calculated on realized + unrealized)
- Performance evaluation — unrealized gains look good until they don't

Most exchanges show your realized P&L history in the trade history section.`,
    relatedTerms: ["unrealized-pnl", "maker-fee", "position-sizing", "take-profit"],
    relatedCalcSlugs: ["trading-fee-calculator", "risk-reward-calculator"],
    keywords: ["what is realized pnl crypto", "realized profit loss trading", "realized vs unrealized profit", "how realized pnl works"],
  },

  {
    slug: "bull-market",
    term: "Bull Market",
    shortDef: "A sustained period of rising prices, broadly positive sentiment, and increasing trader confidence — typically defined as a 20%+ rise from a recent low.",
    body: `A bull market is a prolonged period where prices trend upward and market sentiment is optimistic. In crypto, bull markets are typically driven by institutional inflows, positive regulatory developments, or major adoption events like Bitcoin halvings.

**Defining a bull market:**

Traditional finance defines a bull market as a 20%+ rise from a recent low sustained over an extended period. In crypto, where 20% moves happen in hours, bull markets are usually identified by multi-month uptrends and sustained higher highs.

**Crypto bull market characteristics:**
- Bitcoin and Ethereum make new highs or approach previous all-time highs
- Altcoins outperform BTC (the "altcoin season")
- Funding rates remain elevated (longs pay shorts) for weeks
- Retail interest surges — Google searches and exchange signups spike
- NFT, DeFi, and new narrative sectors attract speculative capital

**Trading in bull markets:**

Bull markets are deceptively easy — almost every long trade works. This builds overconfidence. The danger is loading up on leverage near cycle peaks, when the trend is about to reverse.

**Key risk:** Bull markets end. Every crypto bull market since 2013 has been followed by a bear market with 70–90% drawdowns. Risk management matters most when it feels least necessary.

**Indicators of bull market exhaustion:**
- Extreme positive funding rates (0.1%+ per 8h)
- Very high open interest relative to historical norms
- Leverage ratio (OI / market cap) at multi-year highs
- Widespread "supercycle" narratives`,
    relatedTerms: ["bear-market", "funding-rate", "open-interest", "drawdown"],
    relatedCalcSlugs: ["bitcoin-dca-calculator", "compounding-calculator"],
    keywords: ["what is bull market crypto", "crypto bull market explained", "bull market definition trading", "how long do crypto bull markets last"],
  },

  {
    slug: "bear-market",
    term: "Bear Market",
    shortDef: "A sustained period of declining prices and negative sentiment — typically defined as a 20%+ decline from recent highs.",
    body: `A bear market is a prolonged downtrend where prices fall significantly from their peaks and market sentiment turns pessimistic. In crypto, bear markets are historically severe — BTC has drawn down 70–90% from peak to trough in every major cycle.

**Historical crypto bear markets:**

| Cycle | BTC Peak | Bear Market Low | Drawdown |
|---|---|---|---|
| 2013–2015 | ~$1,200 | ~$150 | −87% |
| 2017–2018 | ~$20,000 | ~$3,100 | −84% |
| 2021–2022 | ~$69,000 | ~$15,500 | −77% |

**Trading in bear markets:**

Bear markets create opportunities for short sellers but are dangerous for undisciplined long traders who "buy the dip" too early or use leverage expecting recovery.

**DCA in bear markets:**

Many long-term investors use bear markets to accumulate assets at lower prices via DCA. Historically, systematic DCA through crypto bear markets has produced strong long-term returns — though timing the end of the bear is impossible.

**Identifying bear market conditions:**
- Sustained lower highs and lower lows on weekly/monthly charts
- Negative or near-zero funding rates (shorts pay longs)
- Declining open interest as traders exit the market
- Exchange outflows to cold storage (holders accumulating)

**Survival strategy:** Reduce leverage significantly or eliminate it. Focus on capital preservation. DCA into conviction positions if your thesis is long-term.`,
    relatedTerms: ["bull-market", "drawdown", "dca", "funding-rate"],
    relatedCalcSlugs: ["bitcoin-dca-calculator", "ethereum-dca-calculator", "dca-calculator"],
    keywords: ["what is bear market crypto", "crypto bear market explained", "bear market trading strategy", "how long crypto bear markets last"],
  },

  {
    slug: "market-cap",
    term: "Market Capitalisation",
    shortDef: "The total value of all circulating coins for a cryptocurrency — calculated as current price × circulating supply.",
    body: `Market capitalisation (market cap) is the most widely used metric to measure the relative size of a cryptocurrency. It represents the total value of all coins currently in circulation.

**Formula:**
> Market Cap = Current Price × Circulating Supply

**Example:** Bitcoin has a circulating supply of ~19.7 million BTC. At $50,000 per BTC:
> Market Cap = $50,000 × 19,700,000 = **$985 billion**

**Market cap tiers:**

| Tier | Market Cap | Characteristics |
|---|---|---|
| Large cap | $10B+ | BTC, ETH — high liquidity, lower volatility |
| Mid cap | $1B–$10B | Established altcoins — moderate liquidity |
| Small cap | $100M–$1B | Riskier, higher volatility, lower liquidity |
| Micro cap | < $100M | Very high risk, low liquidity, easy to manipulate |

**Why market cap matters for traders:**

- **Liquidity**: Higher market cap = deeper order books = less slippage for large trades
- **Volatility**: Smaller market cap assets move more violently in both directions
- **Manipulation risk**: Low market cap tokens are easily moved by whales

**Market cap limitations:**

Market cap can be misleading if most supply is locked or controlled by insiders. "Fully diluted market cap" (price × max supply) is sometimes a more useful metric for newer tokens.`,
    relatedTerms: ["liquidity", "whale", "altcoin", "volatility"],
    relatedCalcSlugs: ["crypto-position-size-calculator"],
    keywords: ["what is market cap crypto", "market capitalisation explained", "how market cap is calculated", "crypto market cap meaning"],
  },

  {
    slug: "altcoin",
    term: "Altcoin",
    shortDef: "Any cryptocurrency other than Bitcoin — the term covers everything from Ethereum to meme tokens.",
    body: `Altcoin is short for "alternative coin" — any cryptocurrency that is not Bitcoin. The term is broad, encompassing Ethereum (the second-largest by market cap), established layer-1 blockchains, DeFi tokens, meme coins, and everything in between.

**Altcoin categories:**

| Category | Examples | Characteristics |
|---|---|---|
| Layer 1s | ETH, SOL, ADA, AVAX | Smart contract platforms |
| Layer 2s | ARB, OP, MATIC | Scaling solutions for ETH |
| DeFi | UNI, AAVE, CRV | Decentralised finance protocols |
| Meme coins | DOGE, SHIB, PEPE | Community/speculation driven |
| Exchange tokens | BNB, KCS, OKB | Utility within exchange ecosystems |

**Altcoin market behaviour:**

Altcoins typically:
- Underperform Bitcoin in bear markets (higher beta to the downside)
- Outperform Bitcoin in bull markets ("altcoin season")
- Have higher volatility and lower liquidity than BTC
- Are more sensitive to Bitcoin price moves and sentiment

**Trading altcoins:**

The higher volatility of altcoins means larger potential gains — but also larger losses. Position sizing is critical: a 5% risk on a BTC trade may be appropriate, but the same setup on a mid-cap altcoin might warrant 1–2% given the wider expected swings.

Use the position size calculator with the altcoin's current price and expected stop-loss distance to calculate appropriate sizing regardless of which coin you trade.`,
    relatedTerms: ["market-cap", "bitcoin-halving", "volatility", "position-sizing"],
    relatedCalcSlugs: ["crypto-position-size-calculator", "ada-position-size-calculator", "solana-position-size-calculator"],
    keywords: ["what is an altcoin", "altcoin meaning crypto", "altcoin vs bitcoin", "altcoin trading explained"],
  },

  {
    slug: "stablecoin",
    term: "Stablecoin",
    shortDef: "A cryptocurrency designed to maintain a stable value, typically pegged 1:1 to the US dollar.",
    body: `Stablecoins are cryptocurrencies engineered to hold a constant value — usually $1.00. They combine the speed and programmability of crypto with the price stability of fiat currency.

**Types of stablecoins:**

| Type | Mechanism | Examples |
|---|---|---|
| Fiat-backed | 1:1 USD reserves | USDT, USDC, BUSD |
| Crypto-backed | Overcollateralised crypto | DAI |
| Algorithmic | Supply/demand algorithms | Terra (UST) — collapsed 2022 |

**Why traders use stablecoins:**

- **Parking capital**: Exit positions into USDT/USDC without converting to fiat
- **Futures margin**: USDT-M perpetuals on Binance, Bybit, and OKX use stablecoins as margin
- **DCA accumulation**: Hold stablecoins between buys for systematic DCA strategies
- **Yield**: Stablecoins can be lent or used in DeFi for yield (with associated risks)

**USDT vs. USDC:**

USDT (Tether) dominates exchange volume but has historically faced questions about reserve auditing. USDC (Circle) is more transparent with regular attestations. For exchange trading, USDT has deeper liquidity. For long-term holding, USDC is generally considered lower counterparty risk.

**Stablecoin risks:**

No stablecoin is completely risk-free. USDT depegging events, USDC temporary depegging during bank runs (March 2023), and UST's complete collapse all demonstrate that "stable" is not guaranteed.`,
    relatedTerms: ["perpetual-futures", "dca", "defi", "funding-rate"],
    relatedCalcSlugs: ["bitcoin-dca-calculator", "dca-calculator"],
    keywords: ["what is a stablecoin", "stablecoin explained crypto", "usdt vs usdc", "how stablecoins work"],
  },

  {
    slug: "daily-drawdown",
    term: "Daily Drawdown",
    shortDef: "The maximum percentage or dollar loss allowed within a single trading day — a hard limit used by most prop firms to prevent catastrophic single-day losses.",
    body: `Daily drawdown is the maximum loss permitted within one trading day before you must stop trading. It is a core rule in almost every prop firm challenge and funded account program.

**Typical prop firm daily drawdown rules:**

| Firm | Daily Drawdown | Calculation |
|---|---|---|
| FTMO | 5% of account | From daily starting balance |
| FundedNext | 5% of account | From daily starting balance |
| E8 Funding | 5% of account | From daily starting balance |

**How it is calculated:**

Most firms calculate daily drawdown from your **equity** at the start of the trading day — meaning open floating P&L counts.

Example: $100,000 account, 5% daily limit = $5,000 maximum daily loss.
- If you start the day at $100,000, you cannot drop below $95,000 at any point
- This includes unrealised losses on open positions

**Why daily drawdown matters:**

Without a daily limit, a single catastrophic trading session could wipe out weeks of progress. The 5% daily limit forces traders to stop after a bad day — protecting the remaining capital and the trader's psychology.

**Managing daily drawdown:**

- Know your exact daily floor before you open the trading platform
- Use a daily loss limit of 50–70% of your allowance as a personal stop
- If you hit 50% of your daily limit, consider stopping for the day
- Never trade around major news events without accounting for drawdown risk

→ [Calculate your daily drawdown floor](/calculators/prop-firm-daily-drawdown-calculator)`,
    relatedTerms: ["drawdown", "prop-firm-challenge", "trailing-drawdown", "static-drawdown", "position-sizing"],
    relatedCalcSlugs: ["ftmo-drawdown-calculator", "fundednext-drawdown-calculator", "prop-firm-daily-drawdown-calculator"],
    keywords: ["what is daily drawdown prop firm", "daily drawdown limit explained", "prop firm daily loss limit", "how daily drawdown works"],
  },

  {
    slug: "trailing-drawdown",
    term: "Trailing Drawdown",
    shortDef: "A drawdown limit that follows your account's highest equity point upward but never moves down — making your floor progressively tighter as profits grow.",
    body: `Trailing drawdown is the most punishing type of drawdown rule because the limit follows your profits upward but never retreats. As you make money, your drawdown floor rises — locking in a tighter band around your current equity.

**How it works:**

Start: $100,000 account, 10% trailing drawdown. Floor starts at $90,000.

| Account High | Trailing Floor (10% below high) |
|---|---|
| $100,000 (start) | $90,000 |
| $105,000 | $94,500 |
| $110,000 | $99,000 |
| $115,000 | $103,500 |

If you reach $115,000 and then lose back to $103,500 — you breach the trailing drawdown and fail, even though you're still at a profit from your starting balance.

**Trailing vs. static drawdown:**

| Type | Floor Movement | Risk Profile |
|---|---|---|
| Trailing | Rises with highs, never falls | Tighter over time as profits grow |
| Static | Fixed from starting balance | Fixed floor regardless of profits |

**Who uses trailing drawdown:**

Some futures prop firms use trailing drawdown. Many traders find it the most challenging type because a profitable run can actually make the challenge harder — your floor rises into dangerous territory if you overshoot.

**Strategy for trailing drawdown challenges:**

Take profits consistently rather than letting winners run too far. Large unrealised gains that then partially reverse can lock in a very high trailing floor. Book profits regularly to control the floor.`,
    relatedTerms: ["drawdown", "static-drawdown", "daily-drawdown", "prop-firm-challenge"],
    relatedCalcSlugs: ["brightfunded-drawdown-calculator", "prop-firm-daily-drawdown-calculator"],
    keywords: ["what is trailing drawdown", "trailing drawdown prop firm", "trailing drawdown explained", "topstep trailing drawdown"],
  },

  {
    slug: "static-drawdown",
    term: "Static Drawdown",
    shortDef: "A drawdown limit calculated from your initial starting balance — it does not change as you make profits, giving you a fixed floor throughout the challenge.",
    body: `Static drawdown (also called absolute drawdown or fixed drawdown) sets a permanent floor based on your starting balance. Unlike trailing drawdown, it never moves — once set, the floor stays constant regardless of how much you profit.

**How it works:**

$100,000 account with 10% static drawdown. Floor = **$90,000 forever**.

Even if your account reaches $150,000, your floor remains $90,000. You could draw down from $150,000 all the way to $90,001 without breaching the rule.

**Comparison with trailing drawdown:**

| Scenario | Static Floor | Trailing Floor (10%) |
|---|---|---|
| Starting balance $100k | $90,000 | $90,000 |
| After reaching $110k | $90,000 | $99,000 |
| After reaching $130k | $90,000 | $117,000 |

Static drawdown becomes progressively more generous relative to your current equity as you profit. Trailing drawdown becomes progressively tighter.

**Which firms use static drawdown:**

FTMO, FundedNext, and E8 Funding all use static drawdown as their primary maximum drawdown type. This is generally considered more trader-friendly than trailing drawdown.

**The flip side:**

Static drawdown can create a "nothing left to lose" mentality if you're near the floor. A trader down 8% on a 10% static drawdown limit may take excessive risks trying to recover before the end of the challenge.`,
    relatedTerms: ["trailing-drawdown", "daily-drawdown", "drawdown", "prop-firm-challenge"],
    relatedCalcSlugs: ["ftmo-drawdown-calculator", "fundednext-drawdown-calculator"],
    keywords: ["what is static drawdown prop firm", "static vs trailing drawdown", "fixed drawdown prop firm", "ftmo static drawdown"],
  },

  {
    slug: "profit-target",
    term: "Profit Target",
    shortDef: "The percentage gain required to pass a prop firm evaluation phase — typically 8–10% for Phase 1 and 4–5% for Phase 2.",
    body: `The profit target is the minimum gain you must achieve to pass a prop firm challenge phase. It is usually expressed as a percentage of your starting account balance and must be reached within a specified time period.

**Typical prop firm profit targets:**

| Firm | Phase 1 Target | Phase 2 Target | Time Limit |
|---|---|---|---|
| FTMO | 10% | 5% | 30 days / 60 days |
| FundedNext | 8% | 5% | 30 days / 60 days |
| E8 Funding | 8% | 5% | 30 days / 60 days |
| BrightFunded | 8% | 5% | 30 days / 60 days |

**Balancing profit target vs. drawdown:**

The challenge is achieving the profit target while staying within the drawdown limits. On a $100,000 FTMO account:
- You need to gain $10,000 (10%)
- While never losing more than $10,000 (10% overall) or $5,000/day (5% daily)

This means you cannot "all-in" to hit the target quickly — one bad trade could breach the drawdown before you hit the goal.

**Optimal position sizing for challenges:**

With a 1% risk per trade and a 1:3 R:R, you need roughly 4–5 winning trades to hit a 10% target even with some losses. With 0.5% risk per trade, you have more buffer against the drawdown limits.

**Time pressure:**

A 30-day limit with a 10% target means you need an average of ~0.33%/day. Many experienced traders find this achievable with one solid trade every few days — consistency matters more than frequency.`,
    relatedTerms: ["prop-firm-challenge", "drawdown", "daily-drawdown", "position-sizing", "risk-reward-ratio"],
    relatedCalcSlugs: ["ftmo-drawdown-calculator", "fundednext-drawdown-calculator", "prop-firm-daily-drawdown-calculator"],
    keywords: ["prop firm profit target", "what is profit target trading", "ftmo 10% profit target", "how to hit profit target prop firm"],
  },

  {
    slug: "profit-split",
    term: "Profit Split",
    shortDef: "The percentage of profits a funded trader keeps versus what the prop firm takes — typically 80–90% to the trader.",
    body: `The profit split is the arrangement between a funded trader and the prop firm governing how profits are divided. Most prop firms offer 80–90% to the trader and keep 10–20%.

**Common profit split structures:**

| Firm | Trader Share | Firm Share | Notes |
|---|---|---|---|
| FTMO | 80–90% | 10–20% | 90% available via scaling plan |
| FundedNext | 80–85% | 15–20% | |
| E8 Funding | 80% | 20% | |
| BrightFunded | Up to 100% | 0–20% | Via scaling plan |

**Why prop firms take a cut:**

The prop firm provides capital (risk), infrastructure, and absorbs losses if the trader underperforms. The profit split is compensation for this risk provision.

**Scaling plans:**

Most firms offer scaling plans — as you consistently hit profit targets, your account size increases and sometimes your profit split improves. FTMO's scaling plan can increase funded account size from $100k to $200k with demonstrated consistency.

**The economics from a trader's perspective:**

On a $100,000 funded account generating 5%/month:
- Gross monthly profit: $5,000
- Trader's share (80%): $4,000
- Annual earnings at this rate: $48,000

On your own $100,000 account generating 5%/month:
- You keep 100%: $5,000/month or $60,000/year

The prop firm arrangement is most valuable when you cannot fund a large account yourself — you get $100k in capital for the price of a challenge fee ($200–$600).`,
    relatedTerms: ["prop-firm-challenge", "drawdown", "profit-target"],
    relatedCalcSlugs: ["ftmo-drawdown-calculator", "fundednext-drawdown-calculator"],
    keywords: ["prop firm profit split", "what is profit split trading", "ftmo profit split", "funded trader profit percentage"],
  },

  {
    slug: "r-multiple",
    term: "R-Multiple",
    shortDef: "A unit of measurement expressing trade outcomes in terms of initial risk — a +2R trade means you made twice your risk amount.",
    body: `R-multiples (R stands for "Risk") are a universal way to measure trade outcomes regardless of account size or position size. A trade that returns 2× your initial risk is called a +2R trade. A trade that loses your full risk amount is −1R.

**Why R-multiples matter:**

They allow you to evaluate strategies and track performance without worrying about dollar amounts. A trader risking $100/trade and a trader risking $1,000/trade can compare strategies on equal footing using R.

**Calculating R-multiple:**

> R = Trade P&L ÷ Initial Risk Amount

**Examples:**
- Risk $100, win $250 → R = 250/100 = **+2.5R**
- Risk $100, lose $100 → R = −100/100 = **−1R**
- Risk $100, lose $40 (stopped out early) → R = −40/100 = **−0.4R**
- Risk $100, win $500 → R = 500/100 = **+5R**

**Expected value in R:**

> EV = (Win Rate × Average Win R) − (Loss Rate × Average Loss R)

With 40% win rate, average win +3R, average loss −1R:
> EV = (0.40 × 3) − (0.60 × 1) = 1.20 − 0.60 = **+0.6R per trade**

Positive EV means the strategy is profitable over a large sample. Track your trades in R-multiples to identify which setups are actually positive EV.`,
    relatedTerms: ["risk-reward-ratio", "win-rate", "expected-value", "position-sizing"],
    relatedCalcSlugs: ["risk-reward-calculator", "crypto-position-size-calculator"],
    keywords: ["what is r multiple trading", "r multiple explained", "r multiple system trading", "how to use r multiples"],
  },

  {
    slug: "expected-value",
    term: "Expected Value (EV)",
    shortDef: "The average outcome of a strategy over many repetitions — positive EV means profitable long-term, negative EV means losing long-term.",
    body: `Expected value (EV) is the mathematical foundation of profitable trading. It tells you the average result per trade if you repeat the same strategy hundreds of times.

**Formula:**
> EV = (Win Rate × Average Win) − (Loss Rate × Average Loss)

**Example 1 — Positive EV strategy:**
- Win rate: 40%
- Average win: $300
- Average loss: $100

> EV = (0.40 × $300) − (0.60 × $100) = $120 − $60 = **+$60 per trade**

Over 100 trades: expected profit = $6,000.

**Example 2 — Negative EV strategy:**
- Win rate: 60%
- Average win: $100
- Average loss: $200

> EV = (0.60 × $100) − (0.40 × $200) = $60 − $80 = **−$20 per trade**

Despite winning 60% of the time, this strategy loses money long-term.

**Why high win rate ≠ positive EV:**

Many traders obsess over win rate while ignoring average win/loss sizes. A strategy winning 70% but with a 1:0.5 R:R has negative EV. A strategy winning 30% with a 1:4 R:R has strong positive EV.

**Practical application:**

To know if your strategy has positive EV, you need a sample of at least 50–100 trades. Calculate average win, average loss, and win rate from your trade history. If EV > fees, the strategy is viable.`,
    relatedTerms: ["win-rate", "risk-reward-ratio", "r-multiple", "position-sizing"],
    relatedCalcSlugs: ["risk-reward-calculator", "scalping-risk-reward-calculator"],
    keywords: ["what is expected value trading", "positive ev trading strategy", "expected value crypto", "how to calculate ev trading"],
  },

  {
    slug: "volatility",
    term: "Volatility",
    shortDef: "The degree of price variation over a given period — high volatility means larger, faster price swings; low volatility means stable, slow-moving prices.",
    body: `Volatility measures how much an asset's price fluctuates. For traders, volatility is a double-edged sword: it creates profit opportunities but also increases the risk of liquidation, stop-outs, and emotional decision-making.

**Measuring volatility:**

The most common measure is **Average True Range (ATR)** — the average distance between high and low prices over N periods (typically 14).

If BTC's 14-day ATR is $2,000, you can expect daily moves of roughly $2,000 on average.

**Crypto volatility vs. traditional assets:**

| Asset | Annual Volatility (approx.) |
|---|---|
| S&P 500 | 15–20% |
| Gold | 12–18% |
| Bitcoin | 50–80% |
| Altcoins (large cap) | 80–150% |
| Altcoins (small cap) | 150–500%+ |

**How volatility affects trading:**

- **Stop-loss placement**: Stops must be wide enough to survive normal volatility. An ATR-based stop (e.g., 1.5× ATR from entry) adapts to current market conditions.
- **Position sizing**: Higher volatility = wider stops = smaller position size to maintain the same dollar risk.
- **Liquidation distance**: High volatility increases the risk that price reaches your liquidation level even with a stop in place.

**Volatility regimes:**

Markets alternate between low-volatility consolidation and high-volatility expansion. Breakout strategies work best when volatility expands from a low base. Mean-reversion strategies work best in range-bound, low-volatility environments.`,
    relatedTerms: ["position-sizing", "stop-loss", "liquidation-price", "altcoin"],
    relatedCalcSlugs: ["crypto-position-size-calculator", "leverage-liquidation-calculator"],
    keywords: ["what is volatility crypto", "crypto volatility explained", "how volatility affects trading", "atr volatility crypto"],
  },

  {
    slug: "cost-basis",
    term: "Cost Basis",
    shortDef: "The original purchase price of an asset, used to calculate capital gains for tax purposes and to measure the profitability of a position.",
    body: `Cost basis is the total amount you paid to acquire an asset, including purchase price and any fees. It is the reference point for calculating profit/loss and is critical for tax reporting in most jurisdictions.

**Simple cost basis:**

Buy 0.5 BTC at $40,000 = cost basis of **$20,000** (or $40,000/BTC).

**Average cost basis (multiple purchases):**

| Purchase | BTC Amount | Price | Cost |
|---|---|---|---|
| Jan | 0.1 BTC | $40,000 | $4,000 |
| Mar | 0.1 BTC | $35,000 | $3,500 |
| May | 0.1 BTC | $25,000 | $2,500 |
| Total | 0.3 BTC | — | $10,000 |

**Average cost basis = $10,000 / 0.3 = $33,333/BTC**

**DCA and cost basis:**

Dollar-cost averaging directly improves your cost basis during downtrends — you buy more BTC per dollar spent when prices are lower. Over a bear market, systematic DCA typically results in a cost basis well below the average price during that period.

→ [Calculate your DCA average cost](/calculators/bitcoin-dca-calculator)

**Tax implications:**

Most jurisdictions tax the difference between your cost basis and your sale price as capital gains. Methods vary (FIFO, LIFO, specific identification) — consult a tax professional for your specific situation.

**Cost basis tracking:**

Exchanges provide transaction history exports. Tax software (Koinly, CoinTracker, etc.) can import these and calculate cost basis and gains automatically.`,
    relatedTerms: ["dca", "realized-pnl", "compounding"],
    relatedCalcSlugs: ["bitcoin-dca-calculator", "ethereum-dca-calculator", "dca-calculator"],
    keywords: ["what is cost basis crypto", "cost basis explained", "how to calculate cost basis crypto", "dca cost basis"],
  },

  {
    slug: "risk-management",
    term: "Risk Management",
    shortDef: "The system of rules and practices a trader uses to protect capital — encompassing position sizing, stop-loss placement, drawdown limits, and maximum daily loss rules.",
    body: `Risk management is the discipline that separates traders who survive long-term from those who blow up accounts. It is not about avoiding risk — it is about taking calculated risk within defined limits.

**Core pillars of trading risk management:**

**1. Position sizing**
Never risk more than 1–2% of your account on a single trade. With 1% risk, you can lose 10 trades in a row and still have 90% of your capital. With 10% risk, 10 losses = account gone.

**2. Stop-loss placement**
Every trade should have a predefined exit point where you know you're wrong. No stop = no maximum loss = unlimited downside.

**3. Daily loss limit**
Many professional traders stop trading after losing 2–3% in a single day. Preventing runaway losing sessions is as important as managing individual trades.

**4. Drawdown management**
Know your maximum acceptable drawdown from your account peak. Most professionals target keeping drawdown below 10–15% regardless of time horizon.

**5. Leverage control**
High leverage amplifies both gains and losses. Using 10× on every trade means one 10% move against you wipes your margin, even with a stop.

**The compounding effect of risk control:**

A trader who loses 20% needs 25% to recover. A trader who loses 50% needs 100% to recover. Keeping drawdowns small preserves the compounding base.

> "The first rule is not to lose. The second rule is not to forget the first rule." — Warren Buffett`,
    relatedTerms: ["position-sizing", "drawdown", "stop-loss", "daily-drawdown", "compounding"],
    relatedCalcSlugs: ["crypto-position-size-calculator", "risk-reward-calculator", "ftmo-drawdown-calculator"],
    keywords: ["what is risk management trading", "crypto risk management explained", "trading risk management rules", "how to manage risk crypto futures"],
  },

  {
    slug: "risk-per-trade",
    term: "Risk Per Trade",
    shortDef: "The maximum percentage or dollar amount of your account you are willing to lose on a single trade — the foundation of sound position sizing.",
    body: `Risk per trade is the most important variable in your trading system. It determines how much of your account can be lost in a single position, and directly governs the size of every trade you place.

**Common risk levels:**

| Trader Type | Risk Per Trade |
|---|---|
| Conservative | 0.25–0.5% |
| Standard retail | 0.5–1% |
| Aggressive | 1–2% |
| Reckless (avoid) | > 2% |

**Why 1% is widely recommended:**

At 1% risk per trade, you can lose 20 consecutive trades and still have 82% of your starting capital. At 5% risk, 20 consecutive losses leave you with only 36%.

The probability of 20 consecutive losses with a 40% win rate: approximately 0.004%. Manageable. The probability of 10 consecutive losses: 0.4% — possible in any trading career.

**Setting risk in dollar terms:**

On a $10,000 account with 1% risk:
> Maximum loss per trade = $10,000 × 1% = **$100**

Your position size is then calculated to ensure the stop-loss distance equals exactly $100.

**Adjusting risk per trade for prop firms:**

Most prop firm challenges require reducing risk per trade to account for the daily drawdown limit. If you have a 5% daily limit and are trading 3 setups per day, risk per trade should be 1–1.5% to preserve buffer for a bad sequence.`,
    relatedTerms: ["position-sizing", "drawdown", "stop-loss", "risk-management", "prop-firm-challenge"],
    relatedCalcSlugs: ["crypto-position-size-calculator", "bitcoin-position-size-calculator"],
    keywords: ["what is risk per trade", "risk per trade percentage", "how much to risk per trade crypto", "1 percent risk rule trading"],
  },

  {
    slug: "breakeven-win-rate",
    term: "Breakeven Win Rate",
    shortDef: "The minimum win rate needed for a strategy to break even given its risk/reward ratio — below this, the strategy loses money long-term.",
    body: `The breakeven win rate is the win percentage at which a strategy neither makes nor loses money over a large number of trades, given its specific risk/reward ratio.

**Formula:**
> Breakeven Win Rate = 1 / (1 + R:R)

Where R:R is expressed as reward ÷ risk.

**Breakeven win rates by R:R:**

| R:R Ratio | Breakeven Win Rate |
|---|---|
| 1:0.5 | 67% |
| 1:1 | 50% |
| 1:1.5 | 40% |
| 1:2 | 33% |
| 1:3 | 25% |
| 1:4 | 20% |
| 1:5 | 17% |

**How to use this:**

Before deploying a strategy live, calculate its breakeven win rate. Then ask: "Is my expected win rate realistically above this level?"

If you're targeting a 1:2 R:R, your strategy needs to win more than 33% of trades to be profitable. If backtesting shows a 45% win rate with 1:2 R:R — you have significant positive expected value.

**The implication for tight targets:**

Strategies with very tight take-profits (1:0.5 or 1:1) require win rates of 50–67% just to break even. These are difficult to achieve consistently and are very sensitive to fee drag, especially at higher frequencies.

Use the risk/reward calculator to find the breakeven win rate for any setup.`,
    relatedTerms: ["win-rate", "risk-reward-ratio", "expected-value", "r-multiple"],
    relatedCalcSlugs: ["risk-reward-calculator", "scalping-risk-reward-calculator"],
    keywords: ["breakeven win rate formula", "minimum win rate trading", "how to calculate breakeven win rate", "win rate needed for profit"],
  },

  {
    slug: "liquidity",
    term: "Liquidity",
    shortDef: "How easily an asset can be bought or sold without significantly moving its price — high liquidity means tight spreads, fast fills, and low slippage.",
    body: `Liquidity is the ease with which an asset can be traded in the market. In practice, a liquid market means your order fills instantly at the price you expect, with minimal impact on the price.

**Indicators of liquidity:**

| Indicator | High Liquidity | Low Liquidity |
|---|---|---|
| Bid-ask spread | Very tight (0.01–0.05%) | Wide (0.5–5%+) |
| Order book depth | Millions at each level | Hundreds at each level |
| Slippage on large orders | Minimal | Significant |
| Daily trading volume | Billions | Millions or less |

**Why liquidity matters for traders:**

- **Entry/exit efficiency**: Low liquidity means your order may fill at a worse price than shown (slippage)
- **Stop-loss reliability**: In illiquid markets, stop orders can gap through your price, resulting in worse fills
- **Position sizing**: Maximum position size scales with liquidity — trading 1% of daily volume in a low-cap altcoin can move the price significantly

**Liquidity tiers in crypto:**

1. **BTC/ETH** on Binance/Bybit: Deepest liquidity, minimal slippage even on large orders
2. **Large-cap altcoins** (SOL, BNB, XRP): Good liquidity, low slippage under $100k
3. **Mid-cap altcoins**: Moderate liquidity, relevant slippage on $10k+ orders
4. **Low-cap tokens**: Thin order books, significant price impact on small orders

For futures trading, stick to liquid pairs. The fee savings from trading illiquid altcoin pairs rarely compensate for the slippage and wider spreads.`,
    relatedTerms: ["slippage", "spread", "order-book", "market-cap"],
    relatedCalcSlugs: ["trading-fee-calculator", "crypto-position-size-calculator"],
    keywords: ["what is liquidity crypto", "liquidity trading explained", "crypto market liquidity", "how liquidity affects trading"],
  },

  {
    slug: "order-book",
    term: "Order Book",
    shortDef: "A real-time list of all pending buy and sell orders on an exchange, organised by price level — the visible supply and demand for an asset.",
    body: `The order book is a live record of every limit order that has been placed but not yet filled, sorted by price. It shows exactly who wants to buy and at what price, and who wants to sell and at what price.

**Structure:**

| Side | Name | Meaning |
|---|---|---|
| Buy orders | Bid | Highest price buyers will pay |
| Sell orders | Ask | Lowest price sellers will accept |

The gap between the highest bid and lowest ask is the **bid-ask spread**.

**Reading the order book:**

A typical BTC/USDT order book might show:
- 5 BTC offered at $50,010 (ask)
- 3 BTC bid at $49,990 (bid)

If you place a market buy, you immediately fill at $50,010 (the ask). If you place a limit buy at $49,990, your order joins the bid side and waits.

**What the order book reveals:**

- **Large buy walls**: Big limit orders clustered at a specific price level — potential support
- **Large sell walls**: Big sell orders at a specific price — potential resistance
- **Thin book**: Few orders at each level — expect higher slippage and sharper price moves

**Order book manipulation:**

Experienced traders know that large visible orders ("walls") are sometimes spoofed — placed to manipulate sentiment and then cancelled before execution. Don't trade purely on order book walls without confirming with other signals.`,
    relatedTerms: ["slippage", "spread", "liquidity", "order-types"],
    relatedCalcSlugs: ["trading-fee-calculator"],
    keywords: ["what is order book crypto", "order book trading explained", "how to read order book", "bid ask order book crypto"],
  },

  {
    slug: "scalping",
    term: "Scalping",
    shortDef: "A high-frequency trading style that targets very small price moves, often holding positions for seconds to minutes, relying on volume to accumulate profits.",
    body: `Scalping is a trading style focused on capturing very small price movements — often 0.05–0.5% — across a high volume of trades throughout the day. Scalpers aim for many small wins rather than a few large ones.

**Scalping characteristics:**

| Feature | Value |
|---|---|
| Trade duration | Seconds to minutes |
| Trades per session | 10–50+ |
| Typical R:R | 1:1 to 1:1.5 |
| Required win rate | 55–65%+ |
| Fee sensitivity | Very high |

**The fee problem with scalping:**

At 0.05% taker fee per side (0.10% round trip), your break-even move is already 0.10%. If you're targeting 0.2% profit per trade, fees consume 50% of your target. Scalping at higher fees (0.1%/0.1% spot) is nearly impossible to sustain profitably.

This is why scalpers who operate at scale use futures (lower fees) or exchanges with the lowest possible fees — like MEXC (0% maker, 0.010% taker).

**Infrastructure requirements:**

Professional scalping requires:
- Sub-100ms execution (fast internet, close to exchange servers)
- A platform with hotkeys for instant order entry
- Tight bid-ask spreads (liquid pairs only)
- Deep order books to avoid slippage

**Scalping vs. swing trading:**

| Aspect | Scalping | Swing Trading |
|---|---|---|
| Time commitment | Full-time (4–8h/session) | Part-time (30–60 min/day) |
| Fee sensitivity | Critical | Low |
| Suitable for beginners | No | Yes |
| Compatible with a day job | No | Yes |`,
    relatedTerms: ["swing-trading", "maker-fee", "spread", "win-rate", "risk-reward-ratio"],
    relatedCalcSlugs: ["scalping-risk-reward-calculator", "trading-fee-calculator"],
    keywords: ["what is scalping crypto", "scalping trading explained", "how to scalp crypto", "scalping strategy crypto"],
  },

  {
    slug: "swing-trading",
    term: "Swing Trading",
    shortDef: "A medium-term trading style that holds positions for hours to days, targeting larger price moves with better risk/reward than scalping.",
    body: `Swing trading captures "swings" — directional price moves that play out over hours to a few days. Traders enter when they identify a high-probability directional setup and exit at a target or stop, without monitoring tick-by-tick.

**Swing trading characteristics:**

| Feature | Value |
|---|---|
| Trade duration | Hours to days |
| Trades per week | 1–5 |
| Typical R:R | 1:2 to 1:4 |
| Required win rate | 35–50% |
| Fee sensitivity | Low |
| Suitable for beginners | Yes |
| Compatible with day job | Yes |

**Why swing trading suits most retail traders:**

Swing trading requires analysis (15–30 min), order placement, and periodic monitoring — not continuous screen time. A trader with a full-time job can swing trade effectively by setting stop-losses and take-profits in advance.

**Entry and exit approach:**

Swing traders typically use:
- **Entry**: Limit orders at key support/resistance levels or on pullbacks
- **Stop-loss**: Below the last swing low (for longs)
- **Take-profit**: At the next major resistance level, or using R multiples

**The key advantage over scalping:**

With a 1:3 R:R, swing traders only need to win 25% of trades to break even. This makes the strategy resilient to losing streaks and means every profitable run compounds meaningfully.

**Crypto swing trading considerations:**

24/7 markets mean gaps (sudden large moves) can happen overnight. Using isolated margin and appropriate stop-losses is essential to limit overnight risk on leveraged positions.`,
    relatedTerms: ["scalping", "risk-reward-ratio", "stop-loss", "take-profit", "position-sizing"],
    relatedCalcSlugs: ["swing-trading-risk-reward-calculator", "crypto-position-size-calculator"],
    keywords: ["what is swing trading crypto", "swing trading explained", "how to swing trade crypto", "swing trading vs scalping crypto"],
  },

  {
    slug: "hodl",
    term: "HODL",
    shortDef: "Crypto slang for holding an asset long-term regardless of price volatility — derived from a misspelling of 'hold' in a 2013 Bitcoin forum post.",
    body: `HODL originated in December 2013 when a Bitcoin forum user posted a drunken message titled "I AM HODLING" about refusing to sell during a crash. The spelling mistake became a meme and then a strategy.

**What HODL means in practice:**

HODLing means buying an asset with long-term conviction and holding through all volatility — not trading in and out, not reacting to short-term price movements.

**The case for HODLing:**

Long-term Bitcoin holders who bought and held through every bear market since 2013 have outperformed the vast majority of active traders. The logic:
1. Most traders underperform their own assets (fees, bad timing, emotional exits)
2. Bitcoin has had a positive CAGR over 4-year periods in every cycle
3. Taxes in most jurisdictions reward long-term holding

**The risk:**

HODLing only works if the asset you hold appreciates long-term. BTC and ETH have historical precedent. Holding altcoins that lost 95%+ through bear markets (and never recovered) while "HODLing" is not a strategy — it's a sunk cost.

**HODL vs. DCA:**

DCA is HODLing with a system — you HODL the accumulation and you systematically buy more over time. Most serious long-term crypto investors combine both: DCA into accumulation, then HODL through cycles.

**HODL vs. active trading:**

For most people without edge and time, HODLing BTC/ETH over 4-year horizons has historically outperformed active trading. If you don't have a demonstrably profitable trading strategy, HODLing is the default rational choice.`,
    relatedTerms: ["dca", "bull-market", "bear-market", "cost-basis"],
    relatedCalcSlugs: ["bitcoin-dca-calculator", "compounding-calculator"],
    keywords: ["what does hodl mean crypto", "hodl meaning bitcoin", "hodl strategy crypto", "hodl vs trading"],
  },

  {
    slug: "support-resistance",
    term: "Support and Resistance",
    shortDef: "Price levels where the market has historically reversed or stalled — support is where buyers have stepped in, resistance is where sellers have emerged.",
    body: `Support and resistance are the two most fundamental concepts in technical analysis. They represent price levels where supply and demand have historically been concentrated.

**Support:**

A support level is a price where buying pressure has been strong enough to stop a decline and cause a reversal. Buyers see this price as attractive; sellers become reluctant.

**Resistance:**

A resistance level is a price where selling pressure has been strong enough to stop a rally and cause a reversal. Sellers see this price as a good exit; buyers become cautious.

**How they form:**

- Previous swing highs and lows
- Round numbers ($50,000, $100,000 for BTC)
- High-volume price levels (visible in volume profiles)
- Moving averages (dynamic support/resistance)

**Support becoming resistance (and vice versa):**

Once a support level is broken, it often becomes resistance. Once resistance is broken, it often becomes support. This is called "role reversal."

**Using S/R for trade entries:**

Swing traders often enter:
- **Longs**: At or near support levels, with stop below support
- **Shorts**: At or near resistance levels, with stop above resistance

The R:R is maximised by entering close to these levels and targeting the next significant level.

**Limitations:**

Support and resistance are not precise price levels — they are **zones**. Prices often wick slightly through a level before reversing. Place stops with some buffer beyond the level, not right at it.`,
    relatedTerms: ["swing-trading", "stop-loss", "take-profit", "breakout"],
    relatedCalcSlugs: ["risk-reward-calculator", "crypto-position-size-calculator"],
    keywords: ["what is support and resistance crypto", "support resistance explained", "how to use support resistance trading", "support resistance levels crypto"],
  },

  {
    slug: "breakout",
    term: "Breakout",
    shortDef: "When price moves decisively above resistance or below support, often accompanied by increased volume — signalling a potential new directional trend.",
    body: `A breakout occurs when price closes beyond a key level (resistance or support) with conviction. Breakouts often signal the start of a new trend or the continuation of an existing one after consolidation.

**Types of breakouts:**

| Type | Description |
|---|---|
| Resistance breakout | Price closes above resistance — bullish signal |
| Support breakdown | Price closes below support — bearish signal |
| Range breakout | Price exits a defined consolidation range |
| Pattern breakout | Price exits a chart pattern (triangle, flag, wedge) |

**Volume confirmation:**

A breakout with significantly higher-than-average volume is more reliable than one on low volume. High volume signals strong conviction from market participants. Low-volume breakouts often "fake out" and reverse.

**False breakouts (fakeouts):**

A fakeout occurs when price briefly moves above resistance or below support, then immediately reverses. These are common traps in crypto markets — institutional traders deliberately trigger retail stop-losses and breakout buyers before reversing.

**Trading breakouts:**

- **Entry**: On the candle close above resistance (not the wick)
- **Stop-loss**: Below the breakout level (resistance becomes support)
- **Target**: Next major resistance level or measured move target

**Measured move target:**

For range breakouts, the expected move = height of the range. If a range spans $45,000–$50,000 ($5,000 range), the breakout target is approximately $50,000 + $5,000 = $55,000.`,
    relatedTerms: ["support-resistance", "consolidation", "volatility", "stop-loss"],
    relatedCalcSlugs: ["risk-reward-calculator", "crypto-position-size-calculator"],
    keywords: ["what is a breakout crypto", "breakout trading explained", "how to trade breakouts crypto", "breakout vs fakeout"],
  },

  {
    slug: "consolidation",
    term: "Consolidation",
    shortDef: "A period where price moves sideways within a defined range after a directional move — often preceding the next trend leg.",
    body: `Consolidation (also called ranging, base building, or sideways movement) is a phase where price oscillates between support and resistance without making new highs or lows. It follows impulsive moves as the market "catches its breath."

**What happens during consolidation:**

- Volume typically decreases
- Price oscillates between defined support and resistance
- Volatility contracts
- Traders are positioned and waiting for the next move

**Types of consolidation patterns:**

| Pattern | Shape | Breakout bias |
|---|---|---|
| Rectangle | Flat top and bottom | Either direction |
| Ascending triangle | Flat top, rising bottom | Upward |
| Descending triangle | Falling top, flat bottom | Downward |
| Symmetrical triangle | Converging both sides | Either direction |
| Flag / pennant | Short consolidation after sharp move | Continuation |

**Why consolidation matters:**

Consolidation builds the energy for the next move. The longer and tighter the consolidation, the more significant the eventual breakout tends to be. Breakouts from multi-week consolidations tend to produce stronger and more sustained moves.

**Trading consolidation:**

Two strategies:
1. **Range trading**: Buy at the bottom of the range, sell at the top — profits from the oscillation
2. **Breakout trading**: Wait for the break of support or resistance and trade the new trend

For most traders, the breakout approach offers better R:R because you can place a tight stop just inside the range after the breakout.`,
    relatedTerms: ["breakout", "support-resistance", "volatility", "swing-trading"],
    relatedCalcSlugs: ["risk-reward-calculator"],
    keywords: ["what is consolidation crypto", "consolidation trading explained", "range trading crypto", "consolidation before breakout"],
  },

  {
    slug: "bitcoin-halving",
    term: "Bitcoin Halving",
    shortDef: "A programmed event occurring approximately every 4 years where the Bitcoin block reward paid to miners is cut in half — reducing new supply issuance.",
    body: `The Bitcoin halving is a fundamental supply mechanism built into Bitcoin's protocol. Approximately every 210,000 blocks (~4 years), the reward that miners receive for validating transactions is cut in half.

**Historical halvings:**

| Date | Block Reward | BTC Price (approx.) |
|---|---|---|
| 2012 | 50 → 25 BTC | $12 → $1,000+ (1 year later) |
| 2016 | 25 → 12.5 BTC | $650 → $20,000 (1.5 years later) |
| 2020 | 12.5 → 6.25 BTC | $8,500 → $69,000 (1.5 years later) |
| 2024 | 6.25 → 3.125 BTC | ~$60,000 → TBD |

**Why halvings affect price:**

The simple supply/demand argument: if demand remains constant but new supply is halved, price should rise. Historically, halvings have preceded significant bull markets — though the timing varies.

**Caveats:**

The "halvings cause bull markets" narrative is widely known and priced in to some degree. Whether each successive halving has diminishing price impact is actively debated.

**After 21 million BTC:**

The final Bitcoin will be mined around 2140. After that, miners are compensated entirely by transaction fees. This is a long-term consideration for Bitcoin's security model.

**Trading around halvings:**

Many traders attempt to position before and after halvings. Historical data suggests buying 6–12 months before the halving and selling 12–18 months after has been profitable — but past cycles do not guarantee future performance.`,
    relatedTerms: ["bull-market", "dca", "hodl", "altcoin"],
    relatedCalcSlugs: ["bitcoin-dca-calculator", "compounding-calculator"],
    keywords: ["what is bitcoin halving", "bitcoin halving explained", "how halving affects bitcoin price", "bitcoin halving history"],
  },

  {
    slug: "whale",
    term: "Whale",
    shortDef: "A trader or entity holding a large enough position to influence market prices through their buying or selling activity.",
    body: `In crypto, a whale is an entity — individual, fund, exchange, or institution — holding enough of an asset to move its price when they buy or sell. The term comes from the contrast with smaller traders ("fish" or "shrimp").

**What counts as a whale:**

| Asset | Approximate whale threshold |
|---|---|
| Bitcoin | 1,000+ BTC ($50M+) |
| Ethereum | 10,000+ ETH |
| Mid-cap altcoin | Often 1–2% of supply |
| Low-cap token | Much less — 0.1% of supply can move price |

**How whales affect markets:**

- **Price manipulation**: Whales can sell large amounts to crash the price, then re-buy cheaper
- **Liquidation hunting**: Large players know where retail stop-losses cluster and can temporarily push price to those levels
- **Order book spoofing**: Placing and cancelling large orders to create false impressions of supply or demand

**On-chain whale tracking:**

For Bitcoin and Ethereum, on-chain data shows wallet movements. Large transfers to exchanges often precede selling. Large transfers off exchanges to cold wallets often indicate accumulation. Tools like Glassnode, Whale Alert, and CryptoQuant track this.

**Protecting yourself from whale activity:**

- Don't place obvious stop-losses at round numbers — whales know that's where they cluster
- Use limit orders instead of market orders to avoid being filled at manipulated wicks
- On low-cap tokens, be aware that volume and price can be orchestrated`,
    relatedTerms: ["liquidity", "market-cap", "order-book", "slippage"],
    relatedCalcSlugs: ["crypto-position-size-calculator"],
    keywords: ["what is a whale crypto", "crypto whale meaning", "how whales affect crypto price", "whale trading crypto"],
  },

  {
    slug: "defi",
    term: "DeFi (Decentralised Finance)",
    shortDef: "Financial services — lending, borrowing, trading, yield — built on blockchain smart contracts, operating without banks or centralised intermediaries.",
    body: `DeFi refers to a category of financial applications built on blockchains (primarily Ethereum) that operate via smart contracts rather than traditional financial intermediaries. Anyone with a wallet and internet connection can access them.

**Core DeFi categories:**

| Category | Description | Examples |
|---|---|---|
| Decentralised exchanges (DEX) | Swap tokens without a centralised exchange | Uniswap, Curve |
| Lending / borrowing | Lend assets to earn yield or borrow against collateral | Aave, Compound |
| Yield farming | Provide liquidity to earn protocol rewards | Various |
| Derivatives | Trade perpetuals or options on-chain | dYdX, GMX |
| Stablecoins | Decentralised stablecoin issuance | DAI, FRAX |

**DeFi vs. CeFi (Centralised Finance):**

| Aspect | DeFi | CeFi (Binance, Bybit, etc.) |
|---|---|---|
| Custody | You control keys | Exchange holds funds |
| KYC required | No | Yes |
| Counterparty risk | Smart contract risk | Exchange insolvency risk |
| Speed of innovation | Fast | Slower |
| Fees | Variable (gas) | Fixed |

**Risks in DeFi:**

- Smart contract bugs and exploits (billions lost historically)
- Rug pulls on new protocols
- Impermanent loss in liquidity provision
- High gas fees on Ethereum during congestion

**DeFi relevance for futures traders:**

On-chain perpetuals (GMX, dYdX) allow leverage trading without KYC. However, liquidity and execution quality are generally inferior to centralised exchanges for retail-size trades.`,
    relatedTerms: ["stablecoin", "altcoin", "perpetual-futures"],
    relatedCalcSlugs: ["trading-fee-calculator"],
    keywords: ["what is defi crypto", "decentralised finance explained", "how defi works", "defi vs cefi crypto"],
  },

  {
    slug: "maker-fee",
    term: "Maker Fee",
    shortDef: "The fee charged when you place a limit order that adds liquidity to the order book — typically lower than taker fees as an incentive for providing liquidity.",
    body: `A maker fee applies when your order is placed on the order book and waits for a counterparty to fill it. By "making" liquidity available, you help the exchange function — in return, you pay a lower fee (or in some cases, receive a rebate).

**When you pay maker fees:**

You pay maker fees when you place a limit order that does NOT immediately fill:
- Placing a buy limit order below the current price
- Placing a sell limit order above the current price

Your order rests in the order book until price reaches it.

**Maker fee rates across major exchanges:**

| Exchange | Futures Maker Fee |
|---|---|
| MEXC | **0.000%** |
| Phemex | 0.010% |
| Binance | 0.020% |
| Bybit | 0.020% |
| OKX | 0.020% |
| KuCoin | 0.020% |
| BingX | 0.020% |

**Maker vs. taker fees:**

Maker fees are always lower than taker fees on the same exchange. The difference exists because exchanges want to incentivise liquidity provision — tight spreads and deep order books attract more traders.

**Maximising maker fills:**

- Enter limit orders slightly inside the spread (not at the market price)
- Be patient — maker fills take time in slower markets
- In high-volatility conditions, market orders may be necessary at the cost of taker fees

Using maker orders consistently can cut your annual trading costs by 30–60% depending on the exchange.

→ [Calculate maker fee impact](/calculators/trading-fee-calculator)`,
    relatedTerms: ["taker-fee", "funding-rate", "spread", "order-types"],
    relatedCalcSlugs: ["trading-fee-calculator", "bybit-trading-fee-calculator", "binance-trading-fee-calculator"],
    keywords: ["what is maker fee crypto", "maker fee trading explained", "maker vs taker fee", "how to pay maker fee"],
  },

  {
    slug: "taker-fee",
    term: "Taker Fee",
    shortDef: "The fee charged when your order immediately fills against existing orders in the book — you are 'taking' liquidity by demanding immediate execution.",
    body: `A taker fee applies when your order fills immediately against existing orders in the order book. You are removing liquidity — in return, you pay a higher fee than makers.

**When you pay taker fees:**

- Placing a market order (always a taker)
- Placing a limit order priced at or beyond the current market price (fills immediately)
- Stop-market orders triggered by price movement

**Taker fee rates across major exchanges:**

| Exchange | Futures Taker Fee |
|---|---|
| MEXC | **0.010%** |
| Binance | 0.040% |
| OKX | 0.050% |
| BingX | 0.050% |
| Bybit | 0.055% |
| KuCoin | 0.060% |
| Phemex | 0.060% |

**Annual taker fee cost at $100k monthly volume:**

| Exchange | Annual Taker Cost |
|---|---|
| MEXC | $120 |
| Binance | $480 |
| OKX/BingX | $600 |
| Bybit | $660 |
| KuCoin/Phemex | $720 |

**Reducing taker fee exposure:**

The best way to reduce taker fees is to use limit orders for planned entries and exits. Reserve market orders for urgent situations (emergency exits, fast-moving stops). For active traders, this single habit can save hundreds to thousands of dollars annually.`,
    relatedTerms: ["maker-fee", "funding-rate", "slippage", "order-types"],
    relatedCalcSlugs: ["trading-fee-calculator", "mexc-trading-fee-calculator", "bybit-trading-fee-calculator"],
    keywords: ["what is taker fee crypto", "taker fee explained", "maker vs taker fee crypto", "how to reduce taker fees"],
  },
];

export function getTermBySlug(slug: string): GlossaryTerm | undefined {
  return glossaryTerms.find((t) => t.slug === slug);
}
