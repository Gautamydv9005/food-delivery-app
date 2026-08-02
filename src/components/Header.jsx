import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import {
  MapPin,
  Search,
  Percent,
  User,
  ShoppingBag,
  ChevronDown,
  LogOut,
  Flame
} from "lucide-react";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
import { useLocationContext } from "../context/LocationContext";
import LocationModal from "./LocationModal";

export const Header = () => {
  const { totalCount } = useCart();
  const { user, openLoginModal, logout } = useAuth();
  const { selectedLocation, setSelectedLocation } = useLocationContext();
  const navigate = useNavigate();
  const location = useLocation();

  const [isLocationModalOpen, setIsLocationModalOpen] = useState(false);

  const isHome = location.pathname === "/";
  const isCart = location.pathname === "/cart";

  return (
    <>
      <header className="sticky top-0 z-40 bg-slate-900/95 backdrop-blur-md border-b border-slate-800 text-white shadow-lg transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">

          {/* Left: Brand Logo & Location */}
          <div className="flex items-center gap-4 sm:gap-6 md:gap-8">
            <Link
              to="/"
              className="flex items-center gap-2 cursor-pointer group hover:scale-105 transition-transform"
              title="BiteDash Home"
            >
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-rose-600 via-rose-500 to-amber-400 p-2 text-white flex items-center justify-center shadow-md shadow-rose-500/30">
                <Flame size={24} className="fill-white animate-pulse" />
              </div>
              <span className="text-2xl font-black text-white tracking-tight">
                Bite<span className="text-rose-500">Dash</span>
              </span>
            </Link>

            {/* Interactive Location Picker Button */}
            <div
              className="flex items-center gap-2 text-sm cursor-pointer py-1.5 px-3 rounded-xl bg-slate-800/80 hover:bg-slate-800 transition-all border border-slate-700 hover:border-rose-500/50 group"
              onClick={() => setIsLocationModalOpen(true)}
              title="Change Location"
            >
              <MapPin size={18} className="text-rose-500 shrink-0 group-hover:scale-110 transition-transform" />
              <span className="font-extrabold text-slate-100 border-b-2 border-slate-400 group-hover:border-rose-500 group-hover:text-rose-400 transition-colors text-xs sm:text-sm">
                {selectedLocation.city}
              </span>
              <span className="text-slate-400 max-w-[140px] md:max-w-[190px] truncate hidden sm:inline text-xs font-semibold">
                {selectedLocation.area}
              </span>
              <ChevronDown size={16} className="text-rose-500 shrink-0 group-hover:rotate-180 transition-transform duration-300" />
            </div>
          </div>

          {/* Right: Nav Actions */}
          <nav className="flex items-center gap-3 sm:gap-6 md:gap-8">
            <Link
              to="/"
              className={`flex items-center gap-2 px-3 py-2 rounded-xl font-bold text-sm transition-colors ${isHome ? "text-rose-400 bg-slate-800" : "text-slate-300 hover:text-rose-400 hover:bg-slate-800/70"
                }`}
            >
              <Search size={19} className="text-rose-400" />
              <span className="hidden md:inline">Search</span>
            </Link>

            <Link
              to="/"
              className="flex items-center gap-2 px-3 py-2 rounded-xl font-bold text-sm text-slate-300 hover:text-rose-400 hover:bg-slate-800/70 transition-colors"
            >
              <Percent size={19} className="text-rose-400" />
              <span className="hidden md:inline">Offers</span>
              <span className="bg-rose-500 text-white text-[10px] font-extrabold px-1.5 py-0.5 rounded-full uppercase tracking-wider">NEW</span>
            </Link>

            {user ? (
              <div className="flex items-center gap-2 bg-slate-800/90 px-3 py-1.5 rounded-full border border-slate-700">
                <div className="flex items-center gap-2">
                  <img src={user.avatar} alt={user.name} className="w-7 h-7 rounded-full object-cover ring-2 ring-rose-500" />
                  <span className="text-sm font-bold text-slate-100 hidden sm:inline">{user.name.split(" ")[0]}</span>
                </div>
                <button
                  className="text-slate-400 hover:text-rose-400 p-1 rounded-full hover:bg-slate-700 transition-colors ml-1 cursor-pointer"
                  onClick={logout}
                  title="Sign Out"
                >
                  <LogOut size={16} />
                </button>
              </div>
            ) : (
              <button
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl font-bold text-sm text-slate-200 hover:text-rose-400 hover:bg-slate-800/70 transition-colors cursor-pointer"
                onClick={openLoginModal}
              >
                <User size={19} />
                <span>Sign In</span>
              </button>
            )}

            <Link
              to="/cart"
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-extrabold text-sm transition-all shadow-md ${isCart || totalCount > 0
                  ? "bg-gradient-to-r from-rose-500 to-rose-600 text-white shadow-rose-500/25 hover:from-rose-600 hover:to-rose-700 hover:scale-105"
                  : "bg-slate-800 text-slate-200 hover:text-white hover:bg-slate-700"
                }`}
            >
              <div className="relative flex items-center">
                <ShoppingBag size={20} />
                {totalCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-white text-rose-600 text-xs font-black w-5 h-5 rounded-full flex items-center justify-center shadow-xs">
                    {totalCount}
                  </span>
                )}
              </div>
              <span>Cart</span>
            </Link>
          </nav>
        </div>
      </header>

      {/* Location Selector Modal */}
      <LocationModal
        isOpen={isLocationModalOpen}
        onClose={() => setIsLocationModalOpen(false)}
        selectedLocation={selectedLocation}
        onSelectLocation={setSelectedLocation}
      />
    </>
  );
};

export default Header;
