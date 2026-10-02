import React, { useState } from 'react';
import { Phone, Calendar, Menu, X, Eye, Volume2, Type } from 'lucide-react';
import { CARTORIO_INFO } from '../data/cartorioData';

interface HeaderProps {
  onOpenAppointment: () => void;
  onOpenCertificate: () => void;
  fontSize: 'normal' | 'large' | 'xlarge';
  onToggleFontSize: () => void;
  highContrast: boolean;
  onToggleContrast: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenAppointment,
  onOpenCertificate,
  fontSize,
  onToggleFontSize,
  highContrast,
  onToggleContrast,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Skip to main content for accessibility (WCAG AA) */}
      <a
        href="#conteudo-principal"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#A63D5C] focus:text-white focus:rounded focus:shadow-lg focus:outline-none"
      >
        Pular para o conteúdo principal
      </a>

      {/* Accessibility & Institutional Quick Strip */}
      <div className="bg-[#212529] text-stone-200 text-xs py-1.5 px-4 sm:px-8 border-b border-stone-800">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-3">
            <span className="text-[#E2B659] font-medium tracking-wide">
              Comarca de Lorena · SP
            </span>
            <span className="hidden sm:inline text-stone-500">·</span>
            <span className="hidden sm:inline text-stone-300">
              CNS: {CARTORIO_INFO.cns}
            </span>
            <span className="hidden md:inline text-stone-500">·</span>
            <span className="hidden md:inline text-stone-300">
              Provimento CNJ nº 213
            </span>
          </div>

          <div className="flex items-center gap-4 ml-auto">
            {/* Font size toggle */}
            <button
              onClick={onToggleFontSize}
              className="flex items-center gap-1 hover:text-[#E2B659] transition-colors focus-visible:outline-white"
              title="Ajustar tamanho da fonte"
              aria-label="Ajustar tamanho da fonte"
            >
              <Type className="w-3.5 h-3.5" />
              <span>
                Fonte: {fontSize === 'normal' ? 'Padrão' : fontSize === 'large' ? 'Grande (+2)' : 'Máxima (+4)'}
              </span>
            </button>

            {/* High contrast toggle */}
            <button
              onClick={onToggleContrast}
              className="flex items-center gap-1 hover:text-[#E2B659] transition-colors focus-visible:outline-white"
              title="Alternar Alto Contraste"
              aria-label="Alternar Alto Contraste"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>{highContrast ? 'Contraste Normal' : 'Alto Contraste'}</span>
            </button>

            <span className="text-stone-500">·</span>

            {/* Emergency / Duty phone indicator */}
            <a
              href={`tel:${CARTORIO_INFO.telefonePlantao.replace(/\D/g, '')}`}
              className="text-stone-300 hover:text-white transition-colors flex items-center gap-1"
              title="Telefone de Plantão de Óbito"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block animate-pulse"></span>
              <span>Plantão: {CARTORIO_INFO.telefonePlantao}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Header adhering to Top Bar Contract */}
      <header className="sticky top-0 z-40 bg-[#FFFFFF] border-b border-stone-200 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3.5 flex items-center justify-between gap-4">
          
          {/* Zone 1: Single text wordmark with official black & white coat of arms */}
          <a
            href="/"
            className="flex items-center gap-3 text-left group focus-visible:ring-2 focus-visible:ring-[#A63D5C] rounded-sm py-1"
          >
            {/* Official Logo Image from Google Drive */}
            <div className="w-10 h-10 border border-stone-200 bg-white flex items-center justify-center rounded-sm shrink-0 shadow-xs overflow-hidden">
              <img
                src={CARTORIO_INFO.logoUrl}
                alt="Brasão do Registro Civil de Lorena"
                className="w-full h-full object-contain p-0.5"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (target.src !== CARTORIO_INFO.logoFallbackUrl) {
                    target.src = CARTORIO_INFO.logoFallbackUrl;
                  }
                }}
              />
            </div>
            
            <div className="flex flex-col">
              <span className="font-serif font-bold text-lg sm:text-xl text-[#212529] tracking-tight leading-tight group-hover:text-[#A63D5C] transition-colors">
                Registro Civil de Lorena
              </span>
              <span className="text-[11px] uppercase tracking-widest text-[#4A4A4A] font-medium">
                Pessoas Naturais · SP
              </span>
            </div>
          </a>

          {/* Zone 2: 4-6 text navigation links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-medium text-[#4A4A4A]">
            <a
              href="#inicio"
              className="hover:text-[#A63D5C] transition-colors py-1 hover:underline underline-offset-4 decoration-[#E2B659] decoration-2"
            >
              Início
            </a>
            <a
              href="#servicos"
              className="hover:text-[#A63D5C] transition-colors py-1 hover:underline underline-offset-4 decoration-[#E2B659] decoration-2"
            >
              Serviços
            </a>
            <a
              href="#informacoes"
              className="hover:text-[#A63D5C] transition-colors py-1 hover:underline underline-offset-4 decoration-[#E2B659] decoration-2"
            >
              Informações & Prazos
            </a>
            <a
              href="#emolumentos"
              className="hover:text-[#A63D5C] transition-colors py-1 hover:underline underline-offset-4 decoration-[#E2B659] decoration-2"
            >
              Tabela de Custas
            </a>
            <a
              href="#provimento-213"
              className="hover:text-[#A63D5C] transition-colors py-1 hover:underline underline-offset-4 decoration-[#E2B659] decoration-2"
            >
              Provimento CNJ
            </a>
            <a
              href="#contato"
              className="hover:text-[#A63D5C] transition-colors py-1 hover:underline underline-offset-4 decoration-[#E2B659] decoration-2"
            >
              Localização & Contato
            </a>
          </nav>

          {/* Zone 3: 1-2 primary actions */}
          <div className="flex items-center gap-3">
            {/* Prominent Contact Phone */}
            <a
              href={`tel:${CARTORIO_INFO.telefone.replace(/\D/g, '')}`}
              className="hidden sm:flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-[#212529] bg-[#F4F5F7] border border-stone-200 rounded-sm hover:bg-stone-200 transition-colors whitespace-nowrap"
              title="Ligar para o cartório"
            >
              <Phone className="w-3.5 h-3.5 text-[#A63D5C]" />
              <span>{CARTORIO_INFO.telefone}</span>
            </a>

            {/* Primary Action Button */}
            <button
              onClick={onOpenAppointment}
              className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-[#A63D5C] hover:bg-[#872e47] active:bg-[#6e2338] rounded-sm transition-colors shadow-xs whitespace-nowrap"
            >
              <Calendar className="w-3.5 h-3.5 text-[#E2B659]" />
              <span>Agendar</span>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#212529] hover:bg-stone-100 rounded-sm focus-visible:outline-[#A63D5C]"
              aria-label="Abrir Menu de Navegação"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-stone-200 bg-white px-4 py-4 space-y-3 shadow-lg">
            <nav className="flex flex-col space-y-2 text-sm font-medium text-[#4A4A4A]">
              <a
                href="#inicio"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded hover:bg-[#F4F5F7] hover:text-[#A63D5C]"
              >
                Início
              </a>
              <a
                href="#servicos"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded hover:bg-[#F4F5F7] hover:text-[#A63D5C]"
              >
                Serviços Registrais
              </a>
              <a
                href="#informacoes"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded hover:bg-[#F4F5F7] hover:text-[#A63D5C]"
              >
                Informações Úteis & Prazos
              </a>
              <a
                href="#emolumentos"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded hover:bg-[#F4F5F7] hover:text-[#A63D5C]"
              >
                Tabela de Custas & Emolumentos
              </a>
              <a
                href="#provimento-213"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded hover:bg-[#F4F5F7] hover:text-[#A63D5C]"
              >
                Conformidade Provimento CNJ
              </a>
              <a
                href="#contato"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded hover:bg-[#F4F5F7] hover:text-[#A63D5C]"
              >
                Localização & Atendimento
              </a>
            </nav>

            <div className="pt-3 border-t border-stone-100 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCertificate();
                }}
                className="w-full text-center py-2.5 px-4 text-xs font-semibold text-[#212529] bg-[#E2B659] hover:bg-[#cba043] rounded-sm transition-colors"
              >
                Solicitar Certidão Online
              </button>
              <a
                href={`tel:${CARTORIO_INFO.telefone.replace(/\D/g, '')}`}
                className="w-full text-center py-2.5 px-4 text-xs font-semibold text-[#212529] bg-[#F4F5F7] border border-stone-200 rounded-sm"
              >
                Telefone: {CARTORIO_INFO.telefone}
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
