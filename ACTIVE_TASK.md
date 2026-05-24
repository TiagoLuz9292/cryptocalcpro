# ACTIVE TASK: Programmatic SEO + Utility Tools Platform

**Status:** SESSION 3 COMPLETE — SCALING PHASE STARTING  
**Last Updated:** 2026-05-24  
**Build Status:** PASSING — 111 static pages generated

---

## MISSION

Build a production-ready programmatic SEO + utility tools platform focused on crypto trading, risk management, prop firm calculators, and finance utilities. Primary goal: monetization via display ads (AdSense/Ezoic) and affiliate commissions from crypto exchanges and prop firms.

---

## CURRENT STATE (111 static pages)

### Infrastructure ✅
- Next.js 16 (App Router, TypeScript, Tailwind, shadcn/ui base-nova)
- `allowedDevOrigins` set for WSL2 IP (172.22.109.69)

### Content ✅
- 50 calculators (7 base + 43 variants)
- 25 blog articles
- 8 comparison pages
- 18 glossary terms
- 7 category pages with full intro copy

### UX / SEO ✅
- Calculator search bar (instant filter)
- Blog category filter
- Skip-to-content, aria-current, aria-pressed, aria-labels (Lighthouse-ready)
- Dynamic sitemap, JSON-LD, OG images, breadcrumbs
- Related blog posts on every calculator page
- Footer: Brand | Calculators | Categories | Compare | Resources + Glossary

### Calculator improvements ✅
- Position size calculators now support risk input in both **% of account** AND **fixed $ amount**
  - `riskMode` select field added to base + all 9 variants
  - `riskDollar` field added alongside `riskPercent`
  - Calc auto-switches logic based on selected mode
  - Results show both "Max Dollar Loss" and "Account Risk %"

---

## AFFILIATE LINK STRATEGY

### Plan
Every exchange-related calculator and comparison page should reference the relevant exchange affiliate link. The `AffiliateBlock` component is already wired into every calculator page — it just needs real URLs once approved.

### Where affiliate links appear (already built)
- Every calculator page: `AffiliateBlock` component (currently placeholder)
- Every comparison page: verdict section + related tools
- Blog articles: inline contextual links (manual placement per article)
- Glossary terms: related calculators section

### Affiliate programs to apply for (priority order)

**Exchanges:**
| Exchange | Program | Est. Commission | Where to apply |
|---|---|---|---|
| Bybit | Bybit Partners | 30% revenue share (recurring) | bybit.com → Partners |
| Binance | Binance Affiliate | 20–50% revenue share | binance.com → Affiliates |
| OKX | OKX Affiliate | 30% revenue share | okx.com → Affiliates |
| Kraken | Kraken Affiliate | Revenue share | kraken.com → Affiliate |
| KuCoin | KuCoin Affiliate | 20–40% share | kucoin.com → Affiliate |
| Bitget | Bitget Affiliate | 30% share | bitget.com → Affiliate |
| MEXC | MEXC Affiliate | 40% share | mexc.com → Affiliate |
| Gate.io | Gate.io Affiliate | 40% share | gate.io → Affiliate |
| BingX | BingX Partners | 40% share | bingx.com → Partners |
| Phemex | Phemex Affiliate | 30% share | phemex.com → Affiliate |

**Prop Firms:**
| Firm | Commission | Where to apply |
|---|---|---|
| FTMO | ~30% of challenge fee (~$90–$270/referral) | ftmo.com → Affiliate |
| MyFundedFX | ~25–30% of challenge fee | myfundedfx.com → Affiliate |
| FundedNext | ~25% of challenge fee | fundednext.com → Affiliate |
| Apex Trader | CPA per signup | apextraderfunding.com → Affiliate |
| The5ers | Commission per challenge | the5ers.com → Affiliate |
| E8 Funding | ~30% of challenge fee | e8funding.com → Affiliate |

### Storing affiliate links (when approved)
Add to `src/data/affiliates.ts` (create this file) as a keyed object:
```ts
export const affiliateLinks = {
  bybit: "https://partner.bybit.com/b/YOURCODE",
  binance: "https://accounts.binance.com/register?ref=YOURCODE",
  okx: "https://okx.com/join/YOURCODE",
  ftmo: "https://trader.ftmo.com/?affiliates=YOURCODE",
  // etc
}
```
Then pass the relevant link into `AffiliateBlock` on each calculator page.

---

## NEXT CONTENT SCALING (Priority order)

### Phase A — Exchange content (highest affiliate value)
Each exchange gets: fee calculator variant + comparison page + blog article

**Fee calculator variants to add:**
- [ ] KuCoin fee calculator
- [ ] Gate.io fee calculator
- [ ] MEXC fee calculator
- [ ] Bitget fee calculator
- [ ] Coinbase fee calculator
- [ ] Kraken fee calculator
- [ ] Phemex fee calculator
- [ ] BingX fee calculator

**Exchange comparison pages to add:**
- [ ] Bybit vs KuCoin
- [ ] Binance vs Coinbase
- [ ] OKX vs Bitget
- [ ] Kraken vs Coinbase (US-focused)
- [ ] KuCoin vs Gate.io

**Exchange blog articles to add:**
- [ ] "Bybit fees explained 2026"
- [ ] "Binance vs Coinbase: which is better for beginners"
- [ ] "Kraken review for crypto futures traders"
- [ ] "Best crypto exchange for low fees"
- [ ] "How to reduce trading fees on Binance"

### Phase B — More coin calculators (position size + liquidation + DCA)
Zero new code — just data entries:
- [ ] MATIC/POL position size + liquidation + DCA
- [ ] ARB position size + liquidation + DCA
- [ ] OP position size + liquidation + DCA
- [ ] NEAR position size + liquidation + DCA
- [ ] APT position size + liquidation + DCA
- [ ] SUI position size + liquidation + DCA
- [ ] INJ position size + liquidation + DCA
- [ ] TIA position size + liquidation + DCA
- [ ] ATOM position size + liquidation + DCA

### Phase C — More prop firm content
- [ ] Apex Trader Funding drawdown calculator
- [ ] FundedNext drawdown calculator
- [ ] The5ers drawdown calculator
- [ ] "Best prop firms 2026" blog article (high-volume)
- [ ] "How to pass FTMO challenge" blog article (high-volume)
- [ ] "Apex vs FTMO" comparison
- [ ] "FundedNext vs MyFundedFX" comparison

### Phase D — High-traffic blog articles
- [ ] "Best leverage for swing trading crypto"
- [ ] "How to avoid liquidation on Bybit"
- [ ] "Best crypto exchange for beginners 2026"
- [ ] "Prop firm vs personal account: which is better"
- [ ] "How to read funding rates on Bybit"
- [ ] "FTMO vs E8 Funding: which is easier to pass"

---

## MONETIZATION ACTIVATION CHECKLIST

- [ ] Buy domain + deploy
- [ ] Apply for affiliate programs (see list above) — do NOW, approval takes 1–7 days
- [ ] Once approved: create `src/data/affiliates.ts` with real URLs
- [ ] Update `AffiliateBlock` to accept and use affiliate URL prop
- [ ] Set `NEXT_PUBLIC_AFFILIATES_ENABLED=true`
- [ ] Apply for Google AdSense (after 30 days of live content)
- [ ] Set `NEXT_PUBLIC_ADS_ENABLED=true` + real unit IDs
- [ ] Consider Ezoic (better CPM than AdSense, accepts at 10k sessions/month)

---

## DEPLOYMENT CHECKLIST

- [ ] Buy domain (cryptocalcpro.com or similar)
- [ ] Update `siteConfig.url` in `src/data/site.ts`
- [ ] Deploy to Vercel (recommended) or Docker on VPS
- [ ] Submit sitemap to Google Search Console
- [ ] Submit sitemap to Bing Webmaster Tools
- [ ] Set env vars: `NEXT_PUBLIC_SITE_URL`, `NEXT_PUBLIC_ADS_ENABLED`, `NEXT_PUBLIC_AFFILIATES_ENABLED`
- [ ] Add Vercel Analytics or Plausible

---

## TECH NOTES

### shadcn/ui base-nova
- Button no `asChild` — use `Link` + `buttonVariants`
- Select `onValueChange` returns `string | null` — always null-coalesce: `v ?? ""`

### Key decisions
- Dark mode: `className="dark"` on `<html>` (no toggle)
- URL state: `CalculatorShell` syncs inputs to searchParams
- WSL2: `allowedDevOrigins: ["172.22.109.69"]` required in `next.config.ts`

### Adding new content
**New calculator variant:** Add entry to `src/data/calculators.ts` with `parentSlug` → `npm run build`
**New blog article:** Create `content/blog/[slug].mdx` → `npm run build`
**New comparison:** Add entry to `src/data/comparisons.ts` → `npm run build`
**New glossary term:** Add entry to `src/data/glossary.ts` → `npm run build`

---

## QUICK COMMANDS
```bash
npm run dev        # Dev server (172.22.109.69:3000)
npm run build      # Production build
npm run start      # Prod server
```
