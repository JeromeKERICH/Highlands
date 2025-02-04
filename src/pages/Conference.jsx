import { useState } from "react";
import { IoCalendar, IoPeople, IoBusiness, IoClose, IoImage } from "react-icons/io5";
import "./styles/Conference.css";

const ConferenceServices = () => {
  const [showModal, setShowModal] = useState(false);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    date: "",
    people: "",
    category: "",
  });

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <div className="conference-container">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Host Exceptional Conferences with Us</h1>
          <p>Experience top-tier facilities, seamless event management, and unparalleled services tailored for your needs.</p>
          <button className="btn" onClick={() => setShowModal(true)}>Book Now</button>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Book Your Perfect Conference Space Today</h2>
        <div className="feature-grid">
          <div className="feature-item">
            <IoBusiness className="icon" />
            <h3>World-Class Facilities</h3>
            <p>State-of-the-art halls, high-speed internet, and cutting-edge presentation tools.</p>
          </div>
          <div className="feature-item">
            <IoPeople className="icon" />
            <h3>Custom Event Planning</h3>
            <p>Flexible seating, on-site catering, and dedicated event managers.</p>
          </div>
          <div className="feature-item">
            <IoCalendar className="icon" />
            <h3>Serene Location</h3>
            <p>Escape distractions and host productive, inspiring gatherings in a peaceful environment.</p>
          </div>
          <div className="feature-item">
            <IoCalendar className="icon" />
            <h3>Serene Location</h3>
            <p>Escape distractions and host productive, inspiring gatherings in a peaceful environment.</p>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="gallery">
        <h2>Explore Our Past Conferences</h2>
        <div className="gallery-grid">
          <div className="gallery-item"><img src="assets/con1.jpg" alt="Conference 1" /></div>
          <div className="gallery-item"><img src="assets/con3.jpg" alt="Conference 2" /></div>
          <div className="gallery-item"><img src="assets/con4.jpg" alt="Conference 3" /></div>
        </div>
      </section>

      {/* Booking Modal */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <IoClose className="close-icon" onClick={() => setShowModal(false)} />
            <h2>Book Your Conference</h2>

            {step === 1 && (
              <>
                <label>Date:</label>
                <input type="date" value={formData.date} onChange={(e) => setFormData({ ...formData, date: e.target.value })} required />
                <button className="btn" onClick={nextStep}>Next</button>
              </>
            )}
            {step === 2 && (
              <>
                <label>Number of People:</label>
                <input type="number" value={formData.people} onChange={(e) => setFormData({ ...formData, people: e.target.value })} min="1" required />
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
                  <option>Institution</option>
                  <option>Board Member</option>
                  <option>Government Official</option>
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

export default ConferenceServices;
