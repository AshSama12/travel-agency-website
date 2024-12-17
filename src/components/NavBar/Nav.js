import React from 'react';
import { Link } from 'react-router-dom';
import Profile from '../Profile/profile'; // Import Profile component
import './Nav.css';

function Nav() {
  return (
    <nav className="nav">
      <div className="nav-logo">
        <Link to="/" className="nav-item">Vista Lanka</Link>
      </div>
      <ul className="nav-links">
        <li><Link className="nav-item" to="/">Home</Link></li>
        <li><Link className="nav-item" to="/about">About</Link></li>
        <li><Link className="nav-item" to="/reviews">Reviews</Link></li>
        <li><Link className="nav-item" to="/packages">Packages</Link></li>
        <li><Link className="nav-item" to="/contact">Contact</Link></li>
      </ul>
      <div className="profile-container">
        <Profile />
      </div>
    </nav>
  );
}

export default Nav;
