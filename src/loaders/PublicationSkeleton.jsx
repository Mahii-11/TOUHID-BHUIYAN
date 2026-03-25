export default function PublicationSkeleton() {
  return (
    <section className="bg-navy py-16 md:py-24 text-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 animate-pulse">

          {/* Left Skeleton */}
          <div className="bg-gray-200 p-8 rounded-sm shadow-xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gray-300"></div>

            <div className="h-6 bg-gray-300 w-40 mb-6 rounded"></div>
            <div className="h-px w-full bg-gray-300 mb-6"></div>

            <div className="h-5 bg-gray-300 w-3/4 mb-3 rounded"></div>
            <div className="h-4 bg-gray-300 w-full mb-2 rounded"></div>
            <div className="h-4 bg-gray-300 w-5/6 mb-6 rounded"></div>

            <div className="h-10 bg-gray-300 w-40 rounded"></div>
          </div>

          {/* Right Skeleton */}
          <div className="bg-gray-200 p-8 rounded-sm shadow-xl relative overflow-hidden flex flex-col justify-between">
            <div>
              <div className="absolute top-0 left-0 w-full h-2 bg-gray-300"></div>

              <div className="h-6 bg-gray-300 w-36 mb-6 rounded"></div>
              <div className="h-px w-full bg-gray-300 mb-6"></div>

              <div className="flex items-start gap-4 mb-6">
                <div className="w-10 h-10 bg-gray-300 rounded"></div>

                <div className="flex-1">
                  <div className="h-5 bg-gray-300 w-3/4 mb-2 rounded"></div>
                  <div className="h-4 bg-gray-300 w-1/2 rounded"></div>
                </div>
              </div>
            </div>

            <div className="h-10 bg-gray-300 w-40 rounded"></div>
          </div>

        </div>
      </div>
    </section>
  );
}