import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Services from "./Pages/Services";
import ServicesDetails from "./Pages/ServicesDetails";
import About from "./Pages/About";
import Footer from "./Components/Footer";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import TermsCondition from "./Pages/Terms&Conditon";
import FAQs from "./Pages/FAQs";
import ScrollToTop from "./Components/ScrollToTop";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import Contact from "./Pages/Contact";
import SecurityApproach from "./Pages/SecurityApproach";
import GetStarted from "./Pages/GetStarted";
import Project from "./Pages/Project";
import Page1 from "./Pages/TeamPage1";
import Page2 from "./Pages/TeamPage2";
import Page3 from "./Pages/TeamPage3";
import Page4 from "./Pages/TeamPage4";
import Page5 from "./Pages/TeamPage5";
import Page6 from "./Pages/TeamPage6";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
       <ScrollToTop />

    
      <main className="pt-24">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services-details" element={<ServicesDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsCondition/>} />
          <Route path="/faq" element={<FAQs/>} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/security-approach" element={<SecurityApproach />} />
          <Route path="/getstarted" element={<GetStarted />} />
          <Route path="/project" element={<Project/>} />
          <Route path="/tp1" element={<Page1/>} />
          <Route path="/tp2" element={<Page2/>} />
          <Route path="/tp3" element={<Page3/>} />
          <Route path="/tp4" element={<Page4/>} />
          <Route path="/tp5" element={<Page5/>} />
          <Route path="/tp6" element={<Page6/>} />

            

        </Routes>
       
      </main>
       {/* Footer */}
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
