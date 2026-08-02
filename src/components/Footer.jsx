import React from "react";
import { Flame, Heart } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 mt-20 border-t border-slate-800">
      <div className="bg-slate-900 text-slate-100 py-6 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <h3 className="text-base sm:text-lg font-extrabold text-white">
            For a faster food experience, download the BiteDash app now
          </h3>
          <div className="flex gap-3">
            <button className="bg-slate-950 text-white px-4 py-2 rounded-xl flex flex-col items-start hover:bg-black transition-colors cursor-pointer border border-slate-800">
              <span className="text-[9px] font-medium text-slate-400">GET IT ON</span>
              <strong className="text-xs font-bold">Google Play</strong>
            </button>
            <button className="bg-slate-950 text-white px-4 py-2 rounded-xl flex flex-col items-start hover:bg-black transition-colors cursor-pointer border border-slate-800">
              <span className="text-[9px] font-medium text-slate-400">Download on the</span>
              <strong className="text-xs font-bold">App Store</strong>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand Col */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-rose-600 via-rose-500 to-amber-400 p-1.5 text-white flex items-center justify-center">
                <Flame size={20} className="fill-white" />
              </div>
              <span className="text-2xl font-black text-white">
                Bite<span className="text-rose-500">Dash</span>
              </span>
            </div>
            <p className="text-xs text-slate-400 font-medium">© 2026 BiteDash Inc. All rights reserved.</p>
            <p className="text-xs text-slate-400 font-medium flex items-center gap-1.5 mt-1">
              Crafted with <Heart size={14} className="fill-rose-500 text-rose-500" /> for food lovers everywhere.
            </p>
          </div>

          {/* Col 2 */}
          <div className="flex flex-col gap-3">
            <h4 className="text-white text-sm font-extrabold">Company</h4>
            <ul className="flex flex-col gap-2 text-xs font-semibold">
              <li><a href="#about" className="hover:text-rose-400 transition-colors">About Us</a></li>
              <li><a href="#careers" className="hover:text-rose-400 transition-colors">Careers</a></li>
              <li><a href="#team" className="hover:text-rose-400 transition-colors">Team</a></li>
              <li><a href="#bitedash-plus" className="hover:text-rose-400 transition-colors">BiteDash Plus</a></li>
            </ul>
          </div>

          {/* Col 3 */}
          <div className="flex flex-col gap-3">
            <h4 className="text-white text-sm font-extrabold">Contact Us</h4>
            <ul className="flex flex-col gap-2 text-xs font-semibold">
              <li><a href="#help" className="hover:text-rose-400 transition-colors">Help & Support</a></li>
              <li><a href="#partner" className="hover:text-rose-400 transition-colors">Partner with us</a></li>
              <li><a href="#ride" className="hover:text-rose-400 transition-colors">Ride with us</a></li>
            </ul>
          </div>

          {/* Col 4 */}
          <div className="flex flex-col gap-3">
            <h4 className="text-white text-sm font-extrabold">Available In</h4>
            <ul className="flex flex-col gap-2 text-xs font-semibold text-slate-400">
              <li>Bangalore</li>
              <li>Gurgaon</li>
              <li>Hyderabad</li>
              <li>Delhi</li>
              <li>Mumbai</li>
              <li>Pune</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
