export const basicPricingCard = {
  id: 'basicPricingCard',
  price: '$29',
  title: 'Basic',
  description: ['Apenas o conector', <br></br>, 'de API Oficial.'],
  features: [
    {
      id: '1',
      title: 'Conector de API Oficial',
    },
    {
      id: '2',
      title: 'Número aprovado pelo Facebook',
    },
    {
      id: '3',
      title: 'Mensagens ilimitadas',
    },
    {
      id: '4',
      title: 'Histórico de Conversas no CRM',
    },
    {
      id: '5',
      title: 'Múltiplos agentes por número de WhatsApp',
    },
  ],
  buttonLabel: 'Get Basic',
  dark: false,
};

export const proPricingCard = {
  id: 'proPricingCard',
  price: '$49',
  title: 'Pro',
  description: 'Pacote completo do conector/integrador da Br24.',
  features: [
    {
      id: '1',
      title: 'Conector + Integrador Br24',
    },
    {
      id: '2',
      title: 'Automação de mensagens',
    },
    {
      id: '3',
      title: 'Sem necessidade de templates',
    },
    {
      id: '4',
      title: 'Envio e recebimendo de aúdios',
    },
    {
      id: '5',
      title: 'Simplicidade para configuração de novos números',
    },
  ],
  buttonLabel: 'Get Pro',
  dark: true,
};
