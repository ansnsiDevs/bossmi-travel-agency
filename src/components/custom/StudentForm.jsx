import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { toast, Toaster } from "react-hot-toast";
import { Download } from "lucide-react";

const StudentForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    residence: "",
    hasPassport: false,
    hasPoliceClearance: false,
    workedAbroad: false,
    profession: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      ...formData,
    };

    emailjs
      .send("service_b5pgk8i", "your_template_id", templateParams, "YGyaXSLM1mQdE5Ckxy")
      .then(() => toast.success("Appointment request sent successfully!"))
      .catch((error) => toast.error("Submission failed: " + error.text));
  };

  return (
    <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-lg p-6 my-10">
      <Toaster position="top-right" />

      {/* 🔽 Download Buttons */}
      <div className="flex justify-end gap-4 mb-6">
        <a
          href="/job-posts.pdf"
          download
          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-800 transition"
        >
          <Download size={18} />
          Download Job Brochure
        </a>
        <a
          href="/travel-requirements.pdf"
          download
          className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-800 transition"
        >
          <Download size={18} />
          Travel Requirements PDF
        </a>
      </div>

      <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
        ✈️ Book Your BOSSMI Appointment
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* User Inputs */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md p-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md p-2"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">Area of Residence</label>
            <input
              type="text"
              name="residence"
              value={formData.residence}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md p-2"
            />
          </div>
        </div>

        {/* Profession Select */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Choose Profession</label>
          <select
            name="profession"
            value={formData.profession}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-md p-2"
          >
            <option value="">Select your field of interest</option>
            <option value="Driver">Driver</option>
            <option value="General Helper">General Helper</option>
            <option value="Chef">Chef</option>
            <option value="Masonry">Masonry</option>
            <option value="Carpenter">Carpenter</option>
            <option value="Housekeeper">Housekeeper</option>
          </select>
        </div>

        {/* Checklist */}
        <fieldset className="border p-4 rounded-md">
          <legend className="text-lg font-semibold text-gray-700 mb-2">✔️ Quick Checklist</legend>
          <div className="space-y-2">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                name="hasPassport"
                checked={formData.hasPassport}
                onChange={handleChange}
              />
              I have a valid passport
            </label>

            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                name="hasPoliceClearance"
                checked={formData.hasPoliceClearance}
                onChange={handleChange}
              />
              I have a Police Good Conduct Certificate
            </label>

            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                name="workedAbroad"
                checked={formData.workedAbroad}
                onChange={handleChange}
              />
              I have worked outside Kenya before
            </label>
          </div>
        </fieldset>

        {/* Submit */}
        <div className="text-right">
          <button
            type="submit"
            className="bg-[#00879E] text-white px-8 py-2 rounded-md font-semibold hover:bg-[#FED16A] hover:text-black transition"
          >
            Book Appointment
          </button>
        </div>
      </form>
    </div>
  );
};

export default StudentForm;
