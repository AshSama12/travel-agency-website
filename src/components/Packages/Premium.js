import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Premium.css";
import premiumImg from "../../assets/premiumImg.png";
import optionButton from "../../assets/option button.png";
import hotel1 from "../../assets/hotel1.png";
import hotel2 from "../../assets/hotel2.png";
import hotel3 from "../../assets/hotel3.png";

const Premium = () => {
  const [places, setPlaces] = useState([]);
  const [placeInput, setPlaceInput] = useState("");
  const [specialRequest, setSpecialRequest] = useState("");
  const navigate = useNavigate();

  const addPlace = () => {
    if (placeInput.trim() !== "") {
      setPlaces([...places, placeInput]);
      setPlaceInput("");
    }
  };

  const confirmSelection = () => {
    alert(
      `Your premium package has been confirmed!\n\nPlaces: ${places.join(
        ", "
      )}\nSpecial Requests: ${specialRequest}`
    );
    navigate("/cart");
  };

  return (
    <div className="premium-container">
      <img src={premiumImg} alt="Premium" className="premium-img" />
      <h1>Customize Your Premium Package</h1>

      <div className="customization-box">
        <h2>Select Places You Are Interested to Visit</h2>
        <div className="places-input">
          <input
            type="text"
            value={placeInput}
            onChange={(e) => setPlaceInput(e.target.value)}
            placeholder="Enter a place"
          />
          <button onClick={addPlace}>Add Place</button>
        </div>
        <ul className="places-list">
          {places.map((place, index) => (
            <li key={index}>{place}</li>
          ))}
        </ul>

        <h2>Select Transport Type</h2>
        <select>
          <option value="car">Car</option>
          <option value="van">Van</option>
          <option value="bus">Bus</option>
        </select>

        <h2>Accommodation</h2>
        <select>
          <option value="hotel">Hotel</option>
          <option value="villa">Villa</option>
          <option value="apartment">Apartment</option>
        </select>
      </div>

      <button
        className="option-button"
        onClick={() =>
          document.querySelector(".special-requests").style.display = "block"
        }
      >
        <img src={optionButton} alt="Option Button" />
      </button>

      <div className="special-requests" style={{ display: "none" }}>
        <h2>Add Requests for Your Comfort</h2>
        <textarea
          value={specialRequest}
          onChange={(e) => setSpecialRequest(e.target.value)}
          placeholder="Enter your special requests"
        />
      </div>

      <h2>The Popular Luxury Hotels</h2>
      <div className="hotels-gallery">
        <img src={hotel1} alt="Hotel 1" />
        <img src={hotel2} alt="Hotel 2" />
        <img src={hotel3} alt="Hotel 3" />
      </div>

      <div className="driver-guide-box">
        <h2>Do you need a driver?</h2>
        <label>
          <input type="radio" name="driver" value="yes" /> Yes
        </label>
        <label>
          <input type="radio" name="driver" value="no" /> No
        </label>

        <h2>Do you need a guide?</h2>
        <label>
          <input type="radio" name="guide" value="yes" /> Yes
        </label>
        <label>
          <input type="radio" name="guide" value="no" /> No
        </label>
      </div>

      <button className="confirm-button" onClick={confirmSelection}>
        Confirm
      </button>
    </div>
  );
};

export default Premium;
