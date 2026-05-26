"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ExternalLink, X } from "lucide-react";
import { track } from "@vercel/analytics";
import { affiliateLinks } from "@/data/affiliates";

const SESSION_KEY = "sticky-bar-dismissed";

export function StickyPartnerBar() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem(SESSION_KEY)) {
      setDismissed(true);
      return;
    }

    const handleScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      if (total <= 0) return;
      if ((window.scrollY / total) * 100 >= 60) setVisible(true);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const dismiss = () => {
    setVisible(false);
    setDismissed(true);
    sessionStorage.setItem(SESSION_KEY, "1");
  };

  if (dismissed) return null;

  const bybitLink = affiliateLinks["bybit"];
  const ftmoLink = affiliateLinks["ftmo"];

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 transition-transform duration-300 ease-out ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="border-t border-border/80 bg-card/95 backdrop-blur-sm px-4 py-3">
        <div className="container mx-auto max-w-4xl flex items-center gap-3">
          <p className="text-xs text-muted-foreground shrink-0 hidden sm:block">Partner offers</p>

          <div className="flex flex-1 flex-wrap gap-2">
            {bybitLink && (
              <Link
                href={bybitLink}
                target="_blank"
                rel="noopener noreferrer sponsored"
                onClick={() => track("affiliate_click", { exchange: "bybit", panel: "sticky-bar" })}
                className="inline-flex items-center gap-1.5 rounded-lg border border-amber-400/40 bg-amber-400/10 px-4 py-2 text-xs font-semibold text-amber-300 hover:bg-amber-400/20 transition-colors"
              >
                Bybit — Deposit Bonus
                <ExternalLink className="h-3 w-3" />
              </Link>
            )}
            {ftmoLink && (
              <Link
                href={ftmoLink}
                target="_blank"
                rel="noopener noreferrer sponsored"
                onClick={() => track("affiliate_click", { exchange: "ftmo", panel: "sticky-bar" })}
                className="inline-flex items-center gap-1.5 rounded-lg border border-emerald-500/40 bg-emerald-500/10 px-4 py-2 text-xs font-semibold text-emerald-400 hover:bg-emerald-500/20 transition-colors"
              >
                FTMO — Get Funded
                <ExternalLink className="h-3 w-3" />
              </Link>
            )}
          </div>

          <button
            onClick={dismiss}
            aria-label="Dismiss partner bar"
            className="shrink-0 rounded-md p-1.5 text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
