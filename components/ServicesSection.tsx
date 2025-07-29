'use client';

import React, { useState } from 'react';
import { Network, Globe, Smartphone, Cloud, Server, Users, ArrowRight, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const services = [
  { icon: Network, title: 'Network Penetration Testing', description: 'Comprehensive assessment of your network infrastructure to identify vulnerabilities in firewalls, routers, and network devices.', features: ['External & Internal Testing', 'Wireless Security Audits', 'Firewall Configuration Review'], href: '/services/network-testing' },
  { icon: Globe, title: 'Web Application Testing', description: 'In-depth security analysis of web applications to uncover OWASP Top 10 vulnerabilities and custom security flaws.', features: ['SQL Injection & XSS Testing', 'Authentication Flaw Detection', 'Business Logic Errors'], href: '/services/web-application-testing' },
  { icon: Smartphone, title: 'Mobile App Security', description: 'Thorough security evaluation of iOS and Android applications to protect your mobile ecosystem and user data.', features: ['Static & Dynamic Analysis', 'API Endpoint Security', 'Insecure Data Storage'], href: '/services/mobile-security' },
  { icon: Cloud, title: 'Cloud Security Assessment', description: 'Evaluate cloud infrastructure security across AWS, Azure, and Google Cloud to prevent misconfigurations.', features: ['IAM & Role Review', 'S3 Bucket Security', 'VPC Configuration Audit'], href: '/services/cloud-assessment' },
  { icon: Server, title: 'Infrastructure Testing', description: 'Complete security audit of servers, databases, and backend systems to ensure robust protection.', features: ['Server Hardening Review', 'Database Security', 'Patch Management Analysis'], href: '/services/infrastructure-testing' },
  { icon: Users, title: 'Social Engineering', description: 'Test your organization\'s human element through phishing simulations and social engineering assessments.', features: ['Custom Phishing Campaigns', 'Vishing & Smishing Tests', 'Security Awareness Training'], href: '/services/social-engineering' },
];

export default function ServicesSection() {
  const [activeServiceIndex, setActiveServiceIndex] = useState(0);
  const activeService = services[activeServiceIndex];

  return (
    <section className="py-20 sm:py-24 bg-slate-900 bg-[url('/patterns/grid.svg')] bg-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Our Arsenal of Security Services
          </h2>
          <p className="mt-4 text-lg text-slate-400 max-w-3xl mx-auto">
            Our elite team of certified ethical hackers provides end-to-end penetration testing services to identify and eliminate security vulnerabilities.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Left Column: Service Navigation */}
          <div className="lg:col-span-1 flex flex-col space-y-2">
            {services.map((service, index) => (
              <button
                key={service.title}
                onClick={() => setActiveServiceIndex(index)}
                className={`flex items-center p-4 rounded-lg transition-all duration-200 text-left w-full border ${
                  activeServiceIndex === index
                    ? 'bg-slate-700/50 border-blue-500 shadow-lg'
                    : 'bg-transparent border-transparent hover:bg-slate-800/50'
                }`}
              >
                <service.icon className={`h-6 w-6 mr-4 flex-shrink-0 transition-colors ${
                    activeServiceIndex === index ? 'text-blue-400' : 'text-slate-400 group-hover:text-white'
                }`} />
                <span className={`font-semibold transition-colors ${
                    activeServiceIndex === index ? 'text-white' : 'text-slate-300 group-hover:text-white'
                }`}>{service.title}</span>
              </button>
            ))}
          </div>

          {/* Right Column: Service Details */}
          <div className="lg:col-span-2">
            <div 
              key={activeServiceIndex} // This key is crucial for re-triggering the animation
              className="bg-slate-800/50 backdrop-blur-md border border-slate-700 rounded-2xl p-8 animate-fade-in"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-blue-600/20 rounded-lg mr-4">
                  <activeService.icon className="h-8 w-8 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">{activeService.title}</h3>
              </div>
              
              <p className="text-slate-300 leading-relaxed mb-8">{activeService.description}</p>
              
              <div className="space-y-3 mb-8">
                {activeService.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center text-slate-300">
                    <CheckCircle className="h-5 w-5 text-blue-400 mr-3 flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              
              <Button asChild className="bg-blue-600 hover:bg-blue-500 text-white font-semibold group">
                <Link href={activeService.href}>
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
       <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out forwards;
        }
      `}</style>
    </section>
  );
}
