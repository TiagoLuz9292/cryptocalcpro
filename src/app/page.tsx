import Link from "next/link";
import { calculators } from "@/data/calculators";
import { categories } from "@/data/categories";
import { comparisons } from "@/data/comparisons";
import { getAllPosts } from "@/lib/content/mdx";
import { ArrowRight, BarChart2, Shield, TrendingUp, Zap } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const features = [
  {
    icon: Zap,
    title: "Instant Results",
    description: "All calculations run in your browser. Zero latency, zero server calls.",
  },
  {
    icon: Shield,
    title: "No Data Stored",
    description: "Your trade data never leaves your device. We log nothing.",
  },
  {
    icon: TrendingUp,
    title: "URL Shareable",
    description: "Share any pre-filled calculator with your team via URL — inputs included.",
  },
  {
    icon: BarChart2,
    title: "Built for Traders",
    description: "Every tool solves a real problem: sizing, drawdown, liquidation, fees.",
  },
];

export default function HomePage() {
  const FEATURED_SLUGS = [
    "crypto-position-size-calculator",
    "leverage-liquidation-calculator",
    "trading-fee-calculator",
    "ftmo-drawdown-calculator",
    "risk-reward-calculator",
    "bitcoin-dca-calculator",
    "bybit-trading-fee-calculator",
    "compounding-calculator",
  ];
  const featuredCalcs = FEATURED_SLUGS
    .map((slug) => calculators.find((c) => c.slug === slug))
    .filter(Boolean) as typeof calculators;
  const recentPosts = getAllPosts().slice(0, 3);
  const totalCalcs = calculators.length;

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border/50">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent pointer-events-none" />
        <div className="container mx-auto max-w-5xl px-4 py-20 md:py-28">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs text-primary font-medium mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              {totalCalcs} Free Trading Tools
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-4">
              Crypto Trading Calculators for Serious Traders
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl">
              Position sizing, liquidation prices, prop firm drawdown limits, DCA averages, fee impact,
              and compounding — precise tools for every decision. Free, instant, shareable by URL.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/calculators" className={cn(buttonVariants({ size: "lg" }))}>
                View All Calculators
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                href="/calculators/crypto-position-size-calculator"
                className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
              >
                Position Size Calculator
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Calculators */}
      <section className="container mx-auto max-w-5xl px-4 py-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold">Popular Calculators</h2>
          <Link
            href="/calculators"
            className="text-sm text-muted-foreground hover:text-foreground flex items-center gap-1 transition-colors"
          >
            All {totalCalcs} tools <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {featuredCalcs.map((calc) => (
            <Link
              key={calc.slug}
              href={`/calculators/${calc.slug}`}
              className="group rounded-xl border border-border bg-card p-5 hover:border-primary/40 hover:bg-secondary/20 transition-all"
            >
              <p className="font-semibold leading-tight mb-2">{calc.shortName}</p>
              <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                {calc.description}
              </p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-xs text-muted-foreground capitalize">
                  {categories.find((c) => c.slug === calc.category)?.name}
                </span>
                <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="border-t border-border/50 bg-card/30">
        <div className="container mx-auto max-w-5xl px-4 py-16">
          <h2 className="text-2xl font-bold mb-8 text-center">Built for Professional Traders</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f) => (
              <div key={f.title} className="space-y-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-card">
                  <f.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-semibold text-sm">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Browse by Category */}
      <section className="container mx-auto max-w-5xl px-4 py-16">
        <h2 className="text-2xl font-bold mb-8">Browse by Category</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {categories.map((cat) => {
            const toolCount = calculators.filter((c) => c.category === cat.slug).length;
            if (toolCount === 0) return null;
            return (
              <Link
                key={cat.slug}
                href={`/category/${cat.slug}`}
                className="group rounded-lg border border-border bg-card p-4 hover:border-primary/40 hover:bg-secondary/20 transition-all"
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-sm">{cat.name}</h3>
                  <span className="text-xs text-muted-foreground bg-secondary px-2 py-0.5 rounded-full">
                    {toolCount} tools
                  </span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">{cat.description}</p>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Compare section */}
      <section className="border-t border-border/50 bg-card/30">
        <div className="container mx-auto max-w-5xl px-4 py-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold">Side-by-Side Comparisons</h2>
              <p className="text-sm text-muted-foreground mt-1">
                Prop firms, leverage levels, exchanges — compared objectively.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {comparisons.map((comp) => (
              <Link
                key={comp.slug}
                href={`/compare/${comp.slug}`}
                className="group rounded-lg border border-border bg-card p-4 hover:border-primary/40 hover:bg-secondary/20 transition-all flex items-center justify-between gap-2"
              >
                <span className="text-sm font-medium">{comp.title}</span>
                <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all shrink-0" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Recent from blog */}
      {recentPosts.length > 0 && (
        <section className="container mx-auto max-w-5xl px-4 py-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold">From the Blog</h2>
            <Link
              href="/blog"
              className="text-sm text-muted-foreground hover:text-foreground flex items-center gap-1 transition-colors"
            >
              All articles <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {recentPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group rounded-xl border border-border bg-card p-5 hover:border-primary/40 hover:bg-secondary/20 transition-all flex flex-col gap-2"
              >
                <span className="text-xs text-primary/80 bg-primary/10 px-2 py-0.5 rounded-full self-start capitalize">
                  {post.category}
                </span>
                <p className="font-semibold text-sm leading-snug line-clamp-2 group-hover:text-primary transition-colors">
                  {post.title}
                </p>
                <p className="text-xs text-muted-foreground">{post.readingTime}</p>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* SEO footer text */}
      <section className="border-t border-border/50">
        <div className="container mx-auto max-w-4xl px-4 py-16">
          <div className="space-y-4">
            <h2 className="text-xl font-bold">Professional Trading Calculators — Free</h2>
            <p className="text-muted-foreground leading-relaxed text-sm">
              Precise risk management starts before you place a trade. Our calculators give you
              exact position sizes based on your account balance and stop loss placement, liquidation
              prices for any leverage level, prop firm drawdown budgets in real time, and the true
              cost of trading fees on your P&amp;L.
            </p>
            <p className="text-muted-foreground leading-relaxed text-sm">
              Every tool works instantly in your browser — no account required, no data stored.
              Inputs are serialized to the URL so you can share pre-filled calculations with your
              trading group or save setups for later reference.
            </p>
            <p className="text-muted-foreground leading-relaxed text-sm">
              Used by prop firm traders navigating FTMO, MyFundedFX, and TopStep evaluations,
              by crypto futures traders managing leverage on Bybit and Binance, and by long-term
              investors calculating DCA average costs across Bitcoin, Ethereum, and Solana.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
