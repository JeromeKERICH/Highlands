import { useState, useEffect } from "react";
import { IoCalendar, IoPeople, IoBusiness, IoClose, IoImage } from "react-icons/io5";
import "./styles/Conference.css";

const AdventureGrounds = () => {

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
    <div className="adventure-container">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Experience the Thrill of Adventure</h1>
          <p>Explore breathtaking landscapes, engage in thrilling activities, and create unforgettable memories.</p>
          <button className="btn" onClick={() => setShowModal(true)}>Book Now</button>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Embark on the Journey of a Lifetime</h2>
        <div className="feature-grid">
          <div className="feature-item">
            <IoBusiness className="icon" />
            <h3>Exciting Activities</h3>
            <p>Hiking, zip-lining, rock climbing, and more.</p>
          </div>
          <div className="feature-item">
            <IoPeople className="icon" />
            <h3>Group-Friendly Packages</h3>
            <p>Perfect for families, corporate retreats, and school trips.</p>
          </div>
          <div className="feature-item">
            <IoCalendar className="icon" />
            <h3>Scenic Locations</h3>
            <p>Enjoy stunning views and serene natural beauty.</p>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="gallery">
        <h2>Explore Our Adventure Grounds</h2>
        <div className="gallery-grid">
          <div className="gallery-item"><img src="assets/gro1.jpg" alt="Adventure 1" /></div>
          <div className="gallery-item"><img src="assets/out3.jpg" alt="Adventure 2" /></div>
          <div className="gallery-item"><img src="assets/grow2.jpg" alt="Adventure 3" /></div>
        </div>
      </section>

      {/* Booking Modal */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <IoClose className="close-icon" onClick={() => setShowModal(false)} />
            <h2>Book Your Adventure</h2>

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
                  <option>Family</option>
                  <option>Corporate</option>
                  <option>School Trip</option>
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

export default AdventureGrounds;
