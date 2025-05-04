// DashboardLayout.jsx
import React from 'react';
import Sidebar from './Sidebar';
import MainContent from './MainContent';

function DashboardLayout() {
  return (
    <div className="bg-gray-100 min-h-screen flex">
      <Sidebar />
      <div className="flex-1 p-6">
        <MainContent />
      </div>
    </div>
  );
}

export default DashboardLayout;