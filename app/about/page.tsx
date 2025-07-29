import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ExpertiseSection from '@/components/ExpertiseSection';
import { Shield, Target, Award, Users } from 'lucide-react';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-900">
      <Header />
      <div className="pt-16">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-blue-900/20 via-slate-900 to-cyan-900/20 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-blue-600/20 rounded-lg">
                <Shield className="h-12 w-12 text-blue-400" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              About <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">White Shinobi</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We are elite cybersecurity professionals dedicated to protecting organizations from evolving digital threats
            </p>
          </div>
        </div>

        {/* Mission Section */}
        <div className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                To provide world-class penetration testing and cybersecurity services that empower organizations 
                to stay ahead of cyber threats. We combine cutting-edge technical expertise with the stealth and 
                precision of digital ninjas to uncover vulnerabilities before malicious actors do.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-blue-600/20 rounded-lg">
                    <Target className="h-8 w-8 text-blue-400" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Precision</h3>
                <p className="text-gray-300">Surgical accuracy in identifying critical vulnerabilities</p>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-blue-600/20 rounded-lg">
                    <Shield className="h-8 w-8 text-blue-400" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Security</h3>
                <p className="text-gray-300">Comprehensive protection for your digital assets</p>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-blue-600/20 rounded-lg">
                    <Users className="h-8 w-8 text-blue-400" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Expertise</h3>
                <p className="text-gray-300">Elite team of certified cybersecurity professionals</p>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-blue-600/20 rounded-lg">
                    <Award className="h-8 w-8 text-blue-400" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Excellence</h3>
                <p className="text-gray-300">Commitment to delivering outstanding results</p>
              </div>
            </div>
          </div>
        </div>

        <ExpertiseSection />
      </div>
      <Footer />
    </main>
  );
}