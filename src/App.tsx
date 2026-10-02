import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { QuickServices } from './components/QuickServices';
import { UsefulInfo } from './components/UsefulInfo';
import { ProvimentoCNJ } from './components/ProvimentoCNJ';
import { LocationContact } from './components/LocationContact';
import { Footer } from './components/Footer';
import { AppointmentModal } from './components/AppointmentModal';
import { CertificateOnlineModal } from './components/CertificateOnlineModal';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { ServiceItem } from './types/cartorio';
import { Calendar, FileCheck, PhoneCall, ChevronUp } from 'lucide-react';
import { CARTORIO_INFO } from './data/cartorioData';

export default function App() {
  // Accessibility states
  const [fontSize, setFontSize] = useState<'normal' | 'large' | 'xlarge'>('normal');
  const [highContrast, setHighContrast] = useState<boolean>(false);

  // Modal states
  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false);
  const [selectedServiceForAppointment, setSelectedServiceForAppointment] = useState<string | undefined>(undefined);
  const [isCertificateModalOpen, setIsCertificateModalOpen] = useState(false);
  const [selectedServiceDetail, setSelectedServiceDetail] = useState<ServiceItem | null>(null);

  // Scroll to top visibility
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleToggleFontSize = () => {
    if (fontSize === 'normal') setFontSize('large');
    else if (fontSize === 'large') setFontSize('xlarge');
    else setFontSize('normal');
  };

  const handleToggleContrast = () => {
    const newContrast = !highContrast;
    setHighContrast(newContrast);
    if (newContrast) {
      document.body.classList.add('high-contrast');
    } else {
      document.body.classList.remove('high-contrast');
    }
  };

  const handleOpenAppointment = (serviceName?: string) => {
    setSelectedServiceForAppointment(serviceName);
    setIsAppointmentModalOpen(true);
  };

  const handleOpenCertificate = () => {
    setIsCertificateModalOpen(true);
  };

  const handleSelectService = (service: ServiceItem) => {
    setSelectedServiceDetail(service);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Font size scale class
  const fontSizeClass = fontSize === 'large' 
    ? 'text-[1.08rem]' 
    : fontSize === 'xlarge' 
    ? 'text-[1.18rem]' 
    : '';

  return (
    <div className={`min-h-screen flex flex-col font-sans bg-white text-[#212529] ${fontSizeClass}`}>
      
      {/* 1. Header with Top Bar Contract & Accessibility Bar */}
      <Header
        onOpenAppointment={() => handleOpenAppointment()}
        onOpenCertificate={handleOpenCertificate}
        fontSize={fontSize}
        onToggleFontSize={handleToggleFontSize}
        highContrast={highContrast}
        onToggleContrast={handleToggleContrast}
      />

      {/* Main Content landmark for screen-readers */}
      <main id="conteudo-principal" className="flex-1">
        
        {/* 2. Hero Section */}
        <Hero
          onOpenAppointment={() => handleOpenAppointment()}
          onOpenCertificate={handleOpenCertificate}
        />

        {/* 3. Quick Services Grid */}
        <QuickServices
          onSelectService={handleSelectService}
          onOpenAppointmentForService={(name) => handleOpenAppointment(name)}
        />

        {/* 4. Useful Info: Schedules, Deadlines, and Dynamic Emoluments Table / Calculator */}
        <UsefulInfo />

        {/* 4.5. Provimento CNJ nº 213, LGPD & Institutional Governance */}
        <ProvimentoCNJ />

        {/* 5. Location and Contact with integrated map & verified form */}
        <LocationContact />

      </main>

      {/* 6. Legal Footer */}
      <Footer />

      {/* Interactive Modals */}
      <AppointmentModal
        isOpen={isAppointmentModalOpen}
        onClose={() => setIsAppointmentModalOpen(false)}
        preSelectedServiceName={selectedServiceForAppointment}
      />

      <CertificateOnlineModal
        isOpen={isCertificateModalOpen}
        onClose={() => setIsCertificateModalOpen(false)}
      />

      <ServiceDetailModal
        service={selectedServiceDetail}
        onClose={() => setSelectedServiceDetail(null)}
        onOpenAppointmentForService={(name) => handleOpenAppointment(name)}
        onOpenCertificate={handleOpenCertificate}
      />

      {/* Discreet Sticky Utility Action Bar (complies with 15% Mobile Sticky Cap rule) */}
      <div className="fixed bottom-4 right-4 z-30 flex flex-col items-end gap-2 pointer-events-none">
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="p-2.5 bg-white border border-stone-300 text-stone-700 hover:text-[#A63D5C] rounded-full shadow-md hover:bg-stone-50 transition-all pointer-events-auto cursor-pointer"
            aria-label="Voltar ao topo da página"
            title="Voltar ao topo"
          >
            <ChevronUp className="w-5 h-5" />
          </button>
        )}

        <div className="flex items-center gap-2 pointer-events-auto">
          {/* Quick WhatsApp button */}
          <a
            href={`https://wa.me/55${CARTORIO_INFO.whatsapp.replace(/\D/g, '')}?text=Ola,%20gostaria%20de%20informacoes%20sobre%20os%20servicos%20do%20cartorio`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3.5 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-semibold rounded-full shadow-lg transition-transform hover:scale-105"
            title="Fale conosco pelo WhatsApp"
          >
            <PhoneCall className="w-4 h-4" />
            <span className="hidden sm:inline">WhatsApp Cartório</span>
          </a>

          {/* Quick Online Certificate button */}
          <button
            onClick={handleOpenCertificate}
            className="flex items-center gap-1.5 px-3.5 py-2.5 bg-[#E2B659] hover:bg-[#cba043] text-[#212529] text-xs font-bold rounded-full shadow-lg transition-transform hover:scale-105 cursor-pointer"
            title="Pedir Certidão Online"
          >
            <FileCheck className="w-4 h-4 text-[#A63D5C]" />
            <span className="hidden sm:inline">2ª Via Online</span>
          </button>
        </div>
      </div>

    </div>
  );
}
