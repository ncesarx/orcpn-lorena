import React from 'react';
import { Shield, ExternalLink, Award, FileText } from 'lucide-react';
import { CARTORIO_INFO } from '../data/cartorioData';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#212529] text-stone-300 text-xs border-t-4 border-[#A63D5C]">
      
      {/* Upper Footer: Official Entities & Institutional Identity */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Column 1: Institutional Identification (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 border border-stone-700 bg-white flex items-center justify-center rounded-sm shrink-0 overflow-hidden p-0.5 shadow-xs">
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
                <h3 className="font-serif font-bold text-base text-white leading-tight">
                  Registro Civil de Lorena - SP
                </h3>
                <p className="text-[11px] text-stone-400">
                  Pessoas Naturais e Interdições e Tutelas
                </p>
              </div>
            </div>

            <p className="text-stone-400 text-xs leading-relaxed">
              Serventia registral delegada do Poder Judiciário do Estado de São Paulo. Prestação de serviço público com eficiência, dignidade, fé pública e segurança jurídica aos cidadãos de Lorena e região.
            </p>

            <div className="pt-2 border-t border-stone-800 text-[11px] space-y-1 text-stone-400">
              <p>
                <strong className="text-stone-300">Oficial Titular:</strong> {CARTORIO_INFO.oficialResponsavel}
              </p>
              <p>
                <strong className="text-stone-300">Oficial Substituta:</strong> {CARTORIO_INFO.substituto}
              </p>
              <p>
                <strong className="text-stone-300">CNS (CNJ):</strong> {CARTORIO_INFO.cns} · <strong className="text-stone-300">CNPJ:</strong> {CARTORIO_INFO.cnpj}
              </p>
              <p>
                <strong className="text-stone-300">Endereço:</strong> {CARTORIO_INFO.endereco}, {CARTORIO_INFO.bairro}, Lorena - SP
              </p>
              <p>
                <strong className="text-stone-300">E-mail:</strong>{' '}
                <a href={`mailto:${CARTORIO_INFO.emailOficial}`} className="hover:text-[#E2B659] transition-colors">
                  {CARTORIO_INFO.emailOficial}
                </a>
              </p>
            </div>
          </div>

          {/* Column 2: Quick Links & Serventias (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif font-semibold text-sm text-[#E2B659] uppercase tracking-wider">
              Acesso Rápido
            </h4>
            <ul className="space-y-2 text-stone-400">
              <li>
                <a href="#inicio" className="hover:text-white transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-white transition-colors">
                  Serviços e Documentos
                </a>
              </li>
              <li>
                <a href="#informacoes" className="hover:text-white transition-colors">
                  Horários e Prazos de Entrega
                </a>
              </li>
              <li>
                <a href="#emolumentos" className="hover:text-white transition-colors">
                  Tabela Oficial de Custas TJSP
                </a>
              </li>
              <li>
                <a href="#provimento-213" className="hover:text-white transition-colors">
                  Conformidade Provimento CNJ nº 213
                </a>
              </li>
              <li>
                <a href="#contato" className="hover:text-white transition-colors">
                  Localização e Ouvidoria
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Legal & Regulatory Framework (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif font-semibold text-sm text-[#E2B659] uppercase tracking-wider">
              Governança & Links Oficiais
            </h4>
            <ul className="space-y-2 text-stone-400">
              <li>
                <a
                  href="https://www.tjsp.jus.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <span>Tribunal de Justiça de SP (TJSP)</span>
                  <ExternalLink className="w-3 h-3 text-stone-500" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.cnj.jus.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <span>Conselho Nacional de Justiça (CNJ)</span>
                  <ExternalLink className="w-3 h-3 text-stone-500" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.registrocivil.org.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <span>CRC Nacional (Registro Civil)</span>
                  <ExternalLink className="w-3 h-3 text-stone-500" />
                </a>
              </li>
              <li>
                <a
                  href="https://arpen-sp.org.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <span>ARPEN-SP (Associação dos Registradores)</span>
                  <ExternalLink className="w-3 h-3 text-stone-500" />
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CARTORIO_INFO.emailLGPD}`}
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <span>Canal do Encarregado LGPD (DPO)</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Sede & Plantão (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-serif font-semibold text-sm text-[#E2B659] uppercase tracking-wider">
              Plantão Noturno
            </h4>
            <p className="text-stone-400 leading-relaxed text-xs">
              Para óbitos em fins de semana e feriados:
            </p>
            <div className="p-2.5 bg-stone-900 border border-stone-800 rounded-sm">
              <span className="text-[10px] text-stone-400 uppercase tracking-wider block">Telefone 24h</span>
              <a
                href={`tel:${CARTORIO_INFO.telefonePlantao.replace(/\D/g, '')}`}
                className="text-white font-mono font-bold text-xs hover:text-[#E2B659]"
              >
                {CARTORIO_INFO.telefonePlantao}
              </a>
            </div>
            <p className="text-[11px] text-stone-500">
              Juízo Corregedor Permanente: 1ª Vara Cível da Comarca de Lorena.
            </p>
          </div>

        </div>
      </div>

      {/* Lower Footer: Copyright, Transparency & Legal Declarations */}
      <div className="bg-[#181a1d] py-6 px-4 sm:px-8 border-t border-stone-800 text-[11px] text-stone-500">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p>
              © {currentYear} Registro Civil das Pessoas Naturais de Lorena - SP. Todos os direitos reservados.
            </p>
            <p className="text-stone-600 mt-0.5">
              Portal institucional desenvolvido em rigorosa conformidade com o Provimento CNJ nº 213, Lei nº 6.015/73 e LGPD (Lei nº 13.709/18).
            </p>
          </div>

          <div className="flex items-center gap-4 text-stone-400">
            <span className="text-stone-500">Acessibilidade WCAG AA</span>
            <span>·</span>
            <span className="text-stone-500">Selo Digital TJSP</span>
            <span>·</span>
            <span className="text-[#E2B659] font-medium">Lorena - SP</span>
          </div>
        </div>
      </div>

    </footer>
  );
};
