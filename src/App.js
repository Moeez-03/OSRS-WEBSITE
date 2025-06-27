import React from 'react';
import './styles/style.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BoostingServices from './components/BoostingServices';
import TradingSection from './components/TradingSection';
import GuaranteeSection from "./components/GuaranteeSection";
import Footer from './components/footer';
import Testimonials from './components/Testimonials';
import FeedbackImg from './components/FeedbackImg';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <BoostingServices />
      <Testimonials />
      <FeedbackImg />
      <TradingSection />
      <GuaranteeSection />
      <Footer />
    </>
  );
}

export default App;