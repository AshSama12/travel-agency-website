import React, { useState } from "react";
import { Link } from "react-router-dom";
import Profile from "../Profile/profile"; // Import Profile component
import "./Nav.css";
import logo from "../../assets/logo.png"; // Import your logo
import personCircle from "../../assets/PersonCircle.png"; // Import personal circle image

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false); // State to toggle profile menu

  // Toggle function for the profile menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="nav">
      {/* Logo Section */}
      <div className="nav-logo">
        <img src={logo} alt="Vista Lanka Logo" className="nav-logo-img" />
        <Link to="/" className="nav-logo-name">
          Vista Lanka
        </Link>
      </div>

      {/* Navigation Links */}
      <ul className="nav-links">
        <li>
          <Link className="nav-item" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="nav-item" to="/about">
            About
          </Link>
        </li>
        <li>
          <Link className="nav-item" to="/reviews">
            Reviews
          </Link>
        </li>
        <li>
          <Link className="nav-item" to="/packages">
            Packages
          </Link>
        </li>
        <li>
          <Link className="nav-item" to="/contact">
            Contact
          </Link>
        </li>
        <li>
          {/* Personal Circle Icon */}
          <img
            src={personCircle}
            alt="Personal Circle"
            className="personal-circle"
            onClick={toggleMenu} // Toggle the profile menu
          />
        </li>
      </ul>

      {/* Conditionally Render Profile Menu */}
      {menuOpen && <Profile toggleMenu={toggleMenu} />} {/* Pass toggleMenu */}
    </nav>
  );
}

export default Nav;
