// MinecraftPage.js
import React from 'react';
import Footer from '../footer';
import '../../styles/GamePage.css';
import MinecraftImg from '../../assets/minecraft.webp'

const MinecraftPage = () => {
  return (
    <div className="game-page minecraft-page">
      <div className="game-content">
        <div className="coming-soon-container">
          <div className="game-logo">
            <img src={MinecraftImg} alt="Minecraft" className="game-icon" />
          </div>
          <h1 className="coming-soon-title">Minecraft</h1>
          <p className="coming-soon-subtitle">Minecoins & Gift Cards</p>
          <div className="coming-soon-message">
            <h2>Coming Soon!</h2>
            <p>Craft your adventure with our Minecraft coin services and gift cards!</p>
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

export default MinecraftPage;