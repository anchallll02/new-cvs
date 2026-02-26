import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import networksecurity from "../assets/Photos/network.png";
import digitalforensics from "../assets/Photos/digitalforensics.png";
import dataloss from "../assets/Photos/dataloss.png";
import zerosecurity from "../assets/Photos/zerosecurity.png";
import iot_edge from "../assets/Photos/iot_edge.jpeg";
import system_sec from "../assets/Photos/system_sec.jpeg";
import adhaar_sec from "../assets/Photos/adhaar_sec.jpeg";
import cloud_sec from "../assets/Photos/cloud_sec.jpeg";
import application_sec from "../assets/Photos/application_sec.jpeg";
import vapt from "../assets/Photos/vapt.jpeg";
import soc from "../assets/Photos/soc.jpeg";
import risk_management from "../assets/Photos/risk_management.png";
import endpoint_sec from "../assets/Photos/endpoint_sec.png";
import email_sec from "../assets/Photos/email_sec.png";
import iam from "../assets/Photos/iam.png";
import incident from "../assets/Photos/incident.png";
import threat_intelligence from "../assets/Photos/threat_intelligence.png";
import cybersecurity_consulting from "../assets/Photos/cybersecurity_consulting.png";
const Services = () => {
  const [activeService, setActiveService] = useState(null);
  const location = useLocation();

  // Helper to convert a service title to slug (matches footer links)
  const getSlug = (title) =>
    title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

  const services = [
    {
      title: "IoT & Edge Security",
      desc:
        "Protect connected devices and distributed edge networks from modern cyber threats and vulnerabilities.",
      image:
        iot_edge,
      details: {
        overview:
          "Advanced protection for IoT ecosystems and distributed edge infrastructure ensuring secure device communication and monitoring.",
        why:
          "IoT environments are highly vulnerable entry points for attackers. Securing them ensures operational continuity and data protection.",
        features: [
          "Device Authentication",
          "Edge Threat Monitoring",
          "Secure Firmware Management",
          "Network Segmentation",
        ],
      },
    },
    {
      title: "System Security Audit",
      desc:
        "Comprehensive audits to identify vulnerabilities, compliance gaps, and operational security risks.",
      image:
        system_sec,
      details: {
        overview:
          "Structured system assessments covering identification, analysis, remediation, and compliance validation.",
        why:
          "Proactive audits minimize exposure to cyber risks and strengthen enterprise resilience.",
        features: [
          "Threat Containment",
          "Forensic Investigation",
          "Regulatory Compliance",
          "Post-Incident Recovery",
        ],
      },
    },
    {
      title: "Aadhaar Security Audit",
      desc:
        "Ensure Aadhaar-enabled systems fully comply with UIDAI security standards and guidelines.",
      image:
        adhaar_sec,
      details: {
        overview:
          "Comprehensive review of Aadhaar systems ensuring encryption, compliance, and access controls meet UIDAI standards.",
        why:
          "Non-compliance can result in regulatory penalties and reputational damage.",
        features: [
          "UIDAI Compliance Check",
          "Encryption Review",
          "Access Control Validation",
          "Risk Assessment",
        ],
      },
    },
    {
      title: "Cloud Security",
      desc:
        "Secure public, private, and hybrid cloud environments from misconfigurations and breaches.",
      image:
        cloud_sec,
      details: {
        overview:
          "End-to-end cloud posture management, identity governance, and real-time threat detection.",
        why:
          "Cloud misconfigurations are leading causes of modern data breaches.",
        features: [
          "Cloud Configuration Audit",
          "Identity Governance",
          "Threat Detection",
          "Compliance Monitoring",
        ],
      },
    },
    {
      title: "Network Security",
      desc:
        "Protect enterprise networks from internal and external cyber threats.",
      image:
        networksecurity,
      details: {
        overview:
          "Comprehensive network defense using firewalls, intrusion detection, and zero trust architecture.",
        why:
          "Network breaches can severely disrupt operations and expose sensitive data.",
        features: [
          "Firewall Configuration",
          "Intrusion Detection",
          "Traffic Monitoring",
          "Zero Trust Segmentation",
        ],
      },
    },
    {
      title: "Application Security",
      desc:
        "Identify and eliminate vulnerabilities in web, mobile, and enterprise applications.",
      image:
        application_sec,
      details: {
        overview:
          "Secure SDLC implementation and continuous security testing for robust application defense.",
        why:
          "Applications are primary attack vectors for modern cyber threats.",
        features: [
          "Code Review",
          "Security Testing",
          "OWASP Compliance",
          "API Security",
        ],
      },
    },
    {
      title: "Vulnerability Assessment & Penetration Testing (VAPT)",
      desc:
        "Simulate real-world attacks to uncover and remediate exploitable weaknesses.",
      image:
        vapt,
      details: {
        overview:
          "Ethical hacking techniques to detect and remediate vulnerabilities before attackers exploit them.",
        why:
          "Proactive security testing significantly reduces breach risk.",
        features: [
          "Black Box Testing",
          "White Box Testing",
          "Exploit Simulation",
          "Remediation Support",
        ],
      },
    },
    {
      title: "Security Operations Center (SOC)",
      desc:
        "24/7 threat monitoring, detection, and rapid incident response services.",
      image:
        soc,
      details: {
        overview:
          "Round-the-clock monitoring using SIEM and advanced threat intelligence platforms.",
        why:
          "Continuous monitoring reduces attack dwell time and business disruption.",
        features: [
          "SIEM Monitoring",
          "Threat Intelligence",
          "Incident Handling",
          "Log Management",
        ],
      },
    },
    {
      title: "Digital Forensics",
      desc:
        "Investigate cyber incidents and securely collect digital evidence.",
      image:
        digitalforensics,
      details: {
        overview:
          "Professional investigations for cybercrime, fraud detection, and legal proceedings.",
        why:
          "Proper evidence handling ensures legal admissibility and compliance.",
        features: [
          "Evidence Collection",
          "Malware Analysis",
          "Data Recovery",
          "Court-Ready Reporting",
          
        ],
      },
    },
     {
      title: "Compliance & Risk Management",
      desc:
        "Ensure regulatory compliance while reducing enterprise security risks.",
      image:
        risk_management,
      details: {
        overview:
          "Governance, risk, and compliance frameworks tailored to enterprise needs.",
        why:
          "Regulatory violations can cause financial penalties and reputational damage.",
        features: [
          "Risk Assessment",
          "Policy Development",
          "ISO Compliance",
          "Audit Support",
        ],
      },
    },
    {
      title: "Endpoint Security",
      desc:
        "Protect laptops, desktops, and mobile devices from ransomware and malware.",
      image:
        endpoint_sec,
      details: {
        overview:
          "Advanced endpoint detection and response solutions for device-level security.",
        why:
          "Endpoints are common entry points for cyber attacks.",
        features: [
          "EDR Deployment",
          "Malware Protection",
          "Patch Management",
          "Device Control",
        ],
      },
    },
    {
      title: "Email Security",
      desc:
        "Prevent phishing, spoofing, and malware-based email attacks.",
      image:
        email_sec,
      details: {
        overview:
          "Comprehensive email filtering, DMARC setup, and threat detection.",
        why:
          "Email remains the number one vector for cyber attacks.",
        features: [
          "Spam Filtering",
          "Phishing Detection",
          "DMARC Setup",
          "Malware Scanning",
        ],
      },
    },
    {
      title: "Data Loss Prevention (DLP)",
      desc:
        "Monitor and safeguard sensitive business data from unauthorized exposure.",
      image:
        dataloss,
      details: {
        overview:
          "Prevent data leakage across endpoints, email, and cloud environments.",
        why:
          "Data breaches lead to financial loss and brand damage.",
        features: [
          "Data Classification",
          "Policy Enforcement",
          "Encryption Control",
          "Activity Monitoring",
        ],
      },
    },
    {
      title: "Zero Trust Security",
      desc:
        "Implement zero trust architecture to eliminate implicit trust.",
      image:
       zerosecurity,
      details: {
        overview:
          "Continuous identity verification and micro-segmentation strategy.",
        why:
          "Traditional trust-based access models are outdated and risky.",
        features: [
          "Least Privilege Access",
          "Continuous Verification",
          "Micro-Segmentation",
          "Identity Validation",
        ],
      },
    },
    {
      title: "Identity & Access Management (IAM)",
      desc:
        "Centralize and secure digital identity lifecycle management.",
      image:
        iam,
      details: {
        overview:
          "Comprehensive identity governance with MFA and privileged access management.",
        why:
          "Unauthorized access remains a leading cause of breaches.",
        features: [
          "SSO Integration",
          "Multi-Factor Authentication",
          "Role-Based Access",
          "Privileged Access Management",
        ],
      },
    },
    {
      title: "Incident Response & Management",
      desc:
        "Rapid containment and recovery from cybersecurity incidents.",
      image:
        incident,
      details: {
        overview:
          "Complete lifecycle response from detection to recovery.",
        why:
          "Fast response minimizes financial and operational impact.",
        features: [
          "Incident Detection",
          "Containment Strategy",
          "Eradication",
          "Recovery Planning",
        ],
      },
    },
    {
      title: "Threat Intelligence",
      desc:
        "Proactively monitor emerging threats and global threat actors.",
      image:
        threat_intelligence,
      details: {
        overview:
          "Actionable insights through real-time threat feeds and dark web monitoring.",
        why:
          "Understanding threat landscapes improves defense strategies.",
        features: [
          "Threat Feeds",
          "Dark Web Monitoring",
          "IOC Analysis",
          "Risk Alerts",
        ],
      },
    },
    {
      title: "Cybersecurity Consulting",
      desc:
        "Strategic advisory services to design and strengthen security posture.",
      image:
        cybersecurity_consulting,
      details: {
        overview:
          "Expert-led strategy development and security architecture design.",
        why:
          "Long-term security requires strong governance and planning.",
        features: [
          "Security Roadmap",
          "Architecture Design",
          "Gap Analysis",
          "Board-Level Reporting",
        ],
      },
    },
  ];

  useEffect(() => {
    // Scrollbar style
    document.documentElement.style.scrollbarGutter = "stable";

    // 1️⃣ Get service slug from URL (from footer link)
    const params = new URLSearchParams(location.search);
    const serviceSlug = params.get("service");

    if (serviceSlug) {
      const service = services.find((s) => getSlug(s.title) === serviceSlug);
      if (service) {
        setActiveService(service);
        window.scrollTo({ top: 0 });
        return;
      }
    }

    // 2️⃣ Restore from sessionStorage if exists
    const savedService = sessionStorage.getItem("activeService");
    if (savedService) {
      setActiveService(JSON.parse(savedService));
      window.scrollTo({ top: 0 });
    }
  }, [location.search]);

  return (
    <div className="bg-white text-slate-800">
      {/* GRID + HERO */}
      {!activeService && (
        <>
          {/* Hero Section */}
          <section className="bg-gradient-to-br from-white via-[#f4f8fc] to-[#e6f0fa] pt-24 pb-20 px-6 border-b border-slate-200">
            <div className="max-w-7xl mx-auto">
              <span className="text-sm uppercase tracking-widest text-[#163d82] font-semibold">
                Our Services
              </span>

              <h1 className="text-4xl lg:text-5xl font-extrabold mt-4 mb-5 leading-tight text-[#0b2a5b]">
                Enterprise Cybersecurity <br />
                <span className="text-[#163d82]">Services & Solutions</span>
              </h1>

              <p className="text-slate-700 text-base lg:text-lg leading-relaxed max-w-3xl">
                We provide end-to-end cybersecurity services designed to defend,
                detect, and respond to modern cyber threats.
              </p>
            </div>
          </section>

          {/* Services Grid */}
          <section className="py-20 px-6 bg-white">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col group"
                >
                  <div className="relative w-full aspect-[16/9] bg-slate-100 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-lg font-semibold text-[#0b2a5b] mb-3">
                      {service.title}
                    </h3>

                    <p className="text-slate-600 text-sm leading-relaxed mb-6">
                      {service.desc}
                    </p>

                    <Link
                      to={`/services?service=${getSlug(service.title)}`}
                      className="mt-auto text-sm font-semibold text-[#163d82] hover:text-[#0b2a5b]"
                      onClick={() =>
                        sessionStorage.setItem(
                          "activeService",
                          JSON.stringify(service)
                        )
                      }
                    >
                      View More →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </>
      )}

      {/* SINGLE DETAIL PAGE */}
      {activeService && (
        <div className="bg-slate-50">
          {/* Hero */}
          <div className="relative h-[320px] w-full overflow-hidden">
            <img
              src={activeService.image}
              alt={activeService.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0b2a5b]/95 via-[#163d82]/90 to-[#0b2a5b]/95" />
            <button
              onClick={() => {
                window.scrollTo({ top: 0 });
                setActiveService(null);
                sessionStorage.removeItem("activeService");
              }}
              className="absolute top-6 left-6 z-20 bg-white text-[#0b2a5b] px-5 py-2 rounded-full text-sm font-semibold shadow-md hover:bg-slate-100 transition"
            >
              ← Back to Services
            </button>
            <div className="relative z-10 max-w-6xl mx-auto px-6 h-full flex flex-col justify-center text-white">
              <h1 className="text-4xl font-bold leading-tight max-w-3xl">
                {activeService.title}
              </h1>
              <p className="mt-6 text-lg text-blue-100 max-w-2xl leading-relaxed">
                {activeService.details.why}
              </p>
            </div>
          </div>

          {/* Content */}
          <section className="py-14 px-6">
            <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-12 items-stretch">
              {/* LEFT */}
              <div className="lg:col-span-2 space-y-10">
                <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-10">
                  <h3 className="text-2xl font-bold text-[#0b2a5b] mb-6">
                    Overview
                  </h3>
                  <p className="text-slate-700 leading-relaxed text-lg">
                    {activeService.details.overview}
                  </p>
                </div>

                <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-10">
                  <h3 className="text-2xl font-bold text-[#0b2a5b] mb-8">
                    Key Features
                  </h3>

                  <div className="grid md:grid-cols-2 gap-6">
                    {activeService.details.features.map((item, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-4 bg-slate-50 p-6 rounded-xl border border-slate-200"
                      >
                        <div className="w-8 h-8 flex items-center justify-center rounded-full bg-[#163d82] text-white font-bold text-sm">
                          ✓
                        </div>
                        <span className="text-slate-700 text-base">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* RIGHT SIDEBAR */}
              <div className="flex flex-col h-full space-y-8">
                <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
                  <h4 className="text-lg font-semibold text-[#0b2a5b] mb-4">
                    Service Snapshot
                  </h4>
                  <ul className="space-y-3 text-sm text-slate-600">
                    <li>✔ Enterprise-Grade Protection</li>
                    <li>✔ Compliance Ready</li>
                    <li>✔ Risk-Based Approach</li>
                    <li>✔ Expert-Led Execution</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-[#163d82] to-[#0b2a5b] rounded-2xl p-8 text-white shadow-md flex flex-col justify-between flex-grow">
                  <div>
                    <h4 className="text-xl font-semibold mb-4">
                      Need Expert Assistance?
                    </h4>
                    <p className="text-sm text-blue-100 mb-6 leading-relaxed">
                      Our cybersecurity specialists are ready to help secure your organization with tailored, enterprise-grade solutions.
                    </p>
                  </div>
                  <Link to="/contact">
                    <button className="w-full bg-white text-[#0b2a5b] font-semibold py-3 rounded-lg hover:bg-slate-100 transition">
                      Contact Security Team
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}
    </div>
  );
};

export default Services;
