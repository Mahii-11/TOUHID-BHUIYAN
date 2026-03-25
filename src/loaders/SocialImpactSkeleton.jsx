
export default function SocialImpactSkeleton() {
  return (
    <section className="bg-gray-50 py-16 md:py-24 relative">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="h-10 w-60 bg-gray-300 animate-pulse mb-10 rounded"></div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="group relative h-64 overflow-hidden rounded-sm shadow-lg cursor-pointer"
            >
              {/* Skeleton image */}
              <div className="w-full h-full bg-gray-300 animate-pulse"></div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-navy/60 flex flex-col items-center justify-center p-6 text-center">
                {/* Skeleton title */}
                <div className="h-6 w-32 bg-gray-400 rounded mb-2 animate-pulse"></div>
                {/* Skeleton icon */}
                <div className="w-12 h-12 border border-gold/50 rounded-full flex items-center justify-center mt-2">
                  <div className="h-6 w-6 bg-gray-400 rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Skeleton button */}
        <div className="flex justify-center mt-12">
          <div className="h-12 w-48 bg-gray-300 animate-pulse rounded-sm"></div>
        </div>
      </div>
    </section>
  );
}