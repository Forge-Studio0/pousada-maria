import { useEffect, useState } from 'react';
import { NAV_LINKS, WHATSAPP_LINKS } from '../data/content';

function Logo() {
  return (
    <a href="#inicio" className="group flex items-center gap-3" aria-label="Pousada do Tchurray e da Maria — início">
      <svg width="40" height="40" viewBox="0 0 64 64" aria-hidden="true" className="shrink-0">
        <rect width="64" height="64" rx="14" className="fill-gold transition-colors duration-300 group-hover:fill-sand" />
        <path d="M12 34c6-8 13-11 19-11 8 0 14 5 17 11-3 6-9 11-17 11-6 0-13-3-19-11z" className="fill-forest-deep" />
        <path d="M12 34 5 27v14z" className="fill-forest-deep" />
        <circle cx="42" cy="31" r="2.2" className="fill-gold" />
        <path
          d="M8 51c5-3 9 2 14 0s9 2 14 0 9 2 14 0 9 2 13 1"
          stroke="#F4EFE6"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
        />
      </svg>
      <span className="flex flex-col leading-tight">
        <span className="font-display text-lg font-semibold text-sand">Pousada do Tchurray</span>
        <span className="text-[0.65rem] font-medium uppercase tracking-[0.3em] text-sand/70">e da Maria · Itapura/SP</span>
      </span>
    </a>
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [menuOpen]);

  const solid = scrolled || menuOpen;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        solid ? 'bg-forest-deep/95 shadow-lg shadow-forest-deep/20 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-20 max-w-shell items-center justify-between px-5 sm:px-8">
        <Logo />

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Navegação principal">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-sand/85 transition-colors duration-300 hover:text-gold"
            >
              {link.label}
            </a>
          ))}
          <a
            href={WHATSAPP_LINKS.reservar}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-forest-deep transition-all duration-300 hover:-translate-y-0.5 hover:bg-sand"
          >
            Reservar
          </a>
        </nav>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-sand/30 text-sand lg:hidden"
          aria-expanded={menuOpen}
          aria-controls="menu-mobile"
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            {menuOpen ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Menu mobile */}
      <div
        id="menu-mobile"
        className={`overflow-hidden bg-forest-deep/95 backdrop-blur-md transition-[max-height,opacity] duration-500 lg:hidden ${
          menuOpen ? 'max-h-[26rem] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="flex flex-col gap-1 px-6 pb-6 pt-2" aria-label="Navegação mobile">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="border-b border-sand/10 py-3.5 text-base font-medium text-sand/90 transition-colors hover:text-gold"
            >
              {link.label}
            </a>
          ))}
          <a
            href={WHATSAPP_LINKS.reservar}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="btn-primary mt-4 justify-center"
          >
            Reservar pelo WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
}
