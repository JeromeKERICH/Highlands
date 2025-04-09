import React, { useState } from 'react';
import {Link} from 'react-router-dom';
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
            <li><Link to="/">Home</Link></li>
            <li><Link to="/aboutpage">About Us</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/contacts">Contact</Link></li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://www.facebook.com/profile.phd?id=100072167240433" className="social-icon"><FaFacebook /></a>
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
