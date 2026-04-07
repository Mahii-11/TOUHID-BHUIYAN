import React from "react";
import { Play, Star } from "lucide-react";

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

export function FeaturedVideo({ video, onClick }) {
  const thumbnail =
    video.thumbnail ??
    `https://img.youtube.com/vi/${extractVideoId(video.video)}/maxresdefault.jpg`;

  return (
    <div
      className="group relative cursor-pointer rounded-3xl overflow-hidden transition-all duration-500 hover:scale-[1.01]"
      style={{
        background: "rgba(15,23,42,0.7)",
        border: "1px solid rgba(139,92,246,0.3)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        boxShadow: "0 0 40px rgba(139,92,246,0.15), 0 8px 40px rgba(0,0,0,0.5)",
      }}
      onClick={() => onClick(video)}
    >
      <div
        className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          boxShadow:
            "0 0 0 1px rgba(139,92,246,0.6), 0 0 40px rgba(139,92,246,0.25)",
        }}
      />

      <div className="relative aspect-video md:aspect-[21/9] overflow-hidden bg-slate-900">
        <img
          src={thumbnail}
          alt={video.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          onError={(e) => {
            e.target.src = `https://img.youtube.com/vi/${extractVideoId(
              video.video
            )}/hqdefault.jpg`;
          }}
        />

        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.2) 60%, rgba(0,0,0,0.1) 100%)",
          }}
        />

        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className="w-20 h-20 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110"
            style={{
              background:
                "linear-gradient(135deg, rgba(99,102,241,0.95) 0%, rgba(139,92,246,0.95) 100%)",
              boxShadow: "0 0 50px rgba(139,92,246,0.7)",
            }}
          >
            <Play className="w-8 h-8 text-white ml-1" fill="white" />
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
          <div className="flex items-center gap-2 mb-3">
            <div
              className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold text-white"
              style={{
                background: "rgba(251,191,36,0.2)",
                border: "1px solid rgba(251,191,36,0.5)",
              }}
            >
              <Star className="w-3 h-3 text-amber-400" fill="currentColor" />
              <span className="text-amber-300">Featured</span>
            </div>
            <span
              className="px-3 py-1 rounded-full text-xs font-semibold text-white"
              style={{
                background: getCategoryColor(video.category),
                boxShadow: `0 0 10px ${getCategoryColor(video.category)}`,
              }}
            >
              {video.category}
            </span>
          </div>
          <h2 className="text-white text-xl md:text-3xl font-bold leading-tight max-w-lg drop-shadow-lg">
            {video.title}
          </h2>
          <p className="text-slate-300 text-sm mt-2 opacity-80">
            Click to watch in fullscreen
          </p>
        </div>
      </div>
    </div>
  );
}