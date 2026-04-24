// src/Pages/Contact.jsx
import React, { useState } from "react";
import { MapPin, Phone, Mail, Clock, ShieldCheck } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");
    if (!token) {
      alert("Please login first to submit your inquiry.");
      return;
    }

    setLoading(true);
    setSuccess("");
    setError("");

    try {
      const response = await fetch("http://localhost:5000/api/inquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          title: formData.name,
          description: `
Email: ${formData.email}
Phone: ${formData.phone}
Message: ${formData.message}
          `,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "Submission failed");
        setLoading(false);
        return;
      }

      setSuccess("Inquiry submitted successfully ✅");
      setFormData({ name: "", email: "", phone: "", message: "" });
      setLoading(false);
    } catch (err) {
      console.error(err);
      setError("Server error. Please try again.");
      setLoading(false);
    }
  };

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-slate-50 to-slate-100">
      <div className="max-w-7xl mx-auto">

        <div className="mb-14 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            Connect with CodeVirus Security
          </h2>
          <p className="text-slate-600 max-w-3xl mx-auto leading-relaxed">
            We help organizations secure critical infrastructure, protect
            sensitive data, and manage cyber risk through compliant,
            intelligence-driven cybersecurity services.
          </p>
        </div>

        <div className="bg-white border border-slate-200 rounded-md shadow-sm p-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">

            <div className="space-y-7">
              <div className="flex items-start gap-4">
                <MapPin size={22} className="text-[#0b2a5b] mt-1" />
                <div>
                  <h4 className="font-semibold text-slate-900">Office Location</h4>
                  <p className="text-slate-600 text-sm">Lucknow, India</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail size={22} className="text-[#0b2a5b] mt-1" />
                <div>
                  <h4 className="font-semibold text-slate-900">Business Email</h4>
                  <a
                    href="mailto:services@codevirussec.in"
                    className="text-[#0b2a5b] text-sm hover:underline"
                  >
                    services@codevirussec.in
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone size={22} className="text-[#0b2a5b] mt-1" />
                <div>
                  <h4 className="font-semibold text-slate-900">Contact Number</h4>
                  <p className="text-slate-600 text-sm">+91 9918103909</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock size={22} className="text-[#0b2a5b] mt-1" />
                <div>
                  <h4 className="font-semibold text-slate-900">Business Hours</h4>
                  <p className="text-slate-600 text-sm">
                    Mon – Fri | 10:00 AM – 6:00 PM
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-slate-900">
                Why Choose Our Cybersecurity Services?
              </h3>

              <div className="flex items-start gap-3">
                <ShieldCheck className="text-[#0b2a5b] mt-1" size={20} />
                <div>
                  <p className="font-semibold text-slate-900 text-sm">
                    24/7 Monitoring
                  </p>
                  <p className="text-slate-600 text-sm">
                    Round-the-clock security monitoring and threat detection.
                  </p>
                </div>
              </div>
            </div>

            <div className="border border-slate-200 rounded-md p-6 bg-slate-50">
              <h3 className="text-base font-semibold text-slate-900 mb-4">
                Request a Security Consultation
              </h3>

              <form onSubmit={handleSubmit} className="space-y-3">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full Name"
                  className="w-full border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:border-[#0b2a5b]"
                  required
                />

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  className="w-full border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:border-[#0b2a5b]"
                  required
                />

                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  className="w-full border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:border-[#0b2a5b]"
                  required
                />

                <textarea
                  name="message"
                  rows="3"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Briefly describe your requirement"
                  className="w-full border border-slate-300 px-3 py-2 text-sm resize-none focus:outline-none focus:border-[#0b2a5b]"
                ></textarea>

                {success && <p className="text-green-600 text-sm">{success}</p>}
                {error && <p className="text-red-600 text-sm">{error}</p>}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#0b2a5b] hover:bg-[#0b2a8b] text-white py-2 rounded-md text-sm font-semibold transition"
                >
                  {loading ? "Submitting..." : "Submit Inquiry"}
                </button>
              </form>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
