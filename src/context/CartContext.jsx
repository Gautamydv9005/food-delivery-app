import React, { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    try {
      const saved = localStorage.getItem("sweegi_cart");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [activeRestaurant, setActiveRestaurant] = useState(() => {
    try {
      const saved = localStorage.getItem("sweegi_cart_restaurant");
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("sweegi_cart", JSON.stringify(cartItems));
      localStorage.setItem("sweegi_cart_restaurant", JSON.stringify(activeRestaurant));
    } catch (e) {
      console.error("Failed to persist cart:", e);
    }
  }, [cartItems, activeRestaurant]);

  const addToCart = (item, restaurantInfo) => {
    // Check if adding from another restaurant
    if (activeRestaurant && activeRestaurant.id !== restaurantInfo.id && cartItems.length > 0) {
      const confirmReplace = window.confirm(
        `Your cart contains items from ${activeRestaurant.name}. Clear cart and add items from ${restaurantInfo.name}?`
      );
      if (!confirmReplace) return;

      // Clear previous restaurant items
      setCartItems([{ ...item, quantity: 1 }]);
      setActiveRestaurant({ id: restaurantInfo.id, name: restaurantInfo.name });
      return;
    }

    if (!activeRestaurant || cartItems.length === 0) {
      setActiveRestaurant({ id: restaurantInfo.id, name: restaurantInfo.name });
    }

    setCartItems((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      } else {
        return [...prev, { ...item, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      const existing = prev.find((i) => i.id === itemId);
      if (!existing) return prev;
      if (existing.quantity === 1) {
        const next = prev.filter((i) => i.id !== itemId);
        if (next.length === 0) setActiveRestaurant(null);
        return next;
      }
      return prev.map((i) =>
        i.id === itemId ? { ...i, quantity: i.quantity - 1 } : i
      );
    });
  };

  const deleteItem = (itemId) => {
    setCartItems((prev) => {
      const next = prev.filter((i) => i.id !== itemId);
      if (next.length === 0) setActiveRestaurant(null);
      return next;
    });
  };

  const clearCart = () => {
    setCartItems([]);
    setActiveRestaurant(null);
  };

  const totalCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const subtotalPaise = cartItems.reduce((acc, item) => {
    const itemPrice = item.price || item.defaultPrice || 19900;
    return acc + itemPrice * item.quantity;
  }, 0);

  const subtotalRupees = Math.round(subtotalPaise / 100);
  const deliveryFee = subtotalRupees > 0 ? (subtotalRupees > 500 ? 0 : 35) : 0;
  const platformFee = subtotalRupees > 0 ? 7 : 0;
  const grandTotal = subtotalRupees + deliveryFee + platformFee;

  return (
    <CartContext.Provider
      value={{
        cartItems,
        activeRestaurant,
        addToCart,
        removeFromCart,
        deleteItem,
        clearCart,
        totalCount,
        subtotalRupees,
        deliveryFee,
        platformFee,
        taxes,
        grandTotal
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
