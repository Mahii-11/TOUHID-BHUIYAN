"use client";

import { useEffect, useState } from "react";
import { fetchVideos } from "../../services/api";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

// iframe theke src ber kora
const getIframeSrc = (iframeString) => {
  const match = iframeString.match(/src="([^"]+)"/);
  return match ? match[1] : "";
};

// youtube thumbnail generate
const getThumbnail = (src) => {
  const videoId = src.split("/embed/")[1]?.split("?")[0];
  return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
};

const VideoSlider = () => {
  const [videos, setVideos] = useState([]);
  const [playingId, setPlayingId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const loadVideos = async () => {
      try {
        const data = await fetchVideos();
        setVideos(data);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    loadVideos();
  }, []);

  // ✅ Loading UI
  if (loading) {
    return (
      <div className="flex gap-4 p-6">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="w-full h-[220px] bg-gray-300 animate-pulse rounded-2xl"
          />
        ))}
      </div>
    );
  }

  // ❌ Error UI
  if (error) {
    return (
      <div className="text-center py-10 text-red-500">
        Failed to load videos 😢
      </div>
    );
  }

  return (
    <div className="w-full max-w-6xl mx-auto py-6">
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        grabCursor={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 2 },
        }}
      >
        {videos.map((item) => {
          const src = getIframeSrc(item.video);
          const thumbnail = getThumbnail(src);

          return (
            <SwiperSlide key={item.id}>
              <div className="rounded-2xl overflow-hidden shadow-xl bg-black relative group">
                
                {playingId === item.id ? (
                  <iframe
                    className="w-full h-[220px] md:h-[260px] lg:h-[300px]"
                    src={src + "?autoplay=1"}
                    title={`video-${item.id}`}
                    frameBorder="0"
                    allowFullScreen
                  />
                ) : (
                  <div
                    className="relative cursor-pointer"
                    onClick={() => setPlayingId(item.id)}
                  >
                    <img
                      src={thumbnail}
                      alt="video thumbnail"
                      className="w-full h-[220px] md:h-[260px] lg:h-[300px] object-cover"
                    />

                    {/* Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-white/80 backdrop-blur-md p-4 rounded-full shadow-lg group-hover:scale-110 transition">
                        ▶
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default VideoSlider;