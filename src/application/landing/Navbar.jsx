import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { Stethoscope } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate for navigation

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Define handleLogin function
  const handleLogin = () => {
    navigate('/auth'); // Navigate to /auth
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Stethoscope className="h-8 w-8 text-emerald-600" />
            <span className="ml-2 text-xl font-bold text-emerald-800">FarmVet Connect</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('work')}
              className="text-gray-700 hover:text-emerald-600 transition-colors"
            >
              Our Work
            </button>
            <button
              onClick={() => scrollToSection('vision')}
              className="text-gray-700 hover:text-emerald-600 transition-colors"
            >
              Vision
            </button>
            <button
              onClick={() => scrollToSection('mission')}
              className="text-gray-700 hover:text-emerald-600 transition-colors"
            >
              Mission
            </button>
            <button
              onClick={() => scrollToSection('footer')}
              className="text-gray-700 hover:text-emerald-600 transition-colors"
            >
              Contact
            </button>
            <button 
              className="bg-emerald-600 text-white px-6 py-2 rounded-full hover:bg-emerald-700 transition-colors"
              onClick={handleLogin} // Call handleLogin on click
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
