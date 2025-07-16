// RobloxPage.js
import React from 'react';
import Footer from '../footer';
import '../../styles/GamePage.css';
import RobloxImg from '../../assets/roblox.webp'

const RobloxPage = () => {
  return (
    <div className="game-page roblox-page">
      <div className="game-content">
        <div className="coming-soon-container">
          <div className="game-logo">
            <img src={RobloxImg} alt="Roblox" className="game-icon" />
          </div>
          <h1 className="coming-soon-title">Roblox</h1>
          <p className="coming-soon-subtitle">Robux & Gift Cards</p>
          <div className="coming-soon-message">
            <h2>Coming Soon!</h2>
            <p>We're working hard to bring you the best Roblox Robux and gift cards. Stay tuned for updates!</p>
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

export default RobloxPage;