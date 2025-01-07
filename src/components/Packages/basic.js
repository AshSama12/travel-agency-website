import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './basic.css';
import basicImage from '../../assets/basic.png';
import searchIcon from '../../assets/search.png';

const packages = [
  { name: "Cultural Gems", tags: ["heritage", "culture", "history", "Sigiriya", "Polonnaruwa"] },
  { name: "Beach Bliss", tags: ["beach", "relax", "Mirissa", "Bentota", "ocean"] },
  { name: "Misty Hills", tags: ["mountain", "tea plantations", "Ella", "Nuwara Eliya", "hills"] },
  { name: "Wildlife Quest", tags: ["wildlife", "safari", "Yala", "Wilpattu", "leopards", "elephants"] },
  { name: "Urban Vibes", tags: ["city", "Colombo", "Galle", "urban"] },
  { name: "Thrill Seeker", tags: ["adventure", "rafting", "hiking", "Ella", "Kitulgala"] },
  { name: "Wellness Retreat", tags: ["wellness", "Ayurveda", "yoga", "relaxation"] },
  { name: "Island Escape", tags: ["island", "snorkeling", "Pigeon Island", "Delft"] },
  { name: "Festive Trails", tags: ["festivals", "culture", "events"] },
  { name: "Family Delight", tags: ["family", "kids", "fun", "activities"] },
];

const Basic = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const filteredPackages = packages.filter(pkg =>
    pkg.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    pkg.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="basic-packages">
      <h1>Select Basic Packages</h1>
      <img src={basicImage} alt="Basic Packages" className="basic-image" />
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search your package"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img src={searchIcon} alt="Search" className="search-icon" />
      </div>
      <div className="package-list">
        {filteredPackages.map((pkg, index) => (
          <div key={index} className="package-item">
            <h2>{pkg.name}</h2>
            <button 
              className="view-button" 
              onClick={() => navigate(`/package-details/${index}`)}
            >
              View More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Basic;
