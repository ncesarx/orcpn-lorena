import React, { useState } from 'react';
import { X, ExternalLink, Globe, FileCheck2, Send, CheckCircle, Info, ShieldCheck } from 'lucide-react';
import { CARTORIO_INFO } from '../data/cartorioData';

interface CertificateOnlineModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CertificateOnlineModal: React.FC<CertificateOnlineModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [tab, setTab] = useState<'crc' | 'direto'>('direto');
  const [tipoCertidao, setTipoCertidao] = useState<'nascimento' | 'casamento' | 'obito'>('nascimento');
  const [formato, setFormato] = useState<'breve_relato' | 'inteiro_teor'>('breve_relato');
  const [nomeRegistrado, setNomeRegistrado] = useState('');
  const [dataEvento, setDataEvento] = useState('');
  const [nomeFiliacao, setNomeFiliacao] = useState('');
  const [livroTermo, setLivroTermo] = useState('');
  const [solicitanteNome, setSolicitanteNome] = useState('');
  const [solicitanteEmail, setSolicitanteEmail] = useState('');
  const [solicitanteTelefone, setSolicitanteTelefone] = useState('');
  const [entrega, setEntrega] = useState<'digital' | 'balcao' | 'correios'>('digital');
  
  const [submittedProtocol, setSubmittedProtocol] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nomeRegistrado || !solicitanteNome || !solicitanteTelefone) return;

    const year = new Date().getFullYear();
    const randomProtocol = `CERT-LRN-${year}-${Math.floor(100000 + Math.random() * 900000)}`;
    setSubmittedProtocol(randomProtocol);
  };

  const handleResetAndClose = () => {
    setSubmittedProtocol(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
      <div 
        className="bg-white border border-stone-300 rounded-sm shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        role="dialog"
        aria-modal="true"
        aria-labelledby="cert-title"
      >
        
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-stone-200 bg-[#F4F5F7]">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-sm border border-stone-300 bg-white flex items-center justify-center p-0.5 overflow-hidden shadow-xs">
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
              <h3 id="cert-title" className="font-serif font-bold text-lg text-[#212529]">
                Solicitação de Certidão Online
              </h3>
              <p className="text-[11px] text-[#4A4A4A]">
                Registro Civil de Lorena · Titular: {CARTORIO_INFO.oficialResponsavel}
              </p>
            </div>
          </div>

          <button
            onClick={handleResetAndClose}
            className="p-1.5 text-stone-500 hover:text-[#212529] hover:bg-stone-200 rounded-sm transition-colors cursor-pointer"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Selection */}
        <div className="flex border-b border-stone-200 bg-stone-50 px-6 pt-3 text-xs font-semibold">
          <button
            onClick={() => setTab('direto')}
            className={`pb-3 px-4 border-b-2 transition-colors cursor-pointer ${
              tab === 'direto'
                ? 'border-[#A63D5C] text-[#A63D5C]'
                : 'border-transparent text-stone-500 hover:text-[#212529]'
            }`}
          >
            1. Pedido Direto ao Cartório de Lorena
          </button>
          <button
            onClick={() => setTab('crc')}
            className={`pb-3 px-4 border-b-2 transition-colors cursor-pointer ${
              tab === 'crc'
                ? 'border-[#A63D5C] text-[#A63D5C]'
                : 'border-transparent text-stone-500 hover:text-[#212529]'
            }`}
          >
            2. Via CRC Nacional (registrocivil.org.br)
          </button>
        </div>

        {/* Body */}
        <div className="p-6 text-xs text-[#212529]">
          
          {tab === 'crc' ? (
            /* CRC Nacional Info */
            <div className="space-y-5">
              <div className="p-4 bg-[#F4F5F7] border-l-4 border-[#E2B659] rounded-sm space-y-2">
                <div className="flex items-center gap-2 text-[#A63D5C] font-semibold text-sm">
                  <Globe className="w-4 h-4" />
                  <span>Central Nacional de Informações do Registro Civil</span>
                </div>
                <p className="text-xs text-[#4A4A4A] leading-relaxed">
                  A <strong>CRC Nacional</strong> é o portal unificado oficial instituído pelo CNJ que interliga todos os cartórios de registro civil do Brasil. Através dela, você pode solicitar certidões eletrônicas com assinatura digital ICP-Brasil de qualquer cidade brasileira.
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="font-serif font-bold text-sm text-[#212529]">
                  Vantagens da Solicitação via CRC Nacional:
                </h4>
                <ul className="space-y-2 text-[#4A4A4A]">
                  <li className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Emissão de Certidão Eletrônica em formato PDF com QR Code oficial</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Validade jurídica idêntica à certidão em papel moeda</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Pagamento centralizado via Pix ou cartão pelo próprio sistema</span>
                  </li>
                </ul>
              </div>

              <div className="pt-4 border-t border-stone-200 flex items-center justify-between">
                <span className="text-stone-500">
                  Redirecionamento para o portal oficial credenciado pelo CNJ:
                </span>
                <a
                  href={CARTORIO_INFO.crcNacionalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 bg-[#E2B659] hover:bg-[#cba043] text-[#212529] font-bold rounded-sm transition-colors flex items-center gap-2"
                >
                  <span>Ir para registrocivil.org.br</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ) : (
            /* Direct Order Form */
            submittedProtocol ? (
              <div className="py-6 text-center space-y-4">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-full mx-auto flex items-center justify-center">
                  <CheckCircle className="w-7 h-7" />
                </div>
                <h4 className="font-serif text-2xl font-bold text-[#212529]">
                  Pré-Solicitação de Certidão Registrada!
                </h4>
                <p className="text-xs text-[#4A4A4A] max-w-md mx-auto">
                  Localizaremos o assento nos livros de Lorena. Nosso setor de certidões entrará em contato via WhatsApp/E-mail informando o valor exato dos emolumentos e o Pix oficial do cartório.
                </p>
                <div className="p-3 bg-[#F4F5F7] rounded border border-stone-300 font-mono text-sm text-[#A63D5C] font-bold inline-block">
                  Protocolo: {submittedProtocol}
                </div>
                <div>
                  <button
                    onClick={handleResetAndClose}
                    className="px-6 py-2 bg-[#A63D5C] text-white rounded-sm font-semibold hover:bg-[#872e47]"
                  >
                    Fechar
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Certificate Type */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-medium mb-1">Tipo de Certidão *</label>
                    <select
                      value={tipoCertidao}
                      onChange={(e) => setTipoCertidao(e.target.value as any)}
                      className="w-full p-2 bg-[#F4F5F7] border border-stone-300 rounded-sm focus:border-[#A63D5C] outline-none"
                    >
                      <option value="nascimento">Certidão de Nascimento (Livro A)</option>
                      <option value="casamento">Certidão de Casamento (Livro B)</option>
                      <option value="obito">Certidão de Óbito (Livro C)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-medium mb-1">Formato do Documento *</label>
                    <select
                      value={formato}
                      onChange={(e) => setFormato(e.target.value as any)}
                      className="w-full p-2 bg-[#F4F5F7] border border-stone-300 rounded-sm focus:border-[#A63D5C] outline-none"
                    >
                      <option value="breve_relato">Breve Relato (Padrão para a maioria dos atos)</option>
                      <option value="inteiro_teor">Inteiro Teor (Transcrição integral do livro)</option>
                    </select>
                  </div>
                </div>

                {/* Registry Target Details */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-medium mb-1">Nome Completo da Pessoa Registrada *</label>
                    <input
                      type="text"
                      required
                      value={nomeRegistrado}
                      onChange={(e) => setNomeRegistrado(e.target.value)}
                      placeholder="Nome no momento do registro"
                      className="w-full p-2 bg-[#F4F5F7] border border-stone-300 rounded-sm focus:border-[#A63D5C] outline-none"
                    />
                  </div>

                  <div>
                    <label className="block font-medium mb-1">Data Estimada do Fato (Nasc/Cas/Óbito)</label>
                    <input
                      type="text"
                      value={dataEvento}
                      onChange={(e) => setDataEvento(e.target.value)}
                      placeholder="Ex: 15/04/1988 ou Ano de 1988"
                      className="w-full p-2 bg-[#F4F5F7] border border-stone-300 rounded-sm focus:border-[#A63D5C] outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-medium mb-1">Filiação (Nome do Pai e da Mãe)</label>
                    <input
                      type="text"
                      value={nomeFiliacao}
                      onChange={(e) => setNomeFiliacao(e.target.value)}
                      placeholder="Nomes dos pais para auxílio na busca"
                      className="w-full p-2 bg-[#F4F5F7] border border-stone-300 rounded-sm focus:border-[#A63D5C] outline-none"
                    />
                  </div>

                  <div>
                    <label className="block font-medium mb-1">Livro / Termo / Folha (Se souber)</label>
                    <input
                      type="text"
                      value={livroTermo}
                      onChange={(e) => setLivroTermo(e.target.value)}
                      placeholder="Ex: Livro A-12, Fls. 45, Termo 320"
                      className="w-full p-2 bg-[#F4F5F7] border border-stone-300 rounded-sm focus:border-[#A63D5C] outline-none"
                    />
                  </div>
                </div>

                {/* Requester Details */}
                <div className="pt-3 border-t border-stone-200">
                  <h4 className="font-semibold text-stone-700 mb-2">Dados do Solicitante:</h4>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div>
                      <label className="block font-medium mb-1">Seu Nome Completo *</label>
                      <input
                        type="text"
                        required
                        value={solicitanteNome}
                        onChange={(e) => setSolicitanteNome(e.target.value)}
                        className="w-full p-2 bg-[#F4F5F7] border border-stone-300 rounded-sm focus:border-[#A63D5C] outline-none"
                      />
                    </div>

                    <div>
                      <label className="block font-medium mb-1">WhatsApp para Contato *</label>
                      <input
                        type="tel"
                        required
                        value={solicitanteTelefone}
                        onChange={(e) => setSolicitanteTelefone(e.target.value)}
                        placeholder="(12) 90000-0000"
                        className="w-full p-2 bg-[#F4F5F7] border border-stone-300 rounded-sm focus:border-[#A63D5C] outline-none font-mono"
                      />
                    </div>

                    <div>
                      <label className="block font-medium mb-1">E-mail</label>
                      <input
                        type="email"
                        value={solicitanteEmail}
                        onChange={(e) => setSolicitanteEmail(e.target.value)}
                        placeholder="seu@email.com"
                        className="w-full p-2 bg-[#F4F5F7] border border-stone-300 rounded-sm focus:border-[#A63D5C] outline-none"
                      />
                    </div>
                  </div>
                </div>

                {/* Forma de Entrega */}
                <div>
                  <label className="block font-medium mb-1">Forma de Retirada / Envio:</label>
                  <div className="grid grid-cols-3 gap-2">
                    <label className={`p-2.5 border rounded-sm text-center cursor-pointer transition-colors ${entrega === 'digital' ? 'border-[#A63D5C] bg-[#A63D5C]/5 font-semibold text-[#A63D5C]' : 'border-stone-300'}`}>
                      <input
                        type="radio"
                        name="entrega"
                        checked={entrega === 'digital'}
                        onChange={() => setEntrega('digital')}
                        className="sr-only"
                      />
                      <span>Digital (PDF ICP-Brasil)</span>
                    </label>

                    <label className={`p-2.5 border rounded-sm text-center cursor-pointer transition-colors ${entrega === 'balcao' ? 'border-[#A63D5C] bg-[#A63D5C]/5 font-semibold text-[#A63D5C]' : 'border-stone-300'}`}>
                      <input
                        type="radio"
                        name="entrega"
                        checked={entrega === 'balcao'}
                        onChange={() => setEntrega('balcao')}
                        className="sr-only"
                      />
                      <span>Retirada no Balcão</span>
                    </label>

                    <label className={`p-2.5 border rounded-sm text-center cursor-pointer transition-colors ${entrega === 'correios' ? 'border-[#A63D5C] bg-[#A63D5C]/5 font-semibold text-[#A63D5C]' : 'border-stone-300'}`}>
                      <input
                        type="radio"
                        name="entrega"
                        checked={entrega === 'correios'}
                        onChange={() => setEntrega('correios')}
                        className="sr-only"
                      />
                      <span>Envio Correios (SEDEX)</span>
                    </label>
                  </div>
                </div>

                <div className="pt-3 border-t border-stone-200 flex items-center justify-between">
                  <span className="text-[11px] text-stone-500">
                    Valor estimado: R$ 45,00 (Breve Relato) ou R$ 67,60 (Inteiro Teor)
                  </span>

                  <button
                    type="submit"
                    className="px-6 py-2.5 bg-[#A63D5C] hover:bg-[#872e47] text-white font-semibold rounded-sm transition-colors flex items-center gap-2 cursor-pointer shadow-xs"
                  >
                    <Send className="w-3.5 h-3.5 text-[#E2B659]" />
                    <span>Enviar Pedido de Certidão</span>
                  </button>
                </div>

              </form>
            )
          )}

        </div>

      </div>
    </div>
  );
};
