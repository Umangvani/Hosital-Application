// PatientDashboardLayout.jsx
import React from 'react';
import PatientSidebar from './PatientSidebar';
import PatientMainContent from './PatientMainContent';

function PatientDashboardLayout() {
  return (
    <div className="bg-gray-100 min-h-screen flex">
      <PatientSidebar />
      <div className="flex-1 p-6">
        <PatientMainContent />
      </div>
    </div>
  );
}

export default PatientDashboardLayout;