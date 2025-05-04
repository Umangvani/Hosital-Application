// PatientOverviewSection.jsx
import React from 'react';
import { CalendarDaysIcon, FolderOpenIcon, DocumentMagnifyingGlassIcon } from '@heroicons/react/24/outline';

function PatientOverviewSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <PatientOverviewCard
        title="Upcoming Appointments"
        value="2"
        icon={CalendarDaysIcon}
        iconBg="bg-blue-100"
        iconColor="text-blue-600"
      />
      <PatientOverviewCard
        title="Medical Records"
        value="View"
        icon={FolderOpenIcon}
        iconBg="bg-green-100"
        iconColor="text-green-600"
      />
      <PatientOverviewCard
        title="Prescriptions"
        value="View"
        icon={DocumentMagnifyingGlassIcon}
        iconBg="bg-yellow-100"
        iconColor="text-yellow-600"
      />
    </div>
  );
}

function PatientOverviewCard({ title, value, icon, iconBg, iconColor }) {
  const IconComponent = icon;
  return (
    <div className="bg-white shadow-md rounded-md p-6 transition duration-300 ease-in-out hover:shadow-lg">
      <div className="flex items-center space-x-4">
        <div className={`rounded-md p-3 ${iconBg} ${iconColor}`}>
          <IconComponent className="h-6 w-6" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
          <p className="text-gray-500">{value}</p>
        </div>
      </div>
    </div>
  );
}

export default PatientOverviewSection;