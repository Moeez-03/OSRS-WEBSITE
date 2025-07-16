// EAFCPage.js
import React from 'react';
import Footer from '../footer';
import '../../styles/GamePage.css';
import EAFCImg from '../../assets/ea-fc.webp'

const EAFCPage = () => {
  return (
    <div className="game-page ea-fc-page">
      <div className="game-content">
        <div className="coming-soon-container">
          <div className="game-logo">
            <img src={EAFCImg} alt="EA Sports FC" className="game-icon" />
          </div>
          <h1 className="coming-soon-title">EA Sports FC</h1>
          <p className="coming-soon-subtitle">Coins & Top Up</p>
          <div className="coming-soon-message">
            <h2>Coming Soon!</h2>
            <p>Build your ultimate team with our EA FC coin services and top-up options!</p>
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

export default EAFCPage;