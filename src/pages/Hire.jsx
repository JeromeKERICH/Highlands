import { useState } from "react";
import { IoCalendar, IoPeople, IoBusiness, IoClose } from "react-icons/io5";
import "./styles/Hire.css";

const Equipments = () => {
  const [showModal, setShowModal] = useState(false);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    date: "",
    quantity: "",
    category: "",
  });

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <div className="tents-utensils-container">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Tents & Utensils for Hire</h1>
          <p>Get high-quality tents and utensils for your special events.</p>
          <button className="btn" onClick={() => setShowModal(true)}>Order Now</button>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Reliable Rentals for a Perfect Event Experience</h2>
        <div className="feature-grid">
          <div className="feature-item">
            <IoBusiness className="icon" />
            <h3>Top-Quality Equipment</h3>
            <p>Durable and well-maintained tents and utensils.</p>
          </div>
          <div className="feature-item">
            <IoPeople className="icon" />
            <h3>Flexible Packages</h3>
            <p>Hire according to your event size and needs.</p>
          </div>
          <div className="feature-item">
            <IoCalendar className="icon" />
            <h3>Reliable Service</h3>
            <p>Timely delivery and setup for a hassle-free event.</p>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="gallery">
        <h2>Secure Your Event Essentials Now</h2>
        <div className="gallery-grid">
          <div className="gallery-item"><img src="assets/Eve1.jpg" alt="Event 1" /></div>
          <div className="gallery-item"><img src="assets/Eve2.jpg" alt="Event 2" /></div>
          <div className="gallery-item"><img src="assets/Eve3.jpg" alt="Event 3" /></div>
        </div>
      </section>

      {/* Booking Modal */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <IoClose className="close-icon" onClick={() => setShowModal(false)} />
            <h2>Book Your Rental</h2>

            {step === 1 && (
              <>
                <label>Date:</label>
                <input type="date" value={formData.date} onChange={(e) => setFormData({ ...formData, date: e.target.value })} required />
                <button className="btn" onClick={nextStep}>Next</button>
              </>
            )}
            {step === 2 && (
              <>
                <label>Quantity:</label>
                <input type="number" value={formData.quantity} onChange={(e) => setFormData({ ...formData, quantity: e.target.value })} min="1" required />
                <div className="modal-buttons">
                  <button className="btn secondary" onClick={prevStep}>Back</button>
                  <button className="btn" onClick={nextStep}>Next</button>
                </div>
              </>
            )}
            {step === 3 && (
              <>
                <label>Category:</label>
                <select value={formData.category} onChange={(e) => setFormData({ ...formData, category: e.target.value })} required>
                  <option>Tents</option>
                  <option>Chairs</option>
                  <option>Tables</option>
                  <option>Utensils</option>
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

export default Equipments;