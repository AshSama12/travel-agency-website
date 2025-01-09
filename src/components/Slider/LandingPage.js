// LandingPage.js
import React from "react";
import { useNavigate } from "react-router-dom";
import Slider from "../Slider/Slider"; // Import the Slider component
import "./LandingPage.css"; // Custom styles for the landing page

const LandingPage = () => {
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate("/login"); // Navigate to the login page
    };

    const handleSignup = () => {
        navigate("/signup"); // Navigate to the signup page
    };

    return (
        <div className="landing-container">
            <div className="landing-slider">
                <Slider /> {/* Include the slider here */}
            </div>
            <div className="landing-buttons">
                <h1>Welcome to Vista Lanka</h1>
                <p>Explore Sri Lanka and start your journey with us!</p>
                <button className="btn-login" onClick={handleLogin}>
                    Login
                </button>
                <button className="btn-signup" onClick={handleSignup}>
                    Signup
                </button>
            </div>
        </div>
    );
};

export default LandingPage;
