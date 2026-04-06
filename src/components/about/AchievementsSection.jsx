import { useEffect, useState } from "react";
import {
  FaTrophy,
  FaMedal,
  FaStar,
  FaAward,
  FaCertificate,
} from "react-icons/fa";
import { getAchievementsAwards } from "../../services/api";
import AchievementsSkeleton from "../../loaders/AchievementsSkeleton";


const iconMap = {
  trophy: <FaTrophy className="w-5 h-5" />,
  award: <FaAward className="w-5 h-5" />,
  certificate: <FaCertificate className="w-5 h-5" />,
  medal: <FaMedal className="w-5 h-5" />,
  star: <FaStar className="w-5 h-5" />,
  default: <FaAward className="w-5 h-5" />,
};




const normalizeAchievements = (data) => {
  return data.map((item, index) => {
    const key =
      item.icon?.toLowerCase() ||
      item.title?.toLowerCase() ||
      "default";

    return {
      id: item.id || index,
      title: item.title,
      organization: item.organization,
      year: item.year,
      description: item.description,
      icon: iconMap[key] || iconMap.default,
    };
  });
};

export default function AchievementsSection() {
  const [achievements, setAchievements] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const res = await getAchievementsAwards();

        const rawData = res?.data || [];

        const normalized = normalizeAchievements(rawData);

        setAchievements(normalized);
      } catch (error) {
        console.error("Achievements fetch error:", error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);


  if (loading) {
  return (
    <section className="px-6 py-20 md:px-16 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <AchievementsSkeleton />
      </div>
    </section>
  );
}


  return (
    <section className="px-6 py-20 md:px-16 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16 text-center">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-4"
            style={{
              background: "rgba(168,85,247,0.12)",
              color: "#c084fc",
              border: "1px solid rgba(168,85,247,0.25)",
            }}
          >
            Recognition
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Achievements &amp;{" "}
            <span
              style={{
                background: "linear-gradient(90deg,#a855f7,#3b82f6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Awards
            </span>
          </h2>

          <p className="mt-4 text-slate-400 text-base max-w-xl mx-auto leading-relaxed">
            A selection of honors and recognitions received throughout my academic and research career.
          </p>
        </div>

        <div className="relative">
          <div
            className="absolute left-6 top-0 bottom-0 w-px"
            style={{
              background:
                "linear-gradient(180deg, transparent 0%, #a855f7 15%, #3b82f6 85%, transparent 100%)",
              boxShadow: "0 0 12px 2px rgba(168,85,247,0.35)",
            }}
          />

          <div className="space-y-10">
            {achievements.map((item, idx) => (
              <div key={idx} className="relative flex items-start gap-8 group">
                <div className="relative z-10 flex-shrink-0">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(168,85,247,0.25), rgba(59,130,246,0.25))",
                      border: "2px solid rgba(168,85,247,0.6)",
                      boxShadow: "0 0 18px 4px rgba(168,85,247,0.3)",
                      color: "#c084fc",
                    }}
                  >
                    {item.icon}
                  </div>
                </div>

                <div
                  className="flex-1 rounded-2xl p-6 transition-all duration-300 cursor-default"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    boxShadow: "0 4px 24px rgba(0,0,0,0.3)",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget;
                    el.style.background = "rgba(168,85,247,0.08)";
                    el.style.border = "1px solid rgba(168,85,247,0.3)";
                    el.style.boxShadow =
                      "0 8px 40px rgba(168,85,247,0.2), 0 0 0 1px rgba(168,85,247,0.15)";
                    el.style.transform = "translateX(4px)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget;
                    el.style.background = "rgba(255,255,255,0.04)";
                    el.style.border = "1px solid rgba(255,255,255,0.08)";
                    el.style.boxShadow = "0 4px 24px rgba(0,0,0,0.3)";
                    el.style.transform = "translateX(0)";
                  }}
                >
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                    <h3 className="text-white font-semibold text-lg">
                      {item.title}
                    </h3>

                    <span
                      className="text-xs font-semibold px-2.5 py-1 rounded-full"
                      style={{
                        background: "rgba(59,130,246,0.15)",
                        color: "#93c5fd",
                        border: "1px solid rgba(59,130,246,0.3)",
                      }}
                    >
                      {item.year}
                    </span>
                  </div>

                  <p
                    className="text-sm font-medium mb-2"
                    style={{
                      background: "linear-gradient(90deg,#c084fc,#60a5fa)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {item.organization}
                  </p>

                  <p className="text-slate-400 text-sm">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}