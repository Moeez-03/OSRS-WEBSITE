import React from 'react';
import { useNavigate } from 'react-router-dom'; // ✅ add this
import '../styles/style.css';
import logo from '../assets/logo.png';

const LoginPage = () => {
  const navigate = useNavigate(); // ✅ hook to navigate back

  return (
    <div className="login-page">
      <div className="login-box">
        <button className="close-btn" onClick={() => navigate('/')}>✕</button>

        <img src={logo} alt="Eldorado Logo" className="login-logo" />
        <h2>Sign in</h2>

        <p>With other accounts</p>
        <button className="login-btn google">Sign in with Google</button>
        <button className="login-btn apple">Continue with Apple</button>
        <button className="login-btn facebook">Continue with Facebook</button>

        <div className="or-divider">OR</div>

        <form>
          <label>Email address</label>
          <input type="email" placeholder="name@host.com" required />
          <button type="submit" className="login-submit">Next</button>
        </form>

        <p className="new-user">
          New user? <a href="#">Create an account</a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
