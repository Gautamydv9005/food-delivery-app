import React from "react";
import { Star, Plus, Minus } from "lucide-react";
import { CDN_URL } from "../utils/constants";
import { useCart } from "../context/CartContext";

export const MenuItem = ({ itemInfo, restaurantInfo }) => {
  const { id, name, price, defaultPrice, description, imageId, isVeg, rating, bestseller } = itemInfo;
  const { cartItems, addToCart, removeFromCart } = useCart();

  const cartItem = cartItems.find((i) => i.id === id);
  const quantity = cartItem ? cartItem.quantity : 0;

  const itemPrice = price || defaultPrice || 22000;
  const priceRupees = Math.round(itemPrice / 100);

  const getImageSrc = () => {
    if (!imageId) return null;
    if (imageId.startsWith("http")) return imageId;
    return `${CDN_URL}${imageId}`;
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
          {getImageSrc() ? (
            <img src={getImageSrc()} alt={name} className="w-full h-full object-cover" loading="lazy" />
          ) : (
            <div className="w-full h-full bg-slate-100 flex items-center justify-center text-slate-400 font-bold text-xl">
              <span>{name.charAt(0)}</span>
            </div>
          )}
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
