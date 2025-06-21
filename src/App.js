import React from 'react';
import './styles/style.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BoostingServices from './components/BoostingServices';
import TradingSection from './components/TradingSection';
import GuaranteeSection from "./components/GuaranteeSection";
import Footer from './components/footer';


function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <BoostingServices />
      <TradingSection />
      <GuaranteeSection />
      <Footer />
    </>
  );
}

export default App;