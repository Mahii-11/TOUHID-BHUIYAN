const projects = [
  {
    id: 1,
    title: "AI Automation System",
    img: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=400&q=80",
  },
  {
    id: 2,
    title: "Cybersecurity Audit",
    img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&q=80",
  },
  {
    id: 3,
    title: "Audio Steganography",
    img: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=400&q=80",
  },
  {
    id: 4,
    title: "Data Analytics Dashboard",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=80",
  },
  {
    id: 5,
    title: "SQL Injection Analysis",
    img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&q=80",
  },
  {
    id: 6,
    title: "Data Visualization Tool",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&q=80",
  },
  {
    id: 7,
    title: "Code War: AI in Cybersecurity",
    img: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800&q=80",
    wide: true,
  },
];

export default function PortfolioSection() {
  return (
    <section className="bg-[#0d0d35] py-10 px-4">
      <div className="max-w-4xl mx-auto">
        
        <h2 className="text-center text-2xl font-bold text-white mb-8">
          <span>Portfolio</span>
          <span className="text-purple-400"> &amp; Projects</span>
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {projects.map((proj) => (
            <div
              key={proj.id}
              className={`relative flex flex-col items-end justify-end rounded-xl overflow-hidden cursor-pointer group transition-transform hover:scale-105 ${
                proj.wide ? "sm:col-span-2" : ""
              }`}
              style={{ minHeight: 120 }}
            >
              <img
                src={proj.img}
                alt={proj.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="relative z-10 w-full px-3 py-2">
                <span className="text-white text-xs font-semibold block leading-tight drop-shadow">
                  {proj.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}