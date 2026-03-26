import { useEffect, useState } from "react";
import { Button } from "../ui/button";

export default function LatestPublicationSlider() {
  const [data, setData] = useState([]);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    setData([
      {
        topic: "AI Governance",
        image:
          "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200",
        short_description:
          "Exploring modern AI policy frameworks and ethical governance systems.",
        link: "#",
      },
      {
        topic: "Cybersecurity",
        image:
          "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=1200",
        short_description:
          "New generation cybersecurity strategies for digital protection.",
        link: "#",
      },
      {
        topic: "Digital Policy",
        image:
          "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1200",
        short_description:
          "Understanding digital governance and policy transformation.",
        link: "#",
      },
    ]);
  }, []);

  // AUTOPLAY
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === data.length - 1 ? 0 : prev + 1));
    }, 4000);

    return () => clearInterval(interval);
  }, [data.length]);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 md:px-12">

        {/* HEADER */}
        <div className="flex items-end justify-between mb-10">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-navy font-serif">
              Latest Publications
            </h1>
            <div className="w-28 h-1 bg-gold mt-3 rounded-full"></div>
          </div>

          <Button className="bg-navy hover:bg-navy-light text-white px-6 py-2 rounded-sm">
            View All
          </Button>
        </div>

        {/* SLIDER */}
        <div className="relative overflow-hidden">

          <div
            className="flex transition-all duration-700 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {data.map((item, idx) => (
              <div
                key={idx}
                className="min-w-full px-2"
              >
                {/* CARD */}
                <div className="bg-gray-50 rounded-sm overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500">

                  {/* IMAGE TOP */}
                  <div className="h-[380px] overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.topic}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>

                  {/* CONTENT BOTTOM */}
                  <div className="p-6 space-y-4 text-center">

                    {/* TOPIC */}
                    <span className="inline-block text-xs uppercase tracking-widest bg-gold/10 text-gold px-4 py-1 rounded-full">
                      {item.topic}
                    </span>

                    {/* DESCRIPTION */}
                    <p className="text-gray-700 text-lg leading-relaxed max-w-2xl mx-auto">
                      {item.short_description}
                    </p>

                    {/* LINK */}
                    <a
                      href={item.link}
                      className="inline-block text-navy font-semibold hover:underline"
                    >
                      Read Full Publication →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* DOTS */}
          <div className="flex justify-center mt-6 gap-2">
            {data.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  current === idx ? "bg-navy w-6" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}