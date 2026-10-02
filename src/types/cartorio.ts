export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  icon: string;
  badge?: string;
  legalBasis: string;
  estimatedTime: string;
  costInfo: string;
  isFree?: boolean;
  requiredDocuments: string[];
  steps: string[];
}

export interface EmolumentItem {
  id: string;
  code: string;
  description: string;
  category: 'certidoes' | 'casamento' | 'notas' | 'outros';
  officialFee: number; // Oficial
  stateFee: number; // Estado
  ipespFee: number; // Ipesp
  sinoregFee: number; // Registro Civil
  tjFee: number; // TJSP
  mpFee: number; // MP / Santa Casa
  totalFee: number; // Total ao cidadão
  isFreeCondition?: string;
  legalNote: string;
}

export interface AppointmentData {
  serviceId: string;
  serviceName: string;
  fullName: string;
  cpf: string;
  email: string;
  phone: string;
  date: string;
  timeSlot: string;
  notes?: string;
}

export interface CertificateRequestData {
  certificateType: 'nascimento' | 'casamento' | 'obito';
  registryFormat: 'breve_relato' | 'inteiro_teor';
  deliveryMode: 'digital' | 'balcao' | 'correios';
  registeredPersonName: string;
  birthOrEventDate: string;
  bookNumber?: string;
  sheetNumber?: string;
  termNumber?: string;
  filiationNames?: string;
  requesterName: string;
  requesterCpf: string;
  requesterPhone: string;
  requesterEmail: string;
}
