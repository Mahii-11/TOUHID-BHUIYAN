import React, { useEffect } from "react";
import { X } from "lucide-react";

const categoryColors = {
  Lecture: "rgba(6,182,212,0.85)",
  Keynote: "rgba(139,92,246,0.85)",
  Interview: "rgba(249,115,22,0.85)",
};

function getCategoryColor(category) {
  return categoryColors[category] ?? "rgba(99,102,241,0.85)";
}

function getEmbedSrc(videoHtml) {
  const srcMatch = videoHtml.match(/src="([^"]+)"/);
  if (!srcMatch) return "";
  const url = srcMatch[1];
  if (url.includes("?")) {
    return url + "&autoplay=1";
  }
  return url + "?autoplay=1";
}

export function VideoModal({ video, onClose }) {
  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (video) {
      document.addEventListener("keydown", handler);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [video, onClose]);

  if (!video) return null;

  const embedSrc = getEmbedSrc(video.video);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{
        background: "rgba(0,0,0,0.85)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        animation: "fadeIn 0.2s ease-out",
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className="relative w-full max-w-5xl rounded-2xl overflow-hidden"
        style={{
          background: "rgba(15,23,42,0.95)",
          border: "1px solid rgba(139,92,246,0.4)",
          boxShadow:
            "0 0 60px rgba(139,92,246,0.3), 0 25px 80px rgba(0,0,0,0.8)",
          animation: "scaleIn 0.25s ease-out",
        }}
      >
        <div
          className="flex items-center justify-between px-5 py-4"
          style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
        >
          <div className="flex items-center gap-3">
            <span
              className="px-3 py-1 rounded-full text-xs font-semibold text-white"
              style={{
                background: getCategoryColor(video.category),
                boxShadow: `0 0 10px ${getCategoryColor(video.category)}`,
              }}
            >
              {video.category}
            </span>
            <h3 className="text-white font-semibold text-sm md:text-base truncate max-w-xs md:max-w-lg">
              {video.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full flex items-center justify-center text-slate-400 hover:text-white transition-colors duration-200"
            style={{
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="relative aspect-video bg-black">
          <iframe
            src={embedSrc}
            title={video.title}
            className="w-full h-full"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.94) translateY(8px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
      `}</style>
    </div>
  );
}