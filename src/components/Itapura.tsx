import { Reveal } from './Reveal';

type Experience = {
  title: string;
  description: string;
};

const EXPERIENCES: Experience[] = [
  {
    title: 'O fim do Rio Tietê',
    description:
      'Depois de cruzar o estado de ponta a ponta, o Rio Tietê encontra seu fim aqui — em Itapura, na divisa com o Mato Grosso do Sul.',
  },
  {
    title: 'Pesca esportiva',
    description:
      'Rios e represas da região atraem pescadores de todo o país em busca do tucunaré e de outras espécies de água doce.',
  },
  {
    title: 'Observação de aves',
    description:
      'Tucanos, araras e garças costumam colorir a paisagem local — um convite silencioso para olhar devagar.',
  },
  {
    title: 'Cachoeiras e banhos de rio',
    description:
      'Nas proximidades, quedas d’água e balneários naturais refrescam os dias mais quentes no interior.',
  },
  {
    title: 'Mergulho no passado',
    description:
      'Os roteiros subaquáticos da região incluem o naufrágio do vapor Tamandathay, afundado no século XIX nos lagos da Usina de Jupiá.',
  },
];

export function Itapura() {
  return (
    <section id="itapura" className="relative overflow-hidden bg-deepblue py-24 sm:py-32">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -left-4 top-6 select-none font-display text-[22vw] font-semibold leading-none text-sand/[0.04] lg:text-[13rem]"
      >
        Itapura
      </span>
      <svg
        className="pointer-events-none absolute -right-10 bottom-0 h-72 w-72 text-sand/[0.05]"
        viewBox="0 0 200 200"
        aria-hidden="true"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <circle cx="100" cy="100" r="90" />
        <circle cx="100" cy="100" r="65" />
        <circle cx="100" cy="100" r="40" />
      </svg>

      <div className="relative mx-auto max-w-shell px-5 sm:px-8">
        <div className="max-w-2xl">
          <Reveal>
            <p className="eyebrow">O destino</p>
            <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-sand sm:text-5xl">
              Descubra Itapura
            </h2>
            <p className="mt-5 text-base leading-relaxed text-sand/75 sm:text-lg">
              No noroeste paulista, Itapura faz parte do chamado Pantanal Paulista: um território
              de águas, mata e vida selvagem à beira do Tietê. É o cenário natural da sua
              hospedagem — e a maior atração da viagem.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {EXPERIENCES.map((exp, i) => (
            <Reveal key={exp.title} delay={(i % 3) * 120}>
              <div className="border-t border-sand/20 pt-6">
                <span className="font-display text-sm italic text-gold" aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-2 font-display text-xl font-semibold text-sand">{exp.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-sand/70 sm:text-base">{exp.description}</p>
              </div>
            </Reveal>
          ))}

          <Reveal delay={240} className="sm:col-span-2 lg:col-span-1">
            <div className="flex h-full flex-col justify-center rounded-2xl bg-gold/10 p-7">
              <p className="font-display text-lg italic leading-snug text-sand sm:text-xl">
                “Não é apenas onde você vai dormir. É o que você pode viver em Itapura.”
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
