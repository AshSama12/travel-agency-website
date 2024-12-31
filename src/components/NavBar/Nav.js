import React from 'react';
import { Link } from 'react-router-dom';
import Profile from '../Profile/profile'; // Import Profile component
import './Nav.css';
import logo from '../../assets/logo.png'; // Import your logo

function Nav() {
  return (
    <nav className="nav">
      {/* Logo Section */}
      <div className="nav-logo">
        <img src={logo} alt="Vista Lanka Logo" className="nav-logo-img" />
        <Link to="/" className="nav-logo-name">Vista Lanka</Link>
      </div>

      {/* Navigation Links */}
      <ul className="nav-links">
        <li><Link className="nav-item" to="/">Home</Link></li>
        <li><Link className="nav-item" to="/about">About</Link></li>
        <li><Link className="nav-item" to="/reviews">Reviews</Link></li>
        <li><Link className="nav-item" to="/packages">Packages</Link></li>
        <li><Link className="nav-item" to="/contact">Contact</Link></li>
      </ul>

      {/* Profile Icon */}
      <div className="profile-container">
        <Profile />
      </div>
    </nav>
  );
}

export default Nav;
