import { Briefcase, GraduationCap, Shield, Globe } from "lucide-react";

const experiences = [
  {
    id: 1,
    role: "Professor",
    org: "Washington University",
    sub: "USA | Present",
    icon: GraduationCap,
    color: "#a855f7",
  },
  {
    id: 2,
    role: "Director",
    org: "Cyber Security Center",
    sub: "Bangladesh",
    icon: Shield,
    color: "#3b82f6",
  },
  {
    id: 3,
    role: "Head of Dept.",
    org: "CSE / SWE Daffodil Int'l University",
    sub: "Bangladesh",
    icon: Briefcase,
    color: "#a855f7",
  },
  {
    id: 4,
    role: "Researcher & Academic Contributor",
    org: "Global",
    sub: null,
    icon: Globe,
    color: "#3b82f6",
  },
];

function ExperienceCard({ item, side }) {
  const Icon = item.icon;

  return (
    <div
      className={`flex items-center w-full ${side === "left" ? "flex-row-reverse" : "flex-row"} gap-0`}
    >
      {/* Card */}
      <div className="w-[77%] flex-shrink-0">
  <div
    className={`relative rounded-2xl p-5 cursor-default group/card transition-all duration-300 ${side === "left" ? "mr-0" : "ml-0"}`}
    style={{
      background: "rgba(255,255,255,0.04)",
      backdropFilter: "blur(14px)",
      WebkitBackdropFilter: "blur(14px)",
      border: "1px solid rgba(255,255,255,0.08)",
      boxShadow: "0 4px 32px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.06)",
      transition: "all 0.3s ease",
    }}
    onMouseEnter={(e) => {
      const el = e.currentTarget; // <-- remove `as HTMLDivElement`
      el.style.transform = "scale(1.05)";
      el.style.background = `rgba(${item.color === "#a855f7" ? "168,85,247" : "59,130,246"},0.1)`;
      el.style.border = `1px solid ${item.color}55`;
      el.style.boxShadow = `0 12px 48px ${item.color}33, inset 0 1px 0 rgba(255,255,255,0.1)`;
    }}
    onMouseLeave={(e) => {
      const el = e.currentTarget; // <-- remove `as HTMLDivElement`
      el.style.transform = "scale(1)";
      el.style.background = "rgba(255,255,255,0.04)";
      el.style.border = "1px solid rgba(255,255,255,0.08)";
      el.style.boxShadow =
        "0 4px 32px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.06)";
    }}
  >
    {/* Top row: icon badge + role */}
    <div className="flex items-start gap-3 mb-3">
      <div
        className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
        style={{
          background: `${item.color}22`,
          border: `1px solid ${item.color}44`,
          boxShadow: `0 0 12px ${item.color}33`,
        }}
      >
        <Icon size={16} style={{ color: item.color }} />
      </div>
      <div className="flex flex-col">
        <h3 className="text-white font-bold text-base leading-tight">{item.role}</h3>
        <p
          className="text-sm font-semibold mt-0.5 leading-tight whitespace-nowrap"
          style={{
            background: `linear-gradient(90deg, ${item.color}, ${item.color === "#a855f7" ? "#3b82f6" : "#a855f7"})`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          {item.org}
        </p>
        {item.sub && (
          <p className="text-slate-500 text-xs mt-1">{item.sub}</p>
        )}
      </div>
    </div>

    {/* Bottom accent line */}
    <div
      className="h-0.5 rounded-full mt-2 opacity-30"
      style={{
        background: `linear-gradient(90deg, ${item.color}, transparent)`,
      }}
    />
  </div>
</div>

      {/* Branch connector */}
      <div className="flex-1 relative flex items-center">
        <div
          className="w-full h-0.5"
          style={{
            background: `linear-gradient(${side === "left" ? "270deg" : "90deg"}, ${item.color}99, ${item.color}11)`,
            boxShadow: `0 0 6px ${item.color}44`,
          }}
        />
      </div>

      {/* Center dot (placeholder — actual dot is rendered by parent) */}
      <div className="w-0" />
    </div>
  );
}

export function ExperienceSection() {
  return (
    <div
      className="min-h-screen w-full"
      style={{ background: "linear-gradient(135deg, #0b0f2a 0%, #0d1235 60%, #0a0e28 100%)" }}
    >
      <section className="px-6 py-20 md:px-16">
        <div className="max-w-5xl mx-auto">
          {/* Section header */}
          <div className="mb-20 text-center">
            <span
              className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-4"
              style={{
                background: "rgba(168,85,247,0.12)",
                color: "#c084fc",
                border: "1px solid rgba(168,85,247,0.25)",
              }}
            >
              Career
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
              Professional{" "}
              <span
                style={{
                  background: "linear-gradient(90deg,#a855f7,#3b82f6)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Experience
              </span>
            </h2>
            <p className="mt-4 text-slate-400 text-base max-w-lg mx-auto leading-relaxed">
              A decade-spanning journey across academia, cybersecurity, and global research.
            </p>
          </div>

          {/* ── DESKTOP BRANCH LAYOUT ── */}
          <div className="hidden md:block relative">
            {/* Central glowing vertical line */}
            <div
              className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5"
              style={{
                background:
                  "linear-gradient(180deg, transparent 0%, #a855f7 15%, #3b82f6 85%, transparent 100%)",
                boxShadow: "0 0 16px 3px rgba(168,85,247,0.4)",
              }}
            />

            {/* Timeline items */}
            <div className="relative space-y-14">
              {experiences.map((item, idx) => {
                const side = idx % 2 === 0 ? "right" : "left";
                const Icon = item.icon;
                return (
                  <div key={item.id} className="relative flex items-center">
                    {/* Left side */}
                    <div className="w-1/2 pr-8 flex justify-end">
                      {side === "left" ? (
                        <div className="w-[84%]">
                          <ExperienceCard item={item} side="left" />
                        </div>
                      ) : (
                        <div className="w-[20%] flex items-center">
                          <div
                            className="w-full h-0.5"
                            style={{
                              background: `linear-gradient(270deg, ${item.color}99, ${item.color}11)`,
                              boxShadow: `0 0 6px ${item.color}44`,
                            }}
                          />
                        </div>
                      )}
                    </div>

                    {/* Center glowing node */}
                    <div className="absolute left-1/2 -translate-x-1/2 z-10">
                      <div
                        className="w-5 h-5 rounded-full border-2 transition-all duration-300"
                        style={{
                          background: `radial-gradient(circle at center, ${item.color}, ${item.color}88)`,
                          borderColor: item.color,
                          boxShadow: `0 0 0 4px ${item.color}22, 0 0 20px 4px ${item.color}55`,
                        }}
                      />
                    </div>

                    {/* Right side */}
                    <div className="w-1/2 pl-8 flex justify-start">
                      {side === "right" ? (
                        <div className="w-[84%]">
                          <ExperienceCard item={item} side="right" />
                        </div>
                      ) : (
                        <div className="w-[10%] flex items-center">
                          <div
                            className="w-full h-0.5"
                            style={{
                              background: `linear-gradient(90deg, ${item.color}99, ${item.color}11)`,
                              boxShadow: `0 0 6px ${item.color}44`,
                            }}
                          />
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ── MOBILE LAYOUT ── */}
          <div className="md:hidden relative">
            {/* Left glowing vertical line */}
            <div
              className="absolute left-6 top-0 bottom-0 w-0.5"
              style={{
                background:
                  "linear-gradient(180deg, transparent 0%, #a855f7 15%, #3b82f6 85%, transparent 100%)",
                boxShadow: "0 0 12px 2px rgba(168,85,247,0.35)",
              }}
            />

            <div className="space-y-8">
              {experiences.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.id} className="relative flex items-start gap-6">
                    {/* Dot */}
                    <div className="relative z-10 flex-shrink-0">
                      <div
                        className="w-12 h-12 rounded-full flex items-center justify-center"
                        style={{
                          background: `${item.color}22`,
                          border: `2px solid ${item.color}88`,
                          boxShadow: `0 0 18px 4px ${item.color}44`,
                        }}
                      >
                        <Icon size={18} style={{ color: item.color }} />
                      </div>
                    </div>

                    {/* Card */}
                    <div
                      className="flex-1 rounded-2xl p-5 transition-all duration-300 cursor-default"
                      style={{
                        background: "rgba(255,255,255,0.04)",
                        backdropFilter: "blur(14px)",
                        WebkitBackdropFilter: "blur(14px)",
                        border: "1px solid rgba(255,255,255,0.08)",
                        boxShadow:
                          "0 4px 24px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.06)",
                      }}
                      onMouseEnter={(e) => {
                        const el = e.currentTarget;
                        el.style.background = `rgba(${item.color === "#a855f7" ? "168,85,247" : "59,130,246"},0.1)`;
                        el.style.border = `1px solid ${item.color}44`;
                        el.style.boxShadow = `0 8px 40px ${item.color}22`;
                      }}
                      onMouseLeave={(e) => {
                        const el = e.currentTarget;
                        el.style.background = "rgba(255,255,255,0.04)";
                        el.style.border = "1px solid rgba(255,255,255,0.08)";
                        el.style.boxShadow =
                          "0 4px 24px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.06)";
                      }}
                    >
                      <h3 className="text-white font-bold text-base leading-tight">{item.role}</h3>
                      <p
                        className="text-sm font-semibold mt-1"
                        style={{
                          background: `linear-gradient(90deg, ${item.color}, ${item.color === "#a855f7" ? "#3b82f6" : "#a855f7"})`,
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                        }}
                      >
                        {item.org}
                      </p>
                      {item.sub && (
                        <p className="text-slate-500 text-xs mt-1">{item.sub}</p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}