import { Button } from "../ui/button";
import { Card, CardContent, CardFooter } from "../ui/card";

export default function Cards() {
  return (
     <section className="bg-gray-50 py-16">
             <div className="container mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                   {/* Card 1 */}
                   <Card className="border-none shadow-lg overflow-hidden bg-white rounded-sm flex flex-col">
                      <div className="bg-navy p-6 text-center relative">
                         <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 rotate-45 w-6 h-6 bg-navy"></div>
                         <h4 className="text-white font-serif text-xl tracking-wide">Academician</h4>
                      </div>
                      <CardContent className="pt-10 pb-8 grow">
                         <ul className="space-y-3 text-gray-600 text-sm">
                            <li className="flex items-start gap-2">
                               <span className="text-gold mt-1.5 text-[8px]">●</span> Research publications & Supervision
                            </li>
                            <li className="flex items-start gap-2">
                               <span className="text-gold mt-1.5 text-[8px]">●</span> International front specials
                            </li>
                            <li className="flex items-start gap-2">
                               <span className="text-gold mt-1.5 text-[8px]">●</span> Research Biz & collaboration
                            </li>
                         </ul>
                      </CardContent>
                      <CardFooter className="pb-8 pt-0 flex justify-center">
                         <Button className="bg-navy hover:bg-navy-light text-white w-full rounded-sm">
                            View Academic Profile &gt;
                         </Button>
                      </CardFooter>
                   </Card>
    
                   {/* Card 2 */}
                   <Card className="border-none shadow-lg overflow-hidden bg-white rounded-sm flex flex-col">
                      <div className="bg-navy p-6 text-center relative">
                         <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 rotate-45 w-6 h-6 bg-navy"></div>
                         <h4 className="text-white font-serif text-xl tracking-wide">Cybersecurity Specialist</h4>
                      </div>
                      <CardContent className="pt-10 pb-8 grow">
                         <ul className="grid grid-cols-2 gap-x-4 gap-y-3 text-gray-600 text-sm">
                            <li className="flex items-start gap-2">
                               <span className="text-gold mt-1.5 text-[8px]">●</span> Data & resilience
                            </li>
                            <li className="flex items-start gap-2">
                               <span className="text-gold mt-1.5 text-[8px]">●</span> Security systems
                            </li>
                            <li className="flex items-start gap-2">
                               <span className="text-gold mt-1.5 text-[8px]">●</span> Threat intelligence
                            </li>
                            <li className="flex items-start gap-2">
                               <span className="text-gold mt-1.5 text-[8px]">●</span> Threatcopy
                            </li>
                            <li className="flex items-start gap-2">
                               <span className="text-gold mt-1.5 text-[8px]">●</span> Protected mishaps
                            </li>
                         </ul>
                      </CardContent>
                      <CardFooter className="pb-8 pt-0 flex justify-center">
                         <Button className="bg-navy hover:bg-navy-light text-white w-full rounded-sm">
                            Explore Expertise &gt;
                         </Button>
                      </CardFooter>
                   </Card>
    
                   {/* Card 3 */}
                   <Card className="border-none shadow-lg overflow-hidden bg-white rounded-sm flex flex-col">
                      <div className="bg-navy p-6 text-center relative">
                         <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 rotate-45 w-6 h-6 bg-navy"></div>
                         <h4 className="text-white font-serif text-xl tracking-wide">Policy & Social Impact</h4>
                      </div>
                      <CardContent className="pt-10 pb-8 grow">
                         <ul className="space-y-3 text-gray-600 text-sm">
                            <li className="flex items-start gap-2">
                               <span className="text-gold mt-1.5 text-[8px]">●</span> AI governance & Cyber laws readiness
                            </li>
                            <li className="flex items-start gap-2">
                               <span className="text-gold mt-1.5 text-[8px]">●</span> Digital trust & National cyber security
                            </li>
                            <li className="flex items-start gap-2">
                               <span className="text-gold mt-1.5 text-[8px]">●</span> Engagement papers
                            </li>
                         </ul>
                      </CardContent>
                      <CardFooter className="pb-8 pt-0 flex justify-center">
                         <Button className="bg-navy hover:bg-navy-light text-white w-full rounded-sm">
                            Read Policy Work &gt;
                         </Button>
                      </CardFooter>
                   </Card>
                </div>
             </div>
          </section>
  )
}
