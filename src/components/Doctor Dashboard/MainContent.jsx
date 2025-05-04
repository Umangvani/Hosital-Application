// MainContent.jsx
import React from 'react';
import Header from './Header';
import OverviewSection from './OverviewSection';
import AppointmentRequests from './AppointmentRequests';
import MostVisitedClients from './MostVisitedClients';
import AnalyticsCard from './AnalyticsCard';
import Announcements from './Announcements';

function MainContent() {
  return (
    <div className="space-y-6">
      <Header />
      <OverviewSection />
      <AppointmentRequests />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <MostVisitedClients />
        <AnalyticsCard />
      </div>
      <Announcements />
    </div>
  );
}

export default MainContent;