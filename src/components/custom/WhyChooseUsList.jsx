import React from "react";
import WhyChooseUsCard from "./WhyChooseUsCard";

const announcements = [
  {
    id: 1,
    date: "2025-07-01",
    title: "Seamless Global Travel",
    description:
      "Whether you're flying for business or leisure, BOSSMI makes booking smooth, fast, and stress-free. We connect you with the best deals and destinations worldwide.",
    icon: "airplane",
  },
  {
    id: 3,
    date: "2025-07-20",
    title: "24/7 Personalized Support",
    description:
      "Our travel experts are available around the clock to help with planning, rescheduling, or any emergencies — you're never alone when you travel with BOSSMI.",
    icon: "support",
  },
  {
    id: 4,
    date: "2025-07-25",
    title: "Best Price & Protection",
    description:
      "We guarantee competitive prices with full transparency — no hidden fees. Plus, your bookings come with flexible options and travel protection.",
    icon: "price",
  },
];

const AnnouncementsList = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <h2 className="text-4xl font-extrabold text-center mb-10 text-white">
        🏆 Why Choose BOSSMI Travel Agency?
        <p className="text-lg pt-4">
          "We don’t just book trips — we create unforgettable travel experiences."
        </p>
      </h2>

      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {announcements.map((announcement) => (
          <WhyChooseUsCard key={announcement.id} announcement={announcement} />
        ))}
      </div>
    </section>
  );
};

export default AnnouncementsList;
