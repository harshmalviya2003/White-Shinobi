'use client';

import Link from 'next/link';
import { Shield, Twitter, Linkedin, Github, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { motion } from 'framer-motion';

const servicesLinks = [
  { href: '/services/network-testing', label: 'Network Testing' },
  { href: '/services/web-app-security', label: 'Web App Security' },
  { href: '/services/mobile-security', label: 'Mobile Security' },
  { href: '/services/cloud-assessment', label: 'Cloud Assessment' },
  { href: '/services/social-engineering', label: 'Social Engineering' },
];

const companyLinks = [
  { href: '/about', label: 'About Us' },
  { href: '/case-studies', label: 'Case Studies' },
  { href: '/certifications', label: 'Our Certifications' },
  { href: '/contact', label: 'Contact Us' },
];

const legalLinks = [
    { href: '/privacy', label: 'Privacy Policy' },
    { href: '/terms', label: 'Terms of Service' },
];

const socialLinks = [
  { href: '#', icon: Twitter, name: 'Twitter' },
  { href: '#', icon: Linkedin, name: 'LinkedIn' },
  { href: '#', icon: Github, name: 'GitHub' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-gray-950 border-t border-gray-800 text-gray-300">
      {/* Aurora Background Effect */}
      <div aria-hidden="true" className="absolute inset-0 z-0">
        <div className="absolute -top-1/4 -left-1/4 h-[40rem] w-[40rem] rounded-full bg-[radial-gradient(ellipse_at_center,_rgba(29,78,216,0.15),_transparent_70%)] blur-2xl" />
        <div className="absolute -bottom-1/4 -right-1/4 h-[40rem] w-[40rem] rounded-full bg-[radial-gradient(ellipse_at_center,_rgba(56,189,248,0.15),_transparent_70%)] blur-2xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Newsletter Section */}
        <div className="py-16 border-b border-gray-800/60">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
          >
            <div>
              <h2 className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                Stay Ahead of Threats
              </h2>
              <p className="mt-3 text-gray-400 max-w-lg">
                Subscribe to our newsletter for the latest cybersecurity insights, vulnerability reports, and expert analysis.
              </p>
            </div>
            <form className="flex flex-col sm:flex-row gap-4 w-full max-w-md ml-auto">
              <Input 
                type="email" 
                placeholder="your.email@company.com" 
                className="flex-grow bg-gray-800/70 border-gray-700 text-white placeholder:text-gray-500 focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-950 focus:ring-blue-500"
              />
              <Button type="submit" className="bg-blue-600 hover:bg-blue-500 text-white font-semibold group shrink-0">
                Subscribe
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </form>
          </motion.div>
        </div>

        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="col-span-2">
            <Link href="/" className="flex items-center space-x-3 mb-4">
              <div className="p-2 bg-blue-600 rounded-lg">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <span className="text-white text-xl font-bold">White Shinobi</span>
            </Link>
            <p className="text-gray-400 text-sm mb-6 max-w-xs">
              Elite cybersecurity professionals delivering world-class penetration testing services.
            </p>
            <div className="flex space-x-2">
              {socialLinks.map((social) => (
                <a 
                  key={social.name} 
                  href={social.href} 
                  aria-label={`Visit our ${social.name}`}
                  className="w-9 h-9 flex items-center justify-center bg-gray-800 rounded-full text-gray-400 hover:bg-blue-600 hover:text-white transition-all duration-300"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
          
          {/* Link Columns */}
          <div className="col-span-1">
            <h3 className="font-semibold mb-4 text-gray-200">Services</h3>
            <ul className="space-y-3">
              {servicesLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-blue-400 transition-all duration-200 hover:pl-1">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="font-semibold mb-4 text-gray-200">Company</h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-blue-400 transition-all duration-200 hover:pl-1">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="font-semibold mb-4 text-gray-200">Legal</h3>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-blue-400 transition-all duration-200 hover:pl-1">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="py-6 border-t border-gray-800/60 text-center">
          <p className="text-gray-500 text-xs">
            © {currentYear} White Shinobi Security. All rights reserved. ISO 27001 Certified.
          </p>
        </div>
      </div>
    </footer>
  );
}
