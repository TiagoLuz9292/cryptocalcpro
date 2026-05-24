import type { Metadata } from "next";
import Link from "next/link";
import { Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with CryptoCalc Pro — feedback, suggestions, partnerships, or general questions.",
  robots: { index: true, follow: true },
};

const CONTACT_EMAIL = "contact@cryptocalcpro.com";

const topics = [
  {
    title: "Bug reports or calculator errors",
    body: "Found a calculation that doesn't look right? Let us know which calculator, what inputs you used, and what result you expected.",
  },
  {
    title: "Feature suggestions",
    body: "Missing a calculator or trading tool you'd find useful? We're actively building — suggestions from real traders are taken seriously.",
  },
  {
    title: "Content corrections",
    body: "If any fee rates, exchange rules, or prop firm details are out of date, please flag it. Accuracy matters.",
  },
  {
    title: "Partnership or advertising enquiries",
    body: "For exchange partnerships, affiliate arrangements, or advertising enquiries beyond Google AdSense.",
  },
  {
    title: "Privacy or data requests",
    body: "For GDPR requests, data enquiries, or anything related to our Privacy Policy.",
  },
];

export default function ContactPage() {
  return (
    <div className="container mx-auto max-w-3xl px-4 py-12">

      <div className="mb-10">
        <h1 className="text-3xl font-bold tracking-tight mb-3">Contact</h1>
        <p className="text-muted-foreground leading-relaxed">
          CryptoCalc Pro is run by a small team. We read every message and respond to the
          ones we can. The best way to reach us is by email.
        </p>
      </div>

      {/* Email card */}
      <div className="rounded-xl border border-primary/30 bg-primary/5 p-6 mb-10 flex items-center gap-4">
        <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/15 shrink-0">
          <Mail className="h-5 w-5 text-primary" />
        </div>
        <div>
          <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold mb-1">
            Email us at
          </p>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="text-lg font-semibold text-primary hover:underline"
          >
            {CONTACT_EMAIL}
          </a>
        </div>
      </div>

      {/* What to write about */}
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-5">What to write about</h2>
        <div className="space-y-3">
          {topics.map((t) => (
            <div
              key={t.title}
              className="rounded-lg border border-border bg-card p-4 space-y-1"
            >
              <h3 className="text-sm font-semibold">{t.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{t.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Response note */}
      <section className="rounded-xl border border-border bg-card/50 p-5 mb-10 space-y-2">
        <h2 className="text-sm font-semibold">Response times</h2>
        <p className="text-sm text-muted-foreground leading-relaxed">
          We aim to respond to all messages within 2–3 business days. For urgent calculator
          issues or significant data errors, we typically respond faster. We do not provide
          personalised trading advice or respond to trading strategy questions.
        </p>
      </section>

      {/* Disclaimer */}
      <p className="text-xs text-muted-foreground leading-relaxed mb-8">
        CryptoCalc Pro does not provide financial advice. For questions about specific trades,
        strategies, or investment decisions, please consult a qualified financial advisor.
        See our{" "}
        <Link href="/privacy-policy" className="text-primary hover:underline">
          Privacy Policy
        </Link>{" "}
        for information on how we handle any data you send us.
      </p>

      <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
        ← Back to CryptoCalc Pro
      </Link>
    </div>
  );
}
