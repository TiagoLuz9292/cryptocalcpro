import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { glossaryTerms, getTermBySlug } from "@/data/glossary";
import { getCalculatorBySlug } from "@/data/calculators";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { AffiliateBlock } from "@/components/monetization/AffiliateBlock";

interface PageProps {
  params: Promise<{ term: string }>;
}

export function generateStaticParams() {
  return glossaryTerms.map((t) => ({ term: t.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { term } = await params;
  const entry = getTermBySlug(term);
  if (!entry) return {};
  return buildPageMetadata({
    title: `What is ${entry.term}? — Crypto Trading Glossary`,
    description: entry.shortDef,
    path: `/glossary/${entry.slug}`,
  });
}

export default async function GlossaryTermPage({ params }: PageProps) {
  const { term } = await params;
  const entry = getTermBySlug(term);
  if (!entry) notFound();

  const relatedCalcs = entry.relatedCalcSlugs
    .map((s) => getCalculatorBySlug(s))
    .filter((c): c is NonNullable<typeof c> => c !== undefined)
    .slice(0, 3);

  const relatedTermEntries = entry.relatedTerms
    .map((s) => getTermBySlug(s))
    .filter((t): t is NonNullable<typeof t> => t !== undefined)
    .slice(0, 6);

  return (
    <div className="container mx-auto max-w-3xl px-4 py-12">
      <div className="mb-6">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Glossary", href: "/glossary" },
            { label: entry.term, href: `/glossary/${entry.slug}` },
          ]}
        />
      </div>

      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight mb-3">What is {entry.term}?</h1>
        <p className="text-lg text-muted-foreground leading-relaxed">{entry.shortDef}</p>
      </div>

      <div
        className="prose prose-invert prose-sm max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-table:text-sm prose-code:text-primary prose-strong:text-foreground mb-12"
        dangerouslySetInnerHTML={{ __html: "" }}
      />

      {/* Render markdown body as plain sections */}
      <GlossaryBody body={entry.body} />

      {relatedCalcs.length > 0 && (
        <section className="mt-12">
          <h2 className="text-xl font-bold mb-4">Related Calculators</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {relatedCalcs.map((calc) => (
              <Link
                key={calc.slug}
                href={`/calculators/${calc.slug}`}
                className="group rounded-xl border border-border bg-card p-5 hover:border-primary/40 hover:bg-secondary/20 transition-all flex items-start justify-between gap-2"
              >
                <div>
                  <p className="font-semibold text-sm leading-tight group-hover:text-primary transition-colors">
                    {calc.shortName}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{calc.description}</p>
                </div>
                <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all mt-0.5" />
              </Link>
            ))}
          </div>
        </section>
      )}

      {relatedTermEntries.length > 0 && (
        <section className="mt-10">
          <h2 className="text-xl font-bold mb-4">Related Terms</h2>
          <div className="flex flex-wrap gap-2">
            {relatedTermEntries.map((t) => (
              <Link
                key={t.slug}
                href={`/glossary/${t.slug}`}
                className="rounded-full border border-border bg-card px-4 py-2 text-sm hover:border-primary/40 hover:text-primary transition-colors"
              >
                {t.term}
              </Link>
            ))}
          </div>
        </section>
      )}

      <AffiliateBlock category="exchange" className="mt-12" />
    </div>
  );
}

function GlossaryBody({ body }: { body: string }) {
  const lines = body.split("\n");
  const elements: React.ReactNode[] = [];
  let tableBuffer: string[] = [];
  let i = 0;

  const flushTable = () => {
    if (tableBuffer.length === 0) return;
    const rows = tableBuffer.map((r) =>
      r
        .split("|")
        .map((c) => c.trim())
        .filter((c) => c !== "")
    );
    const header = rows[0];
    const body = rows.slice(2);
    elements.push(
      <div key={`table-${i}`} className="overflow-x-auto my-6">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr>
              {header.map((h, j) => (
                <th key={j} className="text-left px-3 py-2 border border-border font-semibold bg-secondary/30">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {body.map((row, ri) => (
              <tr key={ri} className="even:bg-secondary/10">
                {row.map((cell, ci) => (
                  <td key={ci} className="px-3 py-2 border border-border text-muted-foreground">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
    tableBuffer = [];
  };

  while (i < lines.length) {
    const line = lines[i];

    if (line.startsWith("|")) {
      tableBuffer.push(line);
      i++;
      continue;
    }

    if (tableBuffer.length > 0) flushTable();

    if (line.startsWith("## ")) {
      elements.push(
        <h2 key={i} className="text-xl font-bold mt-8 mb-3">
          {line.slice(3)}
        </h2>
      );
    } else if (line.startsWith("**") && line.endsWith("**")) {
      elements.push(
        <p key={i} className="font-semibold mt-4 mb-1">
          {line.slice(2, -2)}
        </p>
      );
    } else if (line.startsWith("> ")) {
      elements.push(
        <blockquote key={i} className="border-l-2 border-primary pl-4 my-3 text-sm font-mono text-muted-foreground">
          {line.slice(2)}
        </blockquote>
      );
    } else if (line.startsWith("- ")) {
      elements.push(
        <li key={i} className="ml-4 text-sm text-muted-foreground leading-relaxed list-disc">
          {renderInline(line.slice(2))}
        </li>
      );
    } else if (line.trim() !== "") {
      elements.push(
        <p key={i} className="text-sm text-muted-foreground leading-relaxed my-2">
          {renderInline(line)}
        </p>
      );
    }

    i++;
  }

  if (tableBuffer.length > 0) flushTable();

  return <div className="space-y-1">{elements}</div>;
}

function renderInline(text: string): React.ReactNode {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return (
    <>
      {parts.map((part, i) =>
        part.startsWith("**") && part.endsWith("**") ? (
          <strong key={i} className="text-foreground font-semibold">
            {part.slice(2, -2)}
          </strong>
        ) : (
          part
        )
      )}
    </>
  );
}
