import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Packages.css";
import background from "../../assets/background.png";
import basicImage from "../../assets/basic.png";
import searchIcon from "../../assets/search.png";

const packages = [
  { id: 1, title: "Cultural Gems", description: "Explore Sri Lanka's iconic heritage sites like Sigiriya and Polonnaruwa.", tags: ["heritage", "culture", "history", "Sigiriya", "Polonnaruwa"] },
  { id: 2, title: "Beach Bliss", description: "Relax on the pristine beaches of Mirissa and Bentota.", tags: ["beach", "relax", "Mirissa", "Bentota", "ocean"] },
  { id: 3, title: "Misty Hills", description: "Discover tea plantations, waterfalls, and scenic train rides in Ella and Nuwara Eliya.", tags: ["mountain", "tea plantations", "Ella", "Nuwara Eliya", "hills"] },
  { id: 4, title: "Wildlife Quest", description: "Spot leopards and elephants on thrilling safaris in Yala and Wilpattu.", tags: ["wildlife", "safari", "Yala", "Wilpattu", "leopards", "elephants"] },
  { id: 5, title: "Urban Vibes", description: "Dive into the vibrant city life of Colombo and Galle.", tags: ["city", "Colombo", "Galle", "urban"] },
  { id: 6, title: "Thrill Seeker", description: "Enjoy rafting, hiking, and ziplining adventures in Ella and Kitulgala.", tags: ["adventure", "rafting", "hiking", "Ella", "Kitulgala"] },
  { id: 7, title: "Wellness Retreat", description: "Rejuvenate with Ayurvedic treatments and yoga in serene settings.", tags: ["wellness", "Ayurveda", "yoga", "relaxation"] },
  { id: 8, title: "Island Escape", description: "Visit stunning islands like Pigeon Island and Delft for snorkeling and beaches.", tags: ["island", "snorkeling", "Pigeon Island", "Delft"] },
  { id: 9, title: "Festive Trails", description: "Experience Sri Lanka's grand festivals and cultural events.", tags: ["festivals", "culture", "events"] },
  { id: 10, title: "Family Delight", description: "A fun-filled package with activities for the whole family.", tags: ["family", "kids", "fun", "activities"] },
];

const Packages = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const filteredPackages = packages.filter(
    (pkg) =>
      pkg.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pkg.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const handleViewDetails = (id) => {
    navigate(`/packages/${id}`);
  };

  return (
    <div
      className="packages-container"
      style={{ backgroundImage: `url(${background})` }}
    >
      <h1 className="packages-title">Select Basic Packages</h1>
      <img src={basicImage} alt="Basic Packages" className="basic-image" />

      {/* Search Bar */}
      <div className="search-bar">
        <img src={searchIcon} alt="Search" className="search-icon" />
        <input
          type="text"
          placeholder="Search packages (e.g., family, mountain, beach)"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Packages Grid with Horizontal Scroll */}
      <div className="packages-grid">
        {filteredPackages.length > 0 ? (
          filteredPackages.map((pkg) => (
            <div key={pkg.id} className="package-card">
              <h2>{pkg.title}</h2>
              <p>{pkg.description}</p>
              <button
                className="explore-button"
                onClick={() => handleViewDetails(pkg.id)}
              >
                View
              </button>
            </div>
          ))
        ) : (
          <p className="no-results">No packages found for your search.</p>
        )}
      </div>
    </div>
  );
};

export default Packages;
