import React from 'react';
import { Toaster } from 'react-hot-toast';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './application/landing/Landing';
import RoleSelection from './components/RoleSelection';
import LoginPage from './components/LoginPage';
import TouristDashboard from './pages/tourist/TouristDashboard';
import ItineraryPage from './pages/tourist/ItineraryPage';
import Destinations from './pages/tourist/Destinations';
import Transport from './pages/tourist/Transport';
import Accommodation from './pages/tourist/Accommodation';
import Shopping from './pages/tourist/Shopping';
import Map from './pages/tourist/Map';
import TourGuideDashboard from './pages/guide/TourGuideDashboard';
import AdminDashboard from './pages/admin/AdminDashboard';

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
        <Route path="/tourist/destinations" element={<Destinations />} />
        <Route path="/tourist/transport" element={<Transport />} />
        <Route path="/tourist/accommodation" element={<Accommodation />} />
        <Route path="/tourist/shopping" element={<Shopping />} />
        <Route path="/tourist/map" element={<Map />} />
        <Route path="/guide-dashboard/*" element={<TourGuideDashboard />} />
        <Route path="/admin-dashboard/*" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
}

export default App