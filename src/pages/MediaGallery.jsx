import { useState, useMemo, useEffect } from "react";
import { CategoryTabs } from "../components/Video/CategoryTabs";
import { FeaturedVideo } from "../components/Video/FeaturedVideo";
import { VideoCard } from "../components/Video/VideoCard";
import { VideoModal } from "../components/Video/VideoModal";
import { Monitor, Film } from "lucide-react";
import { getMedia } from "../services/api";
import  MediaSkeleton  from "../loaders/MediaSkeleton";

export function MediaGallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videosData, setVideosData] = useState([]);
  const [loading, setLoading] = useState(true);


   useEffect(() => {
    const loadMedia = async () => {
      try {
        const data = await getMedia();
        setVideosData(data || []);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadMedia();
  }, []);
  

  const categories = useMemo(() => {
    return ["All", ...new Set(videosData.map(v => v.category))];
  }, [videosData]);

 const filteredVideos = useMemo(() => {
    if (activeCategory === "All") return videosData;
    return videosData.filter(v => v.category === activeCategory);
  }, [activeCategory, videosData]);

  const featuredVideo = filteredVideos[0] ?? null;
  const gridVideos = filteredVideos.slice(1);

  if (loading) return (
    <MediaSkeleton />
  )

  return (
    <div
      className="min-h-screen relative"
      style={{
        background:
          "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(99,102,241,0.12) 0%, transparent 60%), radial-gradient(ellipse 60% 40% at 80% 100%, rgba(139,92,246,0.08) 0%, transparent 50%), #060b18",
      }}
    >
      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Blurred circles */}
      <div
        className="absolute top-0 left-1/4 w-56 h-56 sm:w-72 sm:h-72 md:w-96 md:h-96 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />
      <div
        className="absolute top-1/3 right-1/4 w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(139,92,246,0.07) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-14">
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs sm:text-sm font-semibold text-violet-300 mb-4"
            style={{
              background: "rgba(139,92,246,0.12)",
              border: "1px solid rgba(139,92,246,0.3)",
            }}
          >
            <Film className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span>Media Archive</span>
          </div>

          <h1
            className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4"
            style={{
              background:
                "linear-gradient(135deg, #e2e8f0 0%, #94a3b8 40%, #818cf8 70%, #a78bfa 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Media &amp; Lectures
          </h1>

          <p className="text-slate-400 text-sm sm:text-base md:text-lg max-w-md sm:max-w-2xl mx-auto leading-relaxed">
            A curated collection of talks, keynotes, interviews, and academic
            lectures. Explore recorded appearances across conferences,
            universities, and media.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="mb-6 sm:mb-10 flex flex-wrap justify-center gap-2">
          <CategoryTabs
            categories={categories}
            activeCategory={activeCategory}
            onSelect={setActiveCategory}
          />
        </div>

        {/* Empty state */}
        {filteredVideos.length === 0 && (
          <div
            className="flex flex-col items-center justify-center py-16 sm:py-24 rounded-2xl"
            style={{
              background: "rgba(255,255,255,0.02)",
              border: "1px dashed rgba(255,255,255,0.1)",
            }}
          >
            <Monitor className="w-10 h-10 sm:w-12 sm:h-12 text-slate-600 mb-4" />
            <p className="text-slate-500 text-sm sm:text-base">
              No videos in this category.
            </p>
          </div>
        )}

        {/* Featured Video */}
        {featuredVideo && (
          <section className="mb-10">
            <div className="flex items-center gap-2 mb-4">
              <div
                className="w-1 h-5 rounded-full"
                style={{
                  background: "linear-gradient(180deg, #818cf8, #a78bfa)",
                }}
              />
              <h2 className="text-slate-300 text-sm font-semibold uppercase tracking-widest">
                Featured
              </h2>
            </div>
            <div className="w-full">
              <FeaturedVideo
                video={featuredVideo}
                onClick={setSelectedVideo}
                className="w-full h-auto sm:h-[220px] md:h-[320px] lg:h-[400px]"
              />
            </div>
          </section>
        )}

        {/* Video Grid */}
        {gridVideos.length > 0 && (
          <section>
            <div className="flex items-center gap-2 mb-4">
              <div
                className="w-1 h-5 rounded-full"
                style={{
                  background: "linear-gradient(180deg, #818cf8, #a78bfa)",
                }}
              />
              <h2 className="text-slate-300 text-sm font-semibold uppercase tracking-widest">
                More Videos
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
              {gridVideos.map((video, i) => (
                <div
                  key={video.id}
                  style={{
                    animation: `fadeSlideUp 0.4s ease-out ${i * 0.07}s both`,
                  }}
                >
                  <VideoCard
                    video={video}
                    onClick={setSelectedVideo}
                    className="w-full h-auto"
                  />
                </div>
              ))}
            </div>
          </section>
        )}
      </div>

      <VideoModal
        video={selectedVideo}
        onClose={() => setSelectedVideo(null)}
      />

      <style>{`
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}