// PatientSidebar.jsx
import React from 'react';
import {
  HomeIcon,
  CalendarDaysIcon,
  FolderOpenIcon,
  DocumentMagnifyingGlassIcon,
  UserCircleIcon,
  ArrowRightOnRectangleIcon,
} from '@heroicons/react/24/outline';

function PatientSidebar() {
  return (
    <div className="bg-white w-70 flex flex-col h-screen shadow-md transition-transform duration-300 ease-in-out transform -translate-x-full md:translate-x-0 fixed md:sticky top-0 left-0 z-10">
      <div className="p-6">
        <h1 className="text-xl font-semibold text-indigo-600">Hospital logo</h1>
      </div>
      <nav className="flex-1 px-2 space-y-2">
        <PatientSidebarLink text="Dashboard" icon={HomeIcon} active />
        <PatientSidebarLink text="Appointments" icon={CalendarDaysIcon} />
        <PatientSidebarLink text="Medical Records" icon={FolderOpenIcon} />
        <PatientSidebarLink text="Prescriptions" icon={DocumentMagnifyingGlassIcon} />
        <PatientSidebarLink text="Profile" icon={UserCircleIcon} />
        <PatientSidebarLink text="Log out" icon={ArrowRightOnRectangleIcon} />
      </nav>
      {/* Responsive toggle button (for smaller screens) */}
      <button
        className="absolute top-4 right-4 md:hidden text-gray-500 hover:text-gray-700 focus:outline-none"
        onClick={() => {
          // Implement logic to toggle sidebar visibility (e.g., using state)
          console.log('Toggle Sidebar');
        }}
      >
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>
  );
}

function PatientSidebarLink({ text, icon, active }) {
  const IconComponent = icon;
  return (
    <a
      href="#"
      className={`flex items-center space-x-3 p-3 rounded-md transition duration-150 ease-in-out ${
        active ? 'bg-indigo-100 text-indigo-600 font-semibold' : 'text-gray-600 hover:bg-gray-100 hover:text-gray-800'
      }`}
    >
      <IconComponent className="h-5 w-5" />
      <span>{text}</span>
    </a>
  );
}

export default PatientSidebar;