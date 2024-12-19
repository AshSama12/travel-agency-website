import React from 'react';
import './Booking.css';
import background from '../../assets/background.png';

import flag from '../../assets/flag.png'; // Add your flag image
import sigiriya from '../../assets/sigiriya.png';
import yarla from '../../assets/yarla.png';
import fort from '../../assets/fort.png';
import kandy from '../../assets/kandy.png';

function Booking() {
  return (
    <div className="booking-container" style={{ backgroundImage: `url(${background})` }}>
      {/* Blurred background */}
      <div className="booking-content">
        {/* Left side: Logo */}
        <div className="booking-left">
        
        </div>

        {/* Right side: Content */}
        <div className="booking-right">
          <h1 className="booking-heading">Booking Your Trip Now</h1>
          <div className="flag-container">
            <img src={flag} alt="Flag" className="flag-image" />
          </div>
          
          {/* Question with radio buttons */}
          <div className="traveler-question">
            <p>Your are which type of traveler?</p>
            <label>
              <input type="radio" name="travelerType" value="solo" /> Solo
            </label>
            <label>
              <input type="radio" name="travelerType" value="group" /> Group
            </label>
          </div>

          {/* Customize Package Section */}
          <div className="customize-package">
            <h2>Customize Your Package</h2>
          </div>

          {/* Booking Button */}
          <div className="button-container">
            <button className="book-now-button">Now</button>
          </div>
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
