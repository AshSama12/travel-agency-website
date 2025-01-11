import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./RegistrationHome.css";
import logo from "../../assets/logo.png";
import searchIcon from "../../assets/search.png";
import background from "../../assets/background.png";

// Import the famous place images
import famous1 from "../../assets/famous1.jpg";
import famous2 from "../../assets/famous2.jpg";
import famous3 from "../../assets/famous3.jpg";
import famous4 from "../../assets/famous4.jpg";

const RegistrationHome = () => {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState("");

    const handleRegisterNow = () => {
        navigate("/registration1");
    };

    const handleSearch = () => {
        // Redirect to Search.js with query params for the search term
        navigate(`/search?query=${encodeURIComponent(searchTerm)}`);
    };

    return (
        <div className="registration-container">
            {/* Background image with blur */}
            <div
                className="registration-background"
                style={{ backgroundImage: `url(${background})` }}
            ></div>
            <div className="registration-overlay"></div>

            {/* Header */}
            <header className="registration-header">
                <img src={logo} alt="Logo" className="registration-logo" />
            </header>

            {/* Main content */}
            <main className="registration-center">
                <div className="registration-rectangle">
                    <h1 className="registration-title">
                        Explore The Sri Lanka With Your Ease
                    </h1>
                    <p className="registration-subtitle">
                        REGISTER AND START YOUR JOURNEY NOW...
                    </p>
                    <button
                        className="registration-button"
                        onClick={handleRegisterNow}
                    >
                        Register Now
                    </button>

                    <div className="registration-search">
                        <input
                            type="text"
                            placeholder="Search for places..."
                            className="search-input"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <img
                            src={searchIcon}
                            alt="Search"
                            className="search-icon"
                            onClick={handleSearch}
                        />
                    </div>
                </div>

                {/* Famous Places Section */}
                <section className="famous-places-section">
                    <h2 className="famous-places-title">Famous Places to Explore</h2>
                    <div className="famous-places-grid">
                        <img
                            src={famous1}
                            alt="Famous Place 1"
                            className="famous-place"
                        />
                        <img
                            src={famous2}
                            alt="Famous Place 2"
                            className="famous-place"
                        />
                        <img
                            src={famous3}
                            alt="Famous Place 3"
                            className="famous-place"
                        />
                        <img
                            src={famous4}
                            alt="Famous Place 4"
                            className="famous-place"
                        />
                    </div>
                </section>
            </main>
        </div>
    );
};

export default RegistrationHome;
