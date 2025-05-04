// AnalyticsCard.jsx
import React from 'react';
import { ArrowUpIcon, ArrowDownIcon } from '@heroicons/react/24/outline';

function AnalyticsCard() {
  return (
    <div className="bg-white shadow-md rounded-md p-6">
      <h2 className="text-lg font-semibold mb-4">$10.5K</h2>
      <div className="flex items-center mb-2">
        <ArrowUpIcon className="h-5 w-5 text-green-500 mr-1" />
        <span className="text-sm font-medium text-green-500">+2.4%</span>
        <span className="text-gray-500 text-sm ml-1">On track</span>
      </div>
      {/* Placeholder for the chart */}
      <div className="h-20 bg-gray-100 rounded-md flex items-center justify-center text-gray-400 text-sm italic">
        {/* Replace this with your actual chart component */}
        <span>Chart Placeholder</span>
      </div>
    </div>
  );
}

export default AnalyticsCard;