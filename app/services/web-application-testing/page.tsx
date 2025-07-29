import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Globe, Shield, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function WebApplicationTestingPage() {
  return (
    <main className="min-h-screen bg-slate-900">
      <Header />
      <div className="pt-16">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-blue-900/20 via-slate-900 to-cyan-900/20 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-blue-600/20 rounded-lg">
                  <Globe className="h-12 w-12 text-blue-400" />
                </div>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Web Application Security Testing
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                In-depth security analysis of web applications to uncover OWASP Top 10 vulnerabilities and custom security flaws
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Vulnerabilities We Find</h2>
                <div className="space-y-4">
                  {[
                    'SQL Injection Attacks',
                    'Cross-Site Scripting (XSS)',
                    'Authentication Bypass',
                    'Session Management Flaws',
                    'Insecure Direct Object References',
                    'Cross-Site Request Forgery (CSRF)',
                    'Security Misconfigurations',
                    'Business Logic Vulnerabilities'
                  ].map((item, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                      <span className="text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Testing Approach</h2>
                <div className="space-y-6">
                  <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
                    <h3 className="text-xl font-semibold text-white mb-3">Manual Testing</h3>
                    <p className="text-gray-300">Expert security analysts manually review code and test application logic.</p>
                  </div>
                  <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
                    <h3 className="text-xl font-semibold text-white mb-3">Automated Scanning</h3>
                    <p className="text-gray-300">Advanced tools to identify common vulnerabilities at scale.</p>
                  </div>
                  <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
                    <h3 className="text-xl font-semibold text-white mb-3">API Security</h3>
                    <p className="text-gray-300">Comprehensive testing of REST APIs, GraphQL, and microservices.</p>
                  </div>
                  <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
                    <h3 className="text-xl font-semibold text-white mb-3">Source Code Review</h3>
                    <p className="text-gray-300">Static analysis of application source code for security flaws.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-16">
              <Button className="bg-blue-600 hover:bg-blue-500 text-white text-lg px-8 py-4 h-auto">
                <Shield className="mr-2 h-5 w-5" />
                Request Web App Assessment
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}