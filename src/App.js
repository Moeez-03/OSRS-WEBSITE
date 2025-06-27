import React from 'react';
import './styles/style.css';

import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BoostingServices from './components/BoostingServices';
import TradingSection from './components/TradingSection';
import GuaranteeSection from "./components/GuaranteeSection";
import Footer from './components/footer';
import Testimonials from './components/Testimonials';
import FeedbackImg from './components/FeedbackImg';
import LoginPage from './components/LoginPage';

function AppContent() {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';

  return (
    <>
      {!isLoginPage && <Navbar />}
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <BoostingServices />
            <Testimonials />
            <FeedbackImg />
            <TradingSection />
            <GuaranteeSection />
            <Footer />
          </>
        } />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
