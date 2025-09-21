import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Eye, EyeOff, ArrowLeft } from 'lucide-react';

const LoginPage = () => {
  const { role } = useParams();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  // Capitalize role for display
  const roleDisplay = role ? role.charAt(0).toUpperCase() + role.slice(1) : 'User';

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement actual login logic
    console.log(`Logging in as ${role}:`, formData);
    
    // Redirect based on role after successful login
    if (role === 'tourist') {
      navigate('/tourist-dashboard');
    } else if (role === 'guide') {
      navigate('/guide-dashboard');
    } else {
      // For other roles, show success message for now
      alert(`Login successful for ${roleDisplay}! Dashboard coming soon.`);
    }
  };

  const getRoleGradient = () => {
    switch (role) {
      case 'tourist':
        return 'from-blue-500 to-cyan-500';
      case 'guide':
        return 'from-green-500 to-emerald-500';
      case 'admin':
        return 'from-purple-500 to-violet-500';
      default:
        return 'from-gray-500 to-gray-600';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 relative overflow-hidden flex items-center justify-center px-4">
      {/* Blurred Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-green-100/30 via-blue-100/30 to-purple-100/30"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,0,0,0.1) 1px, transparent 0)`,
          backgroundSize: '20px 20px'
        }}></div>
      </div>
      
      {/* Back Button */}
      <button
        onClick={() => navigate('/role-selection')}
        className="absolute top-6 left-6 z-20 flex items-center gap-2 text-gray-600 hover:text-gray-800 font-medium transition-colors duration-200 bg-white/80 backdrop-blur-lg px-4 py-2 rounded-lg shadow-lg hover:shadow-xl"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Role Selection
      </button>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-md">
        {/* Glassmorphism Login Card */}
        <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/20 p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${getRoleGradient()} flex items-center justify-center shadow-lg`}>
              <span className="text-white font-bold text-xl">
                {roleDisplay.charAt(0)}
              </span>
            </div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              {roleDisplay} Login
            </h1>
            <p className="text-gray-600">
              Welcome back! Please sign in to continue.
            </p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Username Input */}
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-2">
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-white/50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 backdrop-blur-sm"
                placeholder="Enter your username"
                required
              />
            </div>

            {/* Password Input */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 pr-12 bg-white/50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 backdrop-blur-sm"
                  placeholder="Enter your password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors duration-200"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className={`w-full py-3 px-6 bg-gradient-to-r ${getRoleGradient()} text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300`}
            >
              Sign In
            </button>
          </form>

          {/* Additional Links */}
          <div className="mt-6 text-center space-y-3">
            <a href="#" className="text-sm text-blue-600 hover:text-blue-800 transition-colors duration-200">
              Forgot your password?
            </a>
            <div className="text-sm text-gray-600">
              Don't have an account?{' '}
              <a href="#" className="text-blue-600 hover:text-blue-800 transition-colors duration-200">
                Sign up here
              </a>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-8">
          <p className="text-sm text-gray-500">
            Secure login powered by JharConnect
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;