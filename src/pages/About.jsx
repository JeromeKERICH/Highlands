
import "./styles/AboutPage.css"; 
import { useEffect } from "react";

function AboutPage() {

    useEffect(() => {
        // Reset scroll position on every route change
        window.scrollTo(0, 0);
      });

 
    return (
    <div className="about-page-container">
      {/* Header Section */}
      <header className="about-header">
        <h1>Welcome to Highlands Training Center</h1>
        <p>
          A comprehensive facility designed to meet your training, event, and adventure needs.
        </p>
      </header>

      {/* Mission and Values */}
      <section className="about-mission">
        <div className="about-mission-content">
          <h2>Our Mission</h2>
          <p>
            At Highlands Training Center, we aim to provide a one-stop destination for diverse services including
            conference hosting, event management, outdoor catering, and unique adventure experiences. Our goal is to
            support organizations, businesses, and individuals by offering top-tier facilities, impeccable services,
            and a space where creativity and growth flourish.
          </p>
        </div>
        <div className="about-mission-content">
          <h2>Our Values</h2>
          <ul>
            <li>Excellence in Service Delivery</li>
            <hr></hr>
            <li>Customer-Centered Approach</li>
            <hr></hr>
            <li>Innovation in Event and Training Solutions</li>
            <hr></hr>
            <li>Sustainability and Responsibility</li>
            <hr></hr>
          </ul>
        </div>
      </section>

      {/* Services Section */}
      <section className="about-services">
        <h2>Our Services</h2>
        <div className="services-list">
          {/* Service 1: Conference Services */}
          <div className="service-item">
            <h3>Conference Services</h3>
            <p>
              Our state-of-the-art conference rooms are equipped with the latest technology, including high-speed
              internet, projectors, sound systems, and seating arrangements tailored to your specific needs. Whether
              you're hosting a seminar, workshop, or corporate conference, we have the perfect venue for you.
            </p>
          </div>

          {/* Service 2: Event Management */}
          <div className="service-item">
            <h3>Event Management</h3>
            <p>
              From corporate events to private celebrations, our event management team is here to make your vision a
              reality. We handle all aspects, including planning, logistics, and execution, ensuring a seamless and
              memorable experience.
            </p>
          </div>

          {/* Service 3: Outdoor Catering */}
          <div className="service-item">
            <h3>Outdoor Catering</h3>
            <p>
              Our outdoor catering services provide delicious and customizable menus, perfect for any event. Be it a
              corporate luncheon, wedding reception, or casual gathering, we bring the finest local and international
              cuisines to your outdoor venue.
            </p>
          </div>

          {/* Service 4: Adventure Grounds */}
          <div className="service-item">
            <h3>Adventure Grounds</h3>
            <p>
              For those looking for a little more excitement, our adventure grounds offer a variety of outdoor activities
              and challenges. From team-building exercises to adventure sports, we provide thrilling experiences for all
              ages.
            </p>
          </div>

          {/* Service 5: Tents & Utensils for Hire */}
          <div className="service-item">
            <h3>Tents & Utensils for Hire</h3>
            <p>
              Whether you're hosting an outdoor wedding, a large gathering, or a corporate retreat, we offer tents and
              high-quality utensils for hire to ensure your event is comfortable and well-equipped.
            </p>
          </div>

          {/* Service 6: Parking Facilities */}
          <div className="service-item">
            <h3>Parking Facilities</h3>
            <p>
              We understand the importance of convenient parking. Our parking facilities are spacious, secure, and
              designed to accommodate the needs of your event or training session.
            </p>
          </div>
        </div>
      </section>
{/* Our Story Section */}
<section className="about-story">
  <h2>Our Story</h2>
  <p>
    Highlands Training Center was founded with a single goal in mind: to provide a versatile and high-quality space where individuals and organizations could come together to grow, collaborate, and push the boundaries of their potential. 
  </p>
  <p>
    Inspired by the serene yet empowering natural surroundings of the Highlands, our founders envisioned a place where creativity, innovation, and productivity could flourish. Over the years, we have grown into a hub for conferences, events, and adventure experiences, catering to the diverse needs of businesses, families, and individuals.
  </p>
</section>

{/* Sustainability Section */}
<section className="about-sustainability">
  <h2>Our Commitment to Sustainability</h2>
  <p>
    At Highlands Training Center, we believe in making a positive impact on both our community and the environment. Our facilities are designed to be energy-efficient, and we prioritize sustainability in everything we do—from eco-friendly catering options to waste reduction initiatives during events.
  </p>
  <p>
    We are dedicated to minimizing our environmental footprint while providing top-tier services to our clients. We believe that every small step towards sustainability counts.
  </p>
</section>
{/* CTA Section */}


   
    


    

    
    </div>
  );
}

export default AboutPage; 