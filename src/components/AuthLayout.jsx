import React from 'react';

const AuthLayout = ({ children }) => {
  return (
    <div className="auth-container">
      <div className="background-illustration left-character">
        <div className="character-container">
          <div className="character-body yellow"></div>
          <div className="character-hat green"></div>
          <div className="character-weapon"></div>
        </div>
      </div>

      <div className="background-illustration right-character">
        <div className="character-container">
          <div className="character-body yellow"></div>
          <div className="character-hair blue"></div>
          <div className="character-leaves"></div>
        </div>
      </div>

      <div className="background-shapes">
        <div className="shape circle-1"></div>
        <div className="shape circle-2"></div>
        <div className="shape leaf-1"></div>
        <div className="shape leaf-2"></div>
      </div>

      <div className="auth-page">
        <div className="auth-header">
          <div className="logo">
            <div className="logo-icon">🎮</div>
            <h1>Game Walay</h1>
          </div>
        </div>
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;