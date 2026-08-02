import React from "react";
import { Star, Plus, Minus } from "lucide-react";
import { CDN_URL } from "../utils/constants";
import { useCart } from "../context/CartContext";

const ITEM_FALLBACK_IMAGES = {
  pizza: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=400",
  biryani: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&q=80&w=400",
  burger: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=400",
  paneer: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&q=80&w=400",
  chicken: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&q=80&w=400",
  kebab: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&q=80&w=400",
  mutton: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=400",
  roll: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&q=80&w=400",
  dosa: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&q=80&w=400",
  coffee: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=400",
  chai: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&q=80&w=400",
  bread: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=400",
  garlic: "https://images.unsplash.com/photo-1573140247632-f8fd74997d5c?auto=format&fit=crop&q=80&w=400",
  noodle: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&q=80&w=400",
  dessert: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&q=80&w=400",
  cake: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=400"
};

const DEFAULT_FOOD_PHOTOS = [
  "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=400",
  "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=400",
  "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&q=80&w=400"
];

const getItemFallbackImage = (name = "") => {
  const n = (name || "").toLowerCase();
  for (const [key, url] of Object.entries(ITEM_FALLBACK_IMAGES)) {
    if (n.includes(key)) return url;
  }
  const charCodeSum = (name || "").split("").reduce((acc, char) => acc + char.charCodeAt(0), 0);
  return DEFAULT_FOOD_PHOTOS[charCodeSum % DEFAULT_FOOD_PHOTOS.length];
};

export const MenuItem = ({ itemInfo, restaurantInfo }) => {
  const { id, name, price, defaultPrice, description, imageId, isVeg, rating, bestseller } = itemInfo;
  const { cartItems, addToCart, removeFromCart } = useCart();

  const cartItem = cartItems.find((i) => i.id === id);
  const quantity = cartItem ? cartItem.quantity : 0;

  const itemPrice = price || defaultPrice || 22000;
  const priceRupees = Math.round(itemPrice / 100);

  const fallbackImage = getItemFallbackImage(name);

  const getImageSrc = () => {
    const img = imageId || itemInfo.image || itemInfo.cloudinaryImageId;
    if (!img) return fallbackImage;
    if (img.startsWith("http")) return img;
    return `${CDN_URL}${img}`;
  };

  const handleAdd = () => {
    addToCart(
      {
        id,
        name,
        price: itemPrice,
        isVeg: isVeg === 1 || isVeg === true,
        imageId
      },
      restaurantInfo
    );
  };

  const handleRemove = () => {
    removeFromCart(id);
  };

  const isVegItem = isVeg === 1 || isVeg === true;

  return (
    <div className="flex items-start justify-between gap-4 py-6">
      {/* Left: Item details */}
      <div className="flex flex-col gap-1.5 grow max-w-[70%]">
        <div className="flex items-center gap-2">
          {/* Veg/Non-Veg symbol */}
          <div className={`w-4 h-4 border-2 rounded-xs flex items-center justify-center p-0.5 ${
            isVegItem ? "border-emerald-600" : "border-red-600"
          }`}>
            <div className={`w-full h-full rounded-full ${
              isVegItem ? "bg-emerald-600" : "bg-red-600"
            }`}></div>
          </div>

          {bestseller && (
            <span className="flex items-center gap-1 text-[10px] font-extrabold text-amber-700 bg-amber-100 px-2 py-0.5 rounded-md">
              <Star size={10} className="fill-amber-600 text-amber-600" /> Bestseller
            </span>
          )}
        </div>

        <h4 className="text-base font-extrabold text-slate-800">{name}</h4>
        <div className="text-sm font-extrabold text-slate-900">₹{priceRupees}</div>

        {rating && (
          <div className="flex items-center gap-1 text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded w-max">
            <Star size={11} className="fill-emerald-600 text-emerald-600" />
            <span>{rating}</span>
          </div>
        )}

        {description && (
          <p className="text-xs text-slate-500 font-medium leading-relaxed line-clamp-2 mt-1">
            {description}
          </p>
        )}
      </div>

      {/* Right: Item image & ADD controller */}
      <div className="relative shrink-0 w-28 sm:w-32 flex flex-col items-center">
        <div className="w-full h-24 sm:h-28 rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 shadow-2xs">
          <img 
            src={getImageSrc()} 
            alt={name} 
            className="w-full h-full object-cover" 
            loading="lazy" 
            onError={(e) => {
              e.target.src = fallbackImage;
            }}
          />
        </div>

        {/* ADD / Quantity Stepper Button */}
        <div className="absolute -bottom-3 w-24 bg-white rounded-xl shadow-md border border-slate-200 overflow-hidden">
          {quantity > 0 ? (
            <div className="flex items-center justify-between px-2 py-1 bg-emerald-50 text-emerald-700 font-bold text-sm">
              <button 
                onClick={handleRemove} 
                className="hover:bg-emerald-200 p-1 rounded transition-colors text-emerald-800 cursor-pointer"
              >
                <Minus size={14} />
              </button>
              <span className="text-xs font-extrabold">{quantity}</span>
              <button 
                onClick={handleAdd} 
                className="hover:bg-emerald-200 p-1 rounded transition-colors text-emerald-800 cursor-pointer"
              >
                <Plus size={14} />
              </button>
            </div>
          ) : (
            <button 
              onClick={handleAdd} 
              className="w-full py-1.5 text-center text-xs font-black text-emerald-600 hover:bg-emerald-50 transition-colors uppercase tracking-wider cursor-pointer"
            >
              ADD
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
