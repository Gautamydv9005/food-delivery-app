import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { 
  ArrowLeft, 
  Star, 
  Clock, 
  Tag, 
  Search, 
  ShoppingBag, 
  Sparkles,
  Info
} from "lucide-react";
import { useRestaurantMenu } from "../hooks/useRestaurantMenu";
import MenuCategory from "./MenuCategory";
import { MenuShimmer } from "./Shimmer";
import { useCart } from "../context/CartContext";

export const RestaurantMenu = ({ resId: propResId }) => {
  const params = useParams();
  const navigate = useNavigate();
  const targetResId = propResId || params.resId;

  const { restaurantInfo, categories, isLoading } = useRestaurantMenu(targetResId);
  const [vegOnly, setVegOnly] = useState(false);
  const [menuSearch, setMenuSearch] = useState("");
  const { totalCount, subtotalRupees } = useCart();

  if (isLoading || !restaurantInfo) {
    return <MenuShimmer />;
  }

  const {
    name,
    cuisines,
    areaName,
    locality,
    avgRating,
    totalRatingsString,
    costForTwoMessage,
    sla
  } = restaurantInfo;

  const filteredCategories = categories.map((cat) => {
    const itemCards = cat.itemCards || [];
    const filteredItems = itemCards.filter((itemObj) => {
      const info = itemObj?.card?.info || itemObj;
      const isVeg = info.isVeg === 1 || info.isVeg === true;

      if (vegOnly && !isVeg) return false;

      if (menuSearch.trim() !== "") {
        const query = menuSearch.toLowerCase();
        const matchName = info.name?.toLowerCase().includes(query);
        const matchDesc = info.description?.toLowerCase().includes(query);
        return matchName || matchDesc;
      }

      return true;
    });

    return {
      ...cat,
      itemCards: filteredItems
    };
  }).filter((cat) => cat.itemCards.length > 0);

  const handleBack = () => {
    navigate("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleViewCart = () => {
    navigate("/cart");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      {/* Back Button & Navigation */}
      <div className="mb-6">
        <button 
          className="flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-500 hover:text-rose-600 transition-colors cursor-pointer group" 
          onClick={handleBack}
        >
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform text-rose-500" />
          <span>Home / {areaName || "Bangalore"} / </span>
          <strong className="text-slate-900 group-hover:text-rose-600">{name}</strong>
        </button>
      </div>

      {/* Restaurant Header Banner Card */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm flex items-start justify-between gap-4 mb-6">
        <div className="flex flex-col gap-1">
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">{name}</h1>
          <p className="text-sm font-semibold text-slate-500">{cuisines?.join(", ")}</p>
          <p className="text-xs text-slate-400 font-medium">
            {locality || areaName}, {sla?.lastMileTravelString || "2.0 km"}
          </p>
        </div>

        <div className="flex flex-col items-center bg-emerald-50 border border-emerald-200 rounded-2xl p-3 shrink-0 shadow-2xs">
          <div className="flex items-center gap-1 text-emerald-700 font-extrabold text-base">
            <Star size={16} className="fill-emerald-600 text-emerald-600" />
            <span>{avgRating || "4.4"}</span>
          </div>
          <span className="text-[11px] font-bold text-emerald-600 border-t border-emerald-200 pt-1 mt-1 text-center">
            {totalRatingsString || "1K+ ratings"}
          </span>
        </div>
      </div>

      {/* Delivery & Cost Bar */}
      <div className="flex items-center gap-6 text-slate-700 font-bold text-sm bg-white rounded-2xl px-6 py-3.5 border border-slate-200 mb-6 shadow-2xs">
        <div className="flex items-center gap-2">
          <Clock size={18} className="text-rose-500" />
          <span>{sla?.slaString || "20-25 MINS"}</span>
        </div>
        <div className="h-4 w-px bg-slate-300"></div>
        <div>
          <span>{costForTwoMessage || "₹350 for two"}</span>
        </div>
      </div>

      {/* Coupon Deals Horizontal Carousel */}
      <div className="flex items-center gap-4 overflow-x-auto scrollbar-none pb-2 mb-8">
        <div className="flex items-center gap-3 bg-gradient-to-r from-rose-50 to-amber-50 border border-rose-200 rounded-2xl p-3.5 shrink-0">
          <Tag size={20} className="text-rose-500 shrink-0" />
          <div className="flex flex-col">
            <strong className="text-xs font-extrabold text-rose-900">50% OFF UPTO ₹100</strong>
            <span className="text-[11px] font-bold text-rose-600">USE CODE BITEDASH50 | ABOVE ₹199</span>
          </div>
        </div>

        <div className="flex items-center gap-3 bg-gradient-to-r from-indigo-50 to-blue-50 border border-indigo-200 rounded-2xl p-3.5 shrink-0">
          <Tag size={20} className="text-indigo-500 shrink-0" />
          <div className="flex flex-col">
            <strong className="text-xs font-extrabold text-indigo-900">20% OFF WITH HDFC</strong>
            <span className="text-[11px] font-bold text-indigo-600">USE CODE HDFC20 | ABOVE ₹499</span>
          </div>
        </div>
      </div>

      {/* Menu Search & Veg Toggle Filter */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-6">
        <div className="flex items-center gap-3 bg-slate-100 px-4 py-2.5 rounded-2xl shrink-0">
          <span className="text-xs font-extrabold text-slate-700">Veg Only</span>
          <button 
            className={`w-11 h-6 rounded-full p-1 transition-colors relative cursor-pointer ${
              vegOnly ? "bg-emerald-600" : "bg-slate-300"
            }`}
            onClick={() => setVegOnly(!vegOnly)}
          >
            <div className={`w-4 h-4 bg-white rounded-full transition-transform ${
              vegOnly ? "translate-x-5" : "translate-x-0"
            }`}></div>
          </button>
        </div>

        <div className="relative flex items-center grow">
          <Search size={16} className="absolute left-3.5 text-slate-400 pointer-events-none" />
          <input
            type="text"
            placeholder={`Search in ${name}...`}
            value={menuSearch}
            onChange={(e) => setMenuSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-2xl text-sm font-semibold text-slate-800 placeholder-slate-400 focus:outline-none focus:border-rose-500 focus:ring-4 focus:ring-rose-500/10 transition-all"
          />
        </div>
      </div>

      <div className="h-px bg-slate-200 my-6"></div>

      {/* Menu Categories Accordion List */}
      <div className="flex flex-col gap-4">
        {filteredCategories.length > 0 ? (
          filteredCategories.map((cat, idx) => (
            <MenuCategory
              key={cat.title || idx}
              category={cat}
              restaurantInfo={restaurantInfo}
              defaultOpen={idx === 0}
            />
          ))
        ) : (
          <div className="flex flex-col items-center justify-center py-12 text-slate-400">
            <Info size={36} className="mb-2 text-slate-300" />
            <p className="text-sm font-semibold">No dishes match your filter criteria.</p>
          </div>
        )}
      </div>

      {/* Floating Bottom Cart Bar */}
      {totalCount > 0 && (
        <div 
          className="fixed bottom-6 left-1/2 -translate-x-1/2 max-w-lg w-[calc(100%-2rem)] bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-700 hover:to-rose-800 text-white rounded-2xl p-4 flex items-center justify-between shadow-2xl shadow-rose-900/30 cursor-pointer z-40 transition-all hover:scale-102"
          onClick={handleViewCart}
        >
          <div className="flex items-center gap-3 font-extrabold text-sm">
            <ShoppingBag size={20} />
            <span>{totalCount} {totalCount === 1 ? "Item" : "Items"} | ₹{subtotalRupees}</span>
          </div>
          <button className="flex items-center gap-1.5 font-extrabold text-xs tracking-wider uppercase bg-white/20 px-3.5 py-1.5 rounded-xl hover:bg-white/30 transition-colors">
            <span>VIEW CART</span>
            <Sparkles size={14} className="text-amber-300" />
          </button>
        </div>
      )}
    </div>
  );
};

export default RestaurantMenu;
