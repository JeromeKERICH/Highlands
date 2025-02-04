import React from 'react';
import "../styles/Partners.css";

const PartnersSection = () => {
  return (
    <section className="partners-section">
      <h3>Our Trusted Partners</h3>
      <div className="partner-logos">
        <img src="assets/kaps.png" alt="Kapsabet Boys" className="partner-logo" />
        <img src="assets/nandi.png" alt="Nandi County" className="partner-logo" />
        <img src="assets/uasin.png" alt="UG County" className="partner-logo" />
        <img src="assets/kg.png" alt="kAPSABET Girls" className="partner-logo" />
        <img src="assets/oles.png" alt="Olessos TTI" className="partner-logo" />
        <img src="assets/chept.png" alt="Chepterit Girs" className="partner-logo" />
        
      </div>
    </section>
  );
};

export default PartnersSection;
