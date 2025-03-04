import React from "react";
import PromotionalCards from "./PromotionalCards";
import HeroSection from "./HeroSection";
import HomeDeals from "./HomeDeals";
import CategoryNav from "./CategoryNav";
import ProductList from "./ProductList";

const HomePage = () => {
  return (
    
    <div className="bg-[#f1f3f6] min-h-screen pt-16">


    {/* CategoryNav */}
    <CategoryNav/>



      {/* Hero Section (Main Banner) */}
      <HeroSection />


      {/* Promotional Cards Section */}
      <PromotionalCards />

      <HomeDeals/>

      <ProductList />

      {/* <FloatingCart /> */}
    </div>
  );
};

export default HomePage;
