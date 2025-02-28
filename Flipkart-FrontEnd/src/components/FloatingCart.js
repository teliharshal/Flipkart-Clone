import { useState, useEffect } from "react";
import { ShoppingCartIcon } from "@heroicons/react/solid";

export default function FloatingCart() {
  const [itemCount, setItemCount] = useState(0);

  useEffect(() => {
    // Fetch cart data from localStorage on component mount
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    setItemCount(cartItems.length);
  }, []);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={() => alert(`Total items in cart: ${itemCount}`)}
        className="bg-blue-600 hover:bg-blue-700 text-white w-12 h-12 rounded-full shadow-lg transition-colors relative flex items-center justify-center"
      >
        <ShoppingCartIcon className="w-6 h-6" />
        {itemCount > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-xs text-white rounded-full w-5 h-5 flex items-center justify-center">
            {itemCount}
          </span>
        )}
      </button>
    </div>
  );
}
