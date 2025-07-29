import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServicesSection from '@/components/ServicesSection';

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-slate-900">
      <Header />
      <div className="pt-16">
        <div className="bg-gradient-to-br from-blue-900/20 via-slate-900 to-cyan-900/20 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Our <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive cybersecurity solutions tailored to protect your digital infrastructure
            </p>
          </div>
        </div>
        <ServicesSection />
      </div>
      <Footer />
    </main>
  );
}