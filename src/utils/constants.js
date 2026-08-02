// Swiggy API URLs & CDN Constants

// Swiggy Live Desktop API endpoint
export const SWIGGY_API_URL = 
  "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LIST_PART";

// CORS Proxies to bypass browser origin restrictions when requesting live API
export const CORS_PROXIES = [
  (url) => `https://corsproxy.io/?${encodeURIComponent(url)}`,
  (url) => `https://api.allorigins.win/raw?url=${encodeURIComponent(url)}`,
  (url) => `https://thingproxy.freeboard.io/fetch/${url}`
];

// Swiggy Cloudinary CDN Image Base URL
export const CDN_URL = 
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

// Swiggy Menu API endpoint template
export const MENU_API_URL = 
  "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=";

// Preset Quick Food Categories for Hero Carousel
export const CATEGORY_ITEMS = [
  { id: 1, name: "Biryani", image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029845/PC_Mweb/Biryani.png" },
  { id: 2, name: "Pizza", image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029856/PC_Mweb/Pizza.png" },
  { id: 3, name: "Burger", image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029845/PC_Mweb/Burger.png" },
  { id: 4, name: "North Indian", image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029858/PC_Mweb/North%20Indian.png" },
  { id: 5, name: "Chinese", image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029848/PC_Mweb/Chinese.png" },
  { id: 6, name: "Rolls", image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029858/PC_Mweb/Rolls.png" },
  { id: 7, name: "South Indian", image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029850/PC_Mweb/Dosa.png" },
  { id: 8, name: "Desserts", image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029853/PC_Mweb/Bakery.png" },
  { id: 9, name: "Cakes", image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029845/PC_Mweb/Cake.png" },
  { id: 10, name: "Noodles", image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029855/PC_Mweb/Noodles.png" }
];
