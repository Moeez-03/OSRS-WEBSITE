import React from "react";
import "../styles/style.css";
import { useNavigate } from 'react-router-dom';
import {
  FaReddit,
  FaTiktok,
  FaTwitter,
  FaFacebook,
  FaYoutube,
} from "react-icons/fa";
import jazzcashImg from "../assets/jazzcash.png";
import easypaisaImg from "../assets/easypaisa.jpeg";
import paypakImg from "../assets/paypak.jpeg";
import upaisaImg from "../assets/upaisa.jpeg";
import bankImg from "../assets/bank.jpeg";
import logoImg from "../assets/logo-icon.png"

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="eldorado-footer">
      {/* Payment Methods - Now with images instead of icons */}
      <div className="payment-methods-bar">
        <div className="payment-container">
          <div className="payment-icons">
            <img src={jazzcashImg} alt="JazzCash" className="payment-icon" />
            <img src={easypaisaImg} alt="Easypaisa" className="payment-icon" />
            <img src={paypakImg} alt="PayPak" className="payment-icon" />
            <img src={upaisaImg} alt="UPaisa" className="payment-icon" />
            <img src={bankImg} alt="Bank Transfer" className="payment-icon" />
          </div>
        </div>
      </div>

      {/* Your existing footer structure - completely unchanged */}
      <div className="footer-top">
        <div className="footer-header">
          <div className="footer-logo">
            <a href="#" onClick={(e) => {
              e.preventDefault();
              navigate('/');
            }}>
              <img src={logoImg} alt="logo-icon" className="logo-icon" />
              <h1>Game Walay</h1>
            </a>
          </div>
          <p>Join us today to level up your gaming experience!</p>
          <div className="social-media">
            <a href="#" aria-label="Reddit"><FaReddit className="social-icon" /></a>
            <a href="#" aria-label="TikTok"><FaTiktok className="social-icon" /></a>
            <a href="#" aria-label="Twitter"><FaTwitter className="social-icon" /></a>
            <a href="#" aria-label="Facebook"><FaFacebook className="social-icon" /></a>
            <a href="#" aria-label="YouTube"><FaYoutube className="social-icon" /></a>
          </div>
        </div>
        
        <div className="footer-columns">
          <div className="footer-column">
            <h3>Help Center</h3>
            <ul>
              <li><a href="#">Contact us</a></li>
              <li><a href="#">Bug Bounty</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Become a Partner</a></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h3>Account</h3>
            <ul>
              <li><a href="#">Warranty</a></li>
              <li><a href="#">Tradeshield (Buying)</a></li>
              <li><a href="#">Tradeshield (Selling)</a></li>
              <li><a href="#">Deposits</a></li>
              <li><a href="#">Withdrawals</a></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h3>Rules</h3>
            <ul>
              <li><a href="#">Account Seller Rules</a></li>
              <li><a href="#">Seller Rules</a></li>
              <li><a href="#">Changing Username</a></li>
              <li><a href="#">Fees</a></li>
              <li><a href="#">Refund Policy</a></li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>© 2025 GameWalay Market. The Gamewalay.ge website is owned and operated by Gamewalay Market, UAB.</p>
        <div className="footer-links">
          <a href="#">Terms of Service</a>
          <a href="#">Privacy Policy</a>
          <a href="#">DMCA</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;