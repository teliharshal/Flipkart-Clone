import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Dummy TV Data
const tvs =[
    { id: 1, name: "Motorola Edge 50 Pro", image: "https://motorolain.vtexassets.com/arquivos/ids/159178/motorola-edge-50-pro-PDP-ecomm-render-color5-5-.png?v=638614765175970000", price: 19999, category: "Mobile Phones", rating: 4.5 },
    { id: 2, name: "Apple MacBook Pro", image: "https://via.placeholder.com/300", price: 124999, category: "Laptops", rating: 4.8 },
    { id: 3, name: "Sony WH-1000XM5", image: "https://via.placeholder.com/300", price: 24999, category: "Headphones", rating: 4.7 },
    { id: 4, name: "Samsung Galaxy Watch 5", image: "https://via.placeholder.com/300", price: 18999, category: "Wearables", rating: 4.4 },
    { id: 5, name: "JBL Flip 6 Speaker", image: "https://via.placeholder.com/300", price: 7999, category: "Audio", rating: 4.6 },
    { id: 6, name: "Logitech G502 Mouse", image: "https://via.placeholder.com/300", price: 4999, category: "Accessories", rating: 4.5 },
    { id: 7, name: "Corsair K95 Keyboard", image: "https://via.placeholder.com/300", price: 14999, category: "Accessories", rating: 4.8 },
    { id: 8, name: "LG 4K OLED TV", image: "https://via.placeholder.com/300", price: 89999, category: "Television", rating: 4.9 },
    { id: 9, name: "Mi Power Bank 20000mAh", image: "https://via.placeholder.com/300", price: 2499, category: "Accessories", rating: 4.2 },
    { id: 10, name: "PlayStation 5", image: "https://via.placeholder.com/300", price: 49999, category: "Gaming", rating: 5.0 },
  ];
  

const TelevisionSection = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Televisions</h2>
          <p className="text-gray-500 text-sm">Best Deals to SHOP</p>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700">
          VIEW ALL
        </button>
      </div>

      {/* Scrollable Section */}
      <div className="relative">
        {/* Left Scroll Button */}
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 bg-white shadow-md rounded-full z-10"
        >
          <ChevronLeft className="w-6 h-6 text-gray-700" />
        </button>

        {/* Scrollable Product List */}
        <div ref={scrollRef} className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth">
          {tvs.map((tv) => (
            <Link to={`/product/${tv.id}`} key={tv.id} className="min-w-[150px]">
              <div className="bg-white border rounded-lg shadow-md p-3 w-[150px] text-center">
                <img src={tv.image} alt={tv.name} className="w-full h-28 object-cover" />
                <h3 className="text-sm font-semibold mt-2">{tv.name}</h3>
                <p className="text-green-600 text-xs">{tv.offer}</p>
                <p className="text-gray-700 font-bold text-sm">{tv.price}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* Right Scroll Button */}
        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 bg-white shadow-md rounded-full z-10"
        >
          <ChevronRight className="w-6 h-6 text-gray-700" />
        </button>
      </div>
    </div>
  );
};

export default TelevisionSection;
