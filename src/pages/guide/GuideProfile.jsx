import React, { useState } from 'react';
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar, 
  Globe, 
  Award, 
  Lock,
  Camera,
  Save,
  Edit
} from 'lucide-react';
import toast from 'react-hot-toast';

const GuideProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [showPasswordForm, setShowPasswordForm] = useState(false);
  
  const [profileData, setProfileData] = useState({
    name: 'John Guide',
    email: 'john.guide@email.com',
    phone: '+91 98765 43210',
    location: 'Ranchi, Jharkhand',
    experience: '5 years',
    languages: ['Hindi', 'English', 'Bengali'],
    specialties: ['Nature Tours', 'Adventure Tours', 'Cultural Tours'],
    bio: 'Passionate tour guide with 5 years of experience exploring the beautiful landscapes of Jharkhand. I specialize in nature and adventure tours, helping tourists discover the hidden gems of this incredible state.',
    joinDate: '2019-01-15',
    totalTours: 156,
    rating: 4.8,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80'
  });

  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const handleProfileChange = (field, value) => {
    setProfileData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleLanguageChange = (index, value) => {
    const newLanguages = [...profileData.languages];
    newLanguages[index] = value;
    setProfileData(prev => ({
      ...prev,
      languages: newLanguages
    }));
  };

  const addLanguage = () => {
    setProfileData(prev => ({
      ...prev,
      languages: [...prev.languages, '']
    }));
  };

  const removeLanguage = (index) => {
    setProfileData(prev => ({
      ...prev,
      languages: prev.languages.filter((_, i) => i !== index)
    }));
  };

  const handleSpecialtyChange = (index, value) => {
    const newSpecialties = [...profileData.specialties];
    newSpecialties[index] = value;
    setProfileData(prev => ({
      ...prev,
      specialties: newSpecialties
    }));
  };

  const addSpecialty = () => {
    setProfileData(prev => ({
      ...prev,
      specialties: [...prev.specialties, '']
    }));
  };

  const removeSpecialty = (index) => {
    setProfileData(prev => ({
      ...prev,
      specialties: prev.specialties.filter((_, i) => i !== index)
    }));
  };

  const handleSaveProfile = () => {
    toast.loading('Saving profile...', { id: 'save-profile' });
    
    setTimeout(() => {
      toast.success('Profile updated successfully!', { id: 'save-profile' });
      setIsEditing(false);
    }, 2000);
  };

  const handlePasswordChange = (e) => {
    setPasswordData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSavePassword = (e) => {
    e.preventDefault();
    
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      toast.error('New passwords do not match');
      return;
    }
    
    if (passwordData.newPassword.length < 6) {
      toast.error('Password must be at least 6 characters long');
      return;
    }
    
    toast.loading('Changing password...', { id: 'change-password' });
    
    setTimeout(() => {
      toast.success('Password changed successfully!', { id: 'change-password' });
      setPasswordData({
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
      });
      setShowPasswordForm(false);
    }, 2000);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Profile & Settings</h1>
          <p className="text-gray-600 mt-2">Manage your profile information and account settings</p>
        </div>
        <div className="flex gap-3">
          {!isEditing ? (
            <button
              onClick={() => setIsEditing(true)}
              className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-200 flex items-center gap-2"
            >
              <Edit className="w-5 h-5" />
              Edit Profile
            </button>
          ) : (
            <div className="flex gap-3">
              <button
                onClick={() => setIsEditing(false)}
                className="bg-gray-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-gray-600 transition-all duration-200"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveProfile}
                className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-200 flex items-center gap-2"
              >
                <Save className="w-5 h-5" />
                Save Changes
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Profile Overview */}
      <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-8 shadow-lg border border-white/20">
        <div className="flex items-start gap-6">
          <div className="relative">
            <img
              src={profileData.avatar}
              alt={profileData.name}
              className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg"
            />
            {isEditing && (
              <button className="absolute bottom-0 right-0 bg-green-500 text-white p-2 rounded-full hover:bg-green-600 transition-colors">
                <Camera className="w-4 h-4" />
              </button>
            )}
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">{profileData.name}</h2>
            <div className="flex items-center gap-4 text-gray-600 mb-4">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>{profileData.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>Joined {new Date(profileData.joinDate).toLocaleDateString()}</span>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <p className="text-2xl font-bold text-green-600">{profileData.totalTours}</p>
                <p className="text-sm text-gray-600">Tours Completed</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-yellow-600">{profileData.rating}</p>
                <p className="text-sm text-gray-600">Average Rating</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-blue-600">{profileData.experience}</p>
                <p className="text-sm text-gray-600">Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Profile Details */}
      <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-8 shadow-lg border border-white/20">
        <h3 className="text-xl font-bold text-gray-800 mb-6">Profile Information</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Full Name
            </label>
            {isEditing ? (
              <input
                type="text"
                value={profileData.name}
                onChange={(e) => handleProfileChange('name', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            ) : (
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <User className="w-5 h-5 text-gray-500" />
                <span>{profileData.name}</span>
              </div>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <Mail className="w-5 h-5 text-gray-500" />
              <span>{profileData.email}</span>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number
            </label>
            {isEditing ? (
              <input
                type="tel"
                value={profileData.phone}
                onChange={(e) => handleProfileChange('phone', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            ) : (
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <Phone className="w-5 h-5 text-gray-500" />
                <span>{profileData.phone}</span>
              </div>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Location
            </label>
            {isEditing ? (
              <input
                type="text"
                value={profileData.location}
                onChange={(e) => handleProfileChange('location', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            ) : (
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <MapPin className="w-5 h-5 text-gray-500" />
                <span>{profileData.location}</span>
              </div>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Experience
            </label>
            {isEditing ? (
              <select
                value={profileData.experience}
                onChange={(e) => handleProfileChange('experience', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                <option value="Less than 1 year">Less than 1 year</option>
                <option value="1-2 years">1-2 years</option>
                <option value="3-5 years">3-5 years</option>
                <option value="5+ years">5+ years</option>
              </select>
            ) : (
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <Award className="w-5 h-5 text-gray-500" />
                <span>{profileData.experience}</span>
              </div>
            )}
          </div>
        </div>

        {/* Bio */}
        <div className="mt-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Bio
          </label>
          {isEditing ? (
            <textarea
              value={profileData.bio}
              onChange={(e) => handleProfileChange('bio', e.target.value)}
              rows="4"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          ) : (
            <div className="p-3 bg-gray-50 rounded-lg">
              <p>{profileData.bio}</p>
            </div>
          )}
        </div>

        {/* Languages */}
        <div className="mt-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Languages
          </label>
          {isEditing ? (
            <div className="space-y-3">
              {profileData.languages.map((language, index) => (
                <div key={index} className="flex gap-3">
                  <input
                    type="text"
                    value={language}
                    onChange={(e) => handleLanguageChange(index, e.target.value)}
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Enter language"
                  />
                  {profileData.languages.length > 1 && (
                    <button
                      onClick={() => removeLanguage(index)}
                      className="px-4 py-3 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                    >
                      Remove
                    </button>
                  )}
                </div>
              ))}
              <button
                onClick={addLanguage}
                className="text-green-600 hover:text-green-700 font-medium"
              >
                + Add Language
              </button>
            </div>
          ) : (
            <div className="flex flex-wrap gap-2">
              {profileData.languages.map((language, index) => (
                <span key={index} className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                  {language}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Specialties */}
        <div className="mt-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Tour Specialties
          </label>
          {isEditing ? (
            <div className="space-y-3">
              {profileData.specialties.map((specialty, index) => (
                <div key={index} className="flex gap-3">
                  <input
                    type="text"
                    value={specialty}
                    onChange={(e) => handleSpecialtyChange(index, e.target.value)}
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Enter specialty"
                  />
                  {profileData.specialties.length > 1 && (
                    <button
                      onClick={() => removeSpecialty(index)}
                      className="px-4 py-3 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                    >
                      Remove
                    </button>
                  )}
                </div>
              ))}
              <button
                onClick={addSpecialty}
                className="text-green-600 hover:text-green-700 font-medium"
              >
                + Add Specialty
              </button>
            </div>
          ) : (
            <div className="flex flex-wrap gap-2">
              {profileData.specialties.map((specialty, index) => (
                <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                  {specialty}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Change Password */}
      <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-8 shadow-lg border border-white/20">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-gray-800">Change Password</h3>
          <button
            onClick={() => setShowPasswordForm(!showPasswordForm)}
            className="bg-gradient-to-r from-purple-500 to-violet-500 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-200 flex items-center gap-2"
          >
            <Lock className="w-4 h-4" />
            {showPasswordForm ? 'Cancel' : 'Change Password'}
          </button>
        </div>

        {showPasswordForm && (
          <form onSubmit={handleSavePassword} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Current Password
              </label>
              <input
                type="password"
                name="currentPassword"
                value={passwordData.currentPassword}
                onChange={handlePasswordChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                New Password
              </label>
              <input
                type="password"
                name="newPassword"
                value={passwordData.newPassword}
                onChange={handlePasswordChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                required
                minLength="6"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Confirm New Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                value={passwordData.confirmPassword}
                onChange={handlePasswordChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                required
                minLength="6"
              />
            </div>
            <div className="flex gap-3">
              <button
                type="submit"
                className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-200"
              >
                Save Password
              </button>
              <button
                type="button"
                onClick={() => setShowPasswordForm(false)}
                className="bg-gray-500 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition-all duration-200"
              >
                Cancel
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default GuideProfile;