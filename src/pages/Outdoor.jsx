import { useState } from "react";
import { IoFastFood, IoRestaurant, IoWine, IoClose } from "react-icons/io5";
import "./styles/Outdoor.css";

const OutdoorCatering = () => {
  const [showModal, setShowModal] = useState(false);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    date: "",
    guests: "",
    serviceType: "",
  });

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <div className="catering-container">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Exceptional Outdoor Catering Services</h1>
          <p>Delight your guests with exquisite cuisine and professional service in any outdoor setting.</p>
          <button className="btn" onClick={() => setShowModal(true)}>Book Now</button>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Elevate Your Event with Exceptional Catering</h2>
        <div className="feature-grid">
          <div className="feature-item">
            <IoRestaurant className="icon" />
            <h3>Gourmet Cuisine</h3>
            <p>Experience top-tier culinary delights tailored to your event.</p>
          </div>
          <div className="feature-item">
            <IoFastFood className="icon" />
            <h3>Custom Menus</h3>
            <p>We craft personalized menus to match your preferences and theme.</p>
          </div>
          <div className="feature-item">
            <IoWine className="icon" />
            <h3>Professional Service</h3>
            <p>Our experienced staff ensures seamless service for an unforgettable experience.</p>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="gallery">
        <h2>See Our Culinary Creations</h2>
        <div className="gallery-grid">
          <div className="gallery-item"><img src="assets/out1.jpg" alt="Catering Event 1" /></div>
          <div className="gallery-item"><img src="assets/out2.jpg" alt="Catering Event 2" /></div>
          <div className="gallery-item"><img src="assets/out3.jpg" alt="Catering Event 3" /></div>
        </div>
      </section>

      {/* Booking Modal */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <IoClose className="close-icon" onClick={() => setShowModal(false)} />
            <h2>Book Your Catering Service</h2>

            {step === 1 && (
              <>
                <label>Date:</label>
                <input type="date" value={formData.date} onChange={(e) => setFormData({ ...formData, date: e.target.value })} required />
                <button className="btn" onClick={nextStep}>Next</button>
              </>
            )}
            {step === 2 && (
              <>
                <label>Number of Guests:</label>
                <input type="number" value={formData.guests} onChange={(e) => setFormData({ ...formData, guests: e.target.value })} min="1" required />
                <div className="modal-buttons">
                  <button className="btn secondary" onClick={prevStep}>Back</button>
                  <button className="btn" onClick={nextStep}>Next</button>
                </div>
              </>
            )}
            {step === 3 && (
              <>
                <label>Service Type:</label>
                <select value={formData.serviceType} onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })} required>
                  <option>Buffet</option>
                  <option>Plated Dinner</option>
                  <option>BBQ</option>
                </select>
                <div className="modal-buttons">
                  <button className="btn secondary" onClick={prevStep}>Back</button>
                  <button className="btn">Submit</button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default OutdoorCatering;
