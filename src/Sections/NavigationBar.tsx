import React from 'react';
import { Menu, X } from 'lucide-react';
import Logo from '@/assets/ClinicLogo.png';
import { motion } from 'framer-motion';

const NavigationBar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const phoneNumber = '9699361189'; // Replace with the actual phone number

  const mobileMenuVariants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    },
    closed: {
      y: "-100vh",
      opacity: 0,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    }
  };

  return (
    <nav className="absolute top-0 left-0 w-full bg-transparent px-4 py-3 z-50 shadow-bottom shadow-sm"> 
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={Logo} alt="Logo" className="w-16 h-16 object-contain" />
          <span className="text-xl font-bold text-slate-700">MediCare</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center font-medium flex-1">
          {/* Centered links */}
          <div className="flex-1 flex justify-center space-x-6">
            <a href="#services" className="px-3 py-2 rounded text-slate-600 hover:bg-slate-100 transition-colors">
              Services
            </a>
            <a href="#about" className="px-3 py-2 rounded text-slate-600 hover:bg-slate-100 transition-colors">
              About
            </a>
            <a href="#reviews" className="px-3 py-2 rounded text-slate-600 hover:bg-slate-100 transition-colors">
              Reviews
            </a>
            <a href="#contact" className="px-3 py-2 rounded text-slate-600 hover:bg-slate-100 transition-colors">
              Contact
            </a>
          </div>
          {/* Remaining links + Book Now */}
          <div className="flex items-center space-x-4">
            <a href={`tel:${phoneNumber}`}>
              <button className="px-4 py-2 rounded  bg-slate-900 hover:bg-slate-800 text-white transition-colors">
                Call Now
              </button>
            </a>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded transition-colors text-slate-600 hover:bg-slate-200 bg-transparent"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Mobile Menu */}
        <motion.div
          className="absolute top-0 left-0 w-full bg-white shadow-md md:hidden z-50"
          variants={mobileMenuVariants}
          animate={isMenuOpen ? "open" : "closed"}
          style={{ position: "fixed" }}
        >
          <div className="flex flex-col p-4">
            <div className="flex justify-end">
              <button
                className="p-2 rounded transition-colors text-slate-600 hover:bg-slate-200 bg-transparent"
                onClick={() => setIsMenuOpen(false)}
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <nav className="flex flex-col space-y-2 mt-2">
              <a href="#services" className="py-2 rounded text-slate-600 hover:bg-slate-100 transition-colors block" onClick={() => setIsMenuOpen(false)}>
                Services
              </a>
              <a href="#about" className="py-2 rounded text-slate-600 hover:bg-slate-100 transition-colors block" onClick={() => setIsMenuOpen(false)}>
                About
              </a>
              <a href="#reviews" className="py-2 rounded text-slate-600 hover:bg-slate-100 transition-colors block" onClick={() => setIsMenuOpen(false)}>
                Reviews
              </a>
              <a href="#contact" className="py-2 rounded text-slate-600 hover:bg-slate-100 transition-colors block" onClick={() => setIsMenuOpen(false)}>
                Contact
              </a>
              <a href={`tel:${phoneNumber}`} className="py-2 rounded bg-slate-700 hover:bg-slate-800 text-white transition-colors block text-center" onClick={() => setIsMenuOpen(false)}>
                Call Now
              </a>
            </nav>
          </div>
        </motion.div>
      </div>
    </nav>
  );
};

export default NavigationBar;