import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow pt-16">
        <div className="max-w-7xl mx-auto px-4 py-10 text-center">
          <h1 className="text-3xl font-bold text-gray-900">
            Welcome to Flipkart Clone 🛒
          </h1>
          <p className="text-gray-600 mt-4">
            Browse our amazing products at the best prices!
          </p>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
