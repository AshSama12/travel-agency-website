import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./Home.css";
import logo from "../../assets/logo.png";
import profileLogo from "../../assets/PersonCircle.png";
import searchIcon from "../../assets/search.png";
import frame17 from "../../assets/Frame 17.png";
import frame18 from "../../assets/Frame 18.png";
import frame19 from "../../assets/Frame 19.png";
import frame20 from "../../assets/Frame 21.png";

const Home = () => {
    const navigate = useNavigate(); // Initialize navigate

    const handleBookingClick = () => {
        navigate("/booking"); // Redirect to booking page
    };

    return (
        <div className="home-container">
            {/* Background image with blur */}
            <div className="home-background"></div>
            <div className="home-overlay"></div>

            {/* Header */}
            <header className="home-header">
                <img src={logo} alt="Logo" className="home-logo" />
                <nav className="home-nav">
                    <span className="home-nav-item">Home</span>
                    <span className="home-nav-item">About</span>
                    <span className="home-nav-item">Reviews</span>
                    <span className="home-nav-item">Packages</span>
                    <span className="home-nav-item">Contact</span>
                    <img src={profileLogo} alt="Profile" className="home-profile" />
                </nav>
            </header>

            {/* Main content */}
            <main className="home-center">
                <div className="home-rectangle">
                    <h1 className="home-title">Explore The Sri Lanka With Your Ease</h1>
                    <p className="home-subtitle">START YOUR BOOKING NOW...</p>
                    <button className="home-button" onClick={handleBookingClick}>
                        BOOKING NOW
                    </button>

                    <div className="home-search">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="search-input"
                        />
                        <img src={searchIcon} alt="Search" className="search-icon" />
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
