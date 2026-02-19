
export default function StatsSection() {
  return (
    <section className="bg-white py-12 border-b border-gray-200">
         <div className="container mx-auto px-6 md:px-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-gray-200">
               <div className="p-4">
                  <div className="text-4xl font-serif font-bold text-navy mb-2">100+</div>
                  <div className="text-sm font-medium text-gray-500 uppercase tracking-wide">Publications</div>
               </div>
               <div className="p-4">
                  <div className="text-4xl font-serif font-bold text-navy mb-2">20+</div>
                  <div className="text-sm font-medium text-gray-500 uppercase tracking-wide">International Talks</div>
               </div>
               <div className="p-4">
                  <div className="text-4xl font-serif font-bold text-navy mb-2">15+</div>
                  <div className="text-sm font-medium text-gray-500 uppercase tracking-wide">Years Experience</div>
               </div>
               <div className="p-4">
                  <div className="text-4xl font-serif font-bold text-navy mb-2">12+</div>
                  <div className="text-sm font-medium text-gray-500 uppercase tracking-wide">Policy Engagements</div>
               </div>
            </div>
         </div>
      </section>
  )
}
