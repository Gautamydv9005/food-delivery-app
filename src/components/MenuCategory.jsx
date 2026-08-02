import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import MenuItem from "./MenuItem";

export const MenuCategory = ({ category, restaurantInfo, defaultOpen = true }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const title = category.title || "Category";
  const itemCards = category.itemCards || [];

  if (itemCards.length === 0) return null;

  return (
    <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-2xs mb-4">
      <button 
        className="w-full flex items-center justify-between p-5 text-left bg-slate-50/80 hover:bg-slate-100 transition-colors cursor-pointer" 
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <h3 className="text-base sm:text-lg font-extrabold text-slate-800">
          {title} ({itemCards.length})
        </h3>
        <div className="text-slate-500">
          {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </div>
      </button>

      {isOpen && (
        <div className="divide-y divide-slate-100 px-5">
          {itemCards.map((itemObj, idx) => {
            const info = itemObj?.card?.info || itemObj;
            return (
              <MenuItem
                key={info.id || idx}
                itemInfo={info}
                restaurantInfo={restaurantInfo}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default MenuCategory;
