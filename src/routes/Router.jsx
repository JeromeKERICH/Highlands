
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Navbar from "../components/navigation/Navbar";
import Footer from "../components/navigation/Footer";
import ConferenceServices from "../pages/Conference";
import EventManagement from "../pages/EventMan";
import OutdoorCatering from "../pages/Outdoor";
import AdventureGrounds from "../pages/Adventure";
import Equipments from "../pages/Hire";
import AboutPage from "../pages/About";
import ContactSection from "../pages/Contact";




const AppRouter = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/conferenceservices" element={<ConferenceServices/>}/>
        <Route path="/eventman" element={<EventManagement/>}/>
        <Route path="/outdoorcatering" element={<OutdoorCatering/>}/>
        <Route path="/adventuregrounds" element={<AdventureGrounds/>}/>
        <Route path="/equipments" element={<Equipments/>}/>
        <Route path="/aboutpage" element={<AboutPage/>}/>
        <Route path="/contactsection" element={<ContactSection/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
};

export default AppRouter;
