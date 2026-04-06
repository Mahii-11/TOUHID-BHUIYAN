import React from "react";

export default function DegreesSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, idx) => (
          <div
            key={idx}
            className="rounded-2xl p-6 flex flex-col gap-4"
            style={{
              background: "rgba(255,255,255,0.035)",
              backdropFilter: "blur(12px)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            {/* Icon */}
            <div className="w-16 h-16 rounded-xl bg-slate-700/50 border border-slate-600/40" />

            {/* Title */}
            <div className="h-4 w-3/4 bg-slate-700/50 rounded" />

            {/* University */}
            <div className="h-3 w-2/3 bg-slate-700/40 rounded" />

            {/* Spacer */}
            <div className="flex-1" />

            {/* Footer */}
            <div className="flex items-center justify-between pt-2 border-t border-white/10">
              <div className="h-3 w-20 bg-slate-700/30 rounded" />
              <div className="h-5 w-12 bg-slate-700/40 rounded-full" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}