import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Instagram, Linkedin, Facebook } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6"; 
import logo from "../assets/Photos/logo.jpg"; 
import logo2 from "../assets/Photos/logo2.png"; 

const Footer = () => {
  const services = [
  { id: 12, title: "Data Protection & Privacy" },
  { id: 11, title: "Cloud Security" },
  { id: 13, title: "Vulnerability Assessment & Penetration Testing (VAPT)" },
  { id: 14, title: "Aadhaar Security Audit" },
  { id: 17, title: "System Security Audit" },
  { id: 18, title: "Digital Forensics" },
  { id: 20, title: "IT Security Audit" },
  { id: 19, title: "IoT Security" },
  { id: 22, title: "Networking Audit" },
  { id: 1, title: "Security Operations Center (SOC)" },
];

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-20 gap-y-10">

          {/* Brand */}
          <div>
            <img src={logo} alt="Codevirus Security Logo" className="w-36 h-auto mb-2" />

            <p className="text-base text-gray-600 leading-relaxed mt-4 mb-6">
              We help organizations strengthen their security posture through vulnerability
              assessments, penetration testing, and proactive risk management strategies.
            </p>

            <div className="flex items-center gap-5 mt-5">
              <a href="https://x.com/codevirussec" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#0b2a5b] transition">
                <FaXTwitter size={22} />
              </a>

              <a href="https://www.instagram.com/codevirussec" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#0b2a5b] transition">
                <Instagram size={22} />
              </a>

              <a href="https://www.linkedin.com/company/codevirussecurity/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#0b2a5b] transition">
                <Linkedin size={22} />
              </a>

              <a href="https://www.facebook.com/codevirussec9" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#0b2a5b] transition">
                <Facebook size={22} />
              </a>
            </div>

            <div className="flex flex-col items-start gap-2 mt-6">
              <p className="text-base text-gray-700 font-semibold">Recognized Partner</p>
              <img src={logo2} alt="Partner Logo" className="w-36 h-auto mt-1" />
            </div>
          </div>

          {/* Location */}
          <div>
            <h4 className="text-base font-semibold text-[#0b2a5b] mb-5 uppercase tracking-wide">
              Location
            </h4>

            <ul className="space-y-5 text-base text-gray-600">

              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-[#0b2a5b]" />
                <div>
                  <p className="font-semibold text-gray-700">Address:</p>
                  <p>Lucknow, India</p>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <Mail size={20} className="text-[#0b2a5b]" />
                <div>
                  <p className="font-semibold text-gray-700">Email:</p>
                  <a href="mailto:services@codevirussec.in" className="hover:text-[#071a36] transition">
                    services@codevirussec.in
                  </a><br />
                  <a href="mailto:Contact@codevirussec.in" className="hover:text-[#071a36] transition">
                    Contact@codevirussec.in
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <Phone size={20} className="text-[#0b2a5b]" />
                <div>
                  <p className="font-semibold text-gray-700">Phone:</p>
                  <p>052231 53884</p>
                </div>
              </li>

            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base font-semibold text-[#0b2a5b] mb-5 uppercase tracking-wide">
              Useful Links
            </h4>

            <ul className="space-y-3 text-base text-gray-600">
              <li><Link to="/about" className="hover:text-[#071a36]">About Us</Link></li>
              <li><Link to="/faq" className="hover:text-[#071a36]">FAQs</Link></li>
              <li><Link to="/privacy-policy" className="hover:text-[#071a36]">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-[#071a36]">Terms & Conditions</Link></li>
              <li><Link to="/services" className="hover:text-[#071a36]">Services</Link></li>
              <li><Link to="/contact" className="hover:text-[#071a36]">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-base font-semibold text-[#0b2a5b] mb-5 uppercase tracking-wide">
               Services
            </h4>

            <ul className="space-y-3 text-base text-gray-600">
              {services.map((s, i) => (
                <li key={i}>
                  <Link to={`/services/${s.id}`} className="hover:text-[#071a36]">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-200 w-full bg-[#0f1f3d] py-3">
        <p className="text-base text-white font-semibold text-center">
          © {new Date().getFullYear()} Codevirus Security. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
