import React from 'react';
import '../styles/style.css';
import logo from '../assets/logo.png'; // correct import

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img
          src={logo} // ✅ Correct usage
          alt="Logo"
          className="logo"
        />
        <ul className="nav-links">
          <li><a href="#">Currency</a></li>
          <li><a href="#">Accounts</a></li>
          <li><a href="#">Top Up</a></li>
          <li><a href="#">Items</a></li>
          <li><a href="#">Boosting</a></li>
        </ul>
      </div>
      <div className="navbar-center">
        <input type="text" placeholder="Search Eldorado" className="search-bar" />
      </div>
      <div className="navbar-right">
        <button className="login-btn">Log in</button>
      </div>
    </nav>
  );
};

export default Navbar;
