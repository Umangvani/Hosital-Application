import React, { useState, useEffect, useRef } from 'react';
import { PhoneIcon, MagnifyingGlassIcon, MapPinIcon, XMarkIcon } from '@heroicons/react/24/outline';
// import { Link } from 'lucide-react';
import {Link} from 'react-router';

const AppointmentBooking = () => {
  const [location, setLocation] = useState('Bangalore');
  const [searchQuery, setSearchQuery] = useState('');
  const [showLocationSuggestions, setShowLocationSuggestions] = useState(false);
  const [showSpecialtyCategories, setShowSpecialtyCategories] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredSpecialties, setFilteredSpecialties] = useState([]);
  const locationRef = useRef(null);
  const categoriesRef = useRef(null);
  
  const locationSuggestions = [
    'Bangalore', 'Mumbai', 'Delhi', 'Chennai', 'Hyderabad', 
    'Kolkata', 'Pune', 'Ahmedabad', 'Jaipur', 'Lucknow'
  ];

  const categories = [
    'All', 'Popular', 'Child Health', 'Women\'s Health', 'Skin & Hair', 
    'Mental Health', 'Chronic Conditions', 'Dental', 'Eye Care', 'Surgery'
  ];
  
  const specialties = [
    { name: 'General Physician', icon: '/icons/doctor.svg', category: ['Popular', 'All'] },
    { name: 'Dermatology', icon: '/icons/skin.svg', category: ['Skin & Hair', 'All'] },
    { name: 'Obstetrics & Gynaecology', icon: '/icons/gynecology.svg', category: ['Women\'s Health', 'All'] },
    { name: 'Orthopaedics', icon: '/icons/orthopedic.svg', category: ['Popular', 'All'] },
    { name: 'ENT', icon: '/icons/ent.svg', category: ['All'] },
    { name: 'Neurology', icon: '/icons/brain.svg', category: ['All'] },
    { name: 'Cardiology', icon: '/icons/heart.svg', category: ['Popular', 'Chronic Conditions', 'All'] },
    { name: 'Urology', icon: '/icons/kidney.svg', category: ['All'] },
    { name: 'Gastroenterology', icon: '/icons/stomach.svg', category: ['All'] },
    { name: 'Psychiatry', icon: '/icons/psychology.svg', category: ['Mental Health', 'All'] },
    { name: 'Paediatrics', icon: '/icons/pediatric.svg', category: ['Child Health', 'Popular', 'All'] },
    { name: 'Pulmonology', icon: '/icons/lungs.svg', category: ['All'] },
    { name: 'Endocrinology', icon: '/icons/endocrine.svg', category: ['Chronic Conditions', 'All'] },
    { name: 'Nephrology', icon: '/icons/kidney.svg', category: ['All'] },
    { name: 'Neurosurgery', icon: '/icons/brain-surgery.svg', category: ['Surgery', 'All'] },
    { name: 'Rheumatology', icon: '/icons/joints.svg', category: ['All'] },
    { name: 'Ophthalmology', icon: '/icons/eye.svg', category: ['Eye Care', 'All'] },
    { name: 'Surgical Gastroenterology', icon: '/icons/surgery.svg', category: ['Surgery', 'All'] },
    { name: 'Infectious Disease', icon: '/icons/virus.svg', category: ['All'] },
    { name: 'General & Laparoscopic Surgery', icon: '/icons/surgery.svg', category: ['Surgery', 'All'] },
    { name: 'Psychology', icon: '/icons/psychology.svg', category: ['Mental Health', 'All'] },
    { name: 'Medical Oncology', icon: '/icons/oncology.svg', category: ['Chronic Conditions', 'All'] },
    { name: 'Diabetology', icon: '/icons/diabetes.svg', category: ['Chronic Conditions', 'Popular', 'All'] },
    { name: 'Dentist', icon: '/icons/dental.svg', category: ['Dental', 'Popular', 'All'] },
  ];

  const popularSearches = ['Dermatologist', 'Pediatrician', 'Gynecologist/Obstetrician', 'Others'];

  // Handle clicks outside of dropdown
  useEffect(() => {
    function handleClickOutside(event) {
      if (locationRef.current && !locationRef.current.contains(event.target)) {
        setShowLocationSuggestions(false);
      }
      if (categoriesRef.current && !categoriesRef.current.contains(event.target)) {
        setShowSpecialtyCategories(false);
      }
    }
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Filter specialties based on selected category
  useEffect(() => {
    if (selectedCategory === 'All') {
      setFilteredSpecialties(specialties);
    } else {
      setFilteredSpecialties(specialties.filter(specialty => 
        specialty.category.includes(selectedCategory)
      ));
    }
  }, [selectedCategory]);

  // Initialize with all specialties
  useEffect(() => {
    setFilteredSpecialties(specialties);
  }, []);

  const handleLocationSelect = (loc) => {
    setLocation(loc);
    setShowLocationSuggestions(false);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setShowSpecialtyCategories(false);
  };

  return (
    <div className="w-full min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative w-full bg-blue-900 pt-12 pb-32 overflow-hidden">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">Your home for health</h1>
          
          {/* Search Section */}
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl font-semibold text-white mb-6">Find and Book</h2>
            <div className="flex flex-col md:flex-row gap-4">
              <div ref={locationRef} className="relative flex-1">
                <div className="relative bg-white rounded-md">
                  <MapPinIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500" />
                  <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    onFocus={() => setShowLocationSuggestions(true)}
                    className="w-full pl-10 pr-10 py-4 rounded-md focus:outline-none"
                    placeholder="Enter your location"
                  />
                  {location && (
                    <button 
                      onClick={() => setLocation('')}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2"
                    >
                      <XMarkIcon className="h-5 w-5 text-gray-500" />
                    </button>
                  )}
                </div>
                
                {/* Location Suggestions Dropdown */}
                {showLocationSuggestions && (
                  <div className="absolute mt-1 w-full bg-white rounded-md shadow-lg z-10 max-h-60 overflow-y-auto">
                    {locationSuggestions
                      .filter(loc => loc.toLowerCase().includes(location.toLowerCase()))
                      .map((loc, index) => (
                        <div 
                          key={index}
                          className="px-4 py-2 hover:bg-blue-50 cursor-pointer"
                          onClick={() => handleLocationSelect(loc)}
                        >
                          <div className="flex items-center">
                            <MapPinIcon className="h-4 w-4 text-blue-500 mr-2" />
                            <span>{loc}</span>
                          </div>
                        </div>
                      ))
                    }
                  </div>
                )}
              </div>
              
              <div className="relative flex-1 bg-white rounded-md">
                <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-10 py-4 rounded-md focus:outline-none"
                  placeholder="Search doctors, clinics, hospitals, etc."
                />
                {searchQuery && (
                  <button 
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2"
                  >
                    <XMarkIcon className="h-5 w-5 text-gray-500" />
                  </button>
                )}
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
      <div className="container mx-auto px-4 -mt-12">
        <div className="bg-orange-200 rounded-lg overflow-hidden shadow-lg">
          <div className="flex flex-col md:flex-row items-center p-8">
            <div className="w-full md:w-2/3 mb-6 md:mb-0">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Find the right doctor for your ailments</h2>
              <div className="flex items-center">
                <PhoneIcon className="h-6 w-6 text-gray-700 mr-3" />
                <p className="text-lg text-gray-800">Call <span className="font-semibold">+91-8040245807</span> to book an appointment</p>
              </div>
            </div>
            <div className="w-full md:w-1/3 flex justify-end">
              <div className="relative h-24 w-full">
                {/* Illustration placeholder */}
                <div className="absolute right-0 top-0 bottom-0 w-40 bg-orange-100 rounded-l-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Specialties Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-wrap items-center justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-bold">Browse by Specialties</h2>
          
          {/* Category Filter */}
          <div ref={categoriesRef} className="relative mt-4 md:mt-0">
            <button 
              onClick={() => setShowSpecialtyCategories(!showSpecialtyCategories)}
              className="px-4 py-2 bg-blue-100 hover:bg-blue-200 text-blue-800 rounded-md flex items-center"
            >
              <span>Category: {selectedCategory}</span>
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {showSpecialtyCategories && (
              <div className="absolute right-0 mt-1 w-56 bg-white rounded-md shadow-lg z-10">
                <div className="py-1">
                  {categories.map((category, idx) => (
                    <button
                      key={idx}
                      className={`block w-full text-left px-4 py-2 hover:bg-blue-50 ${selectedCategory === category ? 'bg-blue-50 text-blue-700 font-medium' : 'text-gray-700'}`}
                      onClick={() => handleCategorySelect(category)}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {filteredSpecialties.map((specialty, index) => (
            <div key={index} className="flex flex-col items-center justify-center p-5 bg-gray-50 rounded-lg hover:bg-blue-50 transition cursor-pointer border border-gray-100 hover:border-blue-100 hover:shadow-md">
              <div className="w-16 h-16 flex items-center justify-center bg-white rounded-full mb-4 shadow-sm">
                {/* Placeholder for specialty icon */}
                <div className="w-8 h-8 bg-orange-100 rounded-full"></div>
              </div>
              <p className="text-sm text-center font-medium text-gray-800">{specialty.name}</p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Book Appointment Section */}
      <div className="container mx-auto px-4 py-12 mb-20">
        <div className="bg-blue-800 rounded-lg overflow-hidden shadow-lg text-white">
          <div className="flex flex-col md:flex-row p-8">
            <div className="w-full md:w-2/3 mb-6 md:mb-0">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Need help finding the right doctor?</h2>
              <p className="mb-6">Our healthcare experts can guide you to the right specialist for your condition</p>
              <button className="px-6 py-3 bg-white text-blue-800 font-semibold rounded-md hover:bg-blue-50 transition">
                Request a call back
              </button>
            </div>
            <div className="w-full md:w-1/3 flex justify-center items-center">
              <div className="relative h-32 w-32">
                <div className="absolute inset-0 bg-blue-700 rounded-full opacity-50"></div>
                <div className="absolute inset-4 bg-blue-600 rounded-full"></div>
                <PhoneIcon className="absolute inset-0 m-auto h-12 w-12 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer Navigation */}
      <div className="sticky bottom-0 left-0 right-0 bg-blue-900 text-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-3 md:grid-cols-6">
            <div className="flex flex-col items-center justify-center py-3 border-r border-blue-800">
              <Link to="/consultation"><span className="text-xs md:text-sm">Consult with a doctor</span></Link>
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