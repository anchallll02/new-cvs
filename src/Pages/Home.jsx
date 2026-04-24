
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import About from "./About";
import Project from "./Project";

const Home = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    setActive(true);
  }, []);

  return (
    <div className="overflow-hidden">
       <section
        id="home"
        className="relative h-auto lg:min-h-[85vh] flex items-start pt-16 lg:pt-20 pb-16 lg:pb-24
        bg-[linear-gradient(120deg,#ffffff_55%,#0b2a5b_45%)]"
      >
        {/* Background Effects */}
        <div className="absolute inset-0 
        bg-[radial-gradient(circle_at_20%_30%,rgba(11,42,91,0.15),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(22,61,130,0.25),transparent_45%)]" />

        <div className="relative z-10 max-w-7xl mx-auto 
        px-4 sm:px-6 
        grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] 
        gap-12 lg:gap-16 ">

          {/* LEFT CONTENT */}
          <div
            className={`transition-all duration-1000${active
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
              }`}
          >
            <span className="inline-block mb-3 px-5 py-2 rounded-full bg-white text-[#0b2a5b] shadow-md shadow-[#0b2a5b] font-semibold text-xs sm:text-sm">
              Enterprise Cybersecurity Solutions
            </span>

            <h1 className="font-black leading-tight mb-7">
              <span className="block text-3xl sm:text-4xl lg:text-5xl text-gray-700 font-sans">
                Enterprise-grade <br /> cybersecurity <br /> solutions
              </span>

              <span className="block text-[#0b2a5b] text-2xl sm:text-3xl lg:text-4xl">
                designed to protect <br /> networks, systems, <br /> and sensitive data <br />
                from unauthorized access, <br /> cyber attacks, <br /> and security breaches
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-700 max-w-xl mb-8 leading-relaxed">
              We provide advanced cybersecurity services including Vulnerability Assessment, Penetration Testing, Network Security, and Security Operations Center (SOC) monitoring. Our goal is to identify security weaknesses, prevent attacks, and ensure your organization remains protected against evolving cyber threats.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
              <Link
                to="/getstarted"
                className="px-8 py-3 rounded-full font-bold text-white 
                bg-gradient-to-r from-[#0b2a5b] to-[#163d82] 
                shadow-[0_18px_40px_rgba(11,42,91,0.35)] 
                hover:scale-105 transition text-center"
              >
                Get Started
              </Link>

              <Link
                to="/security-approach"
                className="px-8 py-3 rounded-full font-bold 
                border-2 border-black text-black bg-white 
                hover:bg-black hover:text-white transition text-center"
              >
                Our Security Approach
              </Link>
            </div>
          </div>

          {/* RIGHT PANEL */}
        <div
          className={`transition-all duration-1000 delay-150
          ${active ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}
          
          bg-gradient-to-b from-[#0b2a5b] to-[#071a36]
          rounded-3xl
          
          p-6 sm:p-8 lg:p-10 h-8
          
          text-slate-200
          shadow-[0_40px_80px_rgba(7,26,54,0.6)]
          
          mt-10 lg:mt-20
          min-h-[420px]
          `}
        >
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-6">
            Why Enterprises Choose Us
          </h3>

          <ul className="space-y-5 sm:space-y-6 text-sm sm:text-base lg:text-lg text-slate-300">

            <li className="flex items-start gap-3">
              <span className="text-[#60a5fa] text-lg sm:text-xl">✔</span>
              Advanced Vulnerability Assessment & Penetration Testing
            </li>

            <li className="flex items-start gap-3">
              <span className="text-[#60a5fa] text-lg sm:text-xl">✔</span>
              24/7 Security Monitoring & Threat Detection
            </li>

            <li className="flex items-start gap-3">
              <span className="text-[#60a5fa] text-lg sm:text-xl">✔</span>
              Network Security & Firewall Protection
            </li>

            <li className="flex items-start gap-3">
              <span className="text-[#60a5fa] text-lg sm:text-xl">✔</span>
              Compliance, Risk Management & Security Audits
            </li>

          </ul>
        </div>
        </div>
      </section>


      {/* ================= SERVICES SECTION ================= */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-white">

        <div className="max-w-7xl mx-auto">

          {/* Heading */}
          <div className="text-center mb-14">

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0b2a5b] mb-3">
              Comprehensive Cybersecurity Operations Center
            </h2>

            <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
              We provide advanced cybersecurity solutions to protect your
              digital assets and ensure business continuity.
            </p>

          </div>

          {/* Services Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

            <ServiceCard
              title="Cybersecurity Operations Centers"
              description="A centralized unit for monitoring, detecting, and responding to cybersecurity threats."
            />

            <ServiceCard
              title="Incident Response And Management"
              description="Rapid response strategies to identify, contain, and recover from cyber incidents."
            />

            <ServiceCard
              title="Incident Response Plans And Procedures"
              description="Well-defined response plans to minimize damage during security breaches."
            />

            <ServiceCard
              title="Integrating Threat Intelligence"
              description="Combining threat intelligence feeds for proactive security defense."
            />

            <ServiceCard
              title="Role Of Security Analysts In CSOC"
              description="Expert analysts monitoring systems and investigating threats."
            />

            <ServiceCard
              title="Challenges In Staffing & Retaining Talent"
              description="Strategies to recruit and retain skilled cybersecurity professionals."
            />

          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="px-6 py-3 bg-[#0b2a5b] text-white rounded-lg font-semibold hover:bg-[#081c3a] transition"
            >
              View All Services
            </Link>
          </div>

        </div>
      </section>

      {/* Other Sections */}
      <About />
      <Project preview={true} />

    </div>
  );
};

export default Home;


/* ================= SERVICE CARD ================= */

const ServiceCard = ({ title, description }) => (
  <div
    className="bg-white border border-slate-200 rounded-2xl
    p-6 shadow-sm hover:shadow-xl
    transition-all duration-300 group"
  >

    <h3 className="text-lg font-semibold text-[#0b2a5b] mb-3">
      {title}
    </h3>

    <p className="text-slate-600 text-sm leading-relaxed">
      {description}
    </p>

  </div>
);

