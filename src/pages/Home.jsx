import AboutSection from "../components/layouts/About";
import ContactSection from "../components/layouts/Contact";
import HeroSection from "../components/layouts/HeroSection";
import PartnersSection from "../components/layouts/Partners";
import ServicesSection from "../components/layouts/Services";
import Testimonials from "../components/layouts/Testimonials";
import CTA from "../components/ui/Button";

const Home = () => {
 
  return (
    <div>
       <HeroSection/>
       <AboutSection/>
       <ServicesSection/>
       <CTA/>
       <Testimonials/>
       <PartnersSection/>
       <ContactSection/>
    </div>
  );
};

export default Home;
