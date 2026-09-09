import { WHATSAPP_LINKS } from '../data/content';

export function Hero() {
  return (
    <section id="inicio" className="relative flex min-h-[100svh] items-center overflow-hidden">
      <img
        src="/images/fachada.jpg"
        alt="Fachada da Pousada do Tchurray e da Maria em Itapura, São Paulo"
        className="ken-burns absolute inset-0 h-full w-full object-cover"
        fetchPriority="high"
        decoding="async"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-forest-deep/90 via-forest-deep/60 to-forest-deep/25" aria-hidden="true" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-forest-deep/80 to-transparent" aria-hidden="true" />

      <div className="relative mx-auto w-full max-w-shell px-5 pb-28 pt-36 sm:px-8">
        <p className="hero-animate mb-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-gold" style={{ animationDelay: '0.05s' }}>
          <span className="h-px w-10 bg-gold/70" aria-hidden="true" />
          Pousada do Tchurray e da Maria · Itapura/SP
        </p>

        <h1
          className="hero-animate max-w-3xl font-display text-4xl font-semibold leading-[1.08] text-sand sm:text-6xl lg:text-7xl"
          style={{ animationDelay: '0.15s' }}
        >
          Seu descanso começa em Itapura.
        </h1>

        <p
          className="hero-animate mt-6 max-w-xl text-base leading-relaxed text-sand/85 sm:text-lg"
          style={{ animationDelay: '0.28s' }}
        >
          Conforto, tranquilidade e uma experiência especial no interior de São Paulo.
        </p>

        <div className="hero-animate mt-10 flex flex-wrap items-center gap-4" style={{ animationDelay: '0.4s' }}>
          <a href={WHATSAPP_LINKS.reservar} target="_blank" rel="noopener noreferrer" className="btn-primary">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm5.5 14.1c-.2.7-1.3 1.3-1.9 1.4-.5 0-1.1.2-3.6-.8-3-1.2-5-4.3-5.1-4.5-.2-.2-1.3-1.7-1.3-3.2s.8-2.3 1.1-2.6c.3-.3.6-.4.8-.4h.6c.2 0 .4 0 .6.5s.8 1.9.8 2c.1.1.1.3 0 .5l-.3.5c-.1.2-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1.1 2.2 1.4 2.5 1.5.3.1.5.1.7-.1l1-1.2c.2-.3.4-.2.7-.1l1.9.9c.3.1.5.2.5.3 0 .1 0 .6-.2 1.3z" />
            </svg>
            Reservar pelo WhatsApp
          </a>
          <a href="#pousada" className="btn-outline-light">
            Conhecer a pousada
          </a>
        </div>
      </div>

      <a
        href="#pousada"
        aria-label="Rolar para a seção A Pousada"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-sand/70 transition-colors hover:text-gold md:flex"
      >
        <span className="text-[0.65rem] font-medium uppercase tracking-[0.3em]">Role para explorar</span>
        <svg className="scroll-hint" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M12 5v14M6 13l6 6 6-6" />
        </svg>
      </a>
    </section>
  );
}
