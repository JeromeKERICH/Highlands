import React, { useState, useEffect } from "react";
import "../styles/HeroSection.css";

const HeroSection = () => {
  useEffect(() => {
    // Reset scroll position on every route change
    window.scrollTo(0, 0);
  });

  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    date: "",
    service: "",
  });

  const handleModalToggle = () => {
    setShowModal(!showModal);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const sendWhatsAppMessage = () => {
    const phoneNumber = "+254702483317"; // Replace with your WhatsApp number
    const { date, service } = formData;
    const message = `Hello, I would like to plan an adventure with the following details:\nDate: ${date}\nService: ${service}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="hero-section">
      {/* Background overlay */}
      <div className="hero-overlay">
        {/* Right Side (Interactive Content) */}
        <div className="hero-right">
          <div className="carousel">
            <h2>Your Perfect Event, Our Passion</h2>
            <p>Transforming Moments into Memories. A celebration, an adventure, or a simple retreat—it all begins here.</p>
            <button className="hero-explore" onClick={() => window.location.href = "tel:+254702483317"}>
              Call Us Today
            </button>
          </div>
        </div>

        {/* Left Side (Content & Buttons) */}
        <div className="hero-left">
          <h1 className="hero-title">Adventure lives here! For thrill-seekers and serenity-lovers alike.</h1>
          <p className="hero-subtitle"></p>
          <div className="button-group">
            <button
              className="hero-book-secondary"
              onClick={handleModalToggle}
            >
              Plan Your Adventure
            </button>
          </div>
        </div>
      </div>

      {/* Modal for Reservation Form */}
      {showModal && (
        <div className="modal-overlay" onClick={handleModalToggle}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()} // Prevent modal close on click
          >
            <h2>Plan Your Adventure</h2>
            <form>
              <div className="form-group">
                <label htmlFor="check-in">Check-in Date</label>
                <input
                  type="date"
                  id="check-in"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="services">Select Service</label>
                <select
                  id="services"
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                >
                  <option value="conference">Conference Services</option>
                  <option value="catering">Catering</option>
                  <option value="zip-lining">Zip Lining</option>
                  <option value="boat-riding">Boat riding</option>
                  <option value="hiking">Hiking</option>
                  <option value="cycling">Bike Cycling</option>
                  <option value="horse-riding">Horse Riding</option>
                </select>
              </div>
              <button
                type="button"
                className="form-submit-button"
                onClick={sendWhatsAppMessage}
              >
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
