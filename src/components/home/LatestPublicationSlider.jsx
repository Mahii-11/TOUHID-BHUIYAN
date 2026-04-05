import { useEffect, useState } from "react";
import { getPublicationHome } from "../../services/api";
import { ChevronLeft, ChevronRight, ExternalLink, BookOpen } from "lucide-react";

export default function LatestPublicationSlider() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const loadPublicationSlider = async () => {
      try {
        setLoading(true);
        const result = await getPublicationHome();
        console.log("RESULT 👉", result);
        setData(result.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    loadPublicationSlider();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === data.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, [data.length]);

  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-6 md:px-12">

        {/* HEADER */}
        <div className="flex items-end justify-between mb-16">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-7 h-0.5 rounded-full bg-[#0b0f2a]" />
              <span className="text-xs font-bold tracking-[0.18em] uppercase text-[#0b0f2a]">
                Research Output
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-[#0b0f2a] tracking-tight leading-tight">
              Latest{" "}
              <span className="relative inline-block">
                Publications
                <span
                  className="absolute -bottom-1 left-0 h-[3px] w-full rounded-full"
                  style={{
                    background:
                      "linear-gradient(90deg,#a855f7,#3b82f6)",
                  }}
                />
              </span>
            </h2>
          </div>

          <button
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white transition-all duration-300"
            style={{
              background: "#0b0f2a",
              boxShadow: "0 4px 16px rgba(11,15,42,0.25)",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget;
              el.style.background =
                "linear-gradient(135deg,#a855f7,#3b82f6)";
              el.style.boxShadow =
                "0 8px 24px rgba(168,85,247,0.35)";
              el.style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget;
              el.style.background = "#0b0f2a";
              el.style.boxShadow =
                "0 4px 16px rgba(11,15,42,0.25)";
              el.style.transform = "translateY(0)";
            }}
          >
            View All
            <ExternalLink size={13} />
          </button>
        </div>

        {/* SLIDER */}
        <div className="relative overflow-hidden">
          <div
            className="flex transition-all duration-700 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {data.map((item, idx) => (
              <div key={idx} className="min-w-full">

                <div
                  className="flex flex-col md:flex-row rounded-2xl overflow-hidden transition-all duration-500 group"
                  style={{
                    background: "#ffffff",
                    boxShadow:
                      "0 2px 8px rgba(11,15,42,0.06), 0 12px 40px rgba(11,15,42,0.08)",
                    border: "1px solid rgba(11,15,42,0.06)",
                    minHeight: "300px",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget;
                    el.style.boxShadow =
                      "0 4px 16px rgba(11,15,42,0.08), 0 20px 60px rgba(11,15,42,0.14)";
                    el.style.transform = "translateY(-3px)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget;
                    el.style.boxShadow =
                      "0 2px 8px rgba(11,15,42,0.06), 0 12px 40px rgba(11,15,42,0.08)";
                    el.style.transform = "translateY(0)";
                  }}
                >
                  {/* IMAGE */}
                  <div
                    className="md:w-[36%] flex-shrink-0 relative overflow-hidden"
                    style={{ minHeight: "260px" }}
                  >
                    <img
                      src={item.image}
                      alt={item.topic}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>

                  {/* CONTENT */}
                  <div className="flex-1 flex flex-col justify-center px-8 md:px-10 py-10 space-y-5">

                    <div className="flex items-center gap-2.5">
                      <div
                        className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ background: "#0b0f2a" }}
                      >
                        <BookOpen size={13} className="text-white" />
                      </div>

                      <span
                        className="text-xs font-bold tracking-widest uppercase"
                        style={{ color: "#a855f7" }}
                      >
                        {item.topic}
                      </span>
                    </div>

                    <p
                      className="text-base md:text-lg leading-relaxed max-w-xl font-medium"
                      style={{ color: "#1e2a4a" }}
                    >
                      {item.short_description}
                    </p>

                    <div
                      className="h-px w-12"
                      style={{
                        background:
                          "linear-gradient(90deg,#a855f7,#3b82f6)",
                      }}
                    />

                    {item.pdf && item.pdf !== "#" && (
                      <a
                        href={item.pdf}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-bold transition-all duration-300 w-fit group/link"
                        style={{ color: "#0b0f2a" }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.color = "#a855f7";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.color = "#0b0f2a";
                        }}
                      >
                        Read Full Publication
                        <ExternalLink
                          size={13}
                          className="transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                        />
                      </a>
                    )}

                    {/* NAV */}
                    <div className="flex items-center gap-3 pt-3">

                      <button
                        onClick={() =>
                          setCurrent((prev) =>
                            prev === 0 ? data.length - 1 : prev - 1
                          )
                        }
                        className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-300 text-white"
                        style={{
                          background: "#0b0f2a",
                          boxShadow:
                            "0 2px 8px rgba(11,15,42,0.2)",
                        }}
                        onMouseEnter={(e) => {
                          const el = e.currentTarget;
                          el.style.background =
                            "linear-gradient(135deg,#a855f7,#3b82f6)";
                          el.style.boxShadow =
                            "0 4px 14px rgba(168,85,247,0.35)";
                        }}
                        onMouseLeave={(e) => {
                          const el = e.currentTarget;
                          el.style.background = "#0b0f2a";
                          el.style.boxShadow =
                            "0 2px 8px rgba(11,15,42,0.2)";
                        }}
                      >
                        <ChevronLeft size={15} />
                      </button>

                      <button
                        onClick={() =>
                          setCurrent((prev) =>
                            prev === data.length - 1 ? 0 : prev + 1
                          )
                        }
                        className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-300 text-white"
                        style={{
                          background: "#0b0f2a",
                          boxShadow:
                            "0 2px 8px rgba(11,15,42,0.2)",
                        }}
                        onMouseEnter={(e) => {
                          const el = e.currentTarget;
                          el.style.background =
                            "linear-gradient(135deg,#a855f7,#3b82f6)";
                          el.style.boxShadow =
                            "0 4px 14px rgba(168,85,247,0.35)";
                        }}
                        onMouseLeave={(e) => {
                          const el = e.currentTarget;
                          el.style.background = "#0b0f2a";
                          el.style.boxShadow =
                            "0 2px 8px rgba(11,15,42,0.2)";
                        }}
                      >
                        <ChevronRight size={15} />
                      </button>

                      <div className="flex items-center gap-1.5 ml-1">
                        {data.map((_, i) => (
                          <button
                            key={i}
                            onClick={() => setCurrent(i)}
                            className="rounded-full transition-all duration-300"
                            style={{
                              width:
                                current === i ? "1.4rem" : "0.4rem",
                              height: "0.4rem",
                              background:
                                current === i
                                  ? "#0b0f2a"
                                  : "rgba(11,15,42,0.15)",
                            }}
                          />
                        ))}
                      </div>

                      <span className="ml-auto text-xs font-semibold tabular-nums text-slate-400">
                        {String(current + 1).padStart(2, "0")}
                        <span className="mx-1 text-slate-300">/</span>
                        {String(data.length).padStart(2, "0")}
                      </span>
                    </div>

                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}