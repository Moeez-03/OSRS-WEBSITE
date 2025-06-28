import React from 'react';
import '../styles/style.css';
import fortniteBanner from '../assets/fortnite-banner.png';

// Import game icons
import gtaIcon from '../assets/0.webp';
import valorantIcon from '../assets/1.webp';
import codIcon from '../assets/10.webp';
import robloxIcon from '../assets/16.webp';
import lolIcon from '../assets/17.webp';
import fortniteIcon from '../assets/18.webp';
import r6Icon from '../assets/25.webp';
import rsIcon from '../assets/32.webp';
import gardenIcon from '../assets/35.webp';
import cocIcon from '../assets/48.webp';
import rsGoldIcon from '../assets/70.webp';
import robuxIcon from '../assets/92.webp';
import fcCoinsIcon from '../assets/142.webp';
import wowGoldIcon from '../assets/243.webp';

const Hero = () => {
  return (
    <section className="hero-section" style={{ backgroundImage: `url(${fortniteBanner})`, height: "15rem" }}>
      <div className="hero-content">
        <h1>Jump Into OG Fortnite Map With Fresh Skins</h1>
        <button className="yellow-btn">Buy Fortnite Accounts</button>
      </div>

      <div className="card-section">
        <div className="info-card">
          <h3>Popular Accounts</h3>
          <ul>
            <li><img src={gtaIcon} alt="GTA 5" /> Grand Theft Auto 5</li>
            <li><img src={valorantIcon} alt="Valorant" /> Valorant</li>
            <li><img src={codIcon} alt="COD" /> Call of Duty</li>
            <li><img src={robloxIcon} alt="Roblox" /> Roblox</li>
            <li><img src={lolIcon} alt="LoL" /> League of Legends</li>
            <li><img src={fortniteIcon} alt="Fortnite" /> Fortnite</li>
            <li><img src={r6Icon} alt="R6" /> Rainbow Six Siege</li>
            <li><img src={rsIcon} alt="RuneScape" /> Old School RuneScape</li>
            <li><img src={gardenIcon} alt="Garden" /> Grow a Garden</li>
            <li><img src={cocIcon} alt="CoC" /> Clash of Clans</li>
          </ul>
        </div>
        <div className="info-card">
          <h3>Popular Currencies</h3>
          <ul>
            <li><img src={rsGoldIcon} alt="RS Gold" /> Old School RuneScape Gold</li>
            <li><img src={robuxIcon} alt="Robux" /> Roblox Robux</li>
            <li><img src={fcCoinsIcon} alt="FC Coins" /> EA Sports FC Coins</li>
            <li><img src={wowGoldIcon} alt="WoW Gold" /> WoW Classic Era Gold</li>
            <li><img src={wowGoldIcon} alt="WoW Gold" /> World of Warcraft Gold</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Hero;