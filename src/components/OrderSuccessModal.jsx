import React, { useEffect, useState } from "react";
import { CheckCircle, Clock, MapPin, Sparkles } from "lucide-react";

export const OrderSuccessModal = ({ isOpen, onClose }) => {
  const [countdown, setCountdown] = useState(24);

  useEffect(() => {
    if (!isOpen) return;
    const interval = setInterval(() => {
      setCountdown((prev) => (prev > 1 ? prev - 1 : 1));
    }, 60000);
    return () => clearInterval(interval);
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4 animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-md w-full p-8 text-center shadow-2xl relative animate-popIn flex flex-col items-center">
        <div className="w-20 h-20 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4 ring-8 ring-emerald-50/50">
          <CheckCircle size={56} className="animate-bounce text-emerald-600" />
        </div>

        <h2 className="text-2xl font-black text-slate-900 mb-1">Order Placed Successfully!</h2>
        <p className="text-xs font-bold text-slate-400 mb-6">Order ID: #BD-{Math.floor(100000 + Math.random() * 900000)}</p>

        <div className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 text-left flex flex-col gap-3 mb-6">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-rose-100 text-rose-600 rounded-xl shrink-0">
              <Clock size={20} />
            </div>
            <div>
              <strong className="text-xs font-extrabold text-slate-800 block">Estimated Delivery</strong>
              <p className="text-xs font-bold text-rose-600">{countdown} - {countdown + 5} mins</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-2 bg-rose-100 text-rose-600 rounded-xl shrink-0">
              <MapPin size={20} />
            </div>
            <div>
              <strong className="text-xs font-extrabold text-slate-800 block">Delivering to</strong>
              <p className="text-xs text-slate-500 font-semibold">Home - #42 Koramangala, Bangalore</p>
            </div>
          </div>
        </div>

        <div className="w-full flex justify-between text-[11px] font-bold mb-8 relative">
          <div className="flex flex-col items-center gap-1.5 text-emerald-600">
            <span className="w-3 h-3 rounded-full bg-emerald-600 ring-4 ring-emerald-100"></span>
            <span>Order Confirmed</span>
          </div>
          <div className="flex flex-col items-center gap-1.5 text-rose-600">
            <span className="w-3 h-3 rounded-full bg-rose-500 ring-4 ring-rose-100 animate-ping"></span>
            <span>Kitchen Preparing</span>
          </div>
          <div className="flex flex-col items-center gap-1.5 text-slate-400">
            <span className="w-3 h-3 rounded-full bg-slate-200"></span>
            <span>Out for Delivery</span>
          </div>
        </div>

        <button 
          className="w-full py-4 bg-slate-900 hover:bg-black text-white font-extrabold text-xs uppercase tracking-wider rounded-2xl flex items-center justify-center gap-2 shadow-lg shadow-slate-900/20 hover:scale-101 transition-all cursor-pointer" 
          onClick={onClose}
        >
          <Sparkles size={16} className="text-amber-400" />
          <span>Explore More Foods</span>
        </button>
      </div>
    </div>
  );
};

export default OrderSuccessModal;
