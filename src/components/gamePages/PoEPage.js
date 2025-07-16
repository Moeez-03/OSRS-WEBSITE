// PoEPage.js
import React from 'react';
import Footer from '../footer';
import '../../styles/GamePage.css';
import PoEImg from '../../assets/poe.webp'

const PoEPage = () => {
  return (
    <div className="game-page poe-page">
      <div className="game-content">
        <div className="coming-soon-container">
          <div className="game-logo">
            <img src={PoEImg} alt="Path of Exile" className="game-icon" />
          </div>
          <h1 className="coming-soon-title">Path of Exile</h1>
          <p className="coming-soon-subtitle">Currency & Boost Services</p>
          <div className="coming-soon-message">
            <h2>Coming Soon!</h2>
            <p>Master Wraeclast with our Path of Exile currency and boosting services!</p>
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

export default PoEPage;