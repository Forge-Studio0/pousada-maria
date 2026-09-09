import { Reveal } from './Reveal';
import { WHATSAPP_LINKS } from '../data/content';

export function About() {
  return (
    <section id="pousada" className="relative overflow-hidden bg-sand py-24 sm:py-32">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-8 top-10 select-none font-display text-[11rem] font-semibold leading-none text-forest/[0.045] sm:text-[16rem]"
      >
        &amp;
      </span>

      <div className="mx-auto grid max-w-shell gap-14 px-5 sm:px-8 lg:grid-cols-12 lg:gap-10">
        <div className="relative lg:col-span-6">
          <Reveal className="relative">
            <div className="absolute -left-4 -top-4 h-full w-full rounded-2xl border border-gold/50" aria-hidden="true" />
            <img
              src="/images/quartos.jpg"
              alt="Quarto da Pousada do Tchurray e da Maria com camas de solteiro, lençóis azuis e ar-condicionado"
              className="relative aspect-[4/3] w-full rounded-2xl object-cover"
              loading="lazy"
              decoding="async"
            />
          </Reveal>
          <Reveal delay={150} className="absolute -bottom-8 right-0 hidden w-44 sm:block lg:-right-6">
            <img
              src="/images/piscina-area-externa.jpg"
              alt="Vista da piscina e da área externa da pousada"
              className="aspect-square w-full rounded-2xl border-4 border-sand object-cover shadow-xl"
              loading="lazy"
              decoding="async"
            />
          </Reveal>
        </div>

        <div className="flex flex-col justify-center lg:col-span-5 lg:col-start-8">
          <Reveal>
            <p className="eyebrow">A Pousada</p>
            <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-forest sm:text-5xl">
              Um lugar para desacelerar
            </h2>
          </Reveal>

          <Reveal delay={120}>
            <p className="mt-7 text-base leading-relaxed text-forest/80 sm:text-lg">
              A Pousada do Tchurray e da Maria é um espaço pensado para quem busca tranquilidade,
              conforto e uma experiência acolhedora em Itapura, no interior de São Paulo.
            </p>
            <p className="mt-5 text-base leading-relaxed text-forest/80 sm:text-lg">
              Na cidade que abriga a foz do Rio Tietê, a pousada recebe pescadores, famílias e
              viajantes que querem trocar a correria do dia a dia pela calma de um lugar simples,
              cuidado e genuíno — com a estrutura para descansar bem e a proximidade para aproveitar
              tudo o que a região oferece.
            </p>
          </Reveal>

          <Reveal delay={220}>
            <p className="mt-8 font-display text-xl italic text-olive">Tchurray &amp; Maria</p>
            <a href={WHATSAPP_LINKS.disponibilidade} target="_blank" rel="noopener noreferrer" className="btn-outline-dark mt-8 self-start">
              Consultar disponibilidade
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
