import React from "react";

const products = [
  {
    name: "Best TrueWireless H...",
    image: "https://www.baudville.com/cdn/shop/products/BV_94172_FRONT.jpg?v=1702501363",
    price: "Grab Now",
  },
  {
    name: "Noise Smartwatches",
    image: "https://www.gonoise.com/cdn/shop/products/Artboard17.png?v=1674121716",
    price: "From ₹1,099",
  },
  {
    name: "Printers",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReGnAhYfVx5dKEmhNuHNHK7y9sASSNuHXhFw&s",
    price: "From ₹499*",
  },
  {
    name: "Top Mirrorless Came...",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIO0LgJBeaJurUGvXVDh9LWVmCKeHQRxFzsg&s",
    price: "Shop Now!",
  },
  {
    name: "ASUS Monitors",
    image: "https://mx2games.com/wp-content/uploads/2024/10/Asus-Rog-Swift-32-Inch-4K-Oled-Gaming-Monitor-Dual-Mode-4K-FHD-PG32UCDP-httpsmx2games.com_.png",
    price: "From ₹14,999",
  },
  {
    name: "Projectors",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaMKyCmswvjYKi4qPLC_O2KdUbRGH_E18YbQ&s",
    price: "From ₹9,999",
  },
  {
    name: "Best of Shavers",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1JNgmVKkDTgPownwzfa6p06TZCyhTMlJJFmYElO66rYSnitn8zufzTLN6kYMxF_7XF1k&usqp=CAU",
    price: "From ₹999",
  },
  {
    name: "Best SmartPhones",
    image: "https://www.oppostore.com.au/cdn/shop/files/1_413475e3-4489-48be-ac95-735bad7e914b.png?v=1723427854&width=1080",
    price: "From ₹9,999",
  },
  {
    name: "Laptops",
    image: "https://m.media-amazon.com/images/I/51QHf1koyPL.jpg",
    price: "From ₹20000"
  },
];



export default function PromotionalCards() {
  return (
    <div className="bg-white p-6 shadow-md pt-1">
      <h2 className="text-xl font-semibold mb-4">Best of Electronics</h2>
      <div className="flex space-x-4">
        {/* Products List */}
        <div className="flex space-x-6 overflow-x-auto">
          {products.map((product, index) => (
            <div key={index} className="flex flex-col items-center min-w-[150px]">
              <img src={product.image} alt={product.name} className="w-32 h-32 object-contain" />
              <p className="text-sm text-center mt-2">{product.name}</p>
              <p className="text-sm font-bold">{product.price}</p>
            </div>
          ))}
        </div>
        
        {/* Ad Banner */}
        
      </div>
    </div>
  );
}
