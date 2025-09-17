import React from 'react';
import { Routes, Route } from 'react-router-dom';
import GuideLayout from './GuideLayout';
import GuideOverview from './GuideOverview';
import MyTours from './MyTours';
import CreateTour from './CreateTour';
import TouristRequests from './TouristRequests';
import GuideProfile from './GuideProfile';

const TourGuideDashboard = () => {
  return (
    <GuideLayout>
      <Routes>
        <Route path="/" element={<GuideOverview />} />
        <Route path="/tours" element={<MyTours />} />
        <Route path="/create-tour" element={<CreateTour />} />
        <Route path="/requests" element={<TouristRequests />} />
        <Route path="/profile" element={<GuideProfile />} />
      </Routes>
    </GuideLayout>
  );
};

export default TourGuideDashboard;