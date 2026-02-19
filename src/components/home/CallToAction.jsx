import { Button } from "../ui/button";


export default function CallToAction() {
  return (
    <section className="bg-navy text-white py-16 border-b border-white/10">
         <div className="container mx-auto px-6 md:px-12 text-center">
            <h3 className="text-2xl md:text-3xl font-serif italic mb-8">Invite Prof. Touhid Bhuiyan to Speak, Advise, or Collaborate.</h3>
            
            <div className="flex flex-col md:flex-row justify-center gap-6">
               <Button className="bg-gold hover:bg-yellow-600 text-navy font-bold px-8 py-6 text-lg rounded-sm w-full md:w-auto">
                  Request a Talk
               </Button>
               <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 px-8 py-6 text-lg rounded-sm w-full md:w-auto">
                  Collaboration Inquiry &gt;
               </Button>
            </div>
         </div>
      </section>
  )
}


 