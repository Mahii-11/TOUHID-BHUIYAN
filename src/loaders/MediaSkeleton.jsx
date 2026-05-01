export function MediaSkeleton() {
  return (
    <div
      className="min-h-screen relative animate-pulse"
      style={{
        background:
          "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(99,102,241,0.08) 0%, transparent 60%), #060b18",
      }}
    >
      {/* grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-12">

        {/* Header Skeleton */}
        <div className="text-center mb-14">
          <div className="h-6 w-32 mx-auto bg-slate-700 rounded-full mb-6" />

          <div className="h-10 sm:h-12 md:h-14 lg:h-16 w-3/4 mx-auto bg-slate-700 rounded-xl mb-4" />

          <div className="h-4 w-2/3 mx-auto bg-slate-700 rounded-md" />
        </div>

        {/* Tabs Skeleton */}
        <div className="flex justify-center gap-2 mb-10 flex-wrap">
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className="h-9 w-20 bg-slate-700 rounded-full"
            />
          ))}
        </div>

        {/* Featured Skeleton */}
        <div className="mb-10">
          <div className="h-5 w-24 bg-slate-700 rounded mb-4" />
          <div className="w-full h-[220px] sm:h-[300px] md:h-[380px] bg-slate-700 rounded-2xl" />
        </div>

        {/* Grid Skeleton */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="space-y-3"
            >
              <div className="w-full h-40 sm:h-44 bg-slate-700 rounded-xl" />
              <div className="h-4 w-3/4 bg-slate-700 rounded" />
              <div className="h-3 w-1/2 bg-slate-700 rounded" />
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}