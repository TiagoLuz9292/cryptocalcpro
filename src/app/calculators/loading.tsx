export default function LoadingCalculators() {
  return (
    <div className="container mx-auto max-w-5xl px-4 py-12">
      <div className="mb-12">
        <div className="h-9 w-72 rounded-lg bg-secondary/60 animate-pulse mb-3" />
        <div className="h-4 w-96 rounded bg-secondary/40 animate-pulse" />
      </div>
      <div className="space-y-12">
        {[...Array(3)].map((_, i) => (
          <div key={i}>
            <div className="h-6 w-48 rounded bg-secondary/60 animate-pulse mb-1" />
            <div className="h-3 w-64 rounded bg-secondary/40 animate-pulse mb-5" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[...Array(3)].map((_, j) => (
                <div key={j} className="rounded-xl border border-border bg-card p-5 h-28 animate-pulse" />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
