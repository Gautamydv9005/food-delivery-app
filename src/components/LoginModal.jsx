import React, { useState } from "react";
import { X, User, Mail, ArrowRight, ShieldCheck } from "lucide-react";
import { useAuth } from "../context/AuthContext";

export const LoginModal = () => {
  const { isLoginModalOpen, closeLoginModal, login } = useAuth();
  const [isSignUp, setIsSignUp] = useState(false);
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [step, setStep] = useState("PHONE");
  const [otp, setOtp] = useState("");

  if (!isLoginModalOpen) return null;

  const handleSendOtp = (e) => {
    e.preventDefault();
    if (!phone || phone.length < 10) return;
    setStep("OTP");
  };

  const handleVerifyOtp = (e) => {
    e.preventDefault();
    login({ name, email, phone });
    setStep("PHONE");
  };

  return (
    <div 
      className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4 animate-fadeIn" 
      onClick={closeLoginModal}
    >
      <div 
        className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 relative shadow-2xl animate-popIn" 
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 p-2 rounded-full hover:bg-slate-100 transition-colors cursor-pointer" 
          onClick={closeLoginModal}
        >
          <X size={20} />
        </button>

        <div className="flex flex-col gap-6">
          <div className="flex items-start justify-between gap-4">
            <div className="flex flex-col gap-1">
              <h2 className="text-2xl font-black text-slate-900">{isSignUp ? "Sign up" : "Login"}</h2>
              <p className="text-xs font-semibold text-slate-500">
                or{" "}
                <button 
                  className="text-rose-600 font-extrabold hover:underline cursor-pointer" 
                  onClick={() => {
                    setIsSignUp(!isSignUp);
                    setName("");
                    setEmail("");
                    setPhone("");
                  }}
                >
                  {isSignUp ? "login to your account" : "create an account"}
                </button>
              </p>
            </div>
            <div className="w-16 h-16 rounded-2xl overflow-hidden shrink-0 bg-rose-50 border border-rose-100">
              <img 
                src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=150" 
                alt="BiteDash Food" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {step === "PHONE" ? (
            <form onSubmit={handleSendOtp} className="flex flex-col gap-4">
              {isSignUp && (
                <>
                  <div className="relative flex items-center">
                    <User className="absolute left-3.5 text-slate-400" size={18} />
                    <input
                      type="text"
                      placeholder="Full Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold text-slate-800 placeholder-slate-400 focus:outline-none focus:border-rose-500 focus:ring-4 focus:ring-rose-500/10 transition-all"
                      required
                    />
                  </div>
                  <div className="relative flex items-center">
                    <Mail className="absolute left-3.5 text-slate-400" size={18} />
                    <input
                      type="email"
                      placeholder="Email Address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold text-slate-800 placeholder-slate-400 focus:outline-none focus:border-rose-500 focus:ring-4 focus:ring-rose-500/10 transition-all"
                      required
                    />
                  </div>
                </>
              )}

              <div className="relative flex items-center">
                <span className="absolute left-3.5 text-xs font-bold text-slate-500 border-r border-slate-200 pr-2">+91</span>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  maxLength={10}
                  className="w-full pl-16 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-bold text-slate-900 tracking-wider placeholder-slate-400 focus:outline-none focus:border-rose-500 focus:ring-4 focus:ring-rose-500/10 transition-all"
                  required
                />
              </div>

              <button 
                type="submit" 
                className="w-full py-3.5 bg-rose-600 hover:bg-rose-700 text-white font-extrabold text-xs uppercase tracking-wider rounded-xl shadow-md shadow-rose-500/20 flex items-center justify-center gap-2 cursor-pointer transition-all hover:scale-101 mt-2"
              >
                <span>{isSignUp ? "CONTINUE" : "LOGIN"}</span>
                <ArrowRight size={18} />
              </button>

              <p className="text-[11px] text-slate-400 text-center font-medium leading-relaxed mt-2">
                By clicking on Login, I accept the Terms & Conditions & Privacy Policy
              </p>
            </form>
          ) : (
            <form onSubmit={handleVerifyOtp} className="flex flex-col gap-4">
              <div className="flex items-center gap-3 p-3 bg-rose-50 border border-rose-100 rounded-2xl text-xs font-semibold text-rose-900">
                <ShieldCheck size={28} className="text-rose-500 shrink-0" />
                <p>Enter 4-digit OTP sent to <strong className="text-rose-900">+91 {phone}</strong></p>
              </div>

              <input
                type="text"
                placeholder="Enter 4-digit OTP (Default: 4321)"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                maxLength={4}
                className="w-full py-3 text-center text-xl font-extrabold text-slate-900 tracking-widest bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-rose-500 focus:ring-4 focus:ring-rose-500/10 transition-all"
                required
              />

              <button 
                type="submit" 
                className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs uppercase tracking-wider rounded-xl shadow-md shadow-emerald-600/20 cursor-pointer transition-all hover:scale-101 mt-2"
              >
                VERIFY & CONTINUE
              </button>

              <button 
                type="button" 
                className="text-xs font-bold text-slate-500 hover:text-slate-800 transition-colors text-center cursor-pointer mt-1" 
                onClick={() => setStep("PHONE")}
              >
                Change Phone Number
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
