import React, { useState, useEffect } from "react";
import "../styles/HeroSection.css";

const HeroSection = () => {

  useEffect(() => {
      // Reset scroll position on every route change
      window.scrollTo(0, 0);
    });
  const [showModal, setShowModal] = useState(false);

  const handleModalToggle = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="hero-section">
      {/* Background overlay */}
      <div className="hero-overlay">
        {/* Right Side (Interactive Content) */}
        <div className="hero-right">
          <div className="carousel">
            <h2>Your Perfect Event, Our Passion</h2>
            <p>Transforming Moments into Memories. A celebration, an adventure, or a simple retreat—it all begins here. </p>
            <button className="hero-explore">Explore Adventures</button>
          </div>
        </div>

        {/* Left Side (Content & Buttons) */}
        <div className="hero-left">
          <h1 className="hero-title">Adventure lives here! For thrill-seekers and serenity-lovers alike.</h1>
          <p className="hero-subtitle"></p>
          <div className="button-group">
            <button className="hero-book-primary">Book an Adventure</button>
            <button
              className="hero-book-secondary"
              onClick={handleModalToggle}
            >
              Plan Your Event
            </button>
          </div>
        </div>
      </div>

      {/* Modal for Reservation Form */}
      {showModal && (
        <div className="modal-overlay" onClick={handleModalToggle}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
          >
            <h2>Plan Your Event</h2>
            <form>
              <div className="form-group">
                <label htmlFor="check-in">Check-in Date</label>
                <input type="date" id="check-in" />
              </div>
              <div className="form-group">
                <label htmlFor="services">Select Service</label>
                <select id="services">
                  <option value="conference">Conference Services</option>
                  <option value="catering">Catering</option>
                  <option value="zip-lining">Zip Lining</option>
                  <option value="horse-riding">Horse Riding</option>
                </select>
              </div>
              <button type="submit" className="form-submit-button">
                Reserve Now
              </button>
            </form>
            <button className="modal-close" onClick={handleModalToggle}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeroSection;
