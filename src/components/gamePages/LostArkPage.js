// LostArkPage.js
import React from 'react';
import Footer from '../footer';
import '../../styles/GamePage.css';
import LostArkImg from '../../assets/lost-ark.webp'

const LostArkPage = () => {
  return (
    <div className="game-page lost-ark-page">
      <div className="game-content">
        <div className="coming-soon-container">
          <div className="game-logo">
            <img src={LostArkImg} alt="Lost Ark" className="game-icon" />
          </div>
          <h1 className="coming-soon-title">Lost Ark</h1>
          <p className="coming-soon-subtitle">Gold & Accounts</p>
          <div className="coming-soon-message">
            <h2>Coming Soon!</h2>
            <p>Embark on your Lost Ark journey with our premium gold and account services!</p>
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

export default LostArkPage;