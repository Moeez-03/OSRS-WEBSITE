import React from 'react';
import Footer from '../footer';
import '../../styles/OSRSPage.css'; 
import grandImg from '../../assets/0.webp'

const grandTheft = () => {
  return (
    <div className="osrs-page">
      
      <div className="osrs-content">
        <div className="coming-soon-container">
          <div className="osrs-logo">
            <img 
              src={grandImg} 
              alt="Old School RuneScape" 
              className="osrs-game-icon"
            />
          </div>
          <h1 className="coming-soon-title">Grand Theft Auto 5</h1>
          <p className="coming-soon-subtitle">Gold & Services</p>
          <div className="coming-soon-message">
            <h2>Coming Soon!</h2>
            <p>We're working hard to bring you the best OSRS gold and services. Stay tuned for updates!</p>
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

export default grandTheft;