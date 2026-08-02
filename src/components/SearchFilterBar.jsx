import React from "react";
import { Search, X, Star, Zap, Leaf } from "lucide-react";
import { useLocationContext } from "../context/LocationContext";

export const SearchFilterBar = ({
  searchQuery,
  setSearchQuery,
  activeFilter,
  onFilterChange,
  totalCount
}) => {
  const { selectedLocation } = useLocationContext();

  return (
    <div className="flex flex-col gap-5 mb-8">
      {/* Search Input Bar */}
      <div className="relative flex items-center max-w-2xl mx-auto w-full">
        <Search className="absolute left-4 text-slate-400 pointer-events-none" size={20} />
        <input
          type="text"
          placeholder="Search for restaurants, biryani, pizza or cuisines..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-12 pr-10 py-4 bg-white border border-slate-200 rounded-3xl text-slate-800 placeholder-slate-400 font-semibold text-sm focus:outline-none focus:border-rose-500 focus:ring-4 focus:ring-rose-500/10 transition-all shadow-sm"
        />
        {searchQuery && (
          <button 
            className="absolute right-4 text-slate-400 hover:text-slate-600 p-1 rounded-full hover:bg-slate-200 transition-colors" 
            onClick={() => setSearchQuery("")}
          >
            <X size={16} />
          </button>
        )}
      </div>

      {/* Filter Options Toolbar */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-slate-200 pb-4">
        <div className="flex flex-col gap-3 w-full md:w-auto">
          <span className="text-base font-extrabold text-slate-900">
            {totalCount} Top Restaurants in {selectedLocation.city}
          </span>

          <div className="flex items-center gap-2 overflow-x-auto scrollbar-none py-1 w-full">
            <button
              className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-extrabold shrink-0 border transition-all cursor-pointer ${
                activeFilter === "TOP_RATED"
                  ? "bg-slate-900 text-white border-slate-900 shadow-sm"
                  : "bg-white text-slate-700 border-slate-200 hover:border-rose-300 hover:bg-rose-50/50"
              }`}
              onClick={() => onFilterChange("TOP_RATED")}
            >
              <Star size={14} className={activeFilter === "TOP_RATED" ? "text-amber-400 fill-amber-400" : "text-amber-500"} />
              <span>Top Rated 4.0+</span>
            </button>

            <button
              className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-extrabold shrink-0 border transition-all cursor-pointer ${
                activeFilter === "FAST_DELIVERY"
                  ? "bg-slate-900 text-white border-slate-900 shadow-xs"
                  : "bg-white text-slate-700 border-slate-200 hover:border-rose-300 hover:bg-rose-50/50"
              }`}
              onClick={() => onFilterChange("FAST_DELIVERY")}
            >
              <Zap size={14} className="text-rose-500" />
              <span>Fast Delivery (≤25 min)</span>
            </button>

            <button
              className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-extrabold shrink-0 border transition-all cursor-pointer ${
                activeFilter === "PURE_VEG"
                  ? "bg-emerald-700 text-white border-emerald-700 shadow-sm"
                  : "bg-white text-slate-700 border-slate-200 hover:border-emerald-300 hover:bg-emerald-50/50"
              }`}
              onClick={() => onFilterChange("PURE_VEG")}
            >
              <Leaf size={14} className="text-emerald-500" />
              <span>Pure Veg</span>
            </button>

            <button
              className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-extrabold shrink-0 border transition-all cursor-pointer ${
                activeFilter === "UNDER_300"
                  ? "bg-slate-900 text-white border-slate-900 shadow-sm"
                  : "bg-white text-slate-700 border-slate-200 hover:border-rose-300 hover:bg-rose-50/50"
              }`}
              onClick={() => onFilterChange("UNDER_300")}
            >
              <span>Less than ₹300</span>
            </button>

            <button
              className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-extrabold shrink-0 border transition-all cursor-pointer ${
                activeFilter === "RS_300_600"
                  ? "bg-slate-900 text-white border-slate-900 shadow-sm"
                  : "bg-white text-slate-700 border-slate-200 hover:border-rose-300 hover:bg-rose-50/50"
              }`}
              onClick={() => onFilterChange("RS_300_600")}
            >
              <span>₹300 - ₹600</span>
            </button>

            {activeFilter !== "ALL" && (
              <button
                className="px-4 py-2 rounded-full text-xs font-extrabold shrink-0 text-rose-600 bg-rose-50 hover:bg-rose-100 transition-colors border border-rose-200 cursor-pointer"
                onClick={() => onFilterChange("ALL")}
              >
                Reset Filters
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchFilterBar;
