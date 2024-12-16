// src/components/LogOut/Logout.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Logout.css';

const Logout = () => {
  const navigate = useNavigate();

  const handleSignInAgain = () => {
    navigate('/signin');
  };

  return (
    <div className="logout-container">
      <div className="logout-content">
        <h1>You have been logged out</h1>
        <p>Thank you for visiting. Please sign in again to continue.</p>
        <button onClick={handleSignInAgain} className="btn-signin">
          Sign In Again
        </button>
      </div>
    </div>
  );
};

export default Logout;
