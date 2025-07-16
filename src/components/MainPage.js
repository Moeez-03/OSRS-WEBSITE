import React from 'react';
import '../styles/style.css';
import Navbar from './navbar1';
import Hero from './Hero1';
import TradingSection from './TradingSection';
import GuaranteeSection from './GuaranteeSection';
import Footer from './footer';



const MainPage = ({ user }) => {
 
  return (
    <div className="main-page">
      <Navbar />
      <Hero />
      <TradingSection />
      <GuaranteeSection />
      <Footer />
    </div>
  );
};

export default MainPage;