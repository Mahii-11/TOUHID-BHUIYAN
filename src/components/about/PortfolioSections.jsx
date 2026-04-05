import AchievementsSection from "./AchievementsSection";
import DegreesSection from "./DegreesSection";

export default function PortfolioSections() {
  return (
    <div
      className="min-h-screen w-full"
      style={{
        background:
          "linear-gradient(135deg, #0b0f2a 0%, #0d1235 60%, #0a0e28 100%)",
      }}
    >
      <AchievementsSection />

      <div className="max-w-5xl mx-auto px-6 md:px-16 lg:px-24">
        <div
          className="h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(168,85,247,0.4), rgba(59,130,246,0.4), transparent)",
          }}
        />
      </div>

      <DegreesSection />
    </div>
  );
}