import React, { useState } from "react";

const categories = [
  { name: "Grocery", image: "https://rukminim2.flixcart.com/flap/64/64/image/0d75b34f7d8fbcb3.png?q=100", link: "#" },
  { name: "Mobiles", image: "https://rukminim2.flixcart.com/flap/64/64/image/22fddf3c7da4c4f4.png?q=100", link: "#" },
  { name: "Fashion", image: "https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=600", link: "#", dropdown: true, subcategories: ["Men's Clothing", "Women's Clothing", "Kids' Fashion"] },
  { name: "Electronics", image: "https://rukminim2.flixcart.com/flap/64/64/image/69c6589653afdb9a.png?q=100", link: "#", dropdown: true, subcategories: ["Mobiles", "Laptops", "Cameras"] },
  { name: "Home & Furniture", image: "https://rukminim2.flixcart.com/flap/64/64/image/ab7e2b022a4587dd.jpg?q=100", link: "#", dropdown: true, subcategories: ["Furniture", "Home Decor", "Lighting"] },
  { name: "Appliances", image: "https://rukminim2.flixcart.com/flap/64/64/image/22fddf3c7da4c4f4.png?q=100", link: "#" },
  { name: "Flight Bookings", image: "https://rukminim2.flixcart.com/flap/64/64/image/71050627a56b4693.png?q=100", link: "#" },
  { name: "Beauty, Toys & More", image: "https://rukminim2.flixcart.com/flap/64/64/image/dff3f7adcf3a90c6.png?q=100", link: "#", dropdown: true, subcategories: ["Beauty", "Toys", "Sports"] },
  { name: "Two Wheelers", image: "https://rukminim2.flixcart.com/flap/64/64/image/05d708653beff580.png?q=100", link: "#", dropdown: true, subcategories: ["Bikes", "Scooters", "Accessories"] },
];

export default function CategoryNav() {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  return (
    <div className="bg-white shadow-sm pt-2 relative">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between px-6 py-2">
        {categories.map((category, index) => (
          <div key={index} className="relative">
            <a
              href={category.link}
              className="flex flex-col items-center text-gray-800 hover:text-blue-600 text-sm font-medium transition-all cursor-pointer"
              onClick={(e) => {
                if (category.dropdown) {
                  e.preventDefault();
                  toggleDropdown(index);
                }
              }}
            >
              <img src={category.image} alt={category.name} className="w-12 h-12 object-contain mb-1" />
              <span className="flex items-center">
                {category.name} {category.dropdown && <span className="ml-1">▼</span>}
              </span>
            </a>

            {/* Dropdown Menu */}
            {category.dropdown && openDropdown === index && (
              <div className="absolute top-full left-0 bg-white shadow-lg rounded-md mt-1 w-40 z-10">
                {category.subcategories.map((sub, subIndex) => (
                  <a
                    key={subIndex}
                    href="#"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-100"
                  >
                    {sub}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
