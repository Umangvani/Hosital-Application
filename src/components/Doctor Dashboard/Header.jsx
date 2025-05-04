// Header.jsx
import React from 'react';
import { MagnifyingGlassIcon, BellIcon } from '@heroicons/react/24/outline';

function Header() {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h2 className="text-xl font-semibold text-blue-800">Welcome, Dr. Robert Harry</h2>
      </div>

      <div className="flex items-center space-x-4 px-7 py-2 shadow-md rounded-3xl">
        <div className="relative rounded-2xl shadow  ">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-2xl focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 p-2.5"
            placeholder="Search..."
          />
        </div>
        <button className="rounded-full bg-indigo-100 text-indigo-600 p-2 hover:bg-indigo-200 transition duration-150 ease-in-out">
          <BellIcon className="h-6 w-6" />
        </button>
        <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-white font-semibold">
          RH
        </div>
      </div>
    </div>
  );
}

export default Header;