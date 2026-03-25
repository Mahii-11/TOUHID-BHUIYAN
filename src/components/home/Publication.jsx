import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { getPublicationData } from "../../services/api";
import PublicationSkeleton from "../../loaders/PublicationSkeleton";


export default function Publication() {
   const [activity, setActivity] = useState([]);
   const [loading, setLoading] = useState(true);


   useEffect(() => {
      const loadActivity = async () => {
         const data = await getPublicationData();
         setActivity(data?.data || []);
         setLoading(false);
      };
      loadActivity()

   }, []);

   if (loading) return <PublicationSkeleton />




  return (

    <section className="bg-navy py-16 md:py-24 text-white">
      <div className="container mx-auto px-6 md:px-12">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {activity.map((item) => (
            <div
              key={item.id}
              className="bg-gray-100 text-navy p-8 rounded-sm shadow-xl relative overflow-hidden "
            >

              <div className="absolute top-0 left-0 w-full h-2 bg-navy"></div>

              <h4 className="font-serif text-2xl font-bold mb-4">
                {item.title}
              </h4>

              <div className="h-px w-full bg-gray-300 mb-6"></div>

              <h5 className="font-serif text-xl font-bold mb-2">
                {item.sub_title}
              </h5>

              <p className="text-gray-600 mb-8 text-sm leading-relaxed">
                {item.description}
              </p>
              <div className="mt-auto">
                <Button className="bg-navy hover:bg-navy-light text-white rounded-sm w-full md:w-auto px-8">
                View Details &gt;
              </Button>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
    
  )
}
