import React from 'react';
import './About.css'; // Import the CSS file
import logo from '../../assets/logo.png'; // Correct path to logo.png
import background from '../../assets/background.png'; // Import the background image

const About = () => {
  return (
    <div
      className="about-container"
      style={{
        backgroundImage: `url(${background})`, // Use the imported background
      }}
    >
      {/* About Section */}
      <div className="about-content">
        {/* Animated Logo */}
        <img src={logo} alt="Vista Lanka Logo" className="about-logo" />

        {/* About Text */}
        <div className="about-text">
          <h1>About Vista Lanka</h1>
          <p>
            Welcome to Vista Lanka, your ultimate travel companion in exploring the beauty of Sri Lanka.
            From pristine beaches to lush green hills, and cultural landmarks to wildlife safaris,
            we offer unparalleled travel experiences tailored to your preferences. Discover the wonders
            of this tropical paradise with our expert guidance, reliable services, and special offers.
            Your adventure begins here!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
