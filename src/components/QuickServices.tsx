import React, { useState } from 'react';
import { 
  Baby, 
  HeartHandshake, 
  ScrollText, 
  FileCheck2, 
  ShieldCheck, 
  Scale, 
  ArrowRight, 
  Clock, 
  FileText, 
  ChevronRight,
  Check
} from 'lucide-react';
import { SERVICES_LIST } from '../data/cartorioData';
import { ServiceItem } from '../types/cartorio';

interface QuickServicesProps {
  onSelectService: (service: ServiceItem) => void;
  onOpenAppointmentForService: (serviceName: string) => void;
}

export const QuickServices: React.FC<QuickServicesProps> = ({
  onSelectService,
  onOpenAppointmentForService,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // Map icon strings to Lucide components
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'Baby':
        return <Baby className="w-6 h-6 text-[#A63D5C]" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-6 h-6 text-[#A63D5C]" />;
      case 'ScrollText':
        return <ScrollText className="w-6 h-6 text-[#A63D5C]" />;
      case 'FileCheck2':
        return <FileCheck2 className="w-6 h-6 text-[#A63D5C]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-[#A63D5C]" />;
      case 'Scale':
        return <Scale className="w-6 h-6 text-[#A63D5C]" />;
      default:
        return <FileText className="w-6 h-6 text-[#A63D5C]" />;
    }
  };

  const filteredServices = selectedCategory === 'all' 
    ? SERVICES_LIST 
    : SERVICES_LIST.filter(s => s.category.toLowerCase().includes(selectedCategory.toLowerCase()));

  return (
    <section id="servicos" className="py-16 sm:py-24 bg-[#FFFFFF] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-stone-200 gap-4">
          <div>
            <span className="text-xs uppercase tracking-widest font-semibold text-[#A63D5C] block mb-2">
              Atos da Vida Civil & Cidadania
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#212529] tracking-tight">
              Serviços Rápidos e Procedimentos
            </h2>
            <p className="text-sm sm:text-base text-[#4A4A4A] mt-2 max-w-2xl">
              Consulte orientações oficiais, prazos e a documentação necessária para cada registro ou ato notarial em Lorena - SP.
            </p>
          </div>

          {/* Interactive Category Filter Tabs (Section 1.A Allowed segmented buttons) */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#F4F5F7] rounded-sm self-start md:self-auto border border-stone-200 text-xs font-medium">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3 py-1.5 rounded-sm transition-colors cursor-pointer ${
                selectedCategory === 'all'
                  ? 'bg-white text-[#212529] shadow-xs font-semibold'
                  : 'text-[#4A4A4A] hover:text-[#212529]'
              }`}
            >
              Todos os Serviços
            </button>
            <button
              onClick={() => setSelectedCategory('Cidadania')}
              className={`px-3 py-1.5 rounded-sm transition-colors cursor-pointer ${
                selectedCategory === 'Cidadania'
                  ? 'bg-white text-[#212529] shadow-xs font-semibold'
                  : 'text-[#4A4A4A] hover:text-[#212529]'
              }`}
            >
              Nascimento
            </button>
            <button
              onClick={() => setSelectedCategory('Família')}
              className={`px-3 py-1.5 rounded-sm transition-colors cursor-pointer ${
                selectedCategory === 'Família'
                  ? 'bg-white text-[#212529] shadow-xs font-semibold'
                  : 'text-[#4A4A4A] hover:text-[#212529]'
              }`}
            >
              Casamento
            </button>
            <button
              onClick={() => setSelectedCategory('Atos')}
              className={`px-3 py-1.5 rounded-sm transition-colors cursor-pointer ${
                selectedCategory === 'Atos'
                  ? 'bg-white text-[#212529] shadow-xs font-semibold'
                  : 'text-[#4A4A4A] hover:text-[#212529]'
              }`}
            >
              Óbito
            </button>
            <button
              onClick={() => setSelectedCategory('Digitais')}
              className={`px-3 py-1.5 rounded-sm transition-colors cursor-pointer ${
                selectedCategory === 'Digitais'
                  ? 'bg-white text-[#212529] shadow-xs font-semibold'
                  : 'text-[#4A4A4A] hover:text-[#212529]'
              }`}
            >
              Certidões
            </button>
            <button
              onClick={() => setSelectedCategory('Notas')}
              className={`px-3 py-1.5 rounded-sm transition-colors cursor-pointer ${
                selectedCategory === 'Notas'
                  ? 'bg-white text-[#212529] shadow-xs font-semibold'
                  : 'text-[#4A4A4A] hover:text-[#212529]'
              }`}
            >
              Firmas & Autenticações
            </button>
          </div>
        </div>

        {/* Clean Grid of Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-white border border-stone-200 rounded-sm p-6 sm:p-7 flex flex-col justify-between hover:border-[#A63D5C] hover:shadow-md transition-all duration-200 group"
            >
              <div>
                {/* Header of Card with Minimalist Icon and Category */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-sm bg-[#F4F5F7] border border-stone-200 flex items-center justify-center group-hover:bg-[#A63D5C]/10 transition-colors">
                    {renderIcon(service.icon)}
                  </div>

                  {/* Clean unboxed metadata separator as per Anti-Slop Rule 1.A */}
                  <div className="text-xs text-[#4A4A4A] flex items-center gap-1.5">
                    {service.isFree && (
                      <span className="text-[#A63D5C] font-semibold">Gratuito</span>
                    )}
                    {service.isFree && <span aria-hidden="true">·</span>}
                    <span className="font-mono text-stone-500">{service.category}</span>
                  </div>
                </div>

                {/* Service Title */}
                <h3 className="font-serif text-xl font-bold text-[#212529] group-hover:text-[#A63D5C] transition-colors leading-snug">
                  {service.title}
                </h3>

                {/* Short Description */}
                <p className="text-sm text-[#4A4A4A] mt-2.5 leading-relaxed line-clamp-3">
                  {service.shortDescription}
                </p>

                {/* Minimalist details list */}
                <div className="mt-5 pt-4 border-t border-stone-100 space-y-2 text-xs text-[#4A4A4A]">
                  <div className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-[#E2B659] shrink-0" />
                    <span><strong>Prazo:</strong> {service.estimatedTime}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#A63D5C] shrink-0" />
                    <span className="truncate"><strong>Custo:</strong> {service.costInfo}</span>
                  </div>
                </div>
              </div>

              {/* Card Actions */}
              <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between gap-3">
                <button
                  onClick={() => onSelectService(service)}
                  className="text-xs font-semibold text-[#A63D5C] hover:text-[#872e47] flex items-center gap-1.5 group/link cursor-pointer py-1"
                >
                  <span>Ver Requisitos & Docs</span>
                  <ChevronRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" />
                </button>

                <button
                  onClick={() => onOpenAppointmentForService(service.title)}
                  className="px-3 py-1.5 text-xs font-medium text-[#212529] bg-[#F4F5F7] hover:bg-[#E2B659] hover:text-[#212529] rounded-sm transition-colors cursor-pointer"
                >
                  Agendar
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Informative Callout Banner */}
        <div className="mt-12 p-6 bg-[#F4F5F7] border-l-4 border-[#A63D5C] rounded-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="space-y-1">
            <h4 className="font-serif font-bold text-base text-[#212529]">
              Dúvidas sobre documentação para casamento ou certidão de inteiro teor?
            </h4>
            <p className="text-xs sm:text-sm text-[#4A4A4A]">
              Nossa equipe de escreventes oferece suporte prévio gratuito para conferência de documentos antes do seu comparecimento presencial.
            </p>
          </div>

          <a
            href="#contato"
            className="px-4 py-2 text-xs font-semibold text-white bg-[#A63D5C] hover:bg-[#872e47] rounded-sm transition-colors whitespace-nowrap"
          >
            Falar com a Equipe
          </a>
        </div>

      </div>
    </section>
  );
};
