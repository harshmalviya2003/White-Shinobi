'use client';

import { motion } from 'framer-motion'; // Make sure to install: npm install framer-motion
import { Plus, Minus, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from '@/components/ui/button';

const faqs = [
  { question: "What is penetration testing and why do I need it?", answer: "Penetration testing is a simulated cyberattack against your system to check for exploitable vulnerabilities. It's essential for identifying security weaknesses before malicious hackers do, ensuring compliance with industry standards, and protecting your business from costly data breaches." },
  { question: "How long does a typical penetration test take?", answer: "The duration varies based on scope and complexity. A basic web application test might take 1-2 weeks, while comprehensive infrastructure assessments can take 4-6 weeks. We provide detailed timelines during our initial consultation." },
  { question: "What's included in your penetration testing reports?", answer: "Our reports include an executive summary, detailed vulnerability findings with risk ratings, step-by-step exploitation methods, business impact analysis, and prioritized remediation recommendations. We also provide a retest to verify fixes." },
  { question: "Do you offer emergency security assessments?", answer: "Yes, we provide emergency incident response and rapid security assessments. Our team can be mobilized within hours for critical security incidents, with preliminary findings available within 24-48 hours." },
  { question: "How do you ensure confidentiality during testing?", answer: "We maintain strict confidentiality through comprehensive NDAs, secure communication channels, encrypted data handling, and ISO 27001 compliant processes. All team members undergo rigorous background checks." },
  { question: "What makes White Shinobi different from other security firms?", answer: "Our unique combination of elite technical skills, real-world attack simulation experience, and ninja-like stealth sets us apart. We focus on practical vulnerabilities that matter, not just checking compliance boxes." },
];

export default function FAQSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="py-24 bg-slate-900 bg-[url('/patterns/tech.svg')] bg-center overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={itemVariants}
            className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-slate-400">
            Everything you need to know about our penetration testing services.
          </p>
        </motion.div>
        
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
        >
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <motion.div key={index} variants={itemVariants}>
                <AccordionItem 
                  value={`item-${index}`}
                  className="bg-slate-800/40 backdrop-blur-sm border border-slate-700 rounded-xl px-6 transition-all duration-300 hover:border-blue-500/50"
                >
                  <AccordionTrigger className="py-5 text-lg font-semibold text-white hover:no-underline group">
                    <span className="flex-1 text-left transition-colors duration-300 group-hover:text-blue-400">{faq.question}</span>
                    <Plus className="h-6 w-6 shrink-0 text-slate-400 transition-transform duration-300 group-data-[state=open]:hidden group-hover:text-blue-400" />
                    <Minus className="h-6 w-6 shrink-0 text-slate-400 transition-transform duration-300 hidden group-data-[state=open]:block group-hover:text-blue-400" />
                  </AccordionTrigger>
                  <AccordionContent className="pt-0 pb-5 text-slate-300 text-base leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>

        {/* CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-20 text-center bg-slate-800/50 border border-slate-700 rounded-2xl p-10"
        >
            <h3 className="text-2xl font-bold text-white">Still Have Questions?</h3>
            <p className="mt-2 text-slate-400 max-w-xl mx-auto">
                Our security experts are ready to provide the answers you need. Contact us for a no-obligation consultation.
            </p>
            <Button asChild className="mt-6 bg-blue-600 hover:bg-blue-500 text-white font-semibold group">
                <Link href="/contact">
                    Contact an Expert
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
            </Button>
        </motion.div>

      </div>
    </section>
  );
}
