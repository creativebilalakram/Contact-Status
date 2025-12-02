import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Button from './Button';
import Mascot from './Mascot';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Courses', path: '/courses' },
    { name: 'Group Training', path: '/groups' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-lg shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo Area */}
          <Link to="/" className="flex items-center gap-2 group">
             <div className="relative">
                <Mascot className="w-10 h-10 transition-transform group-hover:scale-110" emotion="happy" />
             </div>
             <div className={`flex flex-col ${scrolled ? 'opacity-100' : 'opacity-100'}`}>
               <span className="text-xl font-extrabold text-brand-navy tracking-tight leading-none">LifeGuard</span>
               <span className="text-xs font-bold text-brand-teal tracking-widest uppercase">Academy</span>
             </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name}
                to={link.path} 
                className={`text-sm font-semibold tracking-wide hover:text-brand-teal transition-colors ${
                  isActive(link.path) ? 'text-brand-teal' : 'text-brand-navy/80'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <Link to="/courses" className="hidden md:block">
              <Button variant="primary" size="sm">Book Now</Button>
            </Link>
            <button 
              className="md:hidden text-brand-navy"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-t border-slate-100 shadow-xl p-6 md:hidden flex flex-col gap-4 animate-in slide-in-from-top-2">
           {navLinks.map((link) => (
              <Link 
                key={link.name}
                to={link.path} 
                className="text-lg font-bold text-brand-navy py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/courses" onClick={() => setMobileMenuOpen(false)}>
              <Button fullWidth>Book a Course</Button>
            </Link>
        </div>
      )}
    </header>
  );
};

export default Header;