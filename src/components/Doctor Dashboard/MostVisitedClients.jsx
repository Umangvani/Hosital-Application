// MostVisitedClients.jsx
import React from 'react';
import { UserIcon } from '@heroicons/react/24/outline';

const clientData = [
  { name: 'Shyam Khanna', disease: 'Heart Disease', visits: '27 times' },
  { name: 'James Cleaveland', disease: 'Heart Disease', visits: '22 times' },
  { name: 'Tyler Johnson', disease: 'Heart Disease', visits: '18 times' },
];

function MostVisitedClients() {
  return (
    <div className="bg-white shadow-md rounded-md p-6">
      <h2 className="text-lg font-semibold mb-4">Most visited clients</h2>
      <ul>
        {clientData.map((client) => (
          <li key={client.name} className="py-3 flex items-center space-x-3">
            <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-700 font-semibold">
              {client.name.charAt(0).toUpperCase() + (client.name.split(' ')[1] ? client.name.split(' ')[1].charAt(0).toUpperCase() : '')}
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-800">{client.name}</p>
              <p className="text-xs text-gray-500">{client.disease}</p>
            </div>
            <span className="text-sm text-gray-600">{client.visits}</span>
          </li>
        ))}
      </ul>
      <div className="mt-4">
        <button className="text-sm text-indigo-600 hover:text-indigo-800 transition duration-150 ease-in-out">
          See more
        </button>
      </div>
    </div>
  );
}

export default MostVisitedClients;  