import React, { useState, useEffect } from 'react';
import '../styles/style.css';
import logoImg from '../assets/logo-icon.png';
import LoginPage from './LoginPage';
import { useNavigate } from 'react-router-dom';
// Game icons
import osrsIcon from '../assets/0.webp';
import poeIcon from '../assets/1.webp';
import fcIcon from '../assets/142.webp';
import wowIcon from '../assets/243.webp';
import rs3Icon from '../assets/70.webp';
import lostArkIcon from '../assets/17.webp';

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [dropdownSearchQuery, setDropdownSearchQuery] = useState('');
  const [mainSearchQuery, setMainSearchQuery] = useState('');
  const navigate = useNavigate();

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
        "Blade Ball Tokens",
        "Minecraft Coins",
        "Fortnite V-Bucks",
        "Apex Legends Coins",
        "Valorant Points"
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
        "WoW Account",
        "League of Legends Account",
        "Valorant Account",
        "CS2 Account"
      ],
    },
    TopUp: {
      popularGames: [
        { name: "EA Sports FC Coins", icon: fcIcon },
        { name: "Path of Exile Currency", icon: poeIcon },
      ],
      searchGames: [
        "EA FC Top Up",
        "PoE Top Up",
        "Mobile Legends Top Up",
        "PUBG UC Top Up"
      ],
    },
    Items: {
      popularGames: [
        { name: "Elden Ring Runes", icon: poeIcon },
        { name: "Diablo 4 Gold", icon: osrsIcon },
      ],
      searchGames: [
        "Elden Ring Items",
        "Diablo 4 Items",
        "Dark Souls Items",
        "Destiny 2 Items"
      ],
    },
    Boosting: {
      popularGames: [
        { name: "WoW Raid Boost", icon: wowIcon },
        { name: "PoE Boost", icon: poeIcon },
      ],
      searchGames: [
        "WoW Boost",
        "PoE Boost",
        "League of Legends Boost",
        "Valorant Boost"
      ],
    },
  };

  // Helper function to check if game is OSRS related
  const isOSRSRelated = (gameName) => {
    const lowerName = gameName.toLowerCase();
    return lowerName.includes('old school runescape') || 
           lowerName.includes('osrs') ||
           lowerName.includes('oldschool runescape') ||
           lowerName === 'osrs' ||
           lowerName === 'old school runescape' ||
           lowerName === 'osrs gold' ||
           lowerName === 'old school runescape gold';
  };
  
  const handleNavClick = (item, event) => {
    event.preventDefault();
    setActiveDropdown(activeDropdown === item ? null : item);
    // Reset dropdown search when opening a new dropdown
    setDropdownSearchQuery('');
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Only close if clicking completely outside the navbar area
      if (!event.target.closest('.navbar-left')) {
        setActiveDropdown(null);
        setDropdownSearchQuery('');
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  // Filter search games based on query
  const getFilteredSearchGames = () => {
    if (!activeDropdown) return [];
    
    const { searchGames } = dropdownData[activeDropdown];
    if (!dropdownSearchQuery.trim()) return searchGames;
    
    return searchGames.filter(game =>
      game.toLowerCase().includes(dropdownSearchQuery.toLowerCase())
    );
  };

  // Handle dropdown search input
  const handleDropdownSearch = (event) => {
    setDropdownSearchQuery(event.target.value);
  };

  // All games data for main search
  const allGamesData = [
    ...dropdownData.Currency.searchGames,
    ...dropdownData.Accounts.searchGames,
    ...dropdownData.TopUp.searchGames,
    ...dropdownData.Items.searchGames,
    ...dropdownData.Boosting.searchGames,
    "Old School RuneScape",
    "OSRS",
    "OSRS Gold",
    "Old School RuneScape Account",
    "Genshin Impact Primogems",
    "Honkai Star Rail Stellar Jade",
    "Final Fantasy XIV Gil",
    "Guild Wars 2 Gold",
    "Elder Scrolls Online Gold",
    "Black Desert Online Silver",
    "Warframe Platinum",
    "Rocket League Credits"
  ];

  // Handle main search input
  const handleMainSearch = (event) => {
    setMainSearchQuery(event.target.value);
  };

  // Handle main search submit
  const handleMainSearchSubmit = (event) => {
    event.preventDefault();
    if (mainSearchQuery.trim()) {
      // Check if search query matches OSRS
      if (isOSRSRelated(mainSearchQuery)) {
        navigate('/osrs');
      } else {
        // For other searches, you can implement search results page
        console.log('Searching for:', mainSearchQuery);
        alert(`Searching for: ${mainSearchQuery}`);
      }
      setMainSearchQuery('');
    }
  };

  // Filter main search results
  const getMainSearchResults = () => {
    if (!mainSearchQuery.trim()) return [];
    
    const results = allGamesData.filter(game =>
      game.toLowerCase().includes(mainSearchQuery.toLowerCase())
    ).slice(0, 8); // Limit to 8 results
    
    // Debug logging
    console.log('Search query:', mainSearchQuery);
    console.log('Search results:', results);
    
    return results;
  };

  // Handle main search result click - Updated to include navigation
  const handleMainSearchResultClick = (game) => {
    console.log('Selected from main search:', game);
    
    // Navigate to specific game pages based on game name
    if (isOSRSRelated(game)) {
      navigate('/osrs');
    } else {
      // For other games, show alert or navigate to other pages
      alert(`Selected: ${game}`);
    }
    
    setMainSearchQuery('');
  };

  // Generate game icon letter
  const getGameIcon = (gameName) => {
    return gameName.charAt(0).toUpperCase();
  };

  // Highlight matching text in search results
  const highlightMatch = (text, query) => {
    if (!query.trim()) return text;
    
    const regex = new RegExp(`(${query})`, 'gi');
    const parts = text.split(regex);
    
    return parts.map((part, index) => {
      if (part.toLowerCase() === query.toLowerCase()) {
        return `<span class="search-highlight">${part}</span>`;
      }
      return part;
    }).join('');
  };

  // Handle dropdown search item click - Updated to include navigation
  const handleDropdownItemClick = (game) => {
    console.log('Selected game:', game);
    
    // Navigate to specific game pages based on game name
    if (isOSRSRelated(game)) {
      navigate('/osrs');
    } else {
      // For other games, show alert or navigate to other pages
      alert(`Selected: ${game}`);
    }
    
    setActiveDropdown(null);
    setDropdownSearchQuery('');
  };

  // Handle popular game click - Updated to include navigation
  const handlePopularGameClick = (game) => {
    console.log('Selected popular game:', game.name);
    
    // Navigate to specific game pages
    if (game.name.includes('Old School RuneScape')) {
      navigate('/osrs');
    } else {
      // For other games, show alert or navigate to other pages
      alert(`Selected: ${game.name}`);
    }
    
    setActiveDropdown(null);
  };

  // Helper to render the dropdown
  const renderDropdown = () => {
    if (!activeDropdown) return null;

    const { popularGames } = dropdownData[activeDropdown];
    const filteredSearchGames = getFilteredSearchGames();

    return (
      <div className="currency-dropdown">
        <div className="dropdown-content">
          <div className="popular-games-section">
            <h4>Popular Games</h4>
            <div className="popular-games-grid">
              {popularGames.map((game, index) => (
                <a 
                  key={index} 
                  href="#"
                  className="game-item"
                  onClick={(e) => {
                    e.preventDefault();
                    handlePopularGameClick(game);
                  }}
                >
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
              value={dropdownSearchQuery}
              onChange={handleDropdownSearch}
            />
            <div className="search-games-list">
              {filteredSearchGames.length > 0 ? (
                filteredSearchGames.map((game, index) => (
                  <a 
                    key={index}
                    href="#"
                    className="search-game-item"
                    onClick={(e) => {
                      e.preventDefault();
                      handleDropdownItemClick(game);
                    }}
                  >
                    {game}
                  </a>
                ))
              ) : (
                dropdownSearchQuery && (
                  <div className="no-results">No games found matching "{dropdownSearchQuery}"</div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="nav-logo">
          <a href="#" onClick={(e) => {
            e.preventDefault();
            navigate('/');
          }}>
            <img src={logoImg} alt="logo-icon" className="logo-icon" />
            <h1>Game Walay</h1>
          </a>
        </div>
        <ul className="nav-links">
          {["Currency", "Accounts", "TopUp", "Items", "Boosting"].map((item) => (
            <li key={item}>
              <a 
                href="#"
                onClick={(e) => handleNavClick(item, e)}
                className={`nav-link ${activeDropdown === item ? 'active' : ''}`}
              >
                {item}
              </a>
              {activeDropdown === item && renderDropdown()}
            </li>
          ))}
        </ul>
      </div>

      <div className="navbar-center">
        <div className="main-search-container">
          <form onSubmit={handleMainSearchSubmit}>
            <input
              type="text"
              placeholder="Search GameWalay"
              className="search-bar main-search-input"
              value={mainSearchQuery}
              onChange={handleMainSearch}
            />
          </form>
          {mainSearchQuery && getMainSearchResults().length > 0 && (
            <div className="main-search-dropdown">
              <div className="main-search-results">
                {getMainSearchResults().map((game, index) => (
                  <a
                    key={index}
                    href="#"
                    className="main-search-item"
                    onClick={(e) => {
                      e.preventDefault();
                      handleMainSearchResultClick(game);
                    }}
                  >
                    <div className="main-search-item-icon">
                      {getGameIcon(game)}
                    </div>
                    <span 
                      dangerouslySetInnerHTML={{ 
                        __html: highlightMatch(game, mainSearchQuery) 
                      }}
                    />
                  </a>
                ))}
              </div>
            </div>
          )}
          {mainSearchQuery && getMainSearchResults().length === 0 && (
            <div className="main-search-dropdown">
              <div className="main-search-no-results">
                No results found for "{mainSearchQuery}"
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="navbar-right">
        <a href="#" className="login-btn" onClick={(e) => {
          e.preventDefault();
          navigate('/login');
        }}>
          Log in
        </a>
      </div>
    </nav>
  );
};

export default Navbar;