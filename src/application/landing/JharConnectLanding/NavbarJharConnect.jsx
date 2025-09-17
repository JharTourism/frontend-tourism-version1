import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mountain, Map, Users, Heart, Star } from 'lucide-react';

const sectionIds = ['why-jharkhand', 'features', 'testimonials', 'impact'];

const NavbarJharConnect = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      let minDiff = Infinity;
      let active = '';
      for (let id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          const diff = Math.abs(rect.top - 120);
          if (rect.top <= 140 && diff < minDiff) {
            minDiff = diff;
            active = id;
          }
        }
      }
      setActiveSection(active);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => setActiveSection(id), 400);
    }
  };

  const [show, setShow] = useState(false);
  useEffect(() => {
    setShow(isScrolled);
  }, [isScrolled]);

  return (
    <>
      <style>{`
        .nav-btn {
          background: none;
          border: none;
          outline: none;
          color: #166534;
          font-weight: 500;
          transition: font-weight 0.2s, color 0.2s;
        }
        .nav-btn:hover,
        .nav-btn:focus {
          color: #14532d;
        }
        .nav-btn.active {
          font-weight: 800;
          color: #166534;
        }
        /* Login button keeps gradient */
        .nav-login-btn {
          position: relative;
          border: none;
          outline: none;
          overflow: hidden;
          color: #166534;
          font-weight: 700;
          border-radius: 9999px;
          background: linear-gradient(to right, #22c55e, #fde047);
          padding: 0.5rem 1.5rem;
          transition: transform 0.2s ease;
        }
        .nav-login-btn:hover {
          transform: scale(1.05);
        }
      `}</style>
      <nav
        className={`fixed w-full z-50 bg-white/90 backdrop-blur-md shadow-lg transition-all duration-500
          ${show ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-6 pointer-events-none'}
        `}
        style={{ transitionProperty: 'opacity, transform' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo Section */}
            <div className="flex items-center gap-2">
              <Mountain className="h-8 w-8 text-green-700" />
              <span className="ml-2 text-2xl font-extrabold text-green-900 tracking-wide">
                Jhar-Connect
              </span>
            </div>

            {/* Navigation Buttons */}
            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection('why-jharkhand')}
                className={`nav-btn ${activeSection === 'why-jharkhand' ? 'active' : ''}`}
              >
                <Map className="w-5 h-5 inline-block mr-1" /> Why Jharkhand?
              </button>
              <button
                onClick={() => scrollToSection('features')}
                className={`nav-btn ${activeSection === 'features' ? 'active' : ''}`}
              >
                <Star className="w-5 h-5 inline-block mr-1" /> Features
              </button>
              <button
                onClick={() => scrollToSection('testimonials')}
                className={`nav-btn ${activeSection === 'testimonials' ? 'active' : ''}`}
              >
                <Users className="w-5 h-5 inline-block mr-1" /> Testimonials
              </button>
              <button
                onClick={() => scrollToSection('impact')}
                className={`nav-btn ${activeSection === 'impact' ? 'active' : ''}`}
              >
                <Heart className="w-5 h-5 inline-block mr-1" /> Our Impact
              </button>

              {/* Login Button with Gradient */}
              <button onClick={() => navigate('/role-selection')} className="nav-login-btn">
                Login
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavbarJharConnect;
