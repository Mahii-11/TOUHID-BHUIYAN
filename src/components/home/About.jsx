import { useEffect, useState } from "react"
import { getSettings } from "../../services/api";

export default function About() {
   const [des, setDes] = useState([]);
   

   useEffect(() => {
      const loadDes = async () => {
         try {
            const res = await getSettings();
            setDes(res);
         } catch (error) {
            console.error("Error fetching setting:", error);
         }
      }
      loadDes();
   }, [])






  return (
    <section className="bg-white py-16 md:py-24 border-b border-gray-100">
            <div className="container mx-auto px-6 md:px-12">
               <div className="flex flex-col md:flex-row gap-12">
                  <div className="w-full md:w-3/4 space-y-6">
                     <h3 className="text-3xl font-serif font-bold text-navy">About Prof. Touhid Bhuiyan</h3>
                     <div className="h-1 w-20 bg-gold"></div>
                     
                     <div className="text-gray-600 space-y-4 leading-relaxed text-lg">
                         {des?.description?.split("\r\n\r\n").map((para, index) => (
                         <p key={index}>{para}</p>
                         ))}
                     </div>

                         <div className="pt-4">
              <button className="group relative inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-[#0b1b3a] via-[#102a5c] to-[#0b1b3a] shadow-lg overflow-hidden transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_10px_30px_rgba(0,0,0,0.25)]">
                
                {/* Shine effect */}
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700"></span>

                <span className="relative">View More</span>

                {/* Arrow */}
                <svg
                  className="relative w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
                </div>
                  </div>
                  
               </div>
            </div>
         </section>
  )
}











{/* 
   
   <div className="flex flex-wrap gap-6 pt-4 text-sm font-medium text-navy/80">
                        <div className="flex items-center gap-2">
                           <span className="text-xl">🇺🇸</span> United States
                        </div>
                        <div className="flex items-center gap-2">
                           <IoMdSchool className="text-xl" /> WUST
                        </div>
                        <div className="flex items-center gap-2">
                           <FaGlobeAmericas className="text-xl" /> QUT Australia
                        </div>
                     </div> 
   
*/}
