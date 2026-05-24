import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for TradeFeeCalc — how we handle data, cookies, advertising, and your rights as a user.",
  robots: { index: true, follow: true },
};

const LAST_UPDATED = "May 24, 2026";
const CONTACT_EMAIL = "contact@tradefeecalc.com";
const SITE_URL = "https://tradefeecalc.com";

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-bold tracking-tight mb-2">Privacy Policy</h1>
      <p className="text-sm text-muted-foreground mb-10">Last updated: {LAST_UPDATED}</p>

      <div className="space-y-10 text-sm text-muted-foreground leading-relaxed">

        {/* 1 */}
        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-foreground">1. Introduction</h2>
          <p>
            This Privacy Policy explains how TradeFeeCalc (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;),
            operating at <span className="text-foreground">{SITE_URL}</span>, collects, uses, and protects
            information when you use our website. We are committed to being transparent about our
            data practices.
          </p>
          <p>
            By using TradeFeeCalc, you agree to the practices described in this policy. If you
            do not agree, please discontinue use of the site.
          </p>
        </section>

        {/* 2 */}
        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-foreground">2. Information We Collect</h2>
          <p>
            <span className="text-foreground font-medium">We do not collect personal information directly.</span>{" "}
            TradeFeeCalc has no user accounts, no registration forms, and no input fields that
            ask for personal data. All calculator inputs are processed entirely within your browser
            and are never transmitted to our servers.
          </p>
          <p>
            However, certain information is collected automatically through the third-party services
            we use (described in sections below):
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>IP address and approximate location (country/city level)</li>
            <li>Browser type, operating system, and device type</li>
            <li>Pages visited, time spent on pages, and referral source</li>
            <li>Clicks on advertisements and affiliate links</li>
          </ul>
          <p>
            This data is collected in aggregate and anonymised form by Google services (Analytics
            and AdSense) and is not linked to any individual identity by us.
          </p>
        </section>

        {/* 3 */}
        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-foreground">3. Google AdSense and Advertising</h2>
          <p>
            TradeFeeCalc uses <span className="text-foreground font-medium">Google AdSense</span> to
            display advertisements. Google AdSense is a third-party advertising service operated by
            Google LLC.
          </p>
          <p>
            <span className="text-foreground font-medium">How it works:</span> Google uses cookies —
            including the DoubleClick cookie — to serve ads based on your prior visits to this site
            and other sites on the internet. This is known as interest-based or personalised
            advertising. Google&apos;s use of advertising cookies enables it and its partners to
            serve ads based on your visit to TradeFeeCalc and/or other websites.
          </p>
          <p>
            <span className="text-foreground font-medium">Your opt-out options:</span>
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              Opt out of personalised advertising by visiting{" "}
              <a
                href="https://www.google.com/settings/ads"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Google Ad Settings
              </a>
            </li>
            <li>
              Opt out of third-party vendor cookies via{" "}
              <a
                href="https://www.aboutads.info/choices/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                AboutAds.info
              </a>{" "}
              (US) or{" "}
              <a
                href="https://www.youronlinechoices.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                YourOnlineChoices.com
              </a>{" "}
              (EU)
            </li>
            <li>
              Disable cookies entirely in your browser settings (note: this may affect site
              functionality)
            </li>
          </ul>
          <p>
            For more information on how Google uses data from sites that use their services, visit:{" "}
            <a
              href="https://policies.google.com/technologies/partner-sites"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              How Google uses data when you use our partners&apos; sites or apps
            </a>
            .
          </p>
        </section>

        {/* 4 */}
        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-foreground">4. Google Analytics</h2>
          <p>
            We use <span className="text-foreground font-medium">Google Analytics</span> to understand
            how visitors use TradeFeeCalc. Google Analytics collects anonymised, aggregate data
            about page views, session duration, geographic region, and traffic sources. This data
            helps us improve the site and its content.
          </p>
          <p>
            Google Analytics data is not linked to personally identifiable information. You can opt
            out of Google Analytics tracking by installing the{" "}
            <a
              href="https://tools.google.com/dlpage/gaoptout"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Google Analytics Opt-out Browser Add-on
            </a>
            .
          </p>
        </section>

        {/* 5 */}
        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-foreground">5. Cookies</h2>
          <p>
            Cookies are small text files stored on your device by your browser. TradeFeeCalc
            itself does not set any first-party cookies. However, the third-party services we use
            (Google AdSense, Google Analytics) do set cookies on your device.
          </p>
          <p>The cookies used on this site are:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <span className="text-foreground">Advertising cookies</span> — set by Google AdSense to
              serve personalised advertisements
            </li>
            <li>
              <span className="text-foreground">Analytics cookies</span> — set by Google Analytics to
              measure site traffic and usage patterns
            </li>
          </ul>
          <p>
            You can control cookies through your browser settings. Most browsers allow you to
            refuse new cookies, delete existing cookies, or be notified when new cookies are set.
            Please refer to your browser&apos;s help documentation for instructions.
          </p>
        </section>

        {/* 6 */}
        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-foreground">6. Affiliate Links and Disclosure</h2>
          <p>
            TradeFeeCalc contains affiliate links to cryptocurrency exchanges and other financial
            services. This means that if you click one of these links and create an account or
            make a transaction, we may receive a commission or referral fee from that platform.
          </p>
          <p>
            <span className="text-foreground font-medium">
              This does not affect the price you pay or the quality of service you receive.
            </span>{" "}
            Our calculator tools, comparisons, and editorial content are not influenced by affiliate
            relationships. We only link to exchanges we consider reputable.
          </p>
          <p>
            When you click an affiliate link and visit a third-party exchange, that exchange&apos;s
            own privacy policy and cookie practices apply. We encourage you to review those policies
            before creating an account or depositing funds.
          </p>
        </section>

        {/* 7 */}
        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-foreground">7. Third-Party Links</h2>
          <p>
            Our site contains links to external websites, including cryptocurrency exchanges,
            trading platforms, and educational resources. These third-party sites are governed by
            their own privacy policies. TradeFeeCalc has no control over and accepts no
            responsibility for the privacy practices of any external site.
          </p>
          <p>
            We recommend reviewing the privacy policy of any third-party site before providing
            personal information or making financial transactions.
          </p>
        </section>

        {/* 8 */}
        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-foreground">8. Your Rights — GDPR (EU/EEA Users)</h2>
          <p>
            If you are located in the European Union or European Economic Area, you have the
            following rights under the General Data Protection Regulation (GDPR):
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <span className="text-foreground">Right to access</span> — request a copy of any personal
              data held about you
            </li>
            <li>
              <span className="text-foreground">Right to rectification</span> — request correction of
              inaccurate data
            </li>
            <li>
              <span className="text-foreground">Right to erasure</span> — request deletion of your
              personal data (&ldquo;right to be forgotten&rdquo;)
            </li>
            <li>
              <span className="text-foreground">Right to restrict processing</span> — request that we
              limit how we use your data
            </li>
            <li>
              <span className="text-foreground">Right to data portability</span> — receive your data in
              a structured, machine-readable format
            </li>
            <li>
              <span className="text-foreground">Right to object</span> — object to data processing based
              on legitimate interests, including profiling for advertising purposes
            </li>
          </ul>
          <p>
            Because TradeFeeCalc does not directly collect or store personal data, most of these
            rights apply primarily to data held by Google (AdSense, Analytics). You can exercise
            your rights against Google directly through{" "}
            <a
              href="https://myaccount.google.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Google My Account
            </a>
            .
          </p>
          <p>
            To exercise any of these rights in relation to TradeFeeCalc specifically, or for any
            privacy-related enquiry, contact us at{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-primary hover:underline">
              {CONTACT_EMAIL}
            </a>
            .
          </p>
          <p>
            You also have the right to lodge a complaint with Portugal&apos;s data protection
            supervisory authority:{" "}
            <a
              href="https://www.cnpd.pt"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Comissão Nacional de Proteção de Dados (CNPD)
            </a>
            .
          </p>
        </section>

        {/* 9 */}
        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-foreground">9. Children&apos;s Privacy</h2>
          <p>
            TradeFeeCalc is not directed at individuals under the age of 16. We do not
            knowingly collect any information from children. If you believe a child has provided
            personal data through this site, please contact us at{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-primary hover:underline">
              {CONTACT_EMAIL}
            </a>{" "}
            and we will take steps to address it.
          </p>
        </section>

        {/* 10 */}
        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-foreground">10. Financial Disclaimer</h2>
          <p>
            The tools, calculators, articles, and comparisons on TradeFeeCalc are provided for
            educational and informational purposes only. Nothing on this site constitutes financial
            advice, investment advice, or a recommendation to buy or sell any financial instrument.
            Trading cryptocurrencies and derivatives involves significant risk of loss. Always
            conduct your own research and consult a qualified financial advisor before making
            investment decisions.
          </p>
        </section>

        {/* 11 */}
        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-foreground">11. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time to reflect changes in our
            practices, technology, or legal requirements. When we do, we will update the
            &ldquo;Last updated&rdquo; date at the top of this page. We encourage you to review
            this policy periodically.
          </p>
          <p>
            Continued use of TradeFeeCalc after any changes constitutes acceptance of the
            updated policy.
          </p>
        </section>

        {/* 12 */}
        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-foreground">12. Contact</h2>
          <p>
            For any questions, concerns, or requests relating to this Privacy Policy or your data,
            please contact us at:
          </p>
          <p>
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-primary hover:underline font-medium">
              {CONTACT_EMAIL}
            </a>
          </p>
        </section>

      </div>

      <div className="mt-12 pt-6 border-t border-border/50">
        <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
          ← Back to TradeFeeCalc
        </Link>
      </div>
    </div>
  );
}
