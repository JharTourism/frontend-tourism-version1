import React, { useState } from 'react';
import { 
  Users, 
  CheckCircle, 
  XCircle, 
  Clock, 
  MapPin, 
  Calendar,
  MessageCircle,
  Star,
  Filter
} from 'lucide-react';

const TouristRequests = () => {
  const [filter, setFilter] = useState('all');
  const [selectedRequest, setSelectedRequest] = useState(null);

  const requests = [
    {
      id: 1,
      tourist: {
        name: 'Sarah Johnson',
        email: 'sarah.j@email.com',
        phone: '+91 98765 43210',
        avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=150&q=80',
        rating: 4.8,
        totalTours: 12,
        verified: true
      },
      tour: {
        title: 'Netarhat Hill Station Adventure',
        location: 'Netarhat, Jharkhand',
        date: '2024-01-20',
        time: '08:00 AM',
        duration: '2 days',
        price: 2500,
        tourists: 2
      },
      status: 'pending',
      requestedAt: '2024-01-10',
      message: 'Hi! We are a couple visiting Jharkhand for the first time. We would love to explore Netarhat and learn about the local culture. Please let us know if you can accommodate us.',
      specialRequests: ['Vegetarian meals', 'Early morning photography']
    },
    {
      id: 2,
      tourist: {
        name: 'Mike Chen',
        email: 'mike.chen@email.com',
        phone: '+91 87654 32109',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
        rating: 4.6,
        totalTours: 8,
        verified: true
      },
      tour: {
        title: 'Betla National Park Safari',
        location: 'Betla National Park',
        date: '2024-01-25',
        time: '06:00 AM',
        duration: '1 day',
        price: 1800,
        tourists: 4
      },
      status: 'pending',
      requestedAt: '2024-01-12',
      message: 'Looking forward to the wildlife safari! We are a family of 4 with two teenagers who love photography.',
      specialRequests: ['Professional camera guidance', 'Wildlife photography tips']
    },
    {
      id: 3,
      tourist: {
        name: 'Priya Sharma',
        email: 'priya.s@email.com',
        phone: '+91 76543 21098',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80',
        rating: 4.9,
        totalTours: 15,
        verified: true
      },
      tour: {
        title: 'Hundru Falls Photography Tour',
        location: 'Hundru Falls, Ranchi',
        date: '2024-01-18',
        time: '09:00 AM',
        duration: '1 day',
        price: 1200,
        tourists: 1
      },
      status: 'accepted',
      requestedAt: '2024-01-08',
      message: 'Solo traveler looking for an adventure tour. I have experience with trekking and photography.',
      specialRequests: ['Advanced photography spots']
    },
    {
      id: 4,
      tourist: {
        name: 'David Wilson',
        email: 'david.w@email.com',
        phone: '+91 65432 10987',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80',
        rating: 4.7,
        totalTours: 6,
        verified: false
      },
      tour: {
        title: 'Patratu Dam Scenic Tour',
        location: 'Patratu, Jharkhand',
        date: '2024-01-15',
        time: '07:00 AM',
        duration: '1 day',
        price: 1500,
        tourists: 3
      },
      status: 'declined',
      requestedAt: '2024-01-05',
      message: 'Group of 3 friends interested in scenic photography and local cuisine.',
      specialRequests: ['Local food recommendations']
    },
    {
      id: 5,
      tourist: {
        name: 'Emma Thompson',
        email: 'emma.t@email.com',
        phone: '+91 54321 09876',
        avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80',
        rating: 4.9,
        totalTours: 20,
        verified: true
      },
      tour: {
        title: 'Deoghar Spiritual Journey',
        location: 'Deoghar, Jharkhand',
        date: '2024-01-28',
        time: '06:30 AM',
        duration: '2 days',
        price: 2200,
        tourists: 2
      },
      status: 'pending',
      requestedAt: '2024-01-14',
      message: 'Spiritual couple looking for a meaningful journey to Deoghar. We are interested in temple visits and local culture.',
      specialRequests: ['Temple rituals explanation', 'Cultural insights']
    },
    {
      id: 6,
      tourist: {
        name: 'Rajesh Kumar',
        email: 'rajesh.k@email.com',
        phone: '+91 43210 98765',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
        rating: 4.5,
        totalTours: 5,
        verified: false
      },
      tour: {
        title: 'Ranchi Heritage Walk',
        location: 'Ranchi, Jharkhand',
        date: '2024-01-22',
        time: '09:00 AM',
        duration: '1 day',
        price: 1200,
        tourists: 1
      },
      status: 'accepted',
      requestedAt: '2024-01-13',
      message: 'Local resident wanting to explore my own city with a professional guide. Interested in hidden historical gems.',
      specialRequests: ['Off-beat locations', 'Local history']
    }
  ];

  const filteredRequests = requests.filter(request => {
    if (filter === 'all') return true;
    return request.status === filter;
  });

  const handleAccept = (requestId) => {
    // Simulate API call
    console.log('Accepting request:', requestId);
    alert('Request accepted! Tourist will be notified.');
  };

  const handleDecline = (requestId) => {
    // Simulate API call
    console.log('Declining request:', requestId);
    alert('Request declined. Tourist will be notified.');
  };

  const RequestCard = ({ request }) => (
    <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300">
      <div className="flex items-start gap-4 mb-4">
        <div className="relative">
          <img
            src={request.tourist.avatar}
            alt={request.tourist.name}
            className="w-16 h-16 rounded-full object-cover"
          />
          {request.tourist.verified && (
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xs">✓</span>
            </div>
          )}
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="text-lg font-semibold text-gray-800">{request.tourist.name}</h3>
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 text-yellow-500" />
              <span className="text-sm font-medium">{request.tourist.rating}</span>
            </div>
            {request.tourist.verified && (
              <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">Verified</span>
            )}
          </div>
          <p className="text-sm text-gray-600 mb-2">
            {request.tourist.totalTours} tours completed
          </p>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <span>{request.tourist.email}</span>
            <span>{request.tourist.phone}</span>
          </div>
        </div>
        <div className="flex flex-col items-end">
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
            request.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
            request.status === 'accepted' ? 'bg-green-100 text-green-800' :
            'bg-red-100 text-red-800'
          }`}>
            {request.status}
          </span>
          <span className="text-xs text-gray-500 mt-1">
            {new Date(request.requestedAt).toLocaleDateString()}
          </span>
        </div>
      </div>

      <div className="bg-gray-50 rounded-lg p-4 mb-4">
        <h4 className="font-semibold text-gray-800 mb-2">{request.tour.title}</h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-gray-500" />
            <span>{request.tour.location}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-gray-500" />
            <span>{request.tour.date}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-gray-500" />
            <span>{request.tour.time}</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-gray-500" />
            <span>{request.tour.tourists} tourists</span>
          </div>
        </div>
        <div className="mt-2 flex items-center justify-between">
          <span className="text-lg font-bold text-green-600">₹{request.tour.price} per person</span>
          <span className="text-sm text-gray-600">Total: ₹{request.tour.price * request.tour.tourists}</span>
        </div>
      </div>

      {request.message && (
        <div className="bg-blue-50 rounded-lg p-4 mb-4">
          <div className="flex items-start gap-2">
            <MessageCircle className="w-5 h-5 text-blue-600 mt-0.5" />
            <div>
              <p className="text-sm font-medium text-blue-800 mb-1">Message from tourist:</p>
              <p className="text-sm text-blue-700">{request.message}</p>
            </div>
          </div>
        </div>
      )}

      {request.specialRequests && request.specialRequests.length > 0 && (
        <div className="bg-purple-50 rounded-lg p-4 mb-4">
          <div className="flex items-start gap-2">
            <span className="text-purple-600 text-lg">✨</span>
            <div>
              <p className="text-sm font-medium text-purple-800 mb-2">Special Requests:</p>
              <div className="flex flex-wrap gap-2">
                {request.specialRequests.map((req, index) => (
                  <span key={index} className="px-3 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">
                    {req}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {request.status === 'pending' && (
        <div className="flex gap-3">
          <button
            onClick={() => handleAccept(request.id)}
            className="flex-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white py-2 px-4 rounded-lg hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2"
          >
            <CheckCircle className="w-4 h-4" />
            Accept Request
          </button>
          <button
            onClick={() => handleDecline(request.id)}
            className="flex-1 bg-gradient-to-r from-red-500 to-pink-500 text-white py-2 px-4 rounded-lg hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2"
          >
            <XCircle className="w-4 h-4" />
            Decline Request
          </button>
        </div>
      )}

      {request.status === 'accepted' && (
        <div className="bg-green-50 rounded-lg p-4">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-green-600" />
            <span className="text-green-800 font-medium">Request Accepted</span>
          </div>
          <p className="text-sm text-green-700 mt-1">
            Tourist has been notified. Tour details will be shared soon.
          </p>
        </div>
      )}

      {request.status === 'declined' && (
        <div className="bg-red-50 rounded-lg p-4">
          <div className="flex items-center gap-2">
            <XCircle className="w-5 h-5 text-red-600" />
            <span className="text-red-800 font-medium">Request Declined</span>
          </div>
          <p className="text-sm text-red-700 mt-1">
            Tourist has been notified of the decision.
          </p>
        </div>
      )}
    </div>
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Tourist Requests</h1>
          <p className="text-gray-600 mt-2">Manage booking requests from tourists</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Filter className="w-5 h-5 text-gray-500" />
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <option value="all">All Requests</option>
              <option value="pending">Pending</option>
              <option value="accepted">Accepted</option>
              <option value="declined">Declined</option>
            </select>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/20">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Requests</p>
              <p className="text-2xl font-bold text-gray-800">{requests.length}</p>
            </div>
            <Users className="w-8 h-8 text-blue-500" />
          </div>
        </div>
        <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/20">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Pending</p>
              <p className="text-2xl font-bold text-yellow-600">{requests.filter(r => r.status === 'pending').length}</p>
            </div>
            <Clock className="w-8 h-8 text-yellow-500" />
          </div>
        </div>
        <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/20">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Accepted</p>
              <p className="text-2xl font-bold text-green-600">{requests.filter(r => r.status === 'accepted').length}</p>
            </div>
            <CheckCircle className="w-8 h-8 text-green-500" />
          </div>
        </div>
        <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/20">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Declined</p>
              <p className="text-2xl font-bold text-red-600">{requests.filter(r => r.status === 'declined').length}</p>
            </div>
            <XCircle className="w-8 h-8 text-red-500" />
          </div>
        </div>
      </div>

      {/* Requests List */}
      <div className="space-y-6">
        {filteredRequests.length > 0 ? (
          filteredRequests.map((request) => (
            <RequestCard key={request.id} request={request} />
          ))
        ) : (
          <div className="text-center py-12">
            <div className="w-24 h-24 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
              <Users className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">
              No {filter === 'all' ? '' : filter} requests
            </h3>
            <p className="text-gray-500">
              {filter === 'pending' 
                ? 'No pending requests at the moment'
                : filter === 'accepted'
                ? 'No accepted requests found'
                : filter === 'declined'
                ? 'No declined requests found'
                : 'No requests found'
              }
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TouristRequests;