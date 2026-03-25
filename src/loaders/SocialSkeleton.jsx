function SocialSkeleton() {
  return (
    <div className="flex gap-2 justify-center sm:ml-4">
      {[1,2,3,4].map((item) => (
        <div
          key={item}
          className="w-8 h-8 rounded-full bg-gray-300 animate-pulse"
        />
      ))}
    </div>
  );
}

export default SocialSkeleton;