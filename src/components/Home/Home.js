import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import logo from "../../assets/logo.png";
import searchIcon from "../../assets/search.png";
import frame17 from "../../assets/Frame 17.png";
import frame18 from "../../assets/Frame 18.png";
import frame19 from "../../assets/Frame 19.png";
import frame20 from "../../assets/Frame 21.png";

const Home = () => {
    const navigate = useNavigate(); // Initialize navigate
    const [searchTerm, setSearchTerm] = useState(""); // State to track search input

    const handleSearch = () => {
        if (searchTerm.trim()) {
            navigate(`/search?query=${searchTerm}`); // Redirect to Search page with query
        } else {
            navigate("/search"); // Redirect to Search page without query
        }
    };

    const handleKeyPress = (event) => {
        if (event.key === "Enter") {
            handleSearch(); // Trigger search on Enter key
        }
    };

    const handleBooking = () => {
        navigate("/booking"); // Redirect to the booking page
    };

    return (
        <div className="home-container">
            {/* Background image with blur */}
            <div className="home-background"></div>
            <div className="home-overlay"></div>

            {/* Header */}
            <header className="home-header">
                <img src={logo} alt="Logo" className="home-logo" />
            </header>

            {/* Main content */}
            <main className="home-center">
                <div className="home-rectangle">
                    <h1 className="home-title">Explore The Sri Lanka With Your Ease</h1>
                    <p className="home-subtitle animated-text">
                        START YOUR BOOKING NOW...
                    </p>

                    {/* Booking Now Button */}
                    <button className="booking-button" onClick={handleBooking}>
                        BOOKING NOW
                    </button>

                    {/* Search bar */}
                    <div className="home-search">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="search-input"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            onKeyDown={handleKeyPress} // Handle Enter key press
                        />
                        <img
                            src={searchIcon}
                            alt="Search"
                            className="search-icon"
                            onClick={handleSearch} // Trigger search on icon click
                        />
                    </div>
                </div>

                {/* Offers Section */}
                <div className="home-offers">
                    <h2 style={{ color: "white", fontSize: "2rem", marginBottom: "20px" }}>
                        TODAY OFFERS & DISCOUNTS
                    </h2>
                    <div className="offers-images">
                        <img src={frame17} alt="Offer 1" className="offer-image" />
                        <img src={frame18} alt="Offer 2" className="offer-image" />
                        <img src={frame19} alt="Offer 3" className="offer-image" />
                        <img src={frame20} alt="Offer 4" className="offer-image" />
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Home;
