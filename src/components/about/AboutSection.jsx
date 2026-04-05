

export default function AboutSection() {
  const aboutText =
    "I am a professor and researcher with a passion for cybersecurity, AI, and advanced IT systems. With years of experience in academia and industry, I strive to innovate and lead the next generation of digital solutions.";

  return (
    <section className="bg-gradient-to-b from-[#0d0d30] to-[#0a0a28] py-8 px-4">
      <div className="max-w-4xl mx-auto flex items-center gap-6 bg-[#12124a]/60 border border-purple-700/30 rounded-2xl px-6 py-5 shadow-lg">
        <div className="flex-shrink-0">
          <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl overflow-hidden border-2 border-purple-500/40">
            <img
              src="/images/touhid-01.png"
              alt="About"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>

        <p className="text-purple-100 text-sm md:text-base leading-relaxed">
          {aboutText}
        </p>
      </div>
    </section>
  );
}