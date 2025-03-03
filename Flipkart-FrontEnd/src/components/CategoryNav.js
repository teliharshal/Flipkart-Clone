import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // Icons for mobile menu
import ProductListing from "./ProductListing";

const categories = [
  { name: "Grocery", image: "https://rukminim2.flixcart.com/flap/64/64/image/0d75b34f7d8fbcb3.png?q=100" },
  { name: "Mobiles", image: "https://rukminim2.flixcart.com/flap/64/64/image/22fddf3c7da4c4f4.png?q=100" },
  { name: "Fashion", image: "https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=600", dropdown: true, subcategories: ["Men's Clothing", "Women's Clothing", "Kids' Fashion"] },
  { name: "Electronics", image: "https://rukminim2.flixcart.com/flap/64/64/image/69c6589653afdb9a.png?q=100", dropdown: true, subcategories: ["Mobiles", "Laptops", "Cameras"] },
  { name: "Home & Furniture", image: "https://rukminim2.flixcart.com/flap/64/64/image/ab7e2b022a4587dd.jpg?q=100", dropdown: true, subcategories: ["Furniture", "Home Decor", "Lighting"] },
  { name: "Appliances", image: "https://rukminim2.flixcart.com/flap/64/64/image/22fddf3c7da4c4f4.png?q=100" },
  { name: "Flight Bookings", image: "https://rukminim2.flixcart.com/flap/64/64/image/71050627a56b4693.png?q=100" },
  { name: "Beauty, Toys & More", image: "https://rukminim2.flixcart.com/flap/64/64/image/dff3f7adcf3a90c6.png?q=100", dropdown: true, subcategories: ["Beauty", "Toys", "Sports"] },
  { name: "Two Wheelers", image: "https://rukminim2.flixcart.com/flap/64/64/image/05d708653beff580.png?q=100", dropdown: true, subcategories: ["Bikes", "Scooters", "Accessories"] },
];

export default function CategoryNav() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Toggle dropdown menu for categories
  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  // Handle category click (Main categories)
  const handleCategoryClick = (category) => {
    setSelectedCategory(category); // Update selected category
    setOpenDropdown(null); // Close dropdowns
  };

  // Handle subcategory click
  const handleSubcategoryClick = (subcategory) => {
    setSelectedCategory(subcategory); // Set selected subcategory
    setOpenDropdown(null); // Close dropdowns
  };

  return (
    <div className="bg-white shadow-sm pt-2 relative mt-12">
      {/* Mobile Menu Button */}
      <div className="px-6 py-2 flex items-center justify-between md:hidden">
        <h2 className="text-lg font-semibold">Categories</h2>
        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-gray-800">
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex max-w-[1200px] mx-auto items-center justify-between px-6 py-2">
        {categories.map((category, index) => (
          <div key={index} className="relative">
            <button
              className={`flex flex-col items-center text-gray-800 hover:text-blue-600 text-sm font-medium transition-all cursor-pointer ${
                selectedCategory === category.name ? "text-blue-600 font-bold" : ""
              }`}
              onClick={() => handleCategoryClick(category.name)}
            >
              <img src={category.image} alt={category.name} className="w-12 h-12 object-contain mb-1" />
              <span className="flex items-center">
                {category.name} {category.dropdown && <span className="ml-1">▼</span>}
              </span>
            </button>

            {/* Dropdown Menu */}
            {category.dropdown && openDropdown === index && (
              <div className="absolute top-full left-0 bg-white shadow-lg rounded-md mt-1 w-40 z-10">
                {category.subcategories.map((sub, subIndex) => (
                  <button
                    key={subIndex}
                    onClick={() => handleSubcategoryClick(sub)}
                    className="block w-full px-4 py-2 text-gray-700 hover:bg-blue-100"
                  >
                    {sub}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-md z-20 p-4">
          {categories.map((category, index) => (
            <div key={index} className="mb-3">
              <button
                className={`flex items-center text-gray-800 hover:text-blue-600 text-sm font-medium cursor-pointer ${
                  selectedCategory === category.name ? "text-blue-600 font-bold" : ""
                }`}
                onClick={() => {
                  handleCategoryClick(category.name);
                  if (category.dropdown) toggleDropdown(index);
                }}
              >
                <img src={category.image} alt={category.name} className="w-10 h-10 object-contain mr-3" />
                <span className="flex items-center">
                  {category.name} {category.dropdown && <span className="ml-1">▼</span>}
                </span>
              </button>

              
      {/* Show Product Listing when a category is selected */}

              {/* Dropdown Menu in Mobile */}
              {category.dropdown && openDropdown === index && (
                <div className="ml-10 mt-2 space-y-2">
                  {category.subcategories.map((sub, subIndex) => (
                    <button
                      key={subIndex}
                      onClick={() => handleSubcategoryClick(sub)}
                      className="block text-gray-700 text-sm hover:bg-blue-100 px-2 py-1 rounded-md w-full text-left"
                    >
                      {sub}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
              

        </div>
        
      )}
                 {selectedCategory && <ProductListing selectedCategory={selectedCategory} />}

    </div>
  );
}
