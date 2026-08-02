import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { CATEGORY_ITEMS } from "../utils/constants";

export const CategoryCarousel = ({ onSelectCategory, selectedCategory }) => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.7;
      scrollRef.current.scrollTo({
        left: direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: "smooth"
      });
    }
  };

  return (
    <section className="mb-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl sm:text-2xl font-extrabold text-slate-800 tracking-tight">What's on your mind?</h2>
        <div className="flex items-center gap-2">
          <button 
            className="w-9 h-9 rounded-full bg-slate-100 text-slate-700 hover:bg-slate-200 hover:scale-105 transition-all flex items-center justify-center cursor-pointer" 
            onClick={() => scroll("left")} 
            aria-label="Scroll left"
          >
            <ChevronLeft size={20} />
          </button>
          <button 
            className="w-9 h-9 rounded-full bg-slate-100 text-slate-700 hover:bg-slate-200 hover:scale-105 transition-all flex items-center justify-center cursor-pointer" 
            onClick={() => scroll("right")} 
            aria-label="Scroll right"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      <div 
        className="flex gap-5 sm:gap-6 overflow-x-auto scrollbar-none py-2 scroll-smooth" 
        ref={scrollRef}
      >
        {CATEGORY_ITEMS.map((cat) => {
          const isSelected = selectedCategory?.toLowerCase() === cat.name.toLowerCase();
          return (
            <div
              key={cat.id}
              className={`flex flex-col items-center gap-2 shrink-0 cursor-pointer group transition-all duration-200 ${
                isSelected ? "scale-105" : "hover:scale-105"
              }`}
              onClick={() => onSelectCategory(cat.name)}
            >
              <div className={`w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden bg-slate-50 border transition-all ${
                isSelected 
                  ? "border-orange-500 ring-4 ring-orange-500/20 shadow-md" 
                  : "border-slate-100 group-hover:border-orange-300 group-hover:shadow-sm"
              }`}>
                <img 
                  src={cat.image} 
                  alt={cat.name} 
                  loading="lazy" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <span className={`text-xs sm:text-sm font-bold transition-colors ${
                isSelected ? "text-orange-600" : "text-slate-700 group-hover:text-orange-500"
              }`}>
                {cat.name}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default CategoryCarousel;
