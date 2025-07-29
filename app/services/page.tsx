'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServicesSection from '@/components/ServicesSection';
import { motion } from 'framer-motion';

export default function ServicesPage() {
  
  const pageVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <main className="min-h-screen bg-gray-950">
      <Header />
      <div className="pt-16">
        {/* Page Header Section */}
        <div className="relative overflow-hidden py-32">
          
          {/* Aurora Background Effect */}
          <div aria-hidden="true" className="absolute inset-0 z-0 mix-blend-soft-light">
            <div className="absolute -top-1/4 -left-1/4 h-[40rem] w-[40rem] rounded-full bg-[radial-gradient(ellipse_at_center,_rgba(29,78,216,0.15),_transparent_70%)] blur-2xl" />
            <div className="absolute -bottom-1/4 -right-1/4 h-[40rem] w-[40rem] rounded-full bg-[radial-gradient(ellipse_at_center,_rgba(56,189,248,0.15),_transparent_70%)] blur-2xl" />
          </div>

          <motion.div
            className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
            variants={pageVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              className="text-5xl md:text-6xl font-extrabold text-white mb-6 tracking-tight"
            >
              Our <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Services</span>
            </motion.h1>
            
            <motion.p
              className="text-xl text-gray-400 max-w-3xl mx-auto"
            >
              Comprehensive cybersecurity solutions tailored to protect your digital infrastructure.
            </motion.p>

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "8rem" }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
              className="h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mx-auto mt-12"
            />
          </motion.div>
        </div>
        
        <ServicesSection />
      </div>
      <Footer />
    </main>
  );
}
