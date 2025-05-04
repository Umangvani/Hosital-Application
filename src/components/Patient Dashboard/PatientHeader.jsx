// PatientHeader.jsx
import React from 'react';
import { BellIcon } from '@heroicons/react/24/outline';

function PatientHeader() {
  return (
    <div className="flex items-center justify-end md:justify-between">
      <div className="hidden md:block">
        <h2 className="text-xl font-semibold text-gray-800">Welcome, Anil Kumrawat</h2> {/* Replace with actual patient name */}
      </div>
      <div className="flex items-center space-x-4">
        <button className="relative rounded-full bg-indigo-100 text-indigo-600 p-2 hover:bg-indigo-200 transition duration-150 ease-in-out">
          <BellIcon className="h-6 w-6" />
          <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
            3 {/* Example notification count */}
          </span>
        </button>
        <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-white font-semibold">
          AK {/* Replace with patient initials */}
        </div>
      </div>
    </div>
  );
}

export default PatientHeader;