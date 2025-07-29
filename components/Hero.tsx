'use client';

import { Shield, ArrowRight, TrendingUp, Users, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect } from 'react';


const stats = [
    { value: "500+", label: "Security Assessments", icon: Shield },
    { value: "99.8%", label: "Threat Detection Rate", icon: TrendingUp },
    { value: "24/7", label: "Security Monitoring", icon: Users },
];


export default function Hero() {
    
  // Animation variants for the main content
  const heroVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };


  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 15 }
    },
  };
  
  // Animation variants for the stats section
  const statsVariants = {
      hidden: { opacity: 0 },
      visible: {
          opacity: 1,
          transition: {
              staggerChildren: 0.2,
              delayChildren: 0.8, // Delay stats animation until after main content
          }
      }
  };


  return (
    <section className="relative h-screen flex items-center justify-center text-white overflow-hidden">
      
      {/* Background Video Layer */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          src="/hero.mp4" 
          poster="/images/hero-poster.jpg"
        />
        {/* Dark Overlay for Readability */}
        <div className="absolute inset-0 bg-black/70"></div>
      </div>
      
      {/* Aurora Effect Layer */}
      <div aria-hidden="true" className="absolute inset-0 z-10 mix-blend-soft-light">
          <div className="absolute -top-1/3 -left-1/3 h-[50rem] w-[50rem] rounded-full bg-[radial-gradient(ellipse_at_center,_rgba(29,78,216,0.25)_0%,_rgba(29,78,216,0)_70%)] blur-3xl" />
          <div className="absolute -bottom-1/3 -right-1/3 h-[50rem] w-[50rem] rounded-full bg-[radial-gradient(ellipse_at_center,_rgba(56,189,248,0.25)_0%,_rgba(56,189,248,0)_70%)] blur-3xl" />
      </div>


      <div className="relative z-20 w-full h-full flex flex-col justify-center items-center">
          {/* Main Content */}
          <motion.div 
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
            variants={heroVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div  className="mb-6 flex justify-center">
                <div className="p-4 bg-white/10 rounded-full border border-white/20 backdrop-blur-sm">
                    <Shield className="h-12 w-12 text-blue-400" />
                </div>
            </motion.div>
            
            <motion.h1 
                className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6"
            >
              Elite Penetration{' '}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Testing
              </span>
            </motion.h1>
            
            <motion.p 
                className="text-lg text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed"
            >
              Uncover vulnerabilities before they're exploited. White Shinobi delivers world-class penetration testing to fortify your digital defenses.
            </motion.p>
            
            <motion.div >
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-500 text-white font-semibold text-base rounded-lg px-8 py-6 h-auto group transform hover:scale-105 transition-transform duration-300">
                    <Link href="/assessment">
                      Start Security Assessment
                      <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                </Button>
            </motion.div>
          </motion.div>


          {/* Floating Stats Section */}
          <motion.div 
            className="absolute bottom-0 left-0 right-0 p-8"
            variants={statsVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="max-w-4xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div 
                            key={index} 
                            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-6 text-center group transition-all duration-300 hover:border-blue-400/50 hover:bg-white/10 hover:-translate-y-2"
                        >
                            <div className='flex justify-center items-center gap-4'>
                                <stat.icon className="h-8 w-8 text-blue-400 transition-colors duration-300 group-hover:text-blue-300" />
                                <p className="text-4xl font-bold bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">{stat.value}</p>
                            </div>
                            <p className="mt-2 text-sm text-slate-300 font-medium">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
          </motion.div>
      </div>
    </section>
  );
}
