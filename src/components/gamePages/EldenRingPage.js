// EldenRingPage.js
import React from 'react';
import Footer from '../footer';
import '../../styles/GamePage.css';
import EldenRingImg from '../../assets/elden-ring.webp'

const EldenRingPage = () => {
  return (
    <div className="game-page elden-ring-page">
      <div className="game-content">
        <div className="coming-soon-container">
          <div className="game-logo">
            <img src={EldenRingImg} alt="Elden Ring" className="game-icon" />
          </div>
          <h1 className="coming-soon-title">Elden Ring</h1>
          <p className="coming-soon-subtitle">Runes & Items</p>
          <div className="coming-soon-message">
            <h2>Coming Soon!</h2>
            <p>Rise, Tarnished! Premium Elden Ring runes and items await your command!</p>
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

export default EldenRingPage;
