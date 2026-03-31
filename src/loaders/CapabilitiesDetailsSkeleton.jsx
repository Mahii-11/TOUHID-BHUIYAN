import React from "react";

export default function CapabilitiesDetailsSkeleton() {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen py-20 px-4 md:px-10 animate-pulse">
      {/* Hero Skeleton */}
      <div className="text-center mb-20">
        <div className="h-10 w-64 bg-gray-200 mx-auto rounded mb-4" />
        <div className="h-4 w-96 bg-gray-200 mx-auto rounded" />
        <div className="w-24 h-1 bg-gray-200 mx-auto mt-6 rounded-full" />
      </div>

      {/* Sections Skeleton */}
      <div className="space-y-28 max-w-6xl mx-auto">
        {[1, 2, 3].map((_, index) => {
          const isReverse = index % 2 !== 0;

          return (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center gap-10 ${
                isReverse ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Left Card Skeleton */}
              <div className="md:w-1/2">
                <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 space-y-4">
                  <div className="h-3 w-20 bg-gray-200 rounded" />
                  <div className="h-6 w-40 bg-gray-200 rounded" />

                  <div className="space-y-2 mt-4">
                    <div className="h-3 w-full bg-gray-200 rounded" />
                    <div className="h-3 w-5/6 bg-gray-200 rounded" />
                    <div className="h-3 w-4/6 bg-gray-200 rounded" />
                  </div>

                  <div className="mt-6 h-[2px] w-20 bg-gray-200 rounded-full" />
                </div>
              </div>

              {/* Right Content Skeleton */}
              <div className="md:w-1/2">
                <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 space-y-3">
                  <div className="h-3 w-full bg-gray-200 rounded" />
                  <div className="h-3 w-full bg-gray-200 rounded" />
                  <div className="h-3 w-5/6 bg-gray-200 rounded" />
                  <div className="h-3 w-4/6 bg-gray-200 rounded" />
                  <div className="h-3 w-3/6 bg-gray-200 rounded" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
