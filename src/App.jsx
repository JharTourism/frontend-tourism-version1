import React from 'react';
import { Toaster } from 'react-hot-toast';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './application/landing/Landing';


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
     

      </Routes>
    </Router>
  );
}

export default App