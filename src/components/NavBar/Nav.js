import React, { useState } from "react";
import { Link } from "react-router-dom";
import Profile from "../Profile/profile"; // Import Profile component
import "./Nav.css";
import logo from "../../assets/logo.png"; // Import your logo
import personCircle from "../../assets/PersonCircle.png"; // Import personal circle image
import menuIcon from "../../assets/menu.png"; // Import menu icon

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false); // State to toggle profile menu
  const [navOpen, setNavOpen] = useState(false); // State to toggle navigation menu

  // Toggle function for the profile menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Toggle function for the navigation menu
  const toggleNav = () => {
    setNavOpen(!navOpen);
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

      {/* Menu Icon for Small Screens */}
      <img
        src={menuIcon}
        alt="Menu Icon"
        className="menu-icon"
        onClick={toggleNav}
      />

      {/* Navigation Links */}
      <ul className={`nav-links ${navOpen ? "nav-open" : ""}`}>
        <li>
          <Link className="nav-item" to="/" onClick={toggleNav}>
            Home
          </Link>
        </li>
        <li>
          <Link className="nav-item" to="/about" onClick={toggleNav}>
            About
          </Link>
        </li>
        <li>
          <Link className="nav-item" to="/reviews" onClick={toggleNav}>
            Reviews
          </Link>
        </li>
        <li>
          <Link className="nav-item" to="/packages" onClick={toggleNav}>
            Packages
          </Link>
        </li>
        <li>
          <Link className="nav-item" to="/contact" onClick={toggleNav}>
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
