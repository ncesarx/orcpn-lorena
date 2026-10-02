import React, { useMemo } from 'react';
import { ArrowRight, Calendar, ShieldCheck, Clock, MapPin, CheckCircle2, Award } from 'lucide-react';
import { CARTORIO_INFO } from '../data/cartorioData';

interface HeroProps {
  onOpenAppointment: () => void;
  onOpenCertificate: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenAppointment, onOpenCertificate }) => {
  // Determine if the cartorio is currently open (Monday to Friday, 9:00 to 17:00 Sao Paulo time)
  const isCurrentlyOpen = useMemo(() => {
    try {
      const now = new Date();
      // SP is UTC-3
      const spTime = new Date(now.toLocaleString("en-US", { timeZone: "America/Sao_Paulo" }));
      const day = spTime.getDay(); // 0 is Sunday, 6 is Saturday
      const hours = spTime.getHours();
      const minutes = spTime.getMinutes();
      const currentTimeInMinutes = hours * 60 + minutes;

      // Monday to Friday: 09:00 (540 min) to 17:00 (1020 min)
      if (day >= 1 && day <= 5) {
        return currentTimeInMinutes >= 540 && currentTimeInMinutes < 1020;
      }
      return false;
    } catch {
      return true; // Graceful fallback
    }
  }, []);

  return (
    <section id="inicio" className="relative bg-gradient-to-b from-[#FFFFFF] via-[#F4F5F7] to-[#FFFFFF] border-b border-stone-200 overflow-hidden pt-8 pb-12 sm:pt-14 sm:pb-20">
      
      {/* Decorative Subtle Background Architectural Geometry */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <svg
          className="absolute right-0 top-0 h-full w-1/2 text-stone-200"
          viewBox="0 0 600 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="500" cy="100" r="300" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
          <circle cx="500" cy="100" r="450" stroke="currentColor" strokeWidth="0.8" />
          <path d="M200 0 L600 400" stroke="currentColor" strokeWidth="0.5" />
          <path d="M100 200 L600 600" stroke="currentColor" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Editorial Trust Index Header */}
        <div className="flex items-center gap-2 text-xs font-medium text-[#4A4A4A] mb-4">
          <span className="text-[#A63D5C] font-semibold tracking-wider uppercase text-[11px]">
            República Federativa do Brasil
          </span>
          <span aria-hidden="true" className="text-stone-400">·</span>
          <span>Poder Judiciário do Estado de São Paulo</span>
          <span aria-hidden="true" className="text-stone-400">·</span>
          <span>Comarca de Lorena</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Main Content Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Imposing Title */}
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] text-[#212529] font-bold leading-[1.15] tracking-tight text-balance">
              Registro Civil de Lorena:{" "}
              <span className="text-[#A63D5C] italic font-medium">
                Garantindo a sua cidadania
              </span>{" "}
              e os seus direitos.
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-[#4A4A4A] leading-relaxed max-w-2xl">
              Segurança jurídica, fé pública e acolhimento humano desde o nascimento até as celebrações mais solenes da vida. Atendimento presencial ágil no centro de Lorena e integração aos serviços eletrônicos nacionais em estrita observância ao <strong>Provimento CNJ nº 213</strong>.
            </p>

            {/* Highlighted CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              {/* Highlight CTA: Gold (#E2B659) */}
              <button
                onClick={onOpenCertificate}
                className="px-6 py-3.5 text-sm font-semibold text-[#212529] bg-[#E2B659] hover:bg-[#cba043] active:bg-[#b58c35] rounded-sm transition-all duration-150 shadow-sm flex items-center gap-2.5 group cursor-pointer"
              >
                <span>Solicitar Certidão Online</span>
                <ArrowRight className="w-4 h-4 text-[#212529] group-hover:translate-x-0.5 transition-transform" />
              </button>

              {/* Primary CTA: Burgundy (#A63D5C) */}
              <button
                onClick={onOpenAppointment}
                className="px-6 py-3.5 text-sm font-semibold text-white bg-[#A63D5C] hover:bg-[#872e47] active:bg-[#6e2338] rounded-sm transition-all duration-150 shadow-sm flex items-center gap-2.5 cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-[#E2B659]" />
                <span>Agendar Atendimento Presencial</span>
              </button>
            </div>

            {/* Trust Markers & Legal Principles */}
            <div className="pt-4 border-t border-stone-200/80 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-[#4A4A4A]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#A63D5C] shrink-0" />
                <span>1ª Via de Nascimento & Óbito Gratuita</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#A63D5C] shrink-0" />
                <span>Certidões Digitais com QR Code TJSP</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#A63D5C] shrink-0" />
                <span>Emolumentos Oficiais Transparentes</span>
              </div>
            </div>

          </div>

          {/* Institutional Visual Emblem Carrier (5 cols) */}
          <div className="lg:col-span-5">
            <div className="bg-white border border-stone-200 rounded-sm shadow-[0_8px_30px_rgba(0,0,0,0.06)] p-6 sm:p-8 relative">
              
              {/* Header of the Card */}
              <div className="flex items-center justify-between pb-5 border-b border-stone-200">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-sm border border-stone-200 bg-white flex items-center justify-center shadow-xs overflow-hidden p-1">
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
                    <h3 className="font-serif font-semibold text-base text-[#212529] leading-tight">
                      Cartório de Registro Civil
                    </h3>
                    <p className="text-xs text-[#4A4A4A]">
                      Titular: <strong>{CARTORIO_INFO.oficialResponsavel}</strong>
                    </p>
                    <p className="text-[11px] text-stone-500">
                      Substituta: {CARTORIO_INFO.substituto}
                    </p>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-[10px] uppercase tracking-wider text-stone-500 font-semibold block">
                    CNS CNJ
                  </span>
                  <span className="text-xs font-mono font-bold text-[#212529] tabular-nums">
                    {CARTORIO_INFO.cns}
                  </span>
                </div>
              </div>

              {/* Heraldic Visual Representation of Fé Pública with Official Logo */}
              <div className="py-6 flex flex-col items-center justify-center text-center space-y-4">
                <div className="w-24 h-24 rounded-full border-2 border-[#E2B659] bg-[#F4F5F7] p-2 flex items-center justify-center shadow-inner relative">
                  <div className="w-full h-full rounded-full border border-dashed border-[#A63D5C] p-1.5 flex items-center justify-center bg-white overflow-hidden shadow-xs">
                    <img
                      src={CARTORIO_INFO.logoUrl}
                      alt="Brasão Oficial"
                      className="w-full h-full object-contain"
                      onError={(e) => {
                        const target = e.currentTarget;
                        if (target.src !== CARTORIO_INFO.logoFallbackUrl) {
                          target.src = CARTORIO_INFO.logoFallbackUrl;
                        }
                      }}
                    />
                  </div>
                  <div className="absolute -bottom-1 -right-1 bg-[#E2B659] text-[#212529] rounded-full p-1 shadow-xs">
                    <Award className="w-3.5 h-3.5" />
                  </div>
                </div>

                <div className="space-y-1">
                  <h4 className="font-serif text-lg font-bold text-[#212529]">
                    Fé Pública & Segurança Jurídica
                  </h4>
                  <p className="text-xs text-[#4A4A4A] max-w-xs leading-relaxed">
                    Comarca de Lorena · Oficial: <strong>{CARTORIO_INFO.oficialResponsavel}</strong>. Fiscalizado pela Corregedoria Geral da Justiça do TJSP.
                  </p>
                </div>

                {/* Quick Service Status Pill */}
                <div className="w-full pt-3 border-t border-stone-100 flex items-center justify-between text-xs">
                  <span className="text-stone-500">Expediente Hoje:</span>
                  <span className="font-semibold flex items-center gap-1.5 text-stone-800">
                    <span
                      className={`w-2 h-2 rounded-full ${
                        isCurrentlyOpen ? 'bg-emerald-500 animate-pulse' : 'bg-amber-500'
                      }`}
                    ></span>
                    {isCurrentlyOpen ? 'Aberto (Atendimento até 17h)' : 'Fechado (Plantão Ativo)'}
                  </span>
                </div>
              </div>

              {/* Fast Actions Footer */}
              <div className="pt-4 border-t border-stone-200 grid grid-cols-2 gap-2 text-center text-xs">
                <a
                  href="#servicos"
                  className="py-2 px-3 bg-[#F4F5F7] text-[#4A4A4A] hover:text-[#A63D5C] hover:bg-stone-200 rounded-sm font-medium transition-colors"
                >
                  Ver Todos os Serviços
                </a>
                <a
                  href="#emolumentos"
                  className="py-2 px-3 bg-[#F4F5F7] text-[#4A4A4A] hover:text-[#A63D5C] hover:bg-stone-200 rounded-sm font-medium transition-colors"
                >
                  Consultar Tabela TJSP
                </a>
              </div>

            </div>
          </div>

        </div>

        {/* Operational Utility Ribbon (Pattern A from Institutional Design) */}
        <div className="mt-12 bg-white border border-stone-200 rounded-sm shadow-xs p-4 sm:p-5">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 divide-y md:divide-y-0 md:divide-x divide-stone-200">
            
            {/* Block 1: Horário de Expediente */}
            <div className="flex items-start gap-3 pt-2 md:pt-0">
              <Clock className="w-5 h-5 text-[#A63D5C] shrink-0 mt-0.5" />
              <div>
                <p className="text-xs uppercase tracking-wider text-stone-500 font-semibold">
                  Atendimento Geral
                </p>
                <p className="text-sm font-semibold text-[#212529] mt-0.5">
                  Segunda a Sexta · 09h às 17h
                </p>
                <p className="text-xs text-[#4A4A4A]">Sem fechamento para almoço</p>
              </div>
            </div>

            {/* Block 2: Plantão Ininterrupto */}
            <div className="flex items-start gap-3 pt-3 md:pt-0 md:pl-4">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 shrink-0 mt-1.5 animate-pulse"></div>
              <div>
                <p className="text-xs uppercase tracking-wider text-stone-500 font-semibold">
                  Plantão de Óbito
                </p>
                <p className="text-sm font-semibold text-[#212529] mt-0.5">
                  Sáb, Dom e Feriados · 08h às 17h
                </p>
                <p className="text-xs text-[#4A4A4A]">Plantão: {CARTORIO_INFO.telefonePlantao}</p>
              </div>
            </div>

            {/* Block 3: Localização Central */}
            <div className="flex items-start gap-3 pt-3 md:pt-0 md:pl-4">
              <MapPin className="w-5 h-5 text-[#A63D5C] shrink-0 mt-0.5" />
              <div>
                <p className="text-xs uppercase tracking-wider text-stone-500 font-semibold">
                  Sede em Lorena - SP
                </p>
                <p className="text-sm font-semibold text-[#212529] mt-0.5 truncate" title={CARTORIO_INFO.endereco}>
                  {CARTORIO_INFO.endereco}
                </p>
                <p className="text-xs text-[#4A4A4A]">{CARTORIO_INFO.bairro} · Rampa acessível PcD</p>
              </div>
            </div>

            {/* Block 4: Provimento CNJ nº 213 */}
            <div className="flex items-start gap-3 pt-3 md:pt-0 md:pl-4">
              <ShieldCheck className="w-5 h-5 text-[#E2B659] shrink-0 mt-0.5" />
              <div>
                <p className="text-xs uppercase tracking-wider text-stone-500 font-semibold">
                  Conformidade Normativa
                </p>
                <p className="text-sm font-semibold text-[#212529] mt-0.5">
                  Provimento 213/CNJ & LGPD
                </p>
                <p className="text-xs text-[#4A4A4A]">Tabela clara e canal do DPO</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
