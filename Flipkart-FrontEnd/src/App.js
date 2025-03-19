import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import ProductList from "./components/ProductList";
import ProductDetails from "./components/ProductDetails";
import OrderHistory from "./components/OrderHistory";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <Router>
      <div className="min-h-screen bg-[#f1f3f6] flex flex-col">
        <Navbar />

        <main className="flex-grow">

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/" element={<ProductList />} />
           <Route path="/product/:id" element={<ProductDetails />} />
           <Route path="/orders" element={<OrderHistory />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
