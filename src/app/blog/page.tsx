import type { Metadata } from "next";
import { getAllPosts } from "@/lib/content/mdx";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { BlogFilter } from "@/components/blog/BlogFilter";

export const metadata: Metadata = buildPageMetadata({
  title: "Crypto Trading Blog",
  description:
    "Guides, strategies, and education for crypto traders — position sizing, risk management, prop firm tips, leverage, and more.",
  path: "/blog",
  keywords: ["crypto trading guides", "position sizing tutorial", "prop firm tips", "risk management crypto"],
});

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="container mx-auto max-w-4xl px-4 py-12">
      <div className="mb-10">
        <h1 className="text-3xl font-bold tracking-tight mb-3">Trading Blog</h1>
        <p className="text-muted-foreground max-w-xl leading-relaxed">
          In-depth guides on crypto trading, risk management, prop firm strategies, and more.
        </p>
      </div>

      {posts.length === 0 ? (
        <div className="rounded-xl border border-border bg-card p-10 text-center">
          <p className="text-muted-foreground">Articles coming soon.</p>
        </div>
      ) : (
        <BlogFilter posts={posts} />
      )}
    </div>
  );
}
