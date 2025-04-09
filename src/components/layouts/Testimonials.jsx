import React, { useState } from 'react';
import "../styles/Testimonial.css";

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    { text: "Highlands Training Centre made our conference a huge success! Highly recommend!", name: "Jane Doe", role: "Event Planner" },
    { text: "The wedding planning was seamless, and everything went as planned. Fantastic service!", name: "John Smith", role: "Bride" },
    { text: "Amazing outdoor adventures, the zip-lining was a thrill! Can't wait to return.", name: "Alice Green", role: "Adventure Enthusiast" },
    { text: "The catering was top-notch. Our guests loved the food. Will definitely book again!", name: "Mark Lee", role: "Catering Client" },
    { text: "A fantastic venue for corporate events. Everything was organized perfectly!", name: "Sarah Miller", role: "Corporate Event Manager" },
  ];

  // Function to move the slide
  const handleSlide = (index) => {
    if (index >= testimonials.length) {
      setCurrentSlide(0);
    } else if (index < 0) {
      setCurrentSlide(testimonials.length - 1);
    } else {
      setCurrentSlide(index);
    }
  };

  return (
    <section className="testimonials">
      <h3>What Our Clients Say</h3>
      <div className="testimonial-list">
        {testimonials.slice(currentSlide, currentSlide + 3).map((testimonial, index) => (
          <div className="testimonial-card" key={index}>
            <p>"{testimonial.text}"</p>
            <span>{testimonial.role}</span>
          </div>
        ))}
      </div>

      <div className="slide-dots">
        {testimonials.map((_, index) => (
          <span
            key={index}
            className={`dot ${currentSlide === index ? 'active' : ''}`}
            onClick={() => handleSlide(index)}
          ></span>
        ))}
      </div>

      <div className="slide-buttons">
        <button onClick={() => handleSlide(currentSlide - 1)}>Prev</button>
        <button onClick={() => handleSlide(currentSlide + 1)}>Next</button>
      </div>
    </section>
  );
};

export default Testimonials;
