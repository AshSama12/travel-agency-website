import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Registration3.css"; // Import corresponding CSS
import background from "../../assets/background.png";
import profileIcon from "../../assets/icons/PersonCircle.png"; // Profile Icon
import logo from "../../assets/logo.png"; // Logo

const Registration3 = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    medicalCondition: "no",
    specifyCondition: "",
    vaccinated: "no",
  });

  const [errors, setErrors] = useState({});

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (formData.medicalCondition === "yes" && !formData.specifyCondition.trim()) {
      newErrors.specifyCondition = "Please specify your medical condition or allergies.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleBack = () => {
    navigate("/registration2"); // Navigate to Registration2
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    if (validateForm()) {
      console.log("Health & Safety Information Submitted:", formData);
      alert("Registration Step 3 Completed!");
      navigate("/"); // Navigate to Home page
    }
  };

  return (
    <div className="registration3-container">
      {/* Profile Icon */}
      <img src={profileIcon} alt="Profile" className="profile-icon" />

      {/* Logo */}
      <img src={logo} alt="Logo" className="registration3-logo" />

      {/* Background with blur */}
      <div
        className="registration3-background"
        style={{ backgroundImage: `url(${background})` }}
      ></div>
      <div className="registration3-overlay"></div>

      {/* Content */}
      <div className="registration3-content">
        <h1 className="registration3-title">Register As a Traveller</h1>
        <h2 className="registration3-subtitle">Health & Safety Information</h2>
        <form className="registration3-form" onSubmit={handleSubmit}>
          <label>
            Do you have any medical condition or allergies?
            <div>
              <label>
                <input
                  type="radio"
                  name="medicalCondition"
                  value="yes"
                  checked={formData.medicalCondition === "yes"}
                  onChange={handleChange}
                />{" "}
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  name="medicalCondition"
                  value="no"
                  checked={formData.medicalCondition === "no"}
                  onChange={handleChange}
                />{" "}
                No
              </label>
            </div>
          </label>
          {formData.medicalCondition === "yes" && (
            <label>
              Please Specify
              <input
                type="text"
                name="specifyCondition"
                value={formData.specifyCondition}
                onChange={handleChange}
                placeholder="Specify your medical condition"
              />
              {errors.specifyCondition && (
                <span className="error">{errors.specifyCondition}</span>
              )}
            </label>
          )}

          <label>
            Are you vaccinated against COVID-19?
            <div>
              <label>
                <input
                  type="radio"
                  name="vaccinated"
                  value="yes"
                  checked={formData.vaccinated === "yes"}
                  onChange={handleChange}
                />{" "}
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  name="vaccinated"
                  value="no"
                  checked={formData.vaccinated === "no"}
                  onChange={handleChange}
                />{" "}
                No
              </label>
            </div>
          </label>

          {/* Buttons */}
          <div className="registration3-buttons">
            <button
              type="button"
              onClick={handleBack}
              className="registration3-button"
            >
              Back
            </button>
            <button type="submit" className="registration3-button">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registration3;
