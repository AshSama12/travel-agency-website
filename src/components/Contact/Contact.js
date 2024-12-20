import React from "react";
import { FaEnvelope, FaWhatsapp } from "react-icons/fa";
import './Contact.css';

// Correct relative paths
import phoneIcon from '../../assets/TelephoneInboundFill.png';
import chatIcon from '../../assets/ChatLeftDotsFill.png';
import emailIcon from '../../assets/EnvelopeFill.png';

const Contact = () => {

  // Function to copy number to clipboard
  const copyToClipboard = (phoneNumber) => {
    navigator.clipboard.writeText(phoneNumber)
      .then(() => alert(`Phone number ${phoneNumber} copied to clipboard!`))
      .catch((err) => console.error('Failed to copy: ', err));
  };

  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <div className="contact-icons">
        {/* Call Us Section */}
        <div className="contact-item">
          <img 
            src={phoneIcon}  // Using imported image here
            alt="Telephone" 
            className="contact-icon"
          />
          <div className="contact-details">
            <p className="contact-title">Call Us:</p>
            <div className="phone-numbers">
              <span className="phone-number" onClick={() => copyToClipboard('+94 777 123 456')}>+94 777 123 456</span>
              <span className="phone-number" onClick={() => copyToClipboard('+94 777 987 654')}>+94 777 987 654</span>
            </div>
          </div>
        </div>
        
        {/* Chat with Us Section */}
        <div className="contact-item">
          <img 
            src={chatIcon}  // Using imported image here
            alt="Message" 
            className="contact-icon"
          />
          <div className="contact-details">
            <p className="contact-title">Chat with Us:</p>
            <button className="chat-button" onClick={() => window.location.href = 'https://wa.me/94777123456'}>
              <FaWhatsapp size={20} color="#25D366" /> Chat Now
            </button>
          </div>
        </div>

        {/* Email Us Section */}
        <div className="contact-item">
          <img 
            src={emailIcon}  // Using imported image here
            alt="Email" 
            className="contact-icon"
          />
          <div className="contact-details">
            <p className="contact-title">Email Us:</p>
            <a href="mailto:vistalanka@gmail.com" className="email-button">
              <FaEnvelope size={20} color="#0077b5" /> vistalanka@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
