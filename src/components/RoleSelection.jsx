import React from 'react';
import { useNavigate } from 'react-router-dom';
import { User, MapPin, Shield } from 'lucide-react';

const RoleSelection = () => {
  const navigate = useNavigate();

  const roles = [
    {
      id: 'tourist',
      title: 'Tourist',
      icon: User,
      description: 'Explore Jharkhand\'s beautiful destinations',
      gradient: 'from-blue-500 to-cyan-500',
      hoverGradient: 'from-blue-600 to-cyan-600'
    },
    {
      id: 'guide',
      title: 'Tour Guide',
      icon: MapPin,
      description: 'Help tourists discover amazing places',
      gradient: 'from-green-500 to-emerald-500',
      hoverGradient: 'from-green-600 to-emerald-600'
    },
    {
      id: 'admin',
      title: 'Admin',
      icon: Shield,
      description: 'Manage platform and user accounts',
      gradient: 'from-purple-500 to-violet-500',
      hoverGradient: 'from-purple-600 to-violet-600'
    }
  ];

  const handleRoleSelect = (roleId) => {
    navigate(`/login/${roleId}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 relative overflow-hidden">
      {/* Blurred Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-green-100/30 via-blue-100/30 to-purple-100/30"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,0,0,0.1) 1px, transparent 0)`,
          backgroundSize: '20px 20px'
        }}></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 py-12">
        <div className="w-full max-w-6xl">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-800 mb-4">
              Choose Your Role
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Select how you'd like to experience Jharkhand's tourism platform
            </p>
          </div>

          {/* Role Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {roles.map((role) => {
              const IconComponent = role.icon;
              return (
                <div
                  key={role.id}
                  className="group cursor-pointer"
                  onClick={() => handleRoleSelect(role.id)}
                >
                  <div className="relative bg-white/80 backdrop-blur-lg rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-white/20">
                    {/* Gradient Overlay on Hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${role.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}></div>
                    
                    {/* Content */}
                    <div className="relative z-10 text-center">
                      {/* Icon */}
                      <div className={`w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br ${role.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="w-10 h-10 text-white" />
                      </div>
                      
                      {/* Title */}
                      <h3 className="text-2xl font-bold text-gray-800 mb-3">
                        {role.title}
                      </h3>
                      
                      {/* Description */}
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {role.description}
                      </p>
                      
                      {/* Login Button */}
                      <button
                        className={`w-full py-3 px-6 bg-gradient-to-r ${role.gradient} text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group-hover:bg-gradient-to-r group-hover:${role.hoverGradient}`}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleRoleSelect(role.id);
                        }}
                      >
                        Login as {role.title}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Back to Home */}
          <div className="text-center mt-12">
            <button
              onClick={() => navigate('/')}
              className="text-gray-600 hover:text-gray-800 font-medium transition-colors duration-200 flex items-center justify-center mx-auto gap-2"
            >
              ← Back to Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoleSelection;