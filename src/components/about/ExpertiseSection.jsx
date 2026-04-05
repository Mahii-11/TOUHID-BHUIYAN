import {
  Shield,
  Brain,
  LineChart,
  FileText,
} from "lucide-react";

const expertiseData = [
  {
    id: 1,
    title: "Cybersecurity",
    icon: <Shield className="w-7 h-7" />,
    color: "from-blue-700 to-blue-500",
    border: "border-blue-600/40",
  },
  {
    id: 2,
    title: "AI & Machine Learning",
    icon: <Brain className="w-7 h-7" />,
    color: "from-cyan-700 to-cyan-500",
    border: "border-cyan-600/40",
  },
  {
    id: 3,
    title: "Data Analytics",
    icon: <LineChart className="w-7 h-7" />,
    color: "from-pink-700 to-purple-600",
    border: "border-pink-500/40",
  },
  {
    id: 4,
    title: "Research & Publications",
    icon: <FileText className="w-7 h-7" />,
    color: "from-indigo-700 to-indigo-500",
    border: "border-indigo-600/40",
  },
];

export default function ExpertiseSection() {
  return (
    <section className="bg-[#0a0a28] py-10 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-center text-2xl font-bold text-white mb-8">
          <span>Professional </span>
          <span className="text-purple-400">Experience</span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {expertiseData.map((item) => (
            <div
              key={item.id}
              className={`flex flex-col items-center gap-3 bg-[#13134a]/70 border ${item.border} rounded-2xl px-4 py-5 hover:scale-105 transition-transform cursor-default`}
            >
              <div
                className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white shadow-lg`}
              >
                {item.icon}
              </div>

              <span className="text-white text-sm font-semibold text-center leading-tight">
                {item.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}