import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Slider.css";
import ChevronCompactRight from "../../assets/ChevronCompactRight.png";
import ExploreNowButton from "../../assets/explorNow.png";

const images = [
  require("../../assets/Desktop - 6.png"),
  require("../../assets/Desktop - 7.png"),
  require("../../assets/Desktop - 8.png"),
  require("../../assets/Desktop - 9.png"),
  require("../../assets/Desktop - 10.png"),
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handleExploreNow = () => {
    navigate("/signin");
  };

  return (
    <div className="slider-container">
      <div className="slider">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="slider-image"
        />
        <button className="next-button" onClick={handleNext}>
          <img src={ChevronCompactRight} alt="Next" />
        </button>
        <div className="explore-now-container">
          <img
            src={ExploreNowButton}
            alt="Explore Now"
            className="explore-now-button"
            onClick={handleExploreNow}
          />
        </div>
      </div>
    </div>
  );
};

export default Slider;
