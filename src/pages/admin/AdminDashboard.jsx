import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AdminLayout from './AdminLayout';
import AdminOverview from './AdminOverview';
import UserManagement from './UserManagement';
import TourManagement from './TourManagement';
import Marketplace from './Marketplace';
import Reports from './Reports';
import AdminSettings from './AdminSettings';

const AdminDashboard = () => {
  return (
    <AdminLayout>
      <Routes>
        <Route index element={<AdminOverview />} />
        <Route path="users" element={<UserManagement />} />
        <Route path="tours" element={<TourManagement />} />
        <Route path="marketplace" element={<Marketplace />} />
        <Route path="reports" element={<Reports />} />
        <Route path="settings" element={<AdminSettings />} />
      </Routes>
    </AdminLayout>
  );
};

export default AdminDashboard;

