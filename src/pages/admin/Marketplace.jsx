import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ShoppingBag, 
  Package, 
  Calendar,
  MapPin,
  User,
  Star,
  Eye,
  CheckCircle,
  XCircle,
  MoreVertical,
  Search,
  Filter,
  DollarSign,
  Clock,
  AlertTriangle,
  TrendingUp
} from 'lucide-react';

const Marketplace = () => {
  const [activeTab, setActiveTab] = useState('products');
  const [searchQuery, setSearchQuery] = useState('');

  // Mock data for marketplace items
  const products = [
    {
      id: 1,
      title: 'Tribal Handicraft Collection',
      seller: 'Rajesh Tribal Arts',
      category: 'Handicrafts',
      price: '₹2,500',
      status: 'pending',
      rating: 4.7,
      reviews: 23,
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=400&q=80',
      description: 'Authentic tribal handicrafts including wooden sculptures, paintings, and traditional jewelry.',
      location: 'Ranchi, Jharkhand',
      createdAt: '2024-02-15',
      featured: false
    },
    {
      id: 2,
      title: 'Traditional Santhali Textiles',
      seller: 'Sunita Weavers',
      category: 'Textiles',
      price: '₹1,800',
      status: 'approved',
      rating: 4.9,
      reviews: 45,
      image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=400&q=80',
      description: 'Handwoven traditional Santhali sarees and fabrics with intricate tribal patterns.',
      location: 'Jamshedpur, Jharkhand',
      createdAt: '2024-02-10',
      featured: true
    },
    {
      id: 3,
      title: 'Jharkhand Spices Collection',
      seller: 'Local Spice Co.',
      category: 'Food & Spices',
      price: '₹850',
      status: 'pending',
      rating: 4.5,
      reviews: 18,
      image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=400&q=80',
      description: 'Premium collection of locally sourced spices and traditional Jharkhand ingredients.',
      location: 'Deoghar, Jharkhand',
      createdAt: '2024-02-20',
      featured: false
    }
  ];

  const events = [
    {
      id: 1,
      title: 'Tribal Dance Festival 2024',
      organizer: 'Jharkhand Cultural Society',
      category: 'Cultural Event',
      price: '₹500',
      status: 'approved',
      attendees: 250,
      maxAttendees: 500,
      rating: 4.8,
      reviews: 67,
      image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=400&q=80',
      description: 'Annual tribal dance festival showcasing traditional Jharkhand culture and heritage.',
      location: 'Ranchi, Jharkhand',
      date: '2024-04-15',
      time: '6:00 PM',
      createdAt: '2024-02-05',
      featured: true
    },
    {
      id: 2,
      title: 'Wildlife Photography Workshop',
      organizer: 'Nature Enthusiasts Club',
      category: 'Workshop',
      price: '₹1,200',
      status: 'pending',
      attendees: 45,
      maxAttendees: 50,
      rating: 4.6,
      reviews: 34,
      image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=400&q=80',
      description: 'Learn wildlife photography techniques in the beautiful landscapes of Jharkhand.',
      location: 'Betla National Park, Jharkhand',
      date: '2024-03-25',
      time: '8:00 AM',
      createdAt: '2024-02-12',
      featured: false
    }
  ];

  const tabs = [
    { id: 'products', label: 'Products', count: products.length, icon: Package },
    { id: 'events', label: 'Events', count: events.length, icon: Calendar }
  ];

  const getCurrentItems = () => {
    return activeTab === 'products' ? products : events;
  };

  const handleItemAction = (itemId, action) => {
    console.log(`${action} ${activeTab.slice(0, -1)} ${itemId}`);
    // Implement item actions here
  };

  const ProductCard = ({ product }) => (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 overflow-hidden"
    >
      <div className="relative">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-4 left-4 flex gap-2">
          {product.featured && (
            <span className="px-3 py-1 bg-yellow-500 text-white text-xs font-medium rounded-full">
              Featured
            </span>
          )}
          <span className={`px-3 py-1 text-xs font-medium rounded-full ${
            product.status === 'approved' ? 'bg-green-100 text-green-600' :
            product.status === 'pending' ? 'bg-yellow-100 text-yellow-600' :
            'bg-red-100 text-red-600'
          }`}>
            {product.status}
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
            <h3 className="text-xl font-bold text-gray-800 mb-2">{product.title}</h3>
            <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <User className="w-4 h-4" />
            <span>{product.seller}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <MapPin className="w-4 h-4" />
            <span>{product.location}</span>
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-4 mb-4">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-gray-800">{product.price}</div>
              <div className="text-xs text-gray-600">Price</div>
            </div>
            <div>
              <div className="flex items-center justify-center gap-1 text-2xl font-bold text-gray-800">
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                {product.rating}
              </div>
              <div className="text-xs text-gray-600">{product.reviews} reviews</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-800">{product.category}</div>
              <div className="text-xs text-gray-600">Category</div>
            </div>
          </div>
        </div>

        <div className="flex gap-2">
          {product.status === 'pending' && (
            <>
              <button
                onClick={() => handleItemAction(product.id, 'approve')}
                className="flex-1 flex items-center justify-center gap-2 py-2 px-4 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
              >
                <CheckCircle className="w-4 h-4" />
                Approve
              </button>
              <button
                onClick={() => handleItemAction(product.id, 'reject')}
                className="flex-1 flex items-center justify-center gap-2 py-2 px-4 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
              >
                <XCircle className="w-4 h-4" />
                Reject
              </button>
            </>
          )}
          <button
            onClick={() => handleItemAction(product.id, 'view')}
            className="flex-1 flex items-center justify-center gap-2 py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            <Eye className="w-4 h-4" />
            View Details
          </button>
          <button
            onClick={() => handleItemAction(product.id, product.featured ? 'unfeature' : 'feature')}
            className={`flex-1 flex items-center justify-center gap-2 py-2 px-4 rounded-lg transition-colors ${
              product.featured
                ? 'bg-gray-500 text-white hover:bg-gray-600'
                : 'bg-purple-500 text-white hover:bg-purple-600'
            }`}
          >
            <TrendingUp className="w-4 h-4" />
            {product.featured ? 'Unfeature' : 'Feature'}
          </button>
        </div>
      </div>
    </motion.div>
  );

  const EventCard = ({ event }) => (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 overflow-hidden"
    >
      <div className="relative">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-4 left-4 flex gap-2">
          {event.featured && (
            <span className="px-3 py-1 bg-yellow-500 text-white text-xs font-medium rounded-full">
              Featured
            </span>
          )}
          <span className={`px-3 py-1 text-xs font-medium rounded-full ${
            event.status === 'approved' ? 'bg-green-100 text-green-600' :
            event.status === 'pending' ? 'bg-yellow-100 text-yellow-600' :
            'bg-red-100 text-red-600'
          }`}>
            {event.status}
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
            <h3 className="text-xl font-bold text-gray-800 mb-2">{event.title}</h3>
            <p className="text-gray-600 text-sm mb-3 line-clamp-2">{event.description}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <User className="w-4 h-4" />
            <span>{event.organizer}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <MapPin className="w-4 h-4" />
            <span>{event.location}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Calendar className="w-4 h-4" />
            <span>{new Date(event.date).toLocaleDateString()}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Clock className="w-4 h-4" />
            <span>{event.time}</span>
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-4 mb-4">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-gray-800">{event.price}</div>
              <div className="text-xs text-gray-600">Ticket Price</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-800">{event.attendees}/{event.maxAttendees}</div>
              <div className="text-xs text-gray-600">Attendees</div>
            </div>
            <div>
              <div className="flex items-center justify-center gap-1 text-2xl font-bold text-gray-800">
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                {event.rating}
              </div>
              <div className="text-xs text-gray-600">{event.reviews} reviews</div>
            </div>
          </div>
        </div>

        <div className="flex gap-2">
          {event.status === 'pending' && (
            <>
              <button
                onClick={() => handleItemAction(event.id, 'approve')}
                className="flex-1 flex items-center justify-center gap-2 py-2 px-4 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
              >
                <CheckCircle className="w-4 h-4" />
                Approve
              </button>
              <button
                onClick={() => handleItemAction(event.id, 'reject')}
                className="flex-1 flex items-center justify-center gap-2 py-2 px-4 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
              >
                <XCircle className="w-4 h-4" />
                Reject
              </button>
            </>
          )}
          <button
            onClick={() => handleItemAction(event.id, 'view')}
            className="flex-1 flex items-center justify-center gap-2 py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            <Eye className="w-4 h-4" />
            View Details
          </button>
          <button
            onClick={() => handleItemAction(event.id, event.featured ? 'unfeature' : 'feature')}
            className={`flex-1 flex items-center justify-center gap-2 py-2 px-4 rounded-lg transition-colors ${
              event.featured
                ? 'bg-gray-500 text-white hover:bg-gray-600'
                : 'bg-purple-500 text-white hover:bg-purple-600'
            }`}
          >
            <TrendingUp className="w-4 h-4" />
            {event.featured ? 'Unfeature' : 'Feature'}
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
            <h1 className="text-2xl font-bold mb-2">Marketplace & Community</h1>
            <p className="opacity-90">Manage local products, events, and community activities</p>
          </div>
          <div className="text-right">
            <div className="text-3xl font-bold">{products.length + events.length}</div>
            <div className="text-sm opacity-90">Total Items</div>
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
              placeholder={`Search ${activeTab}...`}
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

      {/* Items Grid */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-6"
      >
        {getCurrentItems()
          .filter(item =>
            item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            (activeTab === 'products' ? item.seller : item.organizer).toLowerCase().includes(searchQuery.toLowerCase())
          )
          .map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 + index * 0.1 }}
            >
              {activeTab === 'products' ? (
                <ProductCard product={item} />
              ) : (
                <EventCard event={item} />
              )}
            </motion.div>
          ))
        }
      </motion.div>

      {/* Empty State */}
      {getCurrentItems().filter(item =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (activeTab === 'products' ? item.seller : item.organizer).toLowerCase().includes(searchQuery.toLowerCase())
      ).length === 0 && (
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="bg-white/80 backdrop-blur-lg rounded-2xl p-12 shadow-lg border border-white/20 text-center"
        >
          <ShoppingBag className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-600 mb-2">No {activeTab} found</h3>
          <p className="text-gray-500">Try adjusting your search criteria</p>
        </motion.div>
      )}
    </div>
  );
};

export default Marketplace;

