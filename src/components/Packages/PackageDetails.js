import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './PackageDetails.css';
import basicImage from '../../assets/basic.png'; // Example image
// Importing each image directly
import BeachBliss from '../../assets/basic packages/Beach Bills.png';
import FamilyDelight from '../../assets/basic packages/Family delight.png';
import FestiveTrails from '../../assets/basic packages/festive trails.png';
import HeritageExplore from '../../assets/basic packages/Heritage Explore.png';
import IslandEscape from '../../assets/basic packages/island Escape.png';
import MistyHills from '../../assets/basic packages/misty hills.png';
import UrbanVibes from '../../assets/basic packages/Urban vibes.png';
import ThrillSeeker from '../../assets/basic packages/Thrill seeker.png';
import WellnessRetreat from '../../assets/basic packages/Wellness and retreat.png';
import WildlifeQuest from '../../assets/basic packages/wildlife quest.png';

const PackageDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Array of images corresponding to package IDs
  const images = [
    HeritageExplore, 
    BeachBliss, 
    MistyHills, 
    WildlifeQuest, 
    UrbanVibes, 
    ThrillSeeker, 
    WellnessRetreat, 
    IslandEscape, 
    FestiveTrails,
    WellnessRetreat,
    FamilyDelight,
  ];

  const selectedImage = images[id] || basicImage; // Default to basicImage if ID is out of range

  return (
    <div className="package-details">
      <img src={selectedImage} alt="Selected Package" className="package-image" />
      <div className="button-group">
        <button onClick={() => navigate(-1)} className="back-button">Go Back</button>
        <button onClick={() => alert('Booked Successfully!')} className="book-button">Book Now</button>
      </div>
    </div>
  );
};

export default PackageDetails;
