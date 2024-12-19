import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Registration2.css";
import background from "../../assets/background.png";
import logo from "../../assets/logo.png"; // Logo

const Registration2 = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        emergencyName: "",
        relationship: "",
        emergencyPhone: "",
    });

    const [errors, setErrors] = useState({});

    // Handle form input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Validate form inputs
    const validateForm = () => {
        const newErrors = {};

        if (!formData.emergencyName.trim()) newErrors.emergencyName = "Name is required.";
        if (!formData.relationship.trim()) newErrors.relationship = "Relationship is required.";
        if (!formData.emergencyPhone.trim()) newErrors.emergencyPhone = "Phone Number is required.";

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    const handleBack = () => {
        navigate("/registration1"); // Navigate back to the Registration1 page
    };

    const handleNext = () => {
        if (validateForm()) {
            console.log("Emergency Information Submitted:", formData);
            navigate("/registration3"); // Navigate to the Registration3 page
        }
    };

    return (
        <div className="registration2-container">
           

            {/* Logo */}
            <img src={logo} alt="Logo" className="registration2-logo" />

            {/* Background with blur */}
            <div
                className="registration2-background"
                style={{ backgroundImage: `url(${background})` }}
            ></div>
            <div className="registration2-overlay"></div>

            {/* Content */}
            <div className="registration2-content">
                <h1 className="registration2-title">Register As a Traveller</h1>
                <h2 className="registration2-subtitle">Emergency Information</h2>
                <form className="registration2-form">
                    <label>
                        Name
                        <input
                            type="text"
                            name="emergencyName"
                            value={formData.emergencyName}
                            onChange={handleChange}
                            placeholder="Enter emergency contact name"
                        />
                        {errors.emergencyName && <span className="error">{errors.emergencyName}</span>}
                    </label>
                    <label>
                        Relationship
                        <input
                            type="text"
                            name="relationship"
                            value={formData.relationship}
                            onChange={handleChange}
                            placeholder="Enter relationship"
                        />
                        {errors.relationship && <span className="error">{errors.relationship}</span>}
                    </label>
                    <label>
                        Phone Number
                        <input
                            type="text"
                            name="emergencyPhone"
                            value={formData.emergencyPhone}
                            onChange={handleChange}
                            placeholder="Enter phone number"
                        />
                        {errors.emergencyPhone && <span className="error">{errors.emergencyPhone}</span>}
                    </label>
                </form>

                {/* Buttons */}
                <div className="registration2-buttons">
                    <button onClick={handleBack} className="registration2-button">
                        Back
                    </button>
                    <button onClick={handleNext} className="registration2-button">
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Registration2;
