"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { siteConfig } from "@/data/site";
import { Calculator, BarChart2, BookOpen, Menu, X, GitCompareArrows, BookMarked, ChevronDown } from "lucide-react";

const TOP_CALCULATORS = [
  { href: "/calculators/crypto-position-size-calculator", label: "Position Size" },
  { href: "/calculators/leverage-liquidation-calculator", label: "Liquidation Price" },
  { href: "/calculators/trading-fee-calculator",          label: "Trading Fees" },
  { href: "/calculators/risk-reward-calculator",          label: "Risk / Reward" },
  { href: "/calculators/ftmo-drawdown-calculator",        label: "FTMO Drawdown" },
];

const secondaryNavLinks = [
  { href: "/compare",  label: "Compare",  icon: GitCompareArrows },
  { href: "/blog",     label: "Blog",     icon: BookOpen },
  { href: "/glossary", label: "Glossary", icon: BookMarked },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex h-16 items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 font-bold text-lg tracking-tight hover:opacity-80 transition-opacity"
            onClick={() => setOpen(false)}
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
              <BarChart2 className="h-4 w-4 text-primary-foreground" />
            </div>
            <span>{siteConfig.name}</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6" aria-label="Main navigation">

            {/* Calculators with dropdown */}
            <div className="relative group">
              <Link
                href="/calculators"
                aria-current={pathname.startsWith("/calculators") ? "page" : undefined}
                className={`flex items-center gap-1.5 text-sm transition-colors ${
                  pathname.startsWith("/calculators")
                    ? "text-foreground font-medium"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <Calculator className="h-4 w-4" />
                Calculators
                <ChevronDown className="h-3 w-3 transition-transform duration-200 group-hover:rotate-180" />
              </Link>

              <div className="absolute top-full left-0 mt-1 w-52 rounded-xl border border-border bg-background/95 backdrop-blur-sm shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 pt-2">
                <div className="p-1.5">
                  {TOP_CALCULATORS.map(({ href, label }) => (
                    <Link
                      key={href}
                      href={href}
                      className="flex items-center px-3 py-2 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary/60 transition-colors"
                    >
                      {label}
                    </Link>
                  ))}
                  <div className="border-t border-border/50 mt-1.5 pt-1.5">
                    <Link
                      href="/calculators"
                      className="flex items-center px-3 py-2 rounded-lg text-sm font-medium text-primary hover:bg-primary/10 transition-colors"
                    >
                      All calculators →
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {secondaryNavLinks.map(({ href, label, icon: Icon }) => (
              <Link
                key={href}
                href={href}
                aria-current={pathname.startsWith(href) ? "page" : undefined}
                className={`flex items-center gap-1.5 text-sm transition-colors ${
                  pathname.startsWith(href)
                    ? "text-foreground font-medium"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <Icon className="h-4 w-4" />
                {label}
              </Link>
            ))}
          </nav>

          <button
            className="md:hidden flex h-9 w-9 items-center justify-center rounded-lg border border-border/50 text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {open && (
        <div className="md:hidden border-t border-border/50 bg-background/95 backdrop-blur-sm">
          <nav className="container mx-auto max-w-6xl px-4 py-3 flex flex-col gap-1" aria-label="Mobile navigation">
            <Link
              href="/calculators"
              onClick={() => setOpen(false)}
              aria-current={pathname.startsWith("/calculators") ? "page" : undefined}
              className={`flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-sm transition-colors ${
                pathname.startsWith("/calculators")
                  ? "bg-secondary text-foreground font-medium"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
              }`}
            >
              <Calculator className="h-4 w-4" />
              Calculators
            </Link>

            {/* Top calculator shortcuts in mobile */}
            <div className="ml-6 flex flex-col gap-0.5 mb-1">
              {TOP_CALCULATORS.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setOpen(false)}
                  className="px-3 py-1.5 rounded-lg text-xs text-muted-foreground hover:text-foreground hover:bg-secondary/40 transition-colors"
                >
                  {label}
                </Link>
              ))}
            </div>

            {secondaryNavLinks.map(({ href, label, icon: Icon }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                aria-current={pathname.startsWith(href) ? "page" : undefined}
                className={`flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-sm transition-colors ${
                  pathname.startsWith(href)
                    ? "bg-secondary text-foreground font-medium"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                }`}
              >
                <Icon className="h-4 w-4" />
                {label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
