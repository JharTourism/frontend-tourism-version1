import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  BarChart3, 
  TrendingUp, 
  TrendingDown,
  Users,
  DollarSign,
  MapPin,
  Calendar,
  Download,
  Filter,
  Eye,
  PieChart,
  LineChart
} from 'lucide-react';

const Reports = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('30d');
  const [selectedMetric, setSelectedMetric] = useState('revenue');

  // Mock data for charts and analytics
  const revenueData = [
    { month: 'Jan', revenue: 2400000, bookings: 156, users: 89 },
    { month: 'Feb', revenue: 2800000, bookings: 189, users: 124 },
    { month: 'Mar', revenue: 3200000, bookings: 234, users: 167 },
    { month: 'Apr', revenue: 2900000, bookings: 198, users: 145 },
    { month: 'May', revenue: 3600000, bookings: 267, users: 189 },
    { month: 'Jun', revenue: 3800000, bookings: 298, users: 234 }
  ];

  const destinationStats = [
    { name: 'Netarhat', bookings: 234, revenue: 1200000, growth: 15.2 },
    { name: 'Patratu Lake', bookings: 189, revenue: 980000, growth: 8.7 },
    { name: 'Betla National Park', bookings: 156, revenue: 850000, growth: 22.1 },
    { name: 'Hundru Falls', bookings: 142, revenue: 720000, growth: -3.2 },
    { name: 'Deoghar Temple', bookings: 134, revenue: 680000, growth: 5.4 }
  ];

  const userGrowthData = [
    { period: 'Week 1', tourists: 45, guides: 12, total: 57 },
    { period: 'Week 2', tourists: 67, guides: 18, total: 85 },
    { period: 'Week 3', tourists: 89, guides: 23, total: 112 },
    { period: 'Week 4', tourists: 124, guides: 28, total: 152 }
  ];

  const categoryData = [
    { name: 'Wildlife Tours', value: 35, color: 'bg-green-500', bookings: 234 },
    { name: 'Cultural Experiences', value: 28, color: 'bg-blue-500', bookings: 189 },
    { name: 'Adventure Sports', value: 20, color: 'bg-purple-500', bookings: 156 },
    { name: 'Religious Tours', value: 17, color: 'bg-orange-500', bookings: 142 }
  ];

  const keyMetrics = [
    {
      title: 'Total Revenue',
      value: '₹2.4M',
      change: '+15.3%',
      changeType: 'positive',
      icon: DollarSign,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Active Users',
      value: '2,847',
      change: '+12.5%',
      changeType: 'positive',
      icon: Users,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Total Bookings',
      value: '1,234',
      change: '+8.7%',
      changeType: 'positive',
      icon: MapPin,
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

  const periodOptions = [
    { value: '7d', label: 'Last 7 days' },
    { value: '30d', label: 'Last 30 days' },
    { value: '90d', label: 'Last 90 days' },
    { value: '1y', label: 'Last year' }
  ];

  const metricOptions = [
    { value: 'revenue', label: 'Revenue', icon: DollarSign },
    { value: 'bookings', label: 'Bookings', icon: MapPin },
    { value: 'users', label: 'Users', icon: Users }
  ];

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
            <h1 className="text-2xl font-bold mb-2">Reports & Analytics</h1>
            <p className="opacity-90">Platform performance insights and detailed analytics</p>
          </div>
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-colors">
              <Download className="w-5 h-5" />
              Export Report
            </button>
            <button className="flex items-center gap-2 bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-colors">
              <Filter className="w-5 h-5" />
              Filters
            </button>
          </div>
        </div>
      </motion.div>

      {/* Controls */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/20"
      >
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-2">Time Period</label>
            <select
              value={selectedPeriod}
              onChange={(e) => setSelectedPeriod(e.target.value)}
              className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            >
              {periodOptions.map(option => (
                <option key={option.value} value={option.value}>{option.label}</option>
              ))}
            </select>
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-2">Primary Metric</label>
            <select
              value={selectedMetric}
              onChange={(e) => setSelectedMetric(e.target.value)}
              className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            >
              {metricOptions.map(option => (
                <option key={option.value} value={option.value}>{option.label}</option>
              ))}
            </select>
          </div>
          <div className="flex items-end">
            <button className="px-6 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors">
              Generate Report
            </button>
          </div>
        </div>
      </motion.div>

      {/* Key Metrics */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {keyMetrics.map((metric, index) => (
          <motion.div
            key={metric.title}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 + index * 0.1 }}
            className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/20"
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`w-12 h-12 bg-gradient-to-r ${metric.color} rounded-xl flex items-center justify-center`}>
                <metric.icon className="w-6 h-6 text-white" />
              </div>
              <span className={`text-sm font-medium px-2 py-1 rounded-full ${
                metric.changeType === 'positive' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'
              }`}>
                {metric.change}
              </span>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-1">{metric.value}</h3>
            <p className="text-gray-600">{metric.title}</p>
          </motion.div>
        ))}
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Revenue Chart */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/20"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-800">Revenue Trend</h2>
            <div className="flex items-center gap-2">
              <LineChart className="w-5 h-5 text-purple-600" />
              <span className="text-sm text-gray-600">Last 6 months</span>
            </div>
          </div>
          <div className="h-64 flex items-end justify-between gap-2">
            {revenueData.map((data, index) => (
              <div key={data.month} className="flex flex-col items-center gap-2 flex-1">
                <div
                  className="w-full bg-gradient-to-t from-purple-500 to-purple-300 rounded-t-lg transition-all duration-500 hover:from-purple-600 hover:to-purple-400"
                  style={{ height: `${(data.revenue / 4000000) * 200}px` }}
                ></div>
                <div className="text-xs text-gray-600">{data.month}</div>
                <div className="text-xs font-medium text-gray-800">
                  ₹{(data.revenue / 100000).toFixed(1)}L
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Category Distribution */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/20"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-800">Tour Categories</h2>
            <div className="flex items-center gap-2">
              <PieChart className="w-5 h-5 text-blue-600" />
              <span className="text-sm text-gray-600">Distribution</span>
            </div>
          </div>
          <div className="space-y-4">
            {categoryData.map((category, index) => (
              <div key={category.name} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-4 h-4 ${category.color} rounded-full`}></div>
                  <span className="text-gray-800 font-medium">{category.name}</span>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-gray-800">{category.value}%</div>
                  <div className="text-sm text-gray-600">{category.bookings} bookings</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Top Destinations */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/20"
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-800">Top Performing Destinations</h2>
          <div className="flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-green-600" />
            <span className="text-sm text-gray-600">Performance metrics</span>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Destination</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Bookings</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Revenue</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Growth</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody>
              {destinationStats.map((destination, index) => (
                <motion.tr
                  key={destination.name}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
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
                  <td className="py-4 px-4 text-gray-600">₹{(destination.revenue / 100000).toFixed(1)}L</td>
                  <td className="py-4 px-4">
                    <div className={`flex items-center gap-1 ${
                      destination.growth >= 0 ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {destination.growth >= 0 ? (
                        <TrendingUp className="w-4 h-4" />
                      ) : (
                        <TrendingDown className="w-4 h-4" />
                      )}
                      <span className="font-medium">{Math.abs(destination.growth)}%</span>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
                      <Eye className="w-4 h-4" />
                    </button>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>

      {/* User Growth Chart */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/20"
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-800">User Growth</h2>
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 text-blue-600" />
            <span className="text-sm text-gray-600">Monthly growth</span>
          </div>
        </div>
        <div className="h-64 flex items-end justify-between gap-4">
          {userGrowthData.map((data, index) => (
            <div key={data.period} className="flex flex-col items-center gap-2 flex-1">
              <div className="flex flex-col gap-1 w-full">
                <div
                  className="bg-gradient-to-t from-blue-500 to-blue-300 rounded-t-lg transition-all duration-500"
                  style={{ height: `${(data.tourists / 150) * 150}px` }}
                  title={`Tourists: ${data.tourists}`}
                ></div>
                <div
                  className="bg-gradient-to-t from-green-500 to-green-300 rounded-b-lg transition-all duration-500"
                  style={{ height: `${(data.guides / 50) * 100}px` }}
                  title={`Guides: ${data.guides}`}
                ></div>
              </div>
              <div className="text-xs text-gray-600 text-center">
                <div>{data.period}</div>
                <div className="font-medium">{data.total}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center gap-6 mt-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            <span className="text-sm text-gray-600">Tourists</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="text-sm text-gray-600">Guides</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Reports;

