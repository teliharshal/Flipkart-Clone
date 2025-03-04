import React, { useState, useMemo } from "react";

const productData = {
    "Grocery": [
      { "id": 1, "name": "Aashirvaad Atta", "price": 249, "discount": "10% off", "image": "https://example.com/atta.png", "rating": 4.2 },
      { "id": 2, "name": "Fortune Sunflower Oil", "price": 599, "discount": "5% off", "image": "https://example.com/oil.png", "rating": 4.4 },
      { "id": 3, "name": "Tata Salt", "price": 35, "discount": "12% off", "image": "https://example.com/salt.png", "rating": 4.3 },
      { "id": 4, "name": "Red Label Tea", "price": 150, "discount": "8% off", "image": "https://example.com/tea.png", "rating": 4.5 },
      { "id": 5, "name": "Amul Butter", "price": 250, "discount": "5% off", "image": "https://example.com/butter.png", "rating": 4.6 },
      { "id": 6, "name": "Organic Honey", "price": 350, "discount": "15% off", "image": "https://example.com/honey.png", "rating": 4.7 },
      { "id": 7, "name": "Maggi Noodles", "price": 50, "discount": "10% off", "image": "https://example.com/noodles.png", "rating": 4.4 }
    ],
    "Mobiles": [
      { "id": 8, "name": "iPhone 14", "price": 74999, "discount": "5% off", "image": "https://example.com/iphone14.png", "rating": 4.8 },
      { "id": 9, "name": "Samsung Galaxy S23", "price": 69999, "discount": "10% off", "image": "https://example.com/galaxy.png", "rating": 4.7 },
      { "id": 10, "name": "OnePlus 11", "price": 59999, "discount": "8% off", "image": "https://example.com/oneplus.png", "rating": 4.6 },
      { "id": 11, "name": "Redmi Note 12", "price": 24999, "discount": "12% off", "image": "https://example.com/redmi.png", "rating": 4.5 },
      { "id": 12, "name": "Realme Narzo 50", "price": 17999, "discount": "15% off", "image": "https://example.com/realme.png", "rating": 4.4 }
    ],
    "Fashion": [
      { "id": 13, "name": "Men's Leather Jacket", "price": 4999, "discount": "25% off", "image": "https://example.com/jacket.png", "rating": 4.6 },
      { "id": 14, "name": "Nike Running Shoes", "price": 6999, "discount": "20% off", "image": "https://example.com/shoes.png", "rating": 4.7 },
      { "id": 15, "name": "Women's Handbag", "price": 2999, "discount": "18% off", "image": "https://example.com/handbag.png", "rating": 4.5 },
      { "id": 16, "name": "Ray-Ban Sunglasses", "price": 5999, "discount": "15% off", "image": "https://example.com/sunglasses.png", "rating": 4.8 }
    ],
    "Electronics": [
      { "id": 17, "name": "Samsung Smart TV", "price": 45000, "discount": "20% off", "image": "https://example.com/tv.png", "rating": 4.8 },
      { "id": 18, "name": "Sony Headphones", "price": 2999, "discount": "15% off", "image": "https://example.com/headphones.png", "rating": 4.5 },
      { "id": 19, "name": "Dell Laptop", "price": 59999, "discount": "10% off", "image": "https://example.com/laptop.png", "rating": 4.6 },
      { "id": 20, "name": "Apple iPad", "price": 29999, "discount": "5% off", "image": "https://example.com/ipad.png", "rating": 4.7 }
    ],
    "Home & Furniture": [
      { "id": 21, "name": "Wooden Dining Table", "price": 15999, "discount": "10% off", "image": "https://example.com/diningtable.png", "rating": 4.5 },
      { "id": 22, "name": "Sofa Set", "price": 25999, "discount": "12% off", "image": "https://example.com/sofa.png", "rating": 4.6 }
    ],
    "Appliances": [
      { "id": 23, "name": "LG Washing Machine", "price": 34999, "discount": "15% off", "image": "https://example.com/washingmachine.png", "rating": 4.6 },
      { "id": 24, "name": "Whirlpool Refrigerator", "price": 29999, "discount": "10% off", "image": "https://example.com/fridge.png", "rating": 4.7 }
    ],
    "Flight Bookings": [
      { "id": 25, "name": "Mumbai to Delhi", "price": 4500, "discount": "5% off", "image": "https://example.com/flight.png", "rating": 4.3 },
      { "id": 26, "name": "Bangalore to Goa", "price": 2500, "discount": "8% off", "image": "https://example.com/flight.png", "rating": 4.5 }
    ],
    "Beauty, Toys & More": [
      { "id": 27, "name": "L'Oreal Face Cream", "price": 799, "discount": "15% off", "image": "https://example.com/cream.png", "rating": 4.6 },
      { "id": 28, "name": "Remote Control Car", "price": 1999, "discount": "10% off", "image": "https://example.com/car.png", "rating": 4.7 }
    ],
    "Two Wheelers": [
      { "id": 29, "name": "Honda Activa 6G", "price": 85000, "discount": "5% off", "image": "https://example.com/activa.png", "rating": 4.7 },
      { "id": 30, "name": "Royal Enfield Classic 350", "price": 215000, "discount": "8% off", "image": "https://example.com/enfield.png", "rating": 4.8 }
    ]
};

export default function ProductListing({ selectedCategory }) {
  const [sortBy, setSortBy] = useState("default");

  const products = useMemo(() => {
    if (!selectedCategory || !productData[selectedCategory]) {
      console.log("Category not found:", selectedCategory);
      return [];
    }
    console.log("Rendering products for:", selectedCategory);
    let sortedProducts = [...productData[selectedCategory]];
    
    if (sortBy === "price_low") sortedProducts.sort((a, b) => a.price - b.price);
    if (sortBy === "price_high") sortedProducts.sort((a, b) => b.price - a.price);
    if (sortBy === "rating") sortedProducts.sort((a, b) => b.rating - a.rating);
  
    return sortedProducts;
  }, [selectedCategory, sortBy]);

  return (
    <div className="mt-6 p-4 bg-white shadow-md rounded-md">
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-xl font-semibold">{selectedCategory} Products</h2>
        <select
          className="border p-2 rounded"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="default">Sort By</option>
          <option value="price_low">Price: Low to High</option>
          <option value="price_high">Price: High to Low</option>
          <option value="rating">Rating</option>
        </select>
      </div>

      <div className="flex overflow-x-auto space-x-4 p-2 scrollbar-hide">
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product.id} className="w-48 p-2 border rounded-md shadow-md flex-shrink-0">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-40 object-cover mb-2 rounded" 
                loading="lazy" 
              />
              <h3 className="text-sm font-medium">{product.name}</h3>
              <p className="text-green-600 font-bold">₹{product.price}</p>
              <p className="text-gray-600 text-xs">{product.discount}</p>
              <p className="text-yellow-500 text-xs">⭐ {product.rating}</p>
              <button className="mt-2 p-1 bg-blue-500 text-white rounded w-full hover:bg-blue-600">
                Add to Cart
              </button>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No products available.</p>
        )}
      </div>
    </div>
  );
}
