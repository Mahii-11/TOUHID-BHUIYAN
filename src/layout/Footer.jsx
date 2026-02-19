import { Button } from "../components/ui/button";

export default function Footer() {
  return (
     <footer className="bg-navy-light text-gray-400 py-8 text-sm">
         <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
               © 2026 Touhid Bhuiyan. All Rights Reserved.
            </div>
            
            <div className="flex flex-wrap justify-center gap-6">
               <a href="#" className="hover:text-white transition-colors">About</a>
               <a href="#" className="hover:text-white transition-colors">Research</a>
               <a href="#" className="hover:text-white transition-colors">Policy</a>
               <a href="#" className="hover:text-white transition-colors">Media</a>
               <a href="#" className="hover:text-white transition-colors">Events</a>
               <a href="#" className="hover:text-white transition-colors">Contact</a>
            </div>
            
            <div className="flex items-center">
               <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 text-xs py-2 px-4 h-auto rounded-sm">
                  Subscribe
               </Button>
            </div>
         </div>
      </footer>
  )
}
