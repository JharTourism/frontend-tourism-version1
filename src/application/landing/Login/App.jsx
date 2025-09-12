import React, { useState } from 'react';
import AuthCard from './AuthCard';
import './auth.css';

function App() {
  const [currentView, setCurrentView] = useState('login');
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleViewTransition = (view) => {
    setCurrentView(view);
    setIsSuccess(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsLoading(false);
    setIsSuccess(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSuccess(false);
  };

  return (
    <div
      className="min-h-screen w-full flex items-center justify-center relative"
      style={{
        backgroundImage: "url('https://res.cloudinary.com/dzymyjltu/image/upload/v1743014354/istockphoto-1203647023-612x612_kdcgrx.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]" />
      
      <div className="relative w-full max-w-md mx-auto px-4">
        <AuthCard 
          currentView={currentView}
          onViewChange={handleViewTransition}
          onSubmit={handleSubmit}
          isLoading={isLoading}
          isSuccess={isSuccess}
        />
      </div>
    </div>
  );
}

export default App;
