import React from "react";
import "../styles/style.css";
import { 
  FaReddit, FaTiktok, FaTwitter, FaFacebook, FaYoutube,
  FaCcVisa, FaCcMastercard, FaPaypal
} from "react-icons/fa";
import { SiAmericanexpress, SiApplepay, SiGooglepay } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="eldorado-footer">
      {/* Payment Methods - Added at top without affecting existing design */}
      <div className="payment-methods-bar">
        <div className="payment-container">
          <div className="payment-icons">
            <FaCcVisa className="payment-icon" />
            <FaCcMastercard className="payment-icon" />
            <SiAmericanexpress className="payment-icon" />
            <FaPaypal className="payment-icon" />
            <SiApplepay className="payment-icon" />
            <SiGooglepay className="payment-icon" />
            <span className="more-methods">+15 more</span>
          </div>
        </div>
      </div>

      {/* Your existing footer structure - completely unchanged */}
      <div className="footer-top">
        <div className="footer-header">
          <h1>Game Walay</h1>
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
        <p>© 2025 Eldorado Market. The eldorado.ge website is owned and operated by Eldorado Market, UAB.</p>
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