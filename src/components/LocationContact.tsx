import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  MessageSquare, 
  Send, 
  Navigation, 
  Clock, 
  CheckCircle,
  ExternalLink,
  ShieldAlert
} from 'lucide-react';
import { CARTORIO_INFO } from '../data/cartorioData';

export const LocationContact: React.FC = () => {
  const [formType, setFormType] = useState<'duvida' | 'ouvidoria' | 'lgpd'>('duvida');
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    assunto: '',
    mensagem: '',
  });
  const [submittedProtocol, setSubmittedProtocol] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.nome || !formData.email || !formData.mensagem) {
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      const year = new Date().getFullYear();
      const randomNum = Math.floor(100000 + Math.random() * 900000);
      const protocol = `RCPN-LRN-${year}-${randomNum}`;
      setSubmittedProtocol(protocol);
      setIsSubmitting(false);
    }, 600);
  };

  const handleResetForm = () => {
    setSubmittedProtocol(null);
    setFormData({
      nome: '',
      email: '',
      telefone: '',
      assunto: '',
      mensagem: '',
    });
  };

  return (
    <section id="contato" className="py-16 sm:py-24 bg-[#F4F5F7] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs uppercase tracking-widest font-semibold text-[#A63D5C] block mb-2">
            Atendimento Cidadão & Ouvidoria
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#212529] tracking-tight">
            Localização e Canais de Contato
          </h2>
          <p className="text-sm sm:text-base text-[#4A4A4A] mt-2">
            Estamos situados no coração de Lorena - SP, com instalações totalmente adaptadas para acessibilidade, atendimento ágil e canais digitais dedicados.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Address, Map Placeholder & Direct Links (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Physical Address Card */}
            <div className="bg-white border border-stone-200 rounded-sm p-6 sm:p-7 shadow-xs space-y-4">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-sm bg-[#A63D5C]/10 text-[#A63D5C] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-[#212529]">
                    Sede Oficial do Cartório
                  </h3>
                  <p className="text-sm text-[#212529] font-medium mt-1">
                    {CARTORIO_INFO.endereco}
                  </p>
                  <p className="text-xs text-[#4A4A4A]">
                    {CARTORIO_INFO.bairro} · {CARTORIO_INFO.cidade} - {CARTORIO_INFO.uf} · CEP: {CARTORIO_INFO.cep}
                  </p>
                  <p className="text-xs text-stone-500 mt-1">
                    <strong>Ponto de referência:</strong> {CARTORIO_INFO.pontoReferencia}
                  </p>
                </div>
              </div>

              {/* Direct Route / Navigation Affordances */}
              <div className="pt-3 border-t border-stone-100 flex flex-wrap gap-2 text-xs">
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(
                    `${CARTORIO_INFO.endereco}, ${CARTORIO_INFO.cidade} - ${CARTORIO_INFO.uf}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-2 bg-[#F4F5F7] hover:bg-stone-200 text-[#212529] font-medium rounded-sm transition-colors flex items-center gap-1.5"
                >
                  <Navigation className="w-3.5 h-3.5 text-[#A63D5C]" />
                  <span>Traçar Rota no Google Maps</span>
                </a>

                <a
                  href={`https://waze.com/ul?q=${encodeURIComponent(
                    `${CARTORIO_INFO.endereco}, ${CARTORIO_INFO.cidade}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-2 bg-[#F4F5F7] hover:bg-stone-200 text-[#212529] font-medium rounded-sm transition-colors flex items-center gap-1.5"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-[#4A4A4A]" />
                  <span>Abrir no Waze</span>
                </a>
              </div>
            </div>

            {/* Direct Contact Numbers & Official Email */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              
              <div className="bg-white border border-stone-200 rounded-sm p-3.5 shadow-xs">
                <div className="flex items-center gap-2 text-xs text-[#4A4A4A] mb-1">
                  <Phone className="w-3.5 h-3.5 text-[#A63D5C]" />
                  <span className="font-semibold">Telefone Geral</span>
                </div>
                <a
                  href={`tel:${CARTORIO_INFO.telefone.replace(/\D/g, '')}`}
                  className="font-mono text-sm font-bold text-[#212529] hover:text-[#A63D5C] transition-colors block"
                >
                  {CARTORIO_INFO.telefone}
                </a>
                <p className="text-[10px] text-stone-500 mt-0.5">Seg a Sex · 09h às 17h</p>
              </div>

              <div className="bg-white border border-stone-200 rounded-sm p-3.5 shadow-xs">
                <div className="flex items-center gap-2 text-xs text-[#4A4A4A] mb-1">
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="font-semibold">WhatsApp</span>
                </div>
                <a
                  href={`https://wa.me/55${CARTORIO_INFO.whatsapp.replace(/\D/g, '')}?text=Ola,%20gostaria%20de%20tirar%20uma%20duvida%20sobre%20o%20cartorio`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-sm font-bold text-emerald-700 hover:underline transition-colors block"
                >
                  {CARTORIO_INFO.whatsapp}
                </a>
                <p className="text-[10px] text-stone-500 mt-0.5">Atendimento Rápido</p>
              </div>

              <div className="bg-white border border-stone-200 rounded-sm p-3.5 shadow-xs">
                <div className="flex items-center gap-2 text-xs text-[#4A4A4A] mb-1">
                  <Mail className="w-3.5 h-3.5 text-[#A63D5C]" />
                  <span className="font-semibold">E-mail Oficial</span>
                </div>
                <a
                  href={`mailto:${CARTORIO_INFO.emailOficial}`}
                  className="text-xs font-semibold text-[#212529] hover:text-[#A63D5C] transition-colors truncate block"
                  title={CARTORIO_INFO.emailOficial}
                >
                  {CARTORIO_INFO.emailOficial}
                </a>
                <p className="text-[10px] text-stone-500 mt-0.5">Canal Institucional</p>
              </div>

            </div>

            {/* Stylized Integrated Map Card (Zero-Broken-Image Policy compliant vector map representation) */}
            <div className="bg-white border border-stone-200 rounded-sm overflow-hidden shadow-xs relative">
              <div className="p-3 bg-[#212529] text-white flex items-center justify-between text-xs">
                <span className="font-medium flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#E2B659]" />
                  Cartografia Oficial · Centro de Lorena - SP
                </span>
                <span className="text-stone-400 font-mono text-[10px]">
                  Coord: -22.7328, -45.1205
                </span>
              </div>

              {/* Vector Stylized Map Canvas */}
              <div className="h-56 bg-stone-100 relative overflow-hidden flex items-center justify-center">
                {/* Street Grid SVG Pattern */}
                <svg className="absolute inset-0 w-full h-full opacity-60" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="street-grid" width="60" height="60" patternUnits="userSpaceOnUse">
                      <rect width="60" height="60" fill="#f8f9fa" />
                      <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#e5e7eb" strokeWidth="2" />
                      <line x1="30" y1="0" x2="30" y2="60" stroke="#f1f5f9" strokeWidth="1" strokeDasharray="2 2" />
                      <line x1="0" y1="30" x2="60" y2="30" stroke="#f1f5f9" strokeWidth="1" strokeDasharray="2 2" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#street-grid)" />
                  {/* Main Avenues */}
                  <line x1="0" y1="110" x2="600" y2="110" stroke="#cbd5e1" strokeWidth="8" />
                  <line x1="280" y1="0" x2="280" y2="300" stroke="#cbd5e1" strokeWidth="8" />
                  <line x1="140" y1="0" x2="420" y2="300" stroke="#e2e8f0" strokeWidth="4" />
                </svg>

                {/* Central Landmark Marker */}
                <div className="relative z-10 flex flex-col items-center">
                  <div className="animate-bounce">
                    <div className="w-10 h-10 rounded-full bg-[#A63D5C] text-white flex items-center justify-center shadow-lg border-2 border-white">
                      <MapPin className="w-5 h-5 text-[#E2B659]" />
                    </div>
                  </div>
                  <div className="bg-white/95 backdrop-blur-xs border border-stone-300 rounded px-2.5 py-1 text-center shadow-sm mt-1 max-w-[280px]">
                    <span className="font-serif font-bold text-xs text-[#212529] block">
                      Registro Civil de Lorena
                    </span>
                    <span className="text-[10px] text-stone-600 block truncate" title={CARTORIO_INFO.endereco}>
                      {CARTORIO_INFO.endereco}
                    </span>
                  </div>
                </div>

                {/* Map Control overlay */}
                <div className="absolute bottom-2 right-2 z-10">
                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(
                      `${CARTORIO_INFO.endereco}, ${CARTORIO_INFO.cidade} - ${CARTORIO_INFO.uf}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-2.5 py-1 bg-white/90 hover:bg-white text-[11px] font-semibold text-[#A63D5C] rounded border border-stone-200 shadow-xs flex items-center gap-1"
                  >
                    <span>Expandir Mapa</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Contact & Ouvidoria Form (6 cols) */}
          <div className="lg:col-span-6 bg-white border border-stone-200 rounded-sm p-6 sm:p-8 shadow-xs">
            
            <div className="mb-6">
              <span className="text-xs uppercase tracking-wider text-stone-500 font-semibold block mb-1">
                Fale com a Serventia
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#212529]">
                Formulário de Atendimento e Ouvidoria
              </h3>
              <p className="text-xs text-[#4A4A4A] mt-1">
                Envie suas dúvidas, requerimentos iniciais ou manifestações formais para a equipe do cartório.
              </p>
            </div>

            {/* Segmented Form Tabs */}
            <div className="flex border-b border-stone-200 mb-6 text-xs font-medium">
              <button
                type="button"
                onClick={() => setFormType('duvida')}
                className={`pb-3 px-3 border-b-2 transition-colors cursor-pointer ${
                  formType === 'duvida'
                    ? 'border-[#A63D5C] text-[#A63D5C] font-semibold'
                    : 'border-transparent text-stone-500 hover:text-[#212529]'
                }`}
              >
                Dúvidas & Certidões
              </button>
              <button
                type="button"
                onClick={() => setFormType('ouvidoria')}
                className={`pb-3 px-3 border-b-2 transition-colors cursor-pointer ${
                  formType === 'ouvidoria'
                    ? 'border-[#A63D5C] text-[#A63D5C] font-semibold'
                    : 'border-transparent text-stone-500 hover:text-[#212529]'
                }`}
              >
                Ouvidoria / Elogio
              </button>
              <button
                type="button"
                onClick={() => setFormType('lgpd')}
                className={`pb-3 px-3 border-b-2 transition-colors cursor-pointer ${
                  formType === 'lgpd'
                    ? 'border-[#A63D5C] text-[#A63D5C] font-semibold'
                    : 'border-transparent text-stone-500 hover:text-[#212529]'
                }`}
              >
                Requisição LGPD
              </button>
            </div>

            {submittedProtocol ? (
              /* Success confirmation state */
              <div className="py-8 text-center space-y-4 bg-[#F4F5F7] p-6 rounded-sm border border-stone-200">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <h4 className="font-serif text-xl font-bold text-[#212529]">
                  Mensagem Enviada com Sucesso
                </h4>
                <p className="text-xs text-[#4A4A4A] max-w-md mx-auto">
                  Sua manifestação foi registrada no sistema interno de protocolo do Registro Civil de Lorena. Nossa equipe retornará no prazo de até 2 dias úteis.
                </p>
                <div className="p-3 bg-white rounded border border-stone-300 font-mono text-xs text-[#212529] font-bold inline-block">
                  Número de Protocolo: {submittedProtocol}
                </div>
                <div className="pt-2">
                  <button
                    onClick={handleResetForm}
                    className="text-xs text-[#A63D5C] hover:underline font-semibold"
                  >
                    Enviar nova mensagem
                  </button>
                </div>
              </div>
            ) : (
              /* The Form */
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-medium text-[#212529] mb-1">
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.nome}
                      onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                      placeholder="Ex: Carlos Eduardo de Oliveira"
                      className="w-full p-2.5 bg-[#F4F5F7] border border-stone-300 rounded-sm focus:border-[#A63D5C] focus:bg-white outline-none"
                    />
                  </div>

                  <div>
                    <label className="block font-medium text-[#212529] mb-1">
                      E-mail para Resposta *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="seu.email@exemplo.com"
                      className="w-full p-2.5 bg-[#F4F5F7] border border-stone-300 rounded-sm focus:border-[#A63D5C] focus:bg-white outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-medium text-[#212529] mb-1">
                      Telefone / WhatsApp
                    </label>
                    <input
                      type="tel"
                      value={formData.telefone}
                      onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                      placeholder="(12) 90000-0000"
                      className="w-full p-2.5 bg-[#F4F5F7] border border-stone-300 rounded-sm focus:border-[#A63D5C] focus:bg-white outline-none"
                    />
                  </div>

                  <div>
                    <label className="block font-medium text-[#212529] mb-1">
                      Assunto da Solicitação
                    </label>
                    <select
                      value={formData.assunto}
                      onChange={(e) => setFormData({ ...formData, assunto: e.target.value })}
                      className="w-full p-2.5 bg-[#F4F5F7] border border-stone-300 rounded-sm focus:border-[#A63D5C] focus:bg-white outline-none"
                    >
                      <option value="">Selecione um assunto...</option>
                      <option value="certidao">2ª Via de Certidão (Nasc/Cas/Óbito)</option>
                      <option value="casamento">Documentos para Casamento Civil</option>
                      <option value="nascimento">Registro de Recém-nascido</option>
                      <option value="firma">Reconhecimento de Firma e Procuração</option>
                      <option value="elogio">Elogio ao Atendimento</option>
                      <option value="reclamacao">Reclamação ou Sugestão de Melhoria</option>
                      <option value="lgpd">Exclusão ou Acesso a Dados (LGPD)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block font-medium text-[#212529] mb-1">
                    Mensagem / Descrição do Requerimento *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.mensagem}
                    onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                    placeholder="Descreva aqui sua dúvida detalhadamente. Se for sobre uma certidão, informe se possível nome completo dos registrados e ano aproximado..."
                    className="w-full p-2.5 bg-[#F4F5F7] border border-stone-300 rounded-sm focus:border-[#A63D5C] focus:bg-white outline-none resize-none"
                  ></textarea>
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <span className="text-[11px] text-stone-500">
                    * Seus dados são protegidos conforme a LGPD.
                  </span>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-6 py-2.5 bg-[#A63D5C] hover:bg-[#872e47] text-white font-semibold rounded-sm transition-colors flex items-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Enviando...</span>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5 text-[#E2B659]" />
                        <span>Enviar Mensagem</span>
                      </>
                    )}
                  </button>
                </div>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
