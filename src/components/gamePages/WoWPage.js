import React from 'react';
import Footer from '../footer';
import '../../styles/GamePage.css';
import WoWImg from '../../assets/wow.webp'

const WoWPage = () => {
  return (
    <div className="game-page wow-page">
      <div className="game-content">
        <div className="coming-soon-container">
          <div className="game-logo">
            <img src={WoWImg} alt="World of Warcraft" className="game-icon" />
          </div>
          <h1 className="coming-soon-title">World of Warcraft</h1>
          <p className="coming-soon-subtitle">Gold, Accounts & Boost Services</p>
          <div className="coming-soon-message">
            <h2>Coming Soon!</h2>
            <p>Premium WoW gold, accounts, and professional boosting services coming your way!</p>
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

export default WoWPage;