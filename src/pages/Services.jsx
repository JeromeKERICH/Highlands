import React, { useEffect } from 'react';
import ServicesSection from '../components/layouts/Services'

const Services = () => {
   useEffect(() => {
        // Reset scroll position on every route change
        window.scrollTo(0, 0);
      });
  return (
    <div>
      <ServicesSection/>
    </div>
  )
}

export default Services
