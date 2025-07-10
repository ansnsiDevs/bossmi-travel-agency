import React from 'react';
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTiktok,
  FaXTwitter,
} from 'react-icons/fa6';

const testimonials = [
  {
    name: "Mary Achieng",
    country: "Dubai",
    videoUrl: "https://www.youtube.com/embed/tgbNymZ7vqY",
    quote:
      "BOSSMI helped me find a rewarding job in Dubai. The process was smooth, and their support was amazing!",
  },
  {
    name: "John Otieno",
    country: "Oman",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    quote:
      "From application to departure, BOSSMI guided me like family. I now work in Oman and love the opportunity.",
  },
  {
    name: "Sarah Wanjiru",
    country: "Japan",
    videoUrl: "https://www.youtube.com/embed/aqz-KE-bpKQ",
    quote:
      "Attending the Agriculture Summit in Japan changed my life. Thank you BOSSMI for this chance!",
  },
  {
    name: "Peter Mwangi",
    country: "Qatar",
    videoUrl: "https://www.youtube.com/embed/oHg5SJYRHA0",
    quote:
      "BOSSMI made everything easy — from job matching to travel arrangements. Highly recommended!",
  },
  {
    name: "Lilian Njeri",
    country: "Saudi Arabia",
    videoUrl: "https://www.youtube.com/embed/FTQbiNvZqaY",
    quote:
      "I am now financially independent and working in Riyadh, all thanks to BOSSMI’s support.",
  },
];

const socialVideos = [
  {
    platform: 'YouTube',
    icon: <FaYoutube className="text-red-600" />,
    videoUrl: 'https://www.youtube.com/embed/aqz-KE-bpKQ?autoplay=1&mute=1&controls=1',
    link: 'https://youtube.com',
  },
  {
    platform: 'Instagram',
    icon: <FaInstagram className="text-pink-500" />,
    videoUrl: '', // Instagram doesn't allow direct embed
    link: 'https://instagram.com',
  },
  {
    platform: 'TikTok',
    icon: <FaTiktok className="text-black" />,
    videoUrl: '', // TikTok embed not supported natively
    link: 'https://www.tiktok.com',
  },
];

const Testimonials = () => {
  return (
    <section className="bg-gray-100 py-14 px-4 md:px-12">
      {/* Section Header */}
      <h2 className="text-4xl font-extrabold text-center mb-4 text-[#002C4B]">
        Hear from Our Happy Travelers 🌍
      </h2>
      <p className="text-center text-gray-700 mb-10 max-w-3xl mx-auto">
        BOSSMI Travel Agency is all about impact. See how we've changed lives by opening doors to global opportunities.
      </p>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transition duration-300"
          >
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src={`${testimonial.videoUrl}?autoplay=1&mute=1&controls=1`}
                title={`Testimonial from ${testimonial.name}`}
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
                loading="lazy"
                className="w-full h-64"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-bold text-gray-800">{testimonial.name}</h3>
              <span className="text-sm text-blue-500 font-semibold">From {testimonial.country}</span>
              <p className="text-gray-600 mt-2 text-sm italic">“{testimonial.quote}”</p>
            </div>
          </div>
        ))}
      </div>

      {/* Japan Enrollment Section */}
      <div className="bg-white p-8 rounded-lg shadow-xl max-w-5xl mx-auto mb-16">
        <h3 className="text-3xl font-bold text-center text-[#C8102E] mb-4">
          Study & Work in Japan 🇯🇵
        </h3>
        <p className="text-gray-700 text-center max-w-3xl mx-auto mb-4">
          We are now enrolling passionate students for our Japan Work-Study program. Learn the Japanese language,
          immerse yourself in a vibrant culture, and unlock opportunities in tech, agriculture, caregiving, and more.
        </p>
        <ul className="text-gray-700 list-disc list-inside mb-6">
          <li>💼 Job placement support</li>
          <li>🎓 Japanese language classes ongoing (Beginner)</li>
          <li>📝 Registration open – limited slots available!</li>
        </ul>
        <div className="text-center space-y-3">
          <a
            href="https://meet.google.com/lookup/xyz-demo-link"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#002C4B] text-white px-6 py-3 rounded hover:bg-[#004b70] transition"
          >
            Join Sample Google Meet Session
          </a>
          <br />
          <a
            href="https://www.youtube.com/watch?v=aqz-KE-bpKQ"
            className="text-blue-600 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            📹 Watch this video to learn more
          </a>
        </div>
      </div>

      {/* Social Media Link Tree with Previews */}
      <div className="bg-white mt-20 p-8 rounded-lg shadow-lg text-center max-w-6xl mx-auto">
        <h4 className="text-2xl font-bold mb-6">Explore BOSSMI on Social Media 🎥</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {socialVideos.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              {item.videoUrl ? (
                <iframe
                  src={item.videoUrl}
                  title={`${item.platform} Preview`}
                  className="w-full h-48 rounded-md"
                  allow="autoplay; encrypted-media"
                  loading="lazy"
                />
              ) : (
                <div className="w-full h-48 flex items-center justify-center border rounded-md bg-gray-50 text-gray-400 italic">
                  Preview not available
                </div>
              )}
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 text-blue-600 underline flex items-center gap-2"
              >
                {item.icon} Watch on {item.platform}
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Social Icons */}
      <div className="text-center mt-12">
        <h4 className="text-xl font-bold text-gray-800 mb-4">
          Connect with BOSSMI on Social Media
        </h4>
        <div className="flex justify-center gap-6 text-2xl">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FaFacebookF className="text-blue-600 hover:scale-125 transition-transform" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram className="text-pink-500 hover:scale-125 transition-transform" />
          </a>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
            <FaYoutube className="text-red-600 hover:scale-125 transition-transform" />
          </a>
          <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
            <FaTiktok className="text-black hover:scale-125 transition-transform" />
          </a>
          <a href="https://x.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter/X">
            <FaXTwitter className="text-gray-800 hover:scale-125 transition-transform" />
          </a>
        </div>
        <p className="text-sm text-gray-600 mt-4">Follow us for updates, events, and job alerts!</p>
      </div>
    </section>
  );
};

export default Testimonials;
