// Diablo4Page.js
import React from 'react';
import Footer from '../footer';
import '../../styles/GamePage.css';
import Diablo4Img from '../../assets/diablo-4.webp'

const Diablo4Page = () => {
  return (
    <div className="game-page diablo-4-page">
      <div className="game-content">
        <div className="coming-soon-container">
          <div className="game-logo">
            <img src={Diablo4Img} alt="Diablo 4" className="game-icon" />
          </div>
          <h1 className="coming-soon-title">Diablo 4</h1>
          <p className="coming-soon-subtitle">Gold & Items</p>
          <div className="coming-soon-message">
            <h2>Coming Soon!</h2>
            <p>Conquer Sanctuary with our premium Diablo 4 gold and legendary items!</p>
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

export default Diablo4Page;
