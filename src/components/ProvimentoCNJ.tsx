import React from 'react';
import { 
  ShieldCheck, 
  Lock, 
  UserCheck, 
  Globe2, 
  ExternalLink, 
  FileLock2, 
  HeartHandshake, 
  Award 
} from 'lucide-react';
import { CARTORIO_INFO, CNJ_PROVIMENTO_213_ITEMS } from '../data/cartorioData';

export const ProvimentoCNJ: React.FC = () => {
  return (
    <section id="provimento-213" className="py-16 sm:py-24 bg-[#FFFFFF] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#A63D5C] uppercase tracking-wider mb-2">
            <Award className="w-4 h-4 text-[#E2B659]" />
            <span>Governança Registral & Fiscalização do Judiciário</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#212529] tracking-tight">
            Conformidade com o Provimento CNJ nº 213
          </h2>
          <p className="text-sm sm:text-base text-[#4A4A4A] mt-2.5 leading-relaxed">
            O Registro Civil das Pessoas Naturais de Lorena atua sob rigoroso cumprimento dos Provimentos da Corregedoria Nacional de Justiça e das Normas da Corregedoria Geral da Justiça do Tribunal de Justiça de São Paulo (CGJ/TJSP).
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CNJ_PROVIMENTO_213_ITEMS.map((item, index) => (
            <div
              key={index}
              className="bg-[#F4F5F7] border border-stone-200 rounded-sm p-6 flex flex-col justify-between hover:border-[#A63D5C] transition-colors"
            >
              <div>
                <div className="w-10 h-10 rounded-sm bg-white border border-stone-200 text-[#A63D5C] flex items-center justify-center mb-4">
                  {index === 0 && <ShieldCheck className="w-5 h-5" />}
                  {index === 1 && <Lock className="w-5 h-5" />}
                  {index === 2 && <UserCheck className="w-5 h-5" />}
                  {index === 3 && <Globe2 className="w-5 h-5" />}
                </div>

                <h3 className="font-serif text-lg font-bold text-[#212529] leading-snug">
                  {item.title}
                </h3>

                <p className="text-xs text-[#4A4A4A] mt-2.5 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-stone-200 text-[11px] font-mono text-stone-500">
                {item.norma}
              </div>
            </div>
          ))}
        </div>

        {/* Highlight Banner: LGPD & Canal do DPO */}
        <div className="mt-12 bg-[#212529] text-white rounded-sm p-6 sm:p-8 relative overflow-hidden">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            
            <div className="lg:col-span-8 space-y-3">
              <div className="flex items-center gap-2 text-[#E2B659] text-xs font-semibold uppercase tracking-wider">
                <FileLock2 className="w-4 h-4" />
                <span>Proteção de Dados & Privacidade (LGPD - Lei 13.709/18)</span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-white">
                Compromisso com a Segurança e o Sigilo dos Seus Dados
              </h3>
              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed max-w-3xl">
                O tratamento de dados pessoais realizado por esta Serventia destina-se estritamente ao cumprimento de obrigações legais impostas pela Lei de Registros Públicos. Adotamos padrões avançados de cibersegurança (Provimento CNJ nº 74/2018), criptografia e controle de acesso restrito.
              </p>
              <div className="flex flex-wrap items-center gap-4 pt-2 text-xs text-stone-400">
                <span><strong>Encarregado (DPO):</strong> Dr. Vinicius M. Ramos</span>
                <span>·</span>
                <span><strong>E-mail Direto:</strong> {CARTORIO_INFO.emailLGPD}</span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
              <a
                href={`mailto:${CARTORIO_INFO.emailLGPD}?subject=Requisicao%20Titular%20LGPD%20-%20Registro%20Civil%20Lorena`}
                className="px-4 py-2.5 text-xs font-semibold text-center text-[#212529] bg-[#E2B659] hover:bg-[#cba043] rounded-sm transition-colors whitespace-nowrap"
              >
                Canal do Titular de Dados
              </a>

              <a
                href={CARTORIO_INFO.crcNacionalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 text-xs font-semibold text-center text-white bg-white/10 hover:bg-white/20 border border-white/20 rounded-sm transition-colors flex items-center justify-center gap-2"
              >
                <span>Acessar CRC Nacional</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
