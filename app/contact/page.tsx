import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactSection from '@/components/ContactSection';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-900">
      <Header />
      <div className="pt-16">
        <div className="bg-gradient-to-br from-blue-900/20 via-slate-900 to-cyan-900/20 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Contact <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Us</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to secure your digital infrastructure? Get in touch with our cybersecurity experts
            </p>
          </div>
        </div>
        <ContactSection />
      </div>
      <Footer />
    </main>
  );
}