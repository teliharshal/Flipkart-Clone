import React, { createContext, useState, useContext } from "react";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [filters, setFilters] = useState({ category: "", priceRange: "", brand: "", rating: "" });
  const [sortBy, setSortBy] = useState("");

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  return (
    <ProductContext.Provider value={{ cart, addToCart, filters, setFilters, sortBy, setSortBy }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = () => useContext(ProductContext);
