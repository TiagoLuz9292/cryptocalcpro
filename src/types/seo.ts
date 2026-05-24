export interface PageSeoProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  keywords?: string[];
  noindex?: boolean;
}

export interface BreadcrumbItem {
  label: string;
  href: string;
}

export interface JsonLdProps {
  schema: Record<string, unknown> | Record<string, unknown>[];
}
