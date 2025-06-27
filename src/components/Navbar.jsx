import React, { useState } from 'react';
import '../styles/style.css';
import logo from '../assets/logo.png';

// Game icons
import osrsIcon from '../assets/0.webp';
import poeIcon from '../assets/1.webp';
import fcIcon from '../assets/142.webp';
import wowIcon from '../assets/243.webp';
import rs3Icon from '../assets/70.webp';
import lostArkIcon from '../assets/17.webp';

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  // Sample arrays for each nav item
  const dropdownData = {
    Currency: {
      popularGames: [
        { name: "Old School RuneScape – Gold", icon: osrsIcon },
        { name: "Roblox – Robux", icon: osrsIcon },
        { name: "WoW Classic Era – Gold", icon: wowIcon },
        { name: "Blade Ball – Tokens", icon: fcIcon },
      ],
      searchGames: [
        "Old School RuneScape Gold",
        "Roblox Robux",
        "WoW Gold",
        "Blade Ball Tokens"
      ],
    },
    Accounts: {
      popularGames: [
        { name: "Lost Ark – Account", icon: lostArkIcon },
        { name: "RS3 – Account", icon: rs3Icon },
      ],
      searchGames: [
        "Lost Ark Account",
        "RuneScape 3 Account",
        "WoW Account"
      ],
    },
    TopUp: {
      popularGames: [
        { name: "EA Sports FC Coins", icon: fcIcon },
        { name: "Path of Exile Currency", icon: poeIcon },
      ],
      searchGames: [
        "EA FC Top Up",
        "PoE Top Up"
      ],
    },
    Items: {
      popularGames: [
        { name: "Elden Ring Runes", icon: poeIcon },
        { name: "Diablo 4 Gold", icon: osrsIcon },
      ],
      searchGames: [
        "Elden Ring Items",
        "Diablo 4 Items"
      ],
    },
    Boosting: {
      popularGames: [
        { name: "WoW Raid Boost", icon: wowIcon },
        { name: "PoE Boost", icon: poeIcon },
      ],
      searchGames: [
        "WoW Boost",
        "PoE Boost"
      ],
    },
  };

  // Helper to render the dropdown
  const renderDropdown = () => {
    if (!activeDropdown) return null;

    const { popularGames, searchGames } = dropdownData[activeDropdown];

    return (
      <div className="currency-dropdown">
        <div className="dropdown-content">
          <div className="popular-games-section">
            <h4>Popular Games</h4>
            <div className="popular-games-grid">
              {popularGames.map((game, index) => (
                <a href="#" key={index} className="game-item">
                  <img src={game.icon} alt="" className="game-icon" />
                  {game.name}
                </a>
              ))}
            </div>
          </div>
          <div className="search-games-section">
            <h4>Search for game</h4>
            <input
              type="text"
              placeholder="Search a game..."
              className="search-bar"
            />
            <div className="search-games-list">
              {searchGames.map((game, index) => (
                <a href="#" key={index}>{game}</a>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Logo" className="logo" />
        <ul className="nav-links">
          {["Currency", "Accounts", "TopUp", "Items", "Boosting"].map((item) => (
            <li
              key={item}
              onMouseEnter={() => setActiveDropdown(item)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <a href="#">{item}</a>
              {activeDropdown === item && renderDropdown()}
            </li>
          ))}
        </ul>
      </div>

      <div className="navbar-center">
        <input
          type="text"
          placeholder="Search Eldorado"
          className="search-bar"
        />
      </div>

      <div className="navbar-right">
        <button className="login-btn">Log in</button>
      </div>
    </nav>
  );
};

export default Navbar;
