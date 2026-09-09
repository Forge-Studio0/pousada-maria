import { WHATSAPP_LINKS } from '../data/content';

export function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_LINKS.falar}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com a Pousada do Tchurray e da Maria pelo WhatsApp"
      className="wa-float fixed bottom-5 right-5 z-[60] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-forest-deep/30 transition-transform duration-300 hover:scale-110 md:bottom-6 md:right-6"
    >
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm5.5 14.1c-.2.7-1.3 1.3-1.9 1.4-.5 0-1.1.2-3.6-.8-3-1.2-5-4.3-5.1-4.5-.2-.2-1.3-1.7-1.3-3.2s.8-2.3 1.1-2.6c.3-.3.6-.4.8-.4h.6c.2 0 .4 0 .6.5s.8 1.9.8 2c.1.1.1.3 0 .5l-.3.5c-.1.2-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1.1 2.2 1.4 2.5 1.5.3.1.5.1.7-.1l1-1.2c.2-.3.4-.2.7-.1l1.9.9c.3.1.5.2.5.3 0 .1 0 .6-.2 1.3z" />
      </svg>
    </a>
  );
}
