import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './profile.css';
import PersonCircle from '../../assets/PersonCircle.png'; // Adjust path as needed

function Profile() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="profile">
      <img
        src={PersonCircle}
        alt="Profile Icon"
        className="profile-icon"
        onClick={toggleMenu}
      />
      {menuOpen && (
        <ul className="profile-menu">
          <li><Link to="/signin" onClick={toggleMenu}>Sign In</Link></li>
          <li><Link to="/signup" onClick={toggleMenu}>Sign Up</Link></li>
          <li><Link to="/registration" onClick={toggleMenu}>Registration</Link></li>
          <li><Link to="/logout" onClick={toggleMenu}>Logout</Link></li>
          <li><Link to="/viewprofile" onClick={toggleMenu}>View Profile</Link></li>
          
        </ul>
      )}
    </div>
  );
}

export default Profile;
