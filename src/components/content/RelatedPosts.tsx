import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";
import type { PostMeta } from "@/lib/content/mdx";

interface Props {
  posts: PostMeta[];
}

export function RelatedPosts({ posts }: Props) {
  if (posts.length === 0) return null;

  return (
    <section className="mt-12">
      <h2 className="text-xl font-bold mb-4">Learn More</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group rounded-xl border border-border bg-card p-5 hover:border-primary/40 hover:bg-secondary/20 transition-all flex flex-col gap-2"
          >
            <span className="text-xs text-primary bg-primary/10 border border-primary/20 px-2 py-0.5 rounded-full font-medium capitalize self-start">
              {post.category.replace(/-/g, " ")}
            </span>
            <h3 className="text-sm font-semibold leading-snug group-hover:text-primary transition-colors flex-1">
              {post.title}
            </h3>
            <div className="flex items-center justify-between mt-1">
              <span className="flex items-center gap-1 text-xs text-muted-foreground">
                <Calendar className="h-3 w-3" />
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </span>
              <ArrowRight className="h-3.5 w-3.5 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
