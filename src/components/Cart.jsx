import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ShoppingBag,
  Trash2,
  Plus,
  Minus,
  ArrowLeft,
  Home,
  Briefcase,
  MapPin,
  HeartHandshake,
  CheckCircle2
} from "lucide-react";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";

export const Cart = ({ onOrderPlaced }) => {
  const navigate = useNavigate();
  const {
    cartItems,
    activeRestaurant,
    addToCart,
    removeFromCart,
    deleteItem,
    clearCart,
    subtotalRupees,
    deliveryFee,
    platformFee,
    taxes,
    grandTotal
  } = useCart();

  const { user, openLoginModal } = useAuth();
  const [selectedAddress, setSelectedAddress] = useState("HOME");
  const [deliveryTip, setDeliveryTip] = useState(30);

  const handleBackToHome = () => {
    navigate("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (cartItems.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-[60vh] px-4 py-12">
        <div className="flex flex-col items-center text-center max-w-md bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-sm">
          <div className="w-24 h-24 rounded-full bg-rose-50 text-rose-500 flex items-center justify-center mb-6 shadow-inner">
            <ShoppingBag size={48} />
          </div>
          <h2 className="text-2xl font-black text-slate-800 mb-2">Your cart is empty</h2>
          <p className="text-slate-500 text-sm mb-8 leading-relaxed">
            You can go to home page to view more restaurants and add dishes!
          </p>
          <button
            className="w-full py-3.5 px-6 bg-rose-600 hover:bg-rose-700 text-white font-extrabold text-xs uppercase tracking-wider rounded-xl shadow-md shadow-rose-500/20 hover:scale-105 transition-all cursor-pointer"
            onClick={handleBackToHome}
          >
            SEE RESTAURANTS NEAR YOU
          </button>
        </div>
      </div>
    );
  }

  const finalPayable = grandTotal + deliveryTip;

  const handleCheckout = () => {
    if (!user) {
      openLoginModal();
      return;
    }
    clearCart();
    if (onOrderPlaced) {
      onOrderPlaced();
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      {/* Back Breadcrumb */}
      <div className="mb-6">
        <button
          className="flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-rose-600 transition-colors cursor-pointer group"
          onClick={handleBackToHome}
        >
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform text-rose-500" />
          <span>Back to Home</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Delivery Address & Account & Tip */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          {/* Account Status Card */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-2xs flex items-start gap-4">
            <div className="p-3 bg-emerald-50 text-emerald-600 rounded-2xl shrink-0">
              <CheckCircle2 size={24} />
            </div>
            <div className="flex flex-col gap-1 grow">
              <h3 className="text-lg font-extrabold text-slate-900">Account</h3>
              {user ? (
                <p className="text-sm text-slate-600 font-medium">
                  Logged in as <strong className="text-slate-900">{user.name}</strong> ({user.phone})
                </p>
              ) : (
                <div className="flex flex-col gap-3 mt-1">
                  <p className="text-sm text-slate-500">To place your order now, log in to your existing account or sign up.</p>
                  <button
                    className="w-max px-5 py-2.5 bg-rose-600 hover:bg-rose-700 text-white font-extrabold text-xs tracking-wider uppercase rounded-xl shadow-xs transition-colors cursor-pointer"
                    onClick={openLoginModal}
                  >
                    LOG IN / SIGN UP
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Delivery Address Selection */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-2xs flex items-start gap-4">
            <div className="p-3 bg-rose-50 text-rose-500 rounded-2xl shrink-0">
              <MapPin size={24} />
            </div>
            <div className="flex flex-col gap-4 grow">
              <h3 className="text-lg font-extrabold text-slate-900">Select Delivery Address</h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div
                  className={`p-4 rounded-2xl border-2 transition-all cursor-pointer flex flex-col justify-between gap-3 ${selectedAddress === "HOME"
                      ? "border-rose-500 bg-rose-50/40 shadow-xs"
                      : "border-slate-200 bg-white hover:border-slate-300"
                    }`}
                  onClick={() => setSelectedAddress("HOME")}
                >
                  <div className="flex items-center gap-2 text-slate-800 font-extrabold text-sm">
                    <Home size={18} className="text-rose-500" />
                    <span>Home</span>
                  </div>
                  <p className="text-xs text-slate-500 font-medium leading-relaxed">
                    #42, 3rd Floor, Lotus Apartments, 5th Block Koramangala, Bangalore
                  </p>
                  <button className="w-full py-2 bg-rose-600 text-white font-extrabold text-[11px] tracking-wider uppercase rounded-lg shadow-xs">
                    DELIVER HERE
                  </button>
                </div>

                <div
                  className={`p-4 rounded-2xl border-2 transition-all cursor-pointer flex flex-col justify-between gap-3 ${selectedAddress === "WORK"
                      ? "border-rose-500 bg-rose-50/40 shadow-xs"
                      : "border-slate-200 bg-white hover:border-slate-300"
                    }`}
                  onClick={() => setSelectedAddress("WORK")}
                >
                  <div className="flex items-center gap-2 text-slate-800 font-extrabold text-sm">
                    <Briefcase size={18} className="text-blue-500" />
                    <span>Work</span>
                  </div>
                  <p className="text-xs text-slate-500 font-medium leading-relaxed">
                    Tech Park Tower B, 7th Floor, Ring Road, Bangalore
                  </p>
                  <button className="w-full py-2 bg-slate-800 text-white font-extrabold text-[11px] tracking-wider uppercase rounded-lg">
                    DELIVER HERE
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Delivery Tip Card */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-2xs flex items-start gap-4">
            <div className="p-3 bg-red-50 text-red-500 rounded-2xl shrink-0">
              <HeartHandshake size={24} />
            </div>
            <div className="flex flex-col gap-3 grow">
              <h3 className="text-lg font-extrabold text-slate-900">Say thank you with a tip</h3>
              <p className="text-xs text-slate-500 font-medium">Day and night, our delivery partners bring your favorite food to your doorstep.</p>
              <div className="flex items-center gap-3">
                {[10, 20, 30, 50].map((amount) => (
                  <button
                    key={amount}
                    className={`px-4 py-2 rounded-xl text-xs font-bold border transition-all cursor-pointer ${deliveryTip === amount
                        ? "bg-rose-600 text-white border-rose-600 shadow-xs"
                        : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                      }`}
                    onClick={() => setDeliveryTip(amount)}
                  >
                    ₹{amount}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Order Summary */}
        <div className="lg:col-span-5">
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-md sticky top-24 flex flex-col gap-6">
            {/* Restaurant Info Header */}
            {activeRestaurant && (
              <div className="border-b border-slate-100 pb-4">
                <h3 className="text-lg font-extrabold text-slate-900">{activeRestaurant.name}</h3>
                <span className="text-xs font-semibold text-slate-400">Koramangala, Bangalore</span>
              </div>
            )}

            {/* Cart Items List */}
            <div className="flex flex-col gap-4 max-h-60 overflow-y-auto pr-1">
              {cartItems.map((item) => {
                const itemPrice = Math.round((item.price || item.defaultPrice || 19900) / 100);
                return (
                  <div key={item.id} className="flex items-center justify-between gap-3 text-sm">
                    <div className="flex items-center gap-2 grow min-w-0">
                      <div className={`w-3.5 h-3.5 border-2 rounded-xs flex items-center justify-center p-0.5 shrink-0 ${item.isVeg ? "border-emerald-600" : "border-red-600"
                        }`}>
                        <div className={`w-full h-full rounded-full ${item.isVeg ? "bg-emerald-600" : "bg-red-600"}`}></div>
                      </div>
                      <span className="font-bold text-slate-800 truncate">{item.name}</span>
                    </div>

                    {/* Stepper */}
                    <div className="flex items-center gap-2 border border-slate-200 rounded-lg px-2 py-1 bg-slate-50 shrink-0">
                      <button onClick={() => removeFromCart(item.id)} className="text-slate-600 hover:text-rose-600 cursor-pointer">
                        <Minus size={12} />
                      </button>
                      <span className="text-xs font-extrabold text-slate-800 px-1">{item.quantity}</span>
                      <button onClick={() => addToCart(item, activeRestaurant)} className="text-slate-600 hover:text-rose-600 cursor-pointer">
                        <Plus size={12} />
                      </button>
                    </div>

                    <div className="font-extrabold text-slate-900 shrink-0 text-sm">
                      ₹{itemPrice * item.quantity}
                    </div>

                    <button
                      className="text-slate-300 hover:text-red-500 transition-colors p-1 cursor-pointer"
                      onClick={() => deleteItem(item.id)}
                      title="Remove item"
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                );
              })}
            </div>

            {/* Bill Details */}
            <div className="border-t border-slate-100 pt-4 flex flex-col gap-2.5 text-xs font-semibold text-slate-600">
              <h4 className="text-sm font-extrabold text-slate-800 mb-1">Bill Details</h4>

              <div className="flex items-center justify-between">
                <span>Item Total</span>
                <span className="font-bold text-slate-800">₹{subtotalRupees}</span>
              </div>

              <div className="flex items-center justify-between">
                <span>Delivery Fee | 2.5 kms</span>
                <span>{deliveryFee === 0 ? <strong className="text-emerald-600 font-black">FREE</strong> : `₹${deliveryFee}`}</span>
              </div>

              <div className="flex items-center justify-between">
                <span>Delivery Tip</span>
                <span className="font-bold text-slate-800">₹{deliveryTip}</span>
              </div>

              <div className="flex items-center justify-between">
                <span>Platform Fee</span>
                <span className="font-bold text-slate-800">₹{platformFee}</span>
              </div>

              <div className="flex items-center justify-between">
                <span>GST and Restaurant Charges</span>
                <span className="font-bold text-slate-800">₹{taxes}</span>
              </div>

              <div className="h-px bg-slate-200 my-1"></div>

              <div className="flex items-center justify-between text-base font-extrabold text-slate-900 pt-1">
                <span>TO PAY</span>
                <span className="text-rose-600">₹{finalPayable}</span>
              </div>
            </div>

            {/* Place Order CTA */}
            <button
              className="w-full py-4 bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-700 hover:to-rose-800 text-white rounded-2xl font-black text-sm uppercase tracking-wider flex items-center justify-between px-6 shadow-lg shadow-rose-500/25 hover:scale-102 transition-all cursor-pointer"
              onClick={handleCheckout}
            >
              <span>PAY ₹{finalPayable}</span>
              <span className="text-xs bg-white/20 px-3 py-1 rounded-xl">PROCEED TO PAY</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
