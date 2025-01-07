import React, { useState } from 'react';
import './viewProfile.css';
import PersonCircle from '../../assets/PersonCircle2.png'; // Default profile image
import Background from '../../assets/background.png'; // Blurred background
import PenIcon from '../../assets/pen.png'; // Edit icon
function ViewProfile() {
  const [profilePhoto, setProfilePhoto] = useState(PersonCircle);
  const [userData, setUserData] = useState({
    name: 'John Doe',
    email: 'johndoe@example.com',
    country: 'Sri Lanka',
  });

  const handlePhotoChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setProfilePhoto(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleEdit = (field, value) => {
    setUserData({ ...userData, [field]: value });
  };

  return (
    <div
      className="view-profile"
      style={{ backgroundImage: `url(${Background})` }}
    >
      <div className="profile-container">
        <div className="profile-photo-section">
          <img src={profilePhoto} alt="Profile" className="profile-photo" />
          <label htmlFor="photo-upload" className="photo-upload-label">
            Change Photo
          </label>
          <input
            type="file"
            id="photo-upload"
            className="photo-upload-input"
            accept="image/*"
            onChange={handlePhotoChange}
          />
        </div>

        <h2 className="username">{userData.name}</h2>

        <div className="editable-fields">
          <div className="field">
            <span>Name:</span>
            <input
              type="text"
              value={userData.name}
              onChange={(e) => handleEdit('name', e.target.value)}
            />
            <img src={PenIcon} alt="Edit" className="edit-icon" />
          </div>
          <div className="field">
            <span>Email:</span>
            <input
              type="email"
              value={userData.email}
              onChange={(e) => handleEdit('email', e.target.value)}
            />
            <img src={PenIcon} alt="Edit" className="edit-icon" />
          </div>
          <div className="field">
            <span>Country:</span>
            <input
              type="text"
              value={userData.country}
              onChange={(e) => handleEdit('country', e.target.value)}
            />
            <img src={PenIcon} alt="Edit" className="edit-icon" />
          </div>
        </div>

        <div className="options">
          <button className="option-button">Booking History</button>
          <button className="option-button">Favorites</button>
          <button className="option-button">Manage Bookings</button>
          <button className="option-button">Settings</button>
        </div>
      </div>
    </div>
  );
}

export default ViewProfile;
