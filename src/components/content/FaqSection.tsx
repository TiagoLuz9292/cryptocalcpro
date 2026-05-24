import type { CalculatorFaq } from "@/types/calculator";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildFaqSchema } from "@/lib/seo/jsonLd";
import { ChevronDown } from "lucide-react";

interface FaqSectionProps {
  faqs: CalculatorFaq[];
  title?: string;
}

export function FaqSection({ faqs, title = "Frequently Asked Questions" }: FaqSectionProps) {
  return (
    <section className="mt-12">
      <JsonLd schema={buildFaqSchema(faqs)} />
      <h2 className="text-xl font-bold mb-6">{title}</h2>
      <div className="space-y-px rounded-xl overflow-hidden border border-border">
        {faqs.map((faq, i) => (
          <details
            key={i}
            className="group bg-card"
            open={i === 0}
          >
            <summary className="flex cursor-pointer items-center justify-between gap-4 px-5 py-4 hover:bg-secondary/30 transition-colors list-none">
              <span className="font-medium text-sm leading-snug">{faq.question}</span>
              <ChevronDown className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-open:rotate-180" />
            </summary>
            <div className="border-t border-border/50 px-5 py-4">
              <p className="text-sm text-muted-foreground leading-relaxed">{faq.answer}</p>
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
