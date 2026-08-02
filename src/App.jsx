import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import { AuthProvider } from "./context/AuthContext";
import { LocationProvider } from "./context/LocationContext";
import { useSwiggyData } from "./hooks/useSwiggyData";
import Header from "./components/Header";
import SearchFilterBar from "./components/SearchFilterBar";
import RestaurantList from "./components/RestaurantList";
import RestaurantMenu from "./components/RestaurantMenu";
import Cart from "./components/Cart";
import LoginModal from "./components/LoginModal";
import OrderSuccessModal from "./components/OrderSuccessModal";
import Footer from "./components/Footer";
import RestaurantShimmer from "./components/Shimmer";

function HomeView() {
  const navigate = useNavigate();
  const {
    filteredRestaurants,
    isLoading,
    searchQuery,
    setSearchQuery,
    activeFilter,
    handleFilter,
    refreshData
  } = useSwiggyData();

  const handleSelectRestaurant = (resId) => {
    navigate(`/restaurant/${resId}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="flex flex-col">
      <SearchFilterBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        activeFilter={activeFilter}
        onFilterChange={handleFilter}
        totalCount={filteredRestaurants.length}
        onRefresh={refreshData}
      />

      {isLoading ? (
        <RestaurantShimmer />
      ) : (
        <RestaurantList
          restaurants={filteredRestaurants}
          onSelectRestaurant={handleSelectRestaurant}
          onResetFilters={() => {
            setSearchQuery("");
            handleFilter("ALL");
          }}
        />
      )}
    </div>
  );
}

function AppContent() {
  const [isOrderSuccessOpen, setIsOrderSuccessOpen] = useState(false);
  const navigate = useNavigate();

  const handleOrderPlaced = () => {
    setIsOrderSuccessOpen(true);
  };

  const handleCloseOrderSuccess = () => {
    setIsOrderSuccessOpen(false);
    navigate("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 font-sans selection:bg-rose-500 selection:text-white">
      <Header />

      <LoginModal />
      
      <OrderSuccessModal
        isOpen={isOrderSuccessOpen}
        onClose={handleCloseOrderSuccess}
      />

      <main className="grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/restaurant/:resId" element={<RestaurantMenu />} />
          <Route path="/cart" element={<Cart onOrderPlaced={handleOrderPlaced} />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <LocationProvider>
        <CartProvider>
          <AppContent />
        </CartProvider>
      </LocationProvider>
    </AuthProvider>
  );
}
