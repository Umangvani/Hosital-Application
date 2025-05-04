import React from 'react';
import {
  CalendarDaysIcon,
  FolderOpenIcon,
  DocumentMagnifyingGlassIcon,
} from '@heroicons/react/24/outline'; // Import Heroicons

const activitiesData = [
  { type: 'Appointment', description: 'Scheduled appointment with Dr. Smith on May 5th at 10:00 AM', time: '2 hours ago' },
  { type: 'Medical Record', description: 'New lab results uploaded', time: '1 day ago' },
  { type: 'Prescription', description: 'Refill request for Paracetamol approved', time: '3 days ago' },
];

function RecentActivities() {
  return (
    <div className="bg-white shadow-md rounded-md p-6">
      <h2 className="text-lg font-semibold mb-4">Recent Activities</h2>
      <ul className="space-y-4">
        {activitiesData.map((activity, index) => (
          <li key={index} className="flex items-start space-x-3">
            <div className="flex-shrink-0">
              {activity.type === 'Appointment' && (
                <div className="h-8 w-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                  <CalendarDaysIcon className="h-5 w-5" />
                </div>
              )}
              {activity.type === 'Medical Record' && (
                <div className="h-8 w-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                  <FolderOpenIcon className="h-5 w-5" />
                </div>
              )}
              {activity.type === 'Prescription' && (
                <div className="h-8 w-8 rounded-full bg-yellow-100 text-yellow-600 flex items-center justify-center">
                  <DocumentMagnifyingGlassIcon className="h-5 w-5" />
                </div>
              )}
            </div>
            <div>
              <p className="text-sm font-medium text-gray-800">{activity.description}</p>
              <p className="text-xs text-gray-500">{activity.time}</p>
            </div>
          </li>
        ))}
      </ul>
      {activitiesData.length > 3 && (
        <div className="mt-4">
          <button className="text-sm text-indigo-600 hover:text-indigo-800 transition duration-150 ease-in-out">
            See all activities
          </button>
        </div>
      )}
    </div>
  );
}

export default RecentActivities;