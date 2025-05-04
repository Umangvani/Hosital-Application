// AppointmentRequests.jsx
import React from 'react';
import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/outline';

const appointmentData = [
  { name: 'Shyam Khanna', disease: 'Heart Disease', date: '01/27', approved: null },
  { name: 'Jean Lee Lim', disease: 'Heart Disease', date: '01/27', approved: true },
  { name: 'Clara Brook', disease: 'Heart Disease', date: '01/27', approved: false },
];

function AppointmentRequests() {
  return (
    <div className="bg-white shadow-md rounded-md p-6">
      <h2 className="text-lg font-semibold mb-4">Appointment requests</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Disease</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Approval</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {appointmentData.map((request) => (
              <tr key={request.name}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-700 font-semibold mr-2">
                      {request.name.charAt(0).toUpperCase() + (request.name.split(' ')[1] ? request.name.split(' ')[1].charAt(0).toUpperCase() : '')}
                    </div>
                    {request.name}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{request.disease}</td>
                <td className="px-6 py-4 whitespace-nowrap">{request.date}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {request.approved === null && (
                    <div className="flex items-center space-x-2">
                      <button className="text-green-500 hover:text-green-700 transition duration-150 ease-in-out">
                        <CheckCircleIcon className="h-5 w-5" />
                      </button>
                      <button className="text-red-500 hover:text-red-700 transition duration-150 ease-in-out">
                        <XCircleIcon className="h-5 w-5" />
                      </button>
                    </div>
                  )}
                  {request.approved === true && <CheckCircleIcon className="h-5 w-5 text-green-500" />}
                  {request.approved === false && <XCircleIcon className="h-5 w-5 text-red-500" />}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AppointmentRequests;