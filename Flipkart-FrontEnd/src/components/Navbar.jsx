import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom"; // ✅ Import Link
import { 
  Bars3Icon, XMarkIcon, ShoppingCartIcon, MagnifyingGlassIcon, ChevronDownIcon 
} from "@heroicons/react/24/outline";  // ✅ Correct Heroicons import
import { motion } from "framer-motion";
import { 
  UserIcon, GiftIcon, HeartIcon, HeadphonesIcon, MegaphoneIcon 
} from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const loginRef = useRef(null);
  const moreRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (loginRef.current && !loginRef.current.contains(event.target)) {
        setIsLoginOpen(false);
      }
      if (moreRef.current && !moreRef.current.contains(event.target)) {
        setIsMoreOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>

            {/* Logo Image */}
            <div className="ml-2">
              <Link to="/"> {/* ✅ Use Link instead of <a> */}
                <img
                  src="https://ups.itembase.com/wp-content/uploads/2021/02/279-200px600px-Color.png" 
                  alt="Flipkart Logo"
                  className="h-10 w-auto"
                />
              </Link>
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
                <MagnifyingGlassIcon className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Right section */}
          <div className="hidden lg:flex items-center space-x-6">
            {/* Login Dropdown */}
            <div className="relative" ref={loginRef}>
              <button 
                onClick={() => setIsLoginOpen(!isLoginOpen)}
                className="bg-white text-[#2874f0] px-4 py-1 rounded font-semibold hover:bg-gray-100 flex items-center"
              >
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
                    <Link to="/signup" className="text-[#2874f0] font-semibold">Sign Up</Link>
                  </div>
                  <Link to="/profile" className="flex items-center px-4 py-2 text-gray-800 hover:bg-gray-100">
                    <UserIcon className="h-4 w-4 mr-2" /> My Profile
                  </Link>
                  <Link to="/orders" className="flex items-center px-4 py-2 text-gray-800 hover:bg-gray-100">
                  <GiftIcon className="h-4 w-4 mr-2" /> Orders
                  </Link>
                  <Link to="/wishlist" className="flex items-center px-4 py-2 text-gray-800 hover:bg-gray-100">
                    <HeartIcon className="h-4 w-4 mr-2" /> Wishlist
                  </Link>
                </motion.div>
              )}
            </div>

            {/* Become a Seller */}
            <Link to="/seller" className="text-white font-semibold hover:text-gray-200 flex items-center">
              Become a Seller
            </Link>

            {/* More Dropdown */}
            <div className="relative" ref={moreRef}>
              <button 
                onClick={() => setIsMoreOpen(!isMoreOpen)}
                className="text-white font-semibold hover:text-gray-200 flex items-center"
              >
                More <ChevronDownIcon className="h-4 w-4 ml-1" />
              </button>
              {isMoreOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute left-0 mt-2 w-56 bg-white shadow-lg rounded-lg p-2"
                >
                  <Link to="/customer-care" className="flex items-center px-4 py-2 text-gray-800 hover:bg-gray-100">
                    <HeadphonesIcon className="h-4 w-4 mr-2" /> 24X7 Customer Care
                  </Link>
                  <Link to="/advertise" className="flex items-center px-4 py-2 text-gray-800 hover:bg-gray-100">
                    <MegaphoneIcon className="h-4 w-4 mr-2" /> Advertise
                  </Link>
                </motion.div>
              )}
            </div>

            <Link to="/cart" className="text-white font-semibold hover:text-gray-200 flex items-center">
              <ShoppingCartIcon className="h-5 w-5 mr-1" />
              Cart
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden pb-4">
            <div className="mt-4 space-y-4">
              <Link to="/profile" className="block text-white hover:text-gray-200">My Account</Link>
              <Link to="/orders" className="block text-white hover:text-gray-200">Orders</Link>
              <Link to="/cart" className="block text-white hover:text-gray-200">Cart</Link>
              <Link to="/seller" className="block text-white hover:text-gray-200">Become a Seller</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
