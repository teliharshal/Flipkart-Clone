import { useState } from "react";
import { 
  MenuIcon, XIcon, ShoppingCartIcon, SearchIcon, ChevronDownIcon 
} from "@heroicons/react/outline";
import { motion } from "framer-motion";
import { 
  UserIcon, GiftIcon, HeartIcon, TicketIcon, BellIcon, HeadphonesIcon, DownloadIcon, BadgeCheckIcon, MegaphoneIcon
} from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  return (
    <nav className="bg-[#2874f0] fixed w-full z-50 shadow-md">
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
            <div className="flex items-center ml-2">
              <span className="text-white font-bold text-2xl">Flipkart</span>
              <span className="text-white text-xs ml-2 italic flex items-center">
                Explore <span className="text-yellow-300 font-semibold ml-1">Plus</span>
              </span>
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
            {/* Login Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsLoginOpen(true)}
              onMouseLeave={() => setIsLoginOpen(false)}
            >
              <button className="bg-white text-[#2874f0] px-4 py-1 rounded font-semibold hover:bg-gray-100 flex items-center">
                Login
              </button>
              {isLoginOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute left-0 mt-2 w-56 bg-white shadow-lg rounded-lg p-2"
                >
                  <div className="flex justify-between items-center px-4 py-2 border-b">
                    <span className="text-gray-600">New Customer?</span>
                    <a href="#" className="text-[#2874f0] font-semibold">Sign Up</a>
                  </div>
                  <a href="#" className="flex items-center px-4 py-2 text-gray-800 hover:bg-gray-100">
                    <UserIcon className="h-4 w-4 mr-2" /> My Profile
                  </a>
                  <a href="#" className="flex items-center px-4 py-2 text-gray-800 hover:bg-gray-100">
                    <BadgeCheckIcon className="h-4 w-4 mr-2" /> Flipkart Plus Zone
                  </a>
                  <a href="#" className="flex items-center px-4 py-2 text-gray-800 hover:bg-gray-100">
                    <GiftIcon className="h-4 w-4 mr-2" /> Orders
                  </a>
                  <a href="#" className="flex items-center px-4 py-2 text-gray-800 hover:bg-gray-100">
                    <HeartIcon className="h-4 w-4 mr-2" /> Wishlist
                  </a>
                  <a href="#" className="flex items-center px-4 py-2 text-gray-800 hover:bg-gray-100">
                    <TicketIcon className="h-4 w-4 mr-2" /> Rewards
                  </a>
                  <a href="#" className="flex items-center px-4 py-2 text-gray-800 hover:bg-gray-100">
                    <GiftIcon className="h-4 w-4 mr-2" /> Gift Cards
                  </a>
                </motion.div>
              )}
            </div>

            {/* Become a Seller */}
            <a href="#" className="text-white font-semibold hover:text-gray-200 flex items-center">
              Become a Seller
            </a>

            {/* More Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsMoreOpen(true)}
              onMouseLeave={() => setIsMoreOpen(false)}
            >
              <button className="text-white font-semibold hover:text-gray-200 flex items-center">
                More <ChevronDownIcon className="h-4 w-4 ml-1" />
              </button>
              {isMoreOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute left-0 mt-2 w-56 bg-white shadow-lg rounded-lg p-2"
                >
                  <a href="#" className="flex items-center px-4 py-2 text-gray-800 hover:bg-gray-100">
                    <BellIcon className="h-4 w-4 mr-2" /> Notifications
                  </a>
                  <a href="#" className="flex items-center px-4 py-2 text-gray-800 hover:bg-gray-100">
                    <HeadphonesIcon className="h-4 w-4 mr-2" /> Customer Support
                  </a>
                  <a href="#" className="flex items-center px-4 py-2 text-gray-800 hover:bg-gray-100">
                    <MegaphoneIcon className="h-4 w-4 mr-2" /> Advertise
                  </a>
                  <a href="#" className="flex items-center px-4 py-2 text-gray-800 hover:bg-gray-100">
                    <DownloadIcon className="h-4 w-4 mr-2" /> Download App
                  </a>
                </motion.div>
              )}
            </div>

            <button className="text-white font-semibold hover:text-gray-200 flex items-center">
              <ShoppingCartIcon className="h-5 w-5 mr-1" />
              Cart
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
              <a href="#" className="block text-white hover:text-gray-200">My Account</a>
              <a href="#" className="block text-white hover:text-gray-200">Orders</a>
              <a href="#" className="block text-white hover:text-gray-200">Cart</a>
              <a href="#" className="block text-white hover:text-gray-200">Become a Seller</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
