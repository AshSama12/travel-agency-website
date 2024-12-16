import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Registration1.css";
import background from "../../assets/background.png";

const Registration1 = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        dob: "",
        gender: "",
        address: "",
        country: "",
        phone: "",
        email: "",
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

        if (!formData.firstName.trim()) newErrors.firstName = "First Name is required.";
        if (!formData.lastName.trim()) newErrors.lastName = "Last Name is required.";
        if (!formData.dob) newErrors.dob = "Date of Birth is required.";
        if (!formData.gender) newErrors.gender = "Gender is required.";
        if (!formData.address.trim()) newErrors.address = "Address is required.";
        if (!formData.country.trim()) newErrors.country = "Country is required.";
        if (!formData.phone.trim()) newErrors.phone = "Phone Number is required.";
        if (!formData.email.trim()) newErrors.email = "Email is required.";

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    const handleBack = () => {
        navigate("/registration"); // Navigate back to the Registration Home page
    };

    const handleNext = () => {
        if (validateForm()) {
            // Navigate to the next step in the registration process
            console.log("Form submitted:", formData);
            navigate("/registration2"); // Adjust the path for the next step
        }
    };

    return (
        <div className="registration1-container">
            {/* Background with blur */}
            <div
                className="registration1-background"
                style={{ backgroundImage: `url(${background})` }}
            ></div>
            <div className="registration1-overlay"></div>

            {/* Content */}
            <div className="registration1-content">
                <h1 className="registration1-title">Register As a Traveller</h1>
                <form className="registration1-form">
                    <label>
                        First Name
                        <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            placeholder="Enter your first name"
                        />
                        {errors.firstName && <span className="error">{errors.firstName}</span>}
                    </label>
                    <label>
                        Last Name
                        <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            placeholder="Enter your last name"
                        />
                        {errors.lastName && <span className="error">{errors.lastName}</span>}
                    </label>
                    <label>
                        Date of Birth
                        <input
                            type="date"
                            name="dob"
                            value={formData.dob}
                            onChange={handleChange}
                        />
                        {errors.dob && <span className="error">{errors.dob}</span>}
                    </label>
                    <label>
                        Gender
                        <select
                            name="gender"
                            value={formData.gender}
                            onChange={handleChange}
                        >
                            <option value="" disabled>
                                Select your gender
                            </option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                        {errors.gender && <span className="error">{errors.gender}</span>}
                    </label>
                    <label>
                        Address
                        <input
                            type="text"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            placeholder="Enter your address"
                        />
                        {errors.address && <span className="error">{errors.address}</span>}
                    </label>
                    <label>
                        Country
                        <input
                            type="text"
                            name="country"
                            value={formData.country}
                            onChange={handleChange}
                            placeholder="Enter your country"
                        />
                        {errors.country && <span className="error">{errors.country}</span>}
                    </label>
                    <label>
                        Phone Number
                        <input
                            type="text"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="Enter your phone number"
                        />
                        {errors.phone && <span className="error">{errors.phone}</span>}
                    </label>
                    <label>
                        Email
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                        />
                        {errors.email && <span className="error">{errors.email}</span>}
                    </label>
                </form>

                {/* Buttons */}
                <div className="registration1-buttons">
                    <button onClick={handleBack} className="registration1-button">
                        Back
                    </button>
                    <button onClick={handleNext} className="registration1-button">
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Registration1;
