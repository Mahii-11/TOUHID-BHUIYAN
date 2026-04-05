export default function HeroSection() {
  return (
    <section className="relative min-h-[420px] bg-gradient-to-br from-[#0a0a2e] via-[#10104a] to-[#1a0a3e] overflow-hidden flex items-center">
      
      {/* Background glow */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(ellipse at 70% 50%, rgba(120,40,200,0.5) 0%, transparent 60%), radial-gradient(ellipse at 30% 80%, rgba(60,20,140,0.4) 0%, transparent 50%)",
        }}
      />

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full max-w-5xl mx-auto px-6 py-10 gap-8">
        
        {/* Left Content */}
        <div className="flex-1 min-w-0">
          <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-3">
            Building{" "}
            <span className="text-purple-400">Secure &amp;</span>
            <br />
            <span className="text-purple-400">Intelligent</span>{" "}
            <span className="text-white">Digital Systems</span>
          </h1>

          <p className="text-purple-200 text-sm mb-6">
            Cybersecurity Expert | AI Researcher | 150+ Publications
          </p>

          <div className="flex gap-3 flex-wrap">
            <button className="bg-purple-600 hover:bg-purple-700 text-white text-sm font-semibold px-5 py-2 rounded-full transition-colors">
              Work With Me
            </button>

            <button className="border border-purple-400 text-purple-200 hover:bg-purple-800/40 text-sm font-semibold px-5 py-2 rounded-full transition-colors">
              View Portfolio
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-shrink-0 flex items-end justify-center">
          <div
            className="relative rounded-2xl overflow-hidden border border-purple-500/40"
            style={{
              background: "rgba(80,30,160,0.18)",
              boxShadow: "0 0 60px 10px rgba(120,40,220,0.18)",
            }}
          >
            <img
              src="/images/walter.png"
              alt="Professor"
              className="w-52 md:w-64 object-cover object-top"
              style={{ maxHeight: 280, minHeight: 220 }}
            />
          </div>
        </div>
      </div>

      {/* Bottom line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
    </section>
  );
}