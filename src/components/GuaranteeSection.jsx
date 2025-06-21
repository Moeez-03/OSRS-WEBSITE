import React from "react";
import '../styles/style.css';
import shieldIcon from "../assets/trade-shield.svg";
import supportIcon from "../assets/chat-support.svg";

const GuaranteeSection = () => {
  return (
    <div className="guarantee-section">
      <div className="container">
        <div className="guarantee-cards-container">
          {/* Money-Back Guarantee Card */}
          <div className="guarantee-card money-back">
            <div className="card-content">
              <img src={shieldIcon} alt="Money Back Guarantee" className="card-icon" />
              <div className="text-content">
                <h3>Money-Back Guarantee</h3>
                <p>Receive your order or get a refund. Feel safe with full trading protection!</p>
                <button className="action-btn">Learn more</button>
              </div>
            </div>
          </div>

          {/* 24/7 Support Card */}
          <div className="guarantee-card live-support">
            <div className="card-content">
              <img src={supportIcon} alt="24/7 Support" className="card-icon" />
              <div className="text-content">
                <h3>24/7 Live Support</h3>
                <p>Eldorado support works around the clock. Contact us at any time!</p>
                <button className="action-btn">Chat now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuaranteeSection;