import { useEffect, useState } from "react";
import { getSettings } from "../../services/api";


export default function AboutSection() {
  const [about, setAbout] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {

    const fetchAbout = async () => {
      try {
        setLoading(true);
        const res = await getSettings();
        setAbout(res);
      } catch (error) {
        console.error("Error fetching about data:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchAbout();
  }, [])

    if (loading)  {
        return (
    <section className="bg-gradient-to-b from-[#0d0d30] to-[#0a0a28] py-8 px-4">
      <div className="max-w-4xl mx-auto flex items-center gap-6 bg-[#12124a]/60 border border-purple-700/30 rounded-2xl px-6 py-5 shadow-lg animate-pulse">
        
        {/* Image Skeleton */}
        <div className="flex-shrink-0">
          <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl bg-slate-700/50 border border-purple-500/30" />
        </div>

        {/* Text Skeleton */}
        <div className="flex-1 space-y-2">
          <div className="h-3 w-full bg-slate-700/40 rounded" />
          <div className="h-3 w-5/6 bg-slate-700/40 rounded" />
          <div className="h-3 w-4/6 bg-slate-700/30 rounded" />
        </div>

      </div>
    </section>
  );
    }



  return (
    <section className="bg-gradient-to-b from-[#0d0d30] to-[#0a0a28] py-8 px-4">
      <div className="max-w-4xl mx-auto flex items-center gap-6 bg-[#12124a]/60 border border-purple-700/30 rounded-2xl px-6 py-5 shadow-lg">
        <div className="flex-shrink-0">
          <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl overflow-hidden border-2 border-purple-500/40">
            <img
              src={about.logo}
              alt="PROF. TOUHID BHUIYAN, PhD"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>

        <p className="text-purple-100 text-sm md:text-base leading-relaxed">
          {about.description}
        </p>
      </div>
    </section>
  );
}