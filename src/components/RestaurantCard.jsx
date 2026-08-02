import React from "react";
import { useNavigate } from "react-router-dom";
import { Star, Clock, Sparkles } from "lucide-react";
import { CDN_URL } from "../utils/constants";

const CUISINE_FALLBACK_IMAGES = {
  pizza: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=600",
  biryani: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&q=80&w=600",
  burger: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=600",
  kfc: "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&q=80&w=600",
  chicken: "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&q=80&w=600",
  sweet: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&q=80&w=600",
  kebab: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&q=80&w=600",
  ice: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&q=80&w=600",
  dessert: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&q=80&w=600",
  sub: "https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&q=80&w=600",
  chinese: "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&q=80&w=600",
  noodle: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&q=80&w=600"
};

const DEFAULT_FOOD_IMAGES = [
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&q=80&w=600"
];

const getFallbackImage = (name = "", cuisines = [], id = "0") => {
  const textKey = `${name} ${cuisines.join(" ")}`.toLowerCase();
  for (const [key, url] of Object.entries(CUISINE_FALLBACK_IMAGES)) {
    if (textKey.includes(key)) {
      return url;
    }
  }
  const numericId = parseInt(id, 10) || 0;
  return DEFAULT_FOOD_IMAGES[numericId % DEFAULT_FOOD_IMAGES.length];
};

export const RestaurantCard = ({ restaurant, onClick }) => {
  const navigate = useNavigate();
  const {
    id,
    name,
    cloudinaryImageId,
    cuisines,
    avgRating,
    costForTwo,
    sla,
    areaName,
    locality,
    aggregatedDiscountInfoV3
  } = restaurant;

  const fallbackImage = getFallbackImage(name, cuisines, id);

  const getImageSrc = () => {
    if (!cloudinaryImageId) {
      return fallbackImage;
    }
    if (cloudinaryImageId.startsWith("http")) {
      return cloudinaryImageId;
    }
    return `${CDN_URL}${cloudinaryImageId}`;
  };

  const offerHeader = aggregatedDiscountInfoV3?.header;
  const offerSub = aggregatedDiscountInfoV3?.subHeader;
  const ratingNum = Number(avgRating) || 4.2;

  const handleClick = () => {
    if (onClick) {
      onClick(id);
    } else {
      navigate(`/restaurant/${id}`);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div 
      className="group flex flex-col bg-white rounded-3xl overflow-hidden border border-slate-200/80 hover:border-rose-300 hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1.5"
      onClick={handleClick}
    >
      {/* Media Image Container */}
      <div className="relative w-full aspect-16/10 overflow-hidden bg-slate-100">
        <img
          src={getImageSrc()}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
          loading="lazy"
          onError={(e) => {
            e.target.src = fallbackImage;
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-900/30 to-transparent"></div>
        
        {offerHeader && (
          <div className="absolute bottom-3 left-3 text-white drop-shadow-md">
            <span className="text-base sm:text-lg font-black uppercase tracking-tight block leading-tight text-rose-300">{offerHeader}</span>
            {offerSub && <span className="text-xs font-bold text-slate-200 block">{offerSub}</span>}
          </div>
        )}
      </div>

      {/* Info Container */}
      <div className="p-4 flex flex-col gap-2">
        <h3 className="text-base font-extrabold text-slate-900 group-hover:text-rose-600 transition-colors truncate" title={name}>
          {name}
        </h3>
        
        <div className="flex items-center gap-2 text-xs font-bold text-slate-700 flex-wrap">
          <div className={`flex items-center gap-1 px-2 py-0.5 rounded-lg text-white font-extrabold shadow-2xs ${
            ratingNum >= 4.3 ? "bg-emerald-600" : "bg-emerald-500"
          }`}>
            <Star size={11} fill="currentColor" />
            <span>{avgRating || "4.2"}</span>
          </div>

          <span className="text-slate-300">•</span>

          <div className="flex items-center gap-1 text-slate-600 font-semibold">
            <Clock size={13} className="text-rose-500" />
            <span>{sla?.slaString || `${sla?.deliveryTime || 25} mins`}</span>
          </div>

          <span className="text-slate-300">•</span>

          <span className="text-slate-600 font-semibold">{costForTwo || "₹350 for two"}</span>
        </div>

        <div className="text-xs text-slate-500 font-medium truncate pt-0.5" title={cuisines?.join(", ")}>
          {cuisines ? cuisines.slice(0, 3).join(", ") : "North Indian, Fast Food"}
        </div>

        <div className="text-xs text-slate-400 font-medium truncate">
          {areaName || locality || "Bangalore"}
        </div>
      </div>
    </div>
  );
};

// Higher Order Component (HOC)
export const withPromotedLabel = (RestaurantCardComponent) => {
  return (props) => {
    return (
      <div className="relative group">
        <div className="absolute top-3 right-3 z-20 bg-slate-900/90 text-amber-400 border border-amber-400/40 text-[10px] font-black uppercase px-2.5 py-1 rounded-full flex items-center gap-1 shadow-md backdrop-blur-xs tracking-wider pointer-events-none">
          <Sparkles size={11} className="fill-amber-400 text-amber-400" />
          <span>Sponsored</span>
        </div>
        <RestaurantCardComponent {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
