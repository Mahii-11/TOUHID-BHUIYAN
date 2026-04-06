export default function PublicationSkeleton() {
  return (
    <section className="py-14 bg-[#0b1220]">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header Skeleton */}
        <div className="mb-8">
          <div className="h-6 w-48 bg-white/10 rounded animate-pulse mb-2"></div>
          <div className="h-4 w-32 bg-white/10 rounded animate-pulse"></div>
        </div>

        {/* Card Skeleton */}
        <div className="flex justify-center">
          <div className="w-[280px] md:w-[320px] h-[300px] rounded-2xl bg-white/10 animate-pulse"></div>
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-6 gap-2">
          <div className="w-6 h-[6px] bg-white/20 rounded-full"></div>
          <div className="w-2 h-[6px] bg-white/20 rounded-full"></div>
          <div className="w-2 h-[6px] bg-white/20 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}