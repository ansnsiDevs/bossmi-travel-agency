import React from "react";
import { FcLibrary } from "react-icons/fc";

const paymentDetails = [
  {
    title: "Bank Name & Paybill",
    info: (
      <>
       
        <br />
   
        <FcLibrary className="text-[80px] mx-auto"/>
        <strong>Account Number:</strong> <span className="text-[#00B8D9] font-bold text-2xl ">770-050-1777</span> <br />
         <span className="text-[#FED16A] uppercase font-bold">National Bank, Kitale</span>
        <span className="block mt-2">
          <strong className="mx-auto pl-[25%] text-xl ">or use paybill</strong><br />
           <span className="font-bold">Paybill:</span>
          <span className="text-[#00B8D9] font-bold text-2xl">7648200</span>
          <br />
          <span className="font-bold">Account No: <span className="text-[#FED16A]">Student Name/Admission No</span></span>
        </span>
      </>
    ),
  },
  {
    title: "Student Items Provided",
    info: (
      <ul className="list-disc text-lg list-inside space-y-1">
        <li>T-shirts <span className="text-[#FED16A]">@ KES 1,000</span></li>
        <li>Duster/Overall <span className="text-[#FED16A]">@ KES 1,000</span></li>
        <li>For Boarders:</li>
        <ul className="ml-5 list-[circle] space-y-1">
          <li>1 Mattress</li>
          <li>1 Blanket</li>
          <li>2 Bed Sheets</li>
          <li>Plate, Cup, and Spoon</li>
          <li>A4 Plain Book (for drawing)</li>
        </ul>
      </ul>
    ),
  },
  {
    title: "Additional Fees",
    info: (
      <ul className="list-disc text-lg list-inside space-y-1">
        <li>
          <strong>Attachment Fee:</strong><span className="text-[#FED16A]"> KES 3,000  </span> (to be paid in 3rd term)
        </li>
        <li>
          <strong>Exam Fee:</strong> <span className="text-[#FED16A]"> KES 8,600</span> (to be paid in 2nd term)
        </li>
        <li>
          <strong>Driving Fee:</strong><span className="text-[#FED16A]">KES 22,280 </span> 
        </li>
        <li>
          <strong>Computer Packages:</strong><span className="text-[#FED16A]"> @ KES 10,000</span>
        </li>
      </ul>
    ),
  },
];

const FeePaymentCard = () => (
  <div className="px-4 py-8">
    <h2 className="text-3xl font-bold text-center text-[#00B8D9] mb-8">
      Fee Payment Details & Other Important Info
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
      {paymentDetails.map((detail, index) => (
        <div
          key={index}
          className=" transition-transform hover:scale-105 bg-white/10 text-white border border-white/20 backdrop-blur-md p-6 rounded-2xl shadow-md"
        >
          <h3 className="text-xl font-semibold mb-2 text-[#00B8D9]">{detail.title}</h3>
          <div className="text-white/90">{detail.info}</div>
        </div>
      ))}
    </div>
  </div>
);

export default FeePaymentCard;
