import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, ShieldCheck,X, Instagram, Linkedin, Facebook } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6"; 
 
const Footer = () => {
  const services = [
    { title: "IoT & Edge Security", slug: "iot-edge-security" },
    { title: "System Security Audit", slug: "system-security-audit" },
    { title: "Aadhaar Security Audit", slug: "aadhaar-security-audit" },
    { title: "Cloud Security", slug: "cloud-security" },
    { title: "Network Security", slug: "network-security" },
    { title: "Application Security", slug: "application-security" },
    { title: "Vulnerability Assessment & Penetration Testing (VAPT)", slug: "vulnerability-assessment-penetration-testing-vapt" },
    { title: "Security Operations Center (SOC)", slug: "security-operations-center-soc" },
    { title: "Digital Forensics", slug: "digital-forensics" },
    { title: "Compliance & Risk Management", slug: "compliance-risk-management" },
    { title: "Endpoint Security", slug: "endpoint-security" },
    { title: "Email Security", slug: "email-security" },
    { title: "Data Loss Prevention (DLP)", slug: "data-loss-prevention-dlp" },
    { title: "Zero Trust Security", slug: "zero-trust-security" },
    { title: "Identity & Access Management (IAM)", slug: "identity-access-management-iam" },
    { title: "Incident Response & Management", slug: "incident-response-management" },
    { title: "Threat Intelligence", slug: "threat-intelligence" },
    { title: "Cybersecurity Consulting", slug: "cybersecurity-consulting" },
  ];

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">

          {/* Brand + Social */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <ShieldCheck className="text-[#0b2a5b]" size={28} />
              <h3 className="text-xl font-bold text-[#0b2a5b]">
                Codevirus Security
              </h3>
            </div>

            <p className="text-sm text-gray-600 leading-relaxed">
              Securing your digital assets with enterprise-grade cybersecurity solutions,
              compliance services, and threat management.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-5 mt-6">
            
              <a
                href="https://x.com/codevirussec"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-[#0b2a5b] transition duration-300" title="Twitter"
              >
                <FaXTwitter size={20} />
              </a>
            
              <a
                href="https://www.instagram.com/codevirussec"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-[#0b2a5b] transition duration-300" 
                title="Instagram"
              >
                <Instagram size={20} />
              </a>
            
              <a
                href="https://www.linkedin.com/company/codevirussecurity/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-[#0b2a5b] transition duration-300"
                title="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            
              <a
                href="https://www.facebook.com/codevirussec9"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-[#0b2a5b] transition duration-300"
                title="Facebook"
              >
                <Facebook size={20} />
              </a>
            
            </div>
          </div>
          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-[#0b2a5b] mb-5 uppercase tracking-wide">
              Contact Information
            </h4>
            <ul className="space-y-4 text-sm text-gray-600">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-[#0b2a5b]" />
                Lucknow, India
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-[#0b2a5b]" />
                <a href="mailto:services@codevirussec.in" className="hover:text-[#071a36] transition">
                  services@codevirussec.in
                </a>
                
              </li>
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-[#0b2a5b]" />
                 052231 53884
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-[#0b2a5b] mb-5 uppercase tracking-wide">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li><Link to="/about" className="hover:text-[#071a36]">About Us</Link></li>
              <li><Link to="/faq" className="hover:text-[#071a36]">FAQs</Link></li>
              <li><Link to="/privacy-policy" className="hover:text-[#071a36]">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-[#071a36]">Terms & Conditions</Link></li>
              <li><Link to="/services" className="hover:text-[#071a36]">Services</Link></li>
              <li><Link to="/contact" className="hover:text-[#071a36]">Contact</Link></li>
            </ul>
          </div>

          {/* Core Services */}
          <div>
            <h4 className="text-sm font-semibold text-[#0b2a5b] mb-5 uppercase tracking-wide">
              Core Services
            </h4>
            <ul className="space-y-3 text-sm text-gray-600">
              {services.slice(0, 8).map((s, i) => (
                <li key={i}>
                  <Link to={`/services?service=${s.slug}`} className="hover:text-[#071a36]">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Advanced Services */}
          <div>
            <h4 className="text-sm font-semibold text-[#071a49] mb-5 uppercase tracking-wide">
              Advanced & Consulting
            </h4>
            <ul className="space-y-3 text-sm text-gray-600">
              {services.slice(8).map((s, i) => (
                <li key={i}>
                  <Link to={`/services?service=${s.slug}`} className="hover:text-[#071a36]">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        
      </div>
      {/* Bottom */}
        <div className="border-t border-gray-200 w-full bg-[#0f1f3d] mt-2 p-2">
          <p className="text-sm text-white font-semibold text-center">
            © {new Date().getFullYear()} Codevirus Security. All Rights Reserved.
          </p>
        </div>
    </footer>
  );
};

export default Footer;
