import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Clock, 
  Users, 
  DollarSign,
  Star,
  Eye,
  CheckCircle,
  XCircle,
  MoreVertical,
  Search,
  Filter,
  Calendar,
  User,
  TrendingUp,
  AlertTriangle
} from 'lucide-react';

const TourManagement = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [selectedTours, setSelectedTours] = useState([]);

  // Mock data for tours
  const tours = [
    {
      id: 1,
      title: 'Netarhat Wildlife Adventure',
      guide: 'Amit Kumar',
      location: 'Netarhat, Jharkhand',
      duration: '3 days',
      price: '₹8,500',
      capacity: 15,
      booked: 12,
      status: 'approved',
      rating: 4.8,
      reviews: 45,
      featured: true,
      image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=400&q=80',
      description: 'Experience the pristine beauty of Netarhat with guided wildlife tours and nature walks.',
      createdAt: '2024-01-15',
      startDate: '2024-03-20',
      category: 'Wildlife'
    },
    {
      id: 2,
      title: 'Patratu Lake Scenic Tour',
      guide: 'Sunita Devi',
      location: 'Patratu, Jharkhand',
      duration: '2 days',
      price: '₹5,200',
      capacity: 20,
      booked: 18,
      status: 'pending',
      rating: 4.6,
      reviews: 32,
      featured: false,
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=400&q=80',
      description: 'Explore the beautiful Patratu Lake and surrounding hills with cultural experiences.',
      createdAt: '2024-02-03',
      startDate: '2024-03-25',
      category: 'Nature'
    },
    {
      id: 3,
      title: 'Betla National Park Safari',
      guide: 'Amit Kumar',
      location: 'Betla, Jharkhand',
      duration: '4 days',
      price: '₹12,000',
      capacity: 12,
      booked: 8,
      status: 'approved',
      rating: 4.9,
      reviews: 67,
      featured: true,
      image: 'https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?auto=format&fit=crop&w=400&q=80',
      description: 'Deep jungle safari experience with wildlife spotting and tribal village visits.',
      createdAt: '2024-01-28',
      startDate: '2024-04-01',
      category: 'Wildlife'
    },
    {
      id: 4,
      title: 'Hundru Falls Adventure',
      guide: 'Rajesh Singh',
      location: 'Hundru, Jharkhand',
      duration: '1 day',
      price: '₹2,800',
      capacity: 25,
      booked: 22,
      status: 'rejected',
      rating: 4.4,
      reviews: 28,
      featured: false,
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=400&q=80',
      description: 'Day trip to Hundru Falls with adventure activities and local cuisine.',
      createdAt: '2024-02-10',
      startDate: '2024-03-30',
      category: 'Adventure'
    }
  ];

  const statusOptions = [
    { value: 'all', label: 'All Tours', count: tours.length },
    { value: 'pending', label: 'Pending', count: tours.filter(t => t.status === 'pending').length },
    { value: 'approved', label: 'Approved', count: tours.filter(t => t.status === 'approved').length },
    { value: 'rejected', label: 'Rejected', count: tours.filter(t => t.status === 'rejected').length }
  ];

  const handleTourAction = (tourId, action) => {
    console.log(`${action} tour ${tourId}`);
    // Implement tour actions here
  };

  const getFilteredTours = () => {
    let filtered = tours;
    
    if (statusFilter !== 'all') {
      filtered = filtered.filter(tour => tour.status === statusFilter);
    }
    
    if (searchQuery) {
      filtered = filtered.filter(tour =>
        tour.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tour.guide.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tour.location.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    return filtered;
  };

  const TourCard = ({ tour }) => (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 overflow-hidden"
    >
      <div className="relative">
        <img
          src={tour.image}
          alt={tour.title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-4 left-4 flex gap-2">
          {tour.featured && (
            <span className="px-3 py-1 bg-yellow-500 text-white text-xs font-medium rounded-full">
              Featured
            </span>
          )}
          <span className={`px-3 py-1 text-xs font-medium rounded-full ${
            tour.status === 'approved' ? 'bg-green-100 text-green-600' :
            tour.status === 'pending' ? 'bg-yellow-100 text-yellow-600' :
            'bg-red-100 text-red-600'
          }`}>
            {tour.status}
          </span>
        </div>
        <div className="absolute top-4 right-4">
          <button className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors">
            <MoreVertical className="w-4 h-4 text-gray-600" />
          </button>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-800 mb-2">{tour.title}</h3>
            <p className="text-gray-600 text-sm mb-3 line-clamp-2">{tour.description}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <User className="w-4 h-4" />
            <span>{tour.guide}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <MapPin className="w-4 h-4" />
            <span>{tour.location}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Clock className="w-4 h-4" />
            <span>{tour.duration}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Calendar className="w-4 h-4" />
            <span>{new Date(tour.startDate).toLocaleDateString()}</span>
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-4 mb-4">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-gray-800">{tour.price}</div>
              <div className="text-xs text-gray-600">Price per person</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-800">{tour.booked}/{tour.capacity}</div>
              <div className="text-xs text-gray-600">Bookings</div>
            </div>
            <div>
              <div className="flex items-center justify-center gap-1 text-2xl font-bold text-gray-800">
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                {tour.rating}
              </div>
              <div className="text-xs text-gray-600">{tour.reviews} reviews</div>
            </div>
          </div>
        </div>

        <div className="flex gap-2">
          {tour.status === 'pending' && (
            <>
              <button
                onClick={() => handleTourAction(tour.id, 'approve')}
                className="flex-1 flex items-center justify-center gap-2 py-2 px-4 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
              >
                <CheckCircle className="w-4 h-4" />
                Approve
              </button>
              <button
                onClick={() => handleTourAction(tour.id, 'reject')}
                className="flex-1 flex items-center justify-center gap-2 py-2 px-4 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
              >
                <XCircle className="w-4 h-4" />
                Reject
              </button>
            </>
          )}
          <button
            onClick={() => handleTourAction(tour.id, 'view')}
            className="flex-1 flex items-center justify-center gap-2 py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            <Eye className="w-4 h-4" />
            View Details
          </button>
          <button
            onClick={() => handleTourAction(tour.id, tour.featured ? 'unfeature' : 'feature')}
            className={`flex-1 flex items-center justify-center gap-2 py-2 px-4 rounded-lg transition-colors ${
              tour.featured
                ? 'bg-gray-500 text-white hover:bg-gray-600'
                : 'bg-purple-500 text-white hover:bg-purple-600'
            }`}
          >
            <TrendingUp className="w-4 h-4" />
            {tour.featured ? 'Unfeature' : 'Feature'}
          </button>
        </div>
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
            <h1 className="text-2xl font-bold mb-2">Tour Management</h1>
            <p className="opacity-90">Manage and approve tour listings from guides</p>
          </div>
          <div className="text-right">
            <div className="text-3xl font-bold">{tours.length}</div>
            <div className="text-sm opacity-90">Total Tours</div>
          </div>
        </div>
      </motion.div>

      {/* Search and Filter */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/20"
      >
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search tours by title, guide, or location..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-3 bg-gray-100 hover:bg-gray-200 rounded-xl transition-colors">
            <Filter className="w-5 h-5" />
            Advanced Filter
          </button>
        </div>
      </motion.div>

      {/* Status Tabs */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/20"
      >
        <div className="flex flex-wrap gap-2">
          {statusOptions.map((option) => (
            <button
              key={option.value}
              onClick={() => setStatusFilter(option.value)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                statusFilter === option.value
                  ? 'bg-purple-500 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              <span className="font-medium">{option.label}</span>
              <span className="bg-white/20 text-xs px-2 py-1 rounded-full">
                {option.count}
              </span>
            </button>
          ))}
        </div>
      </motion.div>

      {/* Tours Grid */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-6"
      >
        {getFilteredTours().map((tour, index) => (
          <motion.div
            key={tour.id}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 + index * 0.1 }}
          >
            <TourCard tour={tour} />
          </motion.div>
        ))}
      </motion.div>

      {/* Empty State */}
      {getFilteredTours().length === 0 && (
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="bg-white/80 backdrop-blur-lg rounded-2xl p-12 shadow-lg border border-white/20 text-center"
        >
          <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-600 mb-2">No tours found</h3>
          <p className="text-gray-500">Try adjusting your search or filter criteria</p>
        </motion.div>
      )}
    </div>
  );
};

export default TourManagement;

