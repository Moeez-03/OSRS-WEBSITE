import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import AuthLayout from './AuthLayout';
import '../styles/auth.css';

const LoginPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({
    email: '',
    password: '',
    general: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear specific field error when user starts typing
    if (errors[name] || errors.general) {
      setErrors(prev => ({
        ...prev,
        [name]: '',
        general: ''
      }));
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Reset all errors
    setErrors({
      email: '',
      password: '',
      general: ''
    });

    // Validate form fields
    let hasError = false;
    const newErrors = {};

    if (!formData.email) {
      newErrors.email = 'Email is required';
      hasError = true;
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
      hasError = true;
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
      hasError = true;
    }

    if (hasError) {
      setErrors(newErrors);
      return;
    }

    setIsLoading(true);

    try {
      await signInWithEmailAndPassword(auth, formData.email, formData.password);
      navigate('/main');
    } catch (error) {
      console.error('Login error:', error);
      handleFirebaseError(error.code);
    } finally {
      setIsLoading(false);
    }
  };

  const handleFirebaseError = (errorCode) => {
    switch (errorCode) {
      case 'auth/user-not-found':
        setErrors(prev => ({
          ...prev,
          email: 'Wrong email'
        }));
        break;
      case 'auth/wrong-password':
        setErrors(prev => ({
          ...prev,
          password: 'Wrong password'
        }));
        break;
      case 'auth/invalid-credential':
        // This error typically means both email and password are incorrect
        setErrors(prev => ({
          ...prev,
          general: 'Email/Password incorrect'
        }));
        break;
      case 'auth/invalid-email':
        setErrors(prev => ({
          ...prev,
          email: 'Wrong email'
        }));
        break;
      case 'auth/too-many-requests':
        setErrors(prev => ({
          ...prev,
          general: 'Too many failed attempts. Please try again later'
        }));
        break;
      case 'auth/user-disabled':
        setErrors(prev => ({
          ...prev,
          general: 'This account has been disabled'
        }));
        break;
      default:
        setErrors(prev => ({
          ...prev,
          general: 'Email/Password incorrect'
        }));
    }
  };

  return (
    <AuthLayout>
      <div className="auth-content">
        <h1>Sign in</h1>

        {errors.general && <div className="error-message">{errors.general}</div>}

        <form onSubmit={handleSubmit} className="form-section">
          <p className="section-title">With existing account</p>

          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="name@host.com"
              disabled={isLoading}
              autoComplete="email"
              className={errors.email ? 'error' : ''}
            />
            {errors.email && <span className="field-error">{errors.email}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Enter your password"
              disabled={isLoading}
              autoComplete="current-password"
              className={errors.password ? 'error' : ''}
            />
            {errors.password && <span className="field-error">{errors.password}</span>}
          </div>

          <button 
            type="submit" 
            className="submit-btn" 
            disabled={isLoading}
          >
            {isLoading ? 'Signing in...' : 'Sign in'}
          </button>

          <p className="auth-switch">
            New user? <Link to="/signup">Create an account</Link>
          </p>
        </form>
      </div>
    </AuthLayout>
  );
};

export default LoginPage;