import React, { useState, useEffect } from 'react';
import '../styles/style.css';
import logoImg from '../assets/logo-icon.png';
import { useNavigate } from 'react-router-dom';
import { signOut, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase';
// Game icons
import osrsIcon from '../assets/0.webp';
import poeIcon from '../assets/1.webp';
import fcIcon from '../assets/142.webp';
import wowIcon from '../assets/243.webp';
import rs3Icon from '../assets/70.webp';
import lostArkIcon from '../assets/17.webp';

import {
    FaReddit, FaTiktok, FaTwitter, FaFacebook, FaYoutube, FaBell,
    FaCommentDots, FaSignOutAlt, FaShoppingCart, FaTags, FaRocket,
    FaStar, FaWallet, FaUser, FaCog
} from 'react-icons/fa';

const Navbar = ({ user: propUser }) => {
    const [isUserProfileOpen, setIsUserProfileOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [dropdownSearchQuery, setDropdownSearchQuery] = useState('');
    const [mainSearchQuery, setMainSearchQuery] = useState('');
    const [currentUser, setCurrentUser] = useState(propUser || null);
    const [authLoading, setAuthLoading] = useState(true);
    const navigate = useNavigate();

    // Listen to auth state changes
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            console.log('Auth state changed:', user);
            setCurrentUser(user);
            setAuthLoading(false);
        });

        return () => unsubscribe();
    }, []);

    // Update currentUser when propUser changes
    useEffect(() => {
        if (propUser !== undefined) {
            setCurrentUser(propUser);
            setAuthLoading(false);
        }
    }, [propUser]);

    // Game routing configuration - maps game names to routes
    const gameRoutes = {
        // OSRS variations
        'old school runescape': '/osrs',
        'osrs': '/osrs',
        'old school runescape gold': '/osrs',
        'osrs gold': '/osrs',
        'old school runescape account': '/osrs',
        'osrs account': '/osrs',

        // Other popular games
        'roblox': '/roblox',
        'roblox robux': '/roblox',
        'wow classic era': '/wow-classic',
        'wow classic era gold': '/wow-classic',
        'wow': '/wow',
        'wow gold': '/wow',
        'wow account': '/wow',
        'wow raid boost': '/wow',
        'wow boost': '/wow',
        'blade ball': '/blade-ball',
        'blade ball tokens': '/blade-ball',
        'lost ark': '/lost-ark',
        'lost ark account': '/lost-ark',
        'rs3': '/rs3',
        'runescape 3': '/rs3',
        'rs3 account': '/rs3',
        'runescape 3 account': '/rs3',
        'ea sports fc': '/ea-fc',
        'ea sports fc coins': '/ea-fc',
        'ea fc': '/ea-fc',
        'ea fc top up': '/ea-fc',
        'path of exile': '/poe',
        'poe': '/poe',
        'path of exile currency': '/poe',
        'poe top up': '/poe',
        'poe boost': '/poe',
        'elden ring': '/elden-ring',
        'elden ring runes': '/elden-ring',
        'elden ring items': '/elden-ring',
        'diablo 4': '/diablo-4',
        'diablo 4 gold': '/diablo-4',
        'diablo 4 items': '/diablo-4',

        // Additional games
        'minecraft': '/minecraft',
        'minecraft coins': '/minecraft',
        'fortnite': '/fortnite',
        'fortnite v-bucks': '/fortnite',
        'apex legends': '/apex-legends',
        'apex legends coins': '/apex-legends',
        'valorant': '/valorant',
        'valorant points': '/valorant',
        'valorant account': '/valorant',
        'valorant boost': '/valorant',
        'league of legends': '/league-of-legends',
        'league of legends account': '/league-of-legends',
        'league of legends boost': '/league-of-legends',
        'cs2': '/cs2',
        'cs2 account': '/cs2',
        'mobile legends': '/mobile-legends',
        'mobile legends top up': '/mobile-legends',
        'pubg': '/pubg',
        'pubg uc': '/pubg',
        'pubg uc top up': '/pubg',
        'dark souls': '/dark-souls',
        'dark souls items': '/dark-souls',
        'destiny 2': '/destiny-2',
        'destiny 2 items': '/destiny-2',
        'genshin impact': '/genshin-impact',
        'genshin impact primogems': '/genshin-impact',
        'honkai star rail': '/honkai-star-rail',
        'honkai star rail stellar jade': '/honkai-star-rail',
        'final fantasy xiv': '/ffxiv',
        'final fantasy xiv gil': '/ffxiv',
        'guild wars 2': '/guild-wars-2',
        'guild wars 2 gold': '/guild-wars-2',
        'elder scrolls online': '/eso',
        'elder scrolls online gold': '/eso',
        'black desert online': '/bdo',
        'black desert online silver': '/bdo',
        'warframe': '/warframe',
        'warframe platinum': '/warframe',
        'rocket league': '/rocket-league',
        'rocket league credits': '/rocket-league'
    };

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

    // Helper function to get route for a game
    const getGameRoute = (gameName) => {
        const normalizedName = gameName.toLowerCase().trim();

        // Direct match
        if (gameRoutes[normalizedName]) {
            return gameRoutes[normalizedName];
        }

        // Partial match - find the best match
        const routeKeys = Object.keys(gameRoutes);
        const bestMatch = routeKeys.find(key => {
            const keyWords = key.split(' ');
            const nameWords = normalizedName.split(' ');

            // Check if all words from the key exist in the game name
            return keyWords.every(keyWord =>
                nameWords.some(nameWord => nameWord.includes(keyWord))
            );
        });

        if (bestMatch) {
            return gameRoutes[bestMatch];
        }

        // Fallback: create a route based on the game name
        const routeName = normalizedName
            .replace(/[^\w\s-]/g, '') // Remove special characters except hyphens
            .replace(/\s+/g, '-') // Replace spaces with hyphens
            .toLowerCase();

        return `/${routeName}`;
    };

    const getUsernameFromEmail = (email) => {
        return email ? email.split('@')[0] : 'Guest';
    };

    const handleLogout = async () => {
        try {
            await signOut(auth);
            setIsUserProfileOpen(false); // Close profile dropdown on logout
            navigate('/login');
        } catch (error) {
            console.error('Logout error:', error);
        }
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
        // Close user profile dropdown when nav items are clicked
        setIsUserProfileOpen(false);
    };

    // Close dropdowns when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            // Close nav dropdowns if clicking outside navbar-left
            if (!event.target.closest('.navbar-left')) {
                setActiveDropdown(null);
                setDropdownSearchQuery('');
            }
            
            // Close user profile dropdown if clicking outside user-profile-section
            if (!event.target.closest('.user-profile-section')) {
                setIsUserProfileOpen(false);
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
            const route = getGameRoute(mainSearchQuery);
            navigate(route);
            setMainSearchQuery('');
        }
    };

    // Filter main search results
    const getMainSearchResults = () => {
        if (!mainSearchQuery.trim()) return [];

        const results = allGamesData.filter(game =>
            game.toLowerCase().includes(mainSearchQuery.toLowerCase())
        ).slice(0, 8); // Limit to 8 results

        return results;
    };

    // Handle main search result click - Updated to use dynamic routing
    const handleMainSearchResultClick = (game) => {
        console.log('Selected from main search:', game);

        const route = getGameRoute(game);
        navigate(route);
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

    // Handle dropdown search item click - Updated to use dynamic routing
    const handleDropdownItemClick = (game) => {
        console.log('Selected game:', game);

        const route = getGameRoute(game);
        navigate(route);
        setActiveDropdown(null);
        setDropdownSearchQuery('');
    };

    // Handle popular game click - Updated to use dynamic routing
    const handlePopularGameClick = (game) => {
        console.log('Selected popular game:', game.name);

        // Clean the game name (remove extra text like "– Gold", "– Account", etc.)
        const cleanGameName = game.name.replace(/\s*[–-]\s*.+$/, '');
        const route = getGameRoute(cleanGameName);
        navigate(route);
        setActiveDropdown(null);
    };

    // Handle user profile toggle
    const handleUserProfileToggle = (event) => {
        event.preventDefault();
        event.stopPropagation();
        setIsUserProfileOpen(!isUserProfileOpen);
        // Close nav dropdowns when user profile is opened
        setActiveDropdown(null);
        setDropdownSearchQuery('');
    };

    // Handle login button click
    const handleLoginClick = (event) => {
        event.preventDefault();
        navigate('/login');
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

    // Debug: Log user state
    console.log('Navbar currentUser:', currentUser);
    console.log('Navbar propUser:', propUser);
    console.log('Auth loading:', authLoading);

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
                {!authLoading && currentUser && currentUser.email ? (
                    <div className="user-profile-section">
                        <div 
                            className="user-profile-trigger" 
                            onClick={handleUserProfileToggle}
                        >
                            <div className="user-avatar">
                                <FaUser />
                            </div>
                            <span className="username">{getUsernameFromEmail(currentUser.email)}</span>
                        </div>

                        {isUserProfileOpen && (
                            <div className="user-profile-dropdown">
                                <div className="profile-header">
                                    <div className="profile-avatar">
                                        <FaUser />
                                    </div>
                                    <div className="profile-info">
                                        <h3>{getUsernameFromEmail(currentUser.email)}</h3>
                                        <p className="profile-balance">$0.00</p>
                                        <div className="profile-rank">
                                            <span className="rank-badge bronze">Bronze Rank</span>
                                        </div>
                                    </div>
                                    <button className="sell-button">Sell</button>
                                </div>

                                <div className="profile-menu">
                                    <div className="menu-item">
                                        <FaShoppingCart className="menu-icon" />
                                        <span>Orders</span>
                                    </div>
                                    <div className="menu-item">
                                        <FaTags className="menu-icon" />
                                        <span>Offers</span>
                                    </div>
                                    <div className="menu-item">
                                        <FaRocket className="menu-icon" />
                                        <span>Boosting</span>
                                    </div>
                                    <div className="menu-item">
                                        <FaStar className="menu-icon" />
                                        <span>Loyalty</span>
                                        <span className="beta-badge">BETA</span>
                                    </div>
                                    <div className="menu-item">
                                        <FaWallet className="menu-icon" />
                                        <span>Wallet</span>
                                    </div>
                                    <div className="menu-item">
                                        <FaCommentDots className="menu-icon" />
                                        <span>Messages</span>
                                    </div>
                                    <div className="menu-item">
                                        <FaBell className="menu-icon" />
                                        <span>Notifications</span>
                                    </div>
                                    <div className="menu-item">
                                        <FaStar className="menu-icon" />
                                        <span>Feedback</span>
                                    </div>
                                    <div className="menu-item">
                                        <FaCog className="menu-icon" />
                                        <span>Account settings</span>
                                    </div>
                                    <div className="menu-item logout" onClick={handleLogout}>
                                        <FaSignOutAlt className="menu-icon" />
                                        <span>Log out</span>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                ) : (
                    !authLoading && (
                        <a href="#" className="login-btn" onClick={handleLoginClick}>
                            Log in
                        </a>
                    )
                )}
            </div>
        </nav>
    );
};

export default Navbar;