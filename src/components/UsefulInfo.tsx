import React, { useState, useMemo } from 'react';
import { 
  Clock, 
  CalendarClock, 
  HelpCircle, 
  Search, 
  Calculator, 
  AlertCircle, 
  CheckCircle, 
  FileSpreadsheet,
  Info,
  DollarSign
} from 'lucide-react';
import { EMOLUMENTS_TABLE, CARTORIO_INFO } from '../data/cartorioData';
import { EmolumentItem } from '../types/cartorio';

export const UsefulInfo: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');
  
  // Interactive Simulator state
  const [selectedSimServiceId, setSelectedSimServiceId] = useState<string>('emol-1');
  const [quantity, setQuantity] = useState<number>(1);
  const [isLowIncomeExempt, setIsLowIncomeExempt] = useState<boolean>(false);

  // Filtered emoluments table
  const filteredEmoluments = useMemo(() => {
    return EMOLUMENTS_TABLE.filter((item) => {
      const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
      const matchesSearch = 
        item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.code.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchTerm]);

  // Selected item for the simulator
  const currentSimItem = useMemo(() => {
    return EMOLUMENTS_TABLE.find(item => item.id === selectedSimServiceId) || EMOLUMENTS_TABLE[0];
  }, [selectedSimServiceId]);

  // Computed simulation
  const simulationResult = useMemo(() => {
    if (isLowIncomeExempt && (currentSimItem.category === 'casamento' || currentSimItem.totalFee === 0)) {
      return {
        unitFee: 0,
        total: 0,
        isFree: true,
        note: "Isenção total concedida por lei para pessoas comprovadamente hipossuficientes (Art. 1.512 do Código Civil / Lei nº 9.534/97)."
      };
    }

    const total = currentSimItem.totalFee * quantity;
    return {
      unitFee: currentSimItem.totalFee,
      total: total,
      isFree: currentSimItem.totalFee === 0,
      note: currentSimItem.legalNote
    };
  }, [currentSimItem, quantity, isLowIncomeExempt]);

  return (
    <section id="informacoes" className="py-16 sm:py-24 bg-[#F4F5F7] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-16">
        
        {/* Section 4.A: Horários & Prazos Legais */}
        <div>
          <div className="mb-10 text-center max-w-3xl mx-auto">
            <span className="text-xs uppercase tracking-widest font-semibold text-[#A63D5C] block mb-2">
              Transparência & Eficiência
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#212529] tracking-tight">
              Informações Úteis, Horários e Prazos
            </h2>
            <p className="text-sm sm:text-base text-[#4A4A4A] mt-2">
              Todos os prazos praticados seguem a Lei de Registros Públicos (Lei nº 6.015/73) e os Provimentos do Conselho Nacional de Justiça.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            
            {/* Card 1: Horários de Atendimento */}
            <div className="bg-white border border-stone-200 rounded-sm p-6 sm:p-7 shadow-xs">
              <div className="w-10 h-10 rounded-sm bg-[#A63D5C]/10 text-[#A63D5C] flex items-center justify-center mb-4">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#212529] mb-3">
                Horário de Atendimento
              </h3>
              <ul className="space-y-3 text-xs sm:text-sm text-[#4A4A4A]">
                <li className="pb-2 border-b border-stone-100 flex justify-between">
                  <span className="font-medium text-[#212529]">Segunda a Sexta:</span>
                  <span className="font-semibold text-stone-700">09:00 às 17:00</span>
                </li>
                <li className="pb-2 border-b border-stone-100 flex justify-between">
                  <span className="font-medium text-[#212529]">Intervalo de almoço:</span>
                  <span className="text-emerald-700 font-semibold">Sem interrupção</span>
                </li>
                <li className="pb-2 border-b border-stone-100 flex justify-between">
                  <span className="font-medium text-[#212529]">Plantão de Óbito:</span>
                  <span className="font-semibold text-[#A63D5C]">Sáb, Dom e Feriados</span>
                </li>
                <li className="text-xs text-stone-500 pt-1">
                  Atendimento prioritário para idosos (80+ e 60+), gestantes, lactantes e pessoas com deficiência física ou mobilidade reduzida garantido por lei.
                </li>
              </ul>
            </div>

            {/* Card 2: Prazos Legais de Entrega */}
            <div className="bg-white border border-stone-200 rounded-sm p-6 sm:p-7 shadow-xs">
              <div className="w-10 h-10 rounded-sm bg-[#A63D5C]/10 text-[#A63D5C] flex items-center justify-center mb-4">
                <CalendarClock className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#212529] mb-3">
                Prazos Oficiais de Entrega
              </h3>
              <ul className="space-y-3 text-xs sm:text-sm text-[#4A4A4A]">
                <li className="pb-2 border-b border-stone-100 flex justify-between">
                  <span className="font-medium text-[#212529]">Certidão Presencial:</span>
                  <span className="font-semibold text-stone-700">Imediato a até 24h</span>
                </li>
                <li className="pb-2 border-b border-stone-100 flex justify-between">
                  <span className="font-medium text-[#212529]">Certidão Eletrônica (CRC):</span>
                  <span className="font-semibold text-stone-700">Até 5 dias úteis</span>
                </li>
                <li className="pb-2 border-b border-stone-100 flex justify-between">
                  <span className="font-medium text-[#212529]">Habilitação de Casamento:</span>
                  <span className="font-semibold text-stone-700">15 a 30 dias</span>
                </li>
                <li className="text-xs text-stone-500 pt-1">
                  Casos urgentes (internação hospitalar, viagens inadiáveis ou sepultamento) contam com procedimento emergencial mediante comprovação.
                </li>
              </ul>
            </div>

            {/* Card 3: Gratuidades Constitucionais */}
            <div className="bg-white border border-stone-200 rounded-sm p-6 sm:p-7 shadow-xs border-l-4 border-l-[#E2B659]">
              <div className="w-10 h-10 rounded-sm bg-[#E2B659]/20 text-[#212529] flex items-center justify-center mb-4">
                <HelpCircle className="w-5 h-5 text-[#A63D5C]" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#212529] mb-3">
                Gratuidade Garantida
              </h3>
              <ul className="space-y-3 text-xs sm:text-sm text-[#4A4A4A]">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>1ª Via de Nascimento e Óbito:</strong> Gratuita para todos os brasileiros, sem necessidade de comprovação de renda.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Casamento Gratuito:</strong> Cidadãos em situação de pobreza declarada têm direito à isenção de emolumentos.</span>
                </li>
                <li className="text-xs text-stone-500 pt-1">
                  Base Legal: Constituição Federal de 1988 (Art. 5º, LXXVI) e Lei Federal nº 9.534/1997.
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* Section 4.B: Tabela Dinâmica de Custas e Emolumentos */}
        <div id="emolumentos" className="bg-white border border-stone-200 rounded-sm p-6 sm:p-8 shadow-xs">
          
          <div className="flex flex-col lg:flex-row lg:items-center justify-between pb-6 border-b border-stone-200 gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs text-[#A63D5C] font-semibold uppercase tracking-wider mb-1">
                <FileSpreadsheet className="w-4 h-4" />
                <span>Tabela Oficial do Estado de São Paulo</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#212529]">
                Tabela de Custas e Emolumentos Básicos
              </h3>
              <p className="text-xs sm:text-sm text-[#4A4A4A] mt-1">
                Valores fixados pelo Tribunal de Justiça de São Paulo (TJSP) com discriminação legal dos repasses aos órgãos públicos (Provimento CNJ nº 213).
              </p>
            </div>

            {/* Search Input */}
            <div className="relative min-w-[260px] sm:min-w-[320px]">
              <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Buscar por ato ou código (ex: certidão, casamento)..."
                className="w-full pl-9 pr-4 py-2 text-xs border border-stone-300 rounded-sm focus:border-[#A63D5C] focus:ring-1 focus:ring-[#A63D5C] outline-none"
              />
            </div>
          </div>

          {/* Filter Categories */}
          <div className="flex flex-wrap items-center gap-2 py-4 border-b border-stone-100 text-xs">
            <span className="text-stone-500 font-medium mr-1">Filtrar Categoria:</span>
            {[
              { id: 'all', label: 'Todas as Custas' },
              { id: 'certidoes', label: 'Certidões' },
              { id: 'casamento', label: 'Casamentos' },
              { id: 'notas', label: 'Firmas & Autenticações' },
              { id: 'outros', label: 'Livro E / Especiais' },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`px-3 py-1.5 rounded-sm transition-colors cursor-pointer ${
                  activeCategory === tab.id
                    ? 'bg-[#A63D5C] text-white font-semibold'
                    : 'bg-[#F4F5F7] text-[#4A4A4A] hover:bg-stone-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Dynamic Table with Tabular Numerals */}
          <div className="overflow-x-auto mt-4">
            <table className="w-full text-left text-xs text-[#212529] border-collapse">
              <thead>
                <tr className="bg-[#F4F5F7] border-b border-stone-200 text-[#4A4A4A] uppercase text-[11px] tracking-wider font-semibold">
                  <th className="py-3 px-3">Código</th>
                  <th className="py-3 px-4">Descrição do Ato Registral / Notarial</th>
                  <th className="py-3 px-3 text-right">Oficial</th>
                  <th className="py-3 px-3 text-right hidden md:table-cell">Estado</th>
                  <th className="py-3 px-3 text-right hidden lg:table-cell">IPESP</th>
                  <th className="py-3 px-3 text-right hidden lg:table-cell">Sinoreg</th>
                  <th className="py-3 px-3 text-right hidden md:table-cell">TJSP</th>
                  <th className="py-3 px-3 text-right hidden lg:table-cell">MP/Santa Casa</th>
                  <th className="py-3 px-4 text-right font-bold text-[#A63D5C]">Total Oficial</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200">
                {filteredEmoluments.length > 0 ? (
                  filteredEmoluments.map((item) => (
                    <tr 
                      key={item.id} 
                      className="hover:bg-[#F4F5F7]/70 transition-colors"
                    >
                      <td className="py-3.5 px-3 font-mono text-stone-500 font-semibold whitespace-nowrap">
                        {item.code}
                      </td>
                      <td className="py-3.5 px-4">
                        <div className="font-medium text-[#212529]">{item.description}</div>
                        {item.isFreeCondition && (
                          <div className="text-[11px] text-emerald-700 font-medium mt-0.5">
                            {item.isFreeCondition}
                          </div>
                        )}
                        <div className="text-[11px] text-stone-400 mt-0.5">
                          {item.legalNote}
                        </div>
                      </td>
                      <td className="py-3.5 px-3 text-right font-mono tabular-nums text-stone-600">
                        {item.officialFee === 0 ? 'Gratuito' : `R$ ${item.officialFee.toFixed(2)}`}
                      </td>
                      <td className="py-3.5 px-3 text-right font-mono tabular-nums text-stone-600 hidden md:table-cell">
                        {item.stateFee === 0 ? '-' : `R$ ${item.stateFee.toFixed(2)}`}
                      </td>
                      <td className="py-3.5 px-3 text-right font-mono tabular-nums text-stone-600 hidden lg:table-cell">
                        {item.ipespFee === 0 ? '-' : `R$ ${item.ipespFee.toFixed(2)}`}
                      </td>
                      <td className="py-3.5 px-3 text-right font-mono tabular-nums text-stone-600 hidden lg:table-cell">
                        {item.sinoregFee === 0 ? '-' : `R$ ${item.sinoregFee.toFixed(2)}`}
                      </td>
                      <td className="py-3.5 px-3 text-right font-mono tabular-nums text-stone-600 hidden md:table-cell">
                        {item.tjFee === 0 ? '-' : `R$ ${item.tjFee.toFixed(2)}`}
                      </td>
                      <td className="py-3.5 px-3 text-right font-mono tabular-nums text-stone-600 hidden lg:table-cell">
                        {item.mpFee === 0 ? '-' : `R$ ${item.mpFee.toFixed(2)}`}
                      </td>
                      <td className="py-3.5 px-4 text-right font-mono tabular-nums font-bold text-[#A63D5C] text-sm whitespace-nowrap">
                        {item.totalFee === 0 ? (
                          <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded text-xs font-semibold">
                            GRATUITO
                          </span>
                        ) : (
                          `R$ ${item.totalFee.toFixed(2)}`
                        )}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={9} className="py-8 text-center text-stone-500">
                      Nenhum ato localizado para a busca "{searchTerm}".
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Legal Note on Emoluments */}
          <div className="mt-4 pt-4 border-t border-stone-200 text-[11px] text-[#4A4A4A] flex items-start gap-2">
            <Info className="w-4 h-4 text-[#A63D5C] shrink-0 mt-0.5" />
            <p>
              <strong>Nota de Transparência (Provimento CNJ nº 213/2024):</strong> Os valores aqui expostos compreendem a parcela dos Oficiais e os repasses tributários e assistenciais obrigatórios: Estado de São Paulo (Lei 11.331/02), Carteira de Previdência das Serventias (IPESP), Fundo Especial do Registro Civil (Sinoreg), Fundo Especial de Despesa do TJSP e repasses ao Ministério Público e Santa Casa de Misericórdia.
            </p>
          </div>

        </div>

        {/* Section 4.C: Simulador Interativo de Custas */}
        <div className="bg-white border border-stone-200 rounded-sm p-6 sm:p-8 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-6 space-y-4">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#A63D5C] uppercase tracking-wider">
                <Calculator className="w-4 h-4" />
                <span>Simulador de Custas ao Cidadão</span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#212529]">
                Calcule o valor exato do seu serviço
              </h3>
              <p className="text-xs sm:text-sm text-[#4A4A4A] leading-relaxed">
                Selecione o ato desejado e a quantidade para calcular o total oficial segundo as normas da Corregedoria Geral da Justiça do TJSP.
              </p>

              {/* Form Controls */}
              <div className="space-y-3 pt-2">
                <div>
                  <label className="block text-xs font-medium text-[#212529] mb-1">
                    Selecione o Serviço Registral / Notarial:
                  </label>
                  <select
                    value={selectedSimServiceId}
                    onChange={(e) => setSelectedSimServiceId(e.target.value)}
                    className="w-full p-2.5 text-xs bg-[#F4F5F7] border border-stone-300 rounded-sm focus:border-[#A63D5C] outline-none"
                  >
                    {EMOLUMENTS_TABLE.map((e) => (
                      <option key={e.id} value={e.id}>
                        {e.code} - {e.description} ({e.totalFee === 0 ? 'Gratuito' : `R$ ${e.totalFee.toFixed(2)}`})
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-[#212529] mb-1">
                      Quantidade de Atos:
                    </label>
                    <input
                      type="number"
                      min={1}
                      max={50}
                      value={quantity}
                      onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                      className="w-full p-2 text-xs bg-[#F4F5F7] border border-stone-300 rounded-sm focus:border-[#A63D5C] outline-none font-mono"
                    />
                  </div>

                  <div className="flex items-center pt-5">
                    <label className="flex items-center gap-2 cursor-pointer text-xs text-[#212529]">
                      <input
                        type="checkbox"
                        checked={isLowIncomeExempt}
                        onChange={(e) => setIsLowIncomeExempt(e.target.checked)}
                        className="rounded text-[#A63D5C] focus:ring-[#A63D5C]"
                      />
                      <span>Declaração de Pobreza (Hipossuficiência)</span>
                    </label>
                  </div>
                </div>
              </div>

            </div>

            {/* Computed Results Card */}
            <div className="lg:col-span-6 bg-[#F4F5F7] border border-stone-200 rounded-sm p-6 sm:p-7">
              <div className="flex justify-between items-start border-b border-stone-200 pb-4">
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-stone-500 font-semibold block">
                    Resumo do Cálculo
                  </span>
                  <h4 className="font-serif text-lg font-bold text-[#212529]">
                    {currentSimItem.description}
                  </h4>
                </div>
                <div className="text-right">
                  <span className="text-xs text-stone-500">Qtd:</span>
                  <span className="ml-1 font-mono font-bold text-xs">{quantity}</span>
                </div>
              </div>

              <div className="py-4 space-y-2 text-xs text-[#4A4A4A] border-b border-stone-200">
                <div className="flex justify-between">
                  <span>Valor Unitário Oficial:</span>
                  <span className="font-mono tabular-nums">
                    {simulationResult.isFree ? 'Gratuito' : `R$ ${currentSimItem.totalFee.toFixed(2)}`}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Repasses Públicos (Estado/TJ/IPESP):</span>
                  <span className="font-mono tabular-nums text-stone-500">
                    {simulationResult.isFree ? 'R$ 0,00' : `Incluso no valor final`}
                  </span>
                </div>
                <div className="flex justify-between font-semibold text-[#212529]">
                  <span>Formas de Pagamento no Cartório:</span>
                  <span className="text-stone-700">Pix, Cartão de Débito, Boleto Oficial ou Espécie</span>
                </div>
              </div>

              <div className="pt-4 flex items-center justify-between">
                <div>
                  <span className="text-xs text-stone-500 block">Total a Pagar:</span>
                  <span className="text-2xl sm:text-3xl font-serif font-bold text-[#A63D5C] tabular-nums">
                    {simulationResult.isFree ? 'R$ 0,00' : `R$ ${simulationResult.total.toFixed(2)}`}
                  </span>
                </div>

                <a
                  href="#contato"
                  className="px-4 py-2.5 bg-[#A63D5C] text-white hover:bg-[#872e47] text-xs font-semibold rounded-sm transition-colors"
                >
                  Confirmar no Balcão
                </a>
              </div>

              {simulationResult.isFree && (
                <div className="mt-3 p-2 bg-emerald-50 text-emerald-800 text-xs rounded border border-emerald-200 flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 shrink-0" />
                  <span>{simulationResult.note}</span>
                </div>
              )}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
