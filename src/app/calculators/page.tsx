import type { Metadata } from "next";
import { calculators } from "@/data/calculators";
import { categories } from "@/data/categories";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { CalculatorSearch } from "@/components/calculators/CalculatorSearch";
import { PartnerBlock } from "@/components/monetization/AffiliateBlock";

export const metadata: Metadata = buildPageMetadata({
  title: "Free Crypto Trading Calculators",
  description:
    "Professional crypto trading calculators for position sizing, risk management, prop firm drawdown, leverage liquidation, DCA, fees, and compounding. All free.",
  path: "/calculators",
  keywords: ["crypto calculators", "trading tools", "position size", "risk reward"],
});

// Serialize only the fields the client component needs — keeps the RSC payload small
const clientCalcs = calculators.map(({ slug, name, shortName, description, category, keywords }) => ({
  slug,
  name,
  shortName,
  description,
  category,
  keywords,
}));

const clientCats = categories.map(({ slug, name, description }) => ({
  slug,
  name,
  description,
}));

export default function CalculatorsPage() {
  return (
    <div className="container mx-auto max-w-5xl px-4 py-12">
      <div className="mb-10">
        <h1 className="text-3xl font-bold tracking-tight mb-3">
          Crypto Trading Calculators
        </h1>
        <p className="text-muted-foreground max-w-xl leading-relaxed">
          {calculators.length} professional-grade tools for position sizing, risk management,
          prop firm rules, liquidation prices, DCA, fees, and compounding.
        </p>
      </div>

      <CalculatorSearch calculators={clientCalcs} categories={clientCats} />
      <PartnerBlock className="mt-12" />
    </div>
  );
}
