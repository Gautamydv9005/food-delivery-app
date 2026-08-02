import { useState, useEffect } from "react";
import { MENU_API_URL, CORS_PROXIES } from "../utils/constants";
import { MOCK_RESTAURANT_MENUS } from "../utils/mockData";

export const useRestaurantMenu = (resId) => {
  const [restaurantInfo, setRestaurantInfo] = useState(null);
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!resId) return;

    const fetchMenu = async () => {
      setIsLoading(true);
      setError(null);
      let menuData = null;

      // Check fallback mock menus first if matching ID exists
      if (MOCK_RESTAURANT_MENUS[resId]) {
        menuData = MOCK_RESTAURANT_MENUS[resId];
      } else {
        // Try live Swiggy Menu API via CORS proxy
        for (const proxyFn of CORS_PROXIES) {
          try {
            const url = proxyFn(`${MENU_API_URL}${resId}`);
            const res = await fetch(url);
            if (res.ok) {
              const json = await res.json();
              
              // Extract restaurant header info
              const info = json?.data?.cards?.find(
                (c) => c?.card?.card?.["@type"]?.includes("food.v2.Restaurant")
              )?.card?.card?.info;

              // Extract regular menu categories
              const regularCards = json?.data?.cards?.find(
                (c) => c?.groupedCard
              )?.groupedCard?.cardGroupMap?.REGULAR?.cards;

              const categoryCards = regularCards?.filter(
                (c) => c?.card?.card?.["@type"]?.includes("ItemCategory")
              )?.map((c) => c?.card?.card);

              if (info && categoryCards) {
                menuData = {
                  restaurantInfo: info,
                  categories: categoryCards
                };
                break;
              }
            }
          } catch (e) {
            console.warn("Menu fetch attempt failed:", e);
          }
        }
      }

      // Default fallback if unknown restaurant ID requested
      if (!menuData) {
        menuData = MOCK_RESTAURANT_MENUS["3241"]; // Default to Meghana Foods menu
      }

      setTimeout(() => {
        setRestaurantInfo(menuData.restaurantInfo);
        setCategories(menuData.categories);
        setIsLoading(false);
      }, 2000);
    };

    fetchMenu();
  }, [resId]);

  return { restaurantInfo, categories, isLoading, error };
};
