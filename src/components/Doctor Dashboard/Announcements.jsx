// Announcements.jsx
import React from 'react';
import { SpeakerWaveIcon } from '@heroicons/react/24/outline';

const announcementData = [
  { message: 'Meeting has been reschedule for 28 may...' },
  { message: 'We request our doctor to use our website...' },
  { message: 'Dr. Faisol has completed 400 surgery. Congrat...' },
];

function Announcements() {
  return (
    <div className="bg-white shadow-md rounded-md p-6">
      <h2 className="text-lg font-semibold mb-4">Announcements</h2>
      <ul>
        {announcementData.map((announcement) => (
          <li key={announcement.message} className="py-3 flex items-start space-x-3">
            <div className="h-6 w-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
              <SpeakerWaveIcon className="h-4 w-4" />
            </div>
            <p className="text-sm text-gray-800">{announcement.message}</p>
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

export default Announcements;