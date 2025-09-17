import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  MapPin, 
  TrendingUp, 
  DollarSign,
  Activity,
  AlertTriangle,
  CheckCircle,
  Clock,
  Eye,
  Star
} from 'lucide-react';

const AdminOverview = () => {
  // Mock data for dashboard stats
  const stats = [
    {
      title: 'Total Users',
      value: '2,847',
      change: '+12.5%',
      changeType: 'positive',
      icon: Users,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Active Tours',
      value: '156',
      change: '+8.2%',
      changeType: 'positive',
      icon: MapPin,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Monthly Revenue',
      value: '₹2.4M',
      change: '+15.3%',
      changeType: 'positive',
      icon: DollarSign,
      color: 'from-purple-500 to-violet-500'
    },
    {
      title: 'Platform Growth',
      value: '24.8%',
      change: '+3.1%',
      changeType: 'positive',
      icon: TrendingUp,
      color: 'from-orange-500 to-red-500'
    }
  ];

  const recentActivities = [
    {
      id: 1,
      type: 'user_registration',
      title: 'New User Registration',
      description: 'Sarah Kumar registered as a Tourist',
      time: '2 minutes ago',
      icon: Users,
      color: 'text-blue-500'
    },
    {
      id: 2,
      type: 'tour_approval',
      title: 'Tour Approval Required',
      description: 'Netarhat Wildlife Tour needs approval',
      time: '15 minutes ago',
      icon: MapPin,
      color: 'text-green-500'
    },
    {
      id: 3,
      type: 'payment_received',
      title: 'Payment Received',
      description: '₹5,200 from Rajesh Singh for Patratu Tour',
      time: '1 hour ago',
      icon: DollarSign,
      color: 'text-purple-500'
    },
    {
      id: 4,
      type: 'system_alert',
      title: 'System Alert',
      description: 'High server load detected on booking system',
      time: '2 hours ago',
      icon: AlertTriangle,
      color: 'text-red-500'
    },
    {
      id: 5,
      type: 'tour_completed',
      title: 'Tour Completed',
      description: 'Betla National Park tour completed successfully',
      time: '3 hours ago',
      icon: CheckCircle,
      color: 'text-green-500'
    }
  ];

  const quickActions = [
    {
      title: 'View All Users',
      description: 'Manage tourist and guide accounts',
      icon: Users,
      color: 'from-blue-500 to-cyan-500',
      action: 'users'
    },
    {
      title: 'Approve Tours',
      description: 'Review and approve new tour listings',
      icon: MapPin,
      color: 'from-green-500 to-emerald-500',
      action: 'tours'
    },
    {
      title: 'Generate Reports',
      description: 'View analytics and performance metrics',
      icon: TrendingUp,
      color: 'from-purple-500 to-violet-500',
      action: 'reports'
    },
    {
      title: 'System Settings',
      description: 'Configure platform settings',
      icon: Activity,
      color: 'from-orange-500 to-red-500',
      action: 'settings'
    }
  ];

  const topDestinations = [
    { name: 'Netarhat', bookings: 234, revenue: '₹1.2M', rating: 4.8 },
    { name: 'Patratu Lake', bookings: 189, revenue: '₹980K', rating: 4.6 },
    { name: 'Betla National Park', bookings: 156, revenue: '₹850K', rating: 4.9 },
    { name: 'Hundru Falls', bookings: 142, revenue: '₹720K', rating: 4.7 },
    { name: 'Deoghar Temple', bookings: 134, revenue: '₹680K', rating: 4.5 }
  ];

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 rounded-2xl p-8 text-white"
      >
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">Welcome back, Admin! 👋</h1>
            <p className="text-xl opacity-90">Here's what's happening on your platform today.</p>
          </div>
          <div className="hidden md:block">
            <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center">
              <span className="text-4xl">🏔️</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Stats Grid */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {stats.map((stat, index) => (
          <motion.div
            key={stat.title}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 + index * 0.1 }}
            className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/20"
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <span className={`text-sm font-medium px-2 py-1 rounded-full ${
                stat.changeType === 'positive' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'
              }`}>
                {stat.change}
              </span>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-1">{stat.value}</h3>
            <p className="text-gray-600">{stat.title}</p>
          </motion.div>
        ))}
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Activity */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="lg:col-span-2 bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/20"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-800">Recent Activity</h2>
            <button className="text-purple-600 hover:text-purple-700 font-medium flex items-center gap-2">
              <Eye className="w-4 h-4" />
              View All
            </button>
          </div>
          <div className="space-y-4">
            {recentActivities.map((activity) => (
              <motion.div
                key={activity.id}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="flex items-start gap-4 p-4 bg-gray-50/50 rounded-xl hover:bg-gray-100/50 transition-colors"
              >
                <div className={`w-10 h-10 ${activity.color} bg-opacity-10 rounded-lg flex items-center justify-center`}>
                  <activity.icon className={`w-5 h-5 ${activity.color}`} />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-800 mb-1">{activity.title}</h4>
                  <p className="text-gray-600 text-sm mb-2">{activity.description}</p>
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <Clock className="w-3 h-3" />
                    {activity.time}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/20"
        >
          <h2 className="text-xl font-bold text-gray-800 mb-6">Quick Actions</h2>
          <div className="space-y-4">
            {quickActions.map((action, index) => (
              <motion.button
                key={action.title}
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl hover:shadow-md transition-all duration-200 text-left"
              >
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 bg-gradient-to-r ${action.color} rounded-lg flex items-center justify-center`}>
                    <action.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">{action.title}</h4>
                    <p className="text-sm text-gray-600">{action.description}</p>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Top Destinations */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/20"
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-800">Top Performing Destinations</h2>
          <button className="text-purple-600 hover:text-purple-700 font-medium flex items-center gap-2">
            <TrendingUp className="w-4 h-4" />
            View Analytics
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Destination</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Bookings</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Revenue</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Rating</th>
              </tr>
            </thead>
            <tbody>
              {topDestinations.map((destination, index) => (
                <motion.tr
                  key={destination.name}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="border-b border-gray-100 hover:bg-gray-50/50 transition-colors"
                >
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-white" />
                      </div>
                      <span className="font-medium text-gray-800">{destination.name}</span>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-gray-600">{destination.bookings}</td>
                  <td className="py-4 px-4 text-gray-600">{destination.revenue}</td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-gray-600">{destination.rating}</span>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
};

export default AdminOverview;

