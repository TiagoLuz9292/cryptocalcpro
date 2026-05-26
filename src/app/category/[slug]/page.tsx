import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { categories, getCategoryBySlug } from "@/data/categories";
import { getCalculatorsByCategory } from "@/data/calculators";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { PartnerBlock } from "@/components/monetization/AffiliateBlock";
import { ArrowRight } from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const cat = getCategoryBySlug(slug);
  if (!cat) return {};
  return buildPageMetadata({
    title: `${cat.name} Calculators`,
    description: cat.description,
    path: `/category/${slug}`,
  });
}

export default async function CategoryPage({ params }: PageProps) {
  const { slug } = await params;
  const cat = getCategoryBySlug(slug);
  if (!cat) notFound();

  const tools = getCalculatorsByCategory(slug);

  return (
    <div className="container mx-auto max-w-4xl px-4 py-8">
      <div className="mb-6">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Categories", href: "/calculators" },
            { label: cat.name, href: `/category/${slug}` },
          ]}
        />
      </div>

      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight mb-3">{cat.name} Calculators</h1>
        <p className="text-muted-foreground mb-4">{cat.description}</p>
        {cat.intro && (
          <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl border-l-2 border-primary/30 pl-4">
            {cat.intro}
          </p>
        )}
      </div>

      {tools.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {tools.map((tool) => (
            <Link
              key={tool.slug}
              href={`/calculators/${tool.slug}`}
              className="group rounded-xl border border-border bg-card p-5 hover:border-primary/40 hover:bg-secondary/20 transition-all"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="font-semibold">{tool.name}</p>
                  <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">
                    {tool.description}
                  </p>
                </div>
                <ArrowRight className="h-5 w-5 shrink-0 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all mt-0.5" />
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <p className="text-muted-foreground">No calculators in this category yet.</p>
      )}

      <PartnerBlock className="mt-12" />
    </div>
  );
}
