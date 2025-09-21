import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mountain, Map, Users, Heart, Star } from 'lucide-react';

const sectionIds = ['why-jharkhand', 'features', 'testimonials', 'impact'];

const NavbarJharConnect = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [isOverHero, setIsOverHero] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Check if we're over the hero section (first 100vh)
      const heroHeight = window.innerHeight;
      setIsOverHero(window.scrollY < heroHeight * 0.8);
      
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
          font-weight: 500;
          transition: font-weight 0.2s, color 0.3s;
        }
        .nav-btn:hover,
        .nav-btn:focus {
          color: ${isOverHero ? '#e5e7eb' : '#14532d'};
        }
        .nav-btn.active {
          font-weight: 800;
        }
        /* Glassmorphism Login button */
        .nav-login-btn {
          position: relative;
          outline: none;
          overflow: hidden;
          font-weight: 700;
          border-radius: 9999px;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          padding: 0.5rem 1.5rem;
          transition: all 0.3s ease;
        }
        .nav-login-btn:hover {
          transform: scale(1.05);
          background: rgba(255, 255, 255, 0.2);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
        }
        
        .nav-login-btn:hover {
          border-color: ${isOverHero ? 'rgba(255, 255, 255, 0.6)' : 'rgba(34, 197, 94, 0.6)'};
          box-shadow: ${isOverHero ? '0 8px 25px rgba(255, 255, 255, 0.2)' : '0 8px 25px rgba(34, 197, 94, 0.3)'};
        }
      `}</style>
      <nav
        className={`fixed w-full z-50 transition-all duration-500
          ${show ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-6 pointer-events-none'}
        `}
        style={{ transitionProperty: 'opacity, transform' }}
      >
        {/* Floating Header Container */}
        <div className="mx-4 mt-4 bg-white/10 backdrop-blur-lg border border-white/20 shadow-xl rounded-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo Section */}
            <div className="flex items-center gap-2">
              <Mountain className={`h-8 w-8 transition-colors duration-300 ${isOverHero ? 'text-white' : 'text-green-700'}`} />
              <span className={`ml-2 text-2xl font-extrabold tracking-wide transition-colors duration-300 ${isOverHero ? 'text-white' : 'text-green-900'}`}>
                Jhar-Connect
              </span>
            </div>

            {/* Navigation Buttons */}
            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection('why-jharkhand')}
                className={`nav-btn ${activeSection === 'why-jharkhand' ? 'active' : ''}`}
                style={{ color: isOverHero ? '#ffffff' : '#166534' }}
              >
                <Map className="w-5 h-5 inline-block mr-1" /> Why Jharkhand?
              </button>
              <button
                onClick={() => scrollToSection('features')}
                className={`nav-btn ${activeSection === 'features' ? 'active' : ''}`}
                style={{ color: isOverHero ? '#ffffff' : '#166534' }}
              >
                <Star className="w-5 h-5 inline-block mr-1" /> Features
              </button>
              <button
                onClick={() => scrollToSection('testimonials')}
                className={`nav-btn ${activeSection === 'testimonials' ? 'active' : ''}`}
                style={{ color: isOverHero ? '#ffffff' : '#166534' }}
              >
                <Users className="w-5 h-5 inline-block mr-1" /> Testimonials
              </button>
              <button
                onClick={() => scrollToSection('impact')}
                className={`nav-btn ${activeSection === 'impact' ? 'active' : ''}`}
                style={{ color: isOverHero ? '#ffffff' : '#166534' }}
              >
                <Heart className="w-5 h-5 inline-block mr-1" /> Our Impact
              </button>

              {/* Login Button with Glassmorphism */}
              <button 
                onClick={() => navigate('/role-selection')} 
                className="nav-login-btn"
                style={{ 
                  color: isOverHero ? '#ffffff' : '#166534',
                  border: isOverHero ? '1px solid rgba(255, 255, 255, 0.3)' : '1px solid rgba(34, 197, 94, 0.3)',
                  boxShadow: isOverHero ? '0 4px 15px rgba(255, 255, 255, 0.1)' : '0 4px 15px rgba(34, 197, 94, 0.1)'
                }}
              >
                Login
              </button>
            </div>
          </div>
        </div>
        </div>
      </nav>
    </>
  );
};

export default NavbarJharConnect;
