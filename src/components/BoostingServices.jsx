// BoostingServices.js
import React from 'react';
import '../styles/style.css';
import valorantIcon from '../assets/1.webp';
import runescapeIcon from '../assets/70.webp';
import rainbowSixIcon from '../assets/25.webp';
import rocketLeagueIcon from '../assets/25.webp';
import gardenIcon from '../assets/35.webp';
import robloxIcon from '../assets/16.webp';

const BoostingServices = () => {
  return (
    <div className="boosting-section">
      
      {/* Left Column: Boosting Services */}
      <div className="left-panel">
        <h2>Popular Boosting Services</h2>
        <div className="services-grid">
          <div className="service-item">
            <img src={valorantIcon} alt="Valorant" className="service-icon" />
            <span>Valorant</span>
          </div>
          <div className="service-item">
            <img src={runescapeIcon} alt="RuneScape" className="service-icon" />
            <span>Old School RuneScape</span>
          </div>
          <div className="service-item">
            <img src={rainbowSixIcon} alt="Rainbow Six" className="service-icon" />
            <span>Rainbow Six Siege</span>
          </div>
          <div className="service-item">
            <img src={rocketLeagueIcon} alt="Rocket League" className="service-icon" />
            <span>Rocket League</span>
          </div>
        </div>
      </div>

      {/* Right Column: Popular Items */}
      <div className="right-panel">
        <h2>Popular Items</h2>
        <div className="services-grid">
          <div className="service-item">
            <img src={gardenIcon} alt="Grow a Garden" className="service-icon" />
            <span>Grow a Garden</span>
          </div>
          <div className="service-item">
            <img src={robloxIcon} alt="Roblox" className="service-icon" />
            <span>Roblox</span>
          </div>
        </div>
      </div>

    </div>
  );
};

export default BoostingServices;
