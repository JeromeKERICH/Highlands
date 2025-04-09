import { IoIosCheckboxOutline } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa'; // Import the forward arrow icon
import "../styles/Services.css";

const ServicesSection = () => {
  return (
    <section className="services-section">
      <h2 className="services-title">Unforgettable Services, Tailored for You</h2>
      <p className="services-subtitle">
        We’re more than a venue—we’re your partner in making magic happen. Here’s what awaits you:
      </p>

      <div className="services-list">
        <div className="service-card">
          <div className="service-overlay"></div>
          <div className="service-content">
            <div className="service-number-icon">
              <IoIosCheckboxOutline className="service-number-icon" />
            </div>
            <h3 className="service-name">Conference Services</h3>
            <p className="service-description">Transform your professional gatherings into productive, inspiring experiences.</p>
            <Link to="/conferenceservices" className="learn-more-btn">
              <FaArrowRight />
            </Link>
          </div>
        </div>

        <div className="service-card">
          <div className="service-overlay"></div>
          <div className="service-content">
            <div className="service-number-icon">
              <IoIosCheckboxOutline className="service-number-icon" />
            </div>
            <h3 className="service-name">Event Management</h3>
            <p className="service-description">Whether it’s your dream wedding, a pre-wedding celebration, or a vibrant party, we handle it all seamlessly.</p>
            <Link to="/eventman" className="learn-more-btn">
               <FaArrowRight />
            </Link>
          </div>
        </div>

        <div className="service-card">
          <div className="service-overlay"></div>
          <div className="service-content">
            <div className="service-number-icon">
              <IoIosCheckboxOutline className="service-number-icon" />
            </div>
            <h3 className="service-name">Outdoor Catering</h3>
            <p className="service-description">Take your events to the next level with culinary delights, prepared with love.</p>
            <Link to="/outdoorcatering" className="learn-more-btn">
                <FaArrowRight />
            </Link>
          </div>
        </div>

        

        <div className="service-card">
          <div className="service-overlay"></div>
          <div className="service-content">
            <div className="service-number-icon">
              <IoIosCheckboxOutline className="service-number-icon" />
            </div>
            <h3 className="service-name">Adventure Grounds</h3>
            <p className="service-description">Immerse yourself in nature and excitement with zip-lining, sky cycling, horse riding, and boat riding.</p>
            <Link to="/adventuregrounds" className="learn-more-btn">
               <FaArrowRight />
            </Link>
          </div>
        </div>

        <div className="service-card">
          <div className="service-overlay"></div>
          <div className="service-content">
            <div className="service-number-icon">
              <IoIosCheckboxOutline className="service-number-icon" />
            </div>
            <h3 className="service-name">Tents & Utensils for Hire</h3>
            <p className="service-description">Everything you need to create a beautiful and organized setting.</p>
            <Link to="/equipments" className="learn-more-btn">
               <FaArrowRight />
            </Link>
          </div>
        </div>

        <div className="service-card">
          <div className="service-overlay"></div>
          <div className="service-content">
            <div className="service-number-icon">
              <IoIosCheckboxOutline className="service-number-icon" />
            </div>
            <h3 className="service-name">Parking Facilities</h3>
            <p className="service-description">Ample parking space to ensure your guests have a smooth arrival and departure.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
