'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ExpertiseSection from '@/components/ExpertiseSection';
import { Shield, Target, Award, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const ourValues = [
  {
    icon: Target,
    title: 'Precision',
    description: 'Surgical accuracy in identifying critical vulnerabilities.',
  },
  {
    icon: Shield,
    title: 'Security',
    description: 'Comprehensive protection for your digital assets.',
  },
  {
    icon: Users,
    title: 'Expertise',
    description: 'Elite team of certified cybersecurity professionals.',
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'Commitment to delivering outstanding results.',
  },
];

const fadeInVariants = {
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

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-950 text-white">
      <Header />
      <div className="pt-16">
        {/* Hero Section */}
        <div className="relative overflow-hidden py-32">
          {/* Aurora Background Effect */}
          <div aria-hidden="true" className="absolute inset-0 z-0 mix-blend-soft-light">
            <div className="absolute -top-1/4 -left-1/4 h-[40rem] w-[40rem] rounded-full bg-[radial-gradient(ellipse_at_center,_rgba(29,78,216,0.15),_transparent_70%)] blur-2xl" />
            <div className="absolute -bottom-1/4 -right-1/4 h-[40rem] w-[40rem] rounded-full bg-[radial-gradient(ellipse_at_center,_rgba(56,189,248,0.15),_transparent_70%)] blur-2xl" />
          </div>

          <motion.div
            className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.2 } },
            }}
          >
            <motion.div  className="flex justify-center mb-6">
              <div className="p-4 bg-white/10 rounded-full border border-white/20 backdrop-blur-sm">
                <Shield className="h-12 w-12 text-blue-400" />
              </div>
            </motion.div>
            <motion.h1  className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
              About <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">White Shinobi</span>
            </motion.h1>
            <motion.p  className="text-xl text-gray-300 max-w-3xl mx-auto">
              We are elite cybersecurity professionals dedicated to protecting organizations from evolving digital threats.
            </motion.p>
          </motion.div>
        </div>

        {/* Mission Section */}
        <div className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-20"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={{
                visible: { transition: { staggerChildren: 0.2 } },
              }}
            >
              <motion.h2 className="text-4xl font-extrabold text-white mb-6">Our Mission</motion.h2>
              <motion.p  className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
                To provide world-class penetration testing and cybersecurity services that empower organizations to stay ahead of cyber threats. We combine cutting-edge technical expertise with the stealth and precision of digital ninjas to uncover vulnerabilities before malicious actors do.
              </motion.p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={{
                visible: { transition: { staggerChildren: 0.15 } },
              }}
            >
              {ourValues.map((value) => (
                <motion.div
                  key={value.title}
                  className="bg-gray-900/40 backdrop-blur-md border border-gray-700 rounded-xl p-8 text-center transition-all duration-300 hover:border-blue-400/50 hover:bg-gray-900/60 hover:-translate-y-2"
                >
                  <div className="flex justify-center mb-6">
                    <div className="p-4 bg-blue-600/10 rounded-full">
                      <value.icon className="h-8 w-8 text-blue-400" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                  <p className="text-gray-400">{value.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        <ExpertiseSection />
      </div>
      <Footer />
    </main>
  );
}
