import { useState, useEffect, useCallback } from "react";
import { SWIGGY_API_URL, CORS_PROXIES } from "../utils/constants";
import { CITY_RESTAURANTS_MAP } from "../utils/mockData";
import { useLocationContext } from "../context/LocationContext";

export const useSwiggyData = () => {
  const { selectedLocation } = useLocationContext();
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("ALL");
  const [dataSource, setDataSource] = useState("FETCHING...");

  const parseSwiggyData = (json) => {
    const cards = json?.data?.cards || [];
    let restaurantList = [];

    for (const cardObj of cards) {
      const gridElements = cardObj?.card?.card?.gridElements?.infoWithStyle?.restaurants;
      if (gridElements && Array.isArray(gridElements) && gridElements.length > 0) {
        restaurantList = gridElements.map((r) => r.info);
        break;
      }
    }

    if (restaurantList.length === 0) {
      cards.forEach((cardObj) => {
        const infoList = cardObj?.card?.card?.infoWithStyle?.restaurants;
        if (infoList && Array.isArray(infoList)) {
          restaurantList = infoList.map((r) => r.info);
        }
      });
    }

    return restaurantList;
  };

  const fetchSwiggyData = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    let fetchedData = null;

    for (const proxyFn of CORS_PROXIES) {
      try {
        const targetUrl = proxyFn(SWIGGY_API_URL);
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 3000);

        const res = await fetch(targetUrl, { signal: controller.signal });
        clearTimeout(timeoutId);

        if (res.ok) {
          const json = await res.json();
          const list = parseSwiggyData(json);
          if (list.length > 0) {
            fetchedData = list;
            setDataSource("LIVE SWIGGY API");
            break;
          }
        }
      } catch (err) {
        console.warn("CORS proxy attempt failed, loading city dataset...", err.message);
      }
    }

    if (!fetchedData || fetchedData.length === 0) {
      const cityKey = selectedLocation.city || "Bangalore";
      const cityList = CITY_RESTAURANTS_MAP[cityKey] || CITY_RESTAURANTS_MAP.Bangalore;
      fetchedData = cityList;
      setDataSource("CITY DATASET");
    }

    setTimeout(() => {
      setAllRestaurants(fetchedData);
      setFilteredRestaurants(fetchedData);
      setIsLoading(false);
    }, 2000);
  }, [selectedLocation]);

  useEffect(() => {
    fetchSwiggyData();
  }, [fetchSwiggyData]);

  // Apply Search & Filter logic
  useEffect(() => {
    let result = [...allRestaurants];

    if (searchQuery.trim() !== "") {
      const q = searchQuery.toLowerCase();
      result = result.filter((r) => {
        const nameMatch = r.name?.toLowerCase().includes(q);
        const cuisineMatch = r.cuisines?.some((c) => c.toLowerCase().includes(q));
        const locationMatch = r.areaName?.toLowerCase().includes(q) || r.locality?.toLowerCase().includes(q);
        return nameMatch || cuisineMatch || locationMatch;
      });
    }

    switch (activeFilter) {
      case "TOP_RATED":
        result = result.filter((r) => Number(r.avgRating) >= 4.3);
        break;
      case "FAST_DELIVERY":
        result = result.filter((r) => r.sla?.deliveryTime <= 25);
        break;
      case "PURE_VEG":
        result = result.filter((r) => r.veg === true);
        break;
      case "UNDER_300":
        result = result.filter((r) => {
          const costMatch = r.costForTwo?.match(/\d+/);
          return costMatch ? parseInt(costMatch[0], 10) <= 300 : true;
        });
        break;
      case "RS_300_600":
        result = result.filter((r) => {
          const costMatch = r.costForTwo?.match(/\d+/);
          if (!costMatch) return true;
          const cost = parseInt(costMatch[0], 10);
          return cost >= 300 && cost <= 600;
        });
        break;
      default:
        break;
    }

    setFilteredRestaurants(result);
  }, [searchQuery, activeFilter, allRestaurants]);

  const handleFilter = (filterType) => {
    if (activeFilter === filterType) {
      setActiveFilter("ALL");
    } else {
      setActiveFilter(filterType);
    }
  };

  const refreshData = () => {
    fetchSwiggyData();
  };

  return {
    allRestaurants,
    filteredRestaurants,
    isLoading,
    error,
    searchQuery,
    setSearchQuery,
    activeFilter,
    handleFilter,
    dataSource,
    refreshData
  };
};
