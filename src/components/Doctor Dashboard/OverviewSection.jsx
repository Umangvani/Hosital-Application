// OverviewSection.jsx
import React from 'react';
import { UserGroupIcon, StarIcon } from '@heroicons/react/24/outline';

function OverviewSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="bg-white shadow-md rounded-md p-6 flex items-center space-x-4">
        <div className="rounded-md bg-indigo-100 p-3 text-indigo-600">
          <UserGroupIcon className="h-6 w-6" />
        </div>
        <div>
          <h3 className="text-lg font-semibold">3000</h3>
          <p className="text-gray-500 text-sm">Patients Treated</p>
        </div>
      </div>
      <div className="bg-white shadow-md rounded-md p-6 flex items-center space-x-4">
        <div className="rounded-md bg-yellow-100 p-3 text-yellow-600">
          <StarIcon className="h-6 w-6" />
        </div>
        <div>
          <div className="flex items-center space-x-1">
            <StarIcon className="h-4 w-4 text-yellow-400" />
            <StarIcon className="h-4 w-4 text-yellow-400" />
            <StarIcon className="h-4 w-4 text-yellow-400" />
            <StarIcon className="h-4 w-4 text-yellow-400" />
            <StarIcon className="h-4 w-4 text-gray-300" />
            <span className="text-gray-500 text-sm">(102)</span>
          </div>
          <p className="text-gray-500 text-sm">Ratings</p>
        </div>
      </div>
    </div>
  );
}

export default OverviewSection;