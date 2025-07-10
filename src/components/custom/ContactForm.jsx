import React, { useState } from "react";
import { motion } from "framer-motion";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    // Submit logic goes here
  };

  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        {/* Form */}
        <div className="bg-gray-50 p-8 rounded-xl shadow-md">
          <h2 className="text-3xl font-bold text-black mb-6">Get In Touch</h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Your Name
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg  "
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg f"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Phone Number <span className="text-xs text-cyan-500">(Kenya +254)</span>
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg "
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-red-700 mb-1">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                required
                className="w-full px-4 py-2 border border-blue-300 rounded-lg resize-none "
              ></textarea>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full bg-black text-white px-6 py-2 rounded-full font-semibold  transition"
            >
              Contact Us
            </motion.button>

            {submitted && (
              <motion.p
                className="text-green-600 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                Your message has been sent successfully!
              </motion.p>
            )}
          </form>
        </div>

        {/* Contact Info */}
        <div className="bg-gray-600 p-8 rounded-xl shadow-md">
          <h3 className="text-2xl font-semibold text-black mb-6">Contact Information and Office addresses</h3>
          <div className="space-y-6 text-gray-100 text-base">
            <div className=" flex items-center gap-3">
              <MdLocationOn className="text-black text-3xl grid-cols-1" />
                 <span className="text-xl font-bold">Nairobi Offices </span> <br />
              
            </div>
            <span className="text-sm">Biashara Street, Biashara Plaza, 5th Floor, Office Suite R9, Nairobi </span>
            <div className="flex items-center gap-3">
              <MdPhone className="text-black text-2xl" />
            
                 <span className="text-white pt-2">+254 794789494/ 254 743635098</span>
            </div>
            <div className="flex gap-2">
              <MdEmail className="text-black text-2xl" />
                <span>bossmirecruitmentagency@gmail.com</span>

            </div>
              
            
            <div className=" flex items-center gap-3 pt-6">
              <MdLocationOn className="text-black text-3xl grid-cols-1" />
                 <span className="text-xl font-bold">Kitale Offices </span> <br />
              
            </div>
            <span className="text-sm">New Ambwere House, 2nd Floor, Office Suite R2, Kitale </span>
            <div className="flex items-center gap-3">
              <MdPhone className="text-black text-2xl" />
              <h1></h1>
              <span className="text-white">+254 794789494/ 254 743635098</span>
            </div>
            <div className="flex items-center gap-3">
              <MdEmail className="text-black text-2xl" />
              <span>bossmirecruitmentagency@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
