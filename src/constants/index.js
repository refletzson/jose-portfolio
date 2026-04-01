export const WHATSAPP_NUMBER = '5594991095263'
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`
export const WHATSAPP_MESSAGE = encodeURIComponent(
  'Olá, Jose! Vi seu portfólio e gostaria de saber mais sobre o desenvolvimento de um site para meu negócio.'
)
export const WHATSAPP_LINK = `${WHATSAPP_URL}?text=${WHATSAPP_MESSAGE}`

export const INSTAGRAM_HANDLE = 'jose_bandelra'
export const INSTAGRAM_URL = `https://instagram.com/${INSTAGRAM_HANDLE}`

export const PROJECTS = [
  {
    id: 1,
    title: 'Site para Restaurante',
    description:
      'Landing page moderna com cardápio digital, galeria de fotos e integração com WhatsApp para reservas.',
    tags: ['Landing Page', 'Responsivo', 'WhatsApp'],
    image: 'https://api.microlink.io/?url=https://mg-steak-house.vercel.app/&screenshot=true&meta=false&embed=screenshot.url',
    url: 'https://mg-steak-house.vercel.app/',
  },
  {
    id: 2,
    title: 'Site para Clínica',
    description:
      'Site profissional com agendamento online, apresentação de serviços e depoimentos de pacientes.',
    tags: ['Site Institucional', 'Agendamento', 'SEO'],
    image: 'https://api.microlink.io/?url=https://vivace-clinic-site.lovable.app/&screenshot=true&meta=false&embed=screenshot.url',
    url: 'https://vivace-clinic-site.lovable.app/#',
  },
  {
    id: 3,
    title: 'E-commerce de Moda',
    description:
      'Loja virtual completa com catálogo de produtos, carrinho de compras e checkout simplificado.',
    tags: ['E-commerce', 'Loja Virtual', 'Pagamentos'],
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&q=80',
    url: '#',
  },
]

export const SERVICES = [
  {
    icon: 'globe',
    title: 'Desenvolvimento de Sites',
    description:
      'Sites profissionais, modernos e responsivos feitos sob medida para o seu negócio. Do design à entrega, cuidado em cada detalhe.',
    features: [
      'Design moderno e personalizado',
      'Totalmente responsivo (mobile, tablet e desktop)',
      'Otimizado para SEO e velocidade',
      'Integração com WhatsApp e redes sociais',
      'Painel de administração (quando necessário)',
    ],
  },
  {
    icon: 'shield',
    title: 'Plano de Manutenção Mensal',
    description:
      'Mantenha seu site sempre atualizado, seguro e no ar com suporte dedicado todos os meses.',
    features: [
      'Hospedagem inclusa',
      'Atualizações e ajustes de conteúdo',
      'Suporte técnico prioritário',
      'Backup automático',
      'Monitoramento de desempenho',
    ],
    badge: 'Opcional',
  },
]
