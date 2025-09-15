import React from 'react';

const LocalImpact = () => (
  <section className="py-20 bg-gradient-to-br from-green-50 to-yellow-50">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12">
      <div className="flex-1">
        <h2 className="text-4xl font-bold text-green-900 mb-6">
          Sustainable Tourism, Empowering Jharkhand
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          Jhar-Connect directly benefits local artisans, guides, and homestay owners by connecting them with travelers and ensuring fair trade. Every journey you take helps uplift communities, preserve traditions, and foster sustainable growth.
        </p>
        <div className="flex items-center gap-4 mb-4">
          <span className="inline-block bg-green-200 text-green-900 font-bold px-4 py-2 rounded-full text-lg">+32% </span>
          <span className="text-gray-700">increase in local income (2025)</span>
        </div>
      </div>
      <div className="flex-1 flex flex-col items-center">
        <img
          src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80"
          alt="Local artisan in Jharkhand"
          className="rounded-3xl shadow-lg w-full max-w-xs object-cover mb-4"
        />
        <span className="text-sm text-gray-500">A local artisan sharing her craft with visitors</span>
      </div>
    </div>
  </section>
);

export default LocalImpact;
