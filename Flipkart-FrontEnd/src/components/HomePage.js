import React from "react";
import PromotionalCards from "./PromotionalCards";
import HeroSection from "./HeroSection";
import FloatingCart from "./FloatingCart";
import CategoryNav from "./CategoryNav";

const HomePage = () => {
  return (
    <div className="bg-[#f1f3f6] min-h-screen pt-16">


    {/* CategoryNav */}
     <CategoryNav />

      {/* Hero Section (Main Banner) */}
      <HeroSection />

      {/* Promotional Cards Section */}
      <PromotionalCards />

      <FloatingCart />
    </div>
  );
};

export default HomePage;
