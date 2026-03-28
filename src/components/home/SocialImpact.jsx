import { FaGlobeAmericas } from "react-icons/fa";
import { IoMdSchool } from "react-icons/io";
import { MdPolicy } from "react-icons/md";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";
import { getSocialImpactData } from "../../services/api";
import SocialImpactSkeleton from "../../loaders/SocialImpactSkeleton";

const iconMap = {
  "Capacity Building": IoMdSchool,
  "Youth Mentoring": MdPolicy,
  "International Collaboration": FaGlobeAmericas,
};


export default function SocialImpact() {
  const [impacts, setImpacts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadImpacts = async () => {
      const data = await getSocialImpactData();
      setImpacts(data?.data || []);
      setLoading(false);
    };
    loadImpacts();
  }, []);

  if (loading) return <SocialImpactSkeleton />;

  return (
    <section className="bg-gray-50 py-16 md:py-24 relative">
      <div className="container mx-auto px-6 md:px-12 relative z-10">

        <h3 className="text-2xl font-serif font-bold text-navy mb-10 pl-4 border-l-4 border-gold">
          Driving Social Impact
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {impacts.map((item, id) => {
            const Icon = iconMap[item.title];

            return (
              <div
                key={id}
                className="group bg-white rounded-sm shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500"
              >

                {/* IMAGE */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />

                  {/* ICON OVERLAY (CENTER) */}
                  <div className="absolute inset-0 flex items-center justify-center bg-navy/40 group-hover:bg-navy/30 transition-colors duration-500">
                    <div className="w-14 h-14 rounded-full border border-gold/60 flex items-center justify-center backdrop-blur-sm bg-white/10 group-hover:scale-110 transition-transform duration-500">
                      <Icon className="text-gold text-2xl" />
                    </div>
                  </div>
                </div>

                {/* CONTENT */}
                <div className="p-6 text-center space-y-3">

                  {/* TITLE */}
                  <h4 className="text-navy font-serif text-lg font-bold tracking-wide">
                    {item.title}
                  </h4>

                  
                  <p className="text-gray-600 text-sm leading-relaxed">
                  {item.short_description}
                  </p>

                </div>
              </div>
            );
          })}

        </div>

        {/* CTA */}
        <div className="flex justify-center mt-12">
          <Button className="bg-navy hover:bg-navy-light text-white px-8 py-6 text-base rounded-sm shadow-xl hover:scale-105 transition-all duration-300">
            Visit Newsroom &gt;
          </Button>
        </div>

      </div>
    </section>
  );
}