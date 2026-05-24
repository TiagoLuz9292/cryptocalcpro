import type { Metadata } from "next";
import { siteConfig } from "@/data/site";
import type { CalculatorMeta } from "@/types/calculator";

export function buildCalculatorMetadata(calc: CalculatorMeta): Metadata {
  const title = `${calc.name} | ${siteConfig.name}`;
  const canonical = `${siteConfig.url}/calculators/${calc.slug}`;

  return {
    title,
    description: calc.description,
    keywords: calc.keywords,
    alternates: { canonical },
    openGraph: {
      title,
      description: calc.description,
      url: canonical,
      siteName: siteConfig.name,
      type: "website",
      images: [
        {
          url: `${siteConfig.url}/api/og?title=${encodeURIComponent(calc.name)}&desc=${encodeURIComponent(calc.shortName)}`,
          width: 1200,
          height: 630,
          alt: calc.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: calc.description,
      creator: siteConfig.twitterHandle,
    },
  };
}

export function buildPageMetadata({
  title,
  description,
  path,
  keywords,
}: {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
}): Metadata {
  const fullTitle = `${title} | ${siteConfig.name}`;
  const canonical = `${siteConfig.url}${path}`;

  return {
    title: fullTitle,
    description,
    keywords,
    alternates: { canonical },
    openGraph: {
      title: fullTitle,
      description,
      url: canonical,
      siteName: siteConfig.name,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      creator: siteConfig.twitterHandle,
    },
  };
}
