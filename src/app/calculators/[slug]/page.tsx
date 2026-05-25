import { notFound } from "next/navigation";
import { Suspense } from "react";
import type { Metadata } from "next";
import { calculators, getCalculatorBySlug, getRelatedCalculators } from "@/data/calculators";
import { buildCalculatorMetadata } from "@/lib/seo/metadata";
import { buildCalculatorSchema } from "@/lib/seo/jsonLd";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { CalculatorShell } from "@/components/calculators/CalculatorShell";
import { FaqSection } from "@/components/content/FaqSection";
import { EducationBlock } from "@/components/content/EducationBlock";
import { RelatedTools } from "@/components/content/RelatedTools";
import { RelatedPosts } from "@/components/content/RelatedPosts";
import { KeyTermsBlock } from "@/components/content/KeyTermsBlock";
import { AdSlot } from "@/components/monetization/AdSlot";
import { AffiliateBlock } from "@/components/monetization/AffiliateBlock";
import { getRelatedPosts } from "@/lib/content/relatedPosts";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return calculators.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const calc = getCalculatorBySlug(slug);
  if (!calc) return {};
  return buildCalculatorMetadata(calc);
}

export default async function CalculatorPage({ params }: PageProps) {
  const { slug } = await params;
  const calc = getCalculatorBySlug(slug);
  if (!calc) notFound();

  const related = getRelatedCalculators(slug);
  const relatedPosts = getRelatedPosts(calc.category, undefined, 3);

  const EXCHANGE_PREFIXES = ["bybit", "binance", "okx", "mexc", "kraken", "kucoin", "bitget", "gate", "bingx", "phemex"];
  const detectedExchange = EXCHANGE_PREFIXES.find((ex) => slug.startsWith(ex));
  const affiliateCategory = calc.category === "prop-firm" ? "prop-firm" : "exchange";

  return (
    <div className="container mx-auto max-w-4xl px-4 py-8">
      <JsonLd schema={buildCalculatorSchema(calc)} />

      <div className="mb-6">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Calculators", href: "/calculators" },
            { label: calc.shortName, href: `/calculators/${calc.slug}` },
          ]}
        />
      </div>

      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight mb-3">{calc.name}</h1>
        <p className="text-muted-foreground leading-relaxed max-w-2xl">{calc.description}</p>
      </div>

      <AdSlot position="top" className="mb-6" />

      <Suspense fallback={<div className="h-96 rounded-xl border border-border animate-pulse bg-card" />}>
        <CalculatorShell meta={calc} />
      </Suspense>

      <div className="isolate [transform:translateZ(0)]">
        <AffiliateBlock category={affiliateCategory} exchange={detectedExchange} className="mt-8" />
      </div>

      <EducationBlock
        title={calc.educationContent.title}
        body={calc.educationContent.body}
      />

      <KeyTermsBlock slug={slug} category={calc.category} />

      <AdSlot position="between-content" className="my-8" />

      <FaqSection faqs={calc.faqs} />

      <RelatedTools tools={related} />

      <RelatedPosts posts={relatedPosts} />
    </div>
  );
}
