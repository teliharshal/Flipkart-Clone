import React,{useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import CategoryNav from "./components/CategoryNav";
import ProductListing from './components/ProductListing';
// import FloatingCart from "./components/FloatingCart";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  return (
    <Router> {/* ✅ Wrap everything inside BrowserRouter */}
      <div className="min-h-screen bg-[#f1f3f6] flex flex-col">
        
        {/* ✅ Navbar should be outside Routes */}
        <Navbar />

        <CategoryNav/>

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/" element={<ProductListing selectedCategory={selectedCategory} />} />
          </Routes>
        </main>
        
        {/* <FloatingCart />  */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
