import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { auth, db } from '../firebase';
import AuthLayout from './AuthLayout';
import '../styles/auth.css';

const SignupPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showVerificationMessage, setShowVerificationMessage] = useState(false);

  // List of allowed email domains (you can modify this)
  const allowedDomains = [
    'gmail.com',
    'yahoo.com',
    'hotmail.com',
    'outlook.com',
    'protonmail.com',
    'icloud.com',
    'aol.com',
    'live.com',
    'msn.com',
    'yandex.com',
    'mail.ru'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (error) setError('');
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return 'Invalid email format';
    }

    const domain = email.split('@')[1];
    if (!allowedDomains.includes(domain)) {
      return `Email domain "${domain}" is not allowed. Please use a certified email provider like Gmail, Yahoo, or Outlook.`;
    }

    return null;
  };

  const validatePassword = (password) => {
    const errors = [];
    
    if (password.length < 8) {
      errors.push('at least 8 characters');
    }
    
    if (!/[A-Z]/.test(password)) {
      errors.push('one uppercase letter');
    }
    
    if (!/[a-z]/.test(password)) {
      errors.push('one lowercase letter');
    }
    
    if (!/\d/.test(password)) {
      errors.push('one number');
    }
    
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      errors.push('one special character (!@#$%^&*(),.?":{}|<>)');
    }

    if (errors.length > 0) {
      return `Password must contain ${errors.join(', ')}`;
    }

    return null;
  };

  const validateName = (name, fieldName) => {
    if (!name.trim()) {
      return `${fieldName} is required`;
    }
    
    if (name.trim().length < 2) {
      return `${fieldName} must be at least 2 characters`;
    }
    
    if (!/^[a-zA-Z\s'-]+$/.test(name)) {
      return `${fieldName} can only contain letters, spaces, hyphens, and apostrophes`;
    }
    
    return null;
  };

  // Function to check if passwords match
  const getPasswordMatchStatus = () => {
    if (!formData.password || !formData.confirmPassword) {
      return null; // Don't show anything if either field is empty
    }
    return formData.password === formData.confirmPassword;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate all fields
    const firstNameError = validateName(formData.firstName, 'First name');
    const lastNameError = validateName(formData.lastName, 'Last name');
    const emailError = validateEmail(formData.email);
    const passwordError = validatePassword(formData.password);

    if (firstNameError) {
      setError(firstNameError);
      return;
    }

    if (lastNameError) {
      setError(lastNameError);
      return;
    }

    if (emailError) {
      setError(emailError);
      return;
    }

    if (passwordError) {
      setError(passwordError);
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match!');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      // Create user account
      const userCredential = await createUserWithEmailAndPassword(
        auth, 
        formData.email.toLowerCase().trim(), 
        formData.password
      );

      // Update user profile with display name
      await updateProfile(userCredential.user, {
        displayName: `${formData.firstName.trim()} ${formData.lastName.trim()}`
      });

      // Send email verification
      await sendEmailVerification(userCredential.user);

      // Save user data to Firestore
      await setDoc(doc(db, 'users', userCredential.user.uid), {
        firstName: formData.firstName.trim(),
        lastName: formData.lastName.trim(),
        email: formData.email.toLowerCase().trim(),
        emailVerified: false,
        createdAt: new Date().toISOString(),
        lastLogin: new Date().toISOString()
      });

      // Show verification message instead of navigating immediately
      setShowVerificationMessage(true);
      
      // Optional: Navigate to main after showing message
      setTimeout(() => {
        navigate('/main');
      }, 3000);

    } catch (error) {
      console.error('Signup error:', error);
      setError(getErrorMessage(error.code));
    } finally {
      setIsLoading(false);
    }
  };

  const getErrorMessage = (errorCode) => {
    switch (errorCode) {
      case 'auth/email-already-in-use':
        return 'An account with this email already exists';
      case 'auth/weak-password':
        return 'Password is too weak';
      case 'auth/invalid-email':
        return 'Invalid email address';
      case 'auth/too-many-requests':
        return 'Too many failed attempts. Please try again later';
      case 'auth/network-request-failed':
        return 'Network error. Please check your connection and try again';
      default:
        return 'An error occurred. Please try again';
    }
  };

  if (showVerificationMessage) {
    return (
      <AuthLayout>
        <div className="auth-content">
          <div className="verification-message">
            <h2>Account Created Successfully!</h2>
            <p>We've sent a verification email to <strong>{formData.email}</strong></p>
            <p>Please check your inbox and click the verification link to activate your account.</p>
            <p>Redirecting to main page in 3 seconds...</p>
            <button 
              onClick={() => navigate('/main')} 
              className="submit-btn"
              style={{ marginTop: '20px' }}
            >
              Continue to Main Page
            </button>
          </div>
        </div>
      </AuthLayout>
    );
  }

  const passwordMatchStatus = getPasswordMatchStatus();

  return (
    <AuthLayout>
      <div className="auth-content">
        <h1>Sign up</h1>

        {error && <div className="error-message">{error}</div>}

        <form onSubmit={handleSubmit} className="form-section">
          <p className="section-title">Create new account</p>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="firstName">First Name <span className="required">*</span></label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                placeholder="John"
                disabled={isLoading}
                autoComplete="given-name"
                required
                minLength={2}
                pattern="^[a-zA-Z\s'-]+$"
                title="First name must contain only letters, spaces, hyphens, and apostrophes"
                aria-describedby="firstName-help"
              />
              <small id="firstName-help" className="form-help">
                Required: 2+ characters, letters only
              </small>
            </div>

            <div className="form-group">
              <label htmlFor="lastName">Last Name <span className="required">*</span></label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                placeholder="Doe"
                disabled={isLoading}
                autoComplete="family-name"
                required
                minLength={2}
                pattern="^[a-zA-Z\s'-]+$"
                title="Last name must contain only letters, spaces, hyphens, and apostrophes"
                aria-describedby="lastName-help"
              />
              <small id="lastName-help" className="form-help">
                Required: 2+ characters, letters only
              </small>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="email">Email address <span className="required">*</span></label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="name@gmail.com"
              disabled={isLoading}
              autoComplete="email"
              required
              pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
              title="Please enter a valid email address from an approved provider"
              aria-describedby="email-help"
            />
            <small id="email-help" className="form-help">
              Required: Only certified email providers are allowed (Gmail, Yahoo, Outlook, etc.)
            </small>
          </div>

          <div className="form-group">
            <label htmlFor="password">Password <span className="required">*</span></label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Enter strong password"
              disabled={isLoading}
              autoComplete="new-password"
              required
              minLength={8}
              pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?&quot;:{}|<>]).{8,}$"
              title="Password must contain at least 8 characters, including uppercase, lowercase, number, and special character"
              aria-describedby="password-help"
            />
            <small id="password-help" className="form-help">
              Required: 8+ characters, uppercase, lowercase, number, and special character
            </small>
          </div>

          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm password <span className="required">*</span></label>
            <div className="password-confirm-wrapper">
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                placeholder="Reenter password"
                disabled={isLoading}
                autoComplete="new-password"
                required
                className={passwordMatchStatus === false ? 'password-mismatch' : passwordMatchStatus === true ? 'password-match' : ''}
                title="Please confirm your password"
                aria-describedby="confirmPassword-help"
              />
              {passwordMatchStatus !== null && (
                <span className={`password-match-indicator ${passwordMatchStatus ? 'match' : 'mismatch'}`}>
                  {passwordMatchStatus ? '✓' : '✗'}
                </span>
              )}
            </div>
            <small id="confirmPassword-help" className="form-help">
              Required: Must match the password above
            </small>
            {passwordMatchStatus !== null && (
              <small className={`password-match-message ${passwordMatchStatus ? 'match' : 'mismatch'}`}>
                {passwordMatchStatus ? 'Passwords match' : 'Passwords do not match'}
              </small>
            )}
          </div>

          <button 
            type="submit" 
            className="submit-btn" 
            disabled={isLoading}
          >
            {isLoading ? 'Creating account...' : 'Sign up'}
          </button>

          <p className="auth-switch">
            Have an account already? <Link to="/login">Sign in</Link>
          </p>
        </form>
      </div>
    </AuthLayout>
  );
};

export default SignupPage;