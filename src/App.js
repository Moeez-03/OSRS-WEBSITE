import React, { useState, useEffect } from 'react';
import './styles/style.css';
import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';

import Navbar from './components/Navbar';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import MainPage from './components/MainPage';
import OSRSPage from './components/gamePages/OSRSPage';
import GrandTheft from './components/gamePages/grandTheft';

// Import individual components for home page (when user is not logged in)
import Hero from './components/Hero';
import BoostingServices from './components/BoostingServices';
import TradingSection from './components/TradingSection';
import GuaranteeSection from "./components/GuaranteeSection";
import Footer from './components/footer';
import Testimonials from './components/Testimonials';
import FeedbackImg from './components/FeedbackImg';

// Protected Route Component
function ProtectedRoute({ children, user }) {
  return user ? children : <Navigate to="/login" replace />;
}

function AppContent() {
  const location = useLocation();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Check authentication state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // Show loading screen while checking authentication
  if (loading) {
    return (
      <div className="loading-screen">
        <div className="loading-spinner"></div>
        <p>Loading...</p>
      </div>
    );
  }

  const isAuthPage = location.pathname === '/login' || location.pathname === '/signup';
  const isProtectedPage = location.pathname.startsWith('/main') || 
                         location.pathname === '/osrs' || 
                         location.pathname === '/grandTheft';

  return (
    <>
      {/* Show Navbar only on home page when user is not logged in */}
      {!isAuthPage && !isProtectedPage && <Navbar />}
      
      <Routes>
        {/* Home route - shows different content based on authentication */}
        <Route path="/" element={
          user ? (
            <Navigate to="/main" replace />
          ) : (
            <>
              <Hero />
              <BoostingServices />
              <Testimonials />
              <FeedbackImg />
              <TradingSection />
              <GuaranteeSection />
              <Footer />
            </>
          )
        } />
        
        {/* Authentication routes - redirect to main if already logged in */}
        <Route path="/login" element={
          user ? <Navigate to="/main" replace /> : <LoginPage />
        } />
        <Route path="/signup" element={
          user ? <Navigate to="/main" replace /> : <SignupPage />
        } />
        
        {/* Protected routes - only accessible when logged in */}
        <Route path="/main" element={
          <ProtectedRoute user={user}>
            <MainPage user={user} />
          </ProtectedRoute>
        } />
        
        <Route path="/osrs" element={
          <ProtectedRoute user={user}>
            <OSRSPage user={user} />
          </ProtectedRoute>
        } />
        
        <Route path="/grandTheft" element={
          <ProtectedRoute user={user}>
            <GrandTheft user={user} />
          </ProtectedRoute>
        } />
        
        {/* Catch all route - redirect to appropriate page */}
        <Route path="*" element={
          user ? <Navigate to="/main" replace /> : <Navigate to="/" replace />
        } />
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