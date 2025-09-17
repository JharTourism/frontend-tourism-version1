import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ShoppingBag, 
  ShoppingCart, 
  Star, 
  Search, 
  Filter,
  Heart,
  Share2,
  ShoppingCartIcon,
  MapPin,
  Clock,
  Phone,
  Navigation,
  Tag,
  Truck,
  Shield,
  CheckCircle,
  ChevronDown,
  ChevronUp,
  Package,
  Users,
  Award,
  TruckIcon
} from 'lucide-react';

const Shopping = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [favorites, setFavorites] = useState(new Set());
  const [cart, setCart] = useState(new Set());
  const [expandedCard, setExpandedCard] = useState(null);

  const categories = [
    { id: 'all', label: 'All Products', icon: ShoppingBag, count: 156 },
    { id: 'handicrafts', label: 'Handicrafts', icon: Package, count: 45 },
    { id: 'textiles', label: 'Textiles & Fabrics', icon: ShoppingBag, count: 32 },
    { id: 'jewelry', label: 'Jewelry', icon: Award, count: 28 },
    { id: 'spices', label: 'Spices & Food', icon: Package, count: 25 },
    { id: 'art', label: 'Art & Paintings', icon: Award, count: 18 },
    { id: 'home', label: 'Home Decor', icon: Package, count: 8 }
  ];

  const locations = [
    'Ranchi',
    'Jamshedpur',
    'Dhanbad',
    'Netarhat',
    'Patratu',
    'Deoghar',
    'Hazaribagh',
    'Local Markets'
  ];

  const products = [
    {
      id: 1,
      name: 'Tribal Wooden Sculpture',
      category: 'handicrafts',
      seller: 'Rajesh Tribal Arts',
      location: 'Ranchi',
      rating: 4.8,
      reviews: 234,
      price: '₹2,500',
      originalPrice: '₹3,200',
      discount: '22%',
      stock: 12,
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=400&q=80',
        'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=400&q=80',
        'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=400&q=80'
      ],
      description: 'Authentic tribal wooden sculpture handcrafted by local artisans. Made from teak wood with traditional tribal motifs.',
      features: ['Handcrafted', 'Teak Wood', 'Traditional Motifs', 'Eco-friendly', 'Unique Design'],
      materials: ['Teak Wood', 'Natural Dyes', 'Hand Tools'],
      dimensions: '12" x 8" x 6"',
      weight: '2.5 kg',
      shipping: 'Free shipping across India',
      delivery: '3-5 business days',
      returnPolicy: '7 days return policy',
      contact: '+91 98765 43210',
      verified: true,
      coordinates: { lat: 23.3441, lng: 85.3096 }
    },
    {
      id: 2,
      name: 'Traditional Santhali Saree',
      category: 'textiles',
      seller: 'Sunita Weavers',
      location: 'Jamshedpur',
      rating: 4.9,
      reviews: 189,
      price: '₹1,800',
      originalPrice: null,
      discount: null,
      stock: 8,
      image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=800&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=400&q=80',
        'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=400&q=80',
        'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=400&q=80'
      ],
      description: 'Beautiful handwoven Santhali saree with intricate tribal patterns and traditional colors. Perfect for special occasions.',
      features: ['Handwoven', 'Tribal Patterns', 'Cotton Blend', 'Traditional Colors', 'Comfortable'],
      materials: ['Cotton', 'Silk Thread', 'Natural Dyes'],
      dimensions: '5.5 meters length',
      weight: '800 grams',
      shipping: 'Free shipping on orders above ₹1000',
      delivery: '2-4 business days',
      returnPolicy: '15 days return policy',
      contact: '+91 87654 32109',
      verified: true,
      coordinates: { lat: 22.8046, lng: 86.2029 }
    },
    {
      id: 3,
      name: 'Jharkhand Spices Collection',
      category: 'spices',
      seller: 'Local Spice Co.',
      location: 'Deoghar',
      rating: 4.6,
      reviews: 156,
      price: '₹850',
      originalPrice: '₹1,200',
      discount: '29%',
      stock: 25,
      image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=800&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=400&q=80',
        'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=400&q=80',
        'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=400&q=80'
      ],
      description: 'Premium collection of locally sourced spices from Jharkhand. Includes turmeric, red chili, coriander, and traditional blends.',
      features: ['Locally Sourced', 'Premium Quality', 'Traditional Blends', 'Organic', 'Fresh'],
      materials: ['Turmeric', 'Red Chili', 'Coriander', 'Cumin', 'Cardamom'],
      dimensions: 'Assorted pack sizes',
      weight: '1 kg total',
      shipping: 'Standard shipping ₹50',
      delivery: '1-3 business days',
      returnPolicy: '5 days return policy',
      contact: '+91 76543 21098',
      verified: false,
      coordinates: { lat: 24.4833, lng: 86.7000 }
    },
    {
      id: 4,
      name: 'Tribal Silver Jewelry Set',
      category: 'jewelry',
      seller: 'Tribal Jewelers',
      location: 'Netarhat',
      rating: 4.7,
      reviews: 98,
      price: '₹4,200',
      originalPrice: '₹5,500',
      discount: '24%',
      stock: 5,
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=400&q=80',
        'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=400&q=80',
        'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=400&q=80'
      ],
      description: 'Exquisite tribal silver jewelry set including necklace, earrings, and bracelet. Handcrafted by skilled tribal artisans.',
      features: ['Handcrafted', 'Sterling Silver', 'Tribal Design', 'Antique Finish', 'Gift Box'],
      materials: ['Sterling Silver', 'Traditional Tools', 'Natural Polish'],
      dimensions: 'Necklace: 16", Earrings: 2", Bracelet: 7"',
      weight: '150 grams',
      shipping: 'Free shipping with insurance',
      delivery: '5-7 business days',
      returnPolicy: '30 days return policy',
      contact: '+91 98765 43211',
      verified: true,
      coordinates: { lat: 23.4737, lng: 84.2725 }
    },
    {
      id: 5,
      name: 'Jharkhand Tribal Painting',
      category: 'art',
      seller: 'Artisan Gallery',
      location: 'Ranchi',
      rating: 4.5,
      reviews: 67,
      price: '₹3,500',
      originalPrice: null,
      discount: null,
      stock: 3,
      image: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?auto=format&fit=crop&w=800&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1541961017774-22349e4a1262?auto=format&fit=crop&w=400&q=80',
        'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=400&q=80',
        'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=400&q=80'
      ],
      description: 'Authentic tribal painting depicting traditional Jharkhand culture and rituals. Painted using natural colors and traditional techniques.',
      features: ['Hand Painted', 'Natural Colors', 'Traditional Techniques', 'Cultural Themes', 'Framed'],
      materials: ['Canvas', 'Natural Pigments', 'Traditional Brushes'],
      dimensions: '24" x 18"',
      weight: '1.2 kg',
      shipping: 'Special handling required',
      delivery: '7-10 business days',
      returnPolicy: '14 days return policy',
      contact: '+91 87654 32110',
      verified: true,
      coordinates: { lat: 23.3441, lng: 85.3096 }
    }
  ];

  const toggleFavorite = (productId) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(productId)) {
      newFavorites.delete(productId);
    } else {
      newFavorites.add(productId);
    }
    setFavorites(newFavorites);
  };

  const toggleCart = (productId) => {
    const newCart = new Set(cart);
    if (newCart.has(productId)) {
      newCart.delete(productId);
    } else {
      newCart.add(productId);
    }
    setCart(newCart);
  };

  const toggleExpanded = (productId) => {
    setExpandedCard(expandedCard === productId ? null : productId);
  };

  const getFilteredProducts = () => {
    return products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           product.seller.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
      const matchesLocation = !selectedLocation || product.location === selectedLocation;
      return matchesSearch && matchesCategory && matchesLocation;
    });
  };

  const ProductCard = ({ product }) => (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-lg border border-white/20 overflow-hidden hover:shadow-xl transition-all duration-300"
    >
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover"
        />
        <div className="absolute top-4 left-4 flex gap-2">
          <span className="px-3 py-1 bg-white/90 text-gray-800 text-sm font-medium rounded-full">
            {product.category}
          </span>
          {product.verified && (
            <span className="px-3 py-1 bg-green-500 text-white text-sm font-medium rounded-full flex items-center gap-1">
              <Shield className="w-3 h-3" />
              Verified
            </span>
          )}
          {product.discount && (
            <span className="px-3 py-1 bg-red-500 text-white text-sm font-bold rounded-full">
              {product.discount} OFF
            </span>
          )}
        </div>
        <div className="absolute top-4 right-4 flex gap-2">
          <button
            onClick={() => toggleFavorite(product.id)}
            className={`p-2 rounded-full transition-colors ${
              favorites.has(product.id) 
                ? 'bg-red-500 text-white' 
                : 'bg-white/90 text-gray-600 hover:text-red-500'
            }`}
          >
            <Heart className={`w-5 h-5 ${favorites.has(product.id) ? 'fill-current' : ''}`} />
          </button>
          <button className="p-2 bg-white/90 rounded-full text-gray-600 hover:text-blue-500 transition-colors">
            <Share2 className="w-5 h-5" />
          </button>
        </div>
        <div className="absolute bottom-4 left-4 text-white">
          <div className="flex items-center gap-2 mb-2">
            <Star className="w-5 h-5 text-yellow-400 fill-current" />
            <span className="font-semibold">{product.rating}</span>
            <span className="text-sm opacity-90">({product.reviews} reviews)</span>
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-1">{product.name}</h3>
            <div className="flex items-center gap-2 text-gray-600 mb-2">
              <Users className="w-4 h-4" />
              <span>{product.seller}</span>
              <span className="text-sm">• {product.location}</span>
            </div>
          </div>
        </div>

        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-green-600">{product.price}</span>
            {product.originalPrice && (
              <span className="text-lg text-gray-500 line-through">{product.originalPrice}</span>
            )}
          </div>
          <div className="text-sm text-gray-500">
            {product.stock > 0 ? `${product.stock} in stock` : 'Out of stock'}
          </div>
        </div>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-1">
              <Truck className="w-4 h-4" />
              {product.delivery}
            </div>
            <div className="flex items-center gap-1">
              <Tag className="w-4 h-4" />
              {product.shipping}
            </div>
          </div>
          <button
            onClick={() => toggleExpanded(product.id)}
            className="flex items-center gap-1 text-blue-600 hover:text-blue-700 text-sm font-medium"
          >
            {expandedCard === product.id ? 'Show Less' : 'Show More'}
            {expandedCard === product.id ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
        </div>

        <div className="flex gap-2">
          <button
            onClick={() => toggleCart(product.id)}
            className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-lg transition-colors ${
              cart.has(product.id)
                ? 'bg-green-500 text-white hover:bg-green-600'
                : 'bg-orange-500 text-white hover:bg-orange-600'
            }`}
          >
            <ShoppingCartIcon className="w-4 h-4" />
            {cart.has(product.id) ? 'Added to Cart' : 'Add to Cart'}
          </button>
          <button className="flex-1 flex items-center justify-center gap-2 py-3 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
            <Phone className="w-4 h-4" />
            Contact
          </button>
          <button className="flex-1 flex items-center justify-center gap-2 py-3 px-4 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
            <Navigation className="w-4 h-4" />
            Visit
          </button>
        </div>

        {expandedCard === product.id && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="mt-6 pt-6 border-t border-gray-200"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">Features</h4>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">Materials & Details</h4>
                <div className="space-y-2 text-sm text-gray-600">
                  <div><strong>Materials:</strong> {product.materials.join(', ')}</div>
                  <div><strong>Dimensions:</strong> {product.dimensions}</div>
                  <div><strong>Weight:</strong> {product.weight}</div>
                </div>
              </div>
            </div>
            <div className="mt-6">
              <h4 className="font-semibold text-gray-800 mb-3">Shipping & Returns</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <TruckIcon className="w-4 h-4 text-blue-500" />
                  <span>{product.shipping}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-green-500" />
                  <span>{product.delivery}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-purple-500" />
                  <span>{product.returnPolicy}</span>
                </div>
              </div>
            </div>
            <div className="mt-6">
              <h4 className="font-semibold text-gray-800 mb-3">Seller Information</h4>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-800">{product.seller}</div>
                    <div className="text-sm text-gray-600">{product.location}</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-gray-500" />
                  <span className="text-sm text-gray-600">{product.contact}</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 rounded-2xl p-8 text-white"
      >
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">Shopping & Local Market 🛍️</h1>
            <p className="text-xl opacity-90">Discover authentic Jharkhand handicrafts and local products</p>
          </div>
          <div className="hidden md:block">
            <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center">
              <span className="text-4xl">🛍️</span>
            </div>
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
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search products, sellers, or categories..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
          </div>
          <select
            value={selectedLocation}
            onChange={(e) => setSelectedLocation(e.target.value)}
            className="px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
          >
            <option value="">Select Location</option>
            {locations.map((location, index) => (
              <option key={index} value={location}>{location}</option>
            ))}
          </select>
          <button className="flex items-center gap-2 px-4 py-3 bg-gray-100 hover:bg-gray-200 rounded-xl transition-colors">
            <Filter className="w-5 h-5" />
            More Filters
          </button>
        </div>
      </motion.div>

      {/* Categories */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/20"
      >
        <div className="flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                selectedCategory === category.id
                  ? 'bg-orange-500 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              <category.icon className="w-5 h-5" />
              <span className="font-medium">{category.label}</span>
              <span className="bg-white/20 text-xs px-2 py-1 rounded-full">
                {category.count}
              </span>
            </button>
          ))}
        </div>
      </motion.div>

      {/* Shopping Stats */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/20"
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="text-center p-4 bg-green-50 rounded-lg">
            <div className="text-2xl font-bold text-green-600">{products.length}</div>
            <div className="text-sm text-gray-600">Total Products</div>
          </div>
          <div className="text-center p-4 bg-blue-50 rounded-lg">
            <div className="text-2xl font-bold text-blue-600">{favorites.size}</div>
            <div className="text-sm text-gray-600">Favorites</div>
          </div>
          <div className="text-center p-4 bg-orange-50 rounded-lg">
            <div className="text-2xl font-bold text-orange-600">{cart.size}</div>
            <div className="text-sm text-gray-600">In Cart</div>
          </div>
          <div className="text-center p-4 bg-purple-50 rounded-lg">
            <div className="text-2xl font-bold text-purple-600">24</div>
            <div className="text-sm text-gray-600">Verified Sellers</div>
          </div>
        </div>
      </motion.div>

      {/* Products Grid */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-6"
      >
        {getFilteredProducts().map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 + index * 0.1 }}
          >
            <ProductCard product={product} />
          </motion.div>
        ))}
      </motion.div>

      {/* Empty State */}
      {getFilteredProducts().length === 0 && (
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="bg-white/80 backdrop-blur-lg rounded-2xl p-12 shadow-lg border border-white/20 text-center"
        >
          <ShoppingBag className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-600 mb-2">No products found</h3>
          <p className="text-gray-500">Try adjusting your search or filter criteria</p>
        </motion.div>
      )}
    </div>
  );
};

export default Shopping;

