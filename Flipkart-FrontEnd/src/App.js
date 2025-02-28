import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './components/HomePage';

function App() {
  return (
    <div className="min-h-screen bg-[#f1f3f6] flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HomePage />
      </main>
      <Footer />
    </div>
  );
}

export default App;