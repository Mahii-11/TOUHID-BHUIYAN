import {
  FaGraduationCap,
  FaBrain,
  FaFlask,
  FaUniversity,
  FaGlobe,
  FaMicroscope,
} from "react-icons/fa";

const degrees = [
  {
    degree: "PhD in Computer Science",
    university: "Massachusetts Institute of Technology",
    year: "2015",
    icon: FaGraduationCap,
  },
  {
    degree: "MSc in Artificial Intelligence",
    university: "Stanford University",
    year: "2011",
    icon: FaBrain,
  },
  {
    degree: "BSc in Mathematics & CS",
    university: "University of California, Berkeley",
    year: "2009",
    icon: FaFlask,
  },
  {
    degree: "Postdoctoral Research",
    university: "Carnegie Mellon University",
    year: "2017",
    icon: FaMicroscope,
  },
  {
    degree: "Visiting Scholar",
    university: "Oxford University",
    year: "2019",
    icon: FaGlobe,
  },
  {
    degree: "Research Fellowship",
    university: "Max Planck Institute",
    year: "2016",
    icon: FaUniversity,
  },
];

export default function DegreesSection() {
  return (
    <section className="px-6 py-20 md:px-16 lg:px-24">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16 text-center">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-4"
            style={{
              background: "rgba(59,130,246,0.12)",
              color: "#60a5fa",
              border: "1px solid rgba(59,130,246,0.25)",
            }}
          >
            Education
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Academic{" "}
            <span
              style={{
                background: "linear-gradient(90deg,#3b82f6,#a855f7)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Degrees
            </span>
          </h2>

          <p className="mt-4 text-slate-400 text-base max-w-xl mx-auto leading-relaxed">
            Educational background spanning world-class institutions, shaping expertise across
            computer science and mathematics.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {degrees.map((deg, idx) => {
            const Icon = deg.icon;

            return (
              <div
                key={idx}
                className="rounded-2xl p-6 flex flex-col gap-4 cursor-default"
                style={{
                  background: "rgba(255,255,255,0.035)",
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  boxShadow:
                    "0 4px 24px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.06)",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget;
                  el.style.background = "rgba(168,85,247,0.07)";
                  el.style.border = "1px solid rgba(168,85,247,0.28)";
                  el.style.boxShadow =
                    "0 12px 48px rgba(168,85,247,0.18), inset 0 1px 0 rgba(255,255,255,0.1)";
                  el.style.transform = "translateY(-4px) scale(1.01)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget;
                  el.style.background = "rgba(255,255,255,0.035)";
                  el.style.border = "1px solid rgba(255,255,255,0.08)";
                  el.style.boxShadow =
                    "0 4px 24px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.06)";
                  el.style.transform = "translateY(0) scale(1)";
                }}
              >
                {/* Icon */}
                <div
                  className="w-16 h-16 rounded-xl flex items-center justify-center"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(168,85,247,0.2), rgba(59,130,246,0.2))",
                    border: "1px solid rgba(168,85,247,0.25)",
                  }}
                >
                  <Icon
                    style={{
                      fontSize: "1.75rem",
                      background: "linear-gradient(135deg,#a855f7,#3b82f6)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col gap-1.5 flex-1">
                  <h3 className="text-white font-semibold text-base leading-snug">
                    {deg.degree}
                  </h3>

                  <p
                    className="text-sm font-medium leading-snug"
                    style={{
                      background: "linear-gradient(90deg,#c084fc,#60a5fa)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {deg.university}
                  </p>
                </div>

                {/* Footer */}
                <div
                  className="flex items-center justify-between pt-2"
                  style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
                >
                  <span className="text-slate-500 text-xs">Completed</span>

                  <span
                    className="text-xs font-bold px-2.5 py-1 rounded-full"
                    style={{
                      background: "rgba(168,85,247,0.15)",
                      color: "#c084fc",
                      border: "1px solid rgba(168,85,247,0.3)",
                    }}
                  >
                    {deg.year}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}