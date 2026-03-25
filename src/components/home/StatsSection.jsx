import { useEffect, useState } from "react"
import { getStatsSection } from "../../services/api";

export default function StatsSection() {

   const [stats, setStats] = useState([]);
   const [loading, setLoading] = useState(false);

   useEffect(() => {
      const loadStats = async () => {
         try {
            setLoading(true);
            const res = await getStatsSection();
            console.log("API Response:", res);
             setStats(res?.data);

         } catch (error) {
            console.error(error)
         } finally {
            setLoading(false);
         }
      };

      loadStats();
   }, []);

 return (
    <section className="bg-white py-12 border-b border-gray-200">
         <div className="container mx-auto px-6 md:px-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-gray-200">
               {stats?.map((item) => (
               <div 
               className="p-4"
               key={item.id}
               
               >
                  <div className="text-4xl font-serif font-bold text-navy mb-2">{item.count}+</div>
                  <div className="text-sm font-medium text-gray-500 uppercase tracking-wide">{item.title}</div>
               </div>
               ))}
            </div>
         </div>
      </section>
  )
}
