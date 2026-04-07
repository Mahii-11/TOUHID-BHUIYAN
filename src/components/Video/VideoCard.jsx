import React from "react";
import { Play } from "lucide-react";

const categoryColors = {
  Lecture: "rgba(6,182,212,0.85)",
  Keynote: "rgba(139,92,246,0.85)",
  Interview: "rgba(249,115,22,0.85)",
};

function getCategoryColor(category) {
  return categoryColors[category] ?? "rgba(99,102,241,0.85)";
}

function extractVideoId(videoHtml) {
  const match = videoHtml.match(/embed\/([^"?]+)/);
  return match ? match[1] : "";
}

export function VideoCard({ video, onClick }) {
  return (
    <div
      onClick={() => onClick(video)}
      className="group relative cursor-pointer rounded-2xl overflow-hidden transition-all duration-300"
      style={{
        background: "rgba(15,23,42,0.6)",
        border: "1px solid rgba(255,255,255,0.08)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        boxShadow: "0 4px 24px rgba(0,0,0,0.4)",
      }}
    >
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          boxShadow:
            "0 0 0 1px rgba(139,92,246,0.5), 0 0 24px rgba(139,92,246,0.2)",
        }}
      />

      <div className="relative aspect-video overflow-hidden bg-slate-900">
        {video.thumbnail ? (
          <img
            src={video.thumbnail}
            alt={video.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            onError={(e) => {
              e.target.src = `https://img.youtube.com/vi/${extractVideoId(
                video.video
              )}/hqdefault.jpg`;
            }}
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-slate-800 to-slate-900" />
        )}

        <div
          className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
          style={{
            background: "rgba(0,0,0,0.55)",
            backdropFilter: "blur(2px)",
          }}
        >
          <div
            className="w-14 h-14 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
            style={{
              background:
                "linear-gradient(135deg, rgba(99,102,241,0.9) 0%, rgba(139,92,246,0.9) 100%)",
              boxShadow: "0 0 32px rgba(139,92,246,0.6)",
            }}
          >
            <Play className="w-6 h-6 text-white ml-1" fill="white" />
          </div>
        </div>

        <div className="absolute top-3 left-3">
          <span
            className="px-2.5 py-1 rounded-full text-xs font-semibold text-white tracking-wide"
            style={{
              background: getCategoryColor(video.category),
              boxShadow: `0 0 10px ${getCategoryColor(video.category)}`,
            }}
          >
            {video.category}
          </span>
        </div>
      </div>

      <div className="p-4">
        <h3 className="text-white font-semibold text-sm leading-snug group-hover:text-violet-300 transition-colors duration-200">
          {video.title}
        </h3>
      </div>
    </div>
  );
}