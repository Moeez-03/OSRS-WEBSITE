import React from 'react';
import { useNavigate } from 'react-router-dom';
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
    const navigate = useNavigate();

    const handleFortniteClick = () => {
        navigate('/osrs');
    };

    return (
        <>
            <section className="hero-section" style={{ backgroundImage: `url(${fortniteBanner})`, height: "15rem" }}>
                <div className="hero-content">
                    <h1>Old School Rune scape</h1>
                    <button className="yellow-btn" onClick={handleFortniteClick}>
                        Buy OSRS Gold / Accounts
                    </button>
                </div>
            </section>

            <section className="full-width-cards">
                <div className="card-section-fullwidth">
                    <div className="info-card-fullwidth">
                        <h3>Popular Accounts</h3>
                        <div className="accounts-grid">
                            <div className="account-item">
                                <img src={codIcon} alt="COD" />
                                <span>Old School RuneScape</span>
                            </div>
                            <div className="account-item">
                                <img src={fortniteIcon} alt="Fortnite" />
                                <span>Fortnite</span>
                            </div>
                            <div className="account-item">
                                <img src={valorantIcon} alt="Valorant" />
                                <span>Valorant</span>
                            </div>
                            <div className="account-item">
                                <img src={r6Icon} alt="R6" />
                                <span>Rainbow Six Siege X</span>
                            </div>
                            <div className="account-item">
                                <img src={robloxIcon} alt="Roblox" />
                                <span>Roblox</span>
                            </div>
                            <div className="account-item">
                                <img src={gardenIcon} alt="Garden" />
                                <span>Grow a Garden</span>
                            </div>
                            <div className="account-item">
                                <img src={lolIcon} alt="LoL" />
                                <span>League of Legends</span>
                            </div>
                            <div className="account-item">
                                <img src={cocIcon} alt="CoC" />
                                <span>Clash Royale</span>
                            </div>
                        </div>
                    </div>
                    <div className="info-card-fullwidth">
                        <h3>Popular Currencies</h3>
                        <div className="currencies-grid">
                            <div className="currency-item">
                                <img src={codIcon} alt="RS Gold" />
                                <span>Old School RuneScape Gold</span>
                            </div>
                            <div className="currency-item">
                                <img src={robuxIcon} alt="Robux" />
                                <span>Roblox Robux</span>
                            </div>
                            <div className="currency-item">
                                <img src={fcCoinsIcon} alt="FC Coins" />
                                <span>Path of Exile Currency</span>
                            </div>
                            <div className="currency-item">
                                <img src={wowGoldIcon} alt="WoW Gold" />
                                <span>WoW Classic Era Gold</span>
                            </div>
                            <div className="currency-item">
                                <img src={fcCoinsIcon} alt="FC Coins" />
                                <span>EA Sports FC Coins</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <style jsx>{`
/* Full width cards section */
.full-width-cards {
  width: 100%;
  padding: 0;
  margin: 0;
  background-color: #000000;
  display: flex;
  justify-content: center;
}

.card-section-fullwidth {
  display: flex;
  max-width: 1200px;
  width: 100%;
  padding: 2rem;
  margin: 0;
  gap: 2rem;
  align-items: stretch;
}

.info-card-fullwidth {
  flex: 1;
  background-color: #1a1a2e;
  padding: 1.5rem;
  color: white;
  border-radius: 12px;
  max-width: 500px;
  display: flex;
  flex-direction: column;
}

.info-card-fullwidth h3 {
  color: white;
  margin-bottom: 1rem;
  font-size: 1.2rem;
  font-weight: bold;
  text-align: left;
}

.accounts-grid,
.currencies-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.3rem;
  flex: 1;
}

.account-item,
.currency-item {
  display: flex;
  align-items: center;
  padding: 0.4rem;
  border-radius: 6px;
  transition: background-color 0.3s ease;
  cursor: pointer;
  height: 35px;
}

.account-item:hover,
.currency-item:hover {
  background-color: #2a2a4a;
}

.account-item img,
.currency-item img {
  width: 20px;
  height: 20px;
  margin-right: 0.6rem;
  border-radius: 4px;
}

.account-item span,
.currency-item span {
  font-size: 0.85rem;
  color: white;
  font-weight: 500;
}

/* Responsive design */
@media (max-width: 768px) {
  .card-section-fullwidth {
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
  }
  
  .info-card-fullwidth {
    max-width: none;
  }
  
  .accounts-grid,
  .currencies-grid {
    grid-template-columns: 1fr;
  }
}
  .hero-section {
    text-align: center;
    margin-bottom: 0px;
}

      `}</style>
        </>
    );
};

export default Hero;