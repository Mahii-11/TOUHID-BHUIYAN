import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MdClose, MdPlayArrow } from "react-icons/md";
import { fetchVideos } from "../services/api"; // tumar api.js path

// ─── Helpers ────────────────────────────────────────────────────────────────
const getIframeSrc = (iframe) => {
  const match = iframe.match(/src="([^"]+)"/);
  return match ? match[1] : "";
};

const getYoutubeThumbnail = (src) => {
  try {
    const url = new URL(src);
    if (url.hostname.includes("youtube.com") && url.searchParams.get("v")) {
      return `https://img.youtube.com/vi/${url.searchParams.get("v")}/hqdefault.jpg`;
    }
    if (url.hostname.includes("youtu.be")) {
      return `https://img.youtube.com/vi/${url.pathname.slice(1)}/hqdefault.jpg`;
    }
    if (url.pathname.includes("/embed/")) {
      const videoId = url.pathname.split("/embed/")[1];
      return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
    }
  } catch {
    return null;
  }
  return null;
};

// ─── Modal ────────────────────────────────────────────────────────────────────
function VideoModal({ video, onClose }) {
  useEffect(() => {
    const handleEsc = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!video) return null;

  return (
    <AnimatePresence>
      <motion.div
        key="grid-modal-backdrop"
        className="fixed inset-0 z-50 flex items-center justify-center bg-[#060d14]/95 backdrop-blur-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        data-testid="grid-modal-backdrop"
      >
        <motion.div
          className="relative w-[95%] max-w-5xl aspect-video bg-[#0b1d2a] rounded-3xl overflow-hidden shadow-[0_0_80px_rgba(56,189,248,0.12)] ring-1 ring-white/10"
          initial={{ scale: 0.88, opacity: 0, y: 24 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.88, opacity: 0, y: 24 }}
          transition={{ type: "spring", damping: 22, stiffness: 280 }}
          onClick={(e) => e.stopPropagation()}
          data-testid="grid-modal-container"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white/80 backdrop-blur-sm ring-1 ring-white/10 transition hover:bg-sky-500/20 hover:text-white hover:ring-sky-400/40"
            aria-label="Close"
            data-testid="grid-button-close-modal"
          >
            <MdClose size={18} />
          </button>
          <div className="w-full h-full" dangerouslySetInnerHTML={{ __html: video }} />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

// ─── Skeleton card ────────────────────────────────────────────────────────────
function SkeletonCard() {
  return (
    <div className="aspect-video rounded-2xl overflow-hidden bg-[#0d2035] relative">
      <div className="absolute inset-0 animate-pulse bg-gradient-to-br from-[#0d2035] via-[#112843]/80 to-[#0d2035]" />
      <div className="absolute inset-0 bg-[#112843]/60 rounded-2xl" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="h-12 w-12 rounded-full bg-white/5 ring-1 ring-white/10" />
      </div>
    </div>
  );
}

// ─── Main VideoGrid ───────────────────────────────────────────────────────────
export default function VideoGrid() {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeVideo, setActiveVideo] = useState(null);

  useEffect(() => {
    const loadVideos = async () => {
      setLoading(true);
      const data = await fetchVideos();
      setVideos(data);
      setLoading(false);
    };
    loadVideos();
  }, []);

  return (
    <>
      <div className="px-4 py-14 bg-white min-h-screen">
        {/* Section header */}
        <div className="text-center mb-10">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase bg-sky-500/10 text-sky-500 mb-4 ring-1 ring-sky-400/20">
            Media
          </span>
          <h2 className="text-[#0b1d2a] text-3xl md:text-4xl font-bold tracking-tight">
            Media Gallery
          </h2>
          <p className="mt-2 text-slate-500 text-sm max-w-sm mx-auto">
            Browse our featured video collection below.
          </p>
        </div>

        {/* Gallery block */}
        <div className="bg-[#0b1d2a] rounded-3xl py-10 px-8 shadow-2xl ring-1 ring-white/5 relative overflow-hidden">
          {/* Top shimmer line */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-400/30 to-transparent" />

          {/* 3-column grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" data-testid="video-grid">
            {loading
              ? Array.from({ length: 6 }).map((_, i) => <SkeletonCard key={i} />)
              : (videos ?? []).map((item, index) => {
                  const src = getIframeSrc(item.video);
                  const thumbnail = getYoutubeThumbnail(src);

                  return (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.35, delay: index * 0.06 }}
                      whileHover={{ scale: 1.03, y: -4 }}
                      className="relative aspect-video rounded-2xl overflow-hidden cursor-pointer group shadow-lg ring-1 ring-white/5"
                      onClick={() => setActiveVideo(item.video)}
                      data-testid={`grid-card-video-${item.id}`}
                    >
                      {thumbnail ? (
                        <img
                          src={thumbnail}
                          alt={item.title || "video thumbnail"}
                          className="w-full h-full object-cover rounded-2xl transition duration-300 group-hover:brightness-90 group-hover:scale-[1.04]"
                        />
                      ) : (
                        <div className="w-full h-full" dangerouslySetInnerHTML={{ __html: item.video }} />
                      )}

                      {/* Overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0b1d2a]/75 via-[#0b1d2a]/20 to-transparent transition duration-300 group-hover:from-[#0b1d2a]/50 group-hover:via-transparent rounded-2xl" />

                      {/* Play button */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 backdrop-blur-md ring-1 ring-white/20 transition duration-300 group-hover:scale-110 group-hover:bg-sky-500/30 group-hover:ring-sky-400/50 group-hover:shadow-[0_0_20px_rgba(56,189,248,0.3)]">
                          <MdPlayArrow size={26} className="text-white translate-x-px drop-shadow-md" />
                        </div>
                      </div>

                      {/* Title */}
                      {item.title && (
                        <div className="absolute bottom-3 left-3 right-3">
                          <p
                            className="text-white/90 text-xs font-medium truncate drop-shadow"
                            data-testid={`grid-text-title-${item.id}`}
                          >
                            {item.title}
                          </p>
                        </div>
                      )}

                      {/* Glow ring */}
                      <div className="absolute inset-0 rounded-2xl ring-0 group-hover:ring-2 ring-sky-400/40 transition duration-300" />
                    </motion.div>
                  );
                })}
          </div>

          {/* Bottom shimmer line */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
        </div>
      </div>

      <VideoModal video={activeVideo} onClose={() => setActiveVideo(null)} />
    </>
  );
}