import React from "react";
import { useNavigate } from "react-router-dom";
import "./RegistrationHome.css";
import logo from "../../assets/logo.png";
import profileLogo from "../../assets/PersonCircle.png";
import searchIcon from "../../assets/search.png";
import background from "../../assets/background.png";

const RegistrationHome = () => {
    const navigate = useNavigate();

    const handleRegisterNow = () => {
        navigate("/registration1");
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
                <nav className="registration-nav">
                    <span className="registration-nav-item">Home</span>
                    <span className="registration-nav-item">About</span>
                    <span className="registration-nav-item">Reviews</span>
                    <span className="registration-nav-item">Packages</span>
                    <span className="registration-nav-item">Contact</span>
                    <img
                        src={profileLogo}
                        alt="Profile"
                        className="registration-profile"
                    />
                </nav>
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
                            placeholder="Search..."
                            className="search-input"
                        />
                        <img
                            src={searchIcon}
                            alt="Search"
                            className="search-icon"
                        />
                    </div>
                </div>

                {/* Offers Section */}
                <div className="registration-offers">
                    <h2 style={{ color: "white", fontSize: "2rem", marginBottom: "20px" }}>
                        ENJOY OUR OFFERS & DISCOUNTS
                    </h2>
                </div>
            </main>
        </div>
    );
};

export default RegistrationHome;
