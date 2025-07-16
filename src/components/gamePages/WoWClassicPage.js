// WoWClassicPage.js
import React from 'react';
import Footer from '../footer';
import '../../styles/GamePage.css';
import WoWClassicImg from '../../assets/wow-classic.webp'

const WoWClassicPage = () => {
  return (
    <div className="game-page wow-classic-page">
      <div className="game-content">
        <div className="coming-soon-container">
          <div className="game-logo">
            <img src={WoWClassicImg} alt="WoW Classic Era" className="game-icon" />
          </div>
          <h1 className="coming-soon-title">WoW Classic Era</h1>
          <p className="coming-soon-subtitle">Gold & Services</p>
          <div className="coming-soon-message">
            <h2>Coming Soon!</h2>
            <p>We're preparing the finest WoW Classic Era gold and boosting services. Adventure awaits!</p>
          </div>
          <div className="notify-section">
            <button className="notify-btn">Notify Me When Available</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default WoWClassicPage;