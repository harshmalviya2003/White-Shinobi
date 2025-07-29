'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Shield, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button'; // Assuming you have a Button component

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Set scrolled state if user scrolls down more than 10px
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-slate-900/95 backdrop-blur-lg border-b border-slate-800 shadow-md' 
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="p-2 bg-blue-600 rounded-lg group-hover:bg-blue-500 transition-colors duration-300 transform group-hover:scale-110">
              <Shield className="h-6 w-6 text-white" />
            </div>
            <span className="text-white text-xl font-bold tracking-wider">White Shinobi</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-slate-300 hover:text-white transition-colors duration-200 font-medium">
                {link.label}
              </Link>
            ))}
            <Button asChild className="bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg px-5 py-2.5">
               <Link href="/get-quote">Get Quote</Link>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-200 hover:text-white transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isMenuOpen && (
        <div className="md:hidden bg-slate-900/95 backdrop-blur-lg absolute top-full left-0 w-full animate-slide-down">
          <nav className="flex flex-col items-center space-y-6 py-8">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-slate-200 hover:text-white text-lg font-semibold transition-colors duration-200" onClick={() => setIsMenuOpen(false)}>
                {link.label}
              </Link>
            ))}
             <Button asChild className="bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg px-8 py-3 w-4/5 text-base">
               <Link href="/get-quote" onClick={() => setIsMenuOpen(false)}>Get Quote</Link>
            </Button>
          </nav>
        </div>
      )}
      <style jsx>{`
        @keyframes slide-down {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slide-down {
          animation: slide-down 0.3s ease-out forwards;
        }
      `}</style>
    </header>
  );
}
