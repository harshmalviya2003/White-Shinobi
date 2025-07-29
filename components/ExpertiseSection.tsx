'use client';

import { Target, Zap, Users, Award, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion'; // Make sure to install framer-motion: npm install framer-motion

const certifications = [
  { name: 'CISSP Certified', delay: 0.1 },
  { name: 'OSCP Certified', delay: 0.2 },
  { name: 'CEH Certified', delay: 0.3 },
  { name: 'Bug Bounty Hunter', delay: 0.4 },
];

const features = [
  { icon: Target, title: 'Precision Targeting', description: 'We identify critical vulnerabilities with surgical precision, focusing on real-world attack vectors.' },
  { icon: Zap, title: 'Rapid Response', description: 'Fast turnaround times without compromising on the thoroughness or quality of our assessments.' },
  { icon: Users, title: 'Elite Team', description: 'Hand-picked cybersecurity experts with proven track records in complex enterprise environments.' },
  { icon: Award, title: 'Proven Results', description: 'A strong track record of helping organizations prevent millions in potential damages from cyber threats.' },
];

export default function ExpertiseSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="py-24 bg-slate-900 bg-[url('/patterns/tech.svg')] bg-center text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Text Content */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
            className="space-y-8"
          >
            <motion.h2 variants={itemVariants} className="text-4xl sm:text-5xl font-extrabold tracking-tight">
              Cybersecurity, Forged by <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Experts</span>.
            </motion.h2>
            
            <motion.p variants={itemVariants} className="text-slate-300 text-lg leading-relaxed">
              White Shinobi combines the precision of elite professionals with the stealth of digital ninjas. We operate in the shadows of the digital world, uncovering critical vulnerabilities that automated tools and other teams miss.
            </motion.p>
            
            <motion.div variants={itemVariants} className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
              <div className="grid grid-cols-2 gap-6 text-center">
                  <div>
                    <span className="block text-4xl font-bold text-blue-400">8+</span>
                    <span className="text-sm text-slate-400">Years of Experience</span>
                  </div>
                  <div>
                    <span className="block text-4xl font-bold text-blue-400">100%</span>
                    <span className="text-sm text-slate-400">OSCP Certified Team</span>
                  </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-3">
              {certifications.map((cert) => (
                <div key={cert.name} className="flex items-center bg-slate-700/50 text-slate-300 px-4 py-2 rounded-full text-sm border border-slate-600">
                  <ShieldCheck className="w-4 h-4 mr-2 text-blue-400" />
                  {cert.name}
                </div>
              ))}
            </motion.div>
          </motion.div>
          
          {/* Right Column: Feature Cards */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
            className="space-y-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-slate-800/40 rounded-xl p-6 border border-slate-700 hover:border-blue-500/50 transition-all duration-300 hover:bg-slate-800/70"
              >
                <div className="flex items-start space-x-4">
                  <motion.div 
                     whileHover={{ scale: 1.1, rotate: 5 }}
                     className="p-3 bg-slate-700/80 rounded-lg flex-shrink-0"
                  >
                    <feature.icon className="h-6 w-6 text-blue-400" />
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-slate-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
