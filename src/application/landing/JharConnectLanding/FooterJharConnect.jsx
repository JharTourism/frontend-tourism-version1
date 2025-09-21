import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, Youtube } from 'lucide-react';

const FooterJharConnect = () => (
  <footer className="bg-gradient-to-br from-gray-900 via-green-900 to-gray-800 text-white py-16 relative overflow-hidden">
    {/* Background Elements */}
    <div className="absolute inset-0 opacity-10">
      <div className="absolute top-20 left-10 w-80 h-80 bg-green-400 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-400 rounded-full blur-3xl"></div>
    </div>
    
    <style>{`
      .footer-card {
        background: rgba(255, 255, 255, 0.05);
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.1);
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      }
      
      .footer-card:hover {
        background: rgba(255, 255, 255, 0.1);
        border-color: rgba(34, 197, 94, 0.3);
        transform: translateY(-2px);
      }
      
      .social-icon {
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      }
      
      .social-icon:hover {
        transform: scale(1.2) translateY(-2px);
        color: #22c55e;
      }
      
      .footer-link {
        transition: all 0.3s ease;
      }
      
      .footer-link:hover {
        color: #22c55e;
        transform: translateX(4px);
      }
      
      .newsletter-input {
        background: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.2);
        transition: all 0.3s ease;
      }
      
      .newsletter-input:focus {
        background: rgba(255, 255, 255, 0.15);
        border-color: rgba(34, 197, 94, 0.5);
        box-shadow: 0 0 20px rgba(34, 197, 94, 0.2);
      }
      
      .subscribe-btn {
        background: rgba(34, 197, 94, 0.2);
        backdrop-filter: blur(10px);
        border: 1px solid rgba(34, 197, 94, 0.3);
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      }
      
      .subscribe-btn:hover {
        background: rgba(34, 197, 94, 0.3);
        border-color: rgba(34, 197, 94, 0.5);
        transform: translateY(-2px);
        box-shadow: 0 8px 25px rgba(34, 197, 94, 0.3);
      }
    `}</style>
    
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        <div className="footer-card rounded-2xl p-6">
          <h3 className="text-xl font-bold mb-4 text-white">About Us</h3>
          <p className="text-gray-300 mb-6 leading-relaxed">
            Jhar-Connect is dedicated to promoting sustainable tourism and empowering local communities in Jharkhand.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="social-icon text-gray-400 hover:text-green-400">
              <Facebook className="w-6 h-6" />
            </a>
            <a href="#" className="social-icon text-gray-400 hover:text-green-400">
              <Twitter className="w-6 h-6" />
            </a>
            <a href="#" className="social-icon text-gray-400 hover:text-green-400">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="#" className="social-icon text-gray-400 hover:text-green-400">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="#" className="social-icon text-gray-400 hover:text-green-400">
              <Youtube className="w-6 h-6" />
            </a>
          </div>
        </div>
        
        <div className="footer-card rounded-2xl p-6">
          <h3 className="text-xl font-bold mb-4 text-white">Quick Links</h3>
          <ul className="space-y-3">
            <li><a href="#why-jharkhand" className="footer-link text-gray-300 hover:text-green-400">Why Jharkhand?</a></li>
            <li><a href="#features" className="footer-link text-gray-300 hover:text-green-400">Features</a></li>
            <li><a href="#testimonials" className="footer-link text-gray-300 hover:text-green-400">Testimonials</a></li>
            <li><a href="#impact" className="footer-link text-gray-300 hover:text-green-400">Our Impact</a></li>
          </ul>
        </div>
        
        <div className="footer-card rounded-2xl p-6">
          <h3 className="text-xl font-bold mb-4 text-white">Resources</h3>
          <ul className="space-y-3">
            <li><a href="#" className="footer-link text-gray-300 hover:text-green-400">Privacy Policy</a></li>
            <li><a href="#" className="footer-link text-gray-300 hover:text-green-400">Terms of Service</a></li>
            <li><a href="#" className="footer-link text-gray-300 hover:text-green-400">Contact Us</a></li>
          </ul>
        </div>
        
        <div className="footer-card rounded-2xl p-6">
          <h3 className="text-xl font-bold mb-4 text-white">Newsletter</h3>
          <form className="flex flex-col gap-3">
            <input 
              type="email" 
              placeholder="Your email" 
              className="newsletter-input px-4 py-3 rounded-full text-white placeholder-gray-400 focus:outline-none" 
            />
            <button 
              type="submit" 
              className="subscribe-btn text-white font-semibold rounded-full px-6 py-3 hover:scale-105 transition-transform"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      
      <div className="border-t border-gray-700 pt-8 text-center">
        <p className="text-gray-400 font-medium">&copy; 2025 Jhar-Connect. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default FooterJharConnect;
