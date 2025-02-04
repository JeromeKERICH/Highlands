import { useState, useEffect } from "react";
import { IoCalendar, IoPeople, IoBusiness, IoClose, IoImage } from "react-icons/io5";
import "./styles/Events.css";

const EventManagement = () => {

  useEffect(() => {
      // Reset scroll position on every route change
      window.scrollTo(0, 0);
    });
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
    <div className="event-container">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Host Your Perfect Event with Us</h1>
          <p>We provide professional event planning, state-of-the-art venues, and a seamless experience.</p>
          <button className="btn" onClick={() => setShowModal(true)}>Book Now</button>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>We Make Your Event Unforgettable</h2>
        <div className="feature-grid">
          <div className="feature-item">
            <IoBusiness className="icon" />
            <h3>Premium Venues</h3>
            <p>Elegant locations equipped with modern amenities to suit all occasions.</p>
          </div>
          <div className="feature-item">
            <IoPeople className="icon" />
            <h3>Expert Planning</h3>
            <p>From weddings to corporate events, we ensure everything runs smoothly.</p>
          </div>
          <div className="feature-item">
            <IoCalendar className="icon" />
            <h3>Tailored Services</h3>
            <p>Customizable packages for decor, catering, and guest management.</p>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="gallery">
        <h2>Our Past Events</h2>
        <div className="gallery-grid">
          <div className="gallery-item"><img src="/assets/Eve1.jpg" alt="Event 1" /></div>
          <div className="gallery-item"><img src="/assets/Eve2.jpg" alt="Event 2" /></div>
          <div className="gallery-item"><img src="/assets/Eve3.jpg" alt="Event 3" /></div>
        </div>
      </section>

      {/* Booking Modal */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <IoClose className="close-icon" onClick={() => setShowModal(false)} />
            <h2>Book Your Event</h2>

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
                <label>Event Type:</label>
                <select value={formData.category} onChange={(e) => setFormData({ ...formData, category: e.target.value })} required>
                  <option>Wedding</option>
                  <option>Corporate Event</option>
                  <option>Birthday Party</option>
                  <option>Conference</option>
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

export default EventManagement;