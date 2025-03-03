import React, { useState, useMemo } from "react";

const productData = {
  Grocery: [
    { id: 1, name: "Aashirvaad Atta", price: 249, discount: "10% off", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOhR-Wiium6fmqZLVFNucBWrdu_Fv0JMXAqQ&s", rating: 4.2 },
    { id: 3, name: "Sugar", price: 799, discount: "5% off", image: "https://media.istockphoto.com/id/1387705862/vector/sugar-packet-icon-flat-design.jpg?s=612x612&w=0&k=20&c=FW81XOHg245wLiQhMPznnfcEHoVRf_PKGZT82D6H4jg=", rating: 4.4 },
    { id: 4, name: "Tata Salt", price: 999, discount: "5% off", image: "https://bulkorder.villkart.com/wp-content/uploads/2022/08/tata-salt-iodized-450x450.webp", rating: 4.3 },

  ],
  Mobiles: [
    { id: 8, name: "Motorola g45 5G", price: 11999, discount: "20% off", image: "https://motorolain.vtexassets.com/arquivos/ids/158866/moto-g64-5G-IN-ecom-render-16-color3-gh7oz2iu.png?v=638758075963030000", rating: 4.3 },
    { id: 9, name: "Samsung Galaxy M14", price: 15999, discount: "15% off", image: "https://suprememobiles.in/cdn/shop/files/SamsungM144G-ArcticBlue.png?v=1717678309", rating: 4.7 },
  ],
};

export default function ProductListing({ selectedCategory }) {
  const [sortBy, setSortBy] = useState("default");

  const products = useMemo(() => {
    let sortedProducts = [...(productData[selectedCategory] || [])];
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
