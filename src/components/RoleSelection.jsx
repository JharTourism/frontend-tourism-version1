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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-emerald-50 to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-80 h-80 bg-emerald-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-400 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-green-400 rounded-full blur-3xl"></div>
      </div>
      
      <style>{`
        .role-card {
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .role-card:hover {
          transform: translateY(-8px) scale(1.02);
          background: rgba(255, 255, 255, 0.95);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
          border-color: rgba(34, 197, 94, 0.3);
        }
        
        .role-icon-container {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .role-card:hover .role-icon-container {
          transform: scale(1.1) rotate(5deg);
        }
        
        .role-title {
          transition: color 0.3s ease;
        }
        
        .role-card:hover .role-title {
          color: #059669;
        }
        
        .role-btn {
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(10px);
          border: 2px solid rgba(34, 197, 94, 0.3);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .role-btn:hover {
          background: rgba(34, 197, 94, 0.1);
          border-color: rgba(34, 197, 94, 0.6);
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(34, 197, 94, 0.2);
        }
        
        .back-btn {
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.3);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .back-btn:hover {
          background: rgba(255, 255, 255, 0.95);
          border-color: rgba(34, 197, 94, 0.3);
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
        }
      `}</style>
      
      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 py-12">
        <div className="w-full max-w-6xl">
          {/* Modern Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 tracking-wide">
              Choose Your Role
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed font-medium">
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
                  <div className="role-card rounded-3xl p-8 text-center">
                    {/* Icon */}
                    <div className={`role-icon-container w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br ${role.gradient} flex items-center justify-center shadow-lg`}>
                      <IconComponent className="w-10 h-10 text-white" />
                    </div>
                    
                    {/* Title */}
                    <h3 className="role-title text-2xl font-bold text-gray-800 mb-3 leading-tight">
                      {role.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-gray-600 mb-6 leading-relaxed text-base">
                      {role.description}
                    </p>
                    
                    {/* Login Button */}
                    <button
                      className="role-btn w-full py-3 px-6 text-green-700 font-semibold rounded-full text-lg hover:scale-105 transition-transform"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleRoleSelect(role.id);
                      }}
                    >
                      Login as {role.title}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Back to Home */}
          <div className="text-center mt-16">
            <button
              onClick={() => navigate('/')}
              className="back-btn text-gray-700 font-semibold px-6 py-3 rounded-full flex items-center justify-center mx-auto gap-2 hover:text-green-700 transition-colors"
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