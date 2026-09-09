// ---------------------------------------------------------------
// Conteúdo central da página — edite textos e links aqui.
// ---------------------------------------------------------------

export const WHATSAPP_NUMBER = '5511961868166';

export const WHATSAPP_LINKS = {
  reservar: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    'Olá! Gostaria de reservar uma hospedagem na Pousada do Tchurray e da Maria.',
  )}`,
  disponibilidade: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    'Olá! Gostaria de consultar a disponibilidade na Pousada do Tchurray e da Maria.',
  )}`,
  falar: `https://wa.me/${WHATSAPP_NUMBER}`,
};

export const INSTAGRAM_URL = 'https://www.instagram.com/pousada_do_tchurray';
export const INSTAGRAM_HANDLE = '@pousada_do_tchurray';

export const NAV_LINKS = [
  { label: 'Início', href: '#inicio' },
  { label: 'A Pousada', href: '#pousada' },
  { label: 'Estrutura', href: '#estrutura' },
  { label: 'Itapura', href: '#itapura' },
  { label: 'Galeria', href: '#galeria' },
  { label: 'Reservas', href: '#reservas' },
];

export type GalleryImage = {
  src: string;
  alt: string;
  caption: string;
};

export const GALLERY_IMAGES: GalleryImage[] = [
  {
    src: '/images/fachada.jpg',
    alt: 'Fachada branca da Pousada do Tchurray e da Maria, com portão preto, telhado claro e jardim frontal',
    caption: 'Fachada da pousada',
  },
  {
    src: '/images/quartos.jpg',
    alt: 'Quarto da pousada com camas de solteiro, lençóis azuis, cortina e ar-condicionado',
    caption: 'Acomodações',
  },
  {
    src: '/images/piscina-area-externa.jpg',
    alt: 'Corredor externo ao lado da piscina da pousada, com sombrite azul, plantas e vaga de estacionamento',
    caption: 'Piscina e área externa',
  },
  {
    src: '/images/refeicoes.jpg',
    alt: 'Salão de refeições da pousada com mesa comprida branca e cadeiras de madeira',
    caption: 'Espaço para refeições',
  },
  {
    src: '/images/churrasqueira.jpg',
    alt: 'Área da churrasqueira da pousada com vista para a piscina',
    caption: 'Churrasqueira',
  },
];
