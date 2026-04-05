import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fetchVideos } from "../../services/api"; // Your api.js file path

// ─── Helpers (same logic) ────────────────────────────────────────────────
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

// ─── Modal ─────────────────────────────────────────────────────────────
const VideoModal = ({ video, onClose }) => {
  useEffect(() => {
    const handleEsc = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!video) return null;

  // ভিডিও স্ট্রিং-এ যদি iframe থাকে, তবে সেটিতে Tailwind ক্লাস যুক্ত করে দিচ্ছি
  const formattedVideo = video.replace(
    /<iframe /g,
    '<iframe class="w-full h-full absolute inset-0" '
  );

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-[#060d14]/95 backdrop-blur-md p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl ring-1 ring-white/10"
          initial={{ scale: 0.88, opacity: 0, y: 24 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.88, opacity: 0, y: 24 }}
          transition={{ type: "spring", damping: 22, stiffness: 280 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-black/40 text-white/90 backdrop-blur-md ring-1 ring-white/20 transition hover:bg-red-500 hover:text-white"
            aria-label="Close"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>

          {/* Video Container */}
          <div
            className="relative w-full h-full"
            dangerouslySetInnerHTML={{ __html: formattedVideo }}
          />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
// ─── Skeleton card ────────────────────────────────────────────────────
const SkeletonCard = () => (
  <div className="min-w-[400px] md:min-w-[460px] h-[258px] flex-shrink-0 rounded-2xl overflow-hidden bg-[#0d2035] relative">
    <div className="absolute inset-0 animate-pulse bg-gradient-to-br from-[#0d2035] via-[#112843]/80 to-[#0d2035]" />
    <div className="absolute inset-0 m-0 bg-[#112843]/60 rounded-2xl" />
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="h-12 w-12 rounded-full bg-white/5 ring-1 ring-white/10" />
    </div>
  </div>
);

// ─── Main component ──────────────────────────────────────────────────
export default function VideoSlider() {
  const [videos, setVideos] = useState([]);
  const [activeVideo, setActiveVideo] = useState(null);
  const [loading, setLoading] = useState(true);
  const scrollRef = useRef(null);

  useEffect(() => {
    const getVideos = async () => {
      setLoading(true);
      const data = await fetchVideos();
      setVideos(data);
      setLoading(false);
    };
    getVideos();
  }, []);

  const scrollBy = (direction) => {
    const container = scrollRef.current;
    if (!container) return;
    const cardWidth = 460 + 24; // min-w + gap
    container.scrollBy({
      left: direction === "next" ? cardWidth : -cardWidth,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="px-4 py-14 bg-white">
        <div className="text-center mb-10">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase bg-sky-500/10 text-sky-400 mb-4 ring-1 ring-sky-400/20">
            Media
          </span>
          <h2 className="text-[#0b1d2a] text-3xl md:text-4xl font-bold tracking-tight">
            Media Gallery
          </h2>
          <p className="mt-2 text-slate-500 text-sm max-w-sm mx-auto">
            Browse our featured video collection below.
          </p>
        </div>

        <div className="relative bg-[#0b1d2a] rounded-3xl py-10 px-6 overflow-hidden shadow-2xl ring-1 ring-white/5">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-400/30 to-transparent" />
          <div className="pointer-events-none absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-[#0b1d2a] to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-[#0b1d2a] to-transparent z-10" />

          {!loading && (
            <button
              onClick={() => scrollBy("prev")}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-[#0d2035]/90 text-white/70 ring-1 ring-white/10 backdrop-blur-sm transition hover:bg-sky-500/20 hover:text-sky-300 hover:ring-sky-400/40 hover:shadow-[0_0_16px_rgba(56,189,248,0.2)] active:scale-95"
              aria-label="Previous"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>
          )}

          {!loading && (
            <button
              onClick={() => scrollBy("next")}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-[#0d2035]/90 text-white/70 ring-1 ring-white/10 backdrop-blur-sm transition hover:bg-sky-500/20 hover:text-sky-300 hover:ring-sky-400/40 hover:shadow-[0_0_16px_rgba(56,189,248,0.2)] active:scale-95"
              aria-label="Next"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          )}

          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-2 no-scrollbar scroll-smooth"
          >
            {loading
              ? Array.from({ length: 5 }).map((_, i) => <SkeletonCard key={i} />)
              : videos.map((item, index) => {
                  const src = getIframeSrc(item.video);
                  const thumbnail = getYoutubeThumbnail(src);

                  return (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.03, y: -3 }}
                      transition={{ type: "spring", stiffness: 300, damping: 22 }}
                      className="relative min-w-[400px] md:min-w-[460px] h-[258px] flex-shrink-0 snap-start rounded-2xl overflow-hidden cursor-pointer group shadow-lg ring-1 ring-white/5"
                      onClick={() => setActiveVideo(item.video)}
                    >
                      {thumbnail ? (
                        <img
                          src={thumbnail}
                          alt="video thumbnail"
                          className="w-full h-full object-cover rounded-2xl transition duration-300 group-hover:brightness-90 group-hover:scale-[1.02]"
                        />
                      ) : (
                         <div className="relative w-full h-full">
                         <div
                          className="absolute inset-0 w-full h-full"
                          dangerouslySetInnerHTML={{
                         __html: video.replace(/<iframe /,'<iframe class="w-full h-full object-cover" '
                        ),
                        }}
                       />
                        </div>
                      )}

                      <div className="absolute inset-0 bg-gradient-to-t from-[#0b1d2a]/70 via-[#0b1d2a]/20 to-transparent transition duration-300 group-hover:from-[#0b1d2a]/50 group-hover:via-transparent rounded-2xl" />

                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-white/10 backdrop-blur-md ring-1 ring-white/20 transition duration-300 group-hover:scale-110 group-hover:bg-sky-500/30 group-hover:ring-sky-400/50 group-hover:shadow-[0_0_24px_rgba(56,189,248,0.3)]">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-6 h-6 text-white translate-x-0.5 drop-shadow-md"
                          >
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </div>

                      <div className="absolute inset-0 rounded-2xl ring-0 group-hover:ring-2 ring-sky-400/40 transition duration-300 group-hover:shadow-[inset_0_0_24px_rgba(56,189,248,0.06)]" />
                    </motion.div>
                  );
                })}
          </div>

          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
        </div>
      </div>

      <VideoModal video={activeVideo} onClose={() => setActiveVideo(null)} />
    </>
  );
}