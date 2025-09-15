import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, Youtube } from 'lucide-react';

const FooterJharConnect = () => (
  <footer className="bg-[#18392B] text-white py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-4 gap-8 mb-8">
        <div>
          <h3 className="text-xl font-bold mb-4">About Us</h3>
          <p className="text-gray-300 mb-4">
            Jhar-Connect is dedicated to promoting sustainable tourism and empowering local communities in Jharkhand.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-green-400"><Facebook className="w-6 h-6" /></a>
            <a href="#" className="hover:text-green-400"><Twitter className="w-6 h-6" /></a>
            <a href="#" className="hover:text-green-400"><Linkedin className="w-6 h-6" /></a>
            <a href="#" className="hover:text-green-400"><Instagram className="w-6 h-6" /></a>
            <a href="#" className="hover:text-green-400"><Youtube className="w-6 h-6" /></a>
          </div>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#why-jharkhand" className="hover:text-green-400">Why Jharkhand?</a></li>
            <li><a href="#features" className="hover:text-green-400">Features</a></li>
            <li><a href="#testimonials" className="hover:text-green-400">Testimonials</a></li>
            <li><a href="#impact" className="hover:text-green-400">Our Impact</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Resources</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-green-400">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-green-400">Terms of Service</a></li>
            <li><a href="#" className="hover:text-green-400">Contact Us</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Newsletter</h3>
          <form className="flex flex-col gap-2">
            <input type="email" placeholder="Your email" className="px-4 py-2 rounded-full text-black focus:outline-none" />
            <button type="submit" className="bg-gradient-to-r from-green-600 to-yellow-500 text-white font-bold rounded-full px-6 py-2 mt-2 hover:scale-105 transition-transform">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="border-t border-green-900 pt-6 text-center text-gray-400">
        <p>&copy; 2025 Jhar-Connect. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default FooterJharConnect;
