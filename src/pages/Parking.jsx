import { useState, useEffect} from "react";
import { IoCarSport, IoCalendar, IoPeople, IoClose } from "react-icons/io5";
import "./styles/Parking.css";

const ParkingFacilities = () => {

  useEffect(() => {
      // Reset scroll position on every route change
      window.scrollTo(0, 0);
    });
  const [showModal, setShowModal] = useState(false);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    date: "",
    vehicleType: "",
    duration: "",
  });

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <div className="parking-container">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Secure & Convenient Parking</h1>
          <p>Reserve your spot in advance and enjoy hassle-free parking with top security.</p>
          <button className="btn" onClick={() => setShowModal(true)}>Book Now</button>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Your Event Deserves Stress-Free Parking</h2>
        <div className="feature-grid">
          <div className="feature-item">
            <IoCarSport className="icon" />
            <h3>Secure Parking</h3>
            <p>24/7 surveillance and security personnel for peace of mind.</p>
          </div>
          <div className="feature-item">
            <IoPeople className="icon" />
            <h3>Spacious Lots</h3>
            <p>Ample space for all vehicle types, from motorcycles to SUVs.</p>
          </div>
          <div className="feature-item">
            <IoCalendar className="icon" />
            <h3>Easy Reservations</h3>
            <p>Book your parking spot online and avoid last-minute hassle.</p>
          </div>
        </div>
      </section>


      {/* Image Gallery */}
      <section className="gallery">
        <h2>Explore Our Convenient Parking Facilities</h2>
        <div className="gallery-grid">
          <div className="gallery-item"><img src="assets/park1.jpg" alt="Event 1" /></div>
          <div className="gallery-item"><img src="assets/park2.jpg" alt="Event 2" /></div>
          <div className="gallery-item"><img src="assets/park3.jpg" alt="Event 3" /></div>
        </div>
      </section>


      {/* Booking Modal */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <IoClose className="close-icon" onClick={() => setShowModal(false)} />
            <h2>Reserve Your Parking Spot</h2>

            {step === 1 && (
              <>
                <label>Date:</label>
                <input type="date" value={formData.date} onChange={(e) => setFormData({ ...formData, date: e.target.value })} required />
                <button className="btn" onClick={nextStep}>Next</button>
              </>
            )}
            {step === 2 && (
              <>
                <label>Vehicle Type:</label>
                <select value={formData.vehicleType} onChange={(e) => setFormData({ ...formData, vehicleType: e.target.value })} required>
                  <option>Car</option>
                  <option>Motorcycle</option>
                  <option>Truck</option>
                </select>
                <div className="modal-buttons">
                  <button className="btn secondary" onClick={prevStep}>Back</button>
                  <button className="btn" onClick={nextStep}>Next</button>
                </div>
              </>
            )}
            {step === 3 && (
              <>
                <label>Duration:</label>
                <input type="text" value={formData.duration} onChange={(e) => setFormData({ ...formData, duration: e.target.value })} required />
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

export default ParkingFacilities;