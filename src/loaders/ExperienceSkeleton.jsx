export default function ExperienceSkeleton() {
  return (
    <div className="animate-pulse space-y-14">
      {[...Array(4)].map((_, idx) => {
        const side = idx % 2 === 0 ? "right" : "left";

        return (
          <div key={idx} className="relative flex items-center">
            {/* Left side */}
            <div className="w-1/2 pr-8 flex justify-end">
              {side === "left" ? (
                <SkeletonCard />
              ) : (
                <div className="w-[20%] h-0.5 bg-slate-700/40 rounded" />
              )}
            </div>

            {/* Center dot */}
            <div className="absolute left-1/2 -translate-x-1/2 z-10">
              <div className="w-5 h-5 rounded-full bg-slate-700/50" />
            </div>

            {/* Right side */}
            <div className="w-1/2 pl-8 flex justify-start">
              {side === "right" ? (
                <SkeletonCard />
              ) : (
                <div className="w-[20%] h-0.5 bg-slate-700/40 rounded" />
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

function SkeletonCard() {
  return (
    <div className="w-[77%]">
      <div
        className="rounded-2xl p-5"
        style={{
          background: "rgba(255,255,255,0.04)",
          backdropFilter: "blur(14px)",
          border: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <div className="flex items-start gap-3 mb-3">
          {/* Icon */}
          <div className="w-9 h-9 rounded-lg bg-slate-700/50" />

          {/* Text */}
          <div className="flex flex-col gap-2 w-full">
            <div className="h-3 w-1/2 bg-slate-700/50 rounded" />
            <div className="h-3 w-3/4 bg-slate-700/40 rounded" />
            <div className="h-2 w-1/3 bg-slate-700/30 rounded" />
          </div>
        </div>

        {/* Bottom line */}
        <div className="h-0.5 w-full bg-slate-700/30 rounded mt-2" />
      </div>
    </div>
  );
}