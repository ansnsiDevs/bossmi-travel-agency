import React from 'react';
import { useParams } from 'react-router-dom';
import {Link} from "react-router-dom"

const courseDetails = {
  'electrical-electronics': {
    title: 'Electrical & Electronics',
    description: 'In-depth training in residential, commercial, and industrial electrical systems. This course equips students with both theoretical knowledge and hands-on experience in modern electrical practices.',
    modules: [
      "Basic electrical principles",
      "Circuit design and troubleshooting",
      "Electrical installations",
      "Electronics and microcontroller programming",
      "Safety standards and maintenance"
    ],
    requirements: "Basic secondary school education. A background in science is an added advantage.",
    outcomes: "Graduates can work as electricians, electrical technicians, or pursue further studies in engineering.",
    importance: "This course provides high-demand skills essential for both domestic and industrial settings.",
    duration: "12 months",
    fees: "KES 45,000 per term",
    expectations: "Strong electrical foundation, practical skills, industry certification, and job placement support."
  },
  'motor-vehicle-mechanics': {
    title: 'Motor Vehicle Mechanics',
    description: 'Learn the fundamentals of automobile systems including engines, transmissions, brakes, and electronics. Gain practical experience diagnosing and repairing vehicles.',
    modules: [
      "Engine repair and maintenance",
      "Brake systems and suspension",
      "Vehicle diagnostics",
      "Transmission systems",
      "Automotive electrical systems"
    ],
    requirements: "Minimum KCSE certificate. Interest in automotive technology.",
    outcomes: "Skilled in diagnosing and repairing motor vehicles. Ready for employment in garages or self-employment.",
    importance: "Automotive expertise is in high demand due to increasing motorization.",
    duration: "18 months",
    fees: "KES 60,000 per term",
    expectations: "Hands-on experience, readiness for garage or dealership employment."
  },
  'agribusiness': {
    title: 'Agribusiness',
    description: 'Combines agricultural knowledge with business skills. Students learn about sustainable farming practices, agribusiness planning, and agricultural marketing.',
    modules: [
      "Crop and livestock management",
      "Agricultural economics",
      "Farm record keeping",
      "Post-harvest technology",
      "Agricultural marketing"
    ],
    requirements: "Basic knowledge in agriculture is beneficial but not mandatory.",
    outcomes: "Entrepreneurial skills to manage or establish successful agribusiness ventures.",
    importance: "Strengthens food security and supports economic development in rural areas.",
    duration: "12 months",
    fees: "KES 35,000 per term",
    expectations: "Manage or launch agricultural businesses with confidence."
  },
  'metalwork-processing': {
    title: 'Metalwork Processing',
    description: 'Explore techniques such as welding, metal fabrication, and machining. Learn to read technical drawings and operate industrial machinery.',
    modules: [
      "Introduction to metalwork tools",
      "Welding techniques",
      "Sheet metal fabrication",
      "Machining processes",
      "Workshop safety"
    ],
    requirements: "Minimum KCPE or equivalent. Passion for hands-on technical work.",
    outcomes: "Competent in welding and fabrication, suitable for industrial employment.",
    importance: "Essential for construction and manufacturing sectors.",
    duration: "9 months",
    fees: "KES 40,000 per term",
    expectations: "Work as welder/fabricator or start own metal workshop."
  },
  'carpentry-&-joinery': {
    title: 'Carpentry & Joinery',
    description: 'This course trains students in woodworking skills including cutting, shaping, and assembling wood for furniture and construction.',
    modules: [
      "Timber technology",
      "Furniture making",
      "Roof construction",
      "Doors and window frames",
      "Finishing and polishing"
    ],
    requirements: "Minimum primary education. Desire to learn craftsmanship.",
    outcomes: "Skilled carpenter capable of self-employment or working in construction.",
    importance: "Supports infrastructure and home building industries.",
    duration: "10 months",
    fees: "KES 38,000 per term",
    expectations: "Proficient in building structures and wooden furnishings."
  },
  'masonry': {
    title: 'Masonry',
    description: 'Develop practical skills in stone and brick construction. Topics include building foundations, walling, plastering, and tiling.',
    modules: [
      "Bricklaying and block laying",
      "Concrete works",
      "Foundation and structural work",
      "Tiling and finishing",
      "Scaffolding safety"
    ],
    requirements: "KCPE or equivalent. Physical fitness is recommended.",
    outcomes: "Able to build and finish masonry structures to professional standards.",
    importance: "Masons are key to housing and infrastructure development.",
    duration: "8 months",
    fees: "KES 36,000 per term",
    expectations: "Prepared for work in construction projects or self-employment."
  },
  'fashion-design-garment-making': {
    title: 'Fashion Design & Garment Making',
    description: 'Learn to design, cut, and stitch garments. Focus on both traditional and modern clothing styles.',
    modules: [
      "Introduction to fashion design",
      "Textile science",
      "Pattern making and cutting",
      "Sewing and garment assembly",
      "Fashion illustration"
    ],
    requirements: "Creativity and interest in fashion. Basic literacy recommended.",
    outcomes: "Design and produce garments, work in the fashion industry or start own brand.",
    importance: "Promotes local talent and entrepreneurship in the fashion sector.",
    duration: "12 months",
    fees: "KES 30,000 per term",
    expectations: "Build a fashion portfolio, launch own brand or work in apparel firms."
  },
  'hairdressing-beauty-therapy': {
    title: 'Hairdressing & Beauty Therapy',
    description: 'Covers hair styling, skincare, and salon management. Ideal for those pursuing a career in beauty and wellness.',
    modules: [
      "Hair cutting and styling",
      "Facial treatments",
      "Manicure and pedicure",
      "Salon hygiene and safety",
      "Customer service"
    ],
    requirements: "Interest in personal care and grooming. Basic education level.",
    outcomes: "Operate a salon or work in beauty establishments with confidence.",
    importance: "Grooming services are always in demand and offer self-employment opportunities.",
    duration: "9 months",
    fees: "KES 25,000 per term",
    expectations: "Salon-ready skills and potential to launch own beauty brand."
  },
  'food-beverage-(hospitality)': {
    title: 'Food & Beverage (Hospitality)',
    description: 'Teaches culinary arts, hospitality management, and customer service. Prepares students for work in hotels and restaurants.',
    modules: [
      "Food preparation and presentation",
      "Beverage service techniques",
      "Restaurant operations",
      "Menu planning",
      "Sanitation and hygiene"
    ],
    requirements: "Passion for cooking and serving. KCPE or equivalent recommended.",
    outcomes: "Ready for hotel kitchens, catering jobs or hospitality business startup.",
    importance: "Culinary professionals are crucial to hospitality and tourism sectors.",
    duration: "12 months",
    fees: "KES 32,000 per term",
    expectations: "Operate a restaurant, work in hotels, or cater professionally."
  },
  'information-communication-technology-(ict)': {
    title: 'Information Communication Technology (ICT)',
    description: 'Focuses on computer systems, networking, and software applications. Builds foundational and advanced digital skills.',
    modules: [
      "Computer hardware and software",
      "Office applications (Word, Excel, etc.)",
      "Internet and email usage",
      "Basic programming",
      "Networking fundamentals"
    ],
    requirements: "Basic literacy and numeracy skills. Interest in computers is essential.",
    outcomes: "Prepared for IT support roles, data entry, or further ICT studies.",
    importance: "ICT is vital across all industries; digital skills are a must.",
    duration: "10 months",
    fees: "KES 40,000 per term",
    expectations: "Work in IT departments, cyber cafés, or pursue software development."
  },
  'plumbing': {
    title: 'Plumbing',
    description: 'Train in the installation, repair, and maintenance of water and drainage systems in buildings.',
    modules: [
      "Water supply systems",
      "Drainage systems",
      "Plumbing tools and fittings",
      "Blueprint reading",
      "Health and safety"
    ],
    requirements: "KCPE certificate. Strong work ethic and attention to detail.",
    outcomes: "Certified plumber ready for employment in construction or self-employment.",
    importance: "Plumbers ensure access to clean water and sanitation.",
    duration: "8 months",
    fees: "KES 34,000 per term",
    expectations: "Qualified to install plumbing in residential and commercial buildings."
  },
  'driving': {
    title: 'Driving',
    description: 'Comprehensive training for acquiring a valid driving license, with emphasis on road safety and traffic regulations.',
    modules: [
      "Road signs and traffic rules",
      "Vehicle control and maneuvering",
      "Highway code",
      "Emergency handling",
      "Practical driving lessons"
    ],
    requirements: "Minimum age 18 years. National ID required.",
    outcomes: "Confident and licensed driver with sound road safety knowledge.",
    importance: "Promotes responsible driving and road safety culture.",
    duration: "3 months",
    fees: "KES 15,000",
    expectations: "Certified for driving license and employment as a professional driver."
  }
};


const CourseDetail = () => {
  const { courseSlug } = useParams();
  const course = courseDetails[courseSlug];

  if (!course) {
    return <div className="p-6 text-white">Course not found.</div>;
  }

  return (
    <div className="p-8 bg-gray-950 text-white min-h-screen">
      <h1 className="text-4xl font-bold mb-4 text-yellow-400">{course.title}</h1>
      <p className="mb-6 text-lg text-gray-300">{course.description}</p>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Left section */}
        <div>
          <h2 className="text-2xl font-semibold mb-2 text-red-400">Modules Covered</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-200 mb-6">
            {course.modules.map((m, i) => (
              <li key={i}>{m}</li>
            ))}
          </ul>

          <h2 className="text-2xl font-semibold mb-2 text-green-400">Course Outcomes</h2>
          <p className="text-gray-300 mb-6">{course.outcomes}</p>

          <h2 className="text-2xl font-semibold mb-2 text-blue-400">Why Enroll with Us?</h2>
          <p className="text-gray-300">{course.importance}</p>
        </div>

        {/* Right section */}
        <div className="space-y-6">
          <div className="transition-transform transform hover:scale-105 bg-gray-700 p-4 rounded-xl shadow-lg hover:shadow-red-500/40 duration-300">
            <h2 className="text-xl text-red-500 font-semibold mb-2">Course Requirements</h2>
            <p className="text-gray-200">{course.requirements}</p>
          </div>

          <div className="transition-transform transform hover:scale-105 bg-gray-700 p-4 rounded-xl shadow-lg hover:shadow-yellow-500/30 duration-300">
            <h2 className="text-xl font-semibold mb-2 text-yellow-400">Course Duration</h2>
            <p className="text-gray-200">{course.duration}</p>
          </div>

          <div className="transition-transform transform hover:scale-105 bg-gray-700 p-4 rounded-xl shadow-lg hover:shadow-green-500/30 duration-300">
            <h2 className="text-xl font-semibold mb-2 text-green-400">Course Fees</h2>
            <p className="text-gray-200">{course.fees}</p>
          </div>

          <div className="transition-transform transform hover:scale-105 bg-gray-700 p-4 rounded-xl shadow-lg hover:shadow-blue-500/30 duration-300">
            <h2 className="text-xl font-semibold mb-2 text-blue-400">Expectations After Completion</h2>
            <p className="text-gray-200">{course.expectations}</p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="mt-10">
        <p className="mb-4 text-lg font-medium">To enroll in this course:</p>
        <button className="bg-red-600 hover:bg-red-700 transition-transform transform hover:scale-105 text-lg font-semibold px-6 py-3 rounded-full shadow-lg">
          <Link to="/Pages/Programmes" className="text-white">
         Apply Now
          </Link>
        </button>
      </div>
    </div>
  );
};

export default CourseDetail;
