import React from "react";

export const RestaurantShimmerCard = () => {
  return (
    <div className="flex flex-col bg-white rounded-2xl overflow-hidden border border-slate-100 p-3 gap-3 shadow-2xs">
      <div className="w-full aspect-16/10 rounded-xl shimmer-bg"></div>
      <div className="flex flex-col gap-2">
        <div className="w-3/4 h-5 rounded-md shimmer-bg"></div>
        <div className="w-1/2 h-4 rounded-md shimmer-bg"></div>
        <div className="flex items-center gap-2 mt-1">
          <div className="w-12 h-4 rounded-md shimmer-bg"></div>
          <div className="w-16 h-4 rounded-md shimmer-bg"></div>
        </div>
      </div>
    </div>
  );
};

export const RestaurantShimmer = () => {
  return (
    <div className="flex flex-col gap-6 my-4">
      <div className="w-48 h-6 rounded-lg shimmer-bg"></div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {Array(8)
          .fill("")
          .map((_, index) => (
            <RestaurantShimmerCard key={index} />
          ))}
      </div>
    </div>
  );
};

export const MenuShimmer = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 flex flex-col gap-6">
      <div className="w-32 h-5 rounded-lg shimmer-bg"></div>
      <div className="w-full h-36 rounded-3xl shimmer-bg"></div>
      <div className="w-full h-12 rounded-2xl shimmer-bg"></div>
      <div className="flex flex-col gap-4 mt-4">
        {Array(4)
          .fill("")
          .map((_, index) => (
            <div key={index} className="w-full h-24 rounded-2xl shimmer-bg"></div>
          ))}
      </div>
    </div>
  );
};

export default RestaurantShimmer;
