export default function HeroSkeleton() {
  return (
    <section className="bg-navy text-white">
      <div className="container mx-auto px-6 md:px-12 py-16 md:py-24 flex flex-col md:flex-row items-center animate-pulse">

        <div className="w-full md:w-3/5 space-y-6">

          <div className="h-10 bg-white/20 rounded w-3/4"></div>
          <div className="h-10 bg-white/20 rounded w-2/3"></div>

          <div className="h-5 bg-white/20 rounded w-1/2"></div>
          <div className="h-5 bg-white/20 rounded w-1/3"></div>

          <div className="flex gap-4 pt-4">
            <div className="h-12 w-40 bg-white/20 rounded"></div>
            <div className="h-12 w-40 bg-white/20 rounded"></div>
          </div>

        </div>

        <div className="w-full md:w-2/5 mt-10 md:mt-0 flex justify-center">
          <div className="w-72 h-96 bg-white/20 rounded"></div>
        </div>

      </div>
    </section>
  );
}