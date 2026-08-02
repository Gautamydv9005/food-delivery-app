import React, { useState } from "react";
import { X, MapPin, Search, Check } from "lucide-react";

const LOCATIONS_LIST = [
  { city: "Bangalore", area: "Koramangala, Bengaluru, Karnataka" },
  { city: "Bangalore", area: "Indiranagar, Bengaluru, Karnataka" },
  { city: "Bangalore", area: "HSR Layout, Bengaluru, Karnataka" },
  { city: "Bangalore", area: "Whitefield, Bengaluru, Karnataka" },
  { city: "Mumbai", area: "Bandra West, Mumbai, Maharashtra" },
  { city: "Mumbai", area: "Andheri East, Mumbai, Maharashtra" },
  { city: "Delhi NCR", area: "Cyber City, Gurgaon, Haryana" },
  { city: "Delhi NCR", area: "Connaught Place, New Delhi" },
  { city: "Hyderabad", area: "Gachibowli, Hyderabad, Telangana" },
  { city: "Pune", area: "Koregaon Park, Pune, Maharashtra" }
];

export const LocationModal = ({ isOpen, onClose, selectedLocation, onSelectLocation }) => {
  const [search, setSearch] = useState("");

  if (!isOpen) return null;

  const filteredLocations = LOCATIONS_LIST.filter((loc) =>
    loc.city.toLowerCase().includes(search.toLowerCase()) ||
    loc.area.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 relative shadow-2xl animate-popIn flex flex-col gap-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-100 pb-4">
          <div className="flex items-center gap-2">
            <MapPin size={22} className="text-orange-500" />
            <h2 className="text-xl font-extrabold text-slate-900">Select Location</h2>
          </div>
          <button 
            className="text-slate-400 hover:text-slate-700 p-2 rounded-full hover:bg-slate-100 transition-colors cursor-pointer" 
            onClick={onClose}
          >
            <X size={20} />
          </button>
        </div>

        {/* Search input */}
        <div className="relative flex items-center">
          <Search size={18} className="absolute left-3.5 text-slate-400 pointer-events-none" />
          <input
            type="text"
            placeholder="Search for area, street name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-sm font-semibold text-slate-800 placeholder-slate-400 focus:outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 transition-all"
          />
        </div>

        {/* Locations List */}
        <div className="flex flex-col gap-1 max-h-72 overflow-y-auto pr-1">
          {filteredLocations.map((loc, idx) => {
            const isSelected = selectedLocation.area === loc.area;
            return (
              <div
                key={idx}
                onClick={() => {
                  onSelectLocation(loc);
                  onClose();
                }}
                className={`flex items-center justify-between p-3.5 rounded-2xl border cursor-pointer transition-all ${
                  isSelected 
                    ? "border-orange-500 bg-orange-50/40 text-orange-900 font-extrabold shadow-2xs"
                    : "border-slate-100 hover:border-slate-200 hover:bg-slate-50 text-slate-700 font-semibold"
                }`}
              >
                <div className="flex items-center gap-3">
                  <MapPin size={18} className={isSelected ? "text-orange-500" : "text-slate-400"} />
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-slate-900">{loc.city}</span>
                    <span className="text-xs text-slate-500 font-medium">{loc.area}</span>
                  </div>
                </div>
                {isSelected && <Check size={18} className="text-orange-500 shrink-0" />}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default LocationModal;
