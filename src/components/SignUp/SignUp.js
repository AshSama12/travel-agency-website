import React from "react";
import "./SignUp.css"; // Ensure the correct path
import emailIcon from "../../assets/icons/email.png";
import passwordIcon from "../../assets/icons/password.png";
import confirmPasswordIcon from "../../assets/icons/password.png"; // Use the same password icon for confirm password
import logo from "../../assets/logo.png";

const SignUp = () => {
  return (
    <div className="signup-container">
      <div className="signup-left"></div>
      <div className="signup-right"></div>
      <div className="signup-box">
        <img src={logo} alt="Logo" className="signup-logo" />
        <h2>Sign Up</h2>
        <form className="signup-form">
          <div className="input-group">
            <img src={emailIcon} alt="Email Icon" className="input-icon" />
            <input
              type="email"
              placeholder="Email"
              required
              className="signup-input"
            />
          </div>
          <div className="input-group">
            <img src={passwordIcon} alt="Password Icon" className="input-icon" />
            <input
              type="password"
              placeholder="Password"
              required
              className="signup-input"
            />
          </div>
          <div className="input-group">
            <img
              src={confirmPasswordIcon}
              alt="Confirm Password Icon"
              className="input-icon"
            />
            <input
              type="password"
              placeholder="Confirm Password"
              required
              className="signup-input"
            />
          </div>
          <button type="submit" className="signup-button">
            Sign Up
          </button>
        </form>
        <p className="signup-footer">
          Already have an account? <a href="/signin">Sign In</a>
        </p>
        <div className="signup-options">
          <p>Or sign up with:</p>
          <div className="options-buttons">
            <button className="option-button google">Google</button>
            <button className="option-button facebook">Facebook</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
