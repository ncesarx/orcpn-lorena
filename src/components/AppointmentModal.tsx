import React, { useState } from 'react';
import { X, Calendar, Clock, User, Phone, Mail, CheckCircle, Printer, FileText } from 'lucide-react';
import { SERVICES_LIST, CARTORIO_INFO } from '../data/cartorioData';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  preSelectedServiceName?: string;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  preSelectedServiceName,
}) => {
  const [selectedService, setSelectedService] = useState<string>(
    preSelectedServiceName || SERVICES_LIST[0].title
  );
  const [date, setDate] = useState<string>('');
  const [timeSlot, setTimeSlot] = useState<string>('09:30');
  const [fullName, setFullName] = useState<string>('');
  const [cpf, setCpf] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [notes, setNotes] = useState<string>('');

  const [bookingConfirmed, setBookingConfirmed] = useState<{
    protocol: string;
    date: string;
    time: string;
    service: string;
    name: string;
  } | null>(null);

  if (!isOpen) return null;

  // Available business time slots
  const availableSlots = [
    '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
    '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30'
  ];

  // Calculate minimum selectable date (tomorrow)
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDateStr = tomorrow.toISOString().split('T')[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !cpf || !phone || !date || !timeSlot) return;

    const year = new Date().getFullYear();
    const randomProtocol = `AGEND-LRN-${year}-${Math.floor(100000 + Math.random() * 900000)}`;

    setBookingConfirmed({
      protocol: randomProtocol,
      date,
      time: timeSlot,
      service: selectedService,
      name: fullName,
    });
  };

  const handlePrint = () => {
    window.print();
  };

  const handleResetAndClose = () => {
    setBookingConfirmed(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
      <div 
        className="bg-white border border-stone-300 rounded-sm shadow-2xl max-w-xl w-full max-h-[90vh] overflow-y-auto"
        role="dialog"
        aria-modal="true"
        aria-labelledby="appointment-title"
      >
        
        {/* Modal Header */}
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
              <h3 id="appointment-title" className="font-serif font-bold text-lg text-[#212529]">
                Agendamento de Atendimento Presencial
              </h3>
              <p className="text-[11px] text-[#4A4A4A]">
                Registro Civil de Lorena · Titular: {CARTORIO_INFO.oficialResponsavel}
              </p>
            </div>
          </div>

          <button
            onClick={handleResetAndClose}
            className="p-1.5 text-stone-500 hover:text-[#212529] hover:bg-stone-200 rounded-sm transition-colors cursor-pointer"
            aria-label="Fechar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {bookingConfirmed ? (
            /* Confirmation Voucher Screen */
            <div className="space-y-6">
              <div className="text-center space-y-2">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-full mx-auto flex items-center justify-center">
                  <CheckCircle className="w-7 h-7" />
                </div>
                <h4 className="font-serif text-2xl font-bold text-[#212529]">
                  Atendimento Agendado com Sucesso!
                </h4>
                <p className="text-xs text-[#4A4A4A]">
                  Guarde o número de protocolo ou imprima este comprovante para apresentar na recepção do cartório.
                </p>
              </div>

              {/* Voucher Box */}
              <div className="border border-stone-300 bg-[#F4F5F7] p-5 rounded-sm space-y-3 text-xs">
                <div className="flex justify-between items-center pb-3 border-b border-stone-300">
                  <span className="text-stone-500 uppercase tracking-wider font-semibold text-[10px]">
                    Protocolo de Agendamento
                  </span>
                  <span className="font-mono font-bold text-sm text-[#A63D5C]">
                    {bookingConfirmed.protocol}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3 text-[#212529]">
                  <div>
                    <span className="text-stone-500 block">Cidadão:</span>
                    <strong className="text-xs">{bookingConfirmed.name}</strong>
                  </div>
                  <div>
                    <span className="text-stone-500 block">Serviço:</span>
                    <strong className="text-xs">{bookingConfirmed.service}</strong>
                  </div>
                  <div>
                    <span className="text-stone-500 block">Data:</span>
                    <strong className="text-xs font-mono">{bookingConfirmed.date}</strong>
                  </div>
                  <div>
                    <span className="text-stone-500 block">Horário:</span>
                    <strong className="text-xs font-mono">{bookingConfirmed.time}</strong>
                  </div>
                </div>

                <div className="pt-2 border-t border-stone-300 text-[11px] text-stone-600">
                  <p><strong>Local:</strong> {CARTORIO_INFO.endereco} - Centro, Lorena - SP</p>
                  <p className="mt-1 text-stone-500">
                    * Recomenda-se comparecer com 10 minutos de antecedência munido de documento de identificação original e comprovante de residência.
                  </p>
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={handlePrint}
                  className="px-4 py-2 text-xs font-semibold text-[#212529] bg-[#F4F5F7] hover:bg-stone-200 border border-stone-300 rounded-sm flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Printer className="w-3.5 h-3.5 text-[#A63D5C]" />
                  <span>Imprimir Comprovante</span>
                </button>
                <button
                  type="button"
                  onClick={handleResetAndClose}
                  className="px-5 py-2 text-xs font-semibold text-white bg-[#A63D5C] hover:bg-[#872e47] rounded-sm transition-colors cursor-pointer"
                >
                  Concluir
                </button>
              </div>
            </div>
          ) : (
            /* Booking Form */
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              
              <div>
                <label className="block font-medium text-[#212529] mb-1">
                  Selecione o Serviço Desejado *
                </label>
                <select
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="w-full p-2.5 bg-[#F4F5F7] border border-stone-300 rounded-sm focus:border-[#A63D5C] outline-none"
                >
                  {SERVICES_LIST.map((s) => (
                    <option key={s.id} value={s.title}>
                      {s.title} ({s.costInfo})
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-medium text-[#212529] mb-1">
                    Data do Agendamento *
                  </label>
                  <input
                    type="date"
                    required
                    min={minDateStr}
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full p-2.5 bg-[#F4F5F7] border border-stone-300 rounded-sm focus:border-[#A63D5C] outline-none font-mono"
                  />
                  <span className="text-[10px] text-stone-500">Dias úteis (Segunda a Sexta)</span>
                </div>

                <div>
                  <label className="block font-medium text-[#212529] mb-1">
                    Horário Disponível *
                  </label>
                  <select
                    value={timeSlot}
                    onChange={(e) => setTimeSlot(e.target.value)}
                    className="w-full p-2.5 bg-[#F4F5F7] border border-stone-300 rounded-sm focus:border-[#A63D5C] outline-none font-mono"
                  >
                    {availableSlots.map((slot) => (
                      <option key={slot} value={slot}>
                        {slot} horas
                      </option>
                    ))}
                  </select>
                  <span className="text-[10px] text-stone-500">Tolerância de 15 minutos</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-medium text-[#212529] mb-1">
                    Nome Completo do Titular / Requerente *
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Seu nome completo"
                    className="w-full p-2.5 bg-[#F4F5F7] border border-stone-300 rounded-sm focus:border-[#A63D5C] outline-none"
                  />
                </div>

                <div>
                  <label className="block font-medium text-[#212529] mb-1">
                    CPF *
                  </label>
                  <input
                    type="text"
                    required
                    value={cpf}
                    onChange={(e) => setCpf(e.target.value)}
                    placeholder="000.000.000-00"
                    className="w-full p-2.5 bg-[#F4F5F7] border border-stone-300 rounded-sm focus:border-[#A63D5C] outline-none font-mono"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-medium text-[#212529] mb-1">
                    Telefone Celular / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="(12) 90000-0000"
                    className="w-full p-2.5 bg-[#F4F5F7] border border-stone-300 rounded-sm focus:border-[#A63D5C] outline-none font-mono"
                  />
                </div>

                <div>
                  <label className="block font-medium text-[#212529] mb-1">
                    E-mail para Confirmação
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="seu.email@exemplo.com"
                    className="w-full p-2.5 bg-[#F4F5F7] border border-stone-300 rounded-sm focus:border-[#A63D5C] outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block font-medium text-[#212529] mb-1">
                  Observações ou Documentos Específicos (Opcional)
                </label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Caso queira adiantar detalhes do caso (ex: noivos divorciados, reconhecimento por escritura)..."
                  className="w-full p-2.5 bg-[#F4F5F7] border border-stone-300 rounded-sm focus:border-[#A63D5C] outline-none resize-none"
                ></textarea>
              </div>

              <div className="pt-3 border-t border-stone-200 flex items-center justify-between">
                <span className="text-[11px] text-stone-500">
                  Agendamento sem custo adicional.
                </span>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-4 py-2 text-stone-600 hover:text-[#212529] font-medium cursor-pointer"
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2.5 bg-[#A63D5C] hover:bg-[#872e47] text-white font-semibold rounded-sm transition-colors cursor-pointer shadow-xs"
                  >
                    Confirmar Agendamento
                  </button>
                </div>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
};
