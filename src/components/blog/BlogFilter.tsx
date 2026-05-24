"use client";

import Link from "next/link";
import { useState } from "react";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import type { PostMeta } from "@/lib/content/mdx";

const CATEGORY_LABELS: Record<string, string> = {
  "risk-management": "Risk Management",
  "prop-firm": "Prop Firm",
  "leverage": "Leverage",
  "dca": "DCA",
  "fees": "Fees",
  "compounding": "Compounding",
  "position-sizing": "Position Sizing",
};

export function BlogFilter({ posts }: { posts: PostMeta[] }) {
  const [active, setActive] = useState<string>("all");

  const categories = Array.from(new Set(posts.map((p) => p.category))).sort();
  const filtered = active === "all" ? posts : posts.filter((p) => p.category === active);

  return (
    <>
      {/* Filter pills */}
      <div className="flex flex-wrap gap-2 mb-8" role="group" aria-label="Filter by category">
        <button
          type="button"
          aria-pressed={active === "all"}
          onClick={() => setActive("all")}
          className={`text-xs px-3 py-1.5 rounded-full border transition-colors ${
            active === "all"
              ? "bg-primary text-primary-foreground border-primary"
              : "border-border text-muted-foreground hover:border-primary/40 hover:text-foreground"
          }`}
        >
          All ({posts.length})
        </button>
        {categories.map((cat) => {
          const count = posts.filter((p) => p.category === cat).length;
          return (
            <button
              type="button"
              key={cat}
              aria-pressed={active === cat}
              onClick={() => setActive(cat)}
              className={`text-xs px-3 py-1.5 rounded-full border transition-colors ${
                active === cat
                  ? "bg-primary text-primary-foreground border-primary"
                  : "border-border text-muted-foreground hover:border-primary/40 hover:text-foreground"
              }`}
            >
              {CATEGORY_LABELS[cat] ?? cat} ({count})
            </button>
          );
        })}
      </div>

      {/* Posts list */}
      <div className="space-y-4">
        {filtered.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group block rounded-xl border border-border bg-card p-6 hover:border-primary/40 hover:bg-secondary/20 transition-all"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs text-primary bg-primary/10 border border-primary/20 px-2 py-0.5 rounded-full font-medium capitalize">
                    {CATEGORY_LABELS[post.category] ?? post.category}
                  </span>
                  {post.featured && (
                    <span className="text-xs text-amber-400 bg-amber-400/10 border border-amber-400/20 px-2 py-0.5 rounded-full font-medium">
                      Featured
                    </span>
                  )}
                </div>
                <h2 className="text-lg font-semibold leading-snug mb-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                  {post.description}
                </p>
                <div className="flex items-center gap-4 mt-3">
                  <span className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Calendar className="h-3 w-3" />
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    {post.readingTime}
                  </span>
                </div>
              </div>
              <ArrowRight className="h-5 w-5 shrink-0 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all mt-1" />
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
