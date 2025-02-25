import { useState } from 'react';
import { MenuIcon, XIcon, ShoppingCartIcon, SearchIcon } from '@heroicons/react/outline';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-[#2874f0] fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left section */}
          <div className="flex items-center">
            {/* Mobile menu button */}
            <button
              className="text-white hover:text-gray-200 lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <XIcon className="h-6 w-6" />
              ) : (
                <MenuIcon className="h-6 w-6" />
              )}
            </button>

            {/* Logo */}
            <div className="flex-shrink-0 flex items-center ml-2">
              <div className="bg-yellow-400 p-1 rounded">
                <span className="text-blue-900 font-bold text-xl">Flipkart</span>
              </div>
              <span className="text-white text-xs ml-1 italic">Explore Plus</span>
            </div>
          </div>

          {/* Search Bar - Desktop */}
          <div className="hidden lg:flex flex-1 max-w-2xl mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search for products, brands and more"
                className="w-full px-4 py-2 rounded-sm focus:outline-none"
              />
              <button className="absolute right-0 top-0 h-full px-4 text-[#2874f0]">
                <SearchIcon className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Right section */}
          <div className="hidden lg:flex items-center space-x-6">
            <button className="text-white font-semibold hover:text-gray-200">
              Login
            </button>
            <button className="text-white font-semibold hover:text-gray-200">
              Become a Seller
            </button>
            <button className="text-white font-semibold hover:text-gray-200 flex items-center">
              <ShoppingCartIcon className="h-5 w-5 mr-1" />
              Cart
              <span className="ml-1 bg-yellow-400 text-blue-900 px-1.5 rounded-full text-sm">0</span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden pb-4">
            <div className="mt-2">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for products, brands and more"
                  className="w-full px-4 py-2 rounded-sm focus:outline-none"
                />
                <button className="absolute right-0 top-0 h-full px-4 text-[#2874f0]">
                  <SearchIcon className="h-5 w-5" />
                </button>
              </div>
            </div>

            <div className="mt-4 space-y-4">
              <a href="#" className="block text-white hover:text-gray-200">
                My Account
              </a>
              <a href="#" className="block text-white hover:text-gray-200">
                Orders
              </a>
              <a href="#" className="block text-white hover:text-gray-200">
                Cart
              </a>
              <a href="#" className="block text-white hover:text-gray-200">
                Become a Seller
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;