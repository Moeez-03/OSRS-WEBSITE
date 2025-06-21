import React from 'react';
import '../styles/style.css';
import tradingBlockImage from '../assets/trading-block.webp';

const TradingSection = () => {
  return (
    <section className="trading-section-horizontal">
      <div className="container">
        <div className="trading-text">
          <h1>Safe and Easy Trading</h1>
          <p>Trade without fear - Eldorado guarantees that all trades are legit and keeps you safe from scammers.</p>
          <p>It's quick and easy - find the best product for your favorite game, make a payment, receive your order, and get back to playing.</p>
          <button className="yellow-btn">Join us today to level up your gaming experience!</button>
        </div>
        
        <div className="trading-image-container">
          <img 
            src={tradingBlockImage} 
            alt="Trading options and order process" 
            className="trading-block-img"
          />
        </div>
      </div>
    </section>
  );
};

export default TradingSection;