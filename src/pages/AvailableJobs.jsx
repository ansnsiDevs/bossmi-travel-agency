import React, { useState } from "react";
import { motion } from "framer-motion";
import ParallaxCardWrapper from "../components/custom/ParallaxCardWrapper";
import ProgrammeCard from "../components/custom/ProgrammeCard";

const jobData = [
  {
    jobTitle: "Caregiver",
    description: "Join reputable healthcare facilities in Japan providing elderly care support with cultural training.",
    requirements: [
      "Valid Passport",
      "Police Clearance Certificate",
      "Medical Checkup",
      "Basic Japanese Language (N5)",
    ],
  },
  {
    jobTitle: "Construction Worker",
    description: "Assist in modern infrastructure projects in Qatar with competitive pay and safe working conditions.",
    requirements: ["Passport", "Medical Fitness", "Vocational Training"],
  },
  {
    jobTitle: "Hotel Attendant",
    description: "Work in high-end hotels in the UAE — a great fit for hospitality enthusiasts.",
    requirements: ["Passport", "Fluent English", "Hospitality Certificate"],
  },
  {
    jobTitle: "Farm Assistant",
    description: "Get hands-on agricultural experience in Oman under seasonal internship programs.",
    requirements: ["Passport", "Police Clearance", "Physically Fit"],
  },
  {
    jobTitle: "Domestic Worker",
    description: "Opportunities available in Saudi Arabia for trained domestic support staff.",
    requirements: ["Passport", "Clean Conduct Record", "Training Certificate"],
  },
  {
    jobTitle: "Warehouse Assistant",
    description: "Support logistics operations in Dubai with housing and transport provided.",
    requirements: ["Passport", "Work Readiness", "Team Spirit"],
  },
  // Add more job entries as needed
];

const ITEMS_PER_PAGE = 3;

const AvailableJobs = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(jobData.length / ITEMS_PER_PAGE);

  const paginatedJobs = jobData.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handlePageChange = (pageNum) => {
    if (pageNum >= 1 && pageNum <= totalPages) {
      setCurrentPage(pageNum);
    }
  };

  return (
    <motion.div>
      <div className="bg-gray-200 py-10">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-extrabold text-center mb-4 text-black">
            Explore Jobs Abroad with BOSSMI 🌍
          </h1>
          <p className="font-medium text-center max-w-3xl mx-auto">
            BOSSMI connects you to global work opportunities that transform lives.
            <br />
            <span className="text-red-700 text-xl">
              Ready to take the first step? Start here.
            </span>
          </p>
        </div>
      </div>

      {/* Job Cards Grid */}
      <div className="pt-14 px-4 grid gap-8 grid-cols-1 md:grid-cols-2 w-full max-w-full mx-auto">
        {paginatedJobs.map((job, index) => (
          <ParallaxCardWrapper key={index}>
            <ProgrammeCard
              question={job.jobTitle}
              answer={job.description}
              requirements={job.requirements}
            />
          </ParallaxCardWrapper>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-10 space-x-2">
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            className={`px-4 py-2 rounded-full text-sm font-semibold border transition ${
              currentPage === index + 1
                ? "bg-[#00879E] text-white border-[#00879E]"
                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
            }`}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </motion.div>
  );
};

export default AvailableJobs;
