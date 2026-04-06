

export default function AchievementsSkeleton() {
  return (
    <div className="animate-pulse">
      {/* vertical line */}
      <div
        className="absolute left-6 top-0 bottom-0 w-px"
        style={{
          background:
            "linear-gradient(180deg, transparent 0%, rgba(168,85,247,0.3) 50%, transparent 100%)",
        }}
      />

      <div className="space-y-10 relative">
        {[...Array(5)].map((_, idx) => (
          <div key={idx} className="relative flex items-start gap-8">
            
            {/* Icon circle */}
            <div className="relative z-10 flex-shrink-0">
              <div className="w-12 h-12 rounded-full bg-slate-700/50 border border-slate-600/40" />
            </div>

            {/* Card */}
            <div
              className="flex-1 rounded-2xl p-6"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              {/* Title + Year */}
              <div className="flex justify-between items-center mb-3 gap-3">
                <div className="h-4 w-1/2 bg-slate-700/50 rounded" />
                <div className="h-4 w-14 bg-slate-700/40 rounded-full" />
              </div>

              {/* Organization */}
              <div className="h-3 w-1/3 bg-slate-700/40 rounded mb-3" />

              {/* Description */}
              <div className="space-y-2">
                <div className="h-3 w-full bg-slate-700/30 rounded" />
                <div className="h-3 w-5/6 bg-slate-700/30 rounded" />
                <div className="h-3 w-2/3 bg-slate-700/30 rounded" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}