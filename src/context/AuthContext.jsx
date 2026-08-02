import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    try {
      const saved = localStorage.getItem("sweegi_user");
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  useEffect(() => {
    try {
      if (user) {
        localStorage.setItem("sweegi_user", JSON.stringify(user));
      } else {
        localStorage.removeItem("sweegi_user");
      }
    } catch (e) {
      console.error("Auth storage error:", e);
    }
  }, [user]);

  const openLoginModal = () => setIsLoginModalOpen(true);
  const closeLoginModal = () => setIsLoginModalOpen(false);

  const login = (userData) => {
    setUser({
      name: userData.name || "Foodie Swiggy User",
      email: userData.email || "user@swiggy.com",
      phone: userData.phone || "+91 XXXXXXXXX",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150"
    });
    setIsLoginModalOpen(false);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoginModalOpen,
        openLoginModal,
        closeLoginModal,
        login,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
