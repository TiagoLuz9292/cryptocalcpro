interface EducationBlockProps {
  title: string;
  body: string;
}

// [pattern, slug] — longer/more-specific phrases must come before shorter ones
const GLOSSARY_MAP: [RegExp, string][] = [
  [/\bliquidation price\b/gi, "liquidation-price"],
  [/\bmark price\b/gi, "mark-price"],
  [/\bindex price\b/gi, "index-price"],
  [/\bisolated margin\b/gi, "isolated-margin"],
  [/\bcross[- ]margin\b/gi, "cross-margin"],
  [/\bmaintenance margin\b/gi, "maintenance-margin"],
  [/\bmargin call\b/gi, "margin-call"],
  [/\bperpetual futures\b/gi, "perpetual-futures"],
  [/\bposition sizing\b/gi, "position-sizing"],
  [/\bposition size\b/gi, "position-sizing"],
  [/\brisk per trade\b/gi, "risk-per-trade"],
  [/\brisk[/: -]reward ratio\b/gi, "risk-reward-ratio"],
  [/\brisk[/: -]reward\b/gi, "risk-reward-ratio"],
  [/\bR:R\b/g, "risk-reward-ratio"],
  [/\bbreakeven win rate\b/gi, "breakeven-win-rate"],
  [/\bopen interest\b/gi, "open-interest"],
  [/\border book\b/gi, "order-book"],
  [/\bdollar[- ]cost averaging\b/gi, "dca"],
  [/\bprofit target\b/gi, "profit-target"],
  [/\bprofit split\b/gi, "profit-split"],
  [/\bmaker fee\b/gi, "maker-fee"],
  [/\btaker fee\b/gi, "taker-fee"],
  [/\bstop[- ]loss\b/gi, "stop-loss"],
  [/\btake[- ]profit\b/gi, "take-profit"],
  [/\btrailing drawdown\b/gi, "trailing-drawdown"],
  [/\bdaily drawdown\b/gi, "daily-drawdown"],
  [/\bstatic drawdown\b/gi, "static-drawdown"],
  [/\bunrealized P(?:&|n)L\b/gi, "unrealized-pnl"],
  [/\brealized P(?:&|n)L\b/gi, "realized-pnl"],
  [/\blong position\b/gi, "long-position"],
  [/\bshort position\b/gi, "short-position"],
  [/\bwin rate\b/gi, "win-rate"],
  [/\bfunding rate\b/gi, "funding-rate"],
  [/\bprop firm\b/gi, "prop-firm-challenge"],
  [/\bexpected value\b/gi, "expected-value"],
  // single words after multi-word phrases
  [/\bliquidation\b/gi, "liquidation-price"],
  [/\bdrawdown\b/gi, "drawdown"],
  [/\bleverag[a-z]*\b/gi, "leverage"],
  [/\bcompounding\b/gi, "compounding"],
  [/\bvolatility\b/gi, "volatility"],
  [/\bliquidity\b/gi, "liquidity"],
  [/\bslippage\b/gi, "slippage"],
  [/\bscalping\b/gi, "scalping"],
  [/\bmargin\b/gi, "margin"],
  [/\bDCA\b/g, "dca"],
];

function linkGlossaryTerms(text: string): string {
  let result = text;
  for (const [pattern, slug] of GLOSSARY_MAP) {
    let found = false;
    result = result.replace(pattern, (match) => {
      if (found) return match;
      found = true;
      return `[${match}](/glossary/${slug})`;
    });
  }
  return result;
}

function parseMarkdown(text: string): string {
  return text
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-primary/90 underline decoration-dotted underline-offset-2 hover:text-primary transition-colors">$1</a>')
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.*?)\*/g, "<em>$1</em>")
    .replace(/`(.*?)`/g, '<code class="bg-secondary/60 px-1 rounded text-xs font-mono">$1</code>')
    .replace(/^### (.*)/gm, '<h3 class="text-base font-semibold mt-4 mb-2">$1</h3>')
    .replace(/^## (.*)/gm, '<h3 class="text-lg font-semibold mt-6 mb-3">$1</h3>')
    .replace(/^\| (.*) \|$/gm, (match) => {
      if (match.includes("---")) return "";
      const cells = match.split("|").filter(Boolean).map((c) => c.trim());
      return `<tr class="border-b border-border/50">${cells.map((c) => `<td class="py-2 pr-4 text-sm">${c}</td>`).join("")}</tr>`;
    })
    .replace(/^- (.*)/gm, '<li class="text-sm text-muted-foreground leading-relaxed ml-4 list-disc">$1</li>')
    .replace(/\n\n/g, '</p><p class="mb-3 text-sm text-muted-foreground leading-relaxed">')
    .replace(/\n/g, " ");
}

export function EducationBlock({ title, body }: EducationBlockProps) {
  const html = parseMarkdown(linkGlossaryTerms(body));

  return (
    <section className="mt-12">
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      <div className="rounded-xl border border-border bg-card p-6">
        <div
          className="prose-sm text-muted-foreground leading-relaxed space-y-3 max-w-none [&_strong]:text-foreground [&_h3]:text-foreground [&_table]:w-full [&_table]:border-collapse"
          dangerouslySetInnerHTML={{
            __html: `<p class="mb-3 text-sm text-muted-foreground leading-relaxed">${html}</p>`,
          }}
        />
      </div>
    </section>
  );
}
