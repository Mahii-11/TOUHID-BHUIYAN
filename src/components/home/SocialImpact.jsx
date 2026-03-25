import { FaGlobeAmericas } from "react-icons/fa";
import { IoMdSchool } from "react-icons/io";
import { MdPolicy } from "react-icons/md";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";
import { getSocialImpactData } from "../../services/api"
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
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                 {/* Background decorative geometry could go here */}
              </div>
             <div className="container mx-auto px-6 md:px-12 relative z-10">
                <h3 className="text-2xl font-serif font-bold text-navy mb-10 pl-4 border-l-4 border-gold">Driving Social Impact</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {impacts.map((item, id) => {

                     const Icon = iconMap[item.title];
                     return (

                         <div 
                         key={id}
                         className="group relative h-64 overflow-hidden rounded-sm shadow-lg cursor-pointer">
                      <img  src={item.image} alt="Capacity Building" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-navy/60 group-hover:bg-navy/50 transition-colors flex flex-col items-center justify-center p-6 text-center">
                         <h4 className="text-white font-serif text-xl font-bold mb-2"> {item.title}</h4>
                         <div className="w-12 h-12 border border-gold/50 rounded-full flex items-center justify-center mt-2">
                            <Icon className="text-gold text-xl" />
                         </div>
                      </div>
                   </div>

                   );
                 })}
               </div>

    
                <div className="flex justify-center mt-12">
                   <Button className="bg-navy hover:bg-navy-light text-white px-8 py-6 text-base rounded-sm shadow-xl">
                      Visit Newsroom &gt;
                   </Button>
                </div>
             </div>
          </section>
  )
}
