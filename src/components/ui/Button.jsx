
import { IoIosArrowForward } from "react-icons/io";
import "../styles/Button.css"; // Make sure to create a CTA.css file for styling

const CTA = () => {
  return (
    <section className="cta-section">
      <div className="cta-content">
        <h2 className="cta-title">Ready to Plan Your Perfect Event or Adventure?</h2>
        <p className="cta-description">
          At Highlands Training Centre, we offer everything you need to create unforgettable events and exciting outdoor adventures. Whether it's a wedding, corporate conference, or an adventurous day out, we have you covered.
        </p>
        <div className="cta-buttons">
          <button className="cta-btn primary">
            Book Now <IoIosArrowForward />
          </button>
          <button className="cta-btn secondary">
            Get in Touch <IoIosArrowForward />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
