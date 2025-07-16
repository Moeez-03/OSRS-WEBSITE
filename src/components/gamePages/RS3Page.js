// RS3Page.js
import React from 'react';
import Footer from '../footer';
import '../../styles/GamePage.css';
import RS3Img from '../../assets/rs3.webp'

const RS3Page = () => {
  return (
    <div className="game-page rs3-page">
      <div className="game-content">
        <div className="coming-soon-container">
          <div className="game-logo">
            <img src={RS3Img} alt="RuneScape 3" className="game-icon" />
          </div>
          <h1 className="coming-soon-title">RuneScape 3</h1>
          <p className="coming-soon-subtitle">Gold & Accounts</p>
          <div className="coming-soon-message">
            <h2>Coming Soon!</h2>
            <p>The best RS3 gold and account services are on their way to Gielinor!</p>
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

export default RS3Page;
