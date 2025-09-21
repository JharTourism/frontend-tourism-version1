import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Calendar, 
  CheckCircle, 
  DollarSign, 
  TrendingUp,
  MapPin,
  Users,
  Star,
  Clock,
  Plus
} from 'lucide-react';

const GuideOverview = () => {
  const navigate = useNavigate();
  const stats = [
    {
      title: 'Upcoming Tours',
      value: '12',
      change: '+3 this week',
      icon: Calendar,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Completed Tours',
      value: '48',
      change: '+8 this month',
      icon: CheckCircle,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Total Earnings',
      value: '₹45,600',
      change: '+12% this month',
      icon: DollarSign,
      color: 'from-purple-500 to-violet-500'
    },
    {
      title: 'Rating',
      value: '4.8',
      change: 'Based on 156 reviews',
      icon: Star,
      color: 'from-orange-500 to-red-500'
    }
  ];

  const upcomingTours = [
    {
      id: 1,
      title: 'Netarhat Hill Station Tour',
      date: '2024-01-15',
      tourists: 8,
      duration: '2 days',
      status: 'confirmed'
    },
    {
      id: 2,
      title: 'Betla National Park Safari',
      date: '2024-01-18',
      tourists: 12,
      duration: '1 day',
      status: 'pending'
    },
    {
      id: 3,
      title: 'Hundru Falls Adventure',
      date: '2024-01-22',
      tourists: 6,
      duration: '1 day',
      status: 'confirmed'
    }
  ];

  const recentRequests = [
    {
      id: 1,
      tourist: 'Sarah Johnson',
      tour: 'Patratu Dam Tour',
      date: '2024-01-20',
      status: 'pending'
    },
    {
      id: 2,
      tourist: 'Mike Chen',
      tour: 'Deoghar Temple Visit',
      date: '2024-01-25',
      status: 'pending'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl p-8 text-white">
        <h1 className="text-3xl font-bold mb-2">Welcome back, John! 👋</h1>
        <p className="text-lg opacity-90">
          Ready to guide another amazing adventure in Jharkhand?
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const IconComponent = stat.icon;
          return (
            <div key={index} className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/20">
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${stat.color} flex items-center justify-center`}>
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <span className="text-sm text-green-600 font-medium">{stat.change}</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-1">{stat.value}</h3>
              <p className="text-gray-600">{stat.title}</p>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Upcoming Tours */}
        <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/20">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-800">Upcoming Tours</h2>
            <span className="text-sm text-blue-600 font-medium">View All</span>
          </div>
          <div className="space-y-4">
            {upcomingTours.map((tour) => (
              <div key={tour.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-800">{tour.title}</h3>
                  <div className="flex items-center gap-4 mt-2 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{tour.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      <span>{tour.tourists} tourists</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{tour.duration}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    tour.status === 'confirmed' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {tour.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Requests */}
        <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/20">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-800">Recent Requests</h2>
            <span className="text-sm text-blue-600 font-medium">View All</span>
          </div>
          <div className="space-y-4">
            {recentRequests.map((request) => (
              <div key={request.id} className="p-4 bg-gray-50 rounded-xl">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-gray-800">{request.tourist}</h3>
                  <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full">
                    {request.status}
                  </span>
                </div>
                <p className="text-gray-600 mb-2">{request.tour}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{request.date}</span>
                  <div className="flex gap-2">
                    <button className="px-3 py-1 bg-green-500 text-white text-xs rounded-lg hover:bg-green-600 transition-colors">
                      Accept
                    </button>
                    <button className="px-3 py-1 bg-red-500 text-white text-xs rounded-lg hover:bg-red-600 transition-colors">
                      Decline
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/20">
        <h2 className="text-xl font-bold text-gray-800 mb-6">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button 
            onClick={() => navigate('/guide-dashboard/create-tour')}
            className="p-4 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-xl hover:shadow-lg transition-all duration-200 flex items-center gap-3"
          >
            <Plus className="w-5 h-5" />
            <span>Create New Tour</span>
          </button>
          <button 
            onClick={() => navigate('/guide-dashboard/requests')}
            className="p-4 bg-gradient-to-r from-purple-500 to-violet-500 text-white rounded-xl hover:shadow-lg transition-all duration-200 flex items-center gap-3"
          >
            <Users className="w-5 h-5" />
            <span>View Requests</span>
          </button>
          <button 
            onClick={() => navigate('/guide-dashboard/tours')}
            className="p-4 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-xl hover:shadow-lg transition-all duration-200 flex items-center gap-3"
          >
            <MapPin className="w-5 h-5" />
            <span>My Tours</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default GuideOverview;