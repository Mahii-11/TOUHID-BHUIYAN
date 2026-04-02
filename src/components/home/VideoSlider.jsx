import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fetchVideos } from "../../services/api";

// Helper → extract src from iframe
const getIframeSrc = (iframe) => {
  const match = iframe.match(/src="([^"]+)"/);
  return match ? match[1] : "";
};

// Helper → YouTube thumbnail fallback
const getYoutubeThumbnail = (src) => {
  try {
    const url = new URL(src);

    // youtube.com/watch?v=
    if (url.hostname.includes("youtube.com") && url.searchParams.get("v")) {
      return `https://img.youtube.com/vi/${url.searchParams.get("v")}/hqdefault.jpg`;
    }

    // youtu.be/
    if (url.hostname.includes("youtu.be")) {
      return `https://img.youtube.com/vi/${url.pathname.slice(1)}/hqdefault.jpg`;
    }

    // ✅ embed URL (IMPORTANT FIX)
    if (url.pathname.includes("/embed/")) {
      const videoId = url.pathname.split("/embed/")[1];
      return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
    }

  } catch {
    return null;
  }

  return null;
};

// Modal component
const VideoModal = ({ video, onClose }) => {
  useEffect(() => {
    const handleEsc = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!video) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="relative w-[95%] max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute top-3 right-3 z-10 bg-white/10 hover:bg-white/20 text-white px-3 py-1 rounded-md"
          >
            ✕
          </button>
          <div
            className="w-full h-full"
            dangerouslySetInnerHTML={{ __html: video }}
          />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

// Skeleton loader
const SkeletonCard = () => (
  <div className="min-w-[400px] md:min-w-[450px] h-[250px] rounded-2xl bg-white/10 animate-pulse" />
);

export default function VideoSlider() {
  const [videos, setVideos] = useState([]);
  const [activeVideo, setActiveVideo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getVideos = async () => {
      setLoading(true);
      const data = await fetchVideos();
      setVideos(data);
      setLoading(false);
    };
    getVideos();
  }, []);

  return (
    <>
    <div className="px-4 py-12">
        <h2 className="text-[#0B1D2A] text-3xl md:text-4xl font-bold text-center mb-8 tracking-wide">
      🎬 Media Gallery
     </h2>
   
    <div className="relative bg-[#0B1D2A] py-8 px-6 overflow-hidden">
      {/* Title 
      <h2 className="text-white text-3xl font-semibold mb-6">
        Featured Videos
      </h2>
      */}

      {/* Gradient edges */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-[#0B1D2A] to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-[#0B1D2A] to-transparent z-10" />

      {/* Horizontal scroll container */}
      <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4 no-scrollbar">
        {loading
          ? Array.from({ length: 5 }).map((_, i) => <SkeletonCard key={i} />)
          : videos.map((item) => {
              const src = getIframeSrc(item.video);
              const thumbnail = getYoutubeThumbnail(src);

              return (
                <motion.div
                  key={item.id}
                  whileHover={{ scale: 1.05 }}
                  className="relative min-w-[400px] md:min-w-[450px] h-[250px] snap-start rounded-2xl overflow-hidden cursor-pointer group shadow-lg ml-8"
                  onClick={() => setActiveVideo(item.video)}
                >
                  {/* Thumbnail or iframe */}
                  {thumbnail ? (
                    <img
                      src={thumbnail}
                      alt="video thumbnail"
                      className="w-full h-full object-cover rounded-2xl"
                    />
                  ) : (
                    <div
                      className="w-full h-full"
                      dangerouslySetInnerHTML={{ __html: item.video }}
                    />
                  )}

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition rounded-2xl" />

                  {/* Play button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white/20 backdrop-blur-md p-4 rounded-full group-hover:scale-110 transition shadow-lg">
                      ▶
                    </div>
                  </div>

                  {/* Glow ring */}
                  <div className="absolute inset-0 rounded-2xl ring-0 group-hover:ring-4 ring-blue-400/50 transition" />
                </motion.div>
              );
            })}
      </div>

      {/* Modal */}
      <VideoModal video={activeVideo} onClose={() => setActiveVideo(null)} />
    </div>

     </div>
    </>
  );
}