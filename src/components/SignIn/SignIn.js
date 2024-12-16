import React from "react";
import "./SignIn.css"; // Ensure the correct path
import emailIcon from "../../assets/icons/email.png";
import passwordIcon from "../../assets/icons/password.png";
import googleIcon from "../../assets/google 1.png";
import facebookIcon from "../../assets/facebook 1.png";
import logo from "../../assets/logo.png";
import background from "../../assets/background.png";

const SignIn = () => {
  return (
    <div className="signin-container">
      {/* Left Side Background */}
      <div
        className="signin-left"
        style={{ backgroundImage: `url(${background})` }}
      ></div>

      {/* Right Side Blue with Logo and Text */}
      <div className="signin-right">
        <img src={logo} alt="Vista Lanka Logo" className="signin-side-logo" />
        <p className="signin-tagline">Start your journey with us.......</p>
      </div>

      {/* Center Sign-In Form */}
      <div className="signin-box">
        <img src={logo} alt="Vista Lanka Logo" className="signin-logo" />
        <h2>Sign In</h2>
        <form className="signin-form">
          <div className="input-group">
            <img src={emailIcon} alt="Email Icon" className="input-icon" />
            <input
              type="email"
              placeholder="Enter your email"
              required
              className="signin-input"
              aria-label="Email"
            />
          </div>
          <div className="input-group">
            <img src={passwordIcon} alt="Password Icon" className="input-icon" />
            <input
              type="password"
              placeholder="Enter your password"
              required
              className="signin-input"
              aria-label="Password"
            />
          </div>
          <button type="submit" className="signin-button">
            Sign In
          </button>
        </form>
        <p className="signin-footer">
          Don't have an account? <a href="/signup">Sign Up</a>
        </p>
        <div className="signin-options">
          <p>Or sign in with:</p>
          <div className="options-buttons">
            <button className="option-button google">
              <img src={googleIcon} alt="Google Icon" className="signin-social-icon" />
              Google
            </button>
            <button className="option-button facebook">
              <img src={facebookIcon} alt="Facebook Icon" className="signin-social-icon" />
              Facebook
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
