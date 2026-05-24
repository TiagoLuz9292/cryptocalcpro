export default function LoadingBlog() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-12">
      <div className="mb-10">
        <div className="h-9 w-48 rounded-lg bg-secondary/60 animate-pulse mb-3" />
        <div className="h-4 w-80 rounded bg-secondary/40 animate-pulse" />
      </div>
      <div className="space-y-4">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="rounded-xl border border-border bg-card p-6">
            <div className="flex items-center gap-2 mb-3">
              <div className="h-5 w-20 rounded-full bg-secondary/60 animate-pulse" />
              <div className="h-4 w-24 rounded bg-secondary/40 animate-pulse" />
            </div>
            <div className="h-6 w-3/4 rounded bg-secondary/60 animate-pulse mb-2" />
            <div className="h-4 w-full rounded bg-secondary/40 animate-pulse mb-1" />
            <div className="h-4 w-2/3 rounded bg-secondary/40 animate-pulse" />
          </div>
        ))}
      </div>
    </div>
  );
}
