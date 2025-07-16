// FortnitePage.js
import React from 'react';
import Footer from '../footer';
import '../../styles/GamePage.css';
import FortniteImg from '../../assets/fortnite.webp'

const FortnitePage = () => {
  return (
    <div className="game-page fortnite-page">
      <div className="game-content">
        <div className="coming-soon-container">
          <div className="game-logo">
            <img src={FortniteImg} alt="Fortnite" className="game-icon" />
          </div>
          <h1 className="coming-soon-title">Fortnite</h1>
          <p className="coming-soon-subtitle">V-Bucks & Battle Pass</p>
          <div className="coming-soon-message">
            <h2>Coming Soon!</h2>
            <p>Get ready to drop in with the best Fortnite V-Bucks deals and services!</p>
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

export default FortnitePage;