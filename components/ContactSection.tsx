'use client';

import { useState } from 'react';
import { Mail, Clock, MapPin, Send, CheckCircle, Smartphone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { motion } from 'framer-motion'; // Make sure to install: npm install framer-motion

const contactInfo = [
  { icon: Mail, title: "General Inquiries", value: "contact@whiteshinobi.security" },
  { icon: Smartphone, title: "Urgent Support", value: "urgent@whiteshinobi.security" },
  { icon: MapPin, title: "Our Presence", value: "Global Remote Operations" },
];

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="py-24 bg-slate-900 bg-[url('/patterns/tech.svg')] bg-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={itemVariants}
            className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Secure Your <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Digital Frontier</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto">
            Get in touch with our cybersecurity experts for a consultation. We're here to help fortify your defenses.
          </p>
        </motion.div>
        
        <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
            className="bg-slate-800/40 backdrop-blur-md border border-slate-700 rounded-2xl p-8 lg:p-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Left Column: Form */}
            <div className="lg:col-span-3">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col items-center justify-center text-center h-full"
                >
                  <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mb-6">
                     <CheckCircle className="w-12 h-12 text-green-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Message Received</h3>
                  <p className="text-slate-300">Thank you for reaching out. An expert from our team will contact you within 24 hours.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name" className="text-slate-300 mb-2 block">Name *</Label>
                      <Input id="name" name="name" type="text" required value={formData.name} onChange={handleChange} className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 focus:ring-blue-500" placeholder="Your Name" />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-slate-300 mb-2 block">Email *</Label>
                      <Input id="email" name="email" type="email" required value={formData.email} onChange={handleChange} className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 focus:ring-blue-500" placeholder="your.email@company.com" />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="company" className="text-slate-300 mb-2 block">Company</Label>
                    <Input id="company" name="company" type="text" value={formData.company} onChange={handleChange} className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 focus:ring-blue-500" placeholder="Your Company Name" />
                  </div>
                  <div>
                    <Label htmlFor="message" className="text-slate-300 mb-2 block">Message *</Label>
                    <Textarea id="message" name="message" required rows={5} value={formData.message} onChange={handleChange} placeholder="Tell us about your security needs..." className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 focus:ring-blue-500" />
                  </div>
                  <Button type="submit" size="lg" className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold">
                    Get Security Consultation
                  </Button>
                </form>
              )}
            </div>
            
            {/* Right Column: Contact Info */}
            <div className="lg:col-span-2 lg:border-l lg:border-slate-700 lg:pl-12">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Channels</h3>
              <div className="space-y-6">
                {contactInfo.map((info) => (
                    <div key={info.title} className="flex items-start gap-4">
                        <div className="p-3 bg-slate-700/80 rounded-lg flex-shrink-0">
                            <info.icon className="h-6 w-6 text-blue-400" />
                        </div>
                        <div>
                            <h4 className="font-semibold text-white">{info.title}</h4>
                            <p className="text-slate-400">{info.value}</p>
                        </div>
                    </div>
                ))}
                 <div className="pt-6 border-t border-slate-700">
                    <h4 className="font-semibold text-white">Our Promise</h4>
                    <p className="mt-2 text-slate-400 text-sm">We guarantee a response within 24 hours for standard inquiries and under 2 hours for urgent requests. Your security is our priority.</p>
                 </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
