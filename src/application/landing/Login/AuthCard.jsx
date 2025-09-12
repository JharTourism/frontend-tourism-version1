import React, { useState } from 'react';
import { Check, ChevronLeft, Eye, EyeOff, Loader2 } from 'lucide-react';


const AuthCard = ({
  currentView,
  onViewChange,
  onSubmit,
  isLoading,
  isSuccess,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  const validateForm = (e) => {
    const form = e.target;
    const errors = {};

    if (currentView === 'login') {
      if (!form.username.value) errors.username = 'Username is required';
      if (!form.password.value) errors.password = 'Password is required';
    } else if (currentView === 'register') {
      if (!form.username.value) errors.username = 'Username is required';
      if (!form.email.value) errors.email = 'Email is required';
      else if (!/\S+@\S+\.\S+/.test(form.email.value)) errors.email = 'Invalid email format';
      if (!form.phone.value) errors.phone = 'Phone number is required';
      if (!form.password.value) errors.password = 'Password is required';
      else if (form.password.value.length < 6) errors.password = 'Password must be at least 6 characters';
      if (!form.confirmPassword.value) errors.confirmPassword = 'Please confirm your password';
      else if (form.password.value !== form.confirmPassword.value) {
        errors.confirmPassword = 'Passwords do not match';
      }
    } else if (currentView === 'forgot') {
      if (!form.email.value) errors.email = 'Email is required';
      else if (!/\S+@\S+\.\S+/.test(form.email.value)) errors.email = 'Invalid email format';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm(e)) {
      onSubmit(e);
    }
  };

  return (
    <div className={`auth-card ${currentView}`}>
      <div className="relative p-8 rounded-2xl glass-card">
        {currentView !== 'login' && (
          <button
            onClick={() => onViewChange('login')}
            className="absolute left-8 top-8 text-white/70 hover:text-white transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
        )}

        <h1 className="auth-title">
          {currentView === 'login' && 'Login'}
          {currentView === 'register' && 'Create Account'}
          {currentView === 'forgot' && 'Reset Password'}
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Login Form */}
          {currentView === 'login' && (
            <>
              <div className="space-y-2">
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  className={`auth-input ${formErrors.username ? 'error' : ''}`}
                />
                {formErrors.username && (
                  <p className="error-message">{formErrors.username}</p>
                )}
              </div>

              <div className="space-y-2">
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    placeholder="Password"
                    className={`auth-input pr-10 ${formErrors.password ? 'error' : ''}`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-white/70 hover:text-white"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
                {formErrors.password && (
                  <p className="error-message">{formErrors.password}</p>
                )}
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="auth-checkbox" />
                  <span className="auth-text">Remember me</span>
                </label>
                <button
                  type="button"
                  onClick={() => onViewChange('forgot')}
                  className="auth-link"
                >
                  Forgot Password?
                </button>
              </div>
            </>
          )}

          {/* Register Form */}
          {currentView === 'register' && (
            <div className="space-y-4">
              <div className="space-y-2">
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  className={`auth-input ${formErrors.username ? 'error' : ''}`}
                />
                {formErrors.username && (
                  <p className="error-message">{formErrors.username}</p>
                )}
              </div>

              <div className="space-y-2">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className={`auth-input ${formErrors.email ? 'error' : ''}`}
                />
                {formErrors.email && (
                  <p className="error-message">{formErrors.email}</p>
                )}
              </div>

              <div className="space-y-2">
                <select name="role" className="auth-input">
                  <option value="farmer">Farmer</option>
                  <option value="dairy">Dairy Farm</option>
                  <option value="vet">Veterinarian</option>
                </select>
              </div>

              <div className="space-y-2">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  className={`auth-input ${formErrors.phone ? 'error' : ''}`}
                />
                {formErrors.phone && (
                  <p className="error-message">{formErrors.phone}</p>
                )}
              </div>

              <div className="space-y-2">
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    placeholder="Password"
                    className={`auth-input pr-10 ${formErrors.password ? 'error' : ''}`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-white/70 hover:text-white"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
                {formErrors.password && (
                  <p className="error-message">{formErrors.password}</p>
                )}
              </div>

              <div className="space-y-2">
                <div className="relative">
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    className={`auth-input pr-10 ${formErrors.confirmPassword ? 'error' : ''}`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-white/70 hover:text-white"
                  >
                    {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
                {formErrors.confirmPassword && (
                  <p className="error-message">{formErrors.confirmPassword}</p>
                )}
              </div>
            </div>
          )}

          {/* Forgot Password Form */}
          {currentView === 'forgot' && (
            <div className="space-y-2">
              <input
                type="email"
                name="email"
                placeholder="Registered Email"
                className={`auth-input ${formErrors.email ? 'error' : ''}`}
              />
              {formErrors.email && (
                <p className="error-message">{formErrors.email}</p>
              )}
            </div>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className={`auth-button ${isSuccess ? 'success' : ''}`}
          >
            {isLoading ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : isSuccess ? (
              <Check className="w-5 h-5" />
            ) : (
              <>
                {currentView === 'login' && 'Login'}
                {currentView === 'register' && 'Create Account'}
                {currentView === 'forgot' && 'Send Reset Link'}
              </>
            )}
          </button>

          {currentView === 'login' ? (
            <p className="text-center auth-text">
              Don't have an account?{' '}
              <button
                type="button"
                onClick={() => onViewChange('register')}
                className="auth-link font-medium"
              >
                Register
              </button>
            </p>
          ) : currentView === 'register' ? (
            <p className="text-center auth-text">
              Already have an account?{' '}
              <button
                type="button"
                onClick={() => onViewChange('login')}
                className="auth-link font-medium"
              >
                Login
              </button>
            </p>
          ) : null}
        </form>
      </div>
    </div>
  );
};

export default AuthCard;