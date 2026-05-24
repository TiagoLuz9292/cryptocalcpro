export const siteConfig = {
  name: "CryptoCalc Pro",
  tagline: "Professional Trading Calculators & Risk Tools",
  description:
    "Free professional crypto trading calculators for position sizing, risk management, prop firm rules, leverage liquidation, DCA, fees, and compounding. Built for serious traders.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://cryptocalcpro.com",
  ogImage: "/og-default.png",
  twitterHandle: "@cryptocalcpro",
  keywords: [
    "crypto calculator",
    "position size calculator",
    "risk reward calculator",
    "prop firm calculator",
    "leverage calculator",
    "trading tools",
    "crypto trading",
  ],
} as const;
