import { motion } from "framer-motion";
import { Shield, BookOpen, Globe } from "lucide-react";
import { getCapabilitiesDetails } from "../services/api";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import CapabilitiesDetailsSkeleton from "../loaders/CapabilitiesDetailsSkeleton";


   const iconMap = {
        "Best Research Award": BookOpen,
        "Cybersecurity Specialist": Shield,
        "Policy & Social Impact": Globe
    }


export default function CapabilitiesDetails() {
    const { slug } = useParams();
    const [cards, setCards] = useState([]);
    const [loading, setLoading] = useState(true);
    
        useEffect(() => {
  const loadCards = async () => {
    if (!slug) return;

    try {
      setLoading(true);  
      const res = await getCapabilitiesDetails(slug);  
      if (!res) return;

      const formatted = {
        id: res.id,
        title: res.title,
        icon: iconMap[res.title] || BookOpen,
        short_description: res.short_description
          ?.split("\n")
          .map((i) => i.trim())
          .filter(Boolean),
        long_description: res.long_description?.trim(),
      };

      setCards([formatted]); // wrap in array for map in JSX
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  loadCards();
}, [slug]);

    if (loading) return <CapabilitiesDetailsSkeleton />;







  return (
    <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen py-20 px-4 md:px-10 relative">
      {/* Timeline line */}
      <div className="hidden md:block absolute left-1/2 top-40 w-[2px] h-[calc(100%-10rem)] bg-gradient-to-b from-transparent via-[#0B1E33]/40 to-transparent" />

      {/* Hero
      <div className="text-center mb-20">
        <h1 className="text-3xl md:text-5xl font-bold text-[#0B1E33] mb-4">
        Core Capabilities
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          A comprehensive overview of expertise, research, and impact across multiple domains.
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-[#0B1E33] to-[#163A5F] mx-auto mt-6 rounded-full" />
      </div>
      */}

      {/* Sections */}
      <div className="space-y-28 max-w-6xl mx-auto">
        {cards.map((item, index) => {
          const isReverse = index % 2 !== 0;
          const Icon = item.icon;

          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true }}
              className={`flex flex-col md:flex-row items-center gap-10 relative ${
                isReverse ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Timeline dot */}
              <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 bg-white rounded-full border border-gray-200 shadow-lg items-center justify-center">
                <Icon className="text-[#0B1E33]" size={20} />
              </div>

              {/* Left Card */}
              <div className="md:w-1/2">
                <div className="bg-white/80 backdrop-blur p-8 rounded-2xl shadow-md hover:shadow-2xl transition duration-300 border border-gray-100">
                  <span className="text-xs tracking-widest text-gray-400 uppercase">
                    Capability
                  </span>

                  <h2 className="text-2xl md:text-3xl font-semibold text-[#0B1E33] mt-2 mb-4">
                    {item.title}
                  </h2>

                  <ul className="space-y-2">
                    {item.short_description.map((point, i) => (
                      <li key={i} className="flex items-center text-gray-600">
                        <span className="w-2 h-2 bg-[#0B1E33] rounded-full mr-3" />
                        {point}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 h-[2px] w-20 bg-gradient-to-r from-[#0B1E33] to-[#163A5F] rounded-full" />
                </div>
              </div>

              {/* Right Content */}
              <div className="md:w-1/2">
                <div className="bg-white/80 backdrop-blur p-8 rounded-2xl shadow-md hover:shadow-2xl transition duration-300 border border-gray-100">
                  <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                    {item.long_description}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
