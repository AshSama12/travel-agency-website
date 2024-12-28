import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Packages.css'; // Import the CSS file
import basicPackage from '../../assets/Frame 22.png'; // Basic package image
import premiumPackage from '../../assets/Frame 23.png'; // Premium package image

const Packages = () => {
  const navigate = useNavigate();

  const handlePremiumClick = () => {
    navigate('/premium'); // Navigate to Premium page
  };

  const handleBasicClick = () => {
    navigate('/basic'); // Navigate to Basic page
  };

  return (
    <div className="packages-container">
      {/* Blurred Background */}
      <div className="packages-background"></div>

      {/* Page Heading */}
      <h1 className="packages-heading">Customize Your Package</h1>

      {/* Packages Section */}
      <div className="packages-options">
        {/* Basic Package */}
        <div
          className="package-card"
          onClick={handleBasicClick}
          style={{ cursor: 'pointer' }}
        >
          <img src={basicPackage} alt="Basic Package" className="package-image" />
          <h2>Basic Package</h2>
          <p>Perfect for short trips and budget-friendly adventures.</p>
        </div>

        {/* Premium Package */}
        <div
          className="package-card"
          onClick={handlePremiumClick}
          style={{ cursor: 'pointer' }}
        >
          <img src={premiumPackage} alt="Premium Package" className="package-image" />
          <h2>Premium Package</h2>
          <p>Enjoy luxurious travel with exclusive features and services.</p>
        </div>
      </div>
    </div>
  );
};

export default Packages;
