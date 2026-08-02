import React from "react";
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { SearchX, RefreshCw } from "lucide-react";

// Create enhanced component using Higher-Order Component (HOC)
const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

export const RestaurantList = ({ restaurants, onSelectRestaurant, onResetFilters }) => {
  if (!restaurants || restaurants.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center text-center py-16 px-4 bg-white rounded-3xl border border-dashed border-slate-200 my-8 shadow-xs">
        <div className="w-16 h-16 rounded-2xl bg-rose-50 text-rose-500 flex items-center justify-center mb-4 shadow-inner">
          <SearchX size={36} />
        </div>
        <h3 className="text-xl font-black text-slate-800 mb-2">No restaurants found</h3>
        <p className="text-slate-500 text-sm max-w-md mb-6 font-medium">
          We couldn't find any match for your search query or applied filters.
        </p>
        <button 
          className="flex items-center gap-2 px-5 py-2.5 bg-rose-600 hover:bg-rose-700 text-white font-extrabold text-xs uppercase tracking-wider rounded-xl shadow-md shadow-rose-500/20 hover:scale-105 transition-all cursor-pointer"
          onClick={onResetFilters}
        >
          <RefreshCw size={16} />
          <span>Reset All Filters</span>
        </button>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-4">
      {restaurants.map((restaurant, idx) => {
        // HOC check: if API response has promoted flag OR index based sponsored logic for demonstration
        const isPromoted = restaurant.promoted || restaurant.isPromoted || restaurant.sponsored || idx % 4 === 0;

        return isPromoted ? (
          <RestaurantCardPromoted
            key={restaurant.id}
            restaurant={restaurant}
            onClick={onSelectRestaurant}
          />
        ) : (
          <RestaurantCard
            key={restaurant.id}
            restaurant={restaurant}
            onClick={onSelectRestaurant}
          />
        );
      })}
    </div>
  );
};

export default RestaurantList;
