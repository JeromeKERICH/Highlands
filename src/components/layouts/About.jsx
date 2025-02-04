import React from "react";
import "../styles/About.css";

const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="about-content">
        <div className="about-left">
          <h2 className="about-title">About Us</h2>
          <p className="about-description">
            At Highlands Training Centre Ltd, we are dedicated to turning your events into unforgettable experiences. From hosting professional conferences to organizing fun-filled outdoor adventures, we ensure your vision becomes reality with a perfect blend of excellence and passion.
          </p>
          <p className="about-description">
            We pride ourselves on offering top-notch services, from catering and event management to thrilling outdoor activities like zip-lining, horse riding, and sky cycling. Our team works closely with you every step of the way to guarantee your event is nothing short of extraordinary.
          </p>
        </div>

        <div className="about-right">
          <img
            src="assets/deco2.jpg"
            alt="About Highlands"
            className="about-image"
          />
        </div>
      </div>

      <div className="about-values">
        <div className="value-box">
          <h3>Quality</h3>
          <p>We maintain the highest standards to ensure a seamless and unforgettable experience for our clients.</p>
        </div>
        <div className="value-box">
          <h3>Passion</h3>
          <p>We pour our heart into every event we manage, making sure each moment is meaningful and enjoyable.</p>
        </div>
        <div className="value-box">
          <h3>Excellence</h3>
          <p>Our dedication to excellence drives us to exceed expectations, every single time.</p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
