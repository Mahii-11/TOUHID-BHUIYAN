import { Button } from "../ui/button";


export default function Publication() {
  return (
     <section className="bg-navy py-16 md:py-24 text-white">
         <div className="container mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
               {/* Latest Publication */}
               <div className="bg-gray-100 text-navy p-8 rounded-sm shadow-xl relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-2 bg-navy"></div>
                  <h4 className="font-serif text-2xl font-bold mb-4">Latest Publication</h4>
                  <div className="h-px w-full bg-gray-300 mb-6"></div>
                  
                  <h5 className="font-serif text-xl font-bold mb-2">Recent Advances in AI Security</h5>
                  <p className="text-gray-600 mb-8 text-sm leading-relaxed">
                     A comprehensive review of adversarial attacks on neural networks and potential defense mechanisms in critical infrastructure systems. Published in IEEE Transactions.
                  </p>
                  
                  <Button className="bg-navy hover:bg-navy-light text-white rounded-sm w-full md:w-auto px-8">
                     View Publication &gt;
                  </Button>
               </div>

               {/* In the Media */}
               <div className="bg-gray-100 text-navy p-8 rounded-sm shadow-xl relative overflow-hidden flex flex-col justify-between">
                  <div className="absolute top-0 left-0 w-full h-2 bg-navy"></div>
                  <div>
                    <h4 className="font-serif text-2xl font-bold mb-4">In the Media</h4>
                    <div className="h-px w-full bg-gray-300 mb-6"></div>
                    
                    <div className="flex items-start gap-4 mb-6">
                       <div className="bg-green-600 p-2 rounded text-white font-bold text-2xl">TC</div>
                       <div>
                          <h5 className="font-bold text-lg">Interview on Emerging Cyber Threats</h5>
                          <p className="text-gray-500 text-sm">Vestibulum id ligula porta felis euismod semper.</p>
                       </div>
                    </div>
                  </div>
                  
                  <Button className="bg-navy hover:bg-navy-light text-white rounded-sm w-full md:w-auto px-8 self-start">
                     Read Coverage &gt;
                  </Button>
               </div>
            </div>
         </div>
      </section>
  )
}
