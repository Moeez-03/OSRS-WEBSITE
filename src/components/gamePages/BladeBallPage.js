// BladeBallPage.js
import React from 'react';
import Footer from '../footer';
import '../../styles/GamePage.css';
import BladeBallImg from '../../assets/blade-ball.webp'

const BladeBallPage = () => {
  return (
    <div className="game-page blade-ball-page">
      <div className="game-content">
        <div className="coming-soon-container">
          <div className="game-logo">
            <img src={BladeBallImg} alt="Blade Ball" className="game-icon" />
          </div>
          <h1 className="coming-soon-title">Blade Ball</h1>
          <p className="coming-soon-subtitle">Tokens & Boosts</p>
          <div className="coming-soon-message">
            <h2>Coming Soon!</h2>
            <p>Get ready for the ultimate Blade Ball token deals and boosting services!</p>
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

export default BladeBallPage;