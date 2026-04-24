import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

const features = [
  { title: " Protecting Digital Assets 24/7", desc: "Our advanced cybersecurity operations center provides round-the-clock protection for your digital infrastructure." },
  { title: " Stay Ahead of Cyber Threats", desc: "Proactive threat detection and response systems to keep your organization secure from emerging threats." },
  { title: " Real-Time Threat Monitoring", desc: "Continuous monitoring and analysis of security events with instant alerting and response capabilities." },
  { title: " Expert Security Team", desc: "Certified cybersecurity professionals with years of experience in threat detection and incident response." },
  { title: " Advanced Analytics", desc: "AI-powered security analytics to identify patterns and predict potential security threats." },
  { title: " Compliance & Governance", desc: "Ensure your organization meets industry standards and regulatory compliance requirements." },
];

const statsData = [
  { value: 5, label: "Security Centers", suffix: "+" },
  { value: 50, label: "Protected Clients", suffix: "+" },
  { value: 99.9, label: "Uptime Guarantee", suffix: "%" },
  { value: 24, label: "Monitoring", suffix: "/7" },
];

const About = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState(false);
  const [counts, setCounts] = useState(statsData.map(() => 0));
  const statsRef = useRef(null);
  const [hasCounted, setHasCounted] = useState(false);

  useEffect(() => setActive(true), []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasCounted) {
          statsData.forEach((stat, i) => {
            let start = 0;
            const end = stat.value;
            const duration = 2000;
            const increment = end / (duration / 50);

            const counter = setInterval(() => {
              start += increment;
              if (start >= end) {
                start = end;
                clearInterval(counter);
              }
              setCounts((prev) => {
                const newCounts = [...prev];
                newCounts[i] = parseFloat(start.toFixed(1));
                return newCounts;
              });
            }, 100);
          });
          setHasCounted(true);
        }
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) observer.observe(statsRef.current);
    return () => {
      if (statsRef.current) observer.unobserve(statsRef.current);
    };
  }, [hasCounted]);

  return (
    <div className="bg-white text-gray-900">

      {/* HERO SECTION */}
      <section className="py-16 px-6 bg-[#f4f6fa]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

          <div className={`transition-all duration-1000 ${active ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>

            <span className="inline-block mb-4 px-4 py-2 bg-blue-100 text-[#0b2a5b] font-semibold rounded-full text-sm">
              ABOUT CODEVIRUSSECURITY
            </span>

            <h1 className="text-4xl lg:text-5xl font-extrabold mb-6 text-[#0b2a5b]">
              Cyber Security Solutions & Compliance
            </h1>

            <p className="mb-4 text-gray-700 leading-relaxed">
              A Cyber Security Operations Center serves as the frontline defense against cyber attacks, ensuring real-time monitoring, threat detection and response for organizations worldwide.
            </p>

            <p className="mb-6 text-gray-700 leading-relaxed">
              Codevirus Security is a company established in 2018 and a leading Cyber Security Training Institute situated in the heart of Uttar Pradesh – Lucknow. We offer modern-day solutions for current cyber security needs and protection from emerging digital threats as the world encounters increasing cybercrimes with advancing technologies.
            </p>

          </div>

          <div className={`bg-[#0b2a5b] text-white rounded-3xl p-10 shadow-2xl transition-all duration-1000 ${active ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`}>

            <h3 className="text-xl font-semibold mb-6">
              Leading Cybersecurity Excellence
            </h3>

            <p className="text-gray-200 mb-4 leading-relaxed">
              Codevirus Security is a company established in 2018, works in a collaborative form of company and leading Cyber Security Training Institute, situated in the heart of Uttar Pradesh – Lucknow. We offer modern day solutions for current cyber security needs and protection from emerging digital threats, as the world is encountering various cybercrimes with advancement of day to day technologies.
            </p>

            <p className="text-gray-200 leading-relaxed">
              As a training institute, we provide an engaging learning environment with impeccable infrastructure and tools, through which students can learn with enthusiasm from our experts, so that they can add feathers to their wings for soaring high in their career with industry ready skills.
            </p>

          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-14 px-6 bg-[#f9fafc]">
        <div className="max-w-7xl mx-auto text-center">

          <h2 className="text-3xl lg:text-4xl font-bold text-[#0b2a5b] mb-6">
            Proactive Cybersecurity Operations
          </h2>

          <p className="text-gray-700 max-w-3xl mx-auto mb-16 leading-relaxed">
            Our comprehensive approach to cybersecurity ensures your organization stays protected against evolving threats with cutting-edge technology and expert analysis.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((f, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-3xl shadow-md hover:shadow-xl hover:-translate-y-3 transition-all duration-500"
              >
                <h3 className="font-semibold text-lg text-[#0b2a5b] mb-3">
                  {f.title}
                </h3>
                <p className="text-gray-700 text-sm">{f.desc}</p>
              </div>
            ))}
          </div>

          {/* VISION & MISSION */}
          <div className="grid md:grid-cols-2 gap-8 mt-20">

            <div className="bg-[#0b2a5b] text-white p-10 rounded-3xl shadow-xl hover:scale-105 transition duration-500">
              <h3 className="text-xl font-semibold mb-4">
                VISION OF CODEVIRUS SECURITY
              </h3>
              <p className="leading-relaxed">
                To be a trusted cybersecurity partner for enterprises, enabling secure digital operations through proactive, scalable, and intelligence-driven security solutions.
              </p>
            </div>

            <div className="bg-[#112f66] text-white p-10 rounded-3xl shadow-xl hover:scale-105 transition duration-500">
              <h3 className="text-xl font-semibold mb-4">
                Our Mission
              </h3>
              <p className="leading-relaxed">
                Our mission is to help organizations identify risks, defend critical infrastructure, and respond effectively to cyber threats by delivering practical cybersecurity consulting, managed security services, and continuous risk improvement aligned with business objectives.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* IMPACT STATS (MOVED TO LAST) */}
      <section className="py-20 px-6 bg-white">
        <div ref={statsRef} className="max-w-7xl mx-auto text-center">

          <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0b2a5b] mb-4">
            Our Impact in Numbers
          </h2>

          <p className="text-gray-700 mb-12 max-w-2xl mx-auto">
            Trusted by organizations worldwide for their cybersecurity needs
          </p>

          <div className="grid md:grid-cols-4 gap-8">
            {statsData.map((s, i) => (
              <div
                key={i}
                className="bg-[#f4f6fa] rounded-3xl p-10 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-500"
              >
                <h3 className="text-4xl font-bold text-[#0b2a5b] mb-2">
                  {counts[i]}{s.suffix}
                </h3>
                <p className="text-gray-700">{s.label}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
};

export default About;
