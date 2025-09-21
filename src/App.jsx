import React from 'react';
import { Toaster } from 'react-hot-toast';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './application/landing/Landing';
import RoleSelection from './components/RoleSelection';
import LoginPage from './components/LoginPage';
import TouristDashboard from './pages/tourist/TouristDashboard';
import ItineraryPage from './pages/tourist/ItineraryPage';
import TourGuideDashboard from './pages/guide/TourGuideDashboard';

function App() {
  return (
    <Router>
      <Toaster
        position="top-left"
        toastOptions={{
          duration: 3000,
          style: {
            background: '#363636',
            color: '#fff',
          },
        }}
      />

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/role-selection" element={<RoleSelection />} />
        <Route path="/login/:role" element={<LoginPage />} />
        <Route path="/tourist-dashboard" element={<TouristDashboard />} />
        <Route path="/tourist/itinerary" element={<ItineraryPage />} />
        <Route path="/guide-dashboard/*" element={<TourGuideDashboard />} />
      </Routes>
    </Router>
  );
}

export default App