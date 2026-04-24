
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  HiShieldCheck,
  HiClock,
  HiDocumentText,
  HiChartBar,
  HiUsers,
  HiAcademicCap,
  HiArrowLeft,
} from "react-icons/hi";

import { servicesData } from "./servicesData";

const ServiceDetail = () => {
  const { id } = useParams();
  const [service, setService] = useState    (null);

  useEffect(() => {
    const foundService = servicesData.find((s) => s.id === parseInt(id));
    setService(foundService);
    window.scrollTo(0, 0);
  }, [id]);

  const getIcon = (iconName) => {
    const icons = {
      "shield-check": HiShieldCheck,
      clock: HiClock,
      "document-text": HiDocumentText,
      "chart-bar": HiChartBar,
      users: HiUsers,
      "academic-cap": HiAcademicCap,
    };
    return icons[iconName] || HiShieldCheck;
  };

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">
            Service not found
          </h2>
          <Link to="/services" className="text-[#0b2a5b] hover:underline">
            Back to Services
          </Link>
        </div>
      </div>
    );
  }

  const IconComponent = getIcon(service.icon);

  return (
    <div className="bg-[#0b2a5b] py-6 sm:py-10">

      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Back Button */}
        <Link
          to="/services"
          className="inline-flex items-center text-[#0b2a5b] font-semibold
          bg-white px-4 py-2 rounded-full mb-6 hover:-translate-x-1 transition"
        >
          <HiArrowLeft className="mr-2" />
          Back to Services
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl shadow-xl overflow-hidden"
        >

          {/* HEADER */}
          <div className="bg-slate-100 px-6 py-10 sm:px-10 text-center shadow-md shadow-[#0b2a5b]">

            <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-2 text-[#0b2a5b]">
              {service.title}
            </h1>

            <p className="text-sm sm:text-lg max-w-3xl mx-auto text-black">
              {service.description}
            </p>

          </div>

          {/* CONTENT */}
          <div className="px-6 py-10 sm:px-10 lg:px-16">

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

              {/* LEFT CONTENT */}
              <div className="lg:col-span-2 space-y-8">

                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#0b2a5b] mb-4 border-l-4 border-[#0b2a5b] pl-4">
                    Overview
                  </h3>

                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                    {service.details}
                  </p>
                </div>

                <div className="bg-blue-50 rounded-xl p-6 sm:p-8 border border-blue-100">
                  <h4 className="text-lg sm:text-xl font-bold text-[#0b2a5b] mb-3">
                    Why This Matters
                  </h4>

                  <p className="text-gray-700 text-sm sm:text-base">
                    In today's digital landscape, robust security measures are
                    essential. {service.title} helps mitigate risks and ensures
                    operational resilience.
                  </p>
                </div>

              </div>

              {/* RIGHT SIDEBAR */}
              <div className="lg:col-span-1">

                <div className="bg-gray-50 shadow-lg rounded-2xl p-6 sm:p-8 lg:sticky lg:top-24">

                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-6">
                    Key Features
                  </h3>

                  <ul className="space-y-4">

                    {service.features.map((feature, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-start"
                      >

                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-1">
                          <HiShieldCheck className="w-4 h-4 text-[#0b2a5b]" />
                        </div>

                        <span className="text-gray-700 text-sm sm:text-base">
                          {feature}
                        </span>

                      </motion.li>
                    ))}

                  </ul>

                  {/* CTA */}
                  <div className="mt-8 pt-6 border-t">

                    <h4 className="text-lg font-bold text-[#0b2a5b] mb-4">
                      Need this service?
                    </h4>

                    <Link
                      to="/contact"
                      className="block w-full text-center py-3 rounded-xl
                      bg-[#0b2a5b] text-white font-semibold
                      hover:bg-[#081c3a] transition"
                    >
                      Get a Quote
                    </Link>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </motion.div>

      </div>

    </div>
  );
};

export default ServiceDetail;

