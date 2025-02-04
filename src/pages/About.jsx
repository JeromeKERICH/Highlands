
import "./styles/AboutPage.css"; 
import { useEffect } from "react";

function AboutPage() {

    useEffect(() => {
        // Reset scroll position on every route change
        window.scrollTo(0, 0);
      });

    const businesses = [
    {
        id: 1,
        name: 'Business Name 1',
        description: 'Short description of Business 1. This is a summary of what the business does.',
        image: 'business1.jpg',
        link: 'https://business1-link.com',
    },
    {
        id: 2,
        name: 'Business Name 2',
        description: 'Short description of Business 2. This is a summary of what the business does.',
        image: 'business2.jpg',
        link: 'https://business2-link.com',
    },
    {
        id: 3,
        name: 'Business Name 3',
        description: 'Short description of Business 3. This is a summary of what the business does.',
        image: 'business3.jpg',
        link: 'https://business3-link.com',
    },
    ];
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

      <section className="other-businesses">
      <h2>Our Other Businesses</h2>
      <div className="business-list">
        {businesses.map((business) => (
          <div key={business.id} className="business-item">
            <img src={business.image} alt={business.name} />
            <h3>{business.name}</h3>
            <p>{business.description}</p>
            <a href={business.link} target="_blank" rel="noopener noreferrer">
              Visit Website
            </a>
          </div>
        ))}
      </div>
    </section>
    


      {/* Founder Section */}
      <section className="founder-section">
        <h2>Meet Our Founder</h2>
        <div className="founder-info">
          <div className="founder-photo">
            <img src="founder-photo.jpg" alt="Founder" />
          </div>
          <div className="founder-bio">
            <h3>John Doe</h3>
            <p>
              John Doe, the founder of Highlands Training Center, has over 20 years of experience in the event
              management, corporate training, and hospitality industries. His vision is to create a center that fosters
              learning, creativity, and growth for both individuals and businesses. Under his leadership, the center has
              grown into a reputable institution known for providing exceptional service and top-tier facilities.
            </p>
          </div>
        </div>
      </section>

    
    </div>
  );
}

export default AboutPage; 