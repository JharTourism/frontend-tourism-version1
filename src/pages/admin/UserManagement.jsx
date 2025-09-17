import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  UserPlus, 
  Search, 
  Filter, 
  MoreVertical,
  Edit,
  Trash2,
  Shield,
  ShieldCheck,
  UserX,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Star
} from 'lucide-react';

const UserManagement = () => {
  const [activeTab, setActiveTab] = useState('tourists');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedUsers, setSelectedUsers] = useState([]);

  // Mock data for users
  const tourists = [
    {
      id: 1,
      name: 'Sarah Kumar',
      email: 'sarah.kumar@email.com',
      phone: '+91 98765 43210',
      location: 'Mumbai, Maharashtra',
      joinDate: '2024-01-15',
      status: 'active',
      verified: true,
      bookings: 12,
      rating: 4.8,
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=100&q=80'
    },
    {
      id: 2,
      name: 'Rajesh Singh',
      email: 'rajesh.singh@email.com',
      phone: '+91 87654 32109',
      location: 'Delhi, NCR',
      joinDate: '2024-02-03',
      status: 'active',
      verified: true,
      bookings: 8,
      rating: 4.6,
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80'
    },
    {
      id: 3,
      name: 'Priya Sharma',
      email: 'priya.sharma@email.com',
      phone: '+91 76543 21098',
      location: 'Bangalore, Karnataka',
      joinDate: '2024-01-28',
      status: 'suspended',
      verified: false,
      bookings: 3,
      rating: 4.2,
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&q=80'
    }
  ];

  const guides = [
    {
      id: 1,
      name: 'Amit Kumar',
      email: 'amit.kumar@email.com',
      phone: '+91 98765 43211',
      location: 'Ranchi, Jharkhand',
      joinDate: '2023-11-20',
      status: 'active',
      verified: true,
      tours: 25,
      rating: 4.9,
      experience: '5 years',
      languages: ['Hindi', 'English', 'Santhali'],
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&q=80'
    },
    {
      id: 2,
      name: 'Sunita Devi',
      email: 'sunita.devi@email.com',
      phone: '+91 87654 32110',
      location: 'Jamshedpur, Jharkhand',
      joinDate: '2023-12-05',
      status: 'active',
      verified: true,
      tours: 18,
      rating: 4.7,
      experience: '3 years',
      languages: ['Hindi', 'English', 'Bengali'],
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&q=80'
    }
  ];

  const admins = [
    {
      id: 1,
      name: 'Dr. Rajesh Verma',
      email: 'rajesh.verma@jharkhandtourism.gov.in',
      phone: '+91 98765 43212',
      location: 'Ranchi, Jharkhand',
      joinDate: '2023-08-15',
      status: 'active',
      verified: true,
      role: 'Super Admin',
      permissions: ['All'],
      avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&q=80'
    }
  ];

  const tabs = [
    { id: 'tourists', label: 'Tourists', count: tourists.length, icon: Users },
    { id: 'guides', label: 'Guides', count: guides.length, icon: Shield },
    { id: 'admins', label: 'Admins', count: admins.length, icon: ShieldCheck }
  ];

  const getCurrentUsers = () => {
    switch (activeTab) {
      case 'tourists': return tourists;
      case 'guides': return guides;
      case 'admins': return admins;
      default: return [];
    }
  };

  const handleUserAction = (userId, action) => {
    console.log(`${action} user ${userId}`);
    // Implement user actions here
  };

  const UserCard = ({ user, type }) => (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-4">
          <div className="relative">
            <img
              src={user.avatar}
              alt={user.name}
              className="w-16 h-16 rounded-full object-cover"
            />
            {user.verified && (
              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                <ShieldCheck className="w-3 h-3 text-white" />
              </div>
            )}
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-1">{user.name}</h3>
            <p className="text-gray-600 text-sm mb-2">{user.email}</p>
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                {user.location}
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                Joined {new Date(user.joinDate).toLocaleDateString()}
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
            user.status === 'active' 
              ? 'bg-green-100 text-green-600' 
              : user.status === 'suspended'
              ? 'bg-red-100 text-red-600'
              : 'bg-yellow-100 text-yellow-600'
          }`}>
            {user.status}
          </span>
          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <MoreVertical className="w-4 h-4 text-gray-500" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="bg-gray-50 rounded-lg p-3">
          <div className="text-2xl font-bold text-gray-800">
            {type === 'tourists' ? user.bookings : type === 'guides' ? user.tours : user.role}
          </div>
          <div className="text-sm text-gray-600">
            {type === 'tourists' ? 'Bookings' : type === 'guides' ? 'Tours Conducted' : 'Role'}
          </div>
        </div>
        <div className="bg-gray-50 rounded-lg p-3">
          <div className="flex items-center gap-1 text-2xl font-bold text-gray-800">
            <Star className="w-5 h-5 text-yellow-400 fill-current" />
            {user.rating}
          </div>
          <div className="text-sm text-gray-600">Rating</div>
        </div>
      </div>

      {type === 'guides' && (
        <div className="mb-4">
          <div className="text-sm text-gray-600 mb-2">Experience & Languages</div>
          <div className="flex flex-wrap gap-2">
            <span className="px-2 py-1 bg-blue-100 text-blue-600 text-xs rounded-full">
              {user.experience} experience
            </span>
            {user.languages.map((lang, index) => (
              <span key={index} className="px-2 py-1 bg-green-100 text-green-600 text-xs rounded-full">
                {lang}
              </span>
            ))}
          </div>
        </div>
      )}

      <div className="flex items-center gap-2">
        <button
          onClick={() => handleUserAction(user.id, 'edit')}
          className="flex-1 flex items-center justify-center gap-2 py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          <Edit className="w-4 h-4" />
          Edit
        </button>
        <button
          onClick={() => handleUserAction(user.id, 'contact')}
          className="flex-1 flex items-center justify-center gap-2 py-2 px-4 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
        >
          <Mail className="w-4 h-4" />
          Contact
        </button>
        <button
          onClick={() => handleUserAction(user.id, user.status === 'active' ? 'suspend' : 'activate')}
          className={`flex-1 flex items-center justify-center gap-2 py-2 px-4 rounded-lg transition-colors ${
            user.status === 'active'
              ? 'bg-red-500 text-white hover:bg-red-600'
              : 'bg-green-500 text-white hover:bg-green-600'
          }`}
        >
          {user.status === 'active' ? <UserX className="w-4 h-4" /> : <ShieldCheck className="w-4 h-4" />}
          {user.status === 'active' ? 'Suspend' : 'Activate'}
        </button>
      </div>
    </motion.div>
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 rounded-2xl p-6 text-white"
      >
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold mb-2">User Management</h1>
            <p className="opacity-90">Manage tourists, guides, and administrators</p>
          </div>
          <button className="flex items-center gap-2 bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-colors">
            <UserPlus className="w-5 h-5" />
            Add User
          </button>
        </div>
      </motion.div>

      {/* Search and Filter */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/20"
      >
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search users by name, email, or location..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-3 bg-gray-100 hover:bg-gray-200 rounded-xl transition-colors">
            <Filter className="w-5 h-5" />
            Filter
          </button>
        </div>
      </motion.div>

      {/* Tabs */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/20"
      >
        <div className="flex space-x-1 bg-gray-100 rounded-xl p-1">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-lg transition-all duration-200 ${
                activeTab === tab.id
                  ? 'bg-white text-purple-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              <tab.icon className="w-5 h-5" />
              <span className="font-medium">{tab.label}</span>
              <span className="bg-gray-200 text-gray-600 text-xs px-2 py-1 rounded-full">
                {tab.count}
              </span>
            </button>
          ))}
        </div>
      </motion.div>

      {/* Users Grid */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-6"
      >
        {getCurrentUsers()
          .filter(user => 
            user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
            user.location.toLowerCase().includes(searchQuery.toLowerCase())
          )
          .map((user, index) => (
            <motion.div
              key={user.id}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 + index * 0.1 }}
            >
              <UserCard user={user} type={activeTab} />
            </motion.div>
          ))
        }
      </motion.div>

      {/* Empty State */}
      {getCurrentUsers().filter(user => 
        user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.location.toLowerCase().includes(searchQuery.toLowerCase())
      ).length === 0 && (
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="bg-white/80 backdrop-blur-lg rounded-2xl p-12 shadow-lg border border-white/20 text-center"
        >
          <Users className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-600 mb-2">No users found</h3>
          <p className="text-gray-500">Try adjusting your search criteria</p>
        </motion.div>
      )}
    </div>
  );
};

export default UserManagement;

