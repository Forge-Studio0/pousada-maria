import { INSTAGRAM_HANDLE, INSTAGRAM_URL, NAV_LINKS, WHATSAPP_LINKS } from '../data/content';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-forest-deep pb-28 pt-16 text-sand/80 md:pb-16">
      <div className="mx-auto max-w-shell px-5 sm:px-8">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="font-display text-2xl font-semibold text-sand">Pousada do Tchurray e da Maria</p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-sand/60">
              Conforto do jeito que pescador gosta — hospedagem acolhedora em Itapura, no
              interior de São Paulo.
            </p>
          </div>

          <nav className="md:col-span-3" aria-label="Navegação do rodapé">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">Navegação</p>
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm transition-colors hover:text-gold">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-4">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">Contato</p>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={WHATSAPP_LINKS.falar}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 text-sm transition-colors hover:text-gold"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm5.5 14.1c-.2.7-1.3 1.3-1.9 1.4-.5 0-1.1.2-3.6-.8-3-1.2-5-4.3-5.1-4.5-.2-.2-1.3-1.7-1.3-3.2s.8-2.3 1.1-2.6c.3-.3.6-.4.8-.4h.6c.2 0 .4 0 .6.5s.8 1.9.8 2c.1.1.1.3 0 .5l-.3.5c-.1.2-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1.1 2.2 1.4 2.5 1.5.3.1.5.1.7-.1l1-1.2c.2-.3.4-.2.7-.1l1.9.9c.3.1.5.2.5.3 0 .1 0 .6-.2 1.3z" />
                  </svg>
                  WhatsApp — reservas e informações
                </a>
              </li>
              <li>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 text-sm transition-colors hover:text-gold"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="2" y="2" width="20" height="20" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
                  </svg>
                  Instagram {INSTAGRAM_HANDLE}
                </a>
              </li>
              <li className="inline-flex items-center gap-2.5 text-sm">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M12 21s-7-5.5-7-11a7 7 0 0 1 14 0c0 5.5-7 11-7 11z" />
                  <circle cx="12" cy="10" r="2.5" />
                </svg>
                Itapura — São Paulo
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-sand/10 pt-7 sm:flex-row">
          <p className="text-xs text-sand/50">© {year} Pousada do Tchurray e da Maria. Todos os direitos reservados.</p>
          <p className="text-xs text-sand/50">Itapura · Rio Tietê · Interior de São Paulo</p>
        </div>
      </div>
    </footer>
  );
}
