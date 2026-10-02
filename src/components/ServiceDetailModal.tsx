import React from 'react';
import { X, CheckCircle2, Clock, Scale, Calendar, FileText, ArrowRight, ShieldCheck } from 'lucide-react';
import { ServiceItem } from '../types/cartorio';
import { CARTORIO_INFO } from '../data/cartorioData';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onOpenAppointmentForService: (serviceName: string) => void;
  onOpenCertificate: () => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onOpenAppointmentForService,
  onOpenCertificate,
}) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
      <div 
        className="bg-white border border-stone-300 rounded-sm shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        role="dialog"
        aria-modal="true"
        aria-labelledby="service-modal-title"
      >
        
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-stone-200 bg-[#F4F5F7]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-sm border border-stone-300 bg-white flex items-center justify-center p-0.5 overflow-hidden shadow-xs shrink-0">
              <img
                src={CARTORIO_INFO.logoUrl}
                alt="Brasão do Registro Civil de Lorena"
                className="w-full h-full object-contain"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (target.src !== CARTORIO_INFO.logoFallbackUrl) {
                    target.src = CARTORIO_INFO.logoFallbackUrl;
                  }
                }}
              />
            </div>
            <div>
              <span className="text-[11px] font-mono text-[#A63D5C] uppercase tracking-wider font-semibold">
                {service.category} · Cartório de Lorena - SP
              </span>
              <h3 id="service-modal-title" className="font-serif font-bold text-xl sm:text-2xl text-[#212529] mt-0.5">
                {service.title}
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-stone-500 hover:text-[#212529] hover:bg-stone-200 rounded-sm transition-colors cursor-pointer"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6 text-xs text-[#4A4A4A]">
          
          {/* Overview text */}
          <div className="space-y-2">
            <h4 className="font-serif font-bold text-sm text-[#212529]">
              Visão Geral e Finalidade
            </h4>
            <p className="text-sm text-[#4A4A4A] leading-relaxed">
              {service.fullDescription}
            </p>
          </div>

          {/* Quick Legal & Metric strip */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 bg-[#F4F5F7] border border-stone-200 rounded-sm">
            <div>
              <span className="text-[10px] text-stone-500 uppercase tracking-wider block font-semibold">
                Fundamento Legal
              </span>
              <span className="text-xs text-[#212529] font-medium mt-0.5 block">
                {service.legalBasis}
              </span>
            </div>

            <div>
              <span className="text-[10px] text-stone-500 uppercase tracking-wider block font-semibold">
                Prazo Estimado
              </span>
              <span className="text-xs text-[#212529] font-medium mt-0.5 block">
                {service.estimatedTime}
              </span>
            </div>

            <div>
              <span className="text-[10px] text-stone-500 uppercase tracking-wider block font-semibold">
                Custo / Emolumento
              </span>
              <span className="text-xs text-[#A63D5C] font-bold mt-0.5 block">
                {service.costInfo}
              </span>
            </div>
          </div>

          {/* Required documents checklist */}
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-sm text-[#212529] flex items-center gap-1.5">
              <FileText className="w-4 h-4 text-[#A63D5C]" />
              <span>Documentos Necessários Obrigatórios:</span>
            </h4>
            <ul className="space-y-2">
              {service.requiredDocuments.map((doc, idx) => (
                <li key={idx} className="flex items-start gap-2.5 p-2.5 bg-stone-50 rounded border border-stone-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="text-xs text-[#212529]">{doc}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Step by step procedure */}
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-sm text-[#212529] flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-[#E2B659]" />
              <span>Passo a Passo do Procedimento:</span>
            </h4>
            <ol className="space-y-2 list-decimal list-inside text-stone-700">
              {service.steps.map((step, idx) => (
                <li key={idx} className="pl-1">
                  <span className="text-[#212529] font-medium">{step}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* Footer Actions */}
          <div className="pt-4 border-t border-stone-200 flex flex-wrap items-center justify-between gap-3">
            <button
              onClick={onClose}
              className="text-stone-600 hover:text-[#212529] font-medium cursor-pointer"
            >
              Fechar Guia
            </button>

            <div className="flex items-center gap-2">
              {service.id === 'certidoes' && (
                <button
                  onClick={() => {
                    onClose();
                    onOpenCertificate();
                  }}
                  className="px-4 py-2.5 bg-[#E2B659] hover:bg-[#cba043] text-[#212529] font-semibold rounded-sm transition-colors cursor-pointer"
                >
                  Pedir Certidão Online
                </button>
              )}

              <button
                onClick={() => {
                  onClose();
                  onOpenAppointmentForService(service.title);
                }}
                className="px-5 py-2.5 bg-[#A63D5C] hover:bg-[#872e47] text-white font-semibold rounded-sm transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs"
              >
                <Calendar className="w-3.5 h-3.5 text-[#E2B659]" />
                <span>Agendar Atendimento Presencial</span>
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
