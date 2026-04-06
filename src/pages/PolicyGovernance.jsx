import { ShieldCheck, FileText, Users, Scale } from "lucide-react";

export default function PolicyGovernance() {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* HERO */}
      <section className="bg-gradient-to-r from-[#0a1f44] to-[#112e67] text-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Policy & Governance
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
            We are committed to maintaining the highest standards of integrity,
            transparency, and accountability across all our operations.
          </p>
        </div>
      </section>

      {/* POLICY CARDS */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: <ShieldCheck size={28} />,
              title: "Compliance Policy",
              desc: "Ensuring all operations meet legal and regulatory requirements.",
            },
            {
              icon: <FileText size={28} />,
              title: "Data Protection",
              desc: "Protecting user data with strict privacy and security standards.",
            },
            {
              icon: <Users size={28} />,
              title: "Ethical Conduct",
              desc: "Promoting honesty, fairness, and integrity in all activities.",
            },
            {
              icon: <Scale size={28} />,
              title: "Risk Management",
              desc: "Identifying and managing risks to ensure business continuity.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition"
            >
              <div className="text-[#0a1f44] mb-4">{item.icon}</div>
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* GOVERNANCE SECTION */}
      <section className="py-16 px-6 bg-white border-t">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">
            Governance Structure
          </h2>

          <div className="space-y-6">
            <div className="p-6 border rounded-xl hover:shadow-md transition">
              <h3 className="font-semibold text-lg mb-2">
                Board of Directors
              </h3>
              <p className="text-gray-600 text-sm">
                Provides strategic direction and ensures accountability in all
                company decisions.
              </p>
            </div>

            <div className="p-6 border rounded-xl hover:shadow-md transition">
              <h3 className="font-semibold text-lg mb-2">
                Executive Management
              </h3>
              <p className="text-gray-600 text-sm">
                Responsible for implementing policies and managing daily
                operations effectively.
              </p>
            </div>

            <div className="p-6 border rounded-xl hover:shadow-md transition">
              <h3 className="font-semibold text-lg mb-2">
                Audit & Compliance Team
              </h3>
              <p className="text-gray-600 text-sm">
                Ensures all activities align with internal policies and external
                regulations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA / DOWNLOAD */}
      <section className="py-20 px-6 bg-gradient-to-r from-[#0a1f44] to-[#112e67] text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">
            Access Our Full Policies
          </h2>
          <p className="text-gray-200 mb-6">
            Download detailed documentation about our policies and governance
            framework.
          </p>

          <button className="bg-white text-[#0a1f44] px-6 py-3 rounded-xl font-semibold hover:bg-gray-200 transition">
            Download Policy Document
          </button>
        </div>
      </section>
    </div>
  );
}