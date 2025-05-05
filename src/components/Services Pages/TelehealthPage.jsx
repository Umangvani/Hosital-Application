import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import img from "./consultancy_image.png";

export default function TelehealthPage() {
  const [specialties] = useState([
    {
      name: "Gynaecology",
      icon: (
        <div className="bg-blue-100 rounded-full p-4 w-20 h-20 flex items-center justify-center">
          <svg viewBox="0 0 40 40" className="w-12 h-12 text-blue-400">
            <path
              fill="currentColor"
              d="M20,15 C24,15 27,18 27,22 C27,26 24,29 20,29 C16,29 13,26 13,22 C13,18 16,15 20,15 Z M20,8 C22,8 23,9 23,11 L23,13 C27,14 30,18 30,22 C30,27 25,32 20,32 C15,32 10,27 10,22 C10,18 13,14 17,13 L17,11 C17,9 18,8 20,8 Z"
            />
          </svg>
        </div>
      ),
      price: "₹599",
    },
    {
      name: "Sexology",
      icon: (
        <div className="bg-blue-100 rounded-full p-4 w-20 h-20 flex items-center justify-center">
          <svg viewBox="0 0 40 40" className="w-12 h-12 text-purple-400">
            <path
              fill="currentColor"
              d="M27,15 C29,15 31,17 31,19 C31,21 29,23 27,23 L24,23 L24,27 C24,29 22,31 20,31 C18,31 16,29 16,27 L16,23 L13,23 C11,23 9,21 9,19 C9,17 11,15 13,15 L16,15 L16,11 C16,9 18,7 20,7 C22,7 24,9 24,11 L24,15 L27,15 Z"
            />
          </svg>
        </div>
      ),
      price: "₹599",
    },
    {
      name: "General physician",
      icon: (
        <div className="bg-blue-100 rounded-full p-4 w-20 h-20 flex items-center justify-center">
          <svg viewBox="0 0 40 40" className="w-12 h-12 text-blue-500">
            <path
              fill="currentColor"
              d="M15,10 C15,7 17,5 20,5 C23,5 25,7 25,10 C25,13 23,15 20,15 C17,15 15,13 15,10 Z M10,32 C10,25 15,20 20,20 C25,20 30,25 30,32 L30,35 L10,35 L10,32 Z"
            />
          </svg>
        </div>
      ),
      price: "₹499",
    },
    {
      name: "Dermatology",
      icon: (
        <div className="bg-purple-800 rounded-full p-4 w-20 h-20 flex items-center justify-center">
          <svg viewBox="0 0 40 40" className="w-12 h-12 text-white">
            <path
              fill="currentColor"
              d="M30,20 C30,25 25,30 20,30 C15,30 10,25 10,20 C10,15 15,10 20,10 C25,10 30,15 30,20 Z M25,20 C25,22 23,24 20,24 C17,24 15,22 15,20 C15,18 17,16 20,16 C23,16 25,18 25,20 Z"
            />
          </svg>
        </div>
      ),
      price: "₹549",
    },
    {
      name: "Psychiatry",
      icon: (
        <div className="bg-blue-100 rounded-full p-4 w-20 h-20 flex items-center justify-center">
          <svg viewBox="0 0 40 40" className="w-12 h-12 text-red-400">
            <path
              fill="currentColor"
              d="M30,20 C30,16 27,12 24,12 L22,12 L22,10 C22,7 20,5 17,5 C14,5 12,7 12,10 L12,12 L10,12 C7,12 4,16 4,20 C4,24 7,28 10,28 L12,28 L12,30 C12,33 14,35 17,35 C20,35 22,33 22,30 L22,28 L24,28 C27,28 30,24 30,20 Z"
            />
          </svg>
        </div>
      ),
      price: "₹599",
    },
    {
      name: "Stomach and digestion",
      icon: (
        <div className="bg-blue-100 rounded-full p-4 w-20 h-20 flex items-center justify-center">
          <svg viewBox="0 0 40 40" className="w-12 h-12 text-orange-400">
            <path
              fill="currentColor"
              d="M30,15 C30,10 25,5 20,5 C15,5 10,10 10,15 L10,25 C10,30 15,35 20,35 C25,35 30,30 30,25 L30,15 Z M20,25 C18,25 16,23 16,21 C16,19 18,17 20,17 C22,17 24,19 24,21 C24,23 22,25 20,25 Z"
            />
          </svg>
        </div>
      ),
      price: "₹499",
    },
  ]);

  return (
    <div className="max-w-6xl mx-auto px-4 font-sans">
      {/* Hero Banner */}
      <div className="flex bg-white rounded-lg overflow-hidden my-6">
        <div className="w-3/5 p-8 flex flex-col justify-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Skip the travel!
          </h1>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Take Online Doctor Consultation
          </h2>
          <p className="text-gray-700 mb-6">
            Private consultation + Audio call · Starts at just ₹199
          </p>

          <div className="flex items-center mb-6">
            <div className="flex -space-x-2 mr-3">
              <div className="w-8 h-8 rounded-full bg-blue-100 border-2 border-white"></div>
              <div className="w-8 h-8 rounded-full bg-blue-200 border-2 border-white"></div>
            </div>
            <div className="flex items-center text-sm">
              <span className="font-semibold">+140 Doctors are online</span>
              <span className="ml-2 bg-green-300 rounded-full w-2 h-2"></span>
            </div>
          </div>

          <div>
            <button className="bg-blue-500 text-white px-8 py-3 rounded-md font-medium hover:bg-blue-800">
              Consult Now
            </button>
          </div>

          <div className="flex mt-8 text-sm text-gray-700 space-x-4">
            <div className="flex items-center">
              <Check size={16} className="text-blue-500 mr-1" />
              <span>Verified Doctors</span>
            </div>
            <div className="flex items-center">
              <Check size={16} className="text-blue-500 mr-1" />
              <span>Digital Prescription</span>
            </div>
            <div className="flex items-center">
              <Check size={16} className="text-blue-500 mr-1" />
              <span>Free Followup</span>
            </div>
          </div>
        </div>

        <div className="w-3/5 bg-gray-100">
          <img
            src={img}
            alt="Doctor consultation"
            className="w-full h-full object-position  "
          />
        </div>
      </div>

      {/* Specialties Section */}
      <div className="my-12">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">
              25+ Specialities
            </h2>
            <p className="text-gray-600">
              Consult with top doctors across specialities
            </p>
          </div>
          <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg text-sm">
            See all Specialities
          </button>
        </div>

        <div className="grid grid-cols-6 gap-4 mt-8 relative">
          {specialties.map((specialty, index) => (
            <div key={index} className="flex flex-col items-center">
              {specialty.icon}
              <h3 className="mt-4 font-medium text-center text-sm">
                {specialty.name}
              </h3>
              <p className="text-gray-700 mt-1">{specialty.price}</p>
              <a
                href="#"
                className="text-blue-500 flex items-center text-sm mt-1"
              >
                Consult now <ArrowRight size={14} className="ml-1" />
              </a>
            </div>
          ))}

          <button className="absolute -right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md">
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
