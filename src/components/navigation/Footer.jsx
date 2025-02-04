import React, { useState } from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import '../styles/Footer.css';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      // Placeholder for email submission logic (e.g., call an API)
      setSuccessMessage('Thank you for subscribing!');
      setEmail('');
    } else {
      setSuccessMessage('Please enter a valid email.');
    }
  };

  return (
    <footer className="footer">
      {/* Logo and Heading Section */}
      <div className="footer-logo-section">
        <h1 className="footer-heading">Highlands Training Centre</h1>
      </div>

      <div className="footer-container">
        {/* Contact Information Section */}
        <div className="footer-section">
          <h3>Reach Out</h3>
          <ul>
            <li>
              <span>Chebarbar Juction</span>
            </li>
            <li>
              <span>(+254) 718-786-098</span>
            </li>
            <li>
              <span>info@highlandstraining.com</span>
            </li>
          </ul>
        </div>

        {/* Quick Links Section */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#" className="social-icon"><FaLinkedin /></a>
            <a href="#" className="social-icon"><FaFacebook /></a>
            <a href="#" className="social-icon"><FaTwitter /></a>
            <a href="#" className="social-icon"><FaInstagram /></a>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="footer-section newsletter">
          <h3>Subscribe to Our Newsletter</h3>
          <form onSubmit={handleSubmit} className="newsletter-form">
            <input
              type="email"
              className="newsletter-input"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" className="newsletter-button">Subscribe</button>
          </form>
          {successMessage && <p className="newsletter-message">{successMessage}</p>}
        </div>
      </div>

      {/* Copyright Section */}
      <div className="footer-bottom">
        <p>&copy; 2025 Highlands Training Centre. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
