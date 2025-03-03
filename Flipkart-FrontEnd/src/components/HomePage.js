import React from "react";
import PromotionalCards from "./PromotionalCards";
import HeroSection from "./HeroSection";
import HomeDeals from "./HomeDeals";

const HomePage = () => {
  return (
    <div className="bg-[#f1f3f6] min-h-screen pt-16">


    {/* CategoryNav */}

      {/* Hero Section (Main Banner) */}
      <HeroSection />


      {/* Promotional Cards Section */}
      <PromotionalCards />

      <HomeDeals/>

    

      {/* <FloatingCart /> */}
    </div>
  );
};

export default HomePage;
