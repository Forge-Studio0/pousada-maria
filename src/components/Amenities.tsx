import { Reveal } from './Reveal';

type Item = {
  number: string;
  title: string;
  description: string;
  image: { src: string; alt: string };
};

const ITEMS: Item[] = [
  {
    number: '01',
    title: 'Acomodações',
    description:
      'Quartos climatizados e camas preparadas para um bom descanso — o essencial para quem passa o dia na região e volta para dormir bem.',
    image: {
      src: '/images/quartos.jpg',
      alt: 'Quarto da pousada com camas de solteiro, lençóis azuis e ar-condicionado',
    },
  },
  {
    number: '02',
    title: 'Piscina e área externa',
    description:
      'Piscina, varanda sombreada e plantas por todos os cantos: a área externa foi feita para aproveitar o clima do interior ao longo do dia.',
    image: {
      src: '/images/piscina-area-externa.jpg',
      alt: 'Corredor externo ao lado da piscina da pousada, com sombrite azul e plantas',
    },
  },
  {
    number: '03',
    title: 'Espaço para refeições',
    description:
      'Um salão amplo e ventilado, com mesa grande para reunir o grupo e janelas que trazem a luz natural lá de fora.',
    image: {
      src: '/images/refeicoes.jpg',
      alt: 'Salão de refeições da pousada com mesa comprida branca e cadeiras de madeira',
    },
  },
  {
    number: '04',
    title: 'Churrasqueira',
    description:
      'Churrasqueira de alvenaria em ambiente integrado à área de lazer — o cenário certo para um churrasco no fim da tarde.',
    image: {
      src: '/images/churrasqueira.jpg',
      alt: 'Área da churrasqueira da pousada com vista para a piscina',
    },
  },
  {
    number: '05',
    title: 'Estacionamento',
    description:
      'Acesso tranquilo e espaço para estacionar dentro da propriedade, com portão de correr e área coberta.',
    image: {
      src: '/images/fachada.jpg',
      alt: 'Fachada da pousada com portão preto, garagem e jardim frontal',
    },
  },
];

export function Amenities() {
  return (
    <section id="estrutura" className="bg-sand-dark/40 py-24 sm:py-32">
      <div className="mx-auto max-w-shell px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Estrutura</p>
          <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-forest sm:text-5xl">
            Feita para dias de descanso — e de rio
          </h2>
          <p className="mt-5 text-base leading-relaxed text-forest/75 sm:text-lg">
            Cada ambiente da pousada foi pensado para o ritmo de quem viaja pelo interior:
            descansar bem, circular com calma e aproveitar o grupo.
          </p>
        </Reveal>

        <div className="mt-16 flex flex-col gap-20 sm:gap-28">
          {ITEMS.map((item, i) => {
            const reversed = i % 2 === 1;
            return (
              <div
                key={item.number}
                className="grid items-center gap-8 lg:grid-cols-12 lg:gap-14"
              >
                <Reveal className={`lg:col-span-7 ${reversed ? 'lg:order-2' : ''}`}>
                  <figure className="group relative overflow-hidden rounded-2xl">
                    <img
                      src={item.image.src}
                      alt={item.image.alt}
                      loading="lazy"
                      decoding="async"
                      className="aspect-[16/10] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    />
                  </figure>
                </Reveal>
                <div className={`lg:col-span-5 ${reversed ? 'lg:order-1' : ''}`}>
                  <Reveal delay={120}>
                    <span className="font-display text-5xl font-medium text-gold/80" aria-hidden="true">
                      {item.number}
                    </span>
                    <h3 className="mt-3 font-display text-2xl font-semibold text-forest sm:text-3xl">
                      {item.title}
                    </h3>
                    <p className="mt-4 max-w-md text-base leading-relaxed text-forest/75">
                      {item.description}
                    </p>
                  </Reveal>
                </div>
              </div>
            );
          })}
        </div>

        {/* Destaque de pesca — sem foto, apenas tipografia */}
        <Reveal className="mt-24">
          <div className="relative overflow-hidden rounded-2xl bg-forest px-8 py-14 text-center sm:px-16">
            <svg
              className="pointer-events-none absolute inset-x-0 bottom-4 h-10 w-full text-sand/10"
              viewBox="0 0 1200 40"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path d="M0 25c100-18 200 18 300 0s200 18 300 0 200 18 300 0 200 18 300 0" stroke="currentColor" strokeWidth="3" fill="none" />
              <path d="M0 35c100-18 200 18 300 0s200 18 300 0 200 18 300 0 200 18 300 0" stroke="currentColor" strokeWidth="2" fill="none" />
            </svg>
            <p className="eyebrow">Pescaria raiz</p>
            <h3 className="mx-auto mt-4 max-w-2xl font-display text-2xl font-semibold leading-snug text-sand sm:text-4xl">
              A pesca está no centro da experiência
            </h3>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-sand/75 sm:text-lg">
              Itapura é um dos endereços da pesca esportiva do interior paulista — e a pousada
              entende desse jeito de viajar. Traga seu equipamento e conte com uma base confortável
              para os dias de rio.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
