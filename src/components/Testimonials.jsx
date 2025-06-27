import React from 'react';
import '../styles/style.css';
import ietaudiImg from '../assets/letaudi.webp';
import fxtchImg from '../assets/fxtch.webp';
import coreyImg from '../assets/CoreyJM.webp';

const Testimonials = () => {
  return (
    <div className="testimonials-container">
      <h1 className="testimonials-title">
        Over <span className="highlight">500 streamers</span> say GAME WALAY is the go-to for gaming goods
      </h1>
      
      <div className="testimonials-grid">
        <div className="testimonial-card">
          <div className="streamer-header">
            <img src={ietaudiImg} alt="Ietaudi" className="streamer-avatar" />
            <div className="streamer-info">
              <span className="streamer-name">Ietaudi</span>
              <span className="streamer-followers">216K followers</span>
            </div>
          </div>
          <p className="testimonial-text">"Eldorado makes buying super simple — from cheap starter accounts to fully stacked beasts, they've got it all. It's my go-to every time"</p>
          <a href="#" className="watch-link">Watch on TikTok</a>
        </div>
        
        <div className="testimonial-card">
          <div className="streamer-header">
            <img src={fxtchImg} alt="Fxtch" className="streamer-avatar" />
            <div className="streamer-info">
              <span className="streamer-name">Fxtch</span>
              <span className="streamer-followers">127K subscribers</span>
            </div>
          </div>
          <p className="testimonial-text">"Incredible service, helping me safely level up my gaming experience in minutes!"</p>
          <a href="#" className="watch-link">Watch on Youtube</a>
        </div>
        
        <div className="testimonial-card">
          <div className="streamer-header">
            <img src={coreyImg} alt="Corey JM" className="streamer-avatar" />
            <div className="streamer-info">
              <span className="streamer-name">Corey JM</span>
              <span className="streamer-followers">31K subscribers</span>
            </div>
          </div>
          <p className="testimonial-text">"I've purchased many GTA accounts and have never had an issue! Reliable sellers and staff members and 100% the best shop for your gaming needs"</p>
          <a href="#" className="watch-link">Watch on Youtube</a>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;