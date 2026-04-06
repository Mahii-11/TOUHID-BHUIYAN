import { useEffect, useState } from "react";
import { ExternalLink, FileText } from "lucide-react";
import { getPublicationHome } from "../../services/api";
import PublicationSkeleton from "../../loaders/PublicationSkeleton";

export default function BossLevelPublication() {
  const [publications, setPublications] = useState([]);
  const [index, setIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const loadPublicationSlider = async () => {
      try {
        setLoading(true);
        const result = await getPublicationHome();
        setPublications(result?.data || []);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    loadPublicationSlider();
  }, []);

  useEffect(() => {
    if (paused || publications.length === 0) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % publications.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [paused, publications]);

  // 🔥 LOADING STATE
  if (loading) return <PublicationSkeleton />;

  // 🔥 EMPTY STATE
  if (!publications.length) {
    return (
      <section className="py-14 bg-[#0b1220] text-center text-gray-400">
        No publications found
      </section>
    );
  }

  return (
    <section className="py-14 bg-gradient-to-b from-[#0d0d30] to-[#0a0a28] text-white overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
        {/* HEADER */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold tracking-tight">
            Latest Publications
          </h2>
          <p className="text-xs text-gray-400">
            Research & insights
          </p>
        </div>

        {/* SLIDER */}
        <div
          className="relative h-[320px] flex items-center justify-center"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {publications.map((item, i) => {
            const position =
              i === index
                ? "z-20 scale-100 opacity-100"
                : i === (index + 1) % publications.length
                ? "z-10 translate-x-36 scale-[0.85] opacity-40 blur-sm"
                : i === (index - 1 + publications.length) % publications.length
                ? "z-10 -translate-x-36 scale-[0.85] opacity-40 blur-sm"
                : "opacity-0";

            return (
              <TiltCard key={item.id} className={position}>
                <img
                  src={item.image}
                  alt={item.topic}
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-4 flex flex-col justify-end">
                  
                  <span className="text-[9px] bg-white/10 px-2 py-1 rounded-full border border-white/20 w-fit mb-2">
                    {item.year}
                  </span>

                  <h3 className="text-sm font-medium line-clamp-2 mb-1">
                    {item.topic}
                  </h3>

                  <p className="text-[11px] text-gray-300 line-clamp-2 mb-3">
                    {item.short_description}
                  </p>

                  <div className="flex gap-2">
                    <a
                      href={item.link}
                      target="_blank"
                      className="text-[10px] bg-white text-black px-2 py-1 rounded-full flex items-center gap-1"
                    >
                      <ExternalLink size={10} />
                      View
                    </a>

                    <a
                      href={item.pdf}
                      target="_blank"
                      className="text-[10px] bg-white/10 px-2 py-1 rounded-full border border-white/20 flex items-center gap-1"
                    >
                      <FileText size={10} />
                      PDF
                    </a>
                  </div>
                </div>
              </TiltCard>
            );
          })}
        </div>

        {/* DOTS */}
        <div className="flex justify-center mt-6 gap-2">
          {publications.map((_, i) => (
            <div
              key={i}
              className={`h-[5px] rounded-full transition-all ${
                i === index ? "w-5 bg-white" : "w-2 bg-gray-600"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* TILT CARD */
function TiltCard({ children, className }) {
  const handleMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = -(y / rect.height - 0.5) * 8;
    const rotateY = (x / rect.width - 0.5) * 8;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
  };

  const reset = (e) => {
    e.currentTarget.style.transform =
      "perspective(1000px) rotateX(0) rotateY(0) scale(1)";
  };

  return (
    <div
      onMouseMove={handleMove}
      onMouseLeave={reset}
      className={`absolute w-[280px] md:w-[320px] h-[300px] rounded-2xl overflow-hidden shadow-xl transition-all duration-700 ${className}`}
    >
      {children}
    </div>
  );
}