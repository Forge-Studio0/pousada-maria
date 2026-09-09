import { Reveal } from './Reveal';
import { WHATSAPP_LINKS } from '../data/content';

export function BookingCTA() {
  return (
    <section id="reservas" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-forest-deep" aria-hidden="true" />
      <img
        src="/images/fachada.jpg"
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover opacity-25"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-forest-deep via-forest-deep/70 to-forest-deep" aria-hidden="true" />

      <div className="relative mx-auto max-w-shell px-5 py-28 text-center sm:px-8 sm:py-36">
        <Reveal>
          <p className="eyebrow">Reservas</p>
          <h2 className="mx-auto mt-4 max-w-3xl font-display text-3xl font-semibold leading-tight text-sand sm:text-5xl">
            Pronto para conhecer Itapura?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-sand/80 sm:text-lg">
            Entre em contato com a Pousada do Tchurray e da Maria e consulte a disponibilidade
            para sua hospedagem.
          </p>
        </Reveal>

        <Reveal delay={150}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a href={WHATSAPP_LINKS.reservar} target="_blank" rel="noopener noreferrer" className="btn-primary">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm5.5 14.1c-.2.7-1.3 1.3-1.9 1.4-.5 0-1.1.2-3.6-.8-3-1.2-5-4.3-5.1-4.5-.2-.2-1.3-1.7-1.3-3.2s.8-2.3 1.1-2.6c.3-.3.6-.4.8-.4h.6c.2 0 .4 0 .6.5s.8 1.9.8 2c.1.1.1.3 0 .5l-.3.5c-.1.2-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1.1 2.2 1.4 2.5 1.5.3.1.5.1.7-.1l1-1.2c.2-.3.4-.2.7-.1l1.9.9c.3.1.5.2.5.3 0 .1 0 .6-.2 1.3z" />
              </svg>
              Reservar pelo WhatsApp
            </a>
            <a
              href={WHATSAPP_LINKS.falar}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-light"
            >
              Falar com a pousada
            </a>
          </div>
          <p className="mt-6 text-sm text-sand/60">
            Resposta rápida pelo WhatsApp · Itapura — São Paulo
          </p>
        </Reveal>
      </div>
    </section>
  );
}
