import React, { useState } from "react";
import { motion } from "framer-motion";

import iot1 from "../assets/Photos/iot1.png";
import soc1 from "../assets/Photos/soc1.png";
import soc2 from "../assets/Photos/soc2.png";
import soc3 from "../assets/Photos/soc3.png";
import mon1 from "../assets/Photos/mon1.png";
import threat1 from "../assets/Photos/threat1.png";
import cloudsec1 from "../assets/Photos/cloudsec1.png";
import cloudsec2 from "../assets/Photos/cloudsec2.png";
import cloudsec3 from "../assets/Photos/cloudsec3.png";
import cloudsec4 from "../assets/Photos/cloudsec4.png";
import cloudsec5 from "../assets/Photos/cloudsec5.png";
import security1 from "../assets/Photos/security1.png";
import privacy1 from "../assets/Photos/privacy1.png";
import privacy2 from "../assets/Photos/privacy2.png";
import vapt1 from "../assets/Photos/vapt1.png";
import vapt2 from "../assets/Photos/vapt2.png";
import vapt3 from "../assets/Photos/vapt3.png";
import vapt4 from "../assets/Photos/vapt4.png";

const categories = [
  "All",
  "IoT Security",
  "SOC Implementation",
  "Monitoring",
  "Threat Management",
  "Cloud Security",
  "Data Security",
  "Data Protection & Privacy",
  "VAPT",
  "SOC & Monitoring",
];

const projects = [
  {
    title: "Cyber Security Enhancement for Smart Devices",
    category: "IoT Security",
    description:
      "Advanced security solutions for IoT and smart device protection with real-time threat detection and automated response systems.",
    client: "IT Companies",
    duration: "6 Months",
    technologies: ["AI/ML", "IoT", "Blockchain", "Cloud Security"],
    image: iot1,
  },
  {
    title: "Advanced Cyber Defense & Operations Center",
    category: "SOC Implementation",
    description:
      "Comprehensive cybersecurity operations center implementation with 24/7 monitoring and incident response capabilities.",
    client: "Banking Sector",
    duration: "12 Months",
    technologies: ["SIEM", "EDR", "Threat Intelligence", "Automation"],
    image: soc1,
  },
  {
    title: "24/7 Security Monitoring & Incident Response",
    category: "Monitoring",
    description:
      "Round-the-clock security monitoring and rapid incident response system for critical infrastructure protection.",
    client: "Cyber Security",
    duration: "8 Months",
    technologies: ["Real-time Monitoring","Response Automation","AI Detection","Forensics"],
    image: mon1,
  },
  {
    title: "Cybersecurity Operations & Threat Management",
    category: "Threat Management",
    description:
      "Integrated threat management and cybersecurity operations for enterprise-level security infrastructure.",
    client: "Healthcare",
    duration: "10 Months",
    technologies: ["Threat Intelligence", "Risk Assessment", "Compliance","Analytics"],
    image: threat1,
  },
  {
    title: "Cloud Security & Compliance Framework",
    category: "Cloud Security",
    description:
      "Comprehensive cloud security framework ensuring compliance with industry standards and regulatory requirements.",
    client: "IT Companies",
    duration: "9 Months",
    technologies: ["AWS Security", "Azure Security","Compliance", "Zero Trust"],
    image: cloudsec1,
  },
  {
    title: "Enterprise Data Privacy Compliance Program",
    category: "Data Protection & Privacy",
    description:
      "Assessment and implementation of a structured privacy framework to identify data risks, exposure points, and improve data governance.",
    client: "IT Enterprise",
    duration: "5 Months",
    technologies: ["Data Classification", "Risk Assessment","Privacy Control"],
    image: privacy1,
  },
  {
    title: "Data Protection & Privacy Compliance",
    category: "Data Security",
    description:
      "End-to-end data protection and privecy compliance solutions for organizations handling sensitive information.",
    client: "Tech Industry",
    duration: "7 Months",
    technologies: ["Encryption", "GDPR","Data Governance","Privacy Tools"],
    image: security1,
  },
  {
    title: "Data Leakage Prevention (DLP) Implementation",
    category: "Data Protection & Privacy",
    description:
      "Implemented DLP controls to prevent unauthorized data leakage using monitoring, alerting, and blocking mechanisms.",
    client: "Corporate Organization",
    duration: "4 Months",
    technologies: ["DLP Solutions", "Endpoint Security","Policy Enforcement"],
    image: privacy2,
  },
  {
    title: "Cloud Infrastructure Security Audit",
    category: "Cloud Security",
    description:
      "Security audit to identify misconfigurations, exposed services, and IAM weaknesses in cloud infrastructure.",
    client: "FinTech Support",
    duration: "3 Months",
    technologies: ["AWS", "IAM","CSPM Tools"],
    image: cloudsec2,
  },
  {
    title: "Secure Cloud Migration Assessment",
    category: "Cloud Security",
    description:
      "Designed secure architecture and controls for safe migration from on-premise to cloud environments.",
    client: "Enterprise IT",
    duration: "5 Months",
    technologies: ["AWS", "Azure","Zero Trust"],
    image: cloudsec3,
  },
  {
    title: "Cloud Misconfiguration Risk Assessment",
    category: "Cloud Security",
    description:
      "Identified security risks caused by excessive permissions, open storage, and weak cloud configurations.",
    client: "SaaS Provider",
    duration: "3 Months",
    technologies: ["Cloud Auditing", "IAM Review"],
    image: cloudsec4,
  },
  {
    title: "Cloud Compliance Readiness Review",
    category: "Cloud Security",
    description:
      "Mapped cloud security gaps against regulatory standards to prepare for compliance audits.",
    client: "Banking Sector",
    duration: "4 Months",
    technologies: ["CIS Benchmarks", "Risk Mapping"],
    image: cloudsec5,
  },
  {
    title: "Web Application VAPT",
    category: "VAPT",
    description:
      "Identified web application vulnerabilities by simulating real-world attack scenarios.",
    client: "E-Commerce Platform",
    duration: "2 Months",
    technologies: ["Burp Suite", "OWASP Top 10"],
    image: vapt1,
  },
  {
    title: "Network Penetration Testing",
    category: "VAPT",
    description:
      "Internal and external network penetration testing including exploitation and lateral movement.",
    client: "Corporate Network",
    duration: "3 Months",
    technologies: ["Nmap", "Metasploit"],
    image: vapt2,
  },
  {
    title: "API Security Assessment",
    category: "VAPT",
    description:
      "Security testing of APIs aligned with OWASP API Security Top 10.",
    client: "FinTech Application",
    duration: "2 Months",
    technologies: ["Postman", "OAuth","JWT"],
    image: vapt3,
  },
  {
    title: "Cloud VAPT  ",
    category: "VAPT",
    description:
      "Tested cloud assets for identity abuse, misconfigurations, and exposed interfaces.",
    client: "SaaS Organization",
    duration: "3 Months",
    technologies: ["Cloud Security Tools", "IAM Testing"],
    image: vapt4,
  },
  {
    title: "SOC Implementation & SIEM Deployment",
    category: "SOC & Monitoring",
    description:
      "Designed and implemented SOC with SIEM integration and escalation workflows.",
    client: "Banking Sector",
    duration: "12 Months",
    technologies: ["SIEM", "Threat Monitoring"],
    image: soc2,
  },
  {
    title: "24×7 Security Monitoring Setup",
    category: "SOC & Monitoring",
    description:
      "Continuous security monitoring with real-time alerts and incident handling.",
    client: "IT Enterprise",
    duration: "8 Months",
    technologies: ["Real-time Monitoring", "Incident Response"],
    image: soc3,
  },
];

export default function Projects({ preview = false }) {
  const [activeCategory, setActiveCategory] = useState("All");

  let filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  if (preview) {
    filteredProjects = projects.slice(0, 3);
  }

  return (
    <div className="pt-16 pb-16 bg-slate-100 w-full">
      
      {/* HERO SECTION */}
      {!preview && (
        <section className="w-full pt-12 pb-16">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#0b2a5b] mb-6">
              Codevirus Cybersecurity Projects & Case Studies
            </h1>
            <p className="text-lg text-slate-600 max-w-4xl mx-auto">
              Enterprise-grade cybersecurity implementations across SOC,
              Cloud, IoT, Data Protection, and Threat Management domains.
            </p>
          </div>
        </section>
      )}

      {/* FILTER BUTTONS */}
      {!preview && (
        <section className="w-full pb-10">
          <div className="max-w-6xl mx-auto px-6 flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition ${
                  activeCategory === cat
                    ? "bg-[#0b2a5b] text-white shadow-lg"
                    : "bg-white border border-slate-200 text-slate-700 hover:border-[#0b2a5b]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </section>
      )}

      {/* PROJECT CARDS */}
      <section className="w-full">
        {/* PREVIEW HEADLINE */}
        {preview && (
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0b2a5b]">
              Our Featured Cybersecurity Projects
            </h2>
            <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
              A glimpse of our enterprise-grade cybersecurity implementations.
            </p>
          </div>
        )}
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
         
          {filteredProjects.map((project, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8 }}
              className="rounded-2xl overflow-hidden bg-[#0f1f3d] border border-[#1d3b6d] shadow-lg hover:shadow-2xl transition-all"
            >
              {/* IMAGE */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                {!preview && (
                  <span className="absolute top-4 left-4 bg-white text-[#0b2a5b] text-xs font-semibold px-4 py-1 rounded-full shadow-md">
                    {project.category}
                  </span>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b2a5b]/80 via-transparent to-transparent"></div>
              </div>

              {/* CONTENT */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 leading-snug">
                  {project.title}
                </h3>

                <p className="text-slate-300 text-sm mb-5">
                  {preview
                    ? project.description.substring(0, 90) + "..."
                    : project.description}
                </p>

                {!preview && (
                  <>
                    <div className="text-sm text-slate-400 mb-4 space-y-1">
                      <p>
                        <span className="font-semibold text-white">
                          Client:
                        </span>{" "}
                        {project.client}
                      </p>
                      <p>
                        <span className="font-semibold text-white">
                          Duration:
                        </span>{" "}
                        {project.duration}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="bg-[#1d3b6d] text-slate-200 text-xs px-3 py-1 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* VIEW ALL BUTTON */}
        {preview && (
          <div className="text-center mt-12">
            <a
              href="/project"
              className="px-8 py-3 bg-[#0b2a5b] text-white rounded-full font-semibold hover:bg-[#081c3a] transition"
            >
              View All Projects
            </a>
          </div>
        )}
      </section>
    </div>
  );
}
