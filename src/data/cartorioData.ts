import { ServiceItem, EmolumentItem } from '../types/cartorio';

export const CARTORIO_INFO = {
  nomeOficial: "Oficial de Registro Civil das Pessoas Naturais e de Interdições e Tutelas",
  cidade: "Lorena",
  uf: "SP",
  comarca: "Comarca de Lorena - SP",
  oficialResponsavel: "Fabio Montealbano",
  substituto: "Ana Carolina",
  cns: "11.234-5",
  cnpj: "50.123.456/0001-78",
  endereco: "Rua Professor Frederico da Silva Ramos, 189, Lojas A e B",
  bairro: "Centro",
  cep: "12600-010",
  pontoReferencia: "Centro de Lorena - SP",
  telefone: "(12) 3152-4896",
  whatsapp: "(12) 3152-4896",
  emailOficial: "orcpnlorena@uol.com.br",
  emailLGPD: "orcpnlorena@uol.com.br",
  emailOuvidoria: "orcpnlorena@uol.com.br",
  logoUrl: "/logo_cartorio.png",
  logoFallbackUrl: "https://lh3.googleusercontent.com/d/17mhw373vrcdrPR3YbKcMnvVmxKAxjtRT",
  horarioAtendimento: "Segunda a Sexta-feira, das 09:00 às 17:00 (ininterrupto)",
  plantaoObito: "Sábados, Domingos e Feriados das 08:00 às 17:00 (Plantão ininterrupto)",
  telefonePlantao: "(12) 3152-4896",
  crcNacionalUrl: "https://www.registrocivil.org.br",
  tjspUrl: "https://www.tjsp.jus.br",
};

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: "nascimento",
    title: "Registro de Nascimento",
    category: "Cidadania Inicial",
    shortDescription: "O primeiro e mais fundamental documento do cidadão. 1ª via 100% gratuita por lei federal com emissão do CPF no ato.",
    fullDescription: "O registro de nascimento é a porta de entrada para a cidadania. Deve ser realizado preferencialmente no lugar do parto ou na residência dos pais. A 1ª via da certidão é gratuita por garantia constitucional (Lei nº 9.534/97) e já inclui a inscrição automática no Cadastro de Pessoas Físicas (CPF).",
    icon: "Baby",
    badge: "1ª Via Gratuita",
    legalBasis: "Lei nº 6.015/73 (LRP, art. 50) e Lei nº 9.534/97",
    estimatedTime: "Imediato no balcão (após conferência de DNV)",
    costInfo: "Gratuito (1ª via) / Isenção garantida pela Constituição",
    isFree: true,
    requiredDocuments: [
      "Declaração de Nascido Vivo (DNV) original emitida pela maternidade ou hospital",
      "Documento de identificação oficial com foto dos genitores (RG, CNH, Passaporte ou Carteira de Trabalho)",
      "Certidão de Casamento dos pais (se casados)",
      "Comprovante de residência dos genitores",
      "Se os pais não forem casados, presença do pai para reconhecimento voluntário ou declaração com firma reconhecida"
    ],
    steps: [
      "Compareça ao Cartório portando a DNV amarela original",
      "Apresente documentos de identidade válidos e originais",
      "Conferência de dados, filiação e avós",
      "Lavratura do assento no Livro A e assinatura",
      "Entrega imediata da Certidão de Nascimento com CPF impresso"
    ]
  },
  {
    id: "casamento",
    title: "Casamento Civil & União Estável",
    category: "Família",
    shortDescription: "Habilitação de casamento civil, casamento religioso com efeito civil, união estável e conversão.",
    fullDescription: "Celebração do casamento civil no cartório ou fora dele (diligência), além de habilitação para casamento religioso com efeitos civis e conversão de união estável em casamento, garantindo plena segurança jurídica ao patrimônio e à família.",
    icon: "HeartHandshake",
    legalBasis: "Código Civil Brasileiro (arts. 1.511 a 1.542) e Provimentos CNJ / CGJ-SP",
    estimatedTime: "Habilitação em 15 a 30 dias (edital de proclamas)",
    costInfo: "Tabela Oficial TJSP / Isenção para declarados hipossuficientes",
    isFree: false,
    requiredDocuments: [
      "Documento de identidade (RG, CNH ou Passaporte) e CPF de ambos os noivos",
      "Certidão de nascimento atualizada (emitida há menos de 90 dias) para solteiros",
      "Se divorciado(a): certidão de casamento anterior com averbação do divórcio e partilha",
      "Se viúvo(a): certidão de casamento anterior com anotação do óbito e certidão de óbito do cônjuge",
      "Comprovante de residência no município de Lorena",
      "Presença de 2 (duas) testemunhas maiores de 18 anos portando documento de identificação"
    ],
    steps: [
      "Agende a data inicial de habilitação no cartório",
      "Apresentação da documentação completa e assinatura do requerimento com as 2 testemunhas",
      "Publicação do Edital de Proclamas (prazo legal de 15 dias)",
      "Emissão do certificado de habilitação",
      "Realização da solene cerimônia de casamento civil na data agendada"
    ]
  },
  {
    id: "obito",
    title: "Registro de Óbito",
    category: "Atos Finais",
    shortDescription: "Declaração de óbito, emissão da certidão e guia de sepultamento. Atendimento ininterrupto com plantão.",
    fullDescription: "O registro de óbito confere segurança jurídica ao encerramento da personalidade civil, possibilitando a expedição da guia de sepultamento/cremação e o posterior inventário. O ato e a primeira via são estritamente gratuitos por lei, e o cartório mantém plantão de atendimento ininterrupto.",
    icon: "ScrollText",
    badge: "Plantão Ininterrupto",
    legalBasis: "Lei nº 6.015/73 (arts. 77 a 88) e Provimento CNJ nº 149/2023",
    estimatedTime: "Imediato no atendimento de plantão",
    costInfo: "Gratuito (1ª via constitucional)",
    isFree: true,
    requiredDocuments: [
      "Declaração de Óbito (DO) original fornecida e assinada por médico ou IML/SVO",
      "Documentos do falecido: RG, CPF, Certidão de Nascimento ou Casamento, Título de Eleitor, Cartão SUS e PIS/PASEP/Benefício INSS",
      "Documento oficial de identificação com foto do(a) declarante (familiar mais próximo)",
      "Informações sobre existência de bens a inventariar, filhos e local de sepultamento"
    ],
    steps: [
      "Compareça ao Cartório (ou acione o plantão caso seja fim de semana/feriado)",
      "Entrega da via amarela da Declaração de Óbito (DO)",
      "Declaração perante o Oficial com prestação das informações obrigatórias",
      "Lavratura imediata do assento no Livro C",
      "Expedição da Certidão de Óbito e Guia Oficial de Sepultamento"
    ]
  },
  {
    id: "certidoes",
    title: "Segunda Via de Certidões",
    category: "Serviços Digitais & Físicos",
    shortDescription: "Emissão de 2ª via de Nascimento, Casamento e Óbito em breve relato ou inteiro teor, física ou eletrônica via CRC.",
    fullDescription: "Emissão de segundas vias atualizadas de registros lavrados em Lorena ou em qualquer outro cartório do Brasil através da Central de Informações do Registro Civil (CRC Nacional). Disponível nos formatos Breve Relato ou Inteiro Teor (com histórico completo), tanto em papel moeda oficial quanto em formato digital com assinatura eletrônica qualificada (ICP-Brasil).",
    icon: "FileCheck2",
    badge: "Nacional / Online",
    legalBasis: "Lei nº 6.015/73 e Provimento CNJ nº 149/2023 e nº 213",
    estimatedTime: "Físico em até 24h / Digital até 5 dias úteis",
    costInfo: "Conforme Tabela de Custas do TJSP vigente",
    isFree: false,
    requiredDocuments: [
      "Dados do registro anterior (número do livro, folha, termo) ou nome completo, filiação e data do fato",
      "Documento de identificação do requerente",
      "Para certidões de Inteiro Teor: requerimento formal assinado (modelo disponível no cartório)"
    ],
    steps: [
      "Solicite online ou diretamente no balcão de atendimento",
      "Localização do assento no acervo físico ou no sistema digital",
      "Conferência de averbações e retificações existentes",
      "Emissão do documento com selo de fiscalização digital e QR Code do TJSP",
      "Retirada presencial ou envio em PDF assinado com validade jurídica nacional"
    ]
  },
  {
    id: "reconhecimento",
    title: "Reconhecimento de Firma & Autenticação",
    category: "Notas & Eficácia",
    shortDescription: "Abertura de ficha de firma, reconhecimento por semelhança e autenticidade, e autenticação física e digital.",
    fullDescription: "Atribuição de autenticidade e fé pública a assinaturas e cópias de documentos. Inclui abertura e atualização de cartão de autógrafo (ficha de firma), reconhecimento de firma por semelhança (confronto de traços) ou por autenticidade (assinatura presencial com biometria), e autenticação física e eletrônica de documentos.",
    icon: "ShieldCheck",
    legalBasis: "Lei Estadual de Custas SP e Código de Normas da Corregedoria Geral da Justiça",
    estimatedTime: "Realizado no mesmo ato presencial",
    costInfo: "Valores fixados pelo TJSP por assinatura / página",
    isFree: false,
    requiredDocuments: [
      "Documento original a ser autenticado (sem rasuras ou adulterações)",
      "Para reconhecimento de firma: documento de identidade oficial original, recente e em bom estado (RG, CNH)",
      "CPF regular perante a Receita Federal do Brasil"
    ],
    steps: [
      "Apresente-se com o documento no setor de reconhecimento e notas",
      "Abertura ou conferência da ficha de firma e biometria",
      "Aposição do selo digital do TJSP e carimbo oficial",
      "Assinatura e rubrica do preposto autorizado",
      "Devolução imediata do documento chancelado com fé pública"
    ]
  },
  {
    id: "livro_e",
    title: "Livro E, Cidadania & Retificações",
    category: "Direito Civil Especial",
    shortDescription: "Alteração de prenome e gênero (Lei 14.382), emancipação, interdição, tutela e transcrição de registro estrangeiro.",
    fullDescription: "Atos especiais da vida civil registrados no Livro E: alterações administrativas de nome e gênero conforme Lei Federal nº 14.382/2022 sem necessidade de processo judicial, transcrições de certidões lavradas no exterior (consulados brasileiros), escrituras de emancipação, sentenças de interdição, tutela e opção de nacionalidade.",
    icon: "Scale",
    legalBasis: "Lei Federal nº 14.382/2022, Lei nº 6.015/73 e Provimentos CNJ",
    estimatedTime: "De 5 a 15 dias úteis (conforme complexidade)",
    costInfo: "Conforme Tabela TJSP / Isenção legal para hipossuficientes",
    isFree: false,
    requiredDocuments: [
      "Certidões de nascimento/casamento atualizadas",
      "Certidões negativas da Justiça Estadual, Federal, Eleitoral e Militar",
      "Certidões dos cartórios de protestos",
      "Documento de identificação e comprovante de residência em Lorena",
      "Requerimento específico preenchido e assinado perante o Oficial"
    ],
    steps: [
      "Agende uma consulta prévia no balcão de orientação jurídica do cartório",
      "Apresentação das certidões negativas e documentação exigida pela norma do CNJ",
      "Análise e qualificação registral pelo Oficial Registrador",
      "Lavratura da alteração no livro competente",
      "Comunicação oficial aos órgãos de identificação pública (Polícia Civil, Receita, TRE)"
    ]
  }
];

export const EMOLUMENTS_TABLE: EmolumentItem[] = [
  {
    id: "emol-1",
    code: "01.01",
    category: "certidoes",
    description: "Certidão de Registro Civil em Breve Relato (Nascimento, Casamento ou Óbito)",
    officialFee: 26.50,
    stateFee: 7.53,
    ipespFee: 5.15,
    sinoregFee: 1.32,
    tjFee: 2.91,
    mpFee: 1.59,
    totalFee: 45.00,
    legalNote: "Valor padrão unitário fixado pelo Tribunal de Justiça do Estado de São Paulo para certidões com busca simples."
  },
  {
    id: "emol-2",
    code: "01.02",
    category: "certidoes",
    description: "Certidão de Registro Civil em Inteiro Teor (Reprodução verbum ad verbum)",
    officialFee: 39.80,
    stateFee: 11.31,
    ipespFee: 7.74,
    sinoregFee: 1.99,
    tjFee: 4.38,
    mpFee: 2.38,
    totalFee: 67.60,
    legalNote: "Exige requerimento formal assinado pelo titular ou interessado com interesse legítimo."
  },
  {
    id: "emol-3",
    code: "01.03",
    category: "certidoes",
    description: "Primeira via de Certidão de Nascimento ou Óbito",
    officialFee: 0.00,
    stateFee: 0.00,
    ipespFee: 0.00,
    sinoregFee: 0.00,
    tjFee: 0.00,
    mpFee: 0.00,
    totalFee: 0.00,
    isFreeCondition: "100% Gratuito por determinação da Constituição Federal (Art. 5º, LXXVI) e Lei Federal nº 9.534/97.",
    legalNote: "Gratuidade incondicional para todo cidadão brasileiro."
  },
  {
    id: "emol-4",
    code: "02.01",
    category: "casamento",
    description: "Habilitação e Celebração de Casamento Civil em Cartório",
    officialFee: 298.50,
    stateFee: 84.85,
    ipespFee: 58.05,
    sinoregFee: 14.92,
    tjFee: 32.84,
    mpFee: 17.91,
    totalFee: 507.07,
    isFreeCondition: "Isenção total mediante declaração de hipossuficiência econômica firmada pelos noivos (Art. 1.512 do Código Civil).",
    legalNote: "Inclui processo de habilitação, edital de proclamas, cerimônia civil e 1ª certidão de casamento."
  },
  {
    id: "emol-5",
    code: "02.02",
    category: "casamento",
    description: "Casamento Religioso com Efeito Civil (Habilitação prévia e inscrição)",
    officialFee: 298.50,
    stateFee: 84.85,
    ipespFee: 58.05,
    sinoregFee: 14.92,
    tjFee: 32.84,
    mpFee: 17.91,
    totalFee: 507.07,
    legalNote: "Expedição da certidão de habilitação para a autoridade religiosa e posterior termo de inscrição."
  },
  {
    id: "emol-6",
    code: "02.03",
    category: "casamento",
    description: "Conversão de União Estável em Casamento Civil",
    officialFee: 298.50,
    stateFee: 84.85,
    ipespFee: 58.05,
    sinoregFee: 14.92,
    tjFee: 32.84,
    mpFee: 17.91,
    totalFee: 507.07,
    legalNote: "Conforme procedimento previsto na Lei nº 6.015/73 sem necessidade de solenidade presencial."
  },
  {
    id: "emol-7",
    code: "03.01",
    category: "notas",
    description: "Reconhecimento de Firma por Semelhança (por assinatura)",
    officialFee: 5.65,
    stateFee: 1.61,
    ipespFee: 1.10,
    sinoregFee: 0.28,
    tjFee: 0.62,
    mpFee: 0.34,
    totalFee: 9.60,
    legalNote: "Confronto da assinatura com a ficha-padrão de firma arquivada no cartório."
  },
  {
    id: "emol-8",
    code: "03.02",
    category: "notas",
    description: "Reconhecimento de Firma por Autenticidade (CRLV-e / Transferência de Veículo)",
    officialFee: 14.30,
    stateFee: 4.07,
    ipespFee: 2.78,
    sinoregFee: 0.72,
    tjFee: 1.57,
    mpFee: 0.86,
    totalFee: 24.30,
    legalNote: "Exige assinatura presencial perante o tabelião/oficial ou preposto autorizado com biometria."
  },
  {
    id: "emol-9",
    code: "03.03",
    category: "notas",
    description: "Autenticação de Cópia de Documento (por página)",
    officialFee: 3.25,
    stateFee: 0.92,
    ipespFee: 0.63,
    sinoregFee: 0.16,
    tjFee: 0.36,
    mpFee: 0.20,
    totalFee: 5.52,
    legalNote: "Conferência fiel da cópia com o documento original apresentado."
  },
  {
    id: "emol-10",
    code: "04.01",
    category: "outros",
    description: "Procedimento de Alteração de Nome ou Gênero (Lei 14.382/2022)",
    officialFee: 112.40,
    stateFee: 31.95,
    ipespFee: 21.86,
    sinoregFee: 5.62,
    tjFee: 12.36,
    mpFee: 6.74,
    totalFee: 190.93,
    legalNote: "Autuação, qualificação dos documentos e anotações nos livros pertinentes."
  }
];

export const CNJ_PROVIMENTO_213_ITEMS = [
  {
    title: "Transparência Total & Tabela Discriminada",
    desc: "Publicação visível e acessível de todos os emolumentos cobrados, discriminando parcelas do Estado, IPESP, Sinoreg, Tribunal de Justiça e Santa Casa/MP.",
    norma: "Provimento CNJ nº 213/2024 e Código de Normas TJSP"
  },
  {
    title: "LGPD & Proteção de Dados Pessoais",
    desc: "Tratamento de dados pessoais restrito às finalidades legais do registro público, com Encarregado de Dados (DPO) nomeado e canal de atendimento aos titulares.",
    norma: "Lei Federal nº 13.709/2018 e Provimento CNJ nº 149/2023"
  },
  {
    title: "Acessibilidade Universal & Balcão Virtual",
    desc: "Instalações físicas com rampa, sanitário acessível, atendimento prioritário e canal digital de atendimento para cidadãos com deficiência ou mobilidade reduzida.",
    norma: "Lei nº 13.146/2015 e Resolução CNJ nº 401/2021"
  },
  {
    title: "Integração SERP & CRC Nacional",
    desc: "Interligação com o Sistema Eletrônico dos Registros Públicos (SERP) e Central de Informações do Registro Civil para emissão de certidões eletrônicas nacionais.",
    norma: "Lei Federal nº 14.382/2022 e Provimento CNJ"
  }
];

export const FAQ_LIST = [
  {
    q: "Qual o prazo para registrar um bebê recém-nascido?",
    a: "O prazo legal é de até 15 dias após o parto quando feito pelo pai, ou até 60 dias quando a declaração for feita pela mãe em caso de ausência paterna. O registro é 100% gratuito e o bebê já sai com o CPF na certidão."
  },
  {
    q: "Qualquer pessoa pode pedir 2ª via de uma certidão?",
    a: "Sim, para a certidão em Breve Relato (resumo com as informações essenciais). Já para certidões em Inteiro Teor (que transcrevem o livro na íntegra), a legislação exige que o requerente seja o próprio registrado, seu cônjuge, descendente, ascendente ou interessado com justificativa jurídica."
  },
  {
    q: "Como funciona o atendimento nos fins de semana e feriados?",
    a: "O Cartório de Registro Civil de Lorena mantém regime ininterrupto de plantão presencial e telefônico exclusivamente para registros de óbito e autorizações urgentes de sepultamento, das 08h às 17h, pelo telefone de plantão (12) 99762-4412."
  },
  {
    q: "Quem tem direito à gratuidade no casamento civil?",
    a: "Os cidadãos que declararem formalmente a sua hipossuficiência econômica perante o Oficial Registrador têm direito à isenção integral das custas de habilitação e celebração de casamento civil, garantida pelo art. 1.512 do Código Civil Brasileiro."
  }
];
