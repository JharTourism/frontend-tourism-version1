import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Calendar, 
  Users, 
  MapPin, 
  Clock, 
  CheckCircle, 
  XCircle,
  Eye,
  Edit,
  MoreVertical
} from 'lucide-react';

const MyTours = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('upcoming');

  const upcomingTours = [
    {
      id: 1,
      title: 'Netarhat Hill Station Adventure',
      location: 'Netarhat, Jharkhand',
      date: '2024-01-15',
      time: '08:00 AM',
      duration: '2 days',
      tourists: 8,
      maxCapacity: 12,
      price: 2500,
      status: 'confirmed',
      description: 'Explore the beautiful hill station with scenic views and local culture. Includes accommodation and meals.',
      image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=400&q=80',
      guide: 'John Guide',
      category: 'Nature & Adventure'
    },
    {
      id: 2,
      title: 'Betla National Park Safari',
      location: 'Betla National Park',
      date: '2024-01-18',
      time: '06:00 AM',
      duration: '1 day',
      tourists: 12,
      maxCapacity: 15,
      price: 1800,
      status: 'pending',
      description: 'Wildlife safari with tiger spotting and nature trails. Professional guide included.',
      image: 'https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?auto=format&fit=crop&w=400&q=80',
      guide: 'John Guide',
      category: 'Wildlife'
    },
    {
      id: 3,
      title: 'Hundru Falls Photography Tour',
      location: 'Hundru Falls, Ranchi',
      date: '2024-01-22',
      time: '09:00 AM',
      duration: '1 day',
      tourists: 6,
      maxCapacity: 10,
      price: 1200,
      status: 'confirmed',
      description: 'Adventure tour to the majestic Hundru Falls with photography opportunities and local stories.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=400&q=80',
      guide: 'John Guide',
      category: 'Adventure'
    },
    {
      id: 4,
      title: 'Patratu Dam Scenic Tour',
      location: 'Patratu, Jharkhand',
      date: '2024-01-25',
      time: '07:00 AM',
      duration: '1 day',
      tourists: 10,
      maxCapacity: 12,
      price: 1500,
      status: 'confirmed',
      description: 'Scenic tour of Patratu Dam with boating and local sightseeing. Perfect for families.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=400&q=80',
      guide: 'John Guide',
      category: 'Scenic'
    },
    {
      id: 5,
      title: 'Deoghar Spiritual Journey',
      location: 'Deoghar, Jharkhand',
      date: '2024-01-28',
      time: '06:30 AM',
      duration: '2 days',
      tourists: 15,
      maxCapacity: 20,
      price: 2200,
      status: 'pending',
      description: 'Spiritual journey to Baidyanath Temple and local religious sites. Cultural immersion experience.',
      image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
      guide: 'John Guide',
      category: 'Cultural'
    }
  ];

  const pastTours = [
    {
      id: 6,
      title: 'Ranchi City Heritage Walk',
      location: 'Ranchi, Jharkhand',
      date: '2024-01-05',
      time: '09:00 AM',
      duration: '1 day',
      tourists: 8,
      maxCapacity: 12,
      price: 1200,
      status: 'completed',
      description: 'Heritage walk through Ranchi city covering historical monuments and local markets.',
      rating: 4.8,
      reviews: 10,
      image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
      guide: 'John Guide',
      category: 'Heritage'
    },
    {
      id: 7,
      title: 'Jharkhand Tribal Village Experience',
      location: 'Tribal Villages, Jharkhand',
      date: '2023-12-28',
      time: '08:00 AM',
      duration: '2 days',
      tourists: 12,
      maxCapacity: 15,
      price: 2800,
      status: 'completed',
      description: 'Immersive experience in tribal villages with cultural activities and local cuisine.',
      rating: 4.9,
      reviews: 18,
      image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=400&q=80',
      guide: 'John Guide',
      category: 'Cultural'
    },
    {
      id: 8,
      title: 'Dalma Wildlife Sanctuary Tour',
      location: 'Dalma Wildlife Sanctuary',
      date: '2023-12-20',
      time: '06:00 AM',
      duration: '1 day',
      tourists: 6,
      maxCapacity: 8,
      price: 1600,
      status: 'completed',
      description: 'Wildlife tour in Dalma Sanctuary with elephant spotting and nature photography.',
      rating: 4.7,
      reviews: 14,
      image: 'https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?auto=format&fit=crop&w=400&q=80',
      guide: 'John Guide',
      category: 'Wildlife'
    },
    {
      id: 9,
      title: 'Hazaribagh National Park Safari',
      location: 'Hazaribagh National Park',
      date: '2023-12-15',
      time: '05:30 AM',
      duration: '1 day',
      tourists: 10,
      maxCapacity: 12,
      price: 1800,
      status: 'completed',
      description: 'Full day safari in Hazaribagh National Park with professional wildlife guide.',
      rating: 4.6,
      reviews: 16,
      image: 'https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?auto=format&fit=crop&w=400&q=80',
      guide: 'John Guide',
      category: 'Wildlife'
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'confirmed': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'completed': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const TourCard = ({ tour }) => (
    <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 overflow-hidden">
      {/* Tour Image */}
      <div className="relative h-48">
        <img 
          src={tour.image} 
          alt={tour.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-800">
            {tour.category}
          </span>
        </div>
        <div className="absolute top-4 right-4">
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(tour.status)}`}>
            {tour.status}
          </span>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-800 mb-2">{tour.title}</h3>
            <div className="flex items-center gap-2 text-gray-600 mb-2">
              <MapPin className="w-4 h-4" />
              <span>{tour.location}</span>
            </div>
            <p className="text-gray-600 text-sm mb-4">{tour.description}</p>
          </div>
        </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4 text-gray-500" />
          <div>
            <p className="text-sm text-gray-600">Date</p>
            <p className="font-semibold">{tour.date}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4 text-gray-500" />
          <div>
            <p className="text-sm text-gray-600">Time</p>
            <p className="font-semibold">{tour.time}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Users className="w-4 h-4 text-gray-500" />
          <div>
            <p className="text-sm text-gray-600">Tourists</p>
            <p className="font-semibold">{tour.tourists}/{tour.maxCapacity}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold text-green-600">₹{tour.price}</span>
        </div>
      </div>

        {tour.status === 'completed' && (
          <div className="bg-green-50 rounded-lg p-3 mb-4">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-600" />
              <span className="text-sm font-medium text-green-800">
                Rating: {tour.rating}/5 ({tour.reviews} reviews)
              </span>
            </div>
          </div>
        )}

        <div className="flex gap-3">
          <button className="flex-1 bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-2 px-4 rounded-lg hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2">
            <Eye className="w-4 h-4" />
            View Details
          </button>
          {tour.status === 'confirmed' && (
            <button className="flex-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white py-2 px-4 rounded-lg hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2">
              <CheckCircle className="w-4 h-4" />
              Mark Complete
            </button>
          )}
          <button className="bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center">
            <Edit className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">My Tours</h1>
          <p className="text-gray-600 mt-2">Manage your upcoming and past tours</p>
        </div>
        <button 
          onClick={() => navigate('/guide-dashboard/create-tour')}
          className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-200 flex items-center gap-2"
        >
          <span>+</span>
          Create New Tour
        </button>
      </div>

      {/* Tabs */}
      <div className="flex space-x-1 bg-gray-100 p-1 rounded-xl w-fit">
        <button
          onClick={() => setActiveTab('upcoming')}
          className={`px-6 py-2 rounded-lg font-medium transition-all duration-200 ${
            activeTab === 'upcoming'
              ? 'bg-white text-green-600 shadow-sm'
              : 'text-gray-600 hover:text-gray-800'
          }`}
        >
          Upcoming Tours ({upcomingTours.length})
        </button>
        <button
          onClick={() => setActiveTab('past')}
          className={`px-6 py-2 rounded-lg font-medium transition-all duration-200 ${
            activeTab === 'past'
              ? 'bg-white text-green-600 shadow-sm'
              : 'text-gray-600 hover:text-gray-800'
          }`}
        >
          Past Tours ({pastTours.length})
        </button>
      </div>

      {/* Tours Grid */}
      <div className="grid grid-cols-1 gap-6">
        {activeTab === 'upcoming' ? (
          upcomingTours.map((tour) => <TourCard key={tour.id} tour={tour} />)
        ) : (
          pastTours.map((tour) => <TourCard key={tour.id} tour={tour} />)
        )}
      </div>

      {/* Empty State */}
      {((activeTab === 'upcoming' && upcomingTours.length === 0) || 
        (activeTab === 'past' && pastTours.length === 0)) && (
        <div className="text-center py-12">
          <div className="w-24 h-24 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
            <MapPin className="w-12 h-12 text-gray-400" />
          </div>
          <h3 className="text-xl font-semibold text-gray-600 mb-2">
            No {activeTab} tours
          </h3>
          <p className="text-gray-500 mb-6">
            {activeTab === 'upcoming' 
              ? 'Create your first tour to get started'
              : 'Your completed tours will appear here'
            }
          </p>
          {activeTab === 'upcoming' && (
            <button 
              onClick={() => navigate('/guide-dashboard/create-tour')}
              className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-200"
            >
              Create New Tour
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default MyTours;