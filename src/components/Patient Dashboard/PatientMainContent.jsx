// PatientMainContent.jsx
import React from 'react';
import PatientHeader from './PatientHeader';
import PatientOverviewSection from './PatientOverviewSection';
import RecentActivities from './RecentActivities';

function PatientMainContent() {
  return (
    <div className="space-y-6">
      <PatientHeader />
      <PatientOverviewSection />
      <RecentActivities />
    </div>
  );
}

export default PatientMainContent;