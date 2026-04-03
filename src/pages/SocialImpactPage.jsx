import { useEffect, useState } from "react";
import { getSocialImpactData } from "../services/api";
import SocialImpactSkeleton from "../loaders/SocialImpactSkeleton";
import { FaGlobeAmericas } from "react-icons/fa";
import { IoMdSchool } from "react-icons/io";
import { MdPolicy } from "react-icons/md";

const iconMap = {
  "Capacity Building": IoMdSchool,
  "Youth Mentoring": MdPolicy,
  "International Collaboration": FaGlobeAmericas,
};

export default function SocialImpactPage() {
  const [impacts, setImpacts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      const data = await getSocialImpactData();
      setImpacts(data?.data || []);
      setLoading(false);
    };
    loadData();
  }, []);

  if (loading) return <SocialImpactSkeleton />;

  return (
    <section className="bg-gray-50 min-h-screen py-20">
      <div className="container mx-auto px-6 md:px-12">

        {/* HEADER */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-navy font-serif">
            Social Impact Initiatives
          </h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            Exploring all initiatives focused on capacity building, mentoring, and global collaboration.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

          {impacts.map((item, id) => {
            const Icon = iconMap[item.title];

            return (
              <div
                key={id}
                className="group bg-white rounded-sm shadow-md hover:shadow-2xl transition-all duration-500"
              >
                {/* IMAGE */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />

                  {/* ICON */}
                  <div className="absolute inset-0 flex items-center justify-center bg-navy/40 group-hover:bg-navy/30">
                    <div className="w-12 h-12 rounded-full border border-gold flex items-center justify-center bg-white/10 backdrop-blur-sm">
                      <Icon className="text-gold text-xl" />
                    </div>
                  </div>
                </div>

                {/* CONTENT */}
                <div className="p-5 text-center">
                  <h4 className="text-navy font-serif font-bold">
                    {item.title}
                  </h4>

                  <p className="text-gray-600 text-sm mt-2">
                    {item.short_description}
                  </p>
                </div>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}