import { FaDownload, FaGlobeAmericas } from "react-icons/fa";
import { IoMdSchool } from "react-icons/io";
import { Button } from "../ui/button";
export default function About() {
  return (
    <section className="bg-white py-16 md:py-24 border-b border-gray-100">
            <div className="container mx-auto px-6 md:px-12">
               <div className="flex flex-col md:flex-row gap-12">
                  <div className="w-full md:w-3/4 space-y-6">
                     <h3 className="text-3xl font-serif font-bold text-navy">About Prof. Touhid Bhuiyan</h3>
                     <div className="h-1 w-20 bg-gold"></div>
                     
                     <div className="text-gray-600 space-y-4 leading-relaxed text-lg">
                        <p>
                           Professor at Washington University of Science and Technology (WUST), USA, specializing in Cybersecurity, Artificial Intelligence, and Digital Governance.
                        </p>
                        <p>
                           PhD in Computer Science from Queensland University of Technology, Australia.
                        </p>
                     </div>
                     
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
                  </div>
                  
                  <div className="w-full md:w-1/4 flex items-center justify-start md:justify-end">
                     <Button variant="outline" className="border-navy/20 text-navy hover:bg-navy/5 px-8 py-6 w-full md:w-auto">
                        Download CV <FaDownload className="ml-2" />
                     </Button>
                  </div>
               </div>
            </div>
         </section>
  )
}
