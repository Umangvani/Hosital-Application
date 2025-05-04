import React, { useState } from 'react';
import { PhoneIcon, MagnifyingGlassIcon, MapPinIcon } from '@heroicons/react/24/outline';

const AppointmentBooking = () => {
  const [location, setLocation] = useState('Bangalore');
  const [searchQuery, setSearchQuery] = useState('');
  
  const specialties = [
    { name: 'General Physician', icon: '/icons/doctor.svg' },
    { name: 'Dermatology', icon: '/icons/skin.svg' },
    { name: 'Obstetrics & Gynaecology', icon: '/icons/gynecology.svg' },
    { name: 'Orthopaedics', icon: '/icons/orthopedic.svg' },
    { name: 'ENT', icon: '/icons/ent.svg' },
    { name: 'Neurology', icon: '/icons/brain.svg' },
    { name: 'Cardiology', icon: '/icons/heart.svg' },
    { name: 'Urology', icon: '/icons/kidney.svg' },
    { name: 'Gastroenterology', icon: '/icons/stomach.svg' },
    { name: 'Psychiatry', icon: '/icons/psychology.svg' },
    { name: 'Paediatrics', icon: '/icons/pediatric.svg' },
    { name: 'Pulmonology', icon: '/icons/lungs.svg' },
    { name: 'Endocrinology', icon: '/icons/endocrine.svg' },
    { name: 'Nephrology', icon: '/icons/kidney.svg' },
    { name: 'Neurosurgery', icon: '/icons/brain-surgery.svg' },
    { name: 'Rheumatology', icon: '/icons/joints.svg' },
    { name: 'Ophthalmology', icon: '/icons/eye.svg' },
    { name: 'Surgical Gastroenterology', icon: '/icons/surgery.svg' },
    { name: 'Infectious Disease', icon: '/icons/virus.svg' },
    { name: 'General & Laparoscopic Surgery', icon: '/icons/surgery.svg' },
    { name: 'Psychology', icon: '/icons/psychology.svg' },
    { name: 'Medical Oncology', icon: '/icons/oncology.svg' },
    { name: 'Diabetology', icon: '/icons/diabetes.svg' },
    { name: 'Dentist', icon: '/icons/dental.svg' },
  ];

  const popularSearches = ['Dermatologist', 'Pediatrician', 'Gynecologist/Obstetrician', 'Others'];

  return (
    <div className="w-full min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative w-full bg-blue-900 pt-8 pb-24 overflow-hidden">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-8">Your home for health</h1>
          
          {/* Search Section */}
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl font-semibold text-white mb-4">Find and Book</h2>
            <div className="flex flex-col md:flex-row gap-2">
              <div className="relative flex-1 bg-white rounded-md">
                <MapPinIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500" />
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full pl-10 pr-3 py-3 rounded-md focus:outline-none"
                  placeholder="Enter your location"
                />
              </div>
              <div className="relative flex-1 bg-white rounded-md">
                <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-3 py-3 rounded-md focus:outline-none"
                  placeholder="Search doctors, clinics, hospitals, etc."
                />
              </div>
            </div>
            
            {/* Popular Searches */}
            <div className="mt-4 flex flex-wrap items-center">
              <span className="text-white mr-4">Popular searches:</span>
              {popularSearches.map((search, index) => (
                <button
                  key={index}
                  onClick={() => setSearchQuery(search)}
                  className="px-4 py-1 bg-blue-800 hover:bg-blue-700 text-white rounded-full mr-2 mb-2 text-sm"
                >
                  {search}
                </button>
              ))}
            </div>
          </div>
        </div>
        
        {/* Illustrative Background */}
        <div className="absolute bottom-0 left-0 right-0 h-32 opacity-20">
          <div className="relative w-full h-full">
            <div className="absolute left-10 bottom-0 w-16 h-16 bg-blue-600 rounded-full"></div>
            <div className="absolute left-1/4 bottom-10 w-20 h-20 bg-yellow-400 rounded-full"></div>
            <div className="absolute right-1/4 bottom-0 w-24 h-12 bg-blue-500 rounded-t-full"></div>
            <div className="absolute right-10 bottom-5 w-14 h-14 bg-blue-700 rounded-full"></div>
          </div>
        </div>
      </div>
      
      {/* Banner Section */}
      <div className="container mx-auto px-4 -mt-6">
        <div className="bg-orange-200 rounded-lg overflow-hidden shadow-lg">
          <div className="flex flex-col md:flex-row items-center p-6">
            <div className="w-full md:w-2/3 mb-4 md:mb-0">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Find the right doctor for your ailments</h2>
              <div className="flex items-center">
                <PhoneIcon className="h-5 w-5 text-gray-700 mr-2" />
                <p className="text-gray-800">Call <span className="font-semibold">+91-8040245807</span> to book an appointment</p>
              </div>
            </div>
            <div className="w-full md:w-1/3 flex justify-end">
              <div className="relative h-20 w-full">
                {/* Illustration placeholder */}
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-orange-100 rounded-l-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Specialties Section */}
      <div className="container mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold mb-6">Browse by Specialties</h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {specialties.map((specialty, index) => (
            <div key={index} className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition cursor-pointer">
              <div className="w-16 h-16 flex items-center justify-center bg-white rounded-full mb-3 shadow-sm">
                {/* Placeholder for specialty icon */}
                <div className="w-8 h-8 bg-orange-100 rounded-full"></div>
              </div>
              <p className="text-sm text-center font-medium text-gray-800">{specialty.name}</p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Footer Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-blue-900 text-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-3 md:grid-cols-6">
            <div className="flex flex-col items-center justify-center py-3 border-r border-blue-800">
              <span className="text-xs md:text-sm">Consult with a doctor</span>
            </div>
            <div className="flex flex-col items-center justify-center py-3 border-r border-blue-800">
              <span className="text-xs md:text-sm">Order Medicines</span>
            </div>
            <div className="flex flex-col items-center justify-center py-3 border-r border-blue-800">
              <span className="text-xs md:text-sm">View medical records</span>
            </div>
            <div className="hidden md:flex flex-col items-center justify-center py-3 border-r border-blue-800 relative">
              <span className="text-xs md:text-sm">Book test</span>
              <span className="absolute -top-2 right-2 bg-green-500 text-white text-xs px-1 rounded">New</span>
            </div>
            <div className="hidden md:flex flex-col items-center justify-center py-3 border-r border-blue-800">
              <span className="text-xs md:text-sm">Read articles</span>
            </div>
            <div className="hidden md:flex flex-col items-center justify-center py-3">
              <span className="text-xs md:text-sm">For healthcare providers</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentBooking;