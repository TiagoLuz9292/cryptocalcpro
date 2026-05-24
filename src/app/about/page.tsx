import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BarChart2, Shield, Calculator, TrendingUp } from "lucide-react";
import { calculators } from "@/data/calculators";
import { getAllPosts } from "@/lib/content/mdx";

export const metadata: Metadata = {
  title: "About TradeFeeCalc",
  description: "TradeFeeCalc is a free suite of professional crypto trading calculators built by traders, for traders. Position sizing, liquidation prices, fees, drawdown, DCA and more.",
  robots: { index: true, follow: true },
};

const pillars = [
  {
    icon: Calculator,
    title: "Precise Tools",
    body: "Every calculator is built around the actual math traders use — not simplified approximations. Position sizing uses exact stop-loss distance. Liquidation prices use real maintenance margin rates per exchange.",
  },
  {
    icon: Shield,
    title: "No Data Collected",
    body: "Your account size, trade sizes, and risk parameters never leave your device. All calculations run entirely in your browser. We store nothing.",
  },
  {
    icon: TrendingUp,
    title: "Built for Active Traders",
    body: "Designed for crypto futures traders, prop firm challengers, and DCA investors who need accurate numbers before they place a trade — not after.",
  },
  {
    icon: BarChart2,
    title: "Always Free",
    body: "Every tool on TradeFeeCalc is free, with no account required. We are funded through advertising and affiliate partnerships with exchanges listed on the site.",
  },
];

export default function AboutPage() {
  const totalCalcs = calculators.length;
  const totalPosts = getAllPosts().length;

  return (
    <div className="container mx-auto max-w-3xl px-4 py-12">

      {/* Header */}
      <div className="mb-12">
        <h1 className="text-3xl font-bold tracking-tight mb-4">About TradeFeeCalc</h1>
        <p className="text-muted-foreground leading-relaxed text-base">
          TradeFeeCalc is a free suite of professional trading calculators built for crypto
          futures traders, prop firm challengers, and long-term investors who need precise,
          instant calculations before they act.
        </p>
      </div>

      {/* Why it exists */}
      <section className="mb-12 space-y-4">
        <h2 className="text-xl font-bold">Why We Built This</h2>
        <p className="text-muted-foreground leading-relaxed">
          Most traders know they should calculate their position size before entering a trade.
          Most don&apos;t — because the tools available are either buried inside exchange
          interfaces, inaccurate, or too slow to use in the moment.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          TradeFeeCalc started as a personal toolbox: a set of calculators that solve the
          real problems that come up when you&apos;re actively trading crypto futures. What is my
          correct position size for this stop loss? At what price do I get liquidated? How much
          has my prop firm drawdown budget been eaten by today&apos;s trades? What are my actual
          fees costing me per year?
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Those questions deserve precise answers, instantly. That&apos;s what this site is.
        </p>
      </section>

      {/* Stats */}
      <section className="mb-12 grid grid-cols-2 sm:grid-cols-3 gap-4">
        {[
          { value: `${totalCalcs}+`, label: "Free calculators" },
          { value: `${totalPosts}+`, label: "Trading guides" },
          { value: "0", label: "Data collected" },
        ].map((stat) => (
          <div
            key={stat.label}
            className="rounded-xl border border-border bg-card p-5 text-center"
          >
            <p className="text-3xl font-bold text-primary mb-1">{stat.value}</p>
            <p className="text-xs text-muted-foreground">{stat.label}</p>
          </div>
        ))}
      </section>

      {/* Pillars */}
      <section className="mb-12 space-y-4">
        <h2 className="text-xl font-bold">What We Stand For</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {pillars.map((p) => (
            <div key={p.title} className="rounded-xl border border-border bg-card p-5 space-y-2">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-border bg-secondary">
                  <p.icon className="h-4 w-4 text-primary" />
                </div>
                <h3 className="font-semibold text-sm">{p.title}</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Affiliate disclosure */}
      <section className="mb-12 space-y-3">
        <h2 className="text-xl font-bold">Affiliate Disclosure</h2>
        <p className="text-muted-foreground leading-relaxed">
          TradeFeeCalc is free to use and always will be. To keep it running, some pages
          contain affiliate links to cryptocurrency exchanges. If you sign up through one of
          these links, we may receive a commission — at no cost to you.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Our tools, articles, and comparisons are written independently. Affiliate relationships
          do not influence which calculators we build, what we write, or how we present
          information. We only list exchanges we consider reputable.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          The site also displays advertisements served by Google AdSense. For details on how
          advertising data is handled, see our{" "}
          <Link href="/privacy-policy" className="text-primary hover:underline">
            Privacy Policy
          </Link>
          .
        </p>
      </section>

      {/* Disclaimer */}
      <section className="mb-12 rounded-xl border border-border bg-card/50 p-5 space-y-2">
        <h2 className="text-base font-semibold">Financial Disclaimer</h2>
        <p className="text-sm text-muted-foreground leading-relaxed">
          All tools, calculators, articles, and comparisons on TradeFeeCalc are provided for
          educational and informational purposes only. Nothing on this site constitutes financial
          advice or a recommendation to buy, sell, or hold any asset. Crypto trading carries
          significant risk of loss. Always do your own research.
        </p>
      </section>

      {/* CTA */}
      <div className="flex flex-wrap gap-3">
        <Link
          href="/calculators"
          className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
        >
          Browse all calculators
          <ArrowRight className="h-4 w-4" />
        </Link>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 rounded-lg border border-border bg-secondary/50 px-4 py-2.5 text-sm font-medium hover:border-primary/40 hover:bg-secondary transition-colors"
        >
          Get in touch
        </Link>
      </div>

    </div>
  );
}
