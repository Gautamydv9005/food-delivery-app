// Authentic Swiggy JSON structure for top restaurants & detailed menus

export const CITY_RESTAURANTS_MAP = {
  Bangalore: [
    {
      id: "10576",
      name: "Pizza Hut",
      promoted: true,
      locality: "Indiranagar",
      areaName: "Indiranagar, Bangalore",
      costForTwo: "₹350 for two",
      cuisines: ["Pizzas", "Italian", "Pastas"],
      avgRating: 4.3,
      veg: false,
      sla: { deliveryTime: 25, slaString: "25-30 mins" },
      aggregatedDiscountInfoV3: { header: "50% OFF", subHeader: "UPTO ₹100" }
    },
    {
      id: "3241",
      name: "Meghana Foods",
      locality: "Koramangala",
      areaName: "Koramangala 5th Block, Bangalore",
      costForTwo: "₹500 for two",
      cuisines: ["Biryani", "Andhra", "South Indian"],
      avgRating: 4.6,
      veg: false,
      sla: { deliveryTime: 20, slaString: "20-25 mins" },
      aggregatedDiscountInfoV3: { header: "₹125 OFF", subHeader: "ABOVE ₹499" }
    },
    {
      id: "2415",
      name: "KFC",
      promoted: true,
      locality: "MG Road",
      areaName: "Central Bangalore",
      costForTwo: "₹400 for two",
      cuisines: ["Burgers", "Fast Food", "Rolls"],
      avgRating: 4.2,
      veg: false,
      sla: { deliveryTime: 30, slaString: "30-35 mins" },
      aggregatedDiscountInfoV3: { header: "40% OFF", subHeader: "UPTO ₹80" }
    },
    {
      id: "5938",
      name: "Burger King",
      locality: "Forum Mall",
      areaName: "Koramangala, Bangalore",
      costForTwo: "₹350 for two",
      cuisines: ["Burgers", "American", "Beverages"],
      avgRating: 4.4,
      veg: false,
      sla: { deliveryTime: 22, slaString: "20-25 mins" },
      aggregatedDiscountInfoV3: { header: "60% OFF", subHeader: "UPTO ₹120" }
    },
    {
      id: "428",
      name: "Haldiram's Sweets",
      locality: "Commercial Street",
      areaName: "Tasker Town, Bangalore",
      costForTwo: "₹250 for two",
      cuisines: ["North Indian", "Sweets", "Chaat"],
      avgRating: 4.5,
      veg: true,
      sla: { deliveryTime: 28, slaString: "25-30 mins" },
      aggregatedDiscountInfoV3: { header: "20% OFF", subHeader: "ABOVE ₹299" }
    },
    {
      id: "12345",
      name: "Empire Restaurant",
      locality: "Church Street",
      areaName: "MG Road, Bangalore",
      costForTwo: "₹450 for two",
      cuisines: ["Kebabs", "Biryani", "North Indian"],
      avgRating: 4.3,
      veg: false,
      sla: { deliveryTime: 35, slaString: "35-40 mins" },
      aggregatedDiscountInfoV3: { header: "10% OFF", subHeader: "USE CODE EMPIRE" }
    },
    {
      id: "87654",
      name: "Corner House Ice Cream",
      locality: "Residency Road",
      areaName: "Lavelle Road, Bangalore",
      costForTwo: "₹300 for two",
      cuisines: ["Ice Cream", "Desserts", "Sundaes"],
      avgRating: 4.8,
      veg: true,
      sla: { deliveryTime: 18, slaString: "15-20 mins" },
      aggregatedDiscountInfoV3: { header: "EVERYDAY VALUE", subHeader: "SPECIAL SUNDAES" }
    },
    {
      id: "99123",
      name: "Subway",
      locality: "Brigade Road",
      areaName: "CBD, Bangalore",
      costForTwo: "₹350 for two",
      cuisines: ["Salads", "Healthy Food", "Sandwiches"],
      avgRating: 4.1,
      veg: false,
      sla: { deliveryTime: 24, slaString: "20-25 mins" },
      aggregatedDiscountInfoV3: { header: "30% OFF", subHeader: "UPTO ₹75" }
    }
  ],
  Mumbai: [
    {
      id: "mum1",
      name: "Bademiya Kebabs",
      promoted: true,
      locality: "Colaba",
      areaName: "Fort, Mumbai",
      costForTwo: "₹600 for two",
      cuisines: ["Kebabs", "Mughlai", "Biryani", "Rolls"],
      avgRating: 4.5,
      veg: false,
      sla: { deliveryTime: 25, slaString: "20-25 mins" },
      aggregatedDiscountInfoV3: { header: "20% OFF", subHeader: "MUMBAI SPECIAL" }
    },
    {
      id: "mum2",
      name: "Joey's Pizza",
      locality: "Bandra West",
      areaName: "Bandra, Mumbai",
      costForTwo: "₹550 for two",
      cuisines: ["Pizzas", "Italian", "Fast Food"],
      avgRating: 4.7,
      veg: false,
      sla: { deliveryTime: 30, slaString: "25-30 mins" },
      aggregatedDiscountInfoV3: { header: "50% OFF", subHeader: "UPTO ₹100" }
    },
    {
      id: "mum3",
      name: "Britannia & Co. Cafe",
      locality: "Ballard Estate",
      areaName: "Fort, Mumbai",
      costForTwo: "₹700 for two",
      cuisines: ["Parsi", "Iranian", "Berry Pulao"],
      avgRating: 4.6,
      veg: false,
      sla: { deliveryTime: 35, slaString: "30-35 mins" },
      aggregatedDiscountInfoV3: { header: "15% OFF", subHeader: "AUTHENTIC PARSI" }
    },
    {
      id: "mum4",
      name: "Candies Bakery",
      locality: "Pali Hill",
      areaName: "Bandra West, Mumbai",
      costForTwo: "₹400 for two",
      cuisines: ["Continental", "Bakery", "Desserts", "Salads"],
      avgRating: 4.4,
      veg: false,
      sla: { deliveryTime: 22, slaString: "20-25 mins" },
      aggregatedDiscountInfoV3: { header: "BUY 1 GET 1", subHeader: "ON PASTRIES" }
    },
    {
      id: "mum5",
      name: "Elco Pani Puri & Chaat",
      locality: "Hill Road",
      areaName: "Bandra West, Mumbai",
      costForTwo: "₹300 for two",
      cuisines: ["Street Food", "Chaat", "North Indian"],
      avgRating: 4.5,
      veg: true,
      sla: { deliveryTime: 20, slaString: "15-20 mins" },
      aggregatedDiscountInfoV3: { header: "20% OFF", subHeader: "CHAAT DELIGHT" }
    },
    {
      id: "mum6",
      name: "Natural Ice Cream",
      locality: "Juhu",
      areaName: "Juhu Scheme, Mumbai",
      costForTwo: "₹200 for two",
      cuisines: ["Ice Cream", "Desserts", "Fruit Ice Creams"],
      avgRating: 4.8,
      veg: true,
      sla: { deliveryTime: 15, slaString: "10-15 mins" },
      aggregatedDiscountInfoV3: { header: "TENDER COCONUT", subHeader: "SPECIAL" }
    }
  ],
  "Delhi NCR": [
    {
      id: "del1",
      name: "Karim's Mughlai",
      promoted: true,
      locality: "Jama Masjid",
      areaName: "Old Delhi, New Delhi",
      costForTwo: "₹650 for two",
      cuisines: ["Mughlai", "North Indian", "Kebabs"],
      avgRating: 4.6,
      veg: false,
      sla: { deliveryTime: 30, slaString: "25-30 mins" },
      aggregatedDiscountInfoV3: { header: "30% OFF", subHeader: "DELHI LEGEND" }
    },
    {
      id: "del2",
      name: "Kake Da Hotel",
      locality: "Connaught Place",
      areaName: "CP, New Delhi",
      costForTwo: "₹500 for two",
      cuisines: ["North Indian", "Butter Chicken", "Naan"],
      avgRating: 4.4,
      veg: false,
      sla: { deliveryTime: 25, slaString: "20-25 mins" },
      aggregatedDiscountInfoV3: { header: "50% OFF", subHeader: "UPTO ₹100" }
    },
    {
      id: "del3",
      name: "Moti Mahal Deluxe",
      locality: "Daryaganj",
      areaName: "Central Delhi",
      costForTwo: "₹700 for two",
      cuisines: ["North Indian", "Mughlai", "Tandoori"],
      avgRating: 4.5,
      veg: false,
      sla: { deliveryTime: 35, slaString: "30-35 mins" },
      aggregatedDiscountInfoV3: { header: "₹150 OFF", subHeader: "ABOVE ₹599" }
    },
    {
      id: "del4",
      name: "Haldiram's Delhi",
      locality: "DLF Cyber Hub",
      areaName: "Gurgaon, NCR",
      costForTwo: "₹350 for two",
      cuisines: ["North Indian", "Chaat", "Sweets", "Thali"],
      avgRating: 4.5,
      veg: true,
      sla: { deliveryTime: 22, slaString: "20-25 mins" },
      aggregatedDiscountInfoV3: { header: "20% OFF", subHeader: "PURE VEG SPECIAL" }
    },
    {
      id: "del5",
      name: "The Big Chill Cafe",
      locality: "Khan Market",
      areaName: "Central Delhi",
      costForTwo: "₹800 for two",
      cuisines: ["Italian", "Pastas", "Desserts", "Pizzas"],
      avgRating: 4.7,
      veg: false,
      sla: { deliveryTime: 28, slaString: "25-30 mins" },
      aggregatedDiscountInfoV3: { header: "SPECIAL PASTA", subHeader: "CHEF'S SELECTION" }
    }
  ],
  Hyderabad: [
    {
      id: "hyd1",
      name: "Paradise Biryani",
      promoted: true,
      locality: "Secunderabad",
      areaName: "Secunderabad, Hyderabad",
      costForTwo: "₹500 for two",
      cuisines: ["Hyderabadi Biryani", "Mughlai", "Kebabs"],
      avgRating: 4.6,
      veg: false,
      sla: { deliveryTime: 22, slaString: "20-25 mins" },
      aggregatedDiscountInfoV3: { header: "50% OFF", subHeader: "WORLD FAMOUS BIRYANI" }
    },
    {
      id: "hyd2",
      name: "Bawarchi Restaurant",
      locality: "RTC X Roads",
      areaName: "Chikkadpally, Hyderabad",
      costForTwo: "₹450 for two",
      cuisines: ["Biryani", "Hyderabadi", "Chinese"],
      avgRating: 4.5,
      veg: false,
      sla: { deliveryTime: 25, slaString: "20-25 mins" },
      aggregatedDiscountInfoV3: { header: "40% OFF", subHeader: "SPECIAL DUM BIRYANI" }
    },
    {
      id: "hyd3",
      name: "Pista House",
      locality: "Charminar",
      areaName: "Old City, Hyderabad",
      costForTwo: "₹400 for two",
      cuisines: ["Haleem", "Biryani", "Bakery", "Sweets"],
      avgRating: 4.7,
      veg: false,
      sla: { deliveryTime: 28, slaString: "25-30 mins" },
      aggregatedDiscountInfoV3: { header: "GI TAG HALEEM", subHeader: "AUTHENTIC" }
    },
    {
      id: "hyd4",
      name: "Cafe Niloufer",
      locality: "Lakdikapul",
      areaName: "Hyderabad Central",
      costForTwo: "₹250 for two",
      cuisines: ["Irani Chai", "Osmania Biscuits", "Bakery"],
      avgRating: 4.8,
      veg: true,
      sla: { deliveryTime: 18, slaString: "15-20 mins" },
      aggregatedDiscountInfoV3: { header: "CHAI & BISCUIT", subHeader: "COMBO" }
    },
    {
      id: "hyd5",
      name: "Chutneys",
      locality: "Banjara Hills",
      areaName: "Road No 3, Hyderabad",
      costForTwo: "₹450 for two",
      cuisines: ["South Indian", "7 Gunjulu Dosa", "Tiffins"],
      avgRating: 4.6,
      veg: true,
      sla: { deliveryTime: 20, slaString: "15-20 mins" },
      aggregatedDiscountInfoV3: { header: "SPECIAL DOSA", subHeader: "BABAI HOTEL STYLE" }
    }
  ],
  Pune: [
    {
      id: "pune1",
      name: "Vaishali South Indian",
      promoted: true,
      locality: "FC Road",
      areaName: "Shivajinagar, Pune",
      costForTwo: "₹300 for two",
      cuisines: ["South Indian", "Filter Coffee", "Fast Food"],
      avgRating: 4.7,
      veg: true,
      sla: { deliveryTime: 20, slaString: "15-20 mins" },
      aggregatedDiscountInfoV3: { header: "PUNE LEGEND", subHeader: "SPICY SPUD DOSA" }
    },
    {
      id: "pune2",
      name: "Cafe Goodluck",
      locality: "Deccan Gymkhana",
      areaName: "FC Road, Pune",
      costForTwo: "₹350 for two",
      cuisines: ["Irani Cafe", "Bun Maska", "Keema Pav", "Chai"],
      avgRating: 4.6,
      veg: false,
      sla: { deliveryTime: 22, slaString: "20-25 mins" },
      aggregatedDiscountInfoV3: { header: "ESTD 1935", subHeader: "SPECIAL KEEMA PAV" }
    },
    {
      id: "pune3",
      name: "Kayani Bakery",
      locality: "East Street",
      areaName: "Camp, Pune",
      costForTwo: "₹250 for two",
      cuisines: ["Bakery", "Shrewsbury Biscuits", "Cakes"],
      avgRating: 4.8,
      veg: true,
      sla: { deliveryTime: 25, slaString: "20-25 mins" },
      aggregatedDiscountInfoV3: { header: "SHREWSBURY", subHeader: "ICONIC BISCUITS" }
    },
    {
      id: "pune4",
      name: "Bedekar Misal",
      locality: "Narayan Peth",
      areaName: "Old Pune, Pune",
      costForTwo: "₹200 for two",
      cuisines: ["Maharashtrian", "Puneri Misal", "Snacks"],
      avgRating: 4.5,
      veg: true,
      sla: { deliveryTime: 18, slaString: "15-20 mins" },
      aggregatedDiscountInfoV3: { header: "SPICY PUNERI", subHeader: "MISAL PAV" }
    },
    {
      id: "pune5",
      name: "Sujata Mastani",
      locality: "Sadashiv Peth",
      areaName: "Pune Central",
      costForTwo: "₹250 for two",
      cuisines: ["Mastani", "Mango Mastani", "Desserts"],
      avgRating: 4.7,
      veg: true,
      sla: { deliveryTime: 15, slaString: "10-15 mins" },
      aggregatedDiscountInfoV3: { header: "MANGO MASTANI", subHeader: "SPECIAL" }
    }
  ]
};

export const MOCK_SWIGGY_RESPONSE = {
  statusCode: 0,
  data: {
    cards: [
      {
        card: {
          card: {
            id: "top_brands_carousels",
            gridElements: {
              infoWithStyle: {
                restaurants: CITY_RESTAURANTS_MAP.Bangalore.map((r) => ({ info: r }))
              }
            }
          }
        }
      }
    ]
  }
};

export const MOCK_RESTAURANT_MENUS = {
  "10576": {
    restaurantInfo: {
      name: "Pizza Hut",
      cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
      areaName: "Indiranagar",
      locality: "Indiranagar",
      avgRating: 4.3,
      totalRatingsString: "10K+ ratings",
      costForTwoMessage: "₹350 for two",
      sla: { slaString: "25-30 MINS", lastMileTravelString: "2.4 km" }
    },
    categories: [
      {
        title: "Recommended Pizzas",
        itemCards: [
          { card: { info: { id: "ph1", name: "Margherita Supreme Pizza", price: 29900, description: "Classic cheese pizza with fresh mozzarella & basil herbs", isVeg: true, rating: "4.5", bestseller: true, imageId: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=400" } } },
          { card: { info: { id: "ph2", name: "Chicken Pepperoni Pizza", price: 44900, description: "Loaded with spicy chicken pepperoni & double mozzarella cheese", isVeg: false, rating: "4.6", bestseller: true, imageId: "https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&q=80&w=400" } } },
          { card: { info: { id: "ph3", name: "Veggie Feast Pizza", price: 34900, description: "Onion, capsicum, mushroom, corn & fresh tomatoes", isVeg: true, rating: "4.2", imageId: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&q=80&w=400" } } }
        ]
      },
      {
        title: "Sides & Garlic Bread",
        itemCards: [
          { card: { info: { id: "ph4", name: "Garlic Breadstick Stuffed", price: 14900, description: "Freshly baked garlic sticks stuffed with creamy cheese", isVeg: true, rating: "4.4", imageId: "https://images.unsplash.com/photo-1573140247632-f8fd74997d5c?auto=format&fit=crop&q=80&w=400" } } }
        ]
      }
    ]
  },
  "3241": {
    restaurantInfo: {
      name: "Meghana Foods",
      cuisines: ["Biryani", "Andhra", "South Indian", "Chinese"],
      areaName: "Koramangala 5th Block",
      locality: "Koramangala",
      avgRating: 4.6,
      totalRatingsString: "50K+ ratings",
      costForTwoMessage: "₹500 for two",
      sla: { slaString: "20-25 MINS", lastMileTravelString: "1.8 km" }
    },
    categories: [
      {
        title: "Signature Biryanis",
        itemCards: [
          { card: { info: { id: "mf1", name: "Meghana Special Chicken Biryani", price: 36000, description: "Boneless chicken gravy biryani served with raita and mirchi ka salan", isVeg: false, rating: "4.7", bestseller: true, imageId: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&q=80&w=400" } } },
          { card: { info: { id: "mf2", name: "Paneer Biryani", price: 31000, description: "Rich spicy paneer gravy with fragrant basmati rice", isVeg: true, rating: "4.5", bestseller: true, imageId: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&q=80&w=400" } } },
          { card: { info: { id: "mf3", name: "Mutton Dum Biryani", price: 44000, description: "Slow cooked tender mutton with authentic Andhra spices", isVeg: false, rating: "4.6", imageId: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=400" } } }
        ]
      }
    ]
  },
  "mum1": {
    restaurantInfo: {
      name: "Bademiya Kebabs",
      cuisines: ["Kebabs", "Mughlai", "Biryani", "Rolls"],
      areaName: "Colaba",
      locality: "Fort, Mumbai",
      avgRating: 4.5,
      totalRatingsString: "20K+ ratings",
      costForTwoMessage: "₹600 for two",
      sla: { slaString: "20-25 MINS", lastMileTravelString: "2.1 km" }
    },
    categories: [
      {
        title: "Famous Colaba Kebabs",
        itemCards: [
          { card: { info: { id: "bad1", name: "Chicken Seekh Kebab Roll", price: 26000, description: "Iconic Mumbai street food seekh kebab wrapped in hot rumali roti", isVeg: false, rating: "4.6", bestseller: true, imageId: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&q=80&w=400" } } },
          { card: { info: { id: "bad2", name: "Mutton Boti Kebab", price: 38000, description: "Charcoal grilled tender mutton pieces marinated in aromatic spices", isVeg: false, rating: "4.7", bestseller: true, imageId: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&q=80&w=400" } } }
        ]
      }
    ]
  },
  "del1": {
    restaurantInfo: {
      name: "Karim's Mughlai",
      cuisines: ["Mughlai", "North Indian", "Kebabs"],
      areaName: "Jama Masjid",
      locality: "Old Delhi, New Delhi",
      avgRating: 4.6,
      totalRatingsString: "30K+ ratings",
      costForTwoMessage: "₹650 for two",
      sla: { slaString: "25-30 MINS", lastMileTravelString: "3.0 km" }
    },
    categories: [
      {
        title: "Old Delhi Classics",
        itemCards: [
          { card: { info: { id: "kar1", name: "Karim's Mutton Korma", price: 42000, description: "Authentic rich royal mutton gravy cooked in pure ghee", isVeg: false, rating: "4.8", bestseller: true, imageId: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=400" } } },
          { card: { info: { id: "kar2", name: "Tandoori Roti", price: 3000, description: "Fresh clay oven baked wheat roti", isVeg: true, rating: "4.5", imageId: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=400" } } }
        ]
      }
    ]
  },
  "hyd1": {
    restaurantInfo: {
      name: "Paradise Biryani",
      cuisines: ["Hyderabadi Biryani", "Mughlai", "Kebabs"],
      areaName: "Secunderabad",
      locality: "Hyderabad",
      avgRating: 4.6,
      totalRatingsString: "80K+ ratings",
      costForTwoMessage: "₹500 for two",
      sla: { slaString: "20-25 MINS", lastMileTravelString: "1.5 km" }
    },
    categories: [
      {
        title: "World Famous Hyderabadi Biryani",
        itemCards: [
          { card: { info: { id: "par1", name: "Special Chicken Dum Biryani", price: 37000, description: "Authentic Hyderabadi saffron basmati rice with succulent chicken", isVeg: false, rating: "4.8", bestseller: true, imageId: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&q=80&w=400" } } },
          { card: { info: { id: "par2", name: "Double Ka Meetha", price: 12000, description: "Traditional Hyderabadi bread pudding topped with pistachios", isVeg: true, rating: "4.6", imageId: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&q=80&w=400" } } }
        ]
      }
    ]
  },
  "pune1": {
    restaurantInfo: {
      name: "Vaishali South Indian",
      cuisines: ["South Indian", "Filter Coffee", "Fast Food"],
      areaName: "FC Road",
      locality: "Shivajinagar, Pune",
      avgRating: 4.7,
      totalRatingsString: "40K+ ratings",
      costForTwoMessage: "₹300 for two",
      sla: { slaString: "15-20 MINS", lastMileTravelString: "1.2 km" }
    },
    categories: [
      {
        title: "FC Road Classics",
        itemCards: [
          { card: { info: { id: "vai1", name: "Vaishali Special Masala Dosa", price: 14000, description: "Crispy golden butter dosa served with spicy potato & coconut chutney", isVeg: true, rating: "4.8", bestseller: true, imageId: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&q=80&w=400" } } },
          { card: { info: { id: "vai2", name: "Special South Indian Filter Coffee", price: 6000, description: "Hot frothy decoction filter coffee", isVeg: true, rating: "4.9", bestseller: true, imageId: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=400" } } }
        ]
      }
    ]
  }
};
