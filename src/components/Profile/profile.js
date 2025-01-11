import React from "react";
import { Link } from "react-router-dom";
import "./profile.css";

function Profile({ toggleMenu }) {
  return (
    <div className="profile-menu-container">
      <ul className="profile-menu">
        <li>
          <Link to="/signin" onClick={toggleMenu}>
            Sign In
          </Link>
        </li>
        <li>
          <Link to="/signup" onClick={toggleMenu}>
            Sign Up
          </Link>
        </li>
        <li>
          <Link to="/registration" onClick={toggleMenu}>
            Registration
          </Link>
        </li>
        <li>
          <Link to="/logout" onClick={toggleMenu}>
            Logout
          </Link>
        </li>
        <li>
          <Link to="/viewprofile" onClick={toggleMenu}>
            View Profile
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Profile;
