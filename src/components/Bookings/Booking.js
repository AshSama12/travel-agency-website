import React from 'react';
import { useNavigate } from 'react-router-dom'; // For navigation
import './Booking.css';
import background from '../../assets/background.png';

import flag from '../../assets/flag.png'; 
import sigiriya from '../../assets/sigiriya.png';
import yarla from '../../assets/yarla.png';
import fort from '../../assets/fort.png';
import kandy from '../../assets/kandy.png';

function Booking() {
  const navigate = useNavigate(); // Hook for navigation

  return (
    <div className="booking-container" style={{ backgroundImage: `url(${background})` }}>
      {/* Flag Section */}
      <div className="flag-container">
        <img src={flag} alt="Flag" className="flag-image" />
      </div>

      {/* Blurred Middle Section */}
      <div className="booking-content">
        <h1 className="booking-heading">Booking Your Trip Now</h1>

        {/* Traveler Question */}
        <div className="traveler-question">
          <p className="traveler-title">You are which type of traveler?</p>
          <div className="radio-buttons">
            <label>
              <input type="radio" name="travelerType" value="solo" /> Solo
            </label>
            <label>
              <input type="radio" name="travelerType" value="group" /> Group
            </label>
          </div>
        </div>

        {/* Booking Button */}
        <div className="button-container">
          <button
            className="book-now-button"
            onClick={() => navigate('/packages')} // Redirect to Packages page
          >
            Now
          </button>
        </div>
      </div>

      {/* Most Famous Areas Section */}
      <div className="famous-areas">
        <h2>Most Famous Areas</h2>
        <div className="areas-images">
          <img src={sigiriya} alt="Sigiriya" className="area-image" />
          <img src={yarla} alt="Yarla" className="area-image" />
          <img src={fort} alt="Fort" className="area-image" />
          <img src={kandy} alt="Kandy" className="area-image" />
        </div>
      </div>
    </div>
  );
}

export default Booking;
