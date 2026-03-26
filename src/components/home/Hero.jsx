import { Button } from "../ui/button";
import { useEffect, useState } from "react";
import { getHeroData } from "../../services/api";
import HeroSkeleton from "../../loaders/HeroSkeleton";
import { Link } from "react-router";


export default function Hero() {
   const [hero, setHero] = useState([]);
   const [loading, setLoading] = useState(true);

 
  useEffect(() => {

    const loadHero = async () => {
      const data = await getHeroData();
      setHero(data?.data || []);
      setLoading(false);
    };

    loadHero();

  }, []);

  if (loading) return <HeroSkeleton />;


  return (
       <>
       {hero.length > 0 &&
       hero.map((data) => (
           <section 
           key={data.id}
            className="bg-navy text-white relative overflow-hidden">
             <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-blue-900/20 to-transparent pointer-events-none"></div>
             
             <div className="container mx-auto px-6 md:px-12 py-16 md:py-24 flex flex-col md:flex-row items-center">
                <div className="w-full md:w-3/5 z-10 space-y-8">
                   <div className="space-y-4">
                      <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium leading-tight">
                          {data.title1}<br/>
                         <span className="text-white/90">{data.title2}</span>
                      </h2>
                      <p className="text-gray-300 text-lg max-w-2xl leading-relaxed">
                         {data.description}
                      </p>
                   </div>
                   
                   <div className="flex flex-wrap gap-4 pt-4">
                    <Link to="/research">
                      <Button className="bg-gold hover:bg-yellow-600 text-navy font-semibold px-8 py-6 rounded-sm text-base cursor-pointer">
                         Explore Research
                      </Button>
                    </Link>
                   </div>
                </div>
                
                <div className="w-full md:w-2/5 mt-12 md:mt-0 relative flex justify-center md:ml-5">
                   <div className="relative z-10">
                     <div className="absolute -inset-4 border border-[#c9a84c]/40 rounded-sm z-0 translate-x-4 translate-y-4 hidden md:block"></div>
                      <img 
                        // src={data.image}
                        src="/images/touhid-01.png"
                         alt="Prof. Touhid Bhuiyan" 
                         className="relative z-10 w-full max-w-md rounded-sm shadow-2xl object-cover"
                         style={{maxHeight: '500px'}}
                      />
                   </div>
                </div>
             </div>
          </section>
       ))}
    </>
  )
}
